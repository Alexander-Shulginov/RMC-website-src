import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ opacity: 0, delay: 0.3, duration: 1.3 });

export default function aboutAnim() {
	gsap.timeline({
		scrollTrigger: {
			trigger: '.about',
			start: '-20% 75%',
			end: '100px',
		},
	})
		.from(['.about__img--primary', '.about__img--second', '.about__img--third'], {
			translateX: -700,
		})
		.to(['.about__img--primary', '.about__img--second', '.about__img--third'], {
			scale: 1.2,
			duration: 20,
			opacity: 1,
		});

	gsap.from('.about__icon', {
		scrollTrigger: {
			trigger: '.about',
			start: '-20% 100%',
			end: '490px',
			scrub: true,
		},

		rotate: 360,
		opacity: 1,
	});

	gsap.from(['.about__title', '.about__descr', '.about__info-content'], {
		scrollTrigger: {
			trigger: '.about',
			start: '-40% 75%',
			end: '100px',
		},
		opacity: 0,
		duration: 3,
	});
}
