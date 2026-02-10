# Nuxt 3

This package shows a reproduction of a type problem which was introduced in https://github.com/nuxt/nuxt/pull/34039.

The `nitro` key was removed from the `ConfigSchema` type, which is used in the `defineNuxtConfig` function. This causes a type error when trying to use `nitro` in the config.

## Expected Behavior

When using `defineNuxtConfig`, `opitons.nitro` should be accessible and have the correct type. Even, when the `.nuxt` directory is not present.

## Actual Behavior

When using `defineNuxtConfig`, `options.nitro` is not accessible and causes a type error ("Vue: Property nitro does not exist on type NuxtOptions").

## Reproduction

### 1. Install dependencies

```bash
npm install
```

### 2. Check the type error

Check the types (does not use `tsconfig.json`, just checks the single `module.ts` file):

```bash
npm run typecheck-cli-only
```

Also, open `src/module.ts` and see the type error on the `nitro` key in the config object.

### 3. Prepare the `.nuxt` directory

```bash
npm run prepare
```

This will create the `.nuxt` directory with the types.


### 4. Check types again

Do the type checking with the `.nuxt` directory (also uses the `tsconfig.json`):

```bash
npm run typecheck-with-dotNuxt
```
