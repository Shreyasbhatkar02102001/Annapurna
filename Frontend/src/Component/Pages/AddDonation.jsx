import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { IP_ADDRS } from "../../Service/Constant";

function DonationManagement() {

  const donor = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (!donor) {
      swal("Not Authorized", "", "error");
    }
  }, [])

  const navigate = useNavigate();

  const [donation, setDonation] = useState({
    mealName: '',
    amount: '',
    ngoId: '',
  });

  const [tiffins, setTiffins] = useState([]);
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    axios.get(`${IP_ADDRS}/tiffins/list`)
      .then(res => setTiffins(res.data))
      .catch(err => console.log(err));

    axios.get(`${IP_ADDRS}/ngos/list`)
      .then(res => setNgos(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (event) => {
    setDonation({
      ...donation,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (donation.mealName === '' || donation.amount === '' || donation.ngoId === '') {
      swal("Please Enter All Fields", "", "error");
      return;
    }

    axios.post(`${IP_ADDRS}/donations/create`, { ...donation, donorId: donor.id })
      .then(() => {
        swal("Donation Successful", "", "success");
        setDonation({ mealName: '', amount: '', ngoId: '' });
        navigate("/donor-dashboard");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="card col-md-10 offset-md-1 mt-5">
      <div style={{ marginTop: 20, marginLeft: 20 }}>
        <h5>Hi {donor?.firstName},</h5>
      </div>
      <center>
        <h2><b>Make a Donation</b></h2>
        <hr className="lead" />
        <form>
          <div className="form-group mb-3">
            <label className="form-label">Meal Name</label>
            <select onChange={handleChange} name="mealName" className="form-select" style={{ width: "400px", margin: "auto" }}>
              <option>---Select Meal---</option>
              {tiffins.map((tiffin, index) => (
                <option key={index} value={tiffin.name}>{tiffin.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Amount</label>
            <input
              onChange={handleChange}
              name="amount"
              value={donation.amount}
              type="number"
              className="form-control"
              style={{ width: "400px", margin: "auto" }}
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Select NGO</label>
            <select onChange={handleChange} name="ngoId" className="form-select" style={{ width: "400px", margin: "auto" }}>
              <option>---Select NGO---</option>
              {ngos.map((ngo, index) => (
                <option key={index} value={ngo.id}>{ngo.name}</option>
              ))}
            </select>
          </div>

          <button onClick={handleSubmit} className="btn btn-primary" type="submit">Donate</button>
        </form>
      </center>
    </div>
  );
}

export default DonationManagement;
