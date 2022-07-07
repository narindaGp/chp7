'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Biodatum)
      User.hasMany(models.Game_History)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Username is required'
        },
        notNull: {
          msg: 'Username is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is required'
        },
        notNull: {
          msg: 'Password is required'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: {
        args: [['admin', 'user', 'vip']],
        msg: "Role does not exist, please enter a role"
      },
      validate: {
        notEmpty: {
          msg: 'Role is required'
        },
        notNull: {
          msg: 'Role is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'E-mail is required'
        },
        notNull: {
          msg: 'E-mail is required'
        }
      }
    },
    isSuperAdmin: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};