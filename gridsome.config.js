// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'LaretasGeek',
  siteDescription: 'Lorem Ipsum dolor est',
  siteUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8082' : 'https://laretasgreek.com',
  icon: './src/assets/i/favicon.png',
  plugins: [
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'settings/*.json'
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'es-es',
          'gl-es',
        ],
        pathAliases: { // path segment alias for each locales
          'es-es': 'es',
          'gl-es': 'gl',
        },
        fallbackLocale: 'gl-es',
        defaultLocale: 'gl-es', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {},
        dateTimeFormats: {
          'gl-es': {
            short: {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            },
            medium: {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            },
            long: {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long',
              hour: 'numeric',
              minute: 'numeric'
            }
          },
          'es-es': {
            short: {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            },
            medium: {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            },
            long: {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long',
              hour: 'numeric',
              minute: 'numeric'
            }
          },
        }
        // routes: require('./routes.ts')
      }
    },
    { use: 'gridsome-plugin-typescript' },
    { use: 'gridsome-plugin-composition-api' },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/participants/*.md',
        typeName: 'Participant',
        route: '/participante/:title',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }]
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/ama/*.md',
        typeName: 'AMA',
        route: '/ama/:title',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }]
          ]
        },
        refs: {
          participant: 'Participant',
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/events/*.md',
        typeName: 'Event',
        route: '/event/:title',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }]
          ],
          refs: {
            participant: 'Participant',
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['AMA', 'Event'],
        feedOptions: {
          title: 'LaretasGeek',
          description: ''
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: false,
          output: '/feed.json'
        },
        maxItems: 25,
        htmlFields: ['description', 'content'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content
        })
      }
    }
  ]
}
