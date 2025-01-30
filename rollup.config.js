import typescript from '@rollup/plugin-typescript';
import { preserveShebangs } from 'rollup-plugin-preserve-shebangs';

export default {
	input: ['src/index.ts', 'src/bin.ts'],
	output: {
		dir: 'dist',
		format: 'cjs'
	},
	plugins: [
		typescript(),
		preserveShebangs(),
	]
};
