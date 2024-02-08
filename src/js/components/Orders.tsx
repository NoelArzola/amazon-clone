import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Order from "./Order";
import "../../css/Orders.css";
import { useStateValue } from "../../StateProvider";

interface BasketItem {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

interface User {
  uid: string;
}

interface OrderData {
  id: string;
  data: {
    basket: BasketItem[];
    amount: number;
    created: any;
  };
}

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        const userOrders = await db
          .collection("users")
          .doc(user.uid)
          .collection("orders")
          .orderBy("created", "desc")
          .get();

        setOrders(
          userOrders.docs.map((doc) => ({
            id: doc.id,
            data: doc.data() as OrderData["data"],
          }))
        );
      } else {
        setOrders([]);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
