import { createRollupConfigs } from './scripts/base.config.js'
import slug from 'remark-slug'
import { mdsvex } from 'mdsvex'
import autoPreprocess from 'svelte-preprocess'
import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import alias from '@rollup/plugin-alias';

const production = !process.env.ROLLUP_WATCH;

const aliases = alias({
  resolve: ['.svelte', '.js', '.png', '.svg', '.md', '.css'], //optional, by default this will just look for .js files or folders
  entries: [
    { find: '^', replacement: 'src' }
  ]
});

export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, aliases]
    return cfg;
  },
  svelteWrapper: svelte => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: {
          plugins: [
            postcssImport(),
            postcssPresetEnv({ stage: 1 })
          ]
        }
      }),
      mdsvex({
        remarkPlugins: [slug],
        layout: {
          blog: 'src/layouts/Blog.svelte',
          dir: 'src/layouts/Dir.svelte'
        },
        extension: 'md'
      })
    ]
    svelte.extensions = ['.svelte', '.md']
    return svelte
  },
  swWrapper: cfg => cfg,
}

const configs = createRollupConfigs(config)

export default configs


/** wrapper example 1 */
// svelteWrapper: (cfg, ctx) => ({
//   ...cfg,
//   preprocess: mdsvex({ extension: '.md' }),
// })

/** wrapper example 2 */
// rollupWrapper: cfg => {
//   cfg.plugins = [...cfg.plugins, myPlugin()]
//   return cfg
// }