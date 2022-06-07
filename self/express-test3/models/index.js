const Sequelize = require("sequelize");
const Box = require("./box");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const sequelize = new Sequelize(config.database,config.username,config.password,config);

db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Box = Box

Box.init(sequelize);

module.exports = db;