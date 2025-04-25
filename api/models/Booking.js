const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");
const { CommonFields, commonOptions } = require("./CommanFields");

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "user_id",
      references: {
        model: "user",
        key: "id",
      },
    },
    organizerId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "organizer_id",
      references: {
        model: "organizer",
        key: "id",
      },
    },
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "event_id",
      references: {
        model: "event",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM("pending", "booked", "cancelled"),
      defaultValue: "pending",
    },
    ...CommonFields,
  },
  {
    tableName: "booking",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Booking;
