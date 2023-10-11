import { Kitchen } from "../Kitchen/Kitchen";
import { Order } from "../Order/Order";
import { Subscriber } from "../interfaces/Subscriber";

export default class Cooker implements Subscriber {
  private orderId: number | null = null;

  getOrderId(): number | null {
    return this.orderId;
  }

  setOrderDone(): void {
    this.orderId = null;
  }

  startNewOrder(id: number): void {
    this.orderId = id;
  }

  update(order: Order) {
    if (order.getStatus() === "preparing" && this.orderId === null) {
      this.startNewOrder(order.getOrderId());
    } else if (
      order.getStatus() === "done" &&
      order.getOrderId() === this.orderId
    ) {
      this.setOrderDone();
    }
  }
}
