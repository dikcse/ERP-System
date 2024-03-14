import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import ProductsManagement from "./Components/ProductsManagement";
import Dashboard from "./Components/Dashboard";
import OrdersManagement from "./Components/OrdersManagement";
import OrdersCalendarView from "./Components/OrdersCalendarView";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">ERP System</span>
          </NavLink>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className="nav-link"
                activeclassname="active"
              >
                Products Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/orders"
                className="nav-link"
                activeclassname="active"
              >
                Orders Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/calendar"
                className="nav-link"
                activeclassname="active"
              >
                Orders Calendar View
              </NavLink>
            </li>
          </ul>
        </header>
      </div>

      <Routes>
        <Route path="/products" element={<ProductsManagement />} />
        <Route path="/orders" element={<OrdersManagement />} />
        <Route path="/calendar" element={<OrdersCalendarView />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
