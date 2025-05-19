const { Pokemon } = require("../db/Sequelize");

module.exports = (app) => {
    app.get('/page/:pageId', async (req, res) => {
        try
        {
            const count = await Pokemon.count();
            const max = 5 * req.params.pageId;
            const min = max-5;
            const totalPage = Math.ceil(count / 5);

            Pokemon.findAll({
                order: [['id', 'ASC']],
                limit: 3,
                offset: min
            })
                .then(pokemons => {
                    res.json({total:totalPage,pokemon:pokemons});
                })
                .catch(error => {
                    res.status(500).json(error);
                });

        } catch (error)
        {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur", data: error });
        }
    });
};
