const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};

// const { Pool } = require("pg");
// const pool = new Pool();
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
