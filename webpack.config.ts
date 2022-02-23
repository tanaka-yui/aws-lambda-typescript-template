import path from 'path'
import { Configuration } from 'webpack'

const dir = path.resolve(__dirname, './')

const config: Configuration = {
  target: 'node',
  entry: {
    index: `${dir}/src/index`,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      type: 'commonjs2',
    },
  },
  externals: ['aws-sdk'],
  module: {
    rules: [{ test: /\.ts$/, use: [{ loader: 'ts-loader' }] }],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
}

export default config
