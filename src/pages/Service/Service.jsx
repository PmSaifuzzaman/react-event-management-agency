
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ServiceCard from "../../components/ServiceCard/ServiceCard";


const Service = () => {

    const services = useLoaderData();
    
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-5xl font-bold mt-6">Our Services</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;