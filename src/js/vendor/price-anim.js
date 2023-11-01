import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ opacity: 0, delay: 0.3, duration: 1.3 });

export default function priceAnim() {
	gsap.timeline({
		scrollTrigger: {
			trigger: '.price',
			start: '-20% 75%',
			end: '100px',
		},
	}).from('.price__top', {
		translateX: -200,
		duration: 0.4,
		delay: 0,
		stagger: 0.2,
	});

	gsap.timeline()
		.from('.price__img', {
			translateX: -299,
		})
		.to('.price__img', {
			delay: 0,
			scale: 1.2,
			duration: 20,
			opacity: 1,
		});
}
