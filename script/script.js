// sincronizzazione 
var sec_intervall = 60
setTimeout(() => {
    console.log("hola")
    refreshAll();
    setInterval(() => {  refreshAll()}, 1000 * 60/(60/sec_intervall));
}, 1000* (60 - new Date().getSeconds())/(60/sec_intervall)  )



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


// -----    COUNTER     -----

// $(".counter").hide()
$(".counter").show()

var views = 0
key_check =  "domescala.portfolio11_09_2021"

console.log(localStorage.n_Visit11)

console.log(localStorage.last_refresh)
console.log(new Date().getTime())

// localStorage.last_refresh = new Date().getTime();

if(document.URL.split("portfoli")[1] == "o/?debug"){
localStorage.last_refresh = new Date().getTime()
}

console.log("response")
date = new Date().getTime()
console.log(localStorage.visit);
if (localStorage.visit == "true"){
    console.log("non prima visita");

    if (new Date().getTime() - localStorage.last_refresh > (1000*3600)) {
        Counter("hit")
        localStorage.last_refresh = new Date().getTime()
        }
    else {
        console.log("non prima visita");
        Counter("get")
    }
}
else {
    console.log("prima visita");
    Counter("hit")
    localStorage.last_refresh = new Date().getTime()    
    localStorage.visit = true
}

function Counter(metodo) {
    $.getJSON("https://api.countapi.xyz/"+metodo+"/"+key_check+"/visits?  callback=callbackName" + "&callback=?",
        function (data) {
            //console.log(data.contents)
            let views = data.value;

            $(".counter .views p").html (data.value);
            $(".counter").show();
            console.log("richiesta fatta");
        });
} 


// -----    COUNTER  REAL TIME   -----

var time_timeout =  2000
var time_delay = 100

let count_time = 0
var last_time = 0
var difference = 0
var difference_old = 0


var list_count = [1,1,1,1,1,1]

var namespace = "domescala2021"
var key = "countertime1"
var key2 = "countertime2"
on = true
function s() {
    on = false
    
}
// get_timecount()
$(".counter .realtime p").html("1");
// timerefresh();
 list_count = [1,1,1,1,1,1]


function average(n) {
    list_count.shift();
    list_count.push(n);
    let m = 0
    list_count.forEach(e => {m += e });
    console.log(list_count)
    return parseInt(m/list_count.length)

}
console.log("OOOOOOO", localStorage.counterlive)
if(Number(localStorage.counterlive) > 0){
    difference = Number(localStorage.counterlive);
    $(".counter .realtime p").html(difference)
}
else{
    $.getJSON(
    "https://api.countapi.xyz/hit/"+namespace+"/"+key2,
        function (data) {
            console.log(data, "BBBBBBBBBB")
            difference = data.value
            $(".counter .realtime p").html(difference);
            localStorage.counterlive = difference
        }
)
}
var time_intervall2 = 0.1


refreshAll();

function refreshAll() {
    refresh()

}


// var a = setInterval(() => {    refresh() }, 1000 * 60);
var times = -2
function refresh() {
console.log(" refresh ")

    let time_start = new Date().getTime()

    $.getJSON("https://api.countapi.xyz/hit/"+namespace+"/"+key,
            function (data) {
console.log(" getjson ")
                
                var count_time = data.value
                // difference = count_time - last_time

                console.log("HIT", "last_time", last_time, "difference", difference, "data", data, "times", times )

                if(data.value > 1000 && difference == 1){
                    $.getJSON(
                        "https://api.countapi.xyz/set/"+namespace+"/"+key+"?value=0",
                            function (data) {});
                }
    console.log(" time++ ")

                times++;
    console.log(" wait for check ")

                setTimeout(() => {

                    check();
                }, 10000 );
            });
            
 
}
 function check(){
    console.log(" check ")

 $.getJSON(
         "https://api.countapi.xyz/get/"+namespace+"/"+key,
             function (data) {
    console.log(" getjson ")

                console.log("check :", "data.value", data.value, "lasttime", last_time, "difference", difference)
                let count_time = data.value;
                

                $(".counter .realtime p").html(difference);
                if (last_time!=0) {

                    difference = count_time - last_time;
                console.log("last time diversa da zero", difference  )

                }
                console.log("last time = data.value" , data.value)
                last_time = data.value ;

                if (difference_old != difference && times > 0){

                    $.getJSON(
                        "https://api.countapi.xyz/set/"+namespace+"/"+key2+"?value="+difference,
                            function (data) {
                                console.log("SET", difference, data )
                            });
                    }
                $(".counter .realtime p").html(difference);
                console.log("difference_old = difference" , difference)

                difference_old = difference
                localStorage.counterlive = difference
             });    

 }

// -----  COUNTER VIEWS PROJECT -----