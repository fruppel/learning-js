import buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundled.js',
        format: 'esm'
    },
    plugins: [buble()]
}
