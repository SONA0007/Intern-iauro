import React, { useState } from "react";
import "./App.css";

type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const PizzaOrderApp: React.FC = () => {
  const [orderQueue, setOrderQueue] = useState<Order[]>([]);
  const [cashInRegister, setCashInRegister] = useState<number>(100);
  const [nextOrderId, setNextOrderId] = useState<number>(1);

  const placeOrder = (pizza: Pizza) => {
    const newOrder: Order = { id: nextOrderId, pizza, status: "ordered" };
    setOrderQueue([...orderQueue, newOrder]);
    setCashInRegister(cashInRegister + pizza.price);
    setNextOrderId(nextOrderId + 1);
  };

  const completeOrder = (orderId: number) => {
    setOrderQueue(
      orderQueue.map((order) =>
        order.id === orderId ? { ...order, status: "completed" } : order
      )
    );
  };

  return (
    <div className="pizza-order-app">
      <header><h1>Pizza Order App</h1></header>
      <h2 className="cash-register">Cash in Register: ${cashInRegister}</h2>
      
      <h3 className="menu-title">Menu</h3>
      <div className="pizza-content">
      <ul className="menu-list">
        {menu.map((pizza) => (
          <li key={pizza.name} className="menu-item">
            <span>
              {pizza.name} - ${pizza.price}
            </span>
            <button
              onClick={() => placeOrder(pizza)}
              className="order-button">
              Order
            </button>
          </li>
        ))}
      </ul>
      </div>
      <h3 className="orders-title"><h2>Orders</h2></h3>
      <ul className="orders-list">
        {orderQueue.map((order) => (
          <li key={order.id} className="order-item">
            <span>
              Order #{order.id} - {order.pizza.name} ({order.status})
            </span>
            {order.status === "ordered" && (
              <button
                onClick={() => completeOrder(order.id)}
                className="complete-button">
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaOrderApp;
