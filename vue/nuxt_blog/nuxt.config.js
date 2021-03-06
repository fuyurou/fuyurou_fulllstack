module.exports = {
  head: {
    meta: [
      {"charset": "utf-8"},
      {"name": "viewport", content: "width=device-width,initial-scale=1"},
      {"name": "renderer", content: "webkit"},
      {"hid": "keywords", content: 'VueBlog,Vuejs,Nodejs,服务器端渲染'},
      {
        "hid": "description",
        "name": "description",
        "content": "VueBlog是一个基于Vuejs的小型博客应用，让你可以为所欲为的分享自己知识和创作"
      }
    ]
  },
  loading: {
    color: '#42B983'
  },
  plugins: [
    '~/plugins/components.js',
    '~/plugins/filters.js'
  ]
}