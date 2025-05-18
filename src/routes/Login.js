const { User } = require('../db/sequelize')

module.exports = (app) => {
    app.post('/client', (req, res) => {
        User.findOne({ where: { name: req.body.name } })
            .then(user => {
                console.log(req.body.password)
                console.log(req.body.name)

                if (!user) {
                    const message = `L'utilisateur demandé n'existe pas.`
                    return res.status(404).json({ message })
                }

                if (user.password === req.body.password) {
                    console.log("user present in db")
                    return res.json({ data: user, token: "1234" })
                } else {
                    const message = `Mot de passe incorrect.`
                    return res.status(401).json({ message })
                }
            })
            .catch(error => {
                const message = `Le pokémon n'a pas pu être récupéré. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    });
}