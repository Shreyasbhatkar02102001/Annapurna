import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Signin from '../Pages/Signin';
import { useParams } from "react-router-dom";

function VendorAddress() {
  const { id } = useParams();

  const [address, setAddress] = useState({
    Line1: "",
    Line2: "",
    city: "",
    pincode: "",
    state: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAddress({
      ...address,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value)
  };


  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.Line1 === "" || address.Line2 === "" || address.city === "" || address.pincode === "" || address.state === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      console.log("address in vendor");
      console.log(address);

      axios
        .post(`http://localhost:8080/vendors/${id}/addaddress`, address)
        .then(
          (response) => {
            setAddress({ Line1: "", Line2: "", city: "", pincode: "", state: "" });
            navigate("/sign-in");
          }

        )
        .catch((error) => {
          console.log(error);
        });


    }
  };



  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <center>


        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          {/* Labels and inputs for form data */}
          <label className="label">Line1</label>
          <input onChange={handleChange} className="label" name="Line1" value={address.Line1} type="text" />

          <label className="label">Line2</label>
          <input onChange={handleChange} className="label" name="Line2" value={address.Line2} type="text" />

          <label className="label">City</label>
          <input onChange={handleChange} className="label" name="city" value={address.city} type="text" />

          <label className="label">Pincode</label>
          <input onChange={handleChange} className="label" name="pincode" value={address.pincode} minLength={10} maxLength={10} type="number" />

          <label className="label">State</label>
          <input onChange={handleChange} className="label" name="state" value={address.state} type="text" />

          {/* <label className="label">Address</label>
        <br></br>

        <label className="label">Line1</label>
        <input onChange={handleLine1} className="label"
          value={line1} type="text" />

        <label className="label">Line2</label>
        <input onChange={handleLine2} className="label"
          value={line2} type="text" />

        <label className="label">City</label>
        <input onChange={handleCity} className="label"
          value={city} type="text" />

        <label className="label">pincode</label>
        <input onChange={handlePincode} className="label"
          value={pincode} type="text" />

        <label className="label">state</label>
        <input onChange={handleState} className="label"
          value={state} type="text" /> */}

          {/* <label className="label">I am</label>
        <select className="label" onChange={handleChange} name="userRole">
        <option>---select one role---</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}        
        </select> */}
          {/* <input  className="resetbtn" type="reset" value="reset"></input>

        <input onClick={handleSubmit} className="submitbtn" type="submit" value="submit"></input> */}
          {/* <button onClick={handleReset} className="btn" type="reset">Reset</button> */}

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </center>
    </div>
  );
}

export default VendorAddress;
