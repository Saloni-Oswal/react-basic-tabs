## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

Requirements:

1. Your component must return a div with classname of tabs.
2. For each children element with title property, the component should render a button with classname of btn.
3. Clicking on a button should change the currently active tab by:
   a) endering a child element corresponding to it in a div with a classname of view.
   b) disabling the button (HTML attribute) and changing its classname to btn-active.
5. Initially the first tab should be active ( the first child rendered, and the first button disabled with class btn-active).
6. Only one button should be active at any given moment.


Demo:

![tabs](https://github.com/Saloni-Oswal/react-basic-tabs/assets/20659496/bb7a5d44-8a07-4c3f-a27f-62f982481d16)
