const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
  });
  
  router.get('/login', (req, res) => {
      res.render('login');
    });
    
    router.get('/register', (req, res) => {
      res.render('register');
    });
  
    router.get('/sensores', (req, res) => {
      res.render('sensores');
    });
  
    router.get('/addsensor', (req, res) => {
      res.render('addsensor');
    });
  
    router.get('/logged', (req, res) => {
      res.render('logged');
    });
  
    router.get('/graphs', (req, res) => {
      res.render('graphs');
    });

    module.exports = router;