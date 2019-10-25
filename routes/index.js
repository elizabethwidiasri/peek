const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const reviewController = require('../controllers/reviewController')
const trailerController = require('../controllers/trailerController')
const alertFail = require('../helpers/alertFail');
const ModelTrailer = require('../models').Trailer
const ModelUser = require('../models').User
const ModelReview = require('../models').Review


//home
router.get('/', (req, res) => {
   
    res.render('par', {err : null} );
});
// router.get('/:id', (req, res) => { 
//   // res.send(req.params.id)
//   res.render('par', {err : null} );
// });
//register
router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);
//login
//gallery


// router.use(function (req, res, next) {
//   if (req.session.user) {
//     // console.log('ini dr index.js', req.session.user);
//     next()
//   } else {
//     // res.send('you have to login first')
//     // swal.fire('haloooooo')
    
//     res.render('par', {err : `You have to login first`, })
//   }
// })
router.get('/:userId',(req,res)=>{
  res.redirect(`/gallery/${req.params.userId}`)
})
router.get('/gallery/:userId', (req, res) => {
  ModelTrailer.findAll({include : [ModelUser, ModelReview], order: [["id"]]})
  .then(trailer => {
// res.send(trailer)
    res.render('gallery', {trailer : trailer, userId : req.params.userId});
  })
  .catch(err => {
res.send(err.message)
  })
})



router.get('/gallery/:userId/:movieId', (req, res) => {
  ModelReview.findAll({
    include : [ModelTrailer, ModelUser],
    where : {
      TrailerId : req.params.movieId
    }
  })
  .then(review => {
    // res.send(review)
    res.render('comment', {review : review, userId : req.params.userId})
  })
  .catch(err => {
    res.send(err.message)
  })
})

router.post('/gallery/:userId/:movieId/update', (req, res) => {

    ModelUser.findOne({
      where : {
        name : req.body.name
      }
    })
    .then(user => {
 return ModelReview.create({
  UserId : user.id,
  TrailerId : req.params.movieId,
  comment : req.body.comment  
  })
  
    })
    .then((review) => {
      res.send(review)
      // res.render('comment', {review : review, userId : req.params.userId})
      // console.log("masukk dari post/userid/movieid/update");
      // res.redirect('/${req.params.userId}/${req.params.movieId}')
    })
    .catch(err=>{
      res.send(err.message)
    })
    
})

router.get('/gallery/:reviewId/delete', (req, res) => {
  
  
  ModelReview.destroy({
    where : {
      id : Number(req.params.reviewId)
    }
  })
  .then(()=> {
   res.redirect(`/gallery/${req.params.reviewId}/delete`)
  })
  .catch(err => {
    res.send(err)
  })



  // ModelReview.findByPk(req.params.reviewId)
  // .then((review) => {
  //   res.send(review)
  //   ModelReview.destroy({
  //     where : {
  //       id : Number(req.params.reviewId)
  //     }
  //   })

  //   res.render('comment', {review : review})
  // })
  // .catch(err => {
  //   res.send(err)
  // })
})
// router.get('/gallery/:id', (req, res) => {
//   ModelTrailer.findAll({
//     include: user
//   })
//   .then(trailer => {
//     res.send(trailer)
//     // res.render('gallery');
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })

router.get('/logout', function(req, res, next) {
  if (req.session) {
    req.session.destroy(function(err) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/')
      }
    })
  }
})










//menampilkan semua trailer 
// router.get('/trailer', trailerController.findAll)


// //user
// router.get('/user/login', userController.login)
// router.get('/user', userController.findAll)
// router.get('/user/add', userController.create) //render form add (login?)
// router.post('/user/add', userController.create) //redirect
// router.get('/user/edit/:id', userController.edit) //render firm edit
// router.post('/user/edit/:id', userController.update)
// router.get('/user/delete/:id', userController.delete)


// //review
// router.get('/review', reviewController.findAll)
// router.get('/review/add', reviewController.add)
// router.post('/review/add', reviewController.create)
// router.get('/review/edit/:id', reviewController.edit)
// router.post('/review/edit/:id', reviewController.update)
// router.get('/review/delete/:id', reviewController.delete)
module.exports = router