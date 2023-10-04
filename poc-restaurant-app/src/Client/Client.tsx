import React, { Component, MouseEventHandler } from "react";
import { Subscriber } from "../interfaces/Subscriber";
import { Kitchen } from "../Kitchen/Kitchen";
import { Order } from "../Order/Order";

interface ClientProps {
  clientId: string;
  onNewOrder: MouseEventHandler<HTMLButtonElement>;
}

class Client implements Subscriber {
  private clientId: string;

  constructor(clientId: string) {
    // super(props);
    this.clientId = clientId;
  }

  update(orders: Order[]) {
    console.log("ORDER CHANGED STATE!", orders);
  }

  getClientId() {
    return this.clientId;
  }

  createOrder() {}

  // render() {
  //   return (
  //     <div className="client">
  //       <div>client</div>
  //       <div>
  //         Client id: <span>{this.clientId}</span>
  //         <div>
  //           <button onClick={this.props.onNewOrder}>NEW ORDER</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Client;
