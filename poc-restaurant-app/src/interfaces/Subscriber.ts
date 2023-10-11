import { Order } from "../Order/Order";

export interface Subscriber {
  update(order: Order, orders: Order[]): void;
}
