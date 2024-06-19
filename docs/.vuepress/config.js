import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'

export default defineUserConfig({
  lang: 'en-US',

  title: 'RISC Lab',
  description: 'RISC Lab - Dartmouth College',

  theme: defaultTheme({
    logo: '/images/logo.gif',
    navbar: ['/', '/people', '/publication', '/award'],
    sidebar: false, // disable sidebar
  }),

  bundler: viteBundler(),
})
