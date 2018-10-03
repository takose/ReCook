process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const tslint =  require('./loaders/tslint')
const environment = require('./environment')

environment.loaders.append('tslint', tslint)
module.exports = environment.toWebpackConfig()
