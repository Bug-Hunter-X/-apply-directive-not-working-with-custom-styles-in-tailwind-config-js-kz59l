# Tailwind CSS @apply Directive Bug

This repository demonstrates a bug where Tailwind CSS's `@apply` directive fails to apply custom styles defined in `tailwind.config.js` when used within a framework like Next.js or Nuxt.js. The issue is caused by improper style inclusion during the build process.

## Bug Description

The custom color `custom-blue` defined in `tailwind.config.js` is not being applied to the `<div>` element in `MyComponent.js`. The component renders with the default background color instead.

## Solution

The solution involves ensuring that Tailwind's postcss plugins are correctly configured to process the `tailwind.config.js` file and incorporate custom styles during the build process.  This often involves checking the order of plugins and configuring `purge` or `content` options for more efficient and correct style generation.