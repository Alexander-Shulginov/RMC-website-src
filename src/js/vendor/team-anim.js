import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ opacity: 0, delay: 0.3, duration: 1.3 });

export default function teamAnim() {
	gsap.from(['.team__notes', '.team__title'], {
		scrollTrigger: {
			trigger: '.team',
			start: '-20% 100%',
			end: '100px',
		},

		opacity: 0,
		duration: 3,
	});

	gsap.timeline({
		scrollTrigger: {
			trigger: '.team',
			start: '-30% 75%',
			end: '333px',
		},
	})
		.from('.team__photo', { opacity: 0, width: 0, height: 0 })
		.to('.team__photo', {
			opacity: 1,
		});
}
