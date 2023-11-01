import { gsap } from 'gsap';

gsap.defaults({ opacity: 0, delay: 0.3, duration: 1.3 });

export default function heroAnim() {
	gsap.timeline()
		.from('.hero__img', {
			translateX: -900,
		})
		.to('.hero__img', {
			delay: 0,
			scale: 1.2,
			duration: 20,
			opacity: 1,
		});

	gsap.from('.hero__content', {
		scale: 0,
	});
}
