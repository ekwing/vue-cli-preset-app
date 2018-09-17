var config = {
  dev: {
    apiBaseURL: '/mock',
    routeBaseURL: '/'
  },
  prod: {
    apiBaseURL: '',
    routeBaseURL: '/'
  }
}

module.exports = process.env.NODE_ENV === 'production' ? config.prod : config.dev