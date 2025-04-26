# vite-wessberg-di

Vite plugin for [@wessberg/di-compiler](https://github.com/wessberg/di-compiler).<br>
Working with [@wessberg/di](https://github.com/wessberg/DI).

## Install

```
npm i vite-wessberg-di @wessberg/di
```

Note that there is no need to install `@wessberg/di-compiler` in addition to `vite-wessberg-di`

## Usage

Just add this plugin to vite config plugins array.

```ts
// vite.config.ts

import di from "vite-wessberg-di"

export default defineConfig({
  plugins: [di()],

  // ...rest config options
})
```
