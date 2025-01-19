import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

import { emerald, night } from 'daisyui/src/theming/themes';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {}
		}
	},

	daisyui: {
		darkTheme: 'cybercupdark',
		themes: [
			{
				cybercuplight: {
					...emerald,
					primary: 'rgb(13, 110, 253)',
					accent: '#fdcb00'
				},
				cybercupdark: {
					...night,
					primary: 'rgb(13, 110, 253)',
					accent: '#fdcb00'
				}
			}
		]
	},

	plugins: [typography, daisyui]
} satisfies Config;
