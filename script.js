
const typewriterText = document.getElementById('typewriter-text');
// List of different information to be typed
const texts = [
  "Computing Student",
  "Systems Analyst",
  "Mobile Developer",
  "Desktop Application Developer",
  "Web And Software Developer",
  "Cloud Computing",
  "Ethical Hacking",
  "Cybersecurity",
  "CISCO CCNA1",
  "UI/UX Designer", 
  "Springboot",
  "Angular",
  "Node-RED",
  "Java",
  "Java FX",
  "mySQL",
  "PostgreSQL,
  "Firebase",
  "Kali Linux",
  "Freelancer",
  
];
const typingDelay = 100; // Delay between typing each character
const erasingDelay = 70; // Delay before erasing the text
const newTextDelay = 2000; // Delay before typing the next text
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (charIndex < texts[textIndex].length) {
    typewriterText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', type);







const openModalLink = document.getElementById("openModalLink");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close-button");

openModalLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  modal.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
