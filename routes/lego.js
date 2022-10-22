const express = require('express')
const legoModel = require('../models/legoModel')
const router = express.Router()


router.get('/drop', (req, res) => {
    legoModel.deleteMany({}, () => {
        console.log("Delete all data succeed !")
        res.redirect('/lego')
    })
})



//URL: localhost:3000/toy
router.get('/', (req, res) => {
    legoModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/toy
            res.render('lego/index', { lego: data })
        }
    })
})

router.get('/legoView', (req, res) => {
    legoModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/toy
            res.render('lego/legoView', { lego: data })
        }
    })
})

router.get('/api', (req, res) => {
    legoModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/lego
            res.json(data)
        }
    })
})

router.get('/delete/:id', (req, res) => {
    legoModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete lego succeed !");
            //var message = "Delete lego succeed !";
            //redirect về trang /lego (URL không phải view)
            res.redirect("/lego");
        }
    })
})

//render ra form ADD
router.get('/add', (req, res) => {
    res.render("lego/new");
})

//nhận & xử lý dữ liệu từ form ADD
router.post('/add', (req, res) => {
    legoModel.create(req.body, (err) => {
        if (!err) {
            console.log('Add lego succeed !')
            res.redirect("/lego")
        }
    })
})

//render ra form EDIT
router.get('/edit/:id', (req, res) => {
    legoModel.findById(req.params.id, (err, data) => {
        if (!err) {
            res.render("lego/update", { lego: data })
        }
    })
})

//nhận & xử lý dữ liệu từ form EDIT
router.post('/edit/:id', (req, res) => {
    var id = req.params.id;
    var lego = req.body;
    legoModel.findByIdAndUpdate(id, lego, (err) => {
        if (!err) {
            console.log("Update lego succeed !")
            res.redirect("/lego")
        }
    })
})

router.get('/detail/:id', (req, res) => {
    legoModel.findById(req.params.id, (err, lego) => {
        if (!err) {
            res.render('lego/info', { lego: lego })
        }
    })
})

//search function
router.post('/search', (req, res) => {
    legoModel.find({ name: new RegExp(req.body.name, "i") }, (err, data) => {
        if (!err) {
            res.render('lego/index', { lego: data })
        }
    })
})
//sort function
router.get('/sort/asc', (req, res) => {
    legoModel.find()
        .sort({ name: 1 })
        .exec((err, data) => {
            if (!err) {
                res.render('lego/index', { lego: data })
            }
        })
})

router.get('/sort/desc', (req, res) => {
    legoModel.find()
        .sort({ name: -1 })
        .exec((err, data) => {
            if (!err) {
                res.render('lego/index', { lego: data })
            }
        })
})



module.exports = router