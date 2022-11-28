const timeEle = document.querySelectorAll(".times")

const Daily = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

setInterval(() => {
    const date = new Date;
    timeEle[0].innerHTML = Daily[date.getDay()];
    timeEle[1].innerHTML = date.getHours();
    timeEle[2].innerHTML = date.getMinutes();
    timeEle[3].innerHTML = date.getSeconds();
}, 1000)

const handleChangeBg = document.querySelector(".btnChangeBg")
const Bg = document.querySelector(".containerClock")

handleChangeBg.addEventListener("click", () => {
    let random = Math.floor((Math.random() * 10) + 1);
    Bg.style.backgroundImage = 'url(Chang'+random+'.jpg)'
})

const handleLove = document.querySelector(".btnLove")
const loveEle = document.querySelector(".love")
const loveGifEle = document.querySelector(".loveGif")

handleLove.addEventListener("click", () => {
    loveEle.style.display = "block";
    loveEle.style.marginTop = "50px"
    loveGifEle.style.display = "block"
    Bg.style.display = "none";
    handleChangeBg.style.display = "none";
    handleLove.style.display = "none";

    setInterval(() => {
        let random1 = Math.floor(Math.random() * 256);
        let random2 = Math.floor(Math.random() * 256);
        let random3 = Math.floor(Math.random() * 256);
        loveEle.style.color = 'rgb('+random1+' , '+random2+' , '+random3+')'
    }, 300)
})