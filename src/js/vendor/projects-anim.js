import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ opacity: 0, delay: 0.3, duration: 1.3 });

export default function projectsAnim() {
	gsap.from(['.projects__notes', '.projects__title', '.tabs__nav'], {
		scrollTrigger: {
			trigger: '.projects',
			start: '-20% 100%',
			end: '100px',
		},

		opacity: 0,
		duration: 3,
	});

	gsap.timeline({
		scrollTrigger: {
			trigger: '.projects',
			start: '-20% 75%',
			end: '333px',
		},
	})
		.from('.tabs__img', { opacity: 0 })
		.to('.tabs__img', {
			opacity: 1,
		});
}
