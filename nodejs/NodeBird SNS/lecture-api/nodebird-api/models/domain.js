const Sequelize = require("sequelize");

module.exports = class Domain extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            host :{
                type : Sequelize.STRING(80),
                allowNull : false,
            },
            type : {
                type : Sequelize.ENUM("free", "premium"),
                allowNull : false,
            },
            clientSecret : {
                type : Sequelize.UUID,
                //routes index 참고하면 이해가 간다.
                //uuidv4로 만든 36자리를 mysql에서 UUID로 타입 지정하면
                //자동으로 잘 정리되서 들어간다.
                allowNull : false,
            },
        }, {
            sequelize,
            timestamps : true,
            paranoid : true,
            modelName : "Domain",
            tableName : "domains",
        });
    }
    static associate(db){
        db.Domain.belongsTo(db.User);
    }
};