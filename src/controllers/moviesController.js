const { Movie, Sequelize } = require("../database/models/index");
const { Op } = Sequelize;

// COntroilador con Promesas

const moviesController = {
    'list': (req, res) => {

        Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    

    

    'detail': (req, res) => {
        Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },

    'new': (req, res) => {
      Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
       Movie.findAll({
            where: {
                rating: {[Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }
}

module.exports = moviesController;