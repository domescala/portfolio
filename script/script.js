

const PROJECTS = document.querySelectorAll("#containerportfolio .project")
var test = ""
var timeouts = []
var project_opened = false

PROJECTS.forEach(project => {
    project.addEventListener("click", function (event) {

        if (project.classList.contains("projectactive")) {
            return
        }
        if (document.querySelector(".projectactive")) {
            close_project()
            return
        }

        var one_active = false
        document.querySelectorAll(".projectactive").forEach(e => {
            e.classList.remove("projectactive")
            e.classList.add("project")
            // e.classList.toggle("projectactive")
            project.classList.remove("project_opening")
            console.log(e)
            one_active = true
            e.style = ""
        });
        
        // add the project id as a parameter in the URL
        window.history.replaceState(null, null, "?project="+ project.id);
        
        // Animazione scroll



        // blocca lo scambio (cliccando su un progetto se uno è gia attiva, si chiude questo e BASTA -> è come se si premesse sullo sfondo)
        if (!one_active) {
            project_opened = false
            let transition_temp = project.style["transition"]
            let transform_temp = project.style["transform"]
            project.style["transform"] = "scale(1) rotate(0deg)"

            var t1 = setTimeout(() => {


                project.classList.add("project_opening")
                project.style["transition"] = "none";
                project.style["z-index"] = "10000"

                // distanza tra top del parent e top di el
                
                
                let left_centered_pad = (window.visualViewport.width - project.getBoundingClientRect().width) / 2
                // distanza tra left del parent e left di el
                // let actual_top_inside = project.getBoundingClientRect().top - project.parentElement.getBoundingClientRect().top
                // let actual_left_inside = project.getBoundingClientRect().left - project.parentElement.getBoundingClientRect().left
                // let left_centered_pad = (project.parentElement.getBoundingClientRect().width - project.getBoundingClientRect().width) / 2
                // let top_centered_pad = (project.parentElement.getBoundingClientRect().height - project.getBoundingClientRect().height) / 2
                // top_centered_pad = (window.visualViewport.height - project.getBoundingClientRect().height)/2 - project.parentElement.getBoundingClientRect().top
                project.style["transition"] = transition_temp
                // project.style.removeProperty("transform")

                let actual_top =  project.getBoundingClientRect().top 
                let actual_left = project.getBoundingClientRect().left

                project.style["position"] = "fixed"
                project.style["top"] = actual_top + "px"
                project.style["left"] = actual_left + "px"
                project.style["transition"] = "all 0.3s ease"

                project.setAttribute('style-step1', project.getAttribute("style"))
                var t2 = setTimeout(() => {
                    project.style["left"] = left_centered_pad + "px"
                    project.style["top"] = "0px"
                    project.setAttribute('style-step2', project.getAttribute("style"))

                 }, 100);
                timeouts.push(t2)

                var t3 = setTimeout(() => {
                    project.style["left"] = "auto"
                    project.setAttribute('style-step3', project.getAttribute("style"))


                    // return            



                    project.classList.remove("project")
                    project.classList.add("projectactive")

                    project.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

                 }, 350);
                timeouts.push(t3)
                // project.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                // setTimeout(() => {


                //     var elDistanceToTop = window.visualViewport.pageTop + project.getBoundingClientRect().top
                //     var center_pad_top = (window.visualViewport.height - project.getBoundingClientRect().height) / 2
                //     window.scrollTo({
                //         top: elDistanceToTop - center_pad_top,
                //         behavior: "smooth",
                //     });
                // }, 700);

                var t4 = setTimeout(() => {
                    project.classList.remove("project_opening")
                    setTimeout(() => {
                        
                        project_opened = true
                    }, 1500);
                }, 500);
                timeouts.push(t4)

            }, 100);
            timeouts.push(t1)

        }

        console.log(test)
    })
});

// document.querySelector("#containerportfolio").addEventListener("click", function (event) {
//     if (this == event.target) {
//         close_project()
//     }
// })
// document.querySelector("body").addEventListener("click", function (event) {
//     if (this == event.target) {
//         close_project()
//     }
// })
// document.querySelector(".project").addEventListener("click", function (event) {
//     if (document.querySelector(".projectactive")) {
//         if (this == event.target || this == event.target.parentElement) {
//             close_project()
//         }
//     }

// })

document.querySelectorAll(".project").forEach(project => {
    
});
// I'm using "click" but it works with any event
document.addEventListener('click', event => {
    if(!document.querySelector(".projectactive")){return}
    const isClickInside = document.querySelector(".projectactive").contains(event.target)
    if (!isClickInside) {
        close_project()
    // The click was OUTSIDE the specifiedElement, do something
    } 
})


