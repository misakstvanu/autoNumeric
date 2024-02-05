/* global module, require */

module.exports = {
    build: {
        mode   : 'development',
        devtool: 'cheap-source-map',
        minify: 'terser',
        lib: {
            entry: './src/main.js',
            name: 'AutoNumeric',
            fileName: 'autoNumeric',
            formats: ['es', 'umd', 'cjs', 'iife']
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
              // Provide global variables to use in the UMD build
              // for externalized deps
              globals: {
                vue: 'Vue',
              },
            },
        },
        resolve: {
            extensions: [
                '.js',
            ],
        },
    }
};
