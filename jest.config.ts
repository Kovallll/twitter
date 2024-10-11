import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    moduleNameMapper: {
        '^@constants': '<rootDir>/src/constants',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@types': '<rootDir>/src/types',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@styles': '<rootDir>/src/styles',
        '^@utils': '<rootDir>/src/utils',
        '^@hooks': '<rootDir>/src/hooks',
        '^@mocks': '<rootDir>/src/mocks',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    },
    transform: {
        '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
            '<rootDir>/fileTransformer.cjs',
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.ts',
    },
    testEnvironment: 'jsdom',
}

export default config
