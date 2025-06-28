<style>
  
  :root {
            --rgb-pad: 25px;
            --rgb-size: 200px;
            --rgb-move: 15px;
            --rgb-scale: 1.35;
            --rgb-red: 255;
            --rgb-green: 255;
            --rgb-blue: 255;
        }
        #rgb_channel div {
            width: var(--rgb-size);
            height: var(--rgb-size);
            padding: var(--rgb-pad);
            position: absolute;
            border-radius: 100%;
            mix-blend-mode: screen;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s ease;
            outline: 1px solid rgb(255, 255, 255);
            scale: var(--rgb-scale);
        }

        #rgb_channel div:nth-child(1) {
            filter: drop-shadow(0px 0px 10px rgb(var(--rgb-red), 0, 0));
            background: rgb(var(--rgb-red), 0, 0);
            align-items: flex-start;
            justify-content: flex-start;
            transform: translate3d(calc(-1* var(--rgb-move)), calc(-1* var(--rgb-move)), 0);
        }
        #rgb_channel div:nth-child(2) {
            filter: drop-shadow(0px 0px 10px rgb(0, var(--rgb-green), 0));
            background: rgb(0, var(--rgb-green), 0);
            align-items: flex-start;
            justify-content: flex-end;
            transform: translate3d(var(--rgb-move), calc(-1* var(--rgb-move)), 0);
        }
        #rgb_channel div:nth-child(3) {
            filter: drop-shadow(0px 0px 10px rgb(0, 0, var(--rgb-blue)));
            background: rgb(0, 0, var(--rgb-blue));
            align-items: flex-end;
            justify-content: center;
            transform: translate3d(0, var(--rgb-move), 0);
        }
        #rgb_container * {
            font-family: monospace;

        }
        #rgb_container {
            display: flex;
            flex-wrap: wrap;
            isolation: isolate;
            margin: 50px 0;
            justify-content: space-around;
            width: 100%;
        }
        #rgb_channel {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 350px;
            height: 350px;
        }
        #rgb_container #rgb_input {
            display: flex;
            flex-wrap: wrap;
            width: 225px;
            align-content: flex-start;
        }

        #rgb_container #rgb_input input {
            height: 50px;

        }

        #rgb_container #rgb_input * {
            width: 100%;
            margin: 0px;
            padding: 0px;
        }

        #rgb_container #rgb_input input{
            height: 10px;
            filter: saturate(0) invert(0) brightness(1) contrast(2.1);
            margin-bottom: 20px;
        }

        #rgb_container #rgb_input span{
            font-size: 52px;
            padding: 0px 25px;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }

        #rgb_container #rgb_input span i {
            font-size: 12px;
            display: inline-block;
            width: 55px;
        }
        #rgb_channel:hover * {
            --rgb-move: 75px;
            --rgb-scale: 0.95;
        }

        .rgb_box_example {
            display: flex;
            align-items: center;
            justify-content: center;
            isolation: isolate;
            margin-top: 10px;
        }

        .rgb_example {
            background: currentColor;
            mix-blend-mode: screen;
            height: 100px;
            width: 100px;
            translate: 40px;
            border-radius: 100%;
            outline: 1px solid white;
            box-shadow: 0px 0px 6px 2px currentColor;
            transition: all 0.5s ease;
            scale: 1;
        }

        .rgb_example+.rgb_example {
            translate: -40px;
        }
        .rgb_box_example:hover .rgb_example {
            scale: 0.95;
            translate: 0px;
        }


@media only screen and (max-width: 650px) {
    #rgb_container #rgb_input {
        width: 100%;
        margin-top:25px
    }
    #rgb_container #rgb_input {
        width: 100%;
        margin-top:25px
    }
    #rgb_container #rgb_input input{
        height: 2px;
        margin-bottom: 10px;
    }
    #rgb_container #rgb_input span{
        font-size: 46px;
    }
    .pois_pattern{
        
    }
 
}
</style>

<meta name="description" content="Analisi e sviluppo di 'Guess the RGB': minigame che mette alla prova la vista e la memoria di qualsiasi graphic designer.">
<favicon-emoji>📚</favicon-emoji>

###### *Minigame* *Progetto personale* 
# Guess the RGB
## Descrizione 📢
Mini gioco che mette a dura prova la vista e la memoria di qualsiasi graphic designer. Saresti in grado di trovare il colore giusto, ma senza guardare? Perché **Guess the RGB** non ti mostrerà la classica interfaccia del color picker, ma dovrai inserire manualmente i valori dei tre canali (rosso, verde e blu) senza poter guardare il colore che stai componendo!

