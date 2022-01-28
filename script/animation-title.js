const text_boom = document.querySelector(".name");
var text = text_boom.innerHTML
var text = []
for (let index = 0; index < text_boom.innerHTML.length; index++) {
    text.push(text_boom.innerHTML[index])
}
text_boom.innerHTML = ""

var boomed = false;
var namecontainer_span1 = document.createElement("SPAN")
var namecontainer_span2 = document.createElement("SPAN")
var flag_namecontainer = false
for (let index = 0; index < text.length; index++) {
    
    const element = document.createElement("SPAN")
    element.classList = "textboom t"+index
    element.innerHTML = text[index]
    $(element).click(function () {
        if(!boomed){    boom() }
        else{           sboom()}
    });
    console.log("flag_namecontainer", flag_namecontainer, element.innerHTML, element.innerHTML == " ")
    if (element.innerHTML == " " || flag_namecontainer) {
        text_boom.appendChild(namecontainer_span2).appendChild(element)
        flag_namecontainer = true
        console.log("yea")
    }
    else{
        text_boom.appendChild(namecontainer_span1).appendChild(element)
        
    }
}
var doc_span = document.querySelectorAll(".textboom")


function boom() {
    for (let index = 0; index < doc_span.length; index++) {
        let element = doc_span[index]
        var rand = {
            x: (Math.random()*1500 + 500) * (Math.random()*1 - 0.4),
            y: (Math.random()*3500 + 500)* (Math.random()*1 - 0.1),
            s: Math.random()*5 + 0.3 ,
            r: (Math.random()*360 + 720) * (Math.round(Math.random()) * 2 - 1 ) ,
        }
        element.style["transition-duration"] = "30s"
        // element.style["filter"] = "blur("+rand.s*1.5+"px)"
        element.style["transform"] = "translate("+rand.x+"px, "+rand.y+"px) scale("+rand.s+") rotate("+rand.r+"deg)"
        element.style["cursor"] = "grab"
    }
    console.log("boom")
    boomed = true;

}

function sboom() {

    doc_span.forEach(element => {
        element.style["transform"] = ""
        element.style["transition-duration"] = "5s"
        element.style["color"] = "unset"
        element.style["cursor"] = "grabbing"
    boomed = false;
        
    });
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