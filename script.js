/* project views */

// Create an intersection observer to detect when projects come into view
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-up'); // Trigger the slide animation
      observer.unobserve(entry.target); // Stop observing once the animation is triggered
    }
  });
}, {
  threshold: 0.5 // Trigger animation when 50% of the project is visible in the viewport
});

// Observe each project element
projects.forEach(project => {
  observer.observe(project);
});

/* Home section */

const textArray = ["Front-end Developer","Back-end Developer","Full Stack Developer"];
let textIndex = 0; 
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;  // Speed for typing
const erasingSpeed = 50;  // Speed for erasing
const delayBetweenTexts = 1000; // Delay before switching text

function typeEffect() {
  const textElement = document.getElementById("typing-text");
  const currentText = textArray[textIndex];

  if (!isDeleting) {
    // Typing forward
    textElement.textContent = currentText.substring(0, charIndex++);
  } else {
    // Erasing backward
    textElement.textContent = currentText.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true), delayBetweenTexts);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // Switch to the next text
  }

  setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/*  ------------------ About section---------------*/

window.addEventListener("scroll", function () {
  let line = document.getElementById("line");
  let content = document.getElementById("content");

  if (window.scrollY > 100) { // Trigger after scrolling 100px
      line.classList.add("show-line"); 
      content.classList.add("show-content"); 
  } else {
      line.classList.remove("show-line"); 
      content.classList.remove("show-content"); 
  }
});
document.getElementById("moreBtn").addEventListener("click", function () {
  let extraText = document.getElementById("extraText");
  if (extraText.style.display === "none") {
      extraText.style.display = "block";
      this.textContent = "Less";
  } else {
      extraText.style.display = "none";
      this.textContent = "More";
  }
});
/* ----------------- skills -----------------*/

document.addEventListener("DOMContentLoaded", function() {
  const gridItems = document.querySelectorAll(".grid-item img");
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("visible");
              }, index * 300); // Delay each image appearance by 300ms
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  gridItems.forEach(item => {
      observer.observe(item);
  });
});