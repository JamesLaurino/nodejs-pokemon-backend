const jwt = require('jsonwebtoken')
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers.authorization

    if(!authorizationHeader) {
        const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`
        return res.status(401).json({ message })
    }

    const token = authorizationHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, PRIVATE_KEY, (error, decodedToken) => {
        if(error) {
            const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
            return res.status(401).json({ message, data: error })
        }
        next()
    })
}