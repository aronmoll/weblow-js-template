import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'
import jQuery from 'jquery'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

requestAnimationFrame(raf)

const items = document.querySelectorAll('.slider-item')

items.forEach(item => {
    gsap.to(item.querySelector('.slider-image'), {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.selected-work_wrapper',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    })
})

const buttons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('[scroll-trigger]');

for (let i = 0; i < sections.length; i++) {
  const wipe = buttons[i].querySelector('.nav-button_wipe');
  
  gsap.to(wipe, {
    scrollTrigger: {
      trigger: sections[i],
      start: "top bottom", 
      end: "bottom bottom", 
      scrub: 0.5,
    },
    height: "105%", 
  })
}

// Select the fixed element with the attribute "rotate"
const element = document.querySelector('[rotate]');

gsap.to(element, {
  rotation: 180,
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

// Get the cursor element
const cursor = document.querySelector(".cursor");

// Register mousemove event listener on the document
document.addEventListener("mousemove", moveCursor);

// Function to move the cursor
function moveCursor(event) {
  // Get the mouse position
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Use GSAP to animate the cursor's position
  gsap.to(cursor, {
    x: mouseX,
    y: mouseY,
    duration: 0.3,
    ease: "power2.out",
  });
}
