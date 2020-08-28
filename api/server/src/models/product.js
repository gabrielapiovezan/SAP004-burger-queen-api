"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      has_extra: DataTypes.BOOLEAN,
      is_burger: DataTypes.BOOLEAN,
    },
    {}
  );
  Product.associate = function (models) {
    Product.hasMany(models.Products_x_Order, {
      foreignKey: "productId",
    });
  };
  return Product;
};
