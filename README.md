# React Next Boilerplate

## What's inside it?

- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [NextJS](https://nextjs.org/docs)
- [Styled Components](https://styled-components.com/docs)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [PWA](https://web.dev/progressive-web-apps/) support
- [Plop](https://plopjs.com/) to automatize components creation structure, see more detail [here](https://github.com/rodrigowpl/react-next-boilerplate#components-structure)

## Dependencies
- Node js => v10

## Up and Running
- Install dependencies `yarn (or npm i)`
- Run `yarn dev (or npm dev)` to run next development server (it  will be available in `http://localhost:3000`
- Run `yarn storybook` to run storybook development server (it will be available in `http://localhost:6006`)
- Run `yarn generate [ComponentName` to create a new component structure automatically (the result will be generated in `src/components/[ComponentName`)

## Available scripts
- `yarn dev (or npm dev)`: Run next development server
- `yarn build (or npm run build)`: Generate next production build
- `yarn start (or npm start)`: Run next production server
- `yarn test (or npm run test)`: Run tests
- `yarn test:watch (or npm run test)`: Run tests in watch mode

## Components structure
```
├── /src/
│   ├── /components/
│       ├── /[ComponentName]/
            ├── /index.tsx/   # Component file
            ├── /stories.tsx/ # Component Storybook story
            ├── /styles.ts/   # Component styled-components styles
            ├── /test.tsx/    # Component test file
```


## How to use it?
Run `yarn create next-app -e https://github.com/rodrigowpl/react-next-boilerplate`

Enjoy it :)
