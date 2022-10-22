const mongoose = require('mongoose')
const schema = mongoose.Schema

var ToySchema = new schema({
    name: String,
    image: String,
    type: String,
    fmg: Date,
    price: Number
},
{
  VersionKey: false //optional (to remove _v when add new data)
}
)

//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var ToyModel = mongoose.model('toy', ToySchema, 'toy')
module.exports = ToyModel