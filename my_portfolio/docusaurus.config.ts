import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Projects Documentation',
  tagline: 'Check out my reference projects',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Barni6', // Usually your GitHub org/user name.
  projectName: 'references', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/image1.jpeg',
    navbar: {
      title: 'My Projects Documentation',
      logo: {
        alt: 'My portrait photo',
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

module.exports = {
  title: 'Portfolio',
  tagline: 'Személyes portfólióm',
  url: 'https://<Barni6>.github.io',
  baseUrl: '/<portfolio>/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: '<Barni6>', // A GitHub fiókod neve
  projectName: '<repo-nev>', // A repozitórium neve
};


export default config;
