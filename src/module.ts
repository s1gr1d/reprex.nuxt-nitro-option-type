import { defineNuxtModule } from '@nuxt/kit'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  defaults: {},
  setup(_options, nuxt) {
    if (nuxt.options.nitro) {
      // TypeError above: "Vue: Property nitro does not exist on type NuxtOptions"
    }
  },
})
