// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DrissionPage',
  tagline: '简洁而强大',
  favicon: 'img/DrissionPage.ico',

  // Set the production url of your site here
  url: 'https://g1879.gitee.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SaossionPageDocs/build/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'g1879', // Usually your GitHub org/user name.
  projectName: 'DrissionPage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
//      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
        routeBasePath: '/',
          sidebarPath: './sidebars.js',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
//    require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    ({
      // Replace with your project's social card
      colorMode:{defaultMode:'dark'},
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DrissionPage',
        logo: {
          alt: 'DrissionPage',
          src: 'img/color_logo.png',
        },
        items: [
//          {type: 'doc', docId: 'welcome', position: 'left', label: '欢迎'},
          {type: 'docSidebar', sidebarId: 'featuresSidebar', position: 'left', label: '特性介绍'},
          {type: 'docSidebar', sidebarId: 'usageSidebar', position: 'left', label: '使用文档'},
          {type: 'docSidebar', sidebarId: 'demoSidebar', position: 'left', label: '实用教程'},
          {type: 'docSidebar', sidebarId: 'historySidebar', position: 'left', label: '版本历史'},
          {type: 'doc', docId: 'ecotope', position: 'left', label: '软件生态'},
          {type: 'doc', docId: 'cooper', position: 'left', label: '商业合作'},
//          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://gitee.com/g1879/DrissionPage', label: 'Gitee', position: 'right'},
          {type: 'search', position: 'right',},
        ],

      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '作者',
            items: [
              {
                label: 'g1879',
                href: 'https://gitee.com/g1879',
              },
            ],
          },
          {
            title: '交流',
            items: [
              {
                label: '联系邮箱：g1879@qq.com',
                href: '#',
              },
              {
                label: 'QQ群：636361957',
                href: '#',
              },
            ],
          },
          {
            title: '更多作品',
            items: [
              {
                label: 'DataRecorder',
                href: 'http://g1879.gitee.io/datarecorderdocs/',
              },
              {
                label: 'DownloadKit',
                href: 'http://g1879.gitee.io/downloadkitdocs/',
              },
            ],
          },
        ],
        copyright: `<br/>Copyright © ${new Date().getFullYear()} g1879, Inc.<br/><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://g1879.gitee.io/drissionpagedocs/">DrissionPageDocs</a> by <span property="cc:attributionName">g1879</span> is licensed under <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></a></p>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
      sidebar: {
        hideable: true,
      },
    },
      algolia: {
      // The application ID provided by Algolia
      appId: 'L4LOTA2MQM',

      // Public API key: it is safe to commit it
      apiKey: '33a740eb4c7dc379f77867db54e32699',

      indexName: 'g1879-gitee',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
//      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
//      replaceSearchResultPathname: {
//        from: '/docs/', // or as RegExp: /\/docs\//
//        to: '/',
//      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    announcementBar: {
      id: 'current_version',
      content: '当前文档适用于：DrissionPage <b>4.0.4.12</b>',
      backgroundColor: '#3A5FCD',
      textColor: '#FFFFFF',
      isCloseable: true,
    },
    }),
//  plugins: [require.resolve('docusaurus-lunr-search')],

//  plugins: [
////  '@easyops-cn/docusaurus-search-local',
//    [
//      '@easyops-cn/docusaurus-search-local',
//      {
//        hashed: true,
//      },
//    ],
//  ],
};

export default config;
