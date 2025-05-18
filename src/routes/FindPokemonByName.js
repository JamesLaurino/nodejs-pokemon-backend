const { Pokemon } = require('../db/sequelize')
const { Op } = require('sequelize');

module.exports = (app) => {
    app.get('/pokemons/name', (req, res) => {

        const nameLike = req.query.name_like;
        Pokemon.findAll({
            where: {
                name: {
                    [Op.like]: `%${nameLike}%`
                }
            }
        })
            .then(pokemons => {
                res.json(pokemons);
            })
            .catch(error => {
                res.status(500).json(error);
            });

    });
};
