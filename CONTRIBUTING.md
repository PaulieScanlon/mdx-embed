# How to Contribute

## Get Started

To get started with mdx-embed we suggest you clone the repo then do the following:

- 1. Install dependencies `yarn` or `npm install`
- 2. Run the build (just the once is enough) `yarn build` or `npm run build`
- 3. Spin up our Storybook development environment `yarn storybook` or `npm run storybook`

## Change an existing component

Feel free to make changes wherever you see bit but please be mindful that removing or changing prop names will count as
a breaking change and we'll only do this if it's absolutely necessary.

Check the existing props still work by checking against the story in the components `.stories.mdx` file. Each prop
usually means the component will behave in a different way so please check the component still does what it's supposed
to do when you're altering prop _values_ or code.

## To add a new component

To add a new component there are several locations the new component needs to go, the rough outline is as follows:

- Add a new component to `mdx-embed/src/components/component-folder/component-name.tsx`
- All components are `FunctionComponents` and named using the [PascalCase](https://wiki.c2.com/?PascalCase) convention
- Add an `index.ts` file to the same dir and export the component: `export { ComponentName } from './component-name';`
- Add export to `mdx-embed/src/index.ts`: `export { ComponentName } from './components/component-name`
- Include component in the `components` object that gets passed onto the MDXProvider in
  `src/components/mdx-embed-provider/mdx-embed-provider.tsx`
- Add component to stories `docs/pages/components/component-name.stories.mdx`

## Final checks

It's important for our users to understand how the component works so we always try to give any props the component has
a brief description of what it does _and_ create a `<Story />` for each prop visually showing the usage.

## Create PR

Once you're happy with your new component create a PR that merges in to the `main` branch and one of the team will
happily review your code.

The team are on hand should you require any assistance of have any questions at all so please feel free to reach out on
Twitter

- Paul Scanlon | [@pauliescanlon](https://twitter.com/PaulieScanlon)
- Scott Spence | [@spences10](https://twitter.com/spences10)
- Rich Haines | [@studio_hungry](https://twitter.com/studio_hungry)

## Testing WIP

### Unit Testing

Each component will at some point require at least one test to check it renders correctly. Each component in
`mdx-embed/src/components/` is wrapped in what we call the **GeneralObserver**.

This component is responsible for ensuring the 3rd party embed script isn't invoked until the component has entered the
viewport. This is particularly important for Lighthouse scores and page load speeds. If a blog post for example has 10
or 15 embed codes, Twitter, CodePen, YouTube etc on the page we don't want to load all that 3rd party JavaScript right
away, instead we wait until the reader has scrolled down to where the component is used and when the component is "in
view" **GeneralObserver** which is an
[Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) triggers a React
state change which causes the children to be rendered in the DOM

This presents an issue when we come to testing the components because we need to fake the "scrolled in to view" action
which allows the children of **GeneralObserver** to render.

To _mock_ this in a test we've globally exposed two methods:

- `addIntersectionObserver()`
- `triggerGeneralObserver()`

...and since we're using Testing Library this state change must be wrapped in an
[act](https://testing-library.com/docs/react-testing-library/api#act).

With that said we require each `test(() => {...})` to contain:

- `beforeEach(() => {...})` to `addIntersectionObserver()`
- `act(() => {...})` to `triggerGeneralObserver()`

That looks like something like the below:

- The `(window as any)` is a TypeScript thing... Paul is working on it,
- act must return something even, `undefined` is ok

```javascript
describe('<CodePen />', () => {

  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<CodePen codePenId="PNaGbb" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('codepen')).toBeDefined();
  });
});
```

The other important part of the test is the use of `getByTestId` this is a special data attribute we use from Testing
Library called `data-testid` and will need to be added to components with _new_ tests.

In the `CodePen` example that looks a bit like this:

```javascript
  ...
  <GeneralObserver>
    <iframe
      data-testid="codepen"
      ...
    />
  </GeneralObserver>
  ...
```

### Integration tests

We're using Cypress to test that 3rd party scripts are executed by our components and we assert them as if they had been
loaded by a browser.

Cypress can run in "browser" mode or "headless" mode. For the CI pipeline we'll run in headless mode and for development
testing you can run in "browser" mode.

> Note for Windows Subsystem for Linux users: some extra setup is required.
> [A blogpost guide for WSL2](https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress).  
> For WSL1, the only difference with those WSL2 instructions is to set the DISPLAY variable as `DISPLAY=0:0`.

To run integration tests run the following:

- `yarn cy:test`

The integration browser tests differ slightly to what you might expect in that we're not testing if the providers embeds
look or work in various browsers as this is the responsibility of providers themselves. We just need to know that our
components that wrap the embed codes do in fact load the correct embed widget. Assertions can be made by attempting to
"find" parts of the providers UI.

The `CodePen` integration tests looks a bit like this:

```javascript
context('<CodePen />', () => {
  it('it loads codepen nav, output and footer', () => {
    cy.visit('/iframe.html?id=components-codepen--usage&viewMode=story');
    cy.getIframeBody().find('#embed-nav').should('not.be.undefined');
    cy.getIframeBody().find('#output').should('not.be.undefined');
    cy.getIframeBody().find('#embed-footer').should('not.be.undefined');
  });
});
```

To find the Storybook `cy.visit(/iframe.html?id=components=)` URL for each components integration test do the following:

- Spin up storybook `yarn storybook`
- Find the Usage story and ensure you're on the "Canvas" tab.
- In the toolbar at the top to the far right of the screen is the "Open canvas in new tab" icon.
- Click it, this will open the Story in a new tab free from other Storybook UI elements.
- Use this URL for `cy.visit(...)`
