import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ServiceDetails = () => {

    const[service, setService] = useState([]);
    
    const{id} = useParams();


    const services = useLoaderData();
    console.log(services)

    useEffect(() => {
        const findService = services?.find(service => service.id === id);
        setService(findService)
    },[id, services])

    const handlePurchase = () => {
        toast("Purchased successfully")
    }
    
    return (
        <div>
            <Navbar></Navbar>

            <div className="card bg-base-100 shadow-xl">
                <figure><img src= {service.image} alt="photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {service.service_name}
                        <div className="badge bg-red-400 text-white">PREMIUM</div>
                    </h2>
                    <p>{service.details}</p>
                    <p className="text-xl font-medium">Price: $ {service.price}</p>
                    <div className="card-actions">
                        <button onClick={handlePurchase}  className="btn bg-red-400 w-full text-white">Purchase</button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;