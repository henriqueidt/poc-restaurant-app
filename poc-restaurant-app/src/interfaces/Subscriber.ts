import { Order } from "../Order/Order";
// import { Publisher } from "./Publisher";

export interface Subscriber {
  update(orders: Order[]): void;
}
