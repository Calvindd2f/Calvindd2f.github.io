import { defaultTheme } from 'vuepress';
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';
import { searchPlugin } from '@vuepress/plugin-search';

const { description } = require('../../package.json');

export default {
  title: 'Calvindd2f Articles & Documentation',
  base: '/',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/icon.svg' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: 'https://plausible.io/js/script.js', 'data-domain': 'http://localhost:3000' }],
  ],
  theme: defaultTheme({
    colorMode: 'dark',
    colorModeSwitch: false,
    contributors: false,
    docsBranch: 'main',
    docsDir: 'src',
    docsRepo: 'Calvindd2f/Calvindd2f.github.io',
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: true,
    navbar: [
      { text: 'Home', link: 'https://github.com/Calvindd2f' },
      { text: 'Documentation', link: '/guide/' },
      { text: 'Gist', link: 'https://gist.github.com/Calvindd2f' },
      { text: 'CV', link: 'https://localhost:3000/CV.pdf' }
    ],
    sidebar: [
      {
        text: 'Home',
        link: '/guide/',
        children: [
          { link: '/guide/new', text: 'What\'s new' },
          { link: '/guide/about-me', text: 'About' },
          { link: '/guide/api', text: 'API' },
          {
            collapsible: true,
            link: '/guide/interests',
            text: 'Interests',
            children: [{ link: '/guide/interests/csharp', text: '.NET' }]
          },
          {
            collapsible: true,
            link: '/guide/contact',
            text: 'contact',
            children: [{ link: '/guide/contact/me', text: 'Contact Details' }]
          },
          {
            collapsible: true,
            link: '/guide/filler',
            text: 'Filler',
            children: [
              { link: '/guide/filler/configs', text: 'configs' },
              { link: '/guide/filler/Unix', text: 'Unix' },
              { link: '/guide/filler/Windows', text: 'Windows' },
              { link: '/guide/filler/Virtual', text: 'Virtual' }
            ]
          },
          { link: '/guide/errors', text: 'Errors' },
          {
            collapsible: true,
            link: '/guide/certifications',
            text: 'Certifications',
            children: [
              { link: '/guide/certifications/microsoft', text: 'Microsoft' },
              { link: '/guide/certifications/msexpert', text: 'My Expert Gauntlet' },
              { link: '/guide/certifications/others', text: 'Others' }
            ]
          },
          { link: '/guide/concepts', text: 'Concepts' }
        ],
      }
    ],
  }),
  plugins: [
    mdEnhancePlugin({
      // Plugin options
    }),
    searchPlugin({
      // Plugin options
    })
  ],
};
