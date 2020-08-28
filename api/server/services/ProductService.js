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
  static async updatedAuthor(req, res) {
    const alteredProduct = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateProduct = await ProductService.updateProduct(
        id,
        alteredProduct
      );
      if (!updateProduct) {
        util.setError(404, `Cannot find Product with the id: ${id}`);
      } else {
        util.setSuccess(200, "Product updated", updateProduct);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
  static async deleteProduct(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const productDelete = await ProductService.deleteProduct(id);

      if (productToDelete) {
        util.setSuccess(200, "Product deleted");
      } else {
        util.setError(404, `Product with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}
export default ProductService;
