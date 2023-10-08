import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ServiceCard = ({ service }) => {

    const { id, service_no, service_name, image, details, price } = service || {}
    // console.log(id)

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2>Service Code: {service_no}</h2>
                <hr className="w-32 py-2 font-bold" />
                <h2 className="card-title text-3xl text-red-400">{service_name}</h2>
                {
                    details.length > 100 ? <p>{details.slice(0,100)} <Link to={`/service/${id}`} className="text-red-400 font-bold underline">View More</Link></p>
                    :
                    <p>{details}</p>
                }
                <Link to={`/service/${id}`} className="btn my-3 bg-red-400">Price: ${price}</Link>
            </div>
            <figure className="h-56"><img src={image} alt="Shoes" /></figure>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object,
}