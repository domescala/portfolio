c("hola")
setup_box_porfolio();
function setup_box_porfolio() {
    let ultimo;
//    let index = 3;
//    c("hola")
    document.querySelectorAll("#boxporfolio .box").forEach(e => {

        e.addEventListener("click", f);
        //assegno ad ogni riga un multiplo di due, così il box selezionato rimane nella riga e gli altri scalano sotto
//        e.style.order = Math.floor(index/3)*2;
//        index++;
    });

    function f() {
        
        let a = document.querySelector("#boxporfolio .boxactive")
        if(a && a != this){
            a.classList.remove("boxactive");
            a.classList.add("box");
        }

        console.log(this)
        
        // this.style["transition-property"]=  "none";
        this.classList.toggle("box")
        
        
        // this.style["transition-property"]=  "transform box-shadow";
        this.classList.toggle("boxactive")
        this.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })

        // let a = document.querySelector(".boxactive")
        // if (this.className.includes("box")) {
        //     if(a){
        //         a.classList.remove("boxactive");
        //         a.classList.add("box")
        //     }
        //     this.classList.remove("box")
        //     this.classList.add("boxactive")
        // }
    }
}


// inserimento delle immagini nei box del portfolio
// devono chiamarsi "porfolio_1.png"
setup_img_portfolio();
function setup_img_portfolio() {
    let index = 1
    document.querySelectorAll("#boxporfolio div img").forEach(element => {
        element.src = "img/porfolio_box/porfolio_" + index + ".png";
        c(element);
        index++;
    });
}




document.addEventListener('scroll', function(e) {
    let a = document.querySelector("#navbar");
    let s = window.scrollY;
    let b = (s/255) % 255;
    a.style["boxShadow"]  =  "0px 0px 35px rgba(158, 126, 255, "+b*0.5+")"
    // c(a.style["boxShadow"])
    
})






function c(t) {
    console.log(t);
}


