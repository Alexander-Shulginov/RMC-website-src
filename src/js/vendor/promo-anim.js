import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ opacity: 0, delay: 0.3, duration: 1.3 });

export default function promoAnim() {
	gsap.from('.promo__content', {
		scrollTrigger: {
			trigger: '.promo',
			start: '-20% 100%',
			end: '100px',
		},

		opacity: 0,
		duration: 3,
	});
}
