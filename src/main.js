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

$(document).ready(function() {
  var tl;

  // Hover over a link or a linkblock
  $('.project-link').hover(function() {
    // Mouse is over the element, add the class
    $('.cursor').addClass('is-hovering');

    // Get the value of the project-name attribute
    var projectName = $(this).attr('project-name');

    // Set the text of the .text-target element
    $('.text-target').text(projectName);

    // Get the width of the .text-target
    var targetWidth = $('.text-target').width();

    // As there are 3 .text-target elements in .cursor-text_wrapper grid, 
    // multiply targetWidth by 3
    targetWidth *= 3;

    // Create a GSAP timeline
    tl = gsap.timeline({repeat: -1}); // repeat indefinitely

    // Animate .cursor-text_wrapper to -100% over 6 seconds
    tl.to('.cursor-text_wrapper', {x: -targetWidth, duration: 6, ease: 'linear'});

    // Instantly animate back to 0%
    tl.set('.cursor-text_wrapper', {x: 0});

  }, function() {
    // Mouse has left the element, remove the class
    $('.cursor').removeClass('is-hovering');

    // Clear the text of the .text-target element
    $('.text-target').text('');

    // Stop the GSAP timeline
    tl.kill();
  });
});

