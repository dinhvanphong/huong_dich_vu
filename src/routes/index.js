const newRouter = require('./new')
const siteRouter = require('./site')
const coursesRouter = require('./courses')

function routes(app){

      app.use('/new', newRouter)
      app.use('/courses', coursesRouter)
      app.use('/', siteRouter)
      
     

}

module.exports = routes