import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Portfolio',
  tagline: 'Check out my reference projects',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site
  url: 'https://Barni6.github.io', // GitHub Pages URL-ed
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it is often '/<projectName>/'
  baseUrl: '/portfolio/', // Ha a repó neve "portfolio"

  // GitHub Pages deployment config
  organizationName: 'Barni6', // GitHub felhasználóneved
  projectName: 'portfolio', // A repo neve

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // A gyökér útvonalra kerül a docs tartalom
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false, // Ha nincs blogod, állítsd false-ra
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/image1.jpeg',
    navbar: {
      title: 'Portfolio',
      logo: {
        alt: 'Portfolio Logo',
        src: 'img/image1.jpeg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Barni6',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/barnab%C3%A1s-szombat-24a4a3313/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Szombat Barnabás.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
