const { Pokemon } = require('../db/sequelize')

module.exports = (app) =>
{
    app.get('/pokemons', (req, res) => {

        if (req.query._start)
        {
            const start = parseInt(req.query._start, 10);
            const end = parseInt(req.query._end, 10);

            if (isNaN(start) || isNaN(end)) {
                const message = 'Les paramètres _start et _end doivent être des nombres.';
                return res.status(400).json({message});
            }

            const limit = end - start;
            const offset = start;

            Pokemon.findAll({
                order: [['id', 'ASC']],
                limit: limit,
                offset: offset
            })
                .then(pokemons => {
                    const message = `Les pokémons de l'index ${start} à ${end - 1} ont bien été récupérés.`;
                    res.json(pokemons);
                })
                .catch(error => {
                    const message = `La liste des pokémons n'a pas pu être récupérée. Réessayez dans quelques instants.`;
                    res.status(500).json({message, data: error});
                });
        } else {
            Pokemon.findAll({ order: ['name'] })
                .then(pokemons => {
                    res.json(pokemons)
                })
                .catch(error => {
                    const message = `La liste des pokémons n'a pas pu être récupérée. 
                     Réessayez dans quelques instants.`
                    res.status(500).json({ message, data: error })
                })
        }
    });
};
