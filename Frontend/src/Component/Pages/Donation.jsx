import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { IP_ADDRS } from "../../Service/Constant";

function Donation() {
    const [meals, setMeals] = useState([]);
    const [ngos, setNgos] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState('');
    const [selectedNgo, setSelectedNgo] = useState('');
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch meals available for donation
        axios.get(`${IP_ADDRS}/tiffins/donatable`)
            .then(response => setMeals(response.data))
            .catch(error => console.error('Error fetching meals:', error));

        // Fetch NGOs
        axios.get(`${IP_ADDRS}/ngos`)
            .then(response => setNgos(response.data))
            .catch(error => console.error('Error fetching NGOs:', error));
    }, []);

    const handleDonate = () => {
        const donor = JSON.parse(sessionStorage.getItem("customer"));
        if (!donor) {
            swal("Not Authorized", "Please log in to make a donation.", "error");
            return;
        }

        const donationData = {
            donorId: donor.id,
            tiffinId: selectedMeal,
            ngoId: selectedNgo,
            amount: amount
        };

        axios.post(`${IP_ADDRS}/donations/donate`, donationData)
            .then(response => {
                swal("Donation Successful", "Thank you for your donation!", "success");
                navigate('/customer');
            })
            .catch(error => {
                swal("Donation Failed", "Please try again.", "error");
                console.error('Error making donation:', error);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Make a Donation</h2>
            <div className="form-group">
                <label>Select Meal</label>
                <select className="form-control" value={selectedMeal} onChange={(e) => setSelectedMeal(e.target.value)}>
                    <option value="">Select a meal</option>
                    {meals.map(meal => (
                        <option key={meal.id} value={meal.id}>{meal.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Select NGO</label>
                <select className="form-control" value={selectedNgo} onChange={(e) => setSelectedNgo(e.target.value)}>
                    <option value="">Select an NGO</option>
                    {ngos.map(ngo => (
                        <option key={ngo.id} value={ngo.id}>{ngo.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-3" onClick={handleDonate}>Donate</button>
        </div>
    );
}

export default Donation;