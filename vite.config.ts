import removeTestIdAttribute from 'rollup-plugin-jsx-remove-attributes'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

export default defineConfig({
    build: { sourcemap: true },
    plugins: [
        react(),
        viteTsconfigPaths(),
        removeTestIdAttribute({
            attributes: ['data-cy'],
            usage: 'vite',
        }),
    ],
  
})
