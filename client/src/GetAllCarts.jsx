import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GetAllCarts = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  // Fetch all products
  const fetchAllProducts = async () => {
    try {
      const response = await fetch(`http://localhost:7000/getAllProduct`);
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateProduct = (id) => {
    Swal.fire({
      title: "Do you want to update this product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      denyButtonText: `No, don't update`,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/update-product/${id}`);
      } else if (result.isDenied) {
        Swal.fire(
          "Update Cancelled",
          "The product update action was not performed.",
          "info"
        );
      }
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const deleteProductBtn = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `http://localhost:7000/deleteProduct/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            Swal.fire("Deleted!", "The product has been deleted.", "success");
            fetchAllProducts();
          } else {
            Swal.fire(
              "Failed!",
              "Unable to delete the product. Try again later.",
              "error"
            );
          }
        } catch (error) {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      } else {
        Swal.fire("Cancelled", "Your product is safe!", "info");
      }
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {productData.map((data) => (
          <div className="col-md-4 mb-4" key={data._id}>
            <div className="card shadow-sm border-0 rounded-lg h-100 hover-card">
              <img
                className="card-img-top rounded-top"
                src={data.productImg}
                alt={data.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{data.name}</h5>
                <p className="card-text text-muted text-truncate">
                  {data.description}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted text-decoration-line-through mb-0">
                    ${data.old_price}
                  </p>
                  <p className="text-success fw-bold mb-0">${data.new_price}</p>
                </div>
                <p className="text-warning text-center mt-2">
                  ⭐ Rating: {data.rating}
                </p>
                <div className="d-flex justify-content-around mt-auto">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteProductBtn(data._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => updateProduct(data._id)}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  );
};

export default GetAllCarts;
