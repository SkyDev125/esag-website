import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // Creates a custom 404 page for GitHub Pages
            fallback: '404.html'
        }),
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                console.log('HTTP Error during prerender:', { path, referrer, message });
                if (path === '/') return 'ignore'; // Suppress error for '/'
                throw new Error(message);
            }
        },
        paths: {
            base: process.argv.includes('dev') ? '' : '/esag-website'
        }
    },
    vitePlugin: {
        dynamicCompileOptions: ({ filename }) =>
            filename.includes('node_modules') ? undefined : { runes: true }
    }
};

export default config;