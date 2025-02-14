const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

const isDev = process.env.NODE_ENV === 'development';

// Separate configs for JS and CSS
const jsConfig = {
  entryPoints: ['src/js/index.js'],
  bundle: true,
  outfile: 'public/dist/index.js',
  minify: !isDev,
  sourcemap: isDev,
  target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
  loader: {
    '.js': 'jsx',
    '.png': 'file',
    '.svg': 'file',
    '.jpg': 'file',
    '.gif': 'file',
  },
  assetNames: 'assets/[name]-[hash]',
  metafile: true,
};

const cssConfig = {
  entryPoints: ['src/scss/styles.scss'],
  bundle: true,
  outfile: 'public/dist/styles.css',
  minify: !isDev,
  sourcemap: isDev,
  plugins: [sassPlugin()],
};

if (require.main === module) {
  const args = process.argv.slice(2);
  const watch = args.includes('--watch');
  
  if (watch) {
    // Watch mode
    Promise.all([
      esbuild.context(jsConfig).then(context => context.watch()),
      esbuild.context(cssConfig).then(context => context.watch())
    ]).then(() => {
      console.log('Watching for changes...');
    });
  } else {
    // Single build
    Promise.all([
      esbuild.build(jsConfig),
      esbuild.build(cssConfig)
    ]).catch(() => process.exit(1));
  }
}

module.exports = { jsConfig, cssConfig };
