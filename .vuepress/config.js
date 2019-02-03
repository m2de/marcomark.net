const path = require('path')

module.exports = {
    title: "Marco Mark",
    description: 'Web Developer Cornwall',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Work', link: '/work/' },
        ]
    },
    markdown: {
        extendMarkdown: md => {
            [
                'heading_open',
                'paragraph_open',
                'link_open',
                'bullet_list_open',
            ].map((rule) => {
                md.renderer.rules[rule] = (tokens, idx, options, env, slf) => {
                    if (!tokens[idx].attrs) tokens[idx].attrs = []
                    tokens[idx].attrs.push([ 'class', `md-${rule}` ])
                    return slf.renderToken(tokens, idx, options)
                }
            });

            [
                'image',
            ].map((rule) => {
                md.renderer.rules[rule] = (tokens, idx, options, env, slf) => {
                    if (!tokens[idx].attrs) tokens[idx].attrs = []
                    const rotation = Math.floor(Math.random() * (5 - 1) + 1)
                    tokens[idx].attrs.push([ 'class', `md-${rule} rotation-${rotation}` ])
                    return slf.renderToken(tokens, idx, options)
                }
            });

            md.use(require('markdown-it-highlightjs'), {})
        },
        anchor: { permalink: false },
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require('cssnano'),
            require('@fullhuman/postcss-purgecss')({
                content: [
                    '.vuepress/theme/**/*.vue',
                    '.vuepress/theme/**/*.md',
                    '.vuepress/theme/mixins/*.js',
                    '.vuepress/theme/templates/*.html',
                ],
                extractors: [
                    {
                        extractor: class TailwindExtractor {
                            static extract(content) {
                                return content.match(/[A-z0-9-:\/]+/g) || [];
                            }
                        },
                        extensions: ['css', 'html', 'js', 'vue', 'md']
                    }
                ],
                whitelist: [
                    'html',
                    'body',
                ],
                whitelistPatterns: [
                    /^(h\d|p$|ul|li$|div|ol|table|td|th$|thead|tbody|main|input|button|form)/
                ],
            }),
            require("autoprefixer")
        ]
    },
    chainWebpack: config => {
        config.module.rules.delete('svg')

        config.module.rule('svg')
            .test(/\.svg$/)
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .end()

        config.resolveLoader.modules.add(path.resolve(__dirname, './node_modules'))
    },
    configureWebpack: {
        resolve: {
            symlinks: true
        }
    },
}
