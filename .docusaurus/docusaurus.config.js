export default {
  "title": "IMS Logger Documentation",
  "tagline": "The documentation for Integrated Mill System's IMS Logger",
  "url": "https://imslogger.integratedmillsystems.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "IntegratedMillSystems",
  "projectName": "IMSLogger",
  "themeConfig": {
    "navbar": {
      "title": "IMS Logger",
      "logo": {
        "alt": "IMS Logger Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "/docs/lib/",
          "label": "imslogger-py",
          "position": "left"
        },
        {
          "to": "/docs/pyconpro/",
          "label": "PyConPro",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/IntegratedMillSystems"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Integrated Mill Systems, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/jsimonrichard/Desktop/IMS/IMSLogger/imslogger-docs/sidebars.js",
          "editUrl": "https://github.com/imslogger/imslogger-docs/with_react/"
        },
        "theme": {
          "customCss": "/home/jsimonrichard/Desktop/IMS/IMSLogger/imslogger-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};