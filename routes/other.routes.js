const express = require('express');
const router = express.Router();
const otherController = require('../controllers/other')
const path = require("path")

// '/'
router.get('/', otherController.main)
router.get('/home', (req,res) => res.redirect('/'))

// ABOUT
router.get('/', otherController.about)

module.exports = router;
