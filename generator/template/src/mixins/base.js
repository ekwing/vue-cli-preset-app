export default {
  methods: {
    linkTo (options) {
      let config = {}
      if (typeof options === 'string') {
        config.path = config
        config.query = this.$route.query
      } else {
        if (options.name) {
          config.name = options.name
        } else {
          config.path = options.path
        }
        config.query = Object.assign({}, this.$route.query, options.query)
      }
      this.$router.push(config)
    },
    checkPath (str, type = 1) {
      if (type === 1) {
        return this.$route.name === str
      }
      return this.$route.path === str
    },
    px2rem (num) {
      return `${num / 75}rem`
    }
  }
}
