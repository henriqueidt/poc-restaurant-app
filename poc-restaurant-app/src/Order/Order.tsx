import { Component } from "react";
import { Dish } from "../interfaces/Dish";

type Status = "notStarted" | "preparing" | "done";

export class Order extends Component {
  private status: Status;
  private dishes: Dish[];
  private totalTime: number;
  private clientId: string;

  constructor(props: { dishes: Dish[]; clientId: string }) {
    super(props);
    this.clientId = props.clientId;
    this.dishes = props.dishes;
    this.totalTime = 3000;
    this.status = "notStarted";
  }

  getStatus(): Status {
    return this.status;
  }
  setStatus(s: Status): void {
    this.status = s;
  }
  getTotalTime(): number {
    return 200;
  }

  render() {
    return <div>asd</div>;
  }
}
