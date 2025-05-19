const { User } = require('../db/Sequelize')
const auth = require('../auth/Auth')

module.exports = (app) =>
{
    app.get('/clients', auth, (req, res) => {
            User.findAll({ order: ['name'] })
                .then(user => {
                    res.json(user)
                })
                .catch(error => {
                    const message = `La liste des users n'a pas pu être récupérée. 
                     Réessayez dans quelques instants.`
                    res.status(500).json({ message, data: error })
                })

    });
};
