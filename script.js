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

const textArray = ["Web | Full Stack Developer","Web Developer"];
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