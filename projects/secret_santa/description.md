<compileMeta 
  description="" 
  image="" 
/>
<favicon-emoji>🎄</favicon-emoji>

###### _Tool_ _Progetto personale_

# Simple Secret Santa

## Descrizione 📢

**Simple Secret Santa** permette di creare gli abbinamenti per il babbo natale segreto in modo comodo e veloce, senza la necessità di un login e di email. Inserisci i nomi dei partecipanti e ottieni i link da mandare a ogni amico.

## Come si gioca

Il procedimento è davvero semplice e veloce

1. Entra sul sito e digita i nomi di tutti i partecipanti
2. Premi su "genera" e appariranno una lista di link: uno per ogni giocatore
3. Copia e invia ogni link al giocatore corrispondente tramite Telegram, whatsapp, sms, quello che vuoi

## Contesto 🗺️

Quando si vuole organizzare il babbonatale segreto si hanno due opzioni. Estrarre in modo analogico: con dei semplici bigliettini sperando di non pescare se stessi, o in modo digitale utilizzando una app / sito web.
In questo caso i siti più visitati sono quelli che nella maggior parte dei casi chiedono di registrarsi o inserire le email dei propri amici per comunicare l'esito dell'estrazione.
In questo sistema infatti l'estrazione non avviene in locale: creando quindi la necessita di avere un server e un database, ma tutta questa "sicurezza" è necessaria? Inoltre questa struttura ha un costo, ripagato attraverso la pubblicità sul sito e via mail e con la profilazione e vendita dei dati.

Se ad esempio i nostri amici sono iscritti ad amazon con quella email, potrebbero iniziare a ricevere pubblicità mirate sulla base degli interessi del proprio destinatario del regalo.

## UX/UI

## Come funziona

Se si dà per scontato che al Babbo Segreto ci giochino degli amici e che l'organizzatore non bari, si puo gestire l'estrazione in locale, generando dei link con tutti i dati solamente un po' offuscati

### Estrazione

Una volta inseriti i nomi, lo script crea casualmente gli abbinamenti: ad ognuno è assegnato un babbo segreto (evitando i casi in cui si è assegnati a se stessi).

Per spiegare il funzionamento ipotizziamo di avere una cesta intelligente con dentro i bigliettini con i nomi.  
La cesta passa tra i giocatori e ognuno prende un biglietto.  
Ma durante questa la pesca la cesta intelligente NASCONDE il biglietto con il nome del giocatore corrente per non farglielo pescare.  
Se poi l'ultimo giocatore non trova nessun biglietto, la cesta torna indietro e ricomincia tutto dall'inizio, finche ognuno riesce ad avere un biglietto.

```javascript
function combineMatches(ids, names) {
  // crea una copia di tutti i biglietti (cesta)
  const availableCopy = [...ids];
  const matchesId = {};

  // ripeti per ogni giocatore:
  for (let i = 0; i < ids.length; i++) {
    // giocatore corrente
    const current = ids[i];
    // si "nasconde" il biglietto del giocatore attuale per non farglielo pescare
    const available = availableCopy.filter((n) => n !== current);
    // se non rimangono biglietti si riparte da capo
    if (available.length === 0) {
      return combineMatches(ids, names);
    }
    // altrimenti si pesca
    const randomId = Math.floor(Math.random() * available.length);

    // assegna il biglietto al giocatore corrente
    const matchId = available[randomId];
    matchesId[current] = matchId;

    // rimuovi il biglietto dalla cesta
    const indexRemove = availableCopy.indexOf(matchId);
    availableCopy.splice(indexRemove, 1);

    // passa la cesta al giocatore successivo
  }
}
```

### Generazione del link

Successivamente si riassumono i dati della partita da inviare a ciascun utente:

- la lista di tutti i partecipanti
- il numero che indica il giocatore corrente
- il numero che indica il destinatario del regalo

```javascript
// esempio dei dati per Sil:
const data = [["Sil", "Fede", "Max", "Dome", "Anna"], 0, 1];

// i giocatori sono: Sil, Fede, Max, Dome, Anna
// Babba Segreta: 0 -> Sil
// Destinataria: 1 -> Fede
```

Ora non ci resta che inserire i dati in un link e mandarli:

```javascript
document.location.host + "/reveal/?" + JSON.stringify(data);
```

```
domescala.github.io/secret/reveal/?'[["Sil","Fede","Max","Dome", "Anna"],0,1]'
```

