import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    if (user) {
      db.collection("users")
        .doc("user?.uid")
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
          } else {
          setOrders([])
        }
    }, []); }
    

  return (
    <div className="orders">
      <h1>Your Orders</h1>
    </div>
  );
}

export default Orders;
