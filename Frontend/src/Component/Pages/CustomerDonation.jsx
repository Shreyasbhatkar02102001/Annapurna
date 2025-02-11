import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { IP_ADDRS } from "../../Service/Constant";

function CustomerDonation() {
    const { vendorId } = useParams();
    const [donationMeals, setDonationMeals] = useState([]);
    const [donation, setDonation] = useState({
        mealId: '',
        amount: 0
    });

    useEffect(() => {
        axios.get(`${IP_ADDRS}/api/donation-meals/vendor/${vendorId}`)
            .then(res => setDonationMeals(res.data))
            .catch(err => console.log(err));
    }, [vendorId]);

    const handleChange = (e) => {
        setDonation({ ...donation, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${IP_ADDRS}/api/donations`, { ...donation, donorId: JSON.parse(sessionStorage.getItem("user")).id })
            .then(() => {
                swal("Donation Successful", "", "success");
                setDonation({
                    mealId: '',
                    amount: 0
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="card col-md-10 offset-md-1 mt-5">
            <div style={{ marginTop: 20, marginLeft: 20 }}>
                <h5>Donate to NGO</h5>
            </div>
            <center>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label className="form-label">Select Meal</label>
                        <select name="mealId" value={donation.mealId} onChange={handleChange} className="form-select" required>
                            <option value="">Select Meal</option>
                            {donationMeals.map(meal => (
                                <option key={meal.id} value={meal.id}>{meal.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Amount</label>
                        <input type="number" name="amount" value={donation.amount} onChange={handleChange} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Donate</button>
                </form>
            </center>
        </div>
    );
}

export default CustomerDonation;