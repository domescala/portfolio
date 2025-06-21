<style>
  p.--tcw-linear-func{
    margin: 25px auto 0 ;
    width: fit-content;
  }
  p.--tcw-linear-func span{
    background:url("data:image/svg+xml, %3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-width='0.5px' fill='transparent' stroke='black' d='M0 100 L0 100 L22.70 95 L32.30 84 L41.91 92 L47.79 73 L54.41 76 L56.62 52 L61.76 68 L63.97 31 L71.32 67 L72.06 20 L77.21 8 L88.24 1' /%3E%3C/svg%3E") no-repeat;
    height: 136px;
    background-size: contain;
    width: 224px;
    padding: 14px;
    background-position: 12px;
    background-size: 100% calc(100% - 20px);
    border-radius: 10px;
    outline: 1px dashed var(--semidark-background);
    display: block;
  }
.--tcw-backgrounds,
.--tcw-backgrounds-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    width: 100%;
}
.--tcw-backgrounds-2 span,
.--tcw-backgrounds span {
    text-align: center;
    display: block;
    --label-pos: 25px;
    margin: 0 0 20px;
    /* outline: 1px solid black; */
    border-radius: 5px;
    font-size: 1em;
    background-color: #fff;
    background-image: linear-gradient(
    90deg,
    orange 50%,
    transparent 50%
    );
    background-repeat: no-repeat;
    animation: pos-to-end 5s ease infinite alternate-reverse;
    height: 50px;
}
.--tcw-backgrounds-2 span i,
.--tcw-backgrounds span i {
    margin: 0;
    display: block;
    position: relative;
    bottom: -52px;
}

.--tcw-backgrounds span:nth-child(1) {
    --end: 0%;
}
.--tcw-backgrounds span:nth-child(2),
.--tcw-backgrounds-2 span:nth-child(1) {
    --end: 100%;
}
.--tcw-backgrounds span:nth-child(3),
.--tcw-backgrounds-2 span:nth-child(2) {
    --end: 200%;
}
.--tcw-backgrounds-2 span:nth-child(3) {
    --end: 205%;
}

.--tcw-backgrounds-2 span {
    background-image: linear-gradient(
    100deg,
    rgb(73 101 255) 25%,
    rgb(104 144 255) 50%,
    transparent calc(50% + 1px)
    );
}
@keyframes pos-to-end {
    0%,
    30% {
    background-size: 0%;
    }
    70%,
    100% {
    background-size: var(--end);
    }
}

            
</style>

###### *🌐web / Episode Tracker* *Progetto personale*

# Guida galattica agli episodi di The Clone Wars

## Descrizione

Questa guida (non ufficiale) altro non è che un **Episode Tracker** per la serie The Clone Wars, con filtri per ordinare gli episodi, checkbox per tenere traccia di quelli guardati e molto altro.

<p style="display: flex; justify-content: center;">
<video style="width: 100%; max-height: 400px; aspect-ratio: 1; background: #fff;" autoplay loop muted><source src="reel.m4v" type="video/mp4"></video>
</p>

## Contesto 🗺&#xFE0F;

### La Guerra dei Cloni

La serie conta un totale di 133 episodi divisi 7 stagioni ed un film. È stata trasmessa dal 2008 al 2020 e tratta le vicende della famosa Guerra dei Cloni collocata tra ***Episodio Due*** ed ***Episodio Tre***. 



### Star Wars e il disordine cronologico

