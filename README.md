```json
{
  "name": "redux",
  "version": "5.0.0-alpha.0",
  "description": "Predictable state container for JavaScript apps",
  "license": "MIT",
  "homepage": "http://redux.js.org",
  "repository": "github:reduxjs/redux",
  "bugs": "https://github.com/reduxjs/redux/issues",
  "keywords": [
    "redux",
    "reducer",
    "state",
    "predictable",
    "functional",
    "immutable",
    "hot",
    "live",
    "replay",
    "flux",
    "elm"
  ],
  "authors": [
    "Dan Abramov <dan.abramov@me.com> (https://github.com/gaearon)",
    "Andrew Clark <acdlite@me.com> (https://github.com/acdlite)"
  ],
  // cjs node ssr
  "main": "lib/redux.js",
  // umd
  "unpkg": "dist/redux.js",
  // es
  "module": "es/redux.js",
  // 被项目包含的文件名数组
  "types": "types/index.d.ts",
  "files": [
    "dist",
    "lib",
    "es",
    "src",
    "types"
  ],
  "scripts": {
    "clean": "rimraf lib dist es coverage types",
    "format": "prettier --write \"{src,test}/**/*.{js,ts}\" \"**/*.md\"",
    "format:check": "prettier --list-different \"{src,test}/**/*.{js,ts}\" \"**/*.md\"",
    "lint": "eslint --ext js,ts src test",
    "check-types": "tsc --noEmit",
    "test": "jest && tsc -p test/typescript",
    "test:types": "tsc -p test/typescript",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "build": "rollup -c",
    "pretest": "npm run build",
    "prepublishOnly": "npm run clean && npm run check-types && npm run format:check && npm run lint && npm test",
    "examples:lint": "eslint --ext js,ts examples",
    "examples:test": "cross-env CI=true babel-node examples/testAll.js"
  },
  "dependencies": {
    "@babel/runtime": "^7.18.9"
  },
  "devDependencies": {
    "@babel/cli": "^7.18.9",
    "@babel/core": "^7.18.9",
    "@babel/eslint-parser": "^7.18.9",
    "@babel/node": "^7.18.9",
    "@babel/plugin-external-helpers": "^7.18.6",
    "@babel/plugin-proposal-object-rest-spread": "^7.18.9",
    "@babel/plugin-transform-runtime": "^7.18.9",
    "@babel/preset-env": "^7.18.9",
    "@babel/preset-flow": "^7.18.6",
    "@babel/preset-typescript": "^7.18.6",
    "@babel/register": "^7.18.9",
    "@rollup/plugin-babel": "^5.3.1",
    "@rollup/plugin-node-resolve": "^13.3.0",
    "@rollup/plugin-replace": "^4.0.0",
    "@types/jest": "^28.1.6",
    "@types/node": "^18.0.6",
    "@typescript-eslint/eslint-plugin": "^5.30.7",
    "@typescript-eslint/parser": "^5.30.7",
    "babel-jest": "^28.1.3",
    "cross-env": "^7.0.3",
    "eslint": "^8.20.0",
    "eslint-config-react-app": "^7.0.1",
    "eslint-import-resolver-typescript": "^3.3.0",
    "eslint-plugin-flowtype": "^8.0.3",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "glob": "^8.0.3",
    "jest": "^28.1.3",
    "netlify-plugin-cache": "^1.0.3",
    "prettier": "^2.7.1",
    "rimraf": "^3.0.2",
    "rollup": "^2.77.0",
    "rollup-plugin-terser": "^7.0.2",
    "rollup-plugin-typescript2": "^0.32.1",
    "rxjs": "^7.5.6",
    "ts-jest": "^28.0.7",
    "typescript": "^4.7.4"
  },
  "npmName": "redux",
  "npmFileMap": [
    {
      "basePath": "/dist/",
      "files": [
        "*.js"
      ]
    }
  ],
  "sideEffects": false
}
```