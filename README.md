# Kitchen Recipes

This would just be a repository of Markdown files but GitHub doesn't render dynamic checkboxes.  So this is a React application built with Next.js which does it's own Markdown conversion using [MDX](https://github.com/mdx-js/mdx).

The content is in [recipes](./recipes).  It's mostly still Markdown, with a little bit of React e.g. for badges and quantity conversions.

[https://recipes.worthwhile.app](https://recipes.worthwhile.app)


## Installing

```bash
yarn
```

## Developing

```bash
yarn dev
```

## Deploying

Before deploying, ensure references to all used CSS class names are included in the PurgeCSS config in [postcss.config.js](./postcss.config.js).  This can be done with either `content` or `whitelistPatterns`.  Any class names not referenced will have their styles purged from the build.


```bash
yarn deploy:production
```