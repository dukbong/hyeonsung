const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{
    static init (sequelize){
        super.init({
            name : {
                type : Sequelize.STRING(10),
                allowNull : false,
                unique : true,
            },
            age : {
                type : Sequelize.INTEGER.UNSIGNED,
                allowNull : false,
            },
            married : {
                type : Sequelize.STRING(5),
                allowNull : false,
            },
            comment : {
                type : Sequelize.STRING(50),
            },
        }, {
            sequelize,
            underscored : false,
            paranoid : true,
            timestamps : true,
            modelName : "User",
            tableName : "test5_user",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
    static associate(db){
        db.User.hasMany(db.Comment, {foreignKey : "commenter", sourceKey : "id"});
    }
};