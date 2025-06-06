const { Pokemon } = require('../db/Sequelize')
const auth = require('../auth/Auth')

module.exports = (app) => {
    app.delete('/pokemons/:id', auth, (req, res) => {
        Pokemon.findByPk(req.params.id)
            .then(pokemon => {
                if(pokemon === null) {
                    const message = `Le pokémon demandé n'existe pas. Réessayez avec un autre identifiant.`
                    return res.status(404).json({ message })
                }

                return Pokemon.destroy({ where: { id: pokemon.id } })
                    .then(_ => {
                        const message = `Le pokémon avec l'identifiant n°${pokemon.id} a bien été supprimé.`
                        res.json({ message:message })
                    })
            })
            .catch(error => {
                const message = `Le pokémon n'a pas pu être supprimé. Réessayez dans quelques instants.`
                res.status(500).json({ message:message, data: error })
            })
    })
}