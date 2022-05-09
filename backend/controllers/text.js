const connection = require("../service/database");

exports.get = (req, res, next) => {
  const body = JSON.stringify(req.body);
  console.log(body);

  if (body !== "{}") {
    const splitCategory = body.split(`category\\":\\"`)[1];
    const onlyCategory = splitCategory.split(`\\"`)[0];

    if (body.includes("Tri du plus ancien au plus récent")) {
      if (onlyCategory === "Toutes les catégories") {
        connection
          .query("SELECT * FROM text ORDER BY date ASC")
          .then((textList) => {
            const listOfAllTexts = [];

            textList.forEach((textData) => {
              const text = {
                text_id: textData.text_id,
                title: textData.title,
                description: textData.description,
                price: textData.price,
                image: textData.link_picture,
                download: textData.download_nb,
                link: textData.link_download,
                category1: textData.category1,
                category2: textData.category2,
              };

              if (
                !listOfAllTexts.find(
                  (textElement) => text.text_id == textElement.text_id
                )
              ) {
                listOfAllTexts.push(text);
              }
            });

            return res.status(201).json(listOfAllTexts);
          })
          .catch(() => {
            return res.status(401).json({
              message: "Les textes n'ont pu être affichés dans l'ordre demandé",
            });
          });
      } else {
        connection
          .query(
            "SELECT * FROM text where category1 = ? OR category2 = ? ORDER BY date ASC",
            [onlyCategory, onlyCategory]
          )
          .then((textList) => {
            const listOfAllTexts = [];

            textList.forEach((textData) => {
              const text = {
                text_id: textData.text_id,
                title: textData.title,
                description: textData.description,
                price: textData.price,
                image: textData.link_picture,
                download: textData.download_nb,
                link: textData.link_download,
                category1: textData.category1,
                category2: textData.category2,
              };

              if (
                !listOfAllTexts.find(
                  (textElement) => text.text_id == textElement.text_id
                )
              ) {
                listOfAllTexts.push(text);
              }
            });

            return res.status(201).json(listOfAllTexts);
          })
          .catch(() => {
            return res.status(401).json({
              message: "Les textes n'ont pu être affichés dans l'ordre demandé",
            });
          });
      }
    }

    if (body.includes("Tri par prix croissant")) {
      if (onlyCategory === "Toutes les catégories") {
        connection
          .query("SELECT * FROM text ORDER BY price ASC")
          .then((textList) => {
            const listOfAllTexts = [];

            textList.forEach((textData) => {
              const text = {
                text_id: textData.text_id,
                title: textData.title,
                description: textData.description,
                price: textData.price,
                image: textData.link_picture,
                download: textData.download_nb,
                link: textData.link_download,
                category1: textData.category1,
                category2: textData.category2,
              };

              if (
                !listOfAllTexts.find(
                  (textElement) => text.text_id == textElement.text_id
                )
              ) {
                listOfAllTexts.push(text);
              }
            });

            res.status(201).json(listOfAllTexts);
          })
          .catch(() => {
            return res.status(401).json({
              message:
                "Les textes n'ont pu être affichés dans l'ordre croissant",
            });
          });
      } else {
        connection
          .query(
            "SELECT * FROM text WHERE category1 = ? OR category2 = ? ORDER BY price ASC",
            [onlyCategory, onlyCategory]
          )
          .then((textList) => {
            const listOfAllTexts = [];

            textList.forEach((textData) => {
              const text = {
                text_id: textData.text_id,
                title: textData.title,
                description: textData.description,
                price: textData.price,
                image: textData.link_picture,
                download: textData.download_nb,
                link: textData.link_download,
                category1: textData.category1,
                category2: textData.category2,
              };

              if (
                !listOfAllTexts.find(
                  (textElement) => text.text_id == textElement.text_id
                )
              ) {
                listOfAllTexts.push(text);
              }
            });

            res.status(201).json(listOfAllTexts);
          })
          .catch(() => {
            return res.status(401).json({
              message:
                "Les textes n'ont pu être affichés dans l'ordre croissant",
            });
          });
      }
    }
    if (body.includes("Tri du plus récent au plus ancien")) {
      if (onlyCategory === "Toutes les catégories") {
        connection
          .query("SELECT * FROM text ORDER BY date DESC")
          .then((textList) => {
            const listOfAllTexts = [];

            textList.forEach((textData) => {
              const text = {
                text_id: textData.text_id,
                title: textData.title,
                description: textData.description,
                price: textData.price,
                image: textData.link_picture,
                download: textData.download_nb,
                link: textData.link_download,
                category1: textData.category1,
                category2: textData.category2,
              };

              if (
                !listOfAllTexts.find(
                  (textElement) => text.text_id == textElement.text_id
                )
              ) {
                listOfAllTexts.push(text);
              }
            });

            return res.status(201).json(listOfAllTexts);
          })
          .catch(() => {
            return res.status(401).json({
              message:
                "Les textes n'ont pu être affichés dans l'ordre croissant",
            });
          });
      } else {
        connection
          .query(
            "SELECT * FROM text WHERE category1 = ? OR category2 = ? ORDER BY date DESC",
            [onlyCategory, onlyCategory]
          )
          .then((textList) => {
            const listOfAllTexts = [];

            textList.forEach((textData) => {
              const text = {
                text_id: textData.text_id,
                title: textData.title,
                description: textData.description,
                price: textData.price,
                image: textData.link_picture,
                download: textData.download_nb,
                link: textData.link_download,
                category1: textData.category1,
                category2: textData.category2,
              };

              if (
                !listOfAllTexts.find(
                  (textElement) => text.text_id == textElement.text_id
                )
              ) {
                listOfAllTexts.push(text);
              }
            });

            return res.status(201).json(listOfAllTexts);
          })
          .catch(() => {
            return res.status(401).json({
              message:
                "Les textes n'ont pu être affichés dans l'ordre croissant",
            });
          });
      }
    }
  }
  if (body == "{}") {
    connection
      .query("SELECT * FROM text ORDER BY date DESC")
      .then((textList) => {
        const listOfAllTexts = [];

        textList.forEach((textData) => {
          const text = {
            text_id: textData.text_id,
            title: textData.title,
            description: textData.description,
            price: textData.price,
            image: textData.link_picture,
            download: textData.download_nb,
            link: textData.link_download,
            category1: textData.category1,
            category2: textData.category2,
          };

          if (
            !listOfAllTexts.find(
              (textElement) => text.text_id == textElement.text_id
            )
          ) {
            listOfAllTexts.push(text);
          }
        });

        res.status(201).json(listOfAllTexts);
      })
      .catch(() => {
        return res.status(401).json({
          message: "Les textes n'ont pu être affichés dans l'ordre croissant",
        });
      });
  }
};

