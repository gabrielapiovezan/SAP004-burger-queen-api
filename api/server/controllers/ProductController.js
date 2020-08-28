import Util from "./util";

const util = new Util();

class ProductController {
  static async getAllProducts(req, res) {
    util.setSuccess(200, "Products retrieved", { id: 1 });
    return util.send(res);
  }
}
export default ProductController;
