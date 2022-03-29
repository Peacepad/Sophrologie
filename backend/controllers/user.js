const connection = require("../service/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Cookies = require("cookies");

exports.signup = (req, res, next) => {
  //Vérifier les informations des champs
  const regex = [
    (emailRegEx = /.+\@.+\..+/),
    (passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/),
  ];

  const needVerification = [
    (email = req.body.email),
    (password = req.body.password),
  ];
  // Si tout est bon
  if (emailRegEx.test(email) && passwordRegEx.test(password)) {
    // Vérifier si l'utilisateur existe déjà
    connection
      .query(`SELECT * FROM User where email =?`, [req.body.email])
      .then((results) => {
        if (results[0]) {
          return res.status(403).json({ message: "le compte existe déjà" });
        } else {
          // On crypte le mot de passe
          bcrypt.hash(req.body.password, 10).then((hash) => {
            connection
              .query(`INSERT INTO User(email, password) VALUES (?,?)`, [
                req.body.email,
                hash,
              ])
              .then(() => {
                return res.status(201).json({ message: "Utilisateur créé" });
              })
              .catch(() => {
                return res.status(400).json({ error: "Utilisateur non créé" });
              });
          });
        }
      })
      .catch(() => {
        return res
          .status(400)
          .json({ error: "le compte n'a pas pu être créé" });
      });
  } else {
    return res.status(402).json({
      error: "Les données envoyées ne respectent pas le format requis",
    });
  }
};

exports.signin = (req, res, next) => {
  try {
    connection
      .query(`SELECT email, password, user_id FROM User WHERE email=?`, [
        req.body.email,
      ])
      .then((results) => {
        if (results.length === 0 || req.body.email == undefined) {
          //Si l'email n'existe pas
          return res.status(401).json("Utilisateur ou mot de passe incorrect");
        } else if (req.body.password == undefined) {
          //Si le mot de passe n'existe pas
          return res.status(401).json("Utilisateur ou mot de passe incorrect");
        } else {
          bcrypt
            .compare(req.body.password, results[0].password)
            .then((valid) => {
              if (!valid) {
                //Les mots de passe sont différents
                return res
                  .status(401)
                  .json("Utilisateur ou mot de passe incorrect");
              } else {

              const token = jwt.sign(
                {
                  userId: results[0].user_id,
                },
                "M0N_T0K3N_3ST_1NTR0UV4BL3"
              );

              return res
                .cookie("access_token", token, {
                  httpOnly: true,
                  //secure: true,
                  expires: new Date(Date.now() + 50000),
                })
                .status(200)
                .json({ message: "Connexion effectuée avec succès" });
              // Si c'est bon on créer un token à partir de user_id
            }
            });
          
        }
      });
  } catch {
    return res.status(500).send("connexion impossible");
  }
};
