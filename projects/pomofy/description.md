<meta name="description" content="Analisi e sviluppo di 'Pomofy', un timer pomodoro per ascoltare brani ambient durante la sessione di studio/lavoro e musica durante la pausa attraverso Spotify">
<favicon-emoji>🍅</favicon-emoji>

###### *tool* *Progetto personale*

# Pomofy

## Descrizione

Pomofy è un pomodoro timer che permette all'utente di ascoltare dei brani ambient durante la sessione di studio o lavoro, mentre durante la sessione di pausa riproduce musica. 

<p>
<video autoplay muted loop><source src="presentation.mp4" type="video/mp4"></video>
<em>Come si presenta Pomofy</em>
</p>


## Features

- 🖼&#xFE0F; Disponibilità di diverse ambientazioni, abbinate a brani ed immagini
- ⏲ Modalità pomodoro singolo o doppio (25\5 o 50\10)
- ✨ Dissolvenza tra i brani 
- 📃 Recap dei pomodori svolti e del tempo trascorso
- 🔙 Storico dei pomodori nei giorni precedenti 
- ⚙&#xFE0F; Creazione di playlist personalizzate scegliendo i brani e gli sfondi
- 📻 Connessione a Spotify

## Cos'è un pomodoro?? 🍅

Usare la tecnica del pomodoro favorisce una concentrazione più prolungata, con meno distrazioni. Consiste nel suddividere il tempo di lavoro in "pomodori", sessioni brevi di mezz'ora suddivisa in 25 minuti di effettivo lavoro concentrato e 5 minuti di pausa e totale distrazione.  
È un dato di fatto che l'attenzione inizi a calare dopo una trentina di minuti e con questo metodo si ottimizza la concentrazione. Inoltre, quando lo studio o la task che si deve svolgere è noiosa o difficile, il pomodoro ti viene incontro.

- Diventa molto più semplice suddividere il tempo per ciascuna task. 
- Ogni 25 minuti potrai renderti conto del tuo andamento: se hai iniziato a divagare o se ti sei distratto e ti rimetti in pista.   
- Interrompere bruscamente la task favorisce la motivazione nel riprenderla dopo la pausa  

Inizialmente può sembrare solo una perdita di tempo, di fatto un quinto del tempo di lavoro è mangiato dalle pause. Ma per esperienza posso affermare che il lavoro prodotto da 3 ore suddiviso in pomodori rispetto a 3 ore di fila, è nettamente migliore e spesso è anche più completo. Inoltre è comunque necessario fare delle pause e riprendendo l'esempio, farle alla fine delle tre ore è molto più stressante.

## Funzionamento

### Storico

Il documento salva in tempo reale tutti i dati come pomodori completati, tempo trascorso, la traccia che si sta ascoltando eccetera eccetera. In questo modo ricaricando o riaprendo la pagina non si perderanno i progressi fatti, ma si tornerà allo stesso punto. 
I dati sono salvati nel localStorage del browser, ovvero in locale. Infatti aprendo il documento con un browser diverso (chrome, firefox, opera...) i progressi saranno diversi. Ne consegue che cancellando i dati del browser si compromette la memoria di Pomofy.

### Connessione a Spotify

Per avere questa funzionalità è necessario avviare la pagina passando dallo script di python Pomofy.py. Lo script infatti lancia DUE browser allo stesso tempo, il primo carica la solita pagina del pomodoro, il secondo invece mostra il lettore web di spotify (“open.spotify.com”). In questo modo, l'utente inserisce le credenziali e fa il login in una finestra a parte, in cui python “premerà” in modo automatico i tasti di play e di pausa per tenere sotto controllo il lettore.

![](login-spotify.png)
*Premendo il tasto Accedi, Pomofy apre la pagina web di login di Spotify in una finestra a parte, che ospiterà il lettore*

Questo è un escamotage per aggirare le API ufficiali di spotify, che altrimenti necessiterebbero di una app e di un token per autorizzare ogni singola azione dal login alla funzione play/pausa. 

## Storia

Il progetto Pomofy è nato per necessità: serviva uno strumento per mantenere la concentrazione durante lo studio e limitare le distrazioni.  
Adottare il metodo del pomodoro è stato un ottimo modo per risolvere quasi totalmente il problema. Rimaneva il fatto che ero sempre vincolato ad un timer, troppo scomodo da usare durante le sessioni di studio, soprattutto quando mi trovavo in biblioteca: non potendo impostare un allarme sonoro, tenevo costantemente sott'occhio il timer per controllare quando terminavano le sessioni di pomodoro e di pausa.

Il punto di non ritorno è stato quando ho deciso di scrivere un piccolo script in python che emettesse un piccolo suono al termine delle sessioni che sentivo solamente io con le mie cuffiette. Non contento di questa soluzione “rudimentale” ho cercato online se qualcuno avesse trovato una soluzione migliore e ho scoperto l'esistenza di una moltitudine di video su youtube per lo studio che dividevano il tempo in pomodori, alcuni con sottofondi musicali, altri con rumori bianchi e ambiance.

I rumori bianchi abbinati al metodo del pomodoro sono stati la svolta: diventava impossibile distrarsi. Riprodurre musica durante al termine del pomodoro era un modo meno stressante di interrompersi e fare una pausa, mantenendo viva la motivazione. Ma il dettaglio piu importante era l'automazione: non dovevo più gestire un timer, impostarlo, avviarlo, fermarlo. Era come avere un assistente che ti dice di fare una pausa e ti ricorda più tardi di ricominciare.  
Dopo diverso tempo, stufo della latenza del wifi e delle pubblicità di youtube, ho selezionato i brani preferiti e li ho scaricati sul pc per riprodurli in locale.  

<p>
<video autoplay muted loop><source src="pomofy-legacy.mp4" type="video/mp4"></video>
<em>Una primissima versione di progetto con il conteggio dei pomodori e ambientazioni differenti</em>
</p>

Ho sviluppato così inizialmente una semplice pagina html che includesse i brani scaricati e che tenesse traccia in automatico del tempo trascorso.  
Questa pagina si è voluta pian piano, con immagini suggestive per le varie ambientazioni, un sistema per prendere delle note e per creare delle task, ho aggiunto l'integrazione di spotify e molto altro.

