import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/lib/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    globals: {react: 'React'},
    name: 'TestRollup'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
    // indicate which modules should be treated as external
    external: ['react'],
    
};