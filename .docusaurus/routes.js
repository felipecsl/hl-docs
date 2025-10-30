import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/hl-docs/__docusaurus/debug',
    component: ComponentCreator('/hl-docs/__docusaurus/debug', '898'),
    exact: true
  },
  {
    path: '/hl-docs/__docusaurus/debug/config',
    component: ComponentCreator('/hl-docs/__docusaurus/debug/config', '1de'),
    exact: true
  },
  {
    path: '/hl-docs/__docusaurus/debug/content',
    component: ComponentCreator('/hl-docs/__docusaurus/debug/content', '67c'),
    exact: true
  },
  {
    path: '/hl-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/hl-docs/__docusaurus/debug/globalData', '674'),
    exact: true
  },
  {
    path: '/hl-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/hl-docs/__docusaurus/debug/metadata', 'c01'),
    exact: true
  },
  {
    path: '/hl-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/hl-docs/__docusaurus/debug/registry', 'caa'),
    exact: true
  },
  {
    path: '/hl-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/hl-docs/__docusaurus/debug/routes', '126'),
    exact: true
  },
  {
    path: '/hl-docs/docs',
    component: ComponentCreator('/hl-docs/docs', '43b'),
    routes: [
      {
        path: '/hl-docs/docs',
        component: ComponentCreator('/hl-docs/docs', '2df'),
        routes: [
          {
            path: '/hl-docs/docs',
            component: ComponentCreator('/hl-docs/docs', '410'),
            routes: [
              {
                path: '/hl-docs/docs/accessories',
                component: ComponentCreator('/hl-docs/docs/accessories', 'b67'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/accessory-postgres',
                component: ComponentCreator('/hl-docs/docs/commands/accessory-postgres', 'df9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/accessory-redis',
                component: ComponentCreator('/hl-docs/docs/commands/accessory-redis', 'a6d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/deploy',
                component: ComponentCreator('/hl-docs/docs/commands/deploy', 'e46'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/env',
                component: ComponentCreator('/hl-docs/docs/commands/env', 'e5c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/init',
                component: ComponentCreator('/hl-docs/docs/commands/init', '4ab'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/overview',
                component: ComponentCreator('/hl-docs/docs/commands/overview', '1f6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/rollback',
                component: ComponentCreator('/hl-docs/docs/commands/rollback', 'f56'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/commands/secrets',
                component: ComponentCreator('/hl-docs/docs/commands/secrets', 'df3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/configuration',
                component: ComponentCreator('/hl-docs/docs/configuration', '8eb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/faq',
                component: ComponentCreator('/hl-docs/docs/faq', '609'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/getting-started',
                component: ComponentCreator('/hl-docs/docs/getting-started', '8d9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/health-checks',
                component: ComponentCreator('/hl-docs/docs/health-checks', '2d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/how-it-works',
                component: ComponentCreator('/hl-docs/docs/how-it-works', 'e44'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/intro',
                component: ComponentCreator('/hl-docs/docs/intro', 'a06'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hl-docs/docs/workflow',
                component: ComponentCreator('/hl-docs/docs/workflow', '0c1'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/hl-docs/',
    component: ComponentCreator('/hl-docs/', '5a0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
