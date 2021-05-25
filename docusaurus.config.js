module.exports = {
  title: 'IMS Logger Documentation',
  tagline: 'The documentation for Integrated Mill System\'s IMS Logger',
  url: 'https://integratedmillsystems.github.io/',
  baseUrl: '/imslogger-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IntegratedMillSystems', // Usually your GitHub org/user name.
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
          to: '/docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/docs/data_structures/',
          label: 'Data Structures',
          position: 'left',
        },
        {
          to: '/docs/python/',
          label: 'Python',
          position: 'left',
        },
        {
          to: '/docs/web_interface/',
          label: 'Web Interface',
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
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Data Structures',
              to: 'docs/data_structures/',
            },
            {
              label: 'Python',
              to: 'docs/python/',
            },
            {
              label: 'Web Interface',
              to: 'docs/web_interface/',
            }
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
              href: 'https://github.com/IntegratedMillSystems',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Integrated Mill Systems, Inc. Built with Docusaurus.`,
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
            'https://github.com/IntegratedMillSystems/imslogger-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
