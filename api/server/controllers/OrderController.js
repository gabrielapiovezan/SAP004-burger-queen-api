import Util from "./util";
import OrderService from "../services/OrderService";
import Products_x_OrderService from "../services/ProductsXOrderService";
const util = new Util();

class OrderController {
  static async all(req, res) {
    const products = await OrderService.all();
    util.setSuccess(200, "Orders retrieved", products);
    return util.send(res);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const order = await OrderService.getById(id);
    util.setSuccess(200, "Order retrieved", order);
    return util.send(res);
  }

  static async getItemsById(req, res) {
    const { id } = req.params;
    const items = await Products_x_OrderService.findByOrderId(id, req.body);
    util.setSuccess(200, "Order retrieved", items);
    return util.send(res);
  }

  static async createItem(req, res) {
    const { id } = req.params;
    const item = await Products_x_OrderService.add(id, req.body);
    util.setSuccess(200, "Order retrieved", item);
    return util.send(res);
  }

  static async add(req, res) {
    const newOrder = req.body;
    try {
      const createdOrder = await OrderService.add(newOrder);
      util.setSuccess(201, "Order Added!", createdOrder);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async allItems(req, res) {
    return [];
  }
}
export default OrderController;
