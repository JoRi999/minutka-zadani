let ring = () => {
    let alarm = document.querySelector(".alarm")
    alarm.classList.add("alarm--ring")
}

let time = prompt("Zadejte, za kolik vteřin má budík začít zvonit.") * 1000


let playAudio = () => {
    let audio = document.querySelector(".audio")
    audio.play()

}

let timeout = setTimeout(function(){
    playAudio()
    ring()
}, time)

let btn = document.createElement("button");
btn.innerHTML = "Stop the alarm";
document.querySelector(".container").appendChild(btn);
btn.addEventListener("click", function onclick(){
    clearTimeout(timeout)
})  
