const files = require.context('.', false, /\.vue$/)
const modules = {}

files.keys().forEach(key => {
  if (key.includes('/index')) return
  modules[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

export default vue => Object.entries(modules).map(([key, val]) => vue.component(key, val))
