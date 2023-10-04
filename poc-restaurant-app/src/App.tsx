import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Client from "./Client/Client";
import { Kitchen } from "./Kitchen/Kitchen";
import Barbecue from "./Dishes/Barbecue";
import Salad from "./Dishes/Salad";
import Cooker from "./Cooker/Cooker";
import { Order } from "./Order/Order";
import { Subscriber } from "./interfaces/Subscriber";

interface AppState {
  orders: Order[];
}

const kitchen = new Kitchen();

const client1 = new Client("1");
const client2 = new Client("2");
const client3 = new Client("3");
const clients = [client1, client2, client3];

const cooker1 = new Cooker();
const cooker2 = new Cooker();
const cookers = [cooker1, cooker2];

class App extends Component<any, AppState> implements Subscriber {
  constructor(props: any) {
    super(props);
    this.state = { orders: kitchen.getOrders() };
    kitchen.addApp(this);
  }

  onNewOrder = (client: Client) => {
    const dish1 = new Barbecue();
    const dish2 = new Salad();
    kitchen.addOrder([dish1, dish2], client);
  };

  startOrder = () => {
    kitchen.startOrder();
  };

  update(updatedOrders: Order[]) {
    console.log("update", updatedOrders);
    this.setState({ orders: updatedOrders });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {clients.map((client, index) => (
            <div className="client" key={index}>
              <div>client</div>
              <div>id: {client.getClientId()}</div>
              <button onClick={() => this.onNewOrder(client)}>add order</button>
            </div>
          ))}
          <div className="kitchen">
            <div>Kitchen</div>
            <div>
              {this.state.orders.map((order, index) => (
                <div key={index} className="order">
                  <div>order {index}</div>
                  <div>{order.getStatus()}</div>
                </div>
              ))}
            </div>
          </div>

          {cookers.map((cooker, index) => (
            <div className="cooker" key={index}>
              <div>cooker</div>
              <button onClick={() => this.startOrder()}>start order</button>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
