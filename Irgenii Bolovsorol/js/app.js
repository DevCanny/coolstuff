var StuffToChange = document.getElementById("One_Title")
var StuffToAlt = document.getElementById("One_alt")
var Intro = new Audio()
Intro.src = "./intro.mp3"
var Num = 0

document.addEventListener("keydown", e => {
    var WaitTime = 700
    var ToShowSlide2 = [
        "Эелдэг байх",
        "please",
        "fill me",
        "for",
        "damn",
        "sake",
    ]
    if (e.keyCode == 48){
        Intro.play()
        StuffToChange.innerHTML = "Бусадтай"
        setTimeout(function(){
            StuffToChange.innerHTML = "Бусадтай зөв"
        },WaitTime)
        setTimeout(function(){
            StuffToChange.innerHTML = "Бусадтай зөв ойлголцохын"
        },WaitTime * 2)
        setTimeout(function(){
            StuffToChange.innerHTML = "Бусадтай зөв ойлголцохын ач"
        },WaitTime * 3)
        setTimeout(function(){
            StuffToChange.innerHTML = "Бусадтай зөв ойлголцохын ач тус"
        },WaitTime * 4)
        setTimeout(function(){
            StuffToAlt.innerHTML = "haha stinky poopoo lol"
            Intro.stop()
        },WaitTime * 6)
    } else if(e.keyCode == 57) {
        if(Num == ToShowSlide2.length){return}
        document.getElementById("Two_Point"+Num).innerHTML = "· " + ToShowSlide2[Num]
        Num++
    }
})
