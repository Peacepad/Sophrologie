const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "MON_TOK3N_DID3NTIFICATION_3ST_INTROUVABL3");

    

    next();
  } catch {
    res.status(401).json({
      error: "Token invalid",
    });
  }
};
