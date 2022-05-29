const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        married: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        // underscored && timestamps 가 true로 되면
        // createdAt,updatedAt 컬럼이 자동으로 생기고
        // 생성시간, 수정시간을 자동으로 입력된다.
        // timestamps가 false면 안만들어진다.
        // 필요하면 직접 만들면 된다. 25번째 줄 참고
        // underscored가 false고 timestamps가 true면
        // created_at, updated_at으로 컬럼이 생긴다.
        // underscored는 그냥 컬럼명에 _ 붙일꺼냐 묻는거다.
        paranoid: false,
        // paranoid가 true면 deletedAt 컬럼이 생긴다.
        // deleteAt은 제거한 날짜를 의미한다.
        // Q. 그냥 지우면 되지 이걸 왜 만드나요?
        // A. 데이터베이스에서 한번 지우면 복구가 되지 않기 때문에
        // A. deleteAt 컬럼에 true값이 있으면 제거된 거다~ 라고 생각만 한다.
        // A. 이런걸 soft delete라고 부릅니다.
        modelName: "User",
        // modelName은 javascript에서 쓰는 이름
        tableName: "users",
        // tableName은 sql에서 쓰는 이름
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
};
