interface Publisher {
  subscribe(subscriber: Subscriber): void;
  unsubscribe(subscriber: Subscriber): void;
  publish(): void;
}

interface Subscriber {
  update(p: Publisher);
}

class Kitchen implements Publisher {
  private observers: Subscriber[] = [];

  constructor() {}

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
    this.observers.forEach((observer) => observer.update(this));
  }

  addOrder(o: Order): void {}
  getOrders(): Orders[] {}
  setOrderDone(orderId: string): void {}
  setOrderStart(orderId: string): void {}
  getOrderTime(orderId: string): number {}
}

class Client implements Subscriber {
  private clientId: string;
  update(observable: Kitchen) {
    console.log("ORDER CHANGED STATE!");
  }
}

class Cooker implements Subscriber {
  private orderId: string;

  setOrderDone(): void {}
  startNewOrder(): void {}
  update(observable: Kitchen) {
    console.log("STARTING AN ORDER");
  }
}

type Status = "preparing" | "notReady" | "done";

class Order {
  private status: Status;
  private dishes: Dish[];
  private totalTime: number;
  private clientId: number;

  getStatus(): Status {}
  setStatus(s: Status): void {}
  getTotalTime(): number {}
}

class Barbecue {
  private preparationTime: number;

  getPreparationTime(): number {}
}
