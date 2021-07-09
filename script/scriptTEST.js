c("hola")
setup_project_portfolio();
function setup_project_portfolio() {
    let ultimo;
//    let index = 3;
//    c("hola")
    document.querySelectorAll("#containerportfolio .project").forEach(e => {

        e.addEventListener("click", f);
        //assegno ad ogni riga un multiplo di due, così il project selezionato rimane nella riga e gli altri scalano sotto
//        e.style.order = Math.floor(index/3)*2;
//        index++;
    });

    function f() {
        
        let a = document.querySelector("#containerportfolio .projectactive")
        if(a && a != this){
            a.classList.remove("projectactive");
            a.classList.add("project");
        }

        console.log(this)
        
        // this.style["transition-property"]=  "none";
        this.classList.toggle("project")
        
        
        // this.style["transition-property"]=  "transform box-shadow";
        this.classList.toggle("projectactive")
        this.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })

        // let a = document.querySelector(".projectactive")
        // if (this.className.includes("project")) {
        //     if(a){
        //         a.classList.remove("projectactive");
        //         a.classList.add("project")
        //     }
        //     this.classList.remove("project")
        //     this.classList.add("projectactive")
        // }
    }
}


// inserimento delle immagini nei project del portfolio
// devono chiamarsi "portfolio_1.png"
setup_img_portfolio();
function setup_img_portfolio() {
    let index = 1
    document.querySelectorAll("#containerportfolio div img").forEach(element => {
        // element.src = "img/portfolio_project/portfolio_" + index + ".png"; 
        element.src = "img/portfolio_projects/giphy - Copia (" + index + ").gif"; 
        // element.src = "../img/portfolio_project/giphy.gif";
        c(element);
        index++;
    });
}




document.addEventListener('scroll', function(e) {
    let a = document.querySelector("#navbar");
    let s = window.scrollY;
    let b = (s/255) % 255;
    a.style["projectShadow"]  =  "0px 0px 35px rgba(158, 126, 255, "+b*0.5+")"
    // c(a.style["projectShadow"])
    
})






function c(t) {
    console.log(t);
}


