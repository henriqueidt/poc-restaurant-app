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
    this.clientId = clientId;
  }

  update(order: Order) {
    // console.log("ORDER CHANGED STATE!", order);
  }

  getClientId() {
    return this.clientId;
  }
}

export default Client;
