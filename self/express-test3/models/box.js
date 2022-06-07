const Sequelize = require("sequelize");

module.exports = class Box extends Sequelize.Model{
    static init (sequelize){
        return super.init({
            product_name : {
                type : Sequelize.STRING(30),
                allowNull : false,
            },
            box_size : {
                type : Sequelize.STRING(15),
                allowNull : false,
            },
        },{
            sequelize,
            timestamps : true,
            paranoid : true,
            underscored : false,
            modelName : "Box",
            tableName : "boxes",
            charset : "utf8",
            collate : "utf8_general_ci",
        });
    }
};