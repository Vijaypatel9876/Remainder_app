require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const createToken = (email, id) => {
  let data = {
    email: email,
    _id: id,
  };
  const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: "8h" });
  return token;
};
const tokenValidation = (req, res, next) => {
  try {
    const BearerToken =
      req.body.token ||
      req.query.token ||
      req.headers["x-access-token"] ||
      req.headers["authorization"];
    if (!BearerToken) {
      return res.status(403).send("A token is required for authentication");
    }
    var token = BearerToken.replace("Bearer ", "");
    // console.log(token);
    const jwtoken = jwt.verify(token, JWT_SECRET_KEY);
    req.tokenData = jwtoken;
    next();
  } catch (err) {
    return res.status(400).send({ stausCode: 0, data: err.toString() });
  }
};
module.exports = { createToken, tokenValidation };
