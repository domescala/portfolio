const text_boom = document.querySelector(".name");
var text = text_boom.innerHTML
var text = []
for (let index = 0; index < text_boom.innerHTML.length; index++) {
    text.push(text_boom.innerHTML[index])
}
text_boom.innerHTML = ""


for (let index = 0; index < text.length; index++) {
    const element = document.createElement("SPAN")
    element.classList = "textboom t"+index
    element.innerHTML = text[index]
    
    if (element.innerHTML != " ") {
        text_boom.appendChild(element)
    }
    else{
        text_boom.appendChild(document.createElement("BR"))
    }
}
var doc_span = document.querySelectorAll(".textboom")
var boomed = false;

function boom() {
    for (let index = 0; index < doc_span.length; index++) {
        let element = doc_span[index]
        var rand = {
            x: (Math.random()*1500 + 500) * (Math.random()*1 - 0.4),
            y: (Math.random()*3500 + 500)* (Math.random()*1 - 0.1),
            s: Math.random()*5 + 0.3 ,
            r: Math.random()*360 + 720 ,
        }
        element.style["transition-duration"] = "30s"

        element.style["transform"] = "translate("+rand.x+"px, "+rand.y+"px) scale("+rand.s+") rotate("+rand.r+"deg)"
    }
    console.log("boom")
    boomed = true;

}

function sboom() {

    doc_span.forEach(element => {
        element.style["transform"] = ""
        element.style["transition-duration"] = "5s"
        element.style["color"] = "unset"

    boomed = false;
        
    });
}


$(".name").click(function () {
    if(!boomed){    boom() }
    else{           sboom()}
});