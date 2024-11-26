import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../node_modules/axios/lib/axios";

const UpdateCardDetails = () => {
  const { id } = useParams();
  const [product, setUpdateProduct] = useState({
    name: "",
    productImg: "",
    description: "",
    new_price: "",
    old_price: "",
    product_qty: "",
    category: "",
    sub_category: "",
    ratings: 0,
  });

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/updateProduct/${id}`
        );
        const data = await response.json();
        setUpdateProduct(data);
      } catch (error) {
        console.error("Error fetching update data:", error);
      }
    };

    getProductData();
  }, [id]);

  const handleChange = (e) => {
    setUpdateProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = await axios.patch(
        `http://localhost:5000/api/products/updateProduct/${id}`,
        product
      );
      alert("Product updated successfully!");
      setUpdateProduct({
        name: "",
        productImg: "",
        description: "",
        new_price: "",
        old_price: "",
        product_qty: "",
        category: "",
        sub_category: "",
        ratings: 0,
      });
      // Optionally, you can redirect or clear the form here.
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Update Product</h2>
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="row">
            {/* Product Name */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Product Image URL */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="productImg" className="form-label">
                  Product Image URL
                </label>
                <input
                  type="text"
                  id="productImg"
                  name="productImg"
                  value={product.productImg}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            {/* Description */}
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                  required
                />
              </div>
            </div>

            {/* New Price */}
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="new_price" className="form-label">
                  New Price
                </label>
                <input
                  type="number"
                  id="new_price"
                  name="new_price"
                  value={product.new_price}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Old Price */}
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="old_price" className="form-label">
                  Old Price
                </label>
                <input
                  type="number"
                  id="old_price"
                  name="old_price"
                  value={product.old_price}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            {/* Product Quantity */}
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="product_qty" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  id="product_qty"
                  name="product_qty"
                  value={product.product_qty}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Sub-Category */}
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="sub_category" className="form-label">
                  Sub-Category
                </label>
                <input
                  type="text"
                  id="sub_category"
                  name="sub_category"
                  value={product.sub_category}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>

            {/* Ratings */}
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="ratings" className="form-label">
                  Ratings
                </label>
                <input
                  type="number"
                  id="ratings"
                  name="ratings"
                  value={product.ratings}
                  onChange={handleChange}
                  className="form-control"
                  min="0"
                  max="5"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCardDetails;
