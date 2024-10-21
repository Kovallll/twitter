import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

import removeAttribute from '@castlenine/vite-remove-attribute'
import react from '@vitejs/plugin-react'

const IS_PRODUCTION = process.env.NODE_ENV == 'production'

export default defineConfig({
    build: { sourcemap: true },
    plugins: [
        react(),
        viteTsconfigPaths(),
        IS_PRODUCTION &&
            removeAttribute({
                extensions: ['tsx'],
                attributes: ['data-cy'],
            }),
        svgr(),
    ],
})
