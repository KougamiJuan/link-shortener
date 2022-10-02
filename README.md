# Prettier - React - ESLint - Tailwind CSS - Vite | PRETV

Hi! This project is just to test how Vite works and how to integrate Prettier, ESLint (AirBnB rules) and Tailwind with ReactJS and its configurations to coexist in one place.

Please consider that this project is a test and not a serious production project, also there are many aspects to cover such as testing, performance, scaffolding, etc.

# Introduction - Link Shortener

With this free Link Shortener you can make Links shorter and easier to remember. With this in mind I decided to create a small project to test different features like linter rules, formatting rules, CSS frameworks, UI libraries and a bundle tool in order to test those technologies together and create a "copy and paste" guide for future serious projects.

## Stack

| Technology   | Version |
| ------------ | ------- |
| Vite         | 3.1.0   |
| ReactJS      | 18.2.0  |
| Tailwind CSS | 3.1.8   |
| ESLint       | 8.23.0  |
| Prettier     | 2.7.1   |

## Available scripts

### starts a local web server:

`npm run dev`

### builds the project (outputs to the folder `./dist`):

`npm run build`

### start a local web server that serves the built:

`npm run preview`

## Steps to configure the project from scratch

Create the project with `Vite`:

`npm create vite@latest my-app --template react`

Install and setup the `ESLint` with `AirBnB rules`

`npm init @eslint/config`

Install the formatter (`Prettier`) and its plugins to coexist with `ESLint`

`npm install -D prettier eslint-plugin-prettier eslint-config-prettier`

Now, it is important to clarify that I have used VS Code as my main editor, so I set some options to avoid crashes and format my text automatically. Put these options in your VS Code `settings.json`.

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.singleQuote": true
}
```

Next, it is time to edit our `.eslintrc.json` file. It is not necessary to have this exact configuration, only the `extends`, `plugins` and `rules` sections.

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended"
  ],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      { "singleQuote": true },
      { "endOfLine": "auto" }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/function-component-definition": [
      2,
      { "namedComponents": "arrow-function" }
    ],
    "jsx-a11y/label-has-associated-control": [2, { "assert": "either" }]
  }
}
```

Finally, it is necessary to create a standard file for formatting our code. Run:

`echo {}> .prettierrc.json`

and put the following configuration in that file

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 80,
  "endOfLine": "auto",
  "singleQuote": true,
  "trailingComma": "es5"
}
```

To setup Tailwind follow this guide: [Install Tailwind CSS with Vite (React)](https://tailwindcss.com/docs/guides/vite#react)

Or follow these steps:

Install Tailwindcss, Postcss and Autoprefixer:

`npm install -D tailwindcss postcss autoprefixer`

Run the init command to generate both `tailwind.config.cjs` and `postcss.config.cjs`

`npx tailwindcss init -p`

Add the paths to all of your template files in your `tailwind.config.cjs` file inside the `content` section and adds support for dark mode.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install daisyUI as a Tailwind CSS plugin:

`npm i daisyui`

Then add daisyUI to your `tailwind.config.js` files:

```javascript
const daisyui = require('daisyui');

module.exports = {
  //...
  plugins: [daisyui],
};
```

Set up the defaults themes:

```javascript
const themeCmyk = require('daisyui/src/colors/themes');

module.exports = {
  //...
  daisyui: {
    themes: [{ light: { ...themeCmyk['[data-theme=cmyk]'] } }, 'night'],
    darkTheme: 'night',
  },
};
```

Use [CSS Theme Change](https://github.com/saadeghi/theme-change)
