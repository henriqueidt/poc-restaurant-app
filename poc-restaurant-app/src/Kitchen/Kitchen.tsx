import { Component } from "react";
import { Publisher } from "../interfaces/Publisher";
import { Subscriber } from "../interfaces/Subscriber";
import { Order } from "../Order/Order";
import { Dish } from "../interfaces/Dish";
import Client from "../Client/Client";
import App from "../App";

export class Kitchen implements Publisher {
  private observers: Subscriber[] = [];
  private orders: Order[] = [];

  // constructor(props: any) {
  //   super(props);
  // }

  subscribe(subscriber: Subscriber): void {
    this.observers.push(subscriber);
  }
  unsubscribe(subscriber: Subscriber): void {
    const observerIndex = this.observers.indexOf(subscriber);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  publish(): void {
    this.observers.forEach((observer) => observer.update(this.orders));
  }

  addOrder(dishes: Dish[], client: Client): void {
    const order = new Order({ clientId: client.getClientId(), dishes });
    this.orders.push(order);
    this.observers.push(client);
    this.publish();
  }

  addApp(app: App) {
    this.observers.push(app);
  }

  getOrders(): Order[] {
    return [...this.orders];
  }
  startOrder(): void {
    const firstOrderNotStarted = this.orders.find(
      (order) => order.getStatus() === "notStarted"
    );
    if (firstOrderNotStarted) {
      console.log(firstOrderNotStarted);
      firstOrderNotStarted.setStatus("preparing");
      console.log(firstOrderNotStarted);
      this.publish();
    }
  }
  setOrderDone(orderId: string): void {}
  setOrderStart(orderId: string): void {}
  getOrderTime(orderId: string): number {
    return 300;
  }
}
