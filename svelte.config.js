import { sveltePreprocess } from "svelte-preprocess"
import adapter from '@sveltejs/adapter-auto'

const config = {
	preprocess: [sveltePreprocess()],
	kit: {
		adapter: adapter()
	}
}

export default config