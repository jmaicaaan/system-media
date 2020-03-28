import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    // https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
    format: 'umd',
    name: 'bundle',
    globals: {
      'react': 'React'
    },
  },
  external: [
    'react'
  ],
  plugins: [resolve()]
};
