var StuffToChange = document.getElementById("One_Title")
var StuffToAlt = document.getElementById("One_alt")
var Intro = new Audio()
Intro.src = "./intro.mp3"
var Num = 0

document.addEventListener("keydown", e => {
    var ToShowSlide2 = [
        "Эелдэг байх",
        "please",
        "fill me",
        "for",
        "damn",
        "sake",
    ]
    if(e.keyCode == 57) {
        if(Num == ToShowSlide2.length) return
        document.getElementById("Two_Point"+Num).innerHTML = "· " + ToShowSlide2[Num]
        Num++
    } else if (e.keyCode == 81) {
        Intro.pause()
    }
})