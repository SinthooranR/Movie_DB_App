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

// SIGNUP FUNCTION
const signup = async (req, res, next) => {
  const { name, email, password, plan } = req.body;

  //   check if user exists
  let existsEmail;
  try {
    existsEmail = await pool.query(
      "SELECT EXISTS (SELECT * FROM account WHERE email = $1)",
      [email]
    );
  } catch (err) {
    const error = new HttpError("Cannot find anything", 500);
    return next(error);
  }

  if (existsEmail.rows[0].exists === true) {
    const error = new HttpError("User exists", 500);
    return next(error);
  }

  // Add the user in the database
  let newUser;
  try {
    newUser = await pool.query(
      "INSERT INTO account (name, email, password, plan) VALUES($1, $2, $3, $4) RETURNING *",
      [name, email, password, plan]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    const error = new HttpError("Cannot add user", 500);
    return next(error);
  }
};

// LOGIN FUNCTION
const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await pool.query(
      "SELECT * FROM account WHERE email = $1 AND password = $2",
      [email, password]
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
