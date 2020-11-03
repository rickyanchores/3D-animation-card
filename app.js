// MOVEMENT ANIMATION TO HAPPEN
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//ITEMS
const title = document.querySelector(".title")
const hero = document.querySelector(".hero img");
const projects = document.querySelector(".projects button");
const info = document.querySelector(".info h1");
const socialmedia = document.querySelector(".socialmedia");

//Moving Animation Event

container.addEventListener("mousemove", (e)=> {
    let xAxis = (window.innerWidth / 2 - e.pageX) /10;
    let yAxis = (window.innerHeight / 2 - e.pageY) /10;
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

// Animate IN
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    // Popout 
    title.style.transform = "translateZ(150px)";
    hero.style.transform = "translateZ(200px)";
    socialmedia.style.transform = "translateZ(170px)";
    
});

// Animate OUT
container.addEventListener("mouseleave", e => {
    card.style.transiton = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    title.style.transform = "translateZ(0px)";
    hero.style.transform = "translateZ(0px)";
    info.style.transform = "translateZ(0px)";
})