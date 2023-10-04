import { Kitchen } from "../Kitchen/Kitchen";
import { Order } from "../Order/Order";
import { Subscriber } from "../interfaces/Subscriber";

export default class Cooker implements Subscriber {
  private orderId: string = "";

  setOrderDone(): void {}
  startNewOrder(id: string): void {
    this.orderId = id;
  }

  update(orders: Order[]) {
    console.log("STARTING AN ORDER");
  }
}
