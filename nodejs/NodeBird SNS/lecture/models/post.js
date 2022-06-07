const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            content : {
                type : Sequelize.STRING(140),
                allowNull : false,
            },
            img : {
                type : Sequelize.STRING(200),
                allowNull : true,
            },
        },{
            sequelize,
            timestamps : true,
            paranoid : false,
            underscored : false,
            modelName : "Post",
            tableName : "posts",
            charset : "utf8mb4",
            collate : "utf8mb4_general_ci",
        });
    }

    static associate(db){
        db.Post.belongsTo(db.User);
        // foreignKey 가 생략되면 해당 테이블의 id를 기준으로 한다.
        db.Post.belongsToMany(db.Hashtag, {through : "PostHashtag"});
        // 다대다 관계에서는 중간 테이블이 하나 생성되는데
        // 이때 생성되는 테이블의 이름을 PostHashtag로 만들었다.
    }
};