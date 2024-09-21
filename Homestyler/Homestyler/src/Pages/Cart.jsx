import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, deleteCart }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    purchase: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    purchase: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      phone: "",
      address: "",
      email: "",
      purchase: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
      valid = false;
    }
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (formData.purchase.trim() === "") {
      newErrors.purchase = "Purchase is required";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Order has been placed");
      window.location.reload();
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
              
        
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cartItems.map((item) => (
                  <tr>
                    <td className="align-middle">
                      <img width={50} src={item.imageUrl} alt="" /> 
                      <Link to={'/detail/'+ item.id}>{item.name}</Link>
                    </td>
                    <td className="align-middle">{item.price}</td>
                                   
                    <td className="align-middle">
                      <button 
                        className="btn btn-sm btn-primary"
                        onClick={() => deleteCart(item)}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
