import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '36b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '68d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '928'),
            routes: [
              {
                path: '/docs/accessories',
                component: ComponentCreator('/docs/accessories', '63e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/accessory-postgres',
                component: ComponentCreator('/docs/commands/accessory-postgres', 'fa8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/accessory-redis',
                component: ComponentCreator('/docs/commands/accessory-redis', '59f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/deploy',
                component: ComponentCreator('/docs/commands/deploy', '813'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/env',
                component: ComponentCreator('/docs/commands/env', '17d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/init',
                component: ComponentCreator('/docs/commands/init', '455'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/overview',
                component: ComponentCreator('/docs/commands/overview', '7c2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/rollback',
                component: ComponentCreator('/docs/commands/rollback', 'c63'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/commands/secrets',
                component: ComponentCreator('/docs/commands/secrets', '50f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/configuration',
                component: ComponentCreator('/docs/configuration', '4e9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/faq',
                component: ComponentCreator('/docs/faq', 'b65'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '565'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/health-checks',
                component: ComponentCreator('/docs/health-checks', 'ee2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/how-it-works',
                component: ComponentCreator('/docs/how-it-works', '21a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/workflow',
                component: ComponentCreator('/docs/workflow', '670'),
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
    path: '/',
    component: ComponentCreator('/', '2bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
