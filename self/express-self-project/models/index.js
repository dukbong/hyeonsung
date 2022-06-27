const Sequelize = require("sequelize");
const User = require("./user");
const Comment = require("./comment");
const env = process.env.MODELS_INDEX || "development";
const config = require("../config/config.json")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;