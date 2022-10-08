const mongoose = require('mongoose');
const schema = mongoose.Schema
var StudentSchema = new schema(
    {
    name: String,
    email: String,
    gender: String,
    dob: Date,
    year: Number,
    grade: Number,
    image: String

},
{
    VersionKey: false 
}
)
//Note: tham so cuoi cung bat buoc phai la ten cua collection 
var StudentModel = mongoose.model ('Sinh Vien', StudentSchema, 'student')
module.exports = StudentModel