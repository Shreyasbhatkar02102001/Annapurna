import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";

const ContactUsList = () => {
    const [contactList, setContactList] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(false);

    useEffect(() => {
        let admin = JSON.parse(sessionStorage.getItem("admin"));
        axios.get(`${IP_ADDRS}/contact-us/getAllContactUsInquiries`, { 
            headers: { "Authorization": `Bearer ${admin.jwt}` } 
        })
        .then(res => {
            console.log("Fetched Data:", res.data);  // Debugging
            setContactList(res.data);
        })
        .catch(err => {
            console.error("Error fetching contact messages:", err);
            swal("Something went wrong", "", "error");
        });
    }, [refreshFlag]);

    return (
        <div className="container my-4">
            <h3>All Contact Messages</h3>

            <table className="table table-bordered">
                <thead className="bg-dark text-light">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {contactList.map((c, index) => (
                        <tr key={index}>
                            <td>{c.id || "N/A"}</td>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.message}</td>
                            <td>{c.createdAt ? new Date(c.createdAt).toLocaleString() : "No Date Available"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactUsList;
