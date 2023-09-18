

class NewsController{
    // [GET] /new
    index(req, res){
        res.render('new')
    }
}

module.exports = new NewsController