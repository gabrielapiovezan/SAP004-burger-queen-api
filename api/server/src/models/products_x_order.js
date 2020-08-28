"use strict";
module.exports = (sequelize, DataTypes) => {
  const Products_x_Order = sequelize.define("Products_x_Order", {}, {});
  Products_x_Order.associate = function (models) {
    Products_x_Order.belongsTo(models.Product, {
      foreignKey: "productId",
    });
    Products_x_Order.belongsTo(models.Order, {
      foreignKey: "orderId",
    });
  };
  return Products_x_Order;
};
