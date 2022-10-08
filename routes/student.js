var express = require('express')
const StudentModel = require('../models/StudentModels')
var router = express.Router()

//URL: localhost:3000/student
router.get("/", (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
            // res.send()
            res.render('student/index', { student: data });

        }
    })
})


module.exports = router;