![gameover](guess_rgb_gameover.png)
*Screenshot di una partita persa: il giocatore doveva trovare il colore giallo, ma ha composto un azzurro. L'accuratezza è completamente nulla nonostante che il valore sul secondo canale (verde) sia azzeccato, questo per via del [calcolo del punteggio 🔗](#punteggio).*
## Gameplay 🎮
- Il gioco genera un colore casuale che compare sullo sfondo ed all'interno della carta
- Il giocatore, usando i tre cursori, imposta una quantità di colore per i singoli canali. Da 0 a 255. E preme su conferma 
- Il gioco rivela il codice del colore generato:
  - Appaiono dei valori che mostrano la differenza di errore, ad apice dei numeri appena inseriti (+30, -20 ecc ...)
  - Sui cursori appaiono due barre, colore rosso e rosso scuro, che mostrano la differenza di errore
- Sullo sfondo il colore diventa in un gradiente diagonale, che parte dal colore corretto a quello inserito dal giocatore 
- Appare una valutazione finale, per congratularsi o in alcuni casi per incoraggiare il giocatore a riprovare 
- È poi possibile condividere il risultato o estrarre un nuovo colore

## Ma che cos'è il codice RGB?? 🤔
In breve, un codice RGB contiene tre valori che rappresentano rispettivamente la quantità di rosso, di verde e di blu di un colore. Ognuno di questi può assumere un valore tra 0 e 255.
> Ad esempio il nero sarà nullo per tutti i canali:  
> `rgb(0, 0, 0)`  
> Mentre il bianco l'esatto opposto:  
> `rgb(255, 255, 255)`  
> Oppure un colore verde-acqua avrà i valori dei canali blu e verde molto più alti rispetto al rosso. Come ad esempio:  
> ` rgb(0,180,160)` 
<br>

<div id="rgb_container">
    <div id="rgb_channel">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div id="rgb_input">
        <span><i>ROSSO</i>255</span>
        <input type="range" value="255" max="255" oninput="__update_rgb('--rgb-red',this, 0)">
        <span><i>VERDE</i>255</span>
        <input type="range" value="255" max="255" oninput="__update_rgb('--rgb-green',this, 1)">
        <span><i>BLUE</i>255</span>
        <input type="range" value="255" max="255" oninput="__update_rgb('--rgb-blue',this, 2)">
    </div>
</div>

Spesso si utilizza il codice esadecimale per rappresentarli. Ogni canale è rappresentato da una coppia di cifre da `0` ad `F` (la base esadecimale è così: `0` `1` `2` `3` `4` `5` `6` `7` `8` `9` `A` `B` `C` `D` `E` `F` `10` `11` `12`...)

> Ad esempio il verde-acqua di prima è:  
> `RGB(000,180,160)`  
> `R: 000 -> 00`  
> `G: 180 -> B4`  
> `B: 160 -> A0`  
> Hex: `#00B4A0` 

È importante sapere che, ad eccezione di qualche folle designer, i codici rgb non si compongono "a memoria", ma in tutti i software di grafica è disponibile uno strumento chiamato "RGB Picker" che mostra in tempo reale il colore che si sta creando.  

