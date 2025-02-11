// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import swal from "sweetalert";
// import { IP_ADDRS } from "../../Service/Constant"

// function Admin() {
//     const [admin, setAdmin] = useState({
//         email: "",
//         id: "",
//         jwt: ""
//     });

//     const [loggedIn, setLoggedIn] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         let adm = JSON.parse(sessionStorage.getItem("admin"));
//         if (adm == null) {
//             swal("Not Authorized", "", "error");
//         }
//         else {
//             setLoggedIn(true);
//             setAdmin({
//                 id: adm.id,
//                 email: adm.email,
//                 jwt: adm.jwt
//             })
//         }
//     }, [])


//     return (
//         <>
//             {loggedIn ?
//                 (<>
//                     <div className="jumbotron" style={{ marginLeft: 20 }}>
//                         <h3 style={{ marginTop: 10 }}>Hello ,
//                         </h3>
//                         <h1 style={{ marginLeft: 30 }}>
//                             Admin
//                         </h1>
//                         <h5 style={{ marginLeft: 30 }}>
//                             {admin.email}
//                         </h5>
//                     </div>
//                     <hr className="my-4" />

//                     <div className="container" style={{ marginBottom: "50px", textAlign: "center" }}>
//                         <div className="row" >
//                             <div className="col-sm-6">
//                                 <div className="card" onClick={() => navigate("/getAllApprovedVendors")}>
                                    
//                                     <div className="card-body" >
//                                         <h5 className="card-title">Approved Vendors</h5>
//                                         <p className="card-text">List of All Vendors</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6">
//                                 <div className="card" onClick={() => navigate("/getAllCustomers")}>
//                                     <div className="card-body">
//                                         <h5 className="card-title">Get All Customers</h5>
//                                         <p className="card-text">List of All Customers</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="row my-3">
//                             <div className="col-sm-6">
//                                 <div className="card" onClick={() => navigate("/getUnapprovedVendors")}>
//                                     <div className="card-body">
//                                         <h5 className="card-title">Unapproved Vendors</h5>
//                                         <p className="card-text">List of all Unapproved Vendors</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-sm-6">
//                                 <div className="card" onClick={() => navigate("/getBlockedVendors")}>
//                                     <div className="card-body">
//                                         <h5 className="card-title">Blocked Vendors</h5>
//                                         <p className="card-text">List of Blocked Vendors</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
                    
//                     </div>
//                 </>)

//                 : <div style={{ textAlign: "center" }}><h1>Please Log in to Access this page</h1></div>}
//         </>
//     )

// }

// export default Admin;


import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { IP_ADDRS } from "../../Service/Constant";

function Admin() {
    const [admin, setAdmin] = useState({
        email: "",
        id: "",
        jwt: ""
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let adm = JSON.parse(sessionStorage.getItem("admin"));
        if (adm == null) {
            swal("Not Authorized", "", "error");
        } else {
            setLoggedIn(true);
            setAdmin({
                id: adm.id,
                email: adm.email,
                jwt: adm.jwt
            });
        }
    }, []);

    return (
        <>
            {loggedIn ? (
                <>
                    <div className="jumbotron text-center">
                        <h3 className="mt-3">Hello,</h3>
                        <h1>Admin</h1>
                        <h5>{admin.email}</h5>
                    </div>
                    <hr className="my-4" />
                    <div className="container mb-5">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/getAllApprovedVendors")}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/3712/3712170.png" className="card-img-top" alt="Approved Vendors" style={{ height: '300px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Approved Chefs</h5>
                                        <p className="card-text">List of All Chefs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/getAllCustomers")}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/7909/7909958.png" className="card-img-top" alt="Customers" style={{ height: '300px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Get All Customers</h5>
                                        <p className="card-text">List of All Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/getUnapprovedVendors")}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/10806/10806362.png" className="card-img-top" alt="Unapproved Vendors" style={{ height: '300px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Unapproved Chefs</h5>
                                        <p className="card-text">List of all Unapproved Chefs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/getBlockedVendors")}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/4712/4712929.png" className="card-img-top" alt="Blocked Vendors" style={{ height: '300px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Blocked Chefs</h5>
                                        <p className="card-text">List of Blocked Chefs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100" onClick={() => navigate("/getAllContactUsInquiries")}>
                                    <img src="https://i.ibb.co/vCVJ6LJV/DALL-E-2025-02-07-20-35-57-A-flat-design-illustration-featuring-a-contact-inquiry-concept-The-image.webp" className="card-img-top" alt="all inquiries" style={{ height: '300px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Contact Us Inquiries</h5>
                                        <p className="card-text">List of Contact Us Inquiries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h1>Please Log in to Access this page</h1>
                </div>
            )}
        </>
    );
}

export default Admin;
