## ⭐ Next.js & TailWind CSS Starter Code for Responsive Websites ⭐

Welcome to the Next.js & Tailwind CSS Starter Code repository. This project aims to simplify the process of setting up a new Next.js project with Tailwind CSS for responsive web design.

## 🚀 Getting Started

**Pre-requisites**
- [Node.js](https://nodejs.org/docs/latest-v16.x/api/) minimum version v16.8 installed on your machine.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`npx create-next-app@latest .`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) command

1. **Clone** the repository to your local machine:
    ```bash
    git clone https://github.com/mahima-manik/nextjs-tailwind-responsive-starter-code.git
    ```
2. **Install** the dependencies:
    ```bash
    cd nextjs-tailwind-responsive-starter-code
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
    This command downloads and installs all the dependencies listed in `package.json` & `package-lock.json` file in `node_modules` folder.

    > **Note:** If you used `npm install package-name` (with a specific package name), npm would install only that package and add it to the package.json file.
3. **Run** the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

Now, your application is running at `http://localhost:3000`. You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## 🧰 What's Included?

### [Project Structure](https://nextjs.org/docs/getting-started/project-structure)
Here is the summary to remember the project structure. Note that it is a convention to put all the code related to the application in `source` folder and configuration related files in the root folder of the project.
- Configuration files such as `package.json`, `next.config.js`, `jsconfig.json`, etc. are at the root of the project.
- **`/src`**: This folder contains the application's source code. Most important ones are `src/app` & `src/pages`. 
- **`/src/app`**: This folder contains the application's layout and metadata.
- **`/src/components`**: This folder contains the application's components which can be used by different pages.
- **`/src/styles`**: This folder contains the application's stylesheets, including global.css.
- **`src/pages`**: This folder contains the application's pages.
    > **Note:** Since this is single page application, we do not have `src/pages` in this project 
- **`/public`**: This folder contains static files such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/).


## Files for applying layout and components

1. **`src/app/layout.js`**
    - This file contains the application's layout that is applied to all the pages. It must contain html and body tags.
    - This layout enables you to modify the initial HTML returned from the server. The root layout is React Server component.
    > **Note:** Next.js route segments can have their own layouts which will be shared across all pages in that segment
2. **`src/app/page.js`**
    - A page is UI that is unique to a route/path - the component returned from here is what user sees on this app route. 
    - You can define pages by exporting a component from a page.js file - by using Nested folders to refine routes in Next.js.

## 🏄🏻 Tailwind CSS
To be added


## 📚 Learnings & Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
1. favicon.ico cannot be placed in public folder. It has to be placed in the `src/app` folder. [Reference](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon)
2. `page.js` cannot be renamed to `index.js`. A page.js file is required to make a route segment publicly accessible. `layout.js` also has to stay in app folder. [Reference](https://nextjs.org/docs/getting-started/project-structure#routing-files)
3. `layout.js` replaced both `_app.js` and `_document.js` in Next.js version 13. [Reference 1](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app), [Reference 2](https://www.makeuseof.com/create-custom-layout-in-nextjs/)

## 🔧 Useful Tools
1. [Window Resizer](https://chrome.google.com/webstore/detail/window-resizer): Chrome extension to resize the browser window for testing different screen resolutions.
2. [ESLint](https://eslint.org/): ESLint statically analyzes your code to quickly find problems.
3. [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Visual Studio Code plugin that autocompletes npm modules in import statements.
