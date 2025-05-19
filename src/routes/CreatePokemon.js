const { Pokemon } = require('../db/Sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/Auth')

module.exports = (app) => {
    app.post('/pokemons', auth, (req, res) => {
        Pokemon.create(req.body)
            .then(pokemon => {
                const message = `Le pokémon ${pokemon.name} être ajouté avec success`
                res.json({message:message,pokemon:pokemon})
            })
            .catch(error => {
                if(error instanceof ValidationError) {
                    return res.status(400).json({ message: error.message, data: error });
                }
                if(error instanceof UniqueConstraintError) {
                    return res.status(400).json({ message: error.message, data: error });
                }
                const message = `Le pokémon n'a pas pu être ajouté. Réessayez dans quelques instants.`
                res.status(500).json({ message:message, data: error })
            })
    })
}