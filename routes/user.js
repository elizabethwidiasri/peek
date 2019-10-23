let express = require('express')
let router = express.Router()


const userController = require('../controllers/userController')

router.get('/user/login', userController.login)
router.get('/user', userController.findAll)
router.get('/user/add', userController.create) //render form add (login?)
router.post('/user/add', userController.create) //redirect
router.get('/user/edit/:id', userController.edit) //render firm edit
router.post('/user/edit/:id', userController.update) 
router.get('/user/delete/:id', userController.delete)

module.exports = router