/////////////////////////////////////////////////////////////////////
// Make a file called db.js and Use this format with the pg library
// User your postgres credentials

// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: <username>,
//     password: <password>,
//     database: <db-name>,
//     host: <host-name>,
//     port: <port-number>
// });

// module.exports = pool;
//////////////////////////////////////////////////////////////////////

// NEED TO CREATE THIS FILE IF YOU WANT TO TEST WITH YOUR OWN POSTGRES DB
const pool = require("../db");
const HttpError = require("../ErrorHandler");
const bcrypt = require("bcryptjs");

// SIGNUP FUNCTION
const signup = async (req, res, next) => {
  const { name, email, password, plan } = req.body;

  //   check if user exists
  let existsEmail;
  try {
    existsEmail = await pool.query(
      "SELECT * FROM account WHERE email = $1",
      [email]
    );

    if (existsEmail.rows.length > 0) {
      const error = new HttpError("User exists", 500);
      return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 10);
    let newUser = await pool.query(
      "INSERT INTO account (name, email, password, plan) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, hashPassword, plan]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    const error = new HttpError("Cannot find anything", 500);
    return next(error);
  }
};

// LOGIN FUNCTION
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  try {
    const validPassword = bcrypt.compare(password, user.rows[0].password);
    user = await pool.query(
      "SELECT * FROM account WHERE email = $1 AND password = $2",
      [email, validPassword]
    );
  } catch (err) {
    const error = new HttpError("Cannot Login", 500);
    return next(error);
  }

  if (user.rows[0] === undefined) {
    const error = new HttpError(
      "This user does not exist or Credentials do not match",
      400
    );
    return next(error);
  }
  res.json(user.rows[0]);
};

// Exports
exports.signup = signup;
exports.login = login;
