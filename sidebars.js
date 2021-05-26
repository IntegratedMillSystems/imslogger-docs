module.exports = {
  pythonSidebar: [
    'backend/readme',
    {
      type: 'category',
      label: 'PyConPro',
      items: [
        'backend/pyconpro/readme'
      ]
    },
    {
      type: 'category',
      label: 'imslogger-py',
      items: [
        'backend/imslogger-py/readme'
      ]
    },
    {
      type: 'category',
      label: 'Backend Server',
      items: [
        'backend/server/readme'
      ]
    },
  ],

  webInterfaceSidebar: [
    'web_interface/readme',
    {
      type: 'category',
      label: 'Frontend',
      items: [
        'web_interface/frontend/readme'
      ]
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'web_interface/api/readme'
      ]
    }
  ],

  dataStructuresSidebar: [
    'data_structures/readme',
    'data_structures/logs',
    {
      type: 'category',
      label: 'Views',
      items: [
        'data_structures/views/readme',
        'data_structures/views/view-folders'
      ]
    },
  ],

  rootSidebar: [
    'readme',
    'installing',
    'getting-started',
    {
      type: 'category',
      label: 'Detailed Documentation',
      items: [
        'backend/readme',
        'web_interface/readme',
        'data_structures/readme',
      ]
    }
  ]
};
