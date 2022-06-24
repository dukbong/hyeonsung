const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model{
    static init (sequelize){
        return super.init({
            comment : {
                type : Sequelize.TEXT,
                allowNull : false,
            },
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            paranoid : true,
            modelName : "Comment",
            tableName : "test5_comment",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
    static associate(db){
        db.Comment.belongsTo(db.User,{foreignKey : "commenter", targetKey : "id"});
    }
};