Per altri dettagli consiglio la lettura di questa [pagina](https://it.wikipedia.org/wiki/RGB).


## Strategie per trovarlo 🎯
La strategia migliore è quella di scomporre il colore che vediamo in tre elementi: saturazione, luminosità e tonalità.
### Tonalità 🎨
Per tonalità si intende proprio quello che comunemente chiamiamo "colore": rosso, blu, giallo, verde, azzurro, arancione, viola ecc ecc. In questo caso bisogna individuare il colore "principale" tralasciando se è scuro o chiaro, se è spento o acceso. Da questo bisogna risalire ai colori che lo compongono: 
> Ad esempio un azzurro (ciano) è composto dalla somma del blu e del verde, in assenza quindi di rosso. Se poi il blu è maggiore del verde si ottiene un vero e proprio azzurro:  
> <span class="rgb_box_example"><span class="rgb_box_example"><span class="rgb_example" style="color:#00f;"></span><span class="rgb_example" style="color:#0f0;"></span></span><span class="rgb_box_example"><span class="rgb_example" style="color:#00f;"></span><span class="rgb_example" style="color:#070;"></span></span>  </span>  

> Per il viola si sommano prima blu e rosso, ottenendo un magenta, poi si diminuisce la quantità di rosso:
> <span class="rgb_box_example"><span class="rgb_box_example"><span class="rgb_example" style="color:#00f;"></span><span class="rgb_example" style="color:#f00;"></span></span><span class="rgb_box_example"><span class="rgb_example" style="color:#00f;"></span><span class="rgb_example" style="color:#700;"></span></span>  </span>  


> Allo stesso modo il giallo nasce dal rosso e dal verde. Se poi il verde diminuisce il colore finale diventa arancione:
> <span class="rgb_box_example"><span class="rgb_box_example"><span class="rgb_example" style="color:#f00;"></span><span class="rgb_example" style="color:#0f0;"></span></span><span class="rgb_box_example"><span class="rgb_example" style="color:#f00;"></span><span class="rgb_example" style="color:#080;"></span></span>  </span>  
>  



### Luminosità 💡
La luminosità è più immediata da trovare, si tratta di capire se un colore tende più verso il nero o più verso il bianco. Se un colore è tanto luminoso **allora i cursori si troveranno sulla destra** e viceversa.
> Scala della luminosità sul colore rosso  
> <span class="pois_pattern" style="background:linear-gradient(to right,#000   0%, #F00 45%,#F00 55%,  #FFF 100%);color:transparent;width:100%;display:block;margin-top:15px"> - </span> 

### Saturazione 🌈
Per saturazione si intende invece quanto un colore è... *"colorato🥴"*. Ossia quanto è acceso, brillante.
Per intenderci, un colore possiamo immaginarlo in una scala che va dal grigio a quel colore. Da questa scala si può  notare come il colore diventi sempre più spento e triste, fino a raggiungere il grigio. Amici, quella è la scala della saturazione.  
**Più un colore è saturo e più i valori (e quindi i cursori) saranno distanti fra loro, e viceversa.** 
> Scala della saturazione del rosso:  
> <span class="pois_pattern" style="background:linear-gradient(to right, #777 0%, #F00 100%);color:transparent; width:100%;display:block;margin-top:15px"> ----------------------------------------------------------------- </span> 

> I "grigi" infatti hanno sempre gli stessi valori, lo avevi notato no?   


## Funzionamento 
### Punteggio 
Il punteggio finale è definito da una percentuale di accuratezza. Minore è l'errore e maggiore sarà il punteggio. Tuttavia, diversamente da come si potrebbe pensare, il calcolo non segue una funzione lineare, ovvero errore e punteggio non vanno di pari passo. Il calcolo è il seguente:  
> Si trovano gli errori, ovvero le differenze tra l'RGB originale e quello inserito dall'utente:  
> $$R_{diff} = |R_{gioco} - R_{utente} |$$
> $$G_{diff} = |G_{gioco} - G_{utente} |$$
> $$B_{diff} = |B_{gioco} - B_{utente} |$$

> Media delle tre differenze:
> $$ Media = (R_{diff} + G_{diff} + B_{diff})/3 $$

> Normalizzazione -> si ottiene un valore da zero a uno
> $$ n = Media / 255 $$  

> Si capovolge la direzione dell'intervallo: ( ` 1` rappresenta l'assenza di errori)
> $$ x = 1 - n $$

> Stima dell'accuratezza:  
> $$ Accuratezza_\% = (x ^ {1 / {x^4} })*100 \% $$ 

La formula dell'accuratezza cerca di fare una stima della differenza dei due colori. L'andamento non è lineare: quando la differenza tra i due colori è del 50% il risultato sarà pressoché zero. Questo perché già una  piccola variazione (anche se è distribuita sui tre canali) modifica drasticamente il colore. Come descritto su wikipedia [la differenza fra due colori](https://en.wikipedia.org/wiki/Color_difference) è un argomento complesso, in cui anche la percezione umana è un fattore importante. La formula che calcola il punteggio di *Guess the RGB* NON è rigorosa, ma è stata creata provando tentativo dopo tentativo.




<script>
    function __update_rgb(prop, el, index) {
        let v = Math.round(el.value);
        document.documentElement.style.setProperty(prop, v);
        let channel = "<i>" + ["ROSSO", "VERDE", "BLU"][index] + "</i>";
        el.parentElement.querySelectorAll("span")[index].innerHTML = channel + "\t" + v;
    }
</script>
<script type="text/x-mathjax-config">
      MathJax.Hub.Config({tex2jax: {inlineMath: [["$", "$"], ["\\\\(", "\\\\)"]],displayMath: [["$$", "$$"], ["\\[", "\\]"]],processEscapes: true},config: ["MMLorHTML.js"],jax: ["input/TeX", "output/HTML-CSS", "output/NativeMML"],extensions: ["MathMenu.js", "MathZoom.js"],});
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js" type="text/javascript"></script>
<script>
onload = () => {
    if(!history.state?.reload && !location.href.endsWith("?reloaded")){
        history.pushState({reload:true}, "", "?reloaded")
        location.reload()
    }
}

</script>
