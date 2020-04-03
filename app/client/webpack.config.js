const path = require('path');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const PUBLIC_PATH = `./app/client/${BUILD_DIR}/`;
const APP_DIR = path.resolve(__dirname, 'src');

const MiniCssLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    // you can specify a publicPath here
    publicPath: PUBLIC_PATH,
  },
};

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true,
  },
};

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true,
  },
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        overrideBrowserslist: [ '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 10' ],
      }),
    ],
  },
};

const baseConfig = {

  entry: path.join(APP_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [ 'babel-loader', 'eslint-loader' ],
      },
      {
        test: [ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/ ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:8].[ext]',
        },
      },
    ],
  },

  plugins: [
    //   new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin([ BUILD_DIR ])
  ],

};

module.exports = (_, argv) => {

  if (argv.mode === 'development') {

    return merge(baseConfig, {

      module: {
        rules: [
          {
            test: /\.global\.(scss|sass|css)$/,
            exclude: [ /node_modules/, /\.module\.(scss|sass|css)$/ ],
            use: [ 'style-loader', CSSLoader, postCSSLoader, 'sass-loader' ],
          },
          {
            test: /\.(scss|sass|css)$/,
            exclude: [ /node_modules/, /\.global\.(scss|sass|css)$/ ],
            use: [ 'style-loader', CSSModuleLoader, postCSSLoader, 'sass-loader' ],
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ],
      },

      // These are big so we leave them out of production build
      // change to 'eval-source-map' if you need to debug node-modules on safari
      devtool: 'cheap-module-source-map',

    });

  }

  if (argv.mode === 'production') {

    return merge(baseConfig, {

      optimization: {

        minimizer: [
          new TerserPlugin({
            terserOptions: {
              parse: {
                // we want terser to parse ecma 8 code. However, we don't want it
                // to apply any minfication steps that turns valid ecma 5 code
                // into invalid ecma 5 code. This is why the 'compress' and 'output'
                // sections only apply transformations that are ecma 5 safe
                // https://github.com/facebook/create-react-app/pull/4234
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                // Disabled because of an issue with Uglify breaking seemingly valid code:
                // https://github.com/facebook/create-react-app/issues/2376
                // Pending further investigation:
                // https://github.com/mishoo/UglifyJS2/issues/2011
                comparisons: false,
                // Disabled because of an issue with Terser breaking valid code:
                // https://github.com/facebook/create-react-app/issues/5250
                // Pending futher investigation:
                // https://github.com/terser-js/terser/issues/120
                inline: 2,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: false,
                // Turned on because emoji and regex is not minified properly using default
                // https://github.com/facebook/create-react-app/issues/2488
                ascii_only: true,
              },
            },
            // Use multi-process parallel running to improve the build speed
            // Default number of concurrent runs: os.cpus().length - 1
            parallel: true,
            // Enable file caching
            cache: true,
            sourceMap: true,
          }),
          new OptimizeCSSAssetsPlugin({}),
        ],
      },

      // Don't attempt to continue if there are any errors.
      bail: true,

      // We generate sourcemaps in production. This is slow but gives good results.
      // You can exclude the *.map files from the build during deployment.
      devtool: 'source-map',

      module: {
        rules: [
          {
            test: /\.global\.(scss|sass|css)$/,
            exclude: [ /node_modules/, /\.module\.(scss|sass|css)$/ ],
            use: [ MiniCssLoader, CSSLoader, postCSSLoader, 'sass-loader' ],
          },
          {
            test: /\.(scss|sass|css)$/,
            exclude: [ /node_modules/, /\.global\.(scss|sass|css)$/ ],
            use: [ MiniCssLoader, CSSModuleLoader, postCSSLoader, 'sass-loader' ],
          },
        ],
      },

      externals: {
        React: 'React',
        ReactDOM: 'ReactDOM',
      },

      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: 'css/style.css',
        }),
      ],

    });

  }

};
