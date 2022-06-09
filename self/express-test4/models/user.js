const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{
    static init (sequelize){
        return super.init({
            nick : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true,
            },
            email : {
                type : Sequelize.STRING(40),
                allowNull : false,
                unique : true,
            },
            comment : {
                type : Sequelize.TEXT,
                allowNull : false,
            },
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            paranoid : false,
            modelName : "User",
            tableName : "test_user",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
};