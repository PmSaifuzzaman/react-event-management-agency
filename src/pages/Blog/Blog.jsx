import Navbar from "../Navbar/Navbar";
import image1 from "../../assets/wedding.jpg"
import image2 from "../../assets/anniversary.jpg"
import image3 from "../../assets/engagement.jpg"
import image4 from "../../assets/retirement.jpg"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';


const Blog = () => {
    useEffect(() => {
        AOS.init();
        
      }, []);
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto" data-aos="slide-left">
                <img src={image1} alt="" />
                <p>Planning a wedding is an exciting journey filled with joy, love, and anticipation. It is a day you have dreamed of since forever, and now that it is finally happening, it is time to make your dream wedding a reality. In 2023, wedding trends are all about sustainability, unique venues, personalization, and breaking away from tradition. Consider eco-conscious choices, explore unique wedding venues like vineyards or historic estates, and personalize your ceremony with meaningful touches. Embrace non-traditional attire, interactive entertainment, creative food and drink stations, and drone photography to add a touch of uniqueness to your special day. For guests who can not attend in person, create a digital guest experience with live streaming and virtual guestbooks. Think beyond traditional wedding favors by giving back to your community or donating to a charity. And to ensure all these trends come together seamlessly, consider hiring a professional wedding planner. As you embark on this exciting journey, remember that the most important thing is to cherish each moment and celebrate the love you share. Contact our event management team today to start planning your dream wedding in 2023. We are here to make your wedding day truly unforgettable.</p>
            </div>
            <br />
            <div className="max-w-3xl mx-auto">
                <img src={image2} alt="" />
                <p>Is your special day approaching? Celebrate your enduring love with a memorable anniversary event. Whether it is your first or fiftieth anniversary, our event management team is here to help you create an unforgettable experience. From intimate dinners at romantic venues to lavish parties with friends and family, we will work with you to design an event that reflects your unique journey. Discover creative themes, personalized decor, and expert planning tips to make your anniversary celebration a heartfelt and joyous occasion. Let us take care of the details so you can focus on cherishing your love story.

                </p>
            </div>
            <br />
            <div className="max-w-3xl mx-auto">
                <img src={image3} alt="" />
                <p>Congratulations on your engagement! The journey to forever begins with a joyful engagement party, and we are here to make it magical. Our event management team specializes in crafting engagement parties that capture your love story is essence. From elegant soirees to casual gatherings, we will help you choose the perfect theme, decor, and entertainment to set the stage for your future together. Explore engagement party trends, proposal stories, and expert planning advice. Let us handle the logistics while you savor the excitement of your upcoming union. Get ready to celebrate love, laughter, and happily ever after.

                </p>
            </div>
            <br />
            <div className="max-w-3xl mx-auto">
                <img src={image4} alt="" />
                <p>Retirement marks the end of one chapter and the beginning of another. It is a time to celebrate a lifetime of dedication and hard work. Our event management team specializes in crafting retirement celebrations that honor your achievements and set the stage for a fulfilling new chapter. Whether you are planning an intimate gathering with close colleagues or a grand retirement gala, we wll work with you to create a memorable event that reflects your unique career journey. Discover retirement party themes, decoration ideas, and tips for a heartfelt farewell. Leave the event planning to us, and embrace the well-deserved recognition and relaxation that retirement brings.

                </p>
            </div>
            <br />
        </div>
    );
};

export default Blog;