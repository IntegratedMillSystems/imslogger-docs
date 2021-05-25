module.exports = {
  title: 'IMS Logger Documentation',
  tagline: 'The documentation for Integrated Mill System\'s IMS Logger',
  url: 'https://imslogger.github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Integrated Mill Systems', // Usually your GitHub org/user name.
  projectName: 'IMSLogger', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IMS Logger',
      logo: {
        alt: 'IMS Logger Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/server/',
          label: 'Server',
          position: 'left',
        },
        {
          to: '/docs/client/',
          label: 'Command Line Client',
          position: 'left',
        },
        {
          to: '/docs/lib/',
          label: 'Python Library',
          position: 'left',
        },
        {
          to: '/docs/pyconpro/',
          label: 'PyConPro',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/imslogger/imslogger-docs/with_react/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
