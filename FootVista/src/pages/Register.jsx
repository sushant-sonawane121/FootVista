import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    pin: '',
    username: '',
    password: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow w-100" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="eg. First and last name"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="eg. 0000000000"/>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="eg. xyz123@gmail.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter Your Full Address"/>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="pin" className="form-label">Pin / Post code</label>
                <input type="text" className="form-control" id="pin" name="pin" value={formData.pin} onChange={handleChange} required placeholder="eg. 549865"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required placeholder="Username"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Password"/>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">SignUp</button>
             
            </div>
            <div className="mt-2">
              <p>Have an Account <Link to={"/Login"}>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
