import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';

const Banner = () => {
    useEffect(() => {
        AOS.init();
        
      }, []);
    return (
        <div className="carousel w-full " data-aos="slide-left">
            {/* slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero h-[calc(100vh-100px)] " style={{ backgroundImage: `url(${banner1})` }}>
                    <div className="hero-content text-center">
                        <div className="hidden md:block text-black p-10 inset-0 bg-white opacity-60  rounded-xl">
                            <p className="text-3xl font-semibold">We will</p>
                            <h1 className="text-7xl font-bold text-red-600">Organize</h1>
                            <p className="text-3xl py-4 font-semibold">All of your Celebration</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero h-[calc(100vh-100px)]" style={{ backgroundImage: `url(${banner2})` }}>
                    <div className="hero-content text-center">
                        <div className="hidden md:block text-black p-10 inset-0 bg-white opacity-60  rounded-xl">
                            <p className="text-3xl font-semibold">We will</p>
                            <h1 className="text-7xl font-bold text-red-600">Organize</h1>
                            <p className="text-3xl py-4 font-semibold">All of your Celebration</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero h-[calc(100vh-100px)]" style={{ backgroundImage: `url(${banner3})` }}>
                    <div className="hero-content text-center">
                        <div className="hidden md:block text-black p-10 inset-0 bg-white opacity-60  rounded-xl">
                            <p className="text-3xl font-semibold">We will</p>
                            <h1 className="text-7xl font-bold text-red-600">Organize</h1>
                            <p className="text-3xl py-4 font-semibold">All of your Celebration</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero h-[calc(100vh-100px)]" style={{ backgroundImage: `url(${banner4})` }}>
                    <div className="hero-content text-center">
                        <div className="hidden md:block text-black p-10 inset-0 bg-white opacity-60  rounded-xl">
                            <p className="text-3xl font-semibold">We will</p>
                            <h1 className="text-7xl font-bold text-red-600">Organize</h1>
                            <p className="text-3xl py-4 font-semibold">All of your Celebration</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;