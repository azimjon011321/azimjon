const planets={
 Mercury:{description:"Mercury is the smallest planet in our solar system and the closest to the Sun.",facts:["Distance from Sun: 57.9 million km","Diameter: 4,879 km","Moons: 0"]},
 Venus:{description:"Venus is a hot world covered in thick clouds. It has the hottest surface of all the planets.",facts:["Distance from Sun: 108.2 million km","Diameter: 12,104 km","Moons: 0"]},
 Earth:{description:"Earth is our home planet and the only known world with life.",facts:["Distance from Sun: 149.6 million km","Diameter: 12,742 km","Moons: 1"]},
 Mars:{description:"Mars is known as the Red Planet. Scientists are studying it for signs of ancient life.",facts:["Distance from Sun: 227.9 million km","Diameter: 6,779 km","Moons: 2"]},
 Jupiter:{description:"Jupiter is the largest planet in our solar system, famous for its Great Red Spot.",facts:["Distance from Sun: 778.6 million km","Diameter: 139,820 km","Moons: 95"]},
 Saturn:{description:"Saturn is a gas giant famous for its beautiful rings made of ice and rock.",facts:["Distance from Sun: 1.43 billion km","Diameter: 116,460 km","Moons: 146"]},
 Uranus:{description:"Uranus is an ice giant that rotates almost on its side.",facts:["Distance from Sun: 2.87 billion km","Diameter: 50,724 km","Moons: 28"]},
 Neptune:{description:"Neptune is a distant blue planet with extremely powerful winds.",facts:["Distance from Sun: 4.5 billion km","Diameter: 49,244 km","Moons: 16"]}
};

const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");menuBtn.textContent=nav.classList.contains("open")?"✕":"☰";});
document.querySelectorAll(".nav a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuBtn.textContent="☰";}));

const modal=document.getElementById("planetModal");
const modalTitle=document.getElementById("modalTitle");
const modalDescription=document.getElementById("modalDescription");
const modalFacts=document.getElementById("modalFacts");

document.querySelectorAll(".details-btn").forEach(button=>{
 button.addEventListener("click",()=>{
  const name=button.closest(".planet-card").dataset.planet;
  const planet=planets[name];
  if(!planet)return;
  modalTitle.textContent=name.toUpperCase();
  modalDescription.textContent=planet.description;
  modalFacts.replaceChildren(...planet.facts.map(fact=>{const p=document.createElement("p");p.textContent="✦ "+fact;return p;}));
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
 });
});

function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",event=>{if(event.target===modal)closeModal();});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeModal();});

const sections=document.querySelectorAll("main section[id]");
const links=document.querySelectorAll(".nav a");
window.addEventListener("scroll",()=>{
 let current="home";
 sections.forEach(section=>{if(window.scrollY>=section.offsetTop-180)current=section.id;});
 links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});

const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll(".planet-card,.mission>div,.section-heading").forEach(element=>{element.classList.add("reveal");revealObserver.observe(element);});

console.log("SPACE EXPLORER loaded successfully.");