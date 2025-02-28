import typescript from '@rollup/plugin-typescript';
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';

export default {
	input: ['src/index.ts', 'src/bin.ts'],
	output: {
		dir: 'dist',
		format: 'cjs'
	},
	plugins: [
		resolve(), // Resolves node_modules
		sucrase({
			transforms: ['typescript'],
		}),
		commonjs({ // Converts CommonJS modules to ES6
			include: 'node_modules/**', // Include all modules in node_modules
		}),
		typescript(),
		preserveShebangs(),
	]
};
