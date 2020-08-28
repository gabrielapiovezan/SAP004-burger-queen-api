import database from "../src/models";
import Products_x_OrderService from "./ProductsXOrderService";

class OrderService {
  static async all() {
    try {
      const orders = await database.Order.findAll();
      const newOrders = await Promise.all(
        orders.map(async (order) => {
          order.items = await Products_x_OrderService.findByOrderId(order.id);
          return order;
        })
      );
      return newOrders;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      return database.Order.findOne({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw error;
    }
  }
  static async add(newOrder) {
    try {
      return database.Order.create(newOrder);
    } catch (error) {
      throw error;
    }
  }
}
export default OrderService;
