import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

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
