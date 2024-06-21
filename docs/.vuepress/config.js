import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'RISC Lab',
  
  description: 'RISC Lab - Dartmouth College',

  theme: defaultTheme({
    logo: '/images/logo.gif',
    navbar:[
      { text: 'Home', link: '/' },
      { text: 'People', link: '/people' },
      { text: 'Publications', link: '/publications' },
      { text: 'Awards', link: '/awards' },
    ],
    sidebar: false, // disable sidebar
    contributors: false, // disable contributors
    lastUpdated: true, // disable last updated
  }),

  bundler: viteBundler(),

  // base: '/risc-lab-website/',
})
