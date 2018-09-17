module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      "review": 'serve -s dist'
    },
    dependencies: {
      "axios": "^0.18.0"
    },
    devDependencies: {
      "serve": "^10.0.1"
    }
  })

  // delete default files
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/'))
      .forEach(path => delete files[path])
  })

  api.render('./template')
}