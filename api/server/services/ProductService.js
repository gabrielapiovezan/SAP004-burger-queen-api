import database from "../src/models";

class ProductService {
  static async all() {
    try {
      return await database.Product.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async add(newProduct) {
    try {
      return await database.Product.create(newProduct);
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const productToDelete = await database.Product.findOne({
        where: { id: Number(id) },
      });

      if (productToDelete) {
        const deletedProduct = await database.Product.destroy({
          where: { id: Number(id) },
        });
        return deletedProduct;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default ProductService;
