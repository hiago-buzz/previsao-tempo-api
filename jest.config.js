const { resolve } = require('path');
const root = (__dirname);
module.exports ={
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper:{
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1'
    }
}