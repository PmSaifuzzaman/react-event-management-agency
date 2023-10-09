import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/Rating/Rating";
import Pricing from "../../components/Pricing/Pricing";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {

    const services = useLoaderData();

    useEffect(() => {
        AOS.init();

    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h1 className="text-center text-5xl font-bold mt-6">Our Services</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-down-right">
                {
                    services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <Rating></Rating>
            <Pricing></Pricing>
            <Footer></Footer>
        </div>
    );
};

export default Home;