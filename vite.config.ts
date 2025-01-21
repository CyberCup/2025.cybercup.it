import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			customCollections: {
				custom: FileSystemIconLoader('src/lib/icons/')
			}
		})
	]
});
