import { defaults } from 'jest-config'
import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest'

const defaultEsmPreset = createDefaultEsmPreset()
const config: JestConfigWithTsJest = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    preset: 'ts-jest/presets/default-esm',
    ...defaultEsmPreset,
    moduleNameMapper: {
        '.+.svg?.+$': '<rootDir>/src/__mocks__/svg.ts',
        '^@constants': '<rootDir>/src/constants',
        '^@assets/(.*)$': '<rootDir>/src/assets/$1',
        '^@types': '<rootDir>/src/types',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@styles': '<rootDir>/src/styles',
        '^@utils': '<rootDir>/src/utils',
        '^@hooks': '<rootDir>/src/hooks',
        '^@store': '<rootDir>/src/store',
        '^@mocks': '<rootDir>/src/__mocks__',
        '^@pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@firebase': '<rootDir>/src/firebase',
        '^firebase.config': '<rootDir>/firebase.config.ts',
    },
    transform: {
        '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
            '<rootDir>/fileTransformer.cjs',
        '^.+\\.(ts|tsx|js|jsx)?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    collectCoverageFrom: ['src/utils/!(index.ts)'],
    testEnvironment: 'jsdom',
    modulePathIgnorePatterns: ['<rootDir>/yarn.lock'],
}

export default config
