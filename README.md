# onze-jornada

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Visualização do "11 da Jornada" da Liga Portugal bwin 2021-22.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

- Rename the file `.env.local.example` to `.env.local`.
- Development: `yarn dev`.
- Deployment: `yarn build`.

## References

- Aman Mittal's (Crowdbotics) [How to Use Airtable as a Cloud-Based Database for a React App](https://blog.crowdbotics.com/use-airtable-cloud-based-database-for-react-app/) blog post.
- 11 da Jornada (Liga Portugal bwin):
  - J1: [Jornalistas dos desportivos elegem 11 da Jornada](https://www.ligaportugal.pt/pt/epocas/20212022/noticias/geral/liga-portugal-bwin/jornada-1/jornalistas-dos-desportivos-elegem-11-da-jornada).

## Notes

- [34 jornadas](https://www.ligaportugal.pt/pt/liga/calendario/completo/20212022/ligaportugalbwin).
- 11 da Jornada (Liga Portugal bwin):
  - Esquema tático: 4x3x3.
- In React 17, with the [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html), you don't need to import React (`import React from 'react';`) to use JSX. [Automated script](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports) (`npx react-codemod update-react-imports`).
- CRA:
  - [Adding Development Environment Variables In `.env`](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env).
  - [dotenv](https://github.com/motdotla/dotenv) package.
  - [Secret Keys in React](https://www.rockyourcode.com/secret-keys-in-react/) blog post.
  - **Note**: _WARNING: Do not store any secrets (such as private API keys) in your React app! Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files._
  - [How to Securely Access Secret API keys using Netlify Functions in a React App](https://www.freecodecamp.org/news/how-to-access-secret-api-keys-using-netlify-functions-in-a-react-app/) blog post.
- [Airtable API](https://airtable.com/api) + [airtable](https://www.npmjs.com/package/airtable) package. Alternative: [airtable-plus](https://www.npmjs.com/package/airtable-plus). `yarn add airtable`.
- [Netlify CLI](https://docs.netlify.com/cli/get-started/):
  - [CLI](https://github.com/netlify/cli/blob/main/docs/netlify-dev.md).
  - [Detected frameworks](https://github.com/netlify/framework-info/tree/main/src/frameworks) ([CRA](https://github.com/netlify/framework-info/blob/main/src/frameworks/create-react-app.json) is included).
  - `yarn add -D netlify-cli`.
  - [Run a local development environment](https://docs.netlify.com/cli/get-started/#run-a-local-development-environment).
  - [Environment variables](https://github.com/netlify/cli/blob/main/docs/netlify-dev.md#environment-variables).
- [concurrently](https://www.npmjs.com/package/concurrently):
  - To run scripts/commands in parallel. Alternative: [npm-run-all](https://www.npmjs.com/package/npm-run-all).
  - `yarn add -D concurrently`.
  - `yarn remove concurrently -D`.
  - It supports `npm`, `yarn`, and `pnpm`.
- [prettier-plugin-toml](https://github.com/bd82/toml-tools/tree/master/packages/prettier-plugin-toml).
- [Danfo.js](https://danfo.jsdata.org/) package (pandas for JavaScript).
- `yarn remove lodash --dev && yarn add lodash`.
- ESLint:
  - `yarn run eslint --print-config package.json`.
- Chakra UI:
  - For React (for Next.js and CRA as well).
  - `yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4`.
  - [CSSReset](https://github.com/chakra-ui/chakra-ui/blob/main/packages/css-reset/src/css-reset.tsx).
  - 🌀: emoji for learning curve.
  - Features:
    - Style props.
    - Gradient API (including Text Gradient API).
    - Color mode ([CRA](https://chakra-ui.com/docs/features/color-mode#for-create-react-app)).
    - CSS variables (Chakra UI now converts theme tokens to CSS variables).
    - Responsive styles. It uses the `@media(min-width)` media query to ensure that interfaces are mobile-first.
