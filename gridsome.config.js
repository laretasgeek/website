// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'LaretasGeek',
  siteDescription: 'Lorem Ipsum dolor est',
  icon: './src/assets/i/favicon.png',
  plugins: [
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'settings/*.json'
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
        contentTypes: ['Post'],
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
