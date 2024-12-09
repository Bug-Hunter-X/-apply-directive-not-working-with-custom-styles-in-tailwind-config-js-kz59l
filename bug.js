This bug occurs when using Tailwind CSS with a framework like Next.js or Nuxt.js.  The issue is that Tailwind's `@apply` directive isn't working as expected, particularly with custom styles defined in your `tailwind.config.js` file.  This often happens when the custom styles are not properly being picked up during the build process.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
}
```

```html
// MyComponent.js
<div class="bg-custom-blue">Hello</div>
```