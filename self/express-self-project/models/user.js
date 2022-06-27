const Sequelize = require("sequelize");
const User = require("../../../nodejs/NodeBird SNS/lecture/models/user");

module.exports = class User extends Sequelize.Model{
    static init (sequelize){
        super.init({
            email : {
                type : Sequelize.STRING(50),
                allowNull : false,
                unique : true,
            },
            password : {
                type : Sequelize.STRING(100),
                allowNull : false,
            },
            nick : {
                type : Sequelize.STRING(10),
                allowNull : false,
            },
        },{
            sequelize,
            timestamps : true,
            paranoid : true,
            underscored : false,
            modelName : "User",
            tableName : "project_user",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
    static associate(db){
        db.User.hasMany(db.Comment,{foreignKey : "commenter", sourceKey : "id"});
    }
};
