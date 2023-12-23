import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        modules: {
            generateScopedName: '[local]_[hash:base64:4]',
            localsConvention: 'camelCaseOnly',
        },
    },
    plugins: [react()],
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
