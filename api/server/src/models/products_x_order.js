"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products_x_Order = sequelize.define(
    "Products_x_Order",
    {
      add_egg: DataTypes.BOOLEAN,
      add_chease: DataTypes.BOOLEAN,
    },
    {}
  );
  Products_x_Order.associate = function (models) {
    Products_x_Order.belongsTo(models.Product);
    Products_x_Order.belongsTo(models.Order);
  };
  return Products_x_Order;
};