Inizialmente si trattava di una sorta di antologia, motivo per cui molti episodi non sono stati distribuiti senza seguire l'ordine degli eventi (molto StarWarsiana come cosa). Molti infatti suggeriscono la visione seguendo l'ordine *cronologico* degli eventi, disponibile in una [lista sul sito ufficiale 🔗](https://www.starwars.com/news/star-wars-the-clone-wars-chronological-episodeorder). Gli episodi infatti sono stati pensati per archi narrativi da due o più puntate connesse tra loro. Non tutte portano avanti la trama principale della serie in modo diretto, ma sono comunque interessanti per i temi trattati, i luoghi, i personaggi approfonditi e le sequenze di azione.  
Molti prodotti Star Wars successivi fanno riferimento a personaggi o trame introdotte per la prima volta in *The Clone Wars*, come *The Mandalorian*, *Ahsoka*, *Rebels*, *Rogue One*, *Andor* , *The Bad Batch* (sequel)

### Le guide

A causa della grande quantità di episodi,  l'ordine sparso e il tono a volte infantile della serie, molti abbandonano la serie subito o non la iniziano proprio.  
I fan, per incentivare la visione di questo piccolo capolavoro, hanno creato delle guide suggerendo quali, secondo loro, sono gli archi narrativi più **essenziali** per la trama principale, spiegando caso per caso i motivi. 

## Problema 🚩

Come già detto, le guide raccomandano la visione degli episodi seguendo un preciso ordine, diverso da quello ufficiale, ma sulla piattaforma di DisneyPlus non si puo impostare un ordine personalizzato, si deve cercare episodio per episodio. (Il primo episodio da guardare sarebbe il 16esimo della terza stagione...)

La soluzione più immediata è una lista di link diretti agli episodi. [La pagina ufficiale 🔗](https://www.starwars.com/news/star-wars-the-clone-wars-chronological-episodeorder) fa proprio questo, ma: 

  1. È **un semplice elenco** che contiene solamente il titolo, il link a DisneyPlus e alla guida ufficiale dell'episodio. Non indica gli archi narrativi, quelli consigliati e altre informazioni utili.  
  2. Essendo una pagina "statica" non è possibile **tenere traccia** degli episodi già guardati direttamente lì, occorre salvare l'elenco da qualche parte (un blocco note, o un foglio di calcolo) per contrassegnare gli episodi guardati.

D'altra parte le liste non ufficiali redatte dai fan forniscono un'attenta descrizione degli archi narrativi, evidenziando quali sono quelli essenziali con attente motivazioni, ma:

  1. **Non contengono link** diretti agli episodi .
  2. Come per la guida ufficiale, non offre la possibilità di **tenere traccia** degli episodi guardati.

## Soluzione

La soluzione è un **Episode Tracker** sviluppato in pagina html interattiva, che salva i progressi in locale del browser (utilizzando il localStorage).  
Per ogni episodio si riassumono le informazioni essenziali come titolo, codice dell'episodio, il link DisneyPlus e alla guida ufficiale e soprattutto un checkbox per contrassegnarlo come **guardato**.

### Features:

- 🖼&#xFE0F; Immagine cover di riferimento per ogni episodio
- ⭐ Valutazioni 
- 📈 Suddivisione in archi narrativi con tanto di spiegazioni della rilevanza per la trama principale 
- ▶&#xFE0F; Link allo streaming ufficiale (DisneyPlus)
- 📖 Link alla guida ufficiale dell'episodio
- Scroll automatico al prossimo episodio da guardare appena si apre la pagina
- ☑&#xFE0F; Check "guardato/non guardato"
- ↕️️ Frecce per scorrere all'episodio corrente
- 📊 Filtro per ordinare gli episodio in modo cronologico (per archi narrativi) o per data d'uscita
- 📊 Filtro per mostrare tutti gli episodi o solo quelli considerati essenziali
- 🕹&#xFE0F; Animazioni e feedback nella ui

## Stile e UI-UX

I colori, le animazioni e molti degli elementi del DOM fanno in qualche modo riferimento all'ambientazione di *Star Wars*. 

### Checkbox ingranaggio

Il checkbox per contrassegnare l'episodio come visto ha la forma di un ingranaggio (tipico di *Star Wars*) e ruota su se stesso quando attivato. La forma dell'ingranaggio è l'unione di un cerchio con il bordo spesso e bianco ed uno con il bordo tratteggiato colorato, sovrapposti sull'elemento principale `Element`. 

I due cerchi non sono altro che le pseudo-classi `::after` e `::before` di `Element` mentre il piccolo rettangolo luminoso fa parte invece dello sfondo `background-image` e si muove attraverso la proprietà `background-position`. (I due "cerchi" sono vuoti proprio per poter vedere lo sfondo sottostante).

<p class="interattive-iframe">
<iframe src="./iframe-pages/checkbox.html" style=" max-height: 550px; min-width: 100%; aspect-ratio: 1;"></iframe>
<em>Questo frame è interattivo! Premi sui pulsanti per attivare o per espandere il checkbox</em>
</p>

### Animazione delle campiture

Sia gli slot degli episodi che i pulsanti per i filtri quanto attivati si colorano con una animazione che ricorda l'accensione di una *Spada Laser*. 
<p>
<iframe src="./iframe-pages/slot-episode.html" style="width: 100%; aspect-ratio: 2;"></iframe>
<em>Questo frame è interattivo! Premi sugli slot per vedere l'animazione</em>
</p>

L'animazione segue questi step:

  1. Le scritte e i bordi prendono colore ed emettono del glow con uno sfarfallio, suggerendo l'accensione di qualcosa di potente.
  2. Lo sfondo si colora da sinistra verso destra.
  3. Le scritte diventano bianche.  

Il glow è generato con il filtro `dropshadow` mentre lo sfarfallio è simulato attraverso una funzione lineare altalenante. 
``` css
filter: dropshadow(0 0 10px blue);
transition: filter 1s  linear(0 0%, 0.01 11.76%, 0.08 22.79%, 0.2 27.94%, 0.67 28.68%, 0.31 36.03%, 0.68 38.24%, 0.52 43.38%, 0.76 45.59%, 0.73 52.21%, 0.92 58.09%, 0.84 67.65%, 0.95 77.21%, 1 100%);
```
<p class="--tcw-linear-func">
<span></span>
<em>funzione altalenante</em>
</p>

Lo sfondo del rettangolo invece è un gradiente lineare, inizialmente colorato solo per metà e largo `0%`. L'animazione si baserà sulla proprietà della dimensione, passando da `0%` a `200%` (in modo da superare la metà arrivare alla fine).

``` css
background-image: 
    linear-gradient(
        90deg, 
        orange 50%, 
        transparent 50%);
background-repeat: no-repeat;
background-size: 0%; 
```
<p class="--tcw-backgrounds">
  <span><i>0%</i></span>
  <span><i>100%</i></span>
  <span><i>200%</i></span>
</p>

Aggiungiamo due colori simili per dare una piccola sfumatura ed impostiamo una inclinazione di `100deg` per dare un taglio obliquo allo sfondo. Di conseguenza dovremo spostare la dimensione finale a `205%` e spostiamo il punto del trasparente a `50% + 1px`, sufficiente a rendere più morbido lo sfondo evitando una fastidiosa scalettatura (anti-aliasing).

``` css
background-image: 
    linear-gradient(
        100deg, 
        var(--main) 25%, 
        var(--alt)  50%, 
        transparent calc(50% + 1px));
background-size: 0%; /* spento */
background-size: 205%; /* acceso */
```
<p class="--tcw-backgrounds-2">
  <span><i>100%</i></span>
  <span><i>200%</i></span>
  <span><i>205%</i></span>
</p>

## Sviluppo

Il progetto è stato sviluppato con il framework Vuejs💚. 
La lista degli episodi è generata utilizzando la potentissima **direttiva** `v-for`, che per ogni elemento di un lista genera direttamente i blocchi nel DOM in modo reattivo. Modificando infatti la variabile della lista (con un filtro ad esempio), l'elenco nel DOM si aggiornerà in tempo reale.

Esempio (approssimativo) di come funziona v-for. `list` è un Array di oggetti e ogni oggetto ha un `title`, una `cover`...:

```html
<div v-for="episode in list">
  <p>{{ episode.title }}</p>
  <p>{{ episode.code }}</p>
  <img :src="episode.cover" alt="">
  <a :href="episode.play">Guarda su DisneyPlus</a>
  <a :href="episode.guide">Guida</a>
</div>
```
Se applicassimo la funzione `filter()` su `list`, selezionando ad esempio solo gli episodi essenziali (`episode.must == true`) la direttiva `v-for` aggiornerebbe immediatamente l'elenco di elementi.  
`list` è infatti di tipo `Ref`, una classe reattiva di **vue** per cui ogni sua modifica viene aggiornata in ogni punto del documento.

Esempio di un episodio nella lista `EPISODES`

```js
{
  order: "76",
  id: "4x10",
  arc: 34,
  guide:
    "https://www.starwars.com/tv-shows/clone-wars/carnage-of-krell-episode-guide",
  title: {
    it: "La carneficina di Krell",
    en: "Carnage of Krell"
  },
  play: "https://www.disneyplus.com/video/3ea87b6f-c298-4847-a69d-05d6ec748f59",
  must: true,
  img: "https://...",
  rate: 4,
}
...
```

Il valore di `order` è l'indice dell'episodio nell'ordine cronologico, mentre `id` fa riferimento al codice (stagione)X(episodio). Questo è utilizzato proprio per riordinare seguendo la data d'uscita.  
Il `rate` contiene il giudizio critico, in una scala da 0 a 5.
L'attributo `arc` contiene l'indice dell'arco narrativo di cui fa parte l'episodio. Questi sono raccolti in una seconda lista di oggetti `ARCS`.

Esempio di un arco narrativo nella relativa lista `ARCS`:

```javascript
{
  title: "L'assedio di Umbara",
  episodes: ["4x07", "4x08", "4x09", "4x10"],
  must: 5,
  rate: 4,
  reason:
    'Questo arco è ampiamente considerato <b>essenziale</b> e cruciale per lo sviluppo dei cloni, in particolare di Rex. Sotto il comando del generale Krell si trovano infatti in una situazione morale e militare molto complessa, che mette alla prova le loro lealtà e la loro individualità.',
}
```

Ci sono due tipi di valutazione, quella critica `rate` e quella della rilevanza per la trama `must`. Entrambe esprimono un voto da 0 a 5.
In `reason` si spiega principalmente il motivo della valutazione `must`, raccontando quello che è il contesto degli episodi, personaggi, luoghi ecc ecc, anticipando le relative connessioni con episodi successivi o le serie tv e film successivi.  
Questo paragrafo è importante per **lasciare la libertà all'utente** di scegliere se guardare o ignorare quell'arco narrativo, sulla base dei propri interessi. Ad esempio alcuni potrebbero ritenere noioso un episodio incentrato sulla politica e preferire quelli sui combattimenti, mentre altri sono più interessati magari ad episodi più lenti e strategici. Alcuni sono interessati ad episodi che approfondiscono certi personaggi e luoghi...

#### Compressione

Siccome gli episodi sono 133 e gli archi 52, le due liste occupano molto spazio nel file `episodes-data.js`. Si è quindi pensato di compattare il piu possibile, sostituendo le ripetizioni con delle variabili. 

Ad esempio i link iniziano sempre nello stesso modo:

```javascript
guide: "https://www.disneyplus.com/video/...[id-streaming]",
play: "https://www.starwars.com/tv-shows/clone-wars/...[id-guide]"
```

Se sostituissimo la parte iniziale con una variabile diminuiremmo drasticamente i caratteri ripetutti su tutto il file:

```javascript
guide: a + "...[id-streaming]",
play: b + "...[id-guide]"
```

Tuttavia anche le parole chiave dell'oggetto (`guide`, `play`, `rate`...) sono ripetute in ogni oggetto, quindi 133 volte! Ma non possiamo rinunciare ad avere un oggetto, perché diventerebbe scomodissimo reperire le informazioni. L'idea è quindi trasformare la lista di oggetti in una lista di array e creare l'oggetto in un secondo momento.


```javascript
/* informazioni dell'episodio in un Object */
{
  order: "13",
  id: "1x09",
  arc: 7,
  guide:
    "https://www.starwars.com/tv-shows/clone-wars/cloak-of-darkness-episode-guide",
  title: { it: "Il velo dell'oscurità", en: "Cloak of Darkness" },
  play: "https://www.disneyplus.com/video/96574cf0-9dd5-48f4-9625-545a13cff7db?cid=DTCI-Synergy-DDNrs-US-...",
  must: false,
  img: "https://lumiere-a.akamaihd.net/v1/images/image_17a3b5fc.jpeg?region=0%2C0%2C1560%2C878",
  rate: 3,
  3,
} 
```
<em>come si presentava l'oggetto prima della "compressione"</em>

Mettiamo le tutte le informazioni dell'episodio dentro delle liste e al fondo inseriamo una funzione `map()` che crea l'oggetto:

```javascript
const EPISODES = 
[
  /*[...], [...], [...], ... */  
  [
    13,
    "1x09",
    7,
    a + "cloak-of-darkness" + c,
    ["Il velo dell'oscurità", "Cloak of Darkness"],
    d + "96574cf0-9dd5-48f4-9625-545a13cff7db" + f,
    F,
    e + g + "17a3b5fc" + h + "0%2C0%2C1560%2C878",
  ],
   /*... [...], [...], [...]*/  
].map((e) => {
  return {
    order: e[0].toString(),
       id: e[1],
      arc: e[2],
    guide: e[3],
    title: { 
              it: e[4][0],
              en: e[4][1]
           },
     play: e[5],
     must: e[6],
      img: e[7],
     rate: e[8],
  };
});
```

Stesso procedimento anche per la lista `ARCS`.

Il risultato è quasi un dimezzamento della dimensione del file, da circa `100 KB`  iniziali a `54 KB`. I caratteri passano da `102.079` a `55.697` (spazi ed indentazioni incluse).

#### Memoria in locale

La pagina salva i progressi dell'utente nel localStorage del browser, ovvero in locale e non sono quindi sincronizzati con un database. Questi non vengono persi ricaricando o abbandonando la pagina, ma solo se l'utente resetta il proprio browser.

Script che gestisce la sincronizzazione in locale:

```javascript
const KEY_STORAGE = "clone-wars-0.1";

export const saveStorage = (s) => {
  localStorage[KEY_STORAGE] = JSON.stringify(s);
};

export const loadStorage = () => {
  let storage;
  try {
    storage = JSON.parse(localStorage[KEY_STORAGE]);
  } catch (error) {
    storage = [];
  }
  if (!Array.isArray(storage)) {
    storage = [];
  }
  saveStorage(storage)
  return storage;
};
```

Ogni qualvolta l'utente contrassegna un episodio come visto, si aggiorna l'array `watchList` e lo si butta nel `localStorage`.

Quando l'utente accede alla pagina si fa un tentativo di recuperare dal `localStorage` la lista `watchList`, se la lista non esiste o se è corrotta ne viene creata una nuova vuota.

#### Sincronizzazione manuale

Si utilizza il `localStorage` perché si prevede che l'utente accederà alla pagina sempre dallo stesso dispositivo. Tuttavia è possibile salvare i propri progressi e sincronizzarli con un metodo quasi "manuale".

Premendo su `esporta` si genera un link, in cui come parametro c'è proprio la lista degli episodi. Aprendo quel link su un altro dispositivo o browser la pagina sincronizzerà il proprio localStorage. 

In aggiunta alla lista degli episodi c'è anche un timestamp, per evitare di sincronizzare i progressi vecchi su quelli nuovi. In questo caso la pagina chiede all'utente se vuole sovrascrivere con un salvataggio precedente, suggerendo di non farlo.
