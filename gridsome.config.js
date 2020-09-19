// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '158 PDSH Zeus',
  siteDescription: 'To jest strona 158 PDSH "Zeus". Jeżeli chcesz zobaczyć co się u nas dzieje lub do nas dołączyć - wejdź.',

  templates: {
    Post: '/:title',
    PostHtgp: '/htgp/:title',
    Tag: '/tag/:id',
    TagHtgp: '/htgp/tag/:id',
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'About',
        path: 'content/about/*.md',
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PostHtgp',
        path: 'content/postsHTGP/*.md',
        refs: {
          tags: {
            typeName: 'TagHtgp',
            create: true
          }
        }
      }
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
