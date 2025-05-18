module.exports = (app) => {
    app.get('/fr', (req, res) => {
        res.json({
            "sure_delete": "Êtes-vous sûr de vouloir supprimer le Pokémon avec l'id",
            "delete_pokemon": "Suppression du pokémon",
            "no_more_data": "Il n'y a plus de pokémon à charger",
            "delete": "Supprimer",
            "admin_page": "Page admin",
            "loading_pokemon": "Plus de pokémon à charger",
            "back": "Retour",
            "form_add_pokemon": "Formulaire d'ajout d'un pokémon",
            "not_found_page": "Page inexistante",
            "connexion_form": "Formulaire de connexion",
            "find_one": "Rechercher",
            "pokemon_name": "Nom du pokémon",
            "length_name": "La longueur du nom doit être supérieur à deux caractères",
            "format_asset": "Le format n'est pas correct",
            "format_hp": "Le HP doit être plus grand que zero",
            "format_cp": "Le CP doit être plus grand que zero",
            "check_type": "Minimum 1 type et maximum 2",
            "picture_pokemon": "Image",
            "submit": "Envoi",
            "edit": "Editer",
            "next": "Plus",
            "prev": "Moins",
            "pokedex": "Pokédex",
            "password": "Mot de passe",
            "username": "Nom de l'utilisateur",
            "login": "Se connecter",
            "copyright": "Mon Pokédex. Tous droits réservés.",
            "list_pokemon": "Liste des pokémons",
            "action": "Que faire ?",
            "hello_user": "Bonjour, {name} !"
        })
    })
}