function close_project() {
    console.log("CHIUSURAAAAAA")
    timeouts.forEach(t => {
        clearTimeout(t)
    });
    timeouts = []
    var last_active = document.querySelector(".projectactive")
    document.querySelectorAll(".projectactive").forEach(project => {
        project.classList.add("project_opening")

        var t3 = setTimeout(() => {
            project.setAttribute('style', project.getAttribute("style-step3"))
            project.classList.remove("projectactive")
            project.classList.add("project")
            project.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

            var t2 = setTimeout(() => {
                project.setAttribute('style', project.getAttribute("style-step2"))
                var t1 = setTimeout(() => {
                    project.setAttribute('style', project.getAttribute("style-step1"))
                    project.classList.remove("project_opening")
                    project.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    var t4 = setTimeout(() => {
                        project.style = ""
                        console.log("A4")
                    }, 100);
                    timeouts.push(t4)
                    console.log("A3")
                }, 100);
                timeouts.push(t1)
                console.log("A2")
            }, 200);
            timeouts.push(t2)
            console.log("A1")
        }, 100);
        timeouts.push(t3)
    });

    // document.querySelectorAll(".project_opening").forEach(project => {
    //     project.style = ""

    // });
    if (last_active) {
        last_active.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
    }
}
// ----- COUNTER PAGE -----
// function counter_page() {


//         let key = "main_page"
//         let action = 'views'
//         let namespace = 'domescale.github.io_portfolio'
//         let options = {  startNumber: 42, behavior: 'vote' } 

//         counter = document.querySelector(".counter .views p")
//         counterApi.increment(key, action, namespace, options, function(err, res){
//             let views = res.value
//             console.log(res)
//             counter.innerHTML = views
//         })

// }
// window.addEventListener("load", function () {

//     setTimeout(() => {
//         counter_page() 
//     }, 10);
// })

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

    navbar.style["boxShadow"] = "0px 0px 35px rgba(158, 126, 255, " + s * 0.8 + ")"


    // ----- COMPARSA DEL LOGOTIPO NELLA NAVBAR ----- 

    // posizione "top" rispetto alla viewport
    var h = document.querySelector("#presentation h1").getBoundingClientRect().top;

    h = h - 5;
    if (h < 0) { // limite a 0
        h = 0;
    }

    logotype.style["transform"] = "translateY(" + h + "px)"

})





// document.addEventListener("scroll", function(){
//     console.log("scroll")
//     var active = document.querySelector(".projectactive")
//     if(project_opened && active){
//         console.log("active")
//         if(active.getBoundingClientRect().bottom > 0){
//             console.log("inview")
//             active.scrollIntoView({ behavior: "instant", block: "end", inline: "nearest" });
//         }
//     }
// })



// ----- MENU A SCOMPARSA ----- 

$(".navham").click(function () {
    $(".navlink").toggleClass("open")
    $(".navham").toggleClass("open")
})

// ----- SCROLL ALLA SEZIONE DAL MENU -----

$(".navlink a").click(function () {


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

    let a = document.querySelector("#" + id + " div")
    a.scrollIntoView({ block: "center", inline: "nearest" })


})


// SWIPE per uscire

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove',  handleTouchMove, false);
document.addEventListener('touchend',   handleTouchEnd, false);

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     


var pos_start = {x:null,y:null}
var pos_move = {x:null,y:null}
var touch_stop  = false;
var touch_start = false;
var main_direction = 0;

function handleTouchStart(evt) {
    console.log(evt.target.tagName)
    if(!document.querySelector(".projectactive")){return}
    if(evt.target.tagName == "INPUT"){return}
    
    const firstTouch = getTouches(evt)[0];                                      
    pos_start = {
        x:firstTouch.clientX,
        y:firstTouch.clientY
    }   
    touch_stop  = false;
    touch_start = true;
};     

function handleTouchMove(evt) {
    if(!document.querySelector(".projectactive")){return}
    pos_move = {
        x:evt.touches[0].clientX,
        y:evt.touches[0].clientY,
    }
    var delta = {
        x: Math.abs(pos_move.x - pos_start.x),
        y: Math.abs(pos_move.y - pos_start.y),
    }


    if (touch_stop){
        return
    }

    if (touch_start) {
        main_direction = delta.y > delta.x
        touch_start = false
    } 
     if (main_direction){
        console.log("vertical")
    } else {
        console.log("pos_start", pos_start, "pos_move", pos_move)
        if (pos_start.x > pos_move.x) {
            console.log("111")
            
            translate = "translateX(-" + (delta.x**0.5 *5) + "px)"
            document.querySelector(".projectactive").style["transition"] = "none"
            document.querySelector(".projectactive").style["transform"] = translate
            console.log(document.querySelector(".projectactive").style["left"])
           
        } else {
            console.log("222")
            
        }
    }

    
    
    console.log("")
}

function handleTouchEnd(evt){
    if(!document.querySelector(".projectactive")){return}
    touch_stop = true
    if(pos_start.x - pos_move.x > 200){
        close_project()
    }
    else{
        document.querySelector(".projectactive").style["transition"] = "0.3s"
        document.querySelector(".projectactive").style["transform"] = "translateX(0)"
    }
}


// open project from link
window.addEventListener("load", function(){
    console.log("AAAAAAAAAAAAAAAAA")
    // get project id from url
    const urlParams = new URLSearchParams(window.location.search);
    const project_id = urlParams.get('project');
    if (project_id){
        // if it exists -> scroll to the project container, open project and scroll to center it
        setTimeout(() => {
            let project = document.getElementById(project_id)
            project.parentElement.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
            setTimeout(() => {
                project.classList.add("projectactive")
                project.classList.remove("project")
                setTimeout(() => {
                    project.scrollIntoView({ behavior: "instant", block: "center", inline: "nearest" });
                }, 500);
            }, 300);
        }, 300);
    }
})
