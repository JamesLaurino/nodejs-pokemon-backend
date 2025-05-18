const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

// module.exports = (app) => {
//     app.post('/client', (req, res) => {
//         User.findOne({ where: { name: req.body.name } })
//             .then(user => {
//                 console.log(req.body.password)
//                 console.log(req.body.name)
//
//                 if (!user) {
//                     const message = `L'utilisateur demandé n'existe pas.`
//                     return res.status(404).json({ message })
//                 }
//
//                 if (user.password === req.body.password) {
//                     console.log("user present in db")
//                     return res.json({ data: user, token: "1234" })
//                 } else {
//                     const message = `Mot de passe incorrect.`
//                     return res.status(401).json({ message })
//                 }
//             })
//             .catch(error => {
//                 const message = `Le pokémon n'a pas pu être récupéré. Réessayez dans quelques instants.`
//                 res.status(500).json({ message, data: error })
//             })
//     });
// }

module.exports = (app) => {
    app.post('/client', (req, res) => {

        User.findOne({ where: { name: req.body.name } }).then(user => {

            if(!user) {
                const message = `L'utilisateur demandé n'existe pas.`
                return res.status(404).json({ message })
            }

            console.log(req.body.password)
            console.log(user.password)
            return bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
                if(!isPasswordValid) {
                    const message = `Le mot de passe est incorrect.`
                    return res.status(401).json({message})
                }

                const token = jwt.sign(
                    { userId: user.id },
                    privateKey,
                    { expiresIn: '24h' }
                );

                const message = `L'utilisateur a été connecté avec succès`;
                return res.json({ message, data: user, token })
            })
        })
            .catch(error => {
                const message = `L'utilisateur n'a pas pu être connecté. Réessayez dans quelques instants.`
                res.status(500).json({ message, data: error })
            })
    })
}