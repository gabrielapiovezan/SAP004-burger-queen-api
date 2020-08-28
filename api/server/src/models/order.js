"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      table: DataTypes.INTEGER,
      client: DataTypes.STRING,
      waiter: DataTypes.STRING,
    },
    {}
  );
  Order.associate = function (models) {
    Order.hasMany(models.Products_x_Order);
  };
  return Order;
};
