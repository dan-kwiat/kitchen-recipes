const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./components/**/*.js",
      "./pages/**/*.js",
      "./node_modules/@material/react-checkbox/dist/**/*.js",
      "./node_modules/@material/react-menu-surface/dist/**/*.js",
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};