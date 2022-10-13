var express = require('express')
const {
    routes
} = require('../app')
const StudentModel = require('../models/StudentModels')
var router = express.Router()

//URL: localhost:3000/student
router.get("/", (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
            // res.send()
            res.render('student/index', {
                student: data
            });

        }
    })
})

router.get('/api', (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
            res.json(data)
        }
    })
})
//chuc nang delete
router.get('/delete/:id', (req, res) => {
    StudentModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Deleted student success !");
            var message = "Deleted student success!";
            res.redirect("/student")

        }
    })
})
//chuc nang add
router.get('/add', (req, res) => {
    res.render("student/new")
})

//xử lý dữ liệu từ form add
router.post('/add', (req, res) => {
    var student = new StudentModel(req.body);
    student.save((err) => {
        if (!err) {
            console.log("Add student succeed !")
            res.redirect("/student");
        }
    })
})
//chức năng edit
router.get('/edit/:id', (req, res) => {
    StudentModel.findById(req.params.id, (err, data) => {
        if (!err) {
            //render ra file: update.hbs (trong thư mục views/student)
            // gửi kèm dữ liệu của object student để load vào form edit
            //student (tên) , data (dữ liệu)
            res.render("student/update", {
                student: data
            })
        }
    })
})

//nhận và xử lý dữ liệu từ form edit
router.post('/edit/:id', (req, res) => {
    StudentModels.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (!err) {
            console.log("Update student success !")
            routes.render("/student")
        }
    })
})
module.exports = router;