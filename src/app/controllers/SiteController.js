const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController{
    // [GET] /
    index(req, res){
        Course.find({}) 
        .then((courses) => {
            res.render('home', {
                courses: mutipleMongooseToObject(courses),
            });
        })
        .catch(err => next(err))
    }
    // index(req, res){
    //     res.render('home')
    // }

    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController