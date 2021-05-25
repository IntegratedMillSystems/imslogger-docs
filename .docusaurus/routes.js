
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','863'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','842'),
  exact: true,
},
{
  path: '/docs/data_structures/',
  component: ComponentCreator('/docs/data_structures/','675'),
  exact: true,
},
{
  path: '/docs/data_structures/logs/readme',
  component: ComponentCreator('/docs/data_structures/logs/readme','bb7'),
  exact: true,
},
{
  path: '/docs/data_structures/views/readme',
  component: ComponentCreator('/docs/data_structures/views/readme','7c8'),
  exact: true,
},
{
  path: '/docs/python/',
  component: ComponentCreator('/docs/python/','ee3'),
  exact: true,
},
{
  path: '/docs/python/imslogger-py/api',
  component: ComponentCreator('/docs/python/imslogger-py/api','0ba'),
  exact: true,
},
{
  path: '/docs/python/imslogger-py/install',
  component: ComponentCreator('/docs/python/imslogger-py/install','6a0'),
  exact: true,
},
{
  path: '/docs/python/imslogger-py/readme',
  component: ComponentCreator('/docs/python/imslogger-py/readme','1cf'),
  exact: true,
},
{
  path: '/docs/python/imslogger-py/usage',
  component: ComponentCreator('/docs/python/imslogger-py/usage','aa2'),
  exact: true,
},
{
  path: '/docs/python/pyconpro/',
  component: ComponentCreator('/docs/python/pyconpro/','941'),
  exact: true,
},
{
  path: '/docs/python/pyconpro/api',
  component: ComponentCreator('/docs/python/pyconpro/api','574'),
  exact: true,
},
{
  path: '/docs/python/pyconpro/install',
  component: ComponentCreator('/docs/python/pyconpro/install','9dd'),
  exact: true,
},
{
  path: '/docs/python/pyconpro/usage',
  component: ComponentCreator('/docs/python/pyconpro/usage','9bc'),
  exact: true,
},
{
  path: '/docs/python/server/readme',
  component: ComponentCreator('/docs/python/server/readme','e01'),
  exact: true,
},
{
  path: '/docs/web_interface/',
  component: ComponentCreator('/docs/web_interface/','766'),
  exact: true,
},
{
  path: '/docs/web_interface/api/readme',
  component: ComponentCreator('/docs/web_interface/api/readme','d18'),
  exact: true,
},
{
  path: '/docs/web_interface/frontend/readme',
  component: ComponentCreator('/docs/web_interface/frontend/readme','d7c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
