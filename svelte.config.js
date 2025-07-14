import { mdsvex } from 'mdsvex';

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

const config = defineConfig({
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: import.meta.dirname + '/src/layouts/News.svelte'
		})
	],
	kit: {
		adapter: adapter({ fallback: '404.html' })
	},
	extensions: ['.svelte', '.svx']
});

export default config;
