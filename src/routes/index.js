const newRouter = require('./new')
const siteRouter = require('./site')

function routes(app){

      app.use('/new', newRouter)
      app.use('/', siteRouter)
      
     

}

module.exports = routes