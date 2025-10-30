import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'hl',
  tagline: 'Tiny, deterministic git-push deploys for a single host',
  favicon: 'img/logo.svg',

  url: 'https://felipecsl.github.io/',
  baseUrl: '/hl-docs',

  organizationName: 'felipecsl', // GitHub org/user
  projectName: 'hl-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: '',
      logo: {
        alt: 'hl logo',
        src: 'img/logo.svg'
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
        { href: 'https://github.com/felipecsl/hl', label: 'GitHub', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'Commands', to: '/docs/commands/overview' },
            { label: 'FAQ', to: '/docs/faq' }
          ]
        },
        {
          title: 'Community',
          items: [{ label: 'GitHub', href: 'https://github.com/felipecsl/hl' }]
        }
      ],
      copyright: `MIT Licensed — © ${new Date().getFullYear()} hl contributors`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  }
};

export default config;
