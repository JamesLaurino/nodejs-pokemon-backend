const { Sequelize, DataTypes } = require('sequelize');
const PokemonModel = require('../models/pokemon');
const UserModel = require('../models/user');

const pokemons = require('./Mock-pokemon');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

const Pokemon = PokemonModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

const initDb = () => {
    return sequelize.sync({ force: true }).then(_ => {
        pokemons.map(pokemon => {
            Pokemon.create({
                name: pokemon.name,
                hp: pokemon.hp,
                cp: pokemon.cp,
                picture: pokemon.picture,
                type: pokemon.type.join(',')
            }).then(pokemon => console.log(pokemon.toJSON()));
        });

        User.create({ name: 'admin', password: "1234" });
        User.create({ name: 'user', password: "4321" });
        console.log('La base de donnée a bien été initialisée !');
    });
};

module.exports = { initDb, Pokemon, User };
