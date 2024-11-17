import { description } from "./constants/data"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      title: process.env.PROJECT_TITLE,
      bodyAttrs: {
        class: ''
      }
    }
  },
  nitro: {
    preset: 'static'
  },
  runtimeConfig: {
    public: {
      github: process.env.GITHUB
    }
  },
  components: true,
  tailwindcss: {
    configPath: "tailwind.config",
  },
  googleFonts: {
    families: {
      'Pixelify+Sans': [400, 700],
      'Poppins': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    subsets: ['latin'],
    preload: false,
    prefetch: false,
    download: true,
    inject: true,
  },
  lucide: {
    namePrefix: "Icon",
  },
  shadcn: {
    prefix: "Ui",
    componentDir: "./app/components/ui",
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'shadcn-nuxt',
  ],
})
