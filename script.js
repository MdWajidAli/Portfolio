let daynight = document.querySelector(".daynight");

let banner  = document.querySelector(".banner");

daynight.addEventListener("click",() => {
    banner.classList.toggle("night");
})


let typingEffect = new Typed("#transition",{
    strings :["Learner","Developer","Tech Enthusiast"],
    loop : true,
    typingSpeed : 100,
    backSpeed : 50,
    backDelay : 1000
})