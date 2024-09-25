# Thing-1

<p align="center">
  <img width="460" height="400" src="./public/img/pngkey.com-dr-seuss-characters-png-4807259.png">
</p>

<p align="right">
  <a href="https://www.pngkey.com/png/detail/480-4807259_dr-seuss-characters-png.png">Image Downloaded From pngkey.com</a>
</p>

## What is this thing?

For starters, this thing is not production ready. Besides it being alpha-thing, it is using the React 19 RC version.

Thing-1 is a very basic starter template created by

`npm create vite@latest thing-1 -- --template react-ts`

There are usually several things I have to do after running the above command before I am really at a point to make an initial commit and start working on a project.

This is the no framework thing with those things and some other things already done. Framework things such as Remix, Next.js, Nuxt, etc. may come later as "thing-2", "thing-3", etc.

Below is all the things I added, changed, or configured.

## What Things Are in This Thing?

- React (19.0.0-rc-04bd67a4-20240924 at time of writing)
- Vite
- TailwindCSS
- TypeScript
- ESLint
- Prettier
- Testing Library (current unmet peer dependency, not ready for React 19 but working so far)
- MSW
- Vitest
- happy-dom
- @tanstack/react-query (current unmet peer dependency, not ready for React 19 but working so far)
- @tanstack/react-query-devtools
- Headless UI
- React Icons

## Notable Things

- ESlint requires consistent type imports (use the `type` keyword).
- vite.config.ts resolves `~` to the `src` directory.
- tsconfig.app.json includes the '~' alias for `src`.
- tsconfig.app.json has noUncheckedIndexedAccess set to true.
- prettier-plugin-tailwindcss is included to sort tailwind classes consistently.
- .gitignore is original template plus extra build directories and lock files.
- .prettierignore is included. Copied .gitignore and added public directory.
- src/**tests**/setupTests.ts is included to setup MSW for testing.
- src/**tests**/fetch.test.tsx is included to confirm that MSW is working properly for testing.
- src/components/UsersList.tsx is included to confirm that MSW is working properly for development.
- @tanstack/react-query demo in UsersList.tsx.
- Simple system toggle that RESPECTS the users system preference and allows for toggle via a
  theme provider and local storage with env configurable storage key.

## Package Manager Things

pnpm is recommended (by me) for this project and all other projects.
Why? Because I like it.

```bash
# install and use pnpm
npm install -g pnpm
pnpm install
```

If you'd rather use npm, you can do so by running `npm install` instead.
