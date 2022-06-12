const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{
    static init (sequelize){
        return super.init({
            email : {
                type : Sequelize.STRING(100),
                allowNull : false,
                unique : true,
            },
            password : {
                type : Sequelize.STRING(200),
                allowNull : false,
            },
            address : {
                type : Sequelize.TEXT,
                allowNull : false,
            },
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            paranoid : false,
            modelName : "User",
            tableName : "test_user2",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
};