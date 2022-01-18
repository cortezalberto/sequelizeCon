const express = require('express');
const router = express.Router();
// llamo al controlador con la metyodología de promesas
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);



router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);


module.exports = router;