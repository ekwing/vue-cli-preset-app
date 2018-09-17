const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key.includes('/index')) return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default vue => Object.entries(modules).map(([, plugin]) => plugin(vue))