exports.create = (req, res, next) => {
  // Creation d'un post
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const category1 = req.body.category1;
  const category2 = req.body.category2;

  const date =
    new Date().toISOString().slice(0, 10) +
    " " +
    new Date().toLocaleTimeString("fr-fr");

  const picture = `${req.protocol}://${req.get("host")}/uploads/${
    req.files[0].filename
  }`;

  const pdf = `${req.protocol}://${req.get("host")}/uploads/${
    req.files[1].filename
  }`;

  if (category2 !== "Selectionner une categorie") {
    connection
      .query(
        "INSERT INTO Text (title, description, price, category1, category2, link_picture, link_download, date) values (?,?,?,?,?,?,?,?)",
        [title, description, price, category1, category2, picture, pdf, date]
      )
      .then(() => {
        return res.status(201);
      });
  } else {
    connection
      .query(
        "INSERT INTO Text (title, description, price, category1, link_picture, link_download, date) values (?,?,?,?,?,?,?)",
        [title, description, price, category1, picture, pdf, date]
      )
      .then(() => {
        return res.status(201);
      });
  }
};

exports.getOne = (req, res, next) => {
  const text_id = req.params.id;

  connection.query("SELECT * FROM Text where text_id = ?", [text_id])
  .then(
    (results) => {
      console.log(results);
      let textData = {
        title: results[0].title,
        description: results[0].description,
        price: results[0].price,
        category1: results[0].category1,
        category2: results[0].category2,
        link_picture: results[0].link_picture
      }
      console.log(textData);

       res.status(201).json(textData);
    }
  )
  .catch(
    () => {
      return res.status(402);
    }
  )
};