import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IP_ADDRS } from "../../Service/Constant";

function VendorViewDonationMealDetails() {
    const [donationMeals, setDonationMeals] = useState([]);

    useEffect(() => {
        axios.get(`${IP_ADDRS}/tiffins/donatable`)
            .then(response => setDonationMeals(response.data))
            .catch(error => console.error('Error fetching donation meals:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h2>Donation Meals</h2>
            <div className="row">
                {donationMeals.map(meal => (
                    <div key={meal.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={meal.imagePath} className="card-img-top" alt={meal.name} />
                            <div className="card-body">
                                <h5 className="card-title">{meal.name}</h5>
                                <p className="card-text">{meal.description}</p>
                                <p className="card-text">Price: ${meal.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VendorViewDonationMealDetails;