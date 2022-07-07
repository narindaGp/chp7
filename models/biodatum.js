'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biodatum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Biodatum.belongsTo(models.User)
    }
  }
  Biodatum.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'User Id is required'
        },
        notNull: {
          msg: 'User Id is required'
        }
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Firstname is required'
        },
        notNull: {
          msg: 'Firstname is required'
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Lastname is required'
        },
        notNull: {
          msg: 'Lastname is required'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: {
        args: [['male', 'female', 'none']],
        msg: "Gender is not available yet"
      },
      validate: {
        notEmpty: {
          msg: 'Gender is required'
        },
        notNull: {
          msg: 'Gender is required'
        }
      }
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Server Location is required'
        },
        notNull: {
          msg: 'Server Location is required'
        }
      }
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Date of Birth is required'
        },
        notNull: {
          msg: 'Date of Birth is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Biodatum',
  });
  return Biodatum;
};