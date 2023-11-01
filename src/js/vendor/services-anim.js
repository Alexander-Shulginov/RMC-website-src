import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ opacity: 0, delay: 0.3, duration: 1.3 });

export default function servicesAnim() {
	gsap.from(['.services__notes', '.services__title', '.services__descr'], {
		scrollTrigger: {
			trigger: '.services',
			start: '-20% 100%',
			end: '100px',
		},

		opacity: 0,
		duration: 3,
	});

	gsap.timeline({
		scrollTrigger: {
			trigger: '.services',
			start: '-20% 75%',
			end: '100px',
		},
	})
		.from('.services__item', {
			translateX: -200,
			duration: 0.4,
			delay: 0,
			stagger: 0.2,
		})
		.to('.services__img', {
			opacity: 1,
		});
}
