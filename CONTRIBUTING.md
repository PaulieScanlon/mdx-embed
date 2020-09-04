# How to Contribute

## Get Started

To get started with mdx-embed we suggest you clone the repo then do the following:

- 1. Install dependencies `yarn` or `npm install`
- 2. Run the build (just the once is enough) `yarn build` or `npm run build`
- 3. Spin up our Storybook development environment `yarn storybook` or `npm run storybook`

## Change an existing component

Feel free to make changes wherever you see bit but please be mindful that removing or changing prop names will count as a breaking change and we'll only do this if it's absolutely necessary.

Check the existing props still work by checking against the story in the components `.stories.mdx` file. Each prop usually means the component will behave in a different way so please check the component still does what it's supposed to do when you're altering prop _values_ or code.

## To add a new Embed

To add a new component there are several locations the new component needs to go, the rough outline is as follows:

- Add a new component to `mdx-embed/src/components/component-folder/component-name.tsx`
- All components are `FunctionComponents` and named using the [PascalCase](https://wiki.c2.com/?PascalCase) convention
- Add an `index.ts` file to the same dir and export the component: `export { ComponentName } from './component-name';`
- Add export to `mdx-embed/src/index.ts`: `export { ComponentName } from './components/component-name`
- Include component in the `components` object that gets passed onto the MDXProvider in `src/components/mdx-embed-provider/mdx-embed-provider.tsx`
- Add component to stories `docs/src/components/component-name.stories.mdx`

## Final checks

It's important for our users to understand how the component works so we always try to give any props the component has a brief description of what it does _and_ create a `<Story />` for each prop visually showing the usage.

## Create PR

Once you're happy with your new component create a PR that merges in to the `main` branch and one of the team will happily review your code.

The team are on hand should you require any assistance of have any questions at all so please feel free to reach out on Twitter

- Paul Scanlon | [@pauliescanlon](https://twitter.com/PaulieScanlon)
- Scott Spence | [@spences10](https://twitter.com/spences10)
- Rich Haines | [@studio_hungry](https://twitter.com/studio_hungry)