# Welcome to [InlineJS](https://github.com/inlinejs/inline)

## 🚀 Project Structure

- ✅ **Full Markdown support**
- ✅ **Responsive mobile-friendly design**
- ✅ **Sidebar navigation**
- ✅ **Search (powered by Algolia)**
- ✅ **Multi-language i18n**
- ✅ **Automatic table of contents**
- ✅ **Automatic list of contributors**
- ✅ (and, best of all) **dark mode**

## Primary Tools

- ✅ [lit](https://lit.dev/)
- ✅ [turborepo](https://turborepo.org/)
- ✅ [astro](https://astro.build/)
- ✅ [netlify](https://www.netlify.com/) - More updates to come here


Inside of your InlineJS project, you'll see the following folders and files:

```txt
/
├── packages/
│   ├── inline-config/
│   │   ├── src/
│   │   └── index.ts
│   ├── inline-tokens/
│   │   ├── src/
│   │   └── index.ts
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Any primary Web Component and helper packages intended for publishing to the NPM package repository, and utilized by consumer applications.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

### Primary Commands

> Primary commands consist of the the majority of the most frequently used commands
> during day to day development of an InlineJS project.

| Command                | Action                                                             |
| :--------------------- | :----------------------------------------------------------------- |
| `yarn install`         | Installs project dependencies                                      |
| `yarn start`           | Starts local dev server at `localhost:3000`                        |
| `yarn build`           | Run all build commands using the pattern build:*                   |
| `yarn clean`           | Run all cleanup commands using the pattern clean:*                 |
| `yarn reset`           | Run `yarn clean` followed by  commands using the pattern reset:*   |
| `yarn build`           | Run all build commands using the pattern build:*                   |

### Secondary Commands

> Most secondary commands are called by a primary command either directly, or with `npm-run-all`.

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `yarn dev`             | Alias of `yarn start`, enabling development mode   |
| `yarn prep`            | Does stuff and things                              |
| `yarn prestart`        | Does stuff and things                              |
| `yarn prebuild`        | Does stuff and things                              |

## 👀 Want to learn more?

Look for more documentation in the near future!
