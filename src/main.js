import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'

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

for (let i = 0; i < sections.length; i++) {
  const wipe = buttons[i].querySelector('.nav-button_wipe');

  gsap.to(wipe, {
    scrollTrigger: {
      trigger: sections[i],
      start: i == problematicSectionIndex ? "center center" : "top bottom",
      end: "bottom bottom",
      scrub: 0.5,
      markers: true, // show where start and end triggers are
      pinSpacing: false, // disable pinSpacing
    },
    height: "105%", // changed from width to height
  })
}

