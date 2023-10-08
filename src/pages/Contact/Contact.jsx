import Navbar from "../Navbar/Navbar";
import { FaCarAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center mt-10 ">
                <h2 className="text-7xl flex justify-center items-center pb-4"><FaCarAlt></FaCarAlt></h2>
                <h2 className="font-bold text-3xl">Visit Us</h2>
                <p>121 King Street, Melbourne Victoria 3000 Australia</p>
            </div>
        </div>
    );
};

export default Contact;