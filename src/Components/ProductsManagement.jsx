import React, { useState } from "react";

const ProductsManagement = () => {
  // Mock data for product listing
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Category A",
      price: 50,
      stockQuantity: 100,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 75,
      stockQuantity: 50,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category c",
      price: 75,
      stockQuantity: 50,
    },
    {
      id: 4,
      name: "Product 4",
      category: "Category B",
      price: 75,
      stockQuantity: 50,
    },
    {
      id: 5,
      name: "Product 5",
      category: "Category B",
      price: 75,
      stockQuantity: 50,
    },
    {
      id: 6,
      name: "Product 6",
      category: "Category B",
      price: 75,
      stockQuantity: 50,
    },

    // Add more products as needed
  ]);

  // State for form fields
  const [formFields, setFormFields] = useState({
    name: "",
    category: "",
    price: "",
    stockQuantity: "",
  });

  // State for tracking the selected product during edit
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle form field changes
  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // Function to handle product addition
  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      ...formFields,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setFormFields({
      name: "",
      category: "",
      price: "",
      stockQuantity: "",
    });
  };

  // Function to handle product editing
  const handleEditProduct = () => {
    if (selectedProduct) {
      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, ...formFields }
          : product
      );

      setProducts(updatedProducts);
      setFormFields({
        name: "",
        category: "",
        price: "",
        stockQuantity: "",
      });
      setSelectedProduct(null);
    }
  };

  // Function to handle product deletion
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  // Function to handle selecting a product for editing
  const handleSelectProductForEdit = (product) => {
    setFormFields(product);
    setSelectedProduct(product);
  };

  return (
    <div className="product-container">
      <h2 className="heading">Products Management</h2>
      {/* Product listing */}
      <div className="main-table">
        <div className="table-item">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>${product.price}</td>
                  <td>{product.stockQuantity}</td>
                  <td>
                    <button onClick={() => handleSelectProductForEdit(product)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteProduct(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Product form for adding and editing */}
        <div className="add-product">
          <h3>{selectedProduct ? "Edit Product" : "Add Product"}</h3>
          <form className="form-class">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formFields.name}
                onChange={handleFormFieldChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={formFields.category}
                onChange={handleFormFieldChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formFields.price}
                onChange={handleFormFieldChange}
              />
            </label>
            <label>
              Stock Quantity:
              <input
                type="number"
                name="stockQuantity"
                value={formFields.stockQuantity}
                onChange={handleFormFieldChange}
              />
            </label>
            {selectedProduct ? (
              <button type="button" onClick={handleEditProduct}>
                Update
              </button>
            ) : (
              <button type="button" onClick={handleAddProduct}>
                Add
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductsManagement;
