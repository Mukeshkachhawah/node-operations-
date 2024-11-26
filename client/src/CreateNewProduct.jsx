import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const CreateNewProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    productImg: "",
    description: "",
    new_price: "",
    old_price: "",
    product_qty: "",
    category: "",
    sub_category: "",
    ratings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/create",
        formData
      );
      const data = await response.json();

      if (response.ok) {
        alert("Product created successfully!");
        console.log("Product data:", data);
      } else {
        alert("Failed to create product: " + data.error);
        console.error("Error creating product:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Add New Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="productImg" className="form-label">
                  Product Image URL
                </label>
                <input
                  type="text"
                  name="productImg"
                  id="productImg"
                  value={formData.productImg}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="form-control"
                rows="3"
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="new_price" className="form-label">
                  New Price
                </label>
                <input
                  type="number"
                  name="new_price"
                  id="new_price"
                  value={formData.new_price}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="old_price" className="form-label">
                  Old Price
                </label>
                <input
                  type="number"
                  name="old_price"
                  id="old_price"
                  value={formData.old_price}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="product_qty" className="form-label">
                  Product Quantity
                </label>
                <input
                  type="number"
                  name="product_qty"
                  id="product_qty"
                  value={formData.product_qty}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="sub_category" className="form-label">
                Sub-category
              </label>
              <input
                type="text"
                name="sub_category"
                id="sub_category"
                value={formData.sub_category}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ratings" className="form-label">
                Ratings
              </label>
              <input
                type="number"
                name="ratings"
                id="ratings"
                value={formData.ratings}
                onChange={handleChange}
                required
                className="form-control"
                min="0"
                max="5"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary px-5 py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProduct;
