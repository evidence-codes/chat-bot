const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");
const Subscription = require("./subscription.model")

const User = sequelize.define(
    'user',
    {
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
)

// Define associations
User.hasOne(Subscription);
Subscription.belongsTo(User);

module.exports = User;


