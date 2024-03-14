import React, { useState } from "react";

const OrdersManagement = () => {
  // Mock data for order listing
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "Customer 1",
      orderDate: "2024-03-15",
      status: "Pending",
    },
    {
      id: 2,
      customerName: "Customer 2",
      orderDate: "2024-03-16",
      status: "Shipped",
    },
    // Add more orders as needed
  ]);

  // State for tracking the selected order during details view
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to handle selecting an order for details view
  const handleSelectOrderForDetails = (order) => {
    setSelectedOrder(order);
  };

  // Function to handle closing the details view
  const handleCloseDetailsView = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="order-management-container">
      <h2 className="heading">Orders Management</h2>
      {/* Order listing */}
      <table className="order-table">
        <thead>
          <tr className="order-table-item">
            <th>ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleSelectOrderForDetails(order)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Optional: Order details view */}
      {selectedOrder && (
        <div className="order-detail">
          <h3>Order Details</h3>
          <p>ID: {selectedOrder.id}</p>
          <p>Customer Name: {selectedOrder.customerName}</p>
          <p>Order Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
          <button onClick={handleCloseDetailsView}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default OrdersManagement;
