


// ----- CHECK DEBUG ----- 
var debug =  false;
if(document.URL.search("debug") != -1){
    debug = true;
}
if(document.URL.search("qr") != -1){
    $.getJSON("https://api.countapi.xyz/hit/domescala.portfolio11_09_2021_qr?  callback=callbackName" + "&callback=?",
             function (data) {
                 console.log(data)
                          });
}

// ----- APERTURA/CHIUSURA PROGETTI ----- 
localStorage.viewsproject10 += "";
localStorage.viewsproject10_n += "";
$("#containerportfolio .project").click(
    function () {

        document.querySelectorAll(".projectactive").forEach(e => {
            e.classList.toggle("project")
            e.classList.toggle("projectactive")
            console.log(e)
        });
        this.classList.toggle("project")
        this.classList.toggle("projectactive")
        // Animazione scroll
        this.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

        // ----- COUNTER PROGETTI ----- 

        let key = this.querySelector("h2").innerHTML
        var action = 'open_project'
        var namespace = 'domescale.github.io_portfolio'
        var options = { behavior: 'vote' } 
        const counter = this.querySelector(".boxviews p");
        fetch("prject")
        counterApi.increment(key, action, namespace, options, function(err, res){
            let views = res.value
            console.log(res)
            console.log("PERCHE NON VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            counter.innerHTML = views
        })



        // if (localStorage.viewsproject10.search(key) == -1 && !debug) {
        //     localStorage.viewsproject10 += " "+key
        // console.log("non c'era")
        //      $.getJSON("https://api.countapi.xyz/hit/domescala.portfolio11_09_2021/"+key+"?  callback=callbackName" + "&callback=?",
        //      function (data) {
        //          let views = data.value;
        //          counter.innerHTML = views
        //         localStorage.viewsproject10_n += key+views+key
        //      });
        // }
        // else{
        //     counter.innerHTML = localStorage.viewsproject10_n.split(key)[1]

        // }
        // console.log(key)

      
    }
)

// ----- COUNTER PAGE -----
function counter_page() {
        

        let key = "main_page"
        let action = 'views'
        let namespace = 'domescale.github.io_portfolio'
        let options = {  startNumber: 42, behavior: 'vote' } 
        
        counter = document.querySelector(".counter .views p")
        counterApi.increment(key, action, namespace, options, function(err, res){
            let views = res.value
            console.log(res)
            counter.innerHTML = views
        })
    
}
window.addEventListener("load", function () {
    
    setTimeout(() => {
        counter_page() 
    }, 10);
})

// ----- INSERIMENTO IMMAGINI PORFOLIO -----

// devono chiamarsi "portfolio_1.png"
// setup_img_portfolio();
// function setup_img_portfolio() {
//     let index = 1
//     document.querySelectorAll("#containerportfolio div img").forEach(element => {
//         element.src = "img/portfolio_projects/portfolio_" + index + ".gif";
//         index++;
//     });
// }


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
    else if (content == "skills") {
        id = "containerabout" 
    }

    let a = document.querySelector("#"+id+" div")
    a.scrollIntoView({ block: "center", inline: "nearest" })


})


