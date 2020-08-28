"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      has_extra: DataTypes.BOOLEAN,
      is_burguer: DataTypes.BOOLEAN,
    },
    {}
  );
  Product.associate = function (models) {
    Product.hasMany(models.Products_x_Order);
  };
  return Product;
};
