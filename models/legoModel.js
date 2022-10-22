const mongoose = require('mongoose')
const schema = mongoose.Schema

var legoSchema = new schema({
    name: String,
    image: String,
    type: String,
    fmg: Date,
    price: Number,
    origin: String
},
{
  VersionKey: false //optional (to remove _v when add new data)
}
)

//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var legoModel = mongoose.model('lego', legoSchema, 'lego')
module.exports = legoModel