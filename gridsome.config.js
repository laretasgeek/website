// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

console.log(__dirname)
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
        // enablePathGeneration: false,
        // routes: require('./routes.ts')
      }
    },
    { use: 'gridsome-plugin-typescript' },
    { use: 'gridsome-plugin-composition-api' },
    {
      use: __dirname + '/plugins/source-filesystem/index.js',  //'@gridsome/source-filesystem',
      options: {
        path: 'content/participants/*.md',
        typeName: 'Participant',
        route: '/participante/:id',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }]
          ]
        },
      }
    },
    {
      use: __dirname + '/plugins/source-filesystem/index.js',  //'@gridsome/source-filesystem',
      options: {
        path: 'content/ama/*.md',
        typeName: 'Event',
        route: '/ama/:title',
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }]
          ]
        },
        refs: {
          participants: 'Participant',
        },
        nodeExtraOptions: {
          type: 'laretas-ama'
        }
      }
    },
    {
      use: __dirname + '/plugins/source-filesystem/index.js',  //'@gridsome/source-filesystem',
      options: {
        path: 'content/geek/*.md',
        typeName: 'Event',
        route: '/:title',
        refs: {
          participants: 'Participant'
        },
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }]
          ],
        },
        nodeExtraOptions: {
          type: 'laretas-geek'
        }
      }
    },
    {
      use: __dirname + './plugins/source-filesystem/index.js',  //'@gridsome/source-filesystem',
      options: {
        path: 'content/java/*.md',
        typeName: 'Event',
        route: '/:title',
        refs: {
          participants: 'Participant'
        },
        remark: {
          plugins: [
            ['@gridsome/remark-prismjs', { transformInlineCode: true }]
          ]
        },
        nodeExtraOptions: {
          type: 'laretas-java'
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
        contentTypes: ['AMA', 'Regular'],
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
