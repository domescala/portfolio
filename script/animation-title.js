const text_boom = document.querySelector(".name");
var text = text_boom.innerHTML
var text = []
for (let index = 0; index < text_boom.innerHTML.length; index++) {
    text.push(text_boom.innerHTML[index])
}
text_boom.innerHTML = ""

var boomed = false;
var boom_in_process = false
var namecontainer_span1 = document.createElement("SPAN")
var namecontainer_span2 = document.createElement("SPAN")
var flag_namecontainer = false
for (let index = 0; index < text.length; index++) {
    
    const element = document.createElement("SPAN")
    element.classList = "textboom t"+index
    element.innerHTML = text[index]
    $(element).click(function (e) {
        if(!boomed){    boom({x:e.pageX, y:e.pageY}) }
        else{           sboom()}
    });

    if (element.innerHTML == " " || flag_namecontainer) {
        text_boom.appendChild(namecontainer_span2).appendChild(element)
        flag_namecontainer = true
    }
    else{
        text_boom.appendChild(namecontainer_span1).appendChild(element)
        
    }
}
var doc_span = document.querySelectorAll(".textboom")

var color_boom = ["#359593","#a9e79d","#9431fc","#f26317","#d76ac1","#31f367","#2f25dd","#386269","#a3b1bd","#ec448e","#406cce","#779280","#d7e0ec","#df0025","#aafb68","#27547d","#19b52d", "#ea9203","#6e86e7","#7ca8bd","#fbf992","#1bf241","#e8e599","#ee75f6","#fd1625","#9695db","#06f338","#0fb8de","#0c6a5c","#409cb7","#5a97af","#761c70","#8a51d4","#f36a5e",]

function boom(point_click) {
    // text_boom.style.transform = "scale(0.8)"
    var time_rincorsa = 0.5 // in secondi
    text_boom.style.transform = ""
    var rand =  []
    for (let i = 0; i < doc_span.length; i++) {

        var random_pos = {
            x: (Math.random()*1500 + 500) * (Math.random()*1 - 0.4),
            y: (Math.random()*3500 + 500)* (Math.random()*1 - 0.1),
            s: Math.random()*5 + 0.3 ,
            r: (Math.random()*360 + 720) * (Math.round(Math.random()) * 2 - 1 ) ,
        }
        rand[i] = random_pos
    }
        
    for (let i = 0; i < doc_span.length; i++) {
            let element = doc_span[i]

        element.style["transition-duration"] = time_rincorsa + "s"
        // element.style["transition-timing-function"] = "cubic-bezier(0.17, 0.8, 0, 0.73)"
        element.style["transition-timing-function"] = "cubic-bezier(0.17, 0.8, 0, 0.83)"
        
        // element.style["filter"] = "blur("+(1/rand.s)+"px)"
        var boxX = text_boom.offsetLeft
        var boxY = text_boom.offsetTop
        var centerX = boxX + (text_boom.clientWidth / 2) - 10 // -10 a occhio
        var centerY = boxY + (text_boom.clientHeight / 2) 
        var centerX = point_click.x
        var centerY = point_click.y

        var letterX = doc_span[i].offsetLeft
        var letterY = doc_span[i].offsetTop

        var deltaX = centerX - letterX - 20 // - 20  per centrare la lettera a occhio
        var deltaY = centerY - letterY - 30 // - 30 per centrare la lettera a occhio
        var s = deltaX

        // normalize
        var x =  deltaX
        var y =  deltaY
        var l = Math.sqrt( deltaX**2 + deltaY**2) / 20 // distanza
        x = (x / l).toFixed(2)
        y = (y / l).toFixed(2)

        var s = 0.5 + (Math.sqrt( deltaX**2 + deltaY**2))  / 240 

        var r = - rand[i].r / 60
        element.style["transform"] = "translate("+x+"px, "+y+"px) scale("+s+") rotate("+r+"deg)"
        element.style["cursor"] = "grab"
    }
    setTimeout(() => {
        for (let i = 0; i < doc_span.length; i++) {
            let element = doc_span[i]

            element.style["transition-duration"] = "30s"
            // element.style["filter"] = "blur("+(1/rand.s)+"px)"
            element.style["transition-timing-function"] = "cubic-bezier(0.06, 0.81, 0.21, 1.06)"
            element.style["transform"] = "translate("+rand[i].x+"px, "+rand[i].y+"px) scale("+rand[i].s+") rotate("+rand[i].r+"deg)"
            element.style["cursor"] = "grab"
    
            var color = (Math.random()*color_boom.length).toFixed(0)
            element.style ["color"] = color_boom[color]
        }
    }, time_rincorsa*1000);
    console.log("boom")
    boomed = true;
}

