const connection = require("../service/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.get = (req, res, next) => {

    // Affichage des textes dans l'ordre du plus récent
    connection.query('SELECT * FROM text ORDER BY date')
    .then(
        () => {
            return res.status(201).json({"message":"Textes affichés dans l'ordre croissant"});
        }
    )
    .catch(
        () => {
            return res.status(401).json({"message":"Les textes n'ont pu être affichés dans l'ordre croissant"})
        }
    )

};

exports.create = (req, res, next) => {

    // Creation d'un post
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const category1 = req.body.category1;
    const category2 = req.body.category2;
    const author = req.body.author;
    // Créer const lien image
    // Créer const date

    connection.query('INSERT INTO Text (title, description, price, category1, category2, author, picture, date) values (?,?,?,?,?,?,?,?)', [title, description,price, category1, category2, author])
    // Ajouter image et date quand possible
}