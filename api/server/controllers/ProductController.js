import Util from "./util";
import ProductService from "../services/ProductService";

const util = new Util();

class ProductController {
  static async all(req, res) {
    const products = await ProductService.all();
    util.setSuccess(200, "Products retrieved", products);
    return util.send(res);
  }
  static async add(req, res) {
    if (
      !req.body.name ||
      !req.body.price ||
      typeof req.body.is_burger !== "boolean"
    ) {
      util.setError(400, "Please complete details");
      return util.send(res);
    }
    const newProduct = req.body;
    try {
      const createdProduct = await ProductService.add(newProduct);
      util.setSuccess(201, "Product Added!", createdProduct);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async updateProduct(req, res) {
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
        util.setError(404, `Cannot find product with the id: ${id}`);
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
      const productToDelete = await ProductService.deleteProduct(id);

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
export default ProductController;
