import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: 'esnext', // needed to final build
    },
    css: {
        modules: {
            generateScopedName: '[local]_[hash:base64:4]',
            localsConvention: 'camelCaseOnly',
        },
    },
    plugins: [
        react(),
        federation({
            // default file name
            // Modules to expose
            exposes: {
                './button': './src/shared/ui/button/index.ts',
            },

            // name of the fed group...
            filename: 'remoteEntry.js',

            name: 'remote-app',
            shared: ['react', 'react-dom'], // libs/deps to be shared
        }),
    ],
    resolve: {
        alias: {
            $__mocks__: resolve(__dirname, './src/__mocks__'),
            $__tests__: resolve(__dirname, './src/__tests__'),
            $app: resolve(__dirname, './src/app'),
            $pages: resolve(__dirname, './src/pages'),
            $shared: resolve(__dirname, './src/shared'),
            $types: resolve(__dirname, './src/types'),
            $widgets: resolve(__dirname, './src/widgets'),
        },
    },
});
