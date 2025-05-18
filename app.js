const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`) });

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize'); // après le chargement de dotenv
const cors = require('cors');
const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

sequelize.initDb()

require('./src/routes/FindAllPokemons')(app)
require('./src/routes/FindPokemonByName')(app)
require('./src/routes/FindPokemonById')(app)
require('./src/routes/DeletePokemon')(app)
require('./src/routes/CreatePokemon')(app)
require('./src/routes/UpdatePokemon')(app)
require('./src/routes/Login')(app)
require('./src/routes/LangueEn')(app)
require('./src/routes/LangueFr')(app)


app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
    res.status(404).json({message});
});

app.get('/', (req, res) => {
    res.json('First App !')
})

app.listen(port, () =>
    console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))