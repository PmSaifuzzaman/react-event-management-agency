

const Rating = () => {
    return (
        <div className=" mt-10 max-w-5xl mx-auto flex justify-around p-24 bg-base-200 rounded-lg">
            <div className="text-center space-y-2">
                <h2 className="text-5xl font-extrabold">200+</h2>
                <p>WEDDING</p>
            </div>
            <div className="text-center space-y-2">
                <h2 className="text-5xl font-extrabold">150+</h2>
                <p>ANNIVERSARY</p>
            </div>
            <div className="text-center space-y-2">
                <h2 className="text-5xl font-extrabold">300+</h2>
                <p>PARTY</p>
            </div>
            <div className="text-center space-y-2">
                <h2 className="text-5xl font-extrabold">70+</h2>
                <p>ENGAGEMENT</p>
            </div>
            
        </div>
    );
};

export default Rating;