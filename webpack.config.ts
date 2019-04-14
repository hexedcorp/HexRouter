import { default as HtmlWebpackPlugin } from 'html-webpack-plugin';
import typescriptPluginStyledComponents from 'typescript-plugin-styled-components';
import { Configuration } from 'webpack';

interface HexConfig extends Configuration {
  devServer?: {
    historyApiFallback?: boolean;
  };
}

const styledComponentsTransformer = typescriptPluginStyledComponents();

const config: HexConfig = {
  entry: './src/entry/index.tsx',
  output: {
    filename: 'dist/bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/entry/index.html' })],
};

export default config;
