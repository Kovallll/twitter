import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    moduleNameMapper: {
        '.+.svg?.+$': '<rootDir>/svgTransform.ts',
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
    },
    collectCoverageFrom: ['src/utils/!(index.ts)'],
    testEnvironment: 'jsdom',
}

export default config
