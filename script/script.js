
// ----- APERTURA/CHIUSURA PROGETTI ----- 

$("#containerportfolio .project").click(
    function () {
        console.log("e")

        document.querySelectorAll(".projectactive").forEach(e => {
            e.classList.toggle("project")
            e.classList.toggle("projectactive")
            console.log(e)
        });
        this.classList.toggle("project")
        this.classList.toggle("projectactive")
        // Animazione scroll
        this.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }
)



// ----- INSERIMENTO IMMAGINI PORFOLIO -----

// devono chiamarsi "portfolio_1.png"
setup_img_portfolio();
function setup_img_portfolio() {
    let index = 1
    document.querySelectorAll("#containerportfolio div img").forEach(element => {
        element.src = "img/portfolio_projects/portfolio_" + index + ".gif";
        index++;
    });
}


// ----- AZIONI TRAMITE SCROLL ----- 

var navbar = document.querySelector("#navbar");
var logotype = document.querySelector("#navbar .logotype");

document.addEventListener('scroll', function (e) {

    // ----- OMBRA NAVBAR ----- 

    var s = window.scrollY;

    s = (s / 150);
    if (s > 1) {
        // limite a 1
        s = 1;
    }

    navbar.style["boxShadow"] = "0px 0px 35px rgba(158, 126, 255, " + s*0.8 + ")"


    // ----- COMPARSA DEL LOGOTIPO NELLA NAVBAR ----- 

    // posizione "top" rispetto alla viewport
    var h = document.querySelector("#presentation h1").getBoundingClientRect().top;

    h = h - 5;
    if (h < 0) { // limite a 0
        h = 0;
    }

    logotype.style["transform"] = "translateY(" + h + "px)"

})



// ----- MENU A SCOMPARSA ----- 

$(".navham").click(function () {
    $(".navlink").toggleClass("open")
    $(".navham").toggleClass("open")
})

// ----- SCROLL ALLA SEZIONE DAL MENU -----

$(".navlink a").click(function(){


    $(".navlink").removeClass("open")
    $(".navham").removeClass("open")


    var content = this.innerHTML;
    let id = ""
    if (content == "about") {
        id = "containerskills"
    }
    else if (content == "portfolio") {
        id = "containerportfolio" 
    }
    else if (content == "contacts") {
        id = "containercontacts" 
    }

    let a = document.querySelector("#"+id+" div")
    a.scrollIntoView({ block: "center", inline: "nearest" })


})
