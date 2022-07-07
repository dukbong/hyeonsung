const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{
    static init (sequelize){
        super.init({
            email : {
                type:Sequelize.STRING(50),
                allowNull : false,
                unique : true,
            },
            password : {
                type : Sequelize.STRING(100),
                allowNull : false,
            },
            address : {
                type : Sequelize.TEXT,
                allowNull : false,
            },
            nick : {
                type : Sequelize.STRING(10),
                allowNull : false,
            },
            lang : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            info : {
                type: Sequelize.STRING(100),
            }
        },{
            sequelize,
            underscored : false,
            timestamps  : true,
            paranoid    : true,
            modelName   : "User",
            tableName   : "express6",
            charset     : "utf8",
            collate     : "utf8_general_ci",
        });
    }
}