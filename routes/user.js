const express = require('express');
const router = express.Router();

const user = [
  { name: 'Alex' },
  { name: 'John' },
  { name: 'Mark' },
  { name: 'Kevin' }  
];

router.get('/', (req, res) => {
  res.render('users', { user, path: "/users" });
});

router.get('/add', (req, res) => {
  res.render('add-user', { path: "/users/add" });
});

router.post('/add', (req, res) => {
  user.push({ name: req.body.userName })
  res.redirect("/users/");
});

exports.routes = router;
exports.userData = user;
