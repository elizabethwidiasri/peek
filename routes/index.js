let express = require('express')
let router = express.Router()

const userController = require('../controllers/userController')
const reviewController = require('../controllers/reviewController')
const trailerController = require('../controllers/trailerController')

router.get('/', (req, res) => res.send('Haloooo'))

//menampilkan semua trailer 
router.get('/trailer', trailerController.findAll) 


//user
router.get('/user/login', userController.login)
router.get('/user', userController.findAll)
router.get('/user/add', userController.create) //render form add (login?)
router.post('/user/add', userController.create) //redirect
router.get('/user/edit/:id', userController.edit) //render firm edit
router.post('/user/edit/:id', userController.update) 
router.get('/user/delete/:id', userController.delete)


//review
router.get('/review', reviewController.findAll)
router.get('/review/add', reviewController.add)
router.post('/review/add', reviewController.create)
router.get('/review/edit/:id', reviewController.edit)
router.post('/review/edit/:id', reviewController.update)
router.get('/review/delete/:id', reviewController.delete)
module.exports = router