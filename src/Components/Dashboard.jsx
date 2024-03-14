const Dashboard = () => {
  // Mock data for key metrics
  const keyMetrics = [
    { name: "Total Products", value: 50 },
    { name: "Total Orders", value: 20 },
    { name: "Revenue", value: "$50,000" },
    { name: "Customer Satisfaction", value: "90%" },
    // Add more metrics as needed
  ];

  return (
    <div className="dashboard-container">
      <p className="heading">Welcome to the ERP Dashboard</p>
      <p>Key Metrics:</p>
      {/* Display key metrics here */}
      <div className="metrics-container">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="metric">
            <h3>{metric.name}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
