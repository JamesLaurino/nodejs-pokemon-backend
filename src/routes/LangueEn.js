module.exports = (app) => {
    app.get('/en', (req, res) => {
        res.json({
            "sure_delete": "Are you sure to delete the pokemon with id",
            "no_more_data": "No more data",
            "admin_page": "Admin page",
            "loading_pokemon": "No more pokemon to load",
            "form_add_pokemon": "Add form pokemon",
            "back": "Back",
            "not_found_page": "Page not found",
            "connexion_form": "Connexion form",
            "find_one": "Find one",
            "pokemon_name": "Pokemon name",
            "length_name": "The length name must greater than two characters",
            "picture_pokemon": "Picture",
            "format_asset": "The format is not correct",
            "format_hp": "The HP must be greater than zero",
            "format_cp": "The HP must be greater than zero",
            "check_type": "Minimum one type and maximum two",
            "submit": "Submit",
            "edit": "Edit",
            "next": "Next",
            "prev": "Prev",
            "pokedex": "Pokedex",
            "password": "Password",
            "username": "Username",
            "login": "Login",
            "copyright": "My Pokedex. All rights are reserve.",
            "list_pokemon": "Pokemon list",
            "action": "What to do ? ",
            "hello_user": "Hello, {name}!",
            "delete": "delete",
            "delete_pokemon": "Pokemon deletion"
        })
    })
}