function boom3() {
    boomed = true;
    // text_boom.style.transform = "scale(0.8)"
    var time_rincorsa = 0.4
    text_boom.style.transform = ""
    var rand =  []
    for (let i = 0; i < doc_span.length; i++) {

        var random_pos = {
            x: (Math.random()*1500 + 500) * (Math.random()*1 - 0.4),
            y: (Math.random()*3500 + 500)* (Math.random()*1 - 0.1),
            s: Math.random()*5 + 0.3 ,
            r: (Math.random()*360 + 720) * (Math.round(Math.random()) * 2 - 1 ) ,
        }
        rand[i] = random_pos
    }
        
    for (let i = 0; i < doc_span.length; i++) {
            let element = doc_span[i]

        element.style["transition-duration"] = time_rincorsa + "s"
        // element.style["transition-timing-function"] = "cubic-bezier(0.17, 0.8, 0, 0.73)"
        element.style["transition-timing-function"] = "cubic-bezier(0.17, 0.8, 0, 0.83)"
        
        // element.style["filter"] = "blur("+(1/rand.s)+"px)"
        var x =  - rand[i].x 
        var y =  - rand[i].y 
        var l = Math.sqrt( x**2 + y**2)/ 10 // distanza
        var s = "0.9"

        x = (x / l).toFixed(2).toString()
        y = (y / l).toFixed(2).toString()
        var r = - rand[i].r /120
        element.style["transform"] = "translate("+x+"px, "+y+"px) scale("+s+") rotate("+r+"deg)"
        element.style["cursor"] = "grab"
    }
    setTimeout(() => {
        for (let i = 0; i < doc_span.length; i++) {
            let element = doc_span[i]

            element.style["transition-duration"] = "30s"
            // element.style["filter"] = "blur("+(1/rand.s)+"px)"
            element.style["transition-timing-function"] = "cubic-bezier(0.06, 0.81, 0.21, 1.06)"
            element.style["transform"] = "translate("+rand[i].x+"px, "+rand[i].y+"px) scale("+rand[i].s+") rotate("+rand[i].r+"deg)"
            element.style["cursor"] = "grab"
    
            var color = (Math.random()*color_boom.length).toFixed(0)
            element.style ["color"] = color_boom[color]
        }
    }, time_rincorsa*1000);
    console.log("boom")
   
}
function boom2() {
    text_boom.style.transform = "scale(0.8)"

    setTimeout(() => {
    text_boom.style.transform = ""
    for (let index = 0; index < doc_span.length; index++) {
        let element = doc_span[index]
        var rand = {
            x: (Math.random()*1500 + 500) * (Math.random()*1 - 0.4),
            y: (Math.random()*3500 + 500)* (Math.random()*1 - 0.1),
            s: Math.random()*5 + 0.3 ,
            r: (Math.random()*360 + 720) * (Math.round(Math.random()) * 2 - 1 ) ,
        }
        element.style["transition-duration"] = "30s"
        // element.style["filter"] = "blur("+(1/rand.s)+"px)"
        element.style["transform"] = "translate("+rand.x+"px, "+rand.y+"px) scale("+rand.s+") rotate("+rand.r+"deg)"
        element.style["cursor"] = "grab"

        var color = (Math.random()*color_boom.length).toFixed(0)
        element.style ["color"] = color_boom[color]
    }
    console.log("boom")
    boomed = true;
    }, 400);
}

function sboom() {
    var duration = 5 // in seconds
    doc_span.forEach(element => {
        element.style["transform"] = ""
        element.style["transition-duration"] = duration+"s"
        element.style["color"] = "unset"
        element.style["cursor"] = "grabbing"
        
    });
    setTimeout(() => {
        boomed = false;
    }, duration*1000);
}


const title_wide = [
    document.querySelector("#containerabout h2"),
    document.querySelector("#containerportfolio h2"),
    document.querySelector("#containerskills h2"),
    document.querySelector(".social_title"),
    document.querySelector(".contacts_title")
]
const title_wide_tf = [true, true, true, true, true ]

var only_first_time = true;
var only_first_timeB = true;
document.addEventListener("scroll", function () {
    // console.log(title_wide_tf)
    for (let i = 0; i < title_wide.length; i++) {
        var y = title_wide[i].getBoundingClientRect().y
        
        if ( title_wide_tf[i] && y < 600 && y > 350 ) {
            // console.log("i",i, title_wide[i], y)
            title_wide[i].classList.add ("wide_text_animation")
            if (title_wide[i].innerHTML == "Followami") {
                title_wide[i+1].classList.add ("wide_text_animation")
            }
            title_wide_tf[i] = false
            return "" //ferma la funzione
            console.log("ciao")
        }
        else if(!title_wide_tf[i]  && (y > 1000 || y < 0)){
            title_wide[i].classList.remove ("wide_text_animation")
            title_wide_tf[i] = true
            
        }

    }
})