/* global module, require, __dirname */

// Configuration for building the library
module.exports = {
    mode   : 'production',
    minify: 'terser',
    entry  : {
        app: './src/main.js',
    },
    build: {
        lib: {
            entry: './src/main.js',
            name: 'AutoNumeric',
            fileName: 'autoNumeric',
            formats: ['es', 'umd', 'cjs', 'iife']
        },
    },
    resolve: {
        extensions: [
            '.js',
        ],
    },
}
