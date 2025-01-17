import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				blue: 'rgb(13, 110, 253)'
			}
		}
	},

	daisyui: {
		darkTheme: 'night',
		themes: ['light', 'night']
	},

	plugins: [typography, daisyui]
} satisfies Config;
