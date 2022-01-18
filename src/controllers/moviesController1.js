// en este archivo muestro async/await

const { Movie, Sequelize } = require("..//database/models/index");
const { Op } = Sequelize;



const moviesController = {


    list: async (req, res) => {

        try {
            let movies = await Movie.findAll()

            res.render('moviesList.ejs', { movies })
        } catch (error) {
            res.send('Falló')
        }
    },

    detail: async (req, res) => {
        let { id } = req.params;
        try {
            let movie = await Movie.findByPk(id)



            res.render('moviesDetail.ejs', { movie })

        } catch (error) {
            res.send('Falló')
        }
    },



    'new': (req, res) => {
        Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            });
    },

    recomended: async (req, res) => {

        try {
            let movies = await Movie.findAll({
                order: [
                    ['release_date', 'DESC']
                ],
                limit: 5
            })
            res.render('newestMovies', { movies })

        } catch (error) {
            res.send('Falló')
        }
    },


    recomended: async (req, res) => {

        try {
            let movies = await Movie.findAll({
                where: {
                    rating: { [Op.gte]: 8 }
                },
                order: [
                    ['rating', 'DESC']
                ]
            })
            res.render('recommendedMovies.ejs', { movies })

        } catch (error) {
            res.send('Falló')
        }
    }


}

module.exports = moviesController;