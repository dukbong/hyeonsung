const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name : {
                type : Sequelize.STRING(20),
                allowNull : false,
            },
            comment : {
                type : Sequelize.TEXT,
                allowNull : false,
            },
        },{
            sequelize,
            timestamps : false,
            underscored : false,
            paranoid : false,
            modelName : "User",
            tableName : "test_sql",
            charset : "utf8",
            collate : "utf8mb4_general_ci",
        });
    }
};