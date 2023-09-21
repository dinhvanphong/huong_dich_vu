const newRouter = require('./new')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const meRouter = require('./me')

function routes(app){
      app.use('/me', meRouter)
      app.use('/new', newRouter)
      app.use('/courses', coursesRouter)
      app.use('/', siteRouter)
      
     

}

module.exports = routes