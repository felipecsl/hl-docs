import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'getting-started',
    'how-it-works',
    'configuration',
    'health-checks',
    'accessories',
    'workflow',
    {
      type: 'category',
      label: 'Commands',
      collapsed: false,
      items: [
        'commands/overview',
        'commands/init',
        'commands/deploy',
        'commands/rollback',
        'commands/secrets',
        'commands/env',
        'commands/accessory-postgres',
        'commands/accessory-redis'
      ]
    },
    'faq'
  ]
};

export default sidebars;
