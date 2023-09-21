const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;



const Course = new Schema({
    name : {type: String, maxLength: 255 },
    description: {type: String, maxLength: 600},
    image: {type:String, maxLength:2555},
    level: { type: String },
    videoId: {type:String, maxLength:2555 },
    slug: { type: String, slug: 'name', },
},{
    timestamps:true,
})

module.exports = mongoose.model('Course', Course);
