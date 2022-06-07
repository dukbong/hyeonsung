const Sequelize = require("sequelize");

module.exports = class Hastag extends Sequelize.Model{
    static init (sequelize){
        return super.init({
            title : {
                type : Sequelize.STRING(15),
                allowNull : false,
                unique : true,
            },
        },{
            sequelize,
            timestamps : true,
            paranoid : false,
            underscored : false,
            modelName : "Hashtag",
            tableName : "hashtags",
            charset : "utf8mb4",
            collate : "utf8mb4_general_ci",
        });
    }

    static associate(db){
        db.Hashtag.belongsToMany(db.Post,{through : "PostHashtag"});
    }
};