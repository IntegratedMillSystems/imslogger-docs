
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
  component: ComponentCreator('/docs','7ec'),
  
  routes: [
{
  path: '/docs/lib/',
  component: ComponentCreator('/docs/lib/','dfe'),
  exact: true,
},
{
  path: '/docs/lib/api',
  component: ComponentCreator('/docs/lib/api','1e8'),
  exact: true,
},
{
  path: '/docs/lib/install',
  component: ComponentCreator('/docs/lib/install','02d'),
  exact: true,
},
{
  path: '/docs/lib/usage',
  component: ComponentCreator('/docs/lib/usage','690'),
  exact: true,
},
{
  path: '/docs/pyconpro/',
  component: ComponentCreator('/docs/pyconpro/','949'),
  exact: true,
},
{
  path: '/docs/pyconpro/api',
  component: ComponentCreator('/docs/pyconpro/api','e56'),
  exact: true,
},
{
  path: '/docs/pyconpro/install',
  component: ComponentCreator('/docs/pyconpro/install','3cb'),
  exact: true,
},
{
  path: '/docs/pyconpro/usage',
  component: ComponentCreator('/docs/pyconpro/usage','21a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
