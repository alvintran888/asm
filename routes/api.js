const express = require('express')
const ToyModel = require('../models/ToyModel')
const router = express.Router()

//view all: select * from toy
router.get('/', (req, res) => {
   ToyModel.find((err, data) => {
      if (!err) {
         res.json(data)
      }
   })
})

//view by id : select * from toy where _id = 'id'
router.get('/:id', (req, res) => {
   ToyModel.findById(req.params.id, (err, data) => {
      if (!err) {
         res.json(data)
      }
   })
})

//delete: delete from toy where _id = 'id'
router.delete('/:id', (req, res) => {
   ToyModel.findByIdAndDelete(req.params.id, (err) => {
      if (!err) {
         //res.send("Delete product succeed !")
         res.json({ "message": "delete product succceed" })
      }
   })
})

router.post('/', (req, res) => {
   ToyModel.create(req.body, (err, data) => {
      if (!err) {
         res.json(data)
      }
   })
})

router.put('/:id', (req, res) => {
   ToyModel.findByIdAndUpdate(req.body, (err, data) => {
      if (!err) {
         res.json(data)
      }
   })
})





module.exports = router