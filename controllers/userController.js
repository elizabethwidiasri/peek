const User = require('../models').User
const hashPassword = require('../helper/hashPassword')
class UserController {
  static findAll(req, res) {
    User.findAll()
    .then(users => {
      res.send(users)
      // res.se('users', {users})
    })
    .catch(err => {
      res.render('error', {error : err})
    })
  }

  // static add(req, res) {
  //   res.render('addUser') 
  // }

  static login(req, res) {
    User.findOne({
      where : {
        username : `edwinselalu`
      }
    })
    .then(user => {
      if (user && user.password === hashPassword(req.body.password, user.salt)) {
        res.send(`login sukses`)
      } else {
        res.send(`gagal login`)
      }
    })
    .catch(err => {
      res.send(err.message)
    })
  }

  static create(req, res) {
    User.create({
      name : req.body.name,
      email :req.body.email,
      password : req.body.password,
        username : req.body.username
      //   name : `edwin`,
      //   email : `edwin@mail.com`,
      //   password : `edwinsemangat`,
      //   username : `edwinselalu`
      // })
      .then(user => {
        // res.redirect('/user')
        res.send(user)
      })
      .catch(err => {
        res.render('error', { error : err})
      })
    })
  }

  static edit(req, res) {
    User.findByPk({
      where : {
        id : req.params.id
      }
    })
    .then(user => {
      // res.render('editUser', {user})
      res.send(user)
    })
    .catch(err => {
      // res.render('error', {error : err})
      res.send(err)
    })
  }

  static update(req, res) {
    User.update({
      name : req.body.name,
      email :req.body.email,
      password : req.body.password,
      username : req.body.username
    }, 
    {
      where : {
        id : req.params.id
      }
    })
    .then(()=> {
      // res.redirect('/user')
      res.send(user)
    })
    .catch(err => {
      res.send(err)
      // res.render('error', {error : err})
    })
  }

  static delete(req, res) {
    User.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(() => {
      res.redirect('/users')
    })
    .catch(err => {
      res.render('error', {error : err})
    })
  }


}

module.exports = UserController