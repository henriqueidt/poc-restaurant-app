import { Component } from "react";
import { Publisher } from "../interfaces/Publisher";
import { Subscriber } from "../interfaces/Subscriber";
import { Order } from "../Order/Order";
import { Dish } from "../interfaces/Dish";
import Client from "../Client/Client";
import App from "../App";
import Cooker from "../Cooker/Cooker";

export class Kitchen implements Publisher {
  private observers: Subscriber[] = [];
  private orders: Order[] = [];

  subscribe(subscriber: Subscriber): void {
    this.observers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber): void {
    const observerIndex = this.observers.indexOf(subscriber);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }
  publish(order: Order): void {
    this.observers.forEach((observer) => observer.update(order, this.orders));
  }

  addOrder(dishes: Dish[], client: Client): void {
    const order = new Order({ clientId: client.getClientId(), dishes });
    this.orders.push(order);
    this.observers.push(client);
    this.publish(order);
  }

  addApp(app: App) {
    this.observers.push(app);
  }

  getOrders(): Order[] {
    return [...this.orders];
  }
  startOrder(cooker: Cooker): void {
    this.subscribe(cooker);
    const firstOrderNotStarted = this.orders.find(
      (order) => order.getStatus() === "notStarted"
    );
    if (firstOrderNotStarted) {
      firstOrderNotStarted.setStatus("preparing");
      this.publish(firstOrderNotStarted);
    }
  }

  setOrderDone(cooker: Cooker): void {
    const orderAssignedToCooker = this.orders.find(
      (order) => order.getOrderId() === cooker.getOrderId()
    );

    if (orderAssignedToCooker) {
      orderAssignedToCooker.setStatus("done");
      this.publish(orderAssignedToCooker);
    }

    this.unsubscribe(cooker);
  }

  setOrderStart(orderId: string): void {}

  getOrderTime(client: Client): number {
    let preparationTime = 0;
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].getClientId() === client.getClientId()) {
        return preparationTime + this.orders[i].getTotalTime();
      }
      if (this.orders[i].getStatus() !== "done") {
        preparationTime += this.orders[i].getTotalTime();
      }
    }
    return 0;
  }
}
