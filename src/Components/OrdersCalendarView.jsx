import React, { useState } from "react";

const OrdersCalendarView = () => {
  // State for orders on calendar view
  const [ordersOnCalendar, setOrdersOnCalendar] = useState([
    { id: 1, orderDate: "2024-03-15", details: "Order details for March 15th" },
    { id: 2, orderDate: "2024-03-16", details: "Order details for March 16th" },
    // Add more orders as needed
  ]);

  // Function to add an order to the calendar view
  const addOrderToCalendar = (newOrder) => {
    setOrdersOnCalendar((prevOrders) => [...prevOrders, newOrder]);
  };

  // State for tracking the selected date during details view
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle selecting a date for details view
  const handleSelectDateForDetails = (date) => {
    setSelectedDate(date);
  };

  // Function to handle closing the details view
  const handleCloseDetailsView = () => {
    setSelectedDate(null);
  };

  return (
    <div className="calendar-container">
      <h2 className="heading">Orders Calendar View</h2>
      {/* Calendar view components */}
      {ordersOnCalendar.map((order) => (
        <div
          className="calendar-card"
          key={order.id}
          onClick={() => handleSelectDateForDetails(order.orderDate)}
        >
          <p className="calendar-date"> Date: {order.orderDate}</p>
          <p className="calendar-details">Details: {order.details}</p>
        </div>
      ))}

      {/* Optional: Date details view */}
      {selectedDate && (
        <div className="order-due-calendar">
          <h3>Orders Due on {selectedDate}</h3>
          {/* Fetch and display orders due on the selected date */}
          <button onClick={handleCloseDetailsView}>Close Details</button>
        </div>
      )}
    </div>
  );
};

export default OrdersCalendarView;
