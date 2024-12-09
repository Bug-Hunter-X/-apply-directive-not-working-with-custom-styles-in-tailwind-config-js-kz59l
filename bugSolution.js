To solve this, verify your Tailwind CSS configuration (usually `tailwind.config.js` or `tailwind.config.cjs`).  The `purge` option (deprecated in newer versions; use `content` instead) or the `content` option needs to point to the correct directories or files containing your components that use Tailwind classes. For example:

```javascript
// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'], // Update paths as needed
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
  plugins: [],
}
```

If using `purge` (deprecated):

```javascript
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'], // Update paths as needed
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
  plugins: [],
}
```

Remember to replace `'./pages/**/*.js', './components/**/*.js'` with the actual paths to your component files.  After making these changes, restart your development server. The `bg-custom-blue` class should now correctly apply the custom blue background color.