# ES Dynamic Imports with create-react-app

This demo shows how to use [ES dynamic imports with webpack](https://webpack.js.org/guides/code-splitting-async/) to dynamically import code. This speeds the initial page load by deferring loading until the relevant asset is needed. Dynamic import is [currently a stage 3 feature](https://github.com/tc39/proposal-dynamic-import). Some editors [like VSCode](https://github.com/Microsoft/vscode/issues/25003) don't recognize the syntax yet.

## Quick Start
```
npm install
npm start
```