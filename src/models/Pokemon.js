const validTypes = ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Vol', 'Normal', 'Electrik', 'Fée']

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 25],
                    msg: 'Le nom doit contenir entre 1 et 25 caractères.'
                },
                notEmpty: { msg: 'Le nom ne peut pas être vide.' },
                notNull: { msg: 'Le nom est une propriété requise.'}
            }
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false, DataTypesvalidate: {
                isInt: { msg: 'Utilisez uniquement des nombres entiers pour les points de vie.' },
                min: {
                    args: [0],
                    msg: 'Les points de vie doivent être supérieurs ou égales à 0.'
                },
                max: {
                    args: [999],
                    msg: 'Les points de vie doivent être inférieures ou égales à 999.'
                },
                notNull: { msg: 'Les points de vie sont une propriété requise.'}
            }
        },
        cp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'Utilisez uniquement des nombres entiers pour les points de attaque.' },
                min: {
                    args: [0],
                    msg: 'Les points de attaque doivent être supérieurs ou égales à 0.'
                },
                max: {
                    args: [999],
                    msg: 'Les points de attaque doivent être inférieures ou égales à 999.'
                },
                notNull: { msg: 'Les points de attaque sont une propriété requise.'}
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isTypesValid(value) {
                    if(!value) {
                        throw new Error('Un pokémon doit au moins avoir un type.')
                    }
                    if(value.split(',').length > 3) {
                        throw new Error('Un pokémon ne peux pas avoir plus de trois types.')
                    }
                    value.split(',').forEach(type => {
                        if(!validTypes.includes(type)) {
                            throw new Error(`Le type d'un pokémon doit appartenir à la liste suivante : ${validTypes}`)
                        }
                    });
                }
            }
        }
    })
}