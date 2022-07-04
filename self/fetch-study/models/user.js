const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{
    static init (sequelize){
        super.init({
            name : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            job :{
                type : Sequelize.STRING(30),
                allowNull : false,
                // defaultValue : "JobLess",
            },
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            paranoid : true,
            modelName : "User",
            tableName : "user_fetch_test",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
};