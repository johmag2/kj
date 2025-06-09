/// <reference types="node" />
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [sveltekit()],
		build: {
			sourcemap: true,
			target: 'esnext'
		},
		define: {
			'import.meta.env.VITE_USE_MOCK_DATA': JSON.stringify(env.VITE_USE_MOCK_DATA)
		}
	};
});
