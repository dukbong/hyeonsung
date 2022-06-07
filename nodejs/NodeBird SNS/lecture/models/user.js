const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            email : {
                type : Sequelize.STRING(40),
                allowNull : true,
                unique : true,
                // null에 한해서 unique가 작동하지 않는다.
            },
            nick : {
                type : Sequelize.STRING(15),
                allowNull : false,
            },
            password : {
                type : Sequelize.STRING(100),
                allowNull : true,
            },
            provider : {
                type : Sequelize.STRING(10),
                allowNull : false,
                defaultValue : "local",
            },
            snsId : {
                type : Sequelize.STRING(30),
                allowNull : true,
            },
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            paranoid : true,
            modelName : "User",
            tableName : "users",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }

    static associate(db){
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.User,{
            foreignKey : "followingId",
            as : "Followers",
            through : "Follow",
        });
        db.User.belongsToMany(db.User,{
            foreignKey : "followerId",
            as : "Followings",
            through : "Follow",
        });
    }
};