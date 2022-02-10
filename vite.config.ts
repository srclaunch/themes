import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { name, version } from './package.json';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
      name: 'themes',
    },
    sourcemap: true,
    outDir: './dist',
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: ['react', 'styled-components'],
      output: {
        // Global vars to use in UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  define: {
    pkgJson: { name, version },
    global: {},
    process: {
      env: {},
    },
  },
  optimizeDeps: {
    exclude: ['@srclaunch/logger', '@srclaunch/ui'],
    include: [
      'react/jsx-runtime',
      'react-password-strength-bar',
      'redux-logger',
      'styled-components',
    ],
  },
  esbuild: {
    // jsxInject: `import React from 'react'`,
  },
  plugins: [
    // react({
    //   // babel: {
    //   //   plugins: [
    //   //     [
    //   //       'babel-plugin-styled-components',
    //   //       {
    //   //         displayName: true,
    //   //         fileName: false,
    //   //       },
    //   //     ],
    //   //   ],
    //   // },
    // }),
  ],
});
