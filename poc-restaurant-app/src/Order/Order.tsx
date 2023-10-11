import { Component } from "react";
import { Dish } from "../interfaces/Dish";

type Status = "notStarted" | "preparing" | "done";

export class Order extends Component {
  private status: Status;
  private orderId: number;
  private dishes: Dish[];
  private totalTime: number;
  private clientId: string;

  constructor(props: { dishes: Dish[]; clientId: string }) {
    super(props);
    this.clientId = props.clientId;
    this.dishes = props.dishes;
    this.totalTime = props.dishes.reduce(
      (total, dish) => total + dish.getPreparationTime(),
      0
    );
    this.orderId = new Date().getTime();
    this.status = "notStarted";
  }

  getClientId(): string {
    return this.clientId;
  }

  getStatus(): Status {
    return this.status;
  }

  getOrderId(): number {
    return this.orderId;
  }

  setStatus(s: Status): void {
    this.status = s;
    if (s === "done") {
      this.totalTime = 0;
    }
  }

  getTotalTime(): number {
    return this.totalTime;
  }

  render() {
    return <div>asd</div>;
  }
}