Il link rimanda alla pagina `reveal` che ne legge il contenuto e risale ai dati della partita: lista dei nomi, giocatore corrente e destinatario.

Ma c'è un problema: è fin troppo facile risalire al babbo segreto e al destinatario guardando anche di sfuggita il link. Non è possibile criptare il link in modo infallibile, ma lo si può offuscare abbastanza da renderlo illeggibile.
Il modo piu rapido e semplice è trasformarlo in base64.

In javascript si puo convertire un testo in base64 e viceversa con due funzioni built-in: `btoa()` e `atob()`.  
Il risultato è piu che incomprensibile, ecco alcuni esempi:

```javascript
btoa("ciao");
// "Y2lhbw=="
btoa("girasole");
// "Z2lyYXNvbGU="
btoa("domenico");
// "ZG9tZW5pY28="

atob("ZG9tZW5pY28=");
// "domenico"
```

```javascript
function crypt(array) {
  // trasforma la lista in un testo
  const str = JSON.stringify(array);
  // trasforma il testo in BASE 64
  const base64 = btoa(str);
  return base64;
}
```

```javascript
matches.map((m, index) => {
  const array = [names, index, matches[index].secret.id];
  const secretKey = crypt(array);

  const http = "http://";
  const host = document.location.host;
  const lang = document.location.pathname || "/";
  const link = `${http}${host}${lang}reveal/?${secretKey}`;

  m.secretLink = link;
});
```

Quando si atterra sulla pagina `reveal` si fanno i passaggi inversi, ma con cautela: Dopo ogni passaggio si deve controllare infatti che i dati non siano corrotti

```javascript
function loadGame() {
  // guarda nel link dopo il "?"
  const key = window.location.href.split("?")[1];
  // Se non c'è alcun dato nel link -> ferma tutto
  if (!key) return { error: true };
  // Altrimenti decripta:
  const decrypted = decrypt(key);
  // Errore nella decriptazione? -> ferma tutto
  if (decrypted.error) return { error: true };
  // Controlla se i dati hanno la struttura corretta:
  if (isCorruptedData(decrypted.data)) return { error: true };

  // tutto ok, prosegui
  const names = decrypted.data[0];
  const santaId = decrypted.data[1];
  const secretId = decrypted.data[2];

  const data = {
    names: names,
    santa: names[santaId],
    secret: names[secretId],
  };
  return { data: data, error: false };
}
```

La funzione decriptazione è sostanzialmente l'inverso della funzione crypt(), ma con lo statement try-catch: se succede un piccolo errore l'esecuzione si interrompe senza errori. Questo perché a differenza di prima qui arriviamo da una situazione non controllata: ci aspettiamo che nell'url ci sia un testo base64, che covertito diventa un array, ma nell'url potrebbe esserci di tutto!

Se alla funzione btoa bastava passare un testo qualsiasi, la funzione atob **dà di matto** se gli passiamo un testo che non è in base64. Allo stesso modo `JSON.parse` impazzisce se proviamo fargli convertire il un testo sbagliato.

```javascript
function decrypt(base64) {
  let data = null;
  try {
    // tenta di convertire il testo base64 in testo normale
    let str = atob(base64);
    // tenta di convertire il testo normale nell'array
    array = JSON.parse(str);
    data = array;
  } catch (error) {
    return { error: true };
  }
  // tutto ok
  return { data: data, error: false };
}
```

Se il link era corretto e la decriptazione ha funzionato non ci resta che controllare che i dati siano coerenti:
ci aspettiamo una lista di tre valori: una lista di nomi (stringhe) e due numeri diversi tra zero e la quantità di nomi meno uno.

```javascript
function isCorruptedData(data) {
  return !(
    Array.isArray(data) && // deve essere una lista
    data.length === 3 && // di tre valori
    isArrayString(data[0]) && // il primo elemento è una lista di nomi
    isNumeric(data[1]) && // secondo e terzo elemento sono numeri
    isNumeric(data[2]) &&
    data[1] !== data[2] && // diversi tra loro
    0 <= data[1] && // compresi fra zero
    data[1] < data[0].length && // e la quantità dei nomi
    0 <= data[2] &&
    data[2] < data[0].length
  );
}

function isNumeric(str) {
  if (typeof str == "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function isArrayString(array) {
  return !array.some((e) => typeof e != "string");
}
```
