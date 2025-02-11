import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { IP_ADDRS } from "../../Service/Constant";

function VendorDonationMealForm() {
    const { vendorId } = useParams();
    const [ngos, setNgos] = useState([
        { id: 1, name: 'Meal for All Foundation' },
        { id: 2, name: 'Food Relief India' },
        { id: 3, name: 'Annapurna Meals Foundation' },
        { id: 4, name: 'Midday Meal Trust' },
        { id: 5, name: 'Meals for All NGO' },
        { id: 6, name: 'Fight Hunger Foundation' },
        { id: 7, name: 'Hunger Support Mission' },
        { id: 8, name: 'Food 4 Life Foundation' },
        { id: 9, name: 'Hungry Indians Foundation' },
        { id: 10, name: 'Meal Project India' }
    ]);
    const [donationMeal, setDonationMeal] = useState({
        name: '',
        description: '',
        price: 0,
        imageFile: null, // Store the image file
        ngoId: ''
    });

    useEffect(() => {
        // In a real scenario, you would fetch data using axios:
        // axios.get(`${IP_ADDRS}/api/ngos`)
        //     .then(res => setNgos(res.data))
        //     .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDonationMeal({ ...donationMeal, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setDonationMeal({ ...donationMeal, imageFile: file });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append('name', donationMeal.name);
    //     formData.append('description', donationMeal.description);
    //     formData.append('price', donationMeal.price);
    //     formData.append('ngoId', donationMeal.ngoId);
    //     formData.append('vendorId', vendorId);
    //     formData.append('imageFile', donationMeal.imageFile); // Append the image file

    //     try {
    //         const response = await axios.post(`${IP_ADDRS}/add-donation-meal`, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data', // Required for file upload
    //             },
    //         });
    //         swal("Meal Added for Donation", "", "success");
    //         setDonationMeal({
    //             name: '',
    //             description: '',
    //             price: 0,
    //             imageFile: null,
    //             ngoId: ''
    //         });
    //     } catch (err) {
    //         console.log(err);
    //         swal("Error", "Failed to add donation meal", "error");
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Retrieve the JWT token from sessionStorage or localStorage
        const token = sessionStorage.getItem("token"); // or localStorage.getItem("token")
    
        if (!token) {
            swal("Error", "You are not logged in. Please log in to add a donation meal.", "error");
            return;
        }
    
        const formData = new FormData();
        formData.append('name', donationMeal.name);
        formData.append('description', donationMeal.description);
        formData.append('price', donationMeal.price);
        formData.append('ngoId', donationMeal.ngoId);
        formData.append('vendorId', vendorId);
        formData.append('imageFile', donationMeal.imageFile); // Append the image file
    
        try {
            const response = await axios.post(`${IP_ADDRS}/add-donation-meal`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Required for file upload
                    'Authorization': `Bearer ${token}`, // Include the JWT token
                },
            });
            swal("Meal Added for Donation", "", "success");
            setDonationMeal({
                name: '',
                description: '',
                price: 0,
                imageFile: null,
                ngoId: ''
            });
        } catch (err) {
            console.log(err);
            swal("Error", "Failed to add donation meal", "error");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h5 style={styles.title}>Add Donation Meal</h5>
            </div>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Meal Name</label>
                    <input
                        type="text"
                        name="name"
                        value={donationMeal.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Description</label>
                    <textarea
                        name="description"
                        value={donationMeal.description}
                        onChange={handleChange}
                        style={{ ...styles.input, height: '100px' }}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={donationMeal.price}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Meal Image</label>
                    <input
                        type="file"
                        name="imageFile"
                        onChange={handleImageChange}
                        style={styles.input}
                        accept="image/*"
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Select NGO</label>
                    <select
                        name="ngoId"
                        value={donationMeal.ngoId}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    >
                        <option value="">Select NGO</option>
                        {ngos.map(ngo => (
                            <option key={ngo.id} value={ngo.id}>{ngo.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" style={styles.button}>Add Meal</button>
            </form>
        </div>
    );
}

export default VendorDonationMealForm;

// Inline CSS styles
const styles = {
    container: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    title: {
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '16px',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};
