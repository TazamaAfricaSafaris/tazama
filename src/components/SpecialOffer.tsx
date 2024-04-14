import { useState, useEffect, useRef } from 'react';

const SpecialOfferPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageUrls = [
        'https://wetu.com/ImageHandler/c380x246/22404/Shira_1.jpg',
        'https://wetu.com/ImageHandler/c992x248/14245/banner_shutterstock_2242617881.jpg',
        'https://wetu.com/ImageHandler/c380x246/44123/asg_9218.jpg',
        'https://wetu.com/ImageHandler/c992x248/100484/eastern_serengeti-shutterstock-328031243_b.jpg'
    ];

    const imageRef = useRef(null);

    useEffect(() => {
        const lastInteractionTime = localStorage.getItem('lastInteractionTime');
        const currentTime = new Date().getTime();

        if (lastInteractionTime && currentTime - parseInt(lastInteractionTime) < 5 * 60 * 1000) {
            return;
        }

        const timeout = setTimeout(() => {
            setShowPopup(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [imageUrls.length]);

    const handleClose = () => {
        localStorage.setItem('lastInteractionTime', String(new Date().getTime()));
        setShowPopup(false);
    };

    if (!showPopup) {
        return null;
    }

    const tripStartDate = new Date(2024, 4, 24).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const tripEndDate = new Date(2024, 5, 5).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Array of keywords corresponding to each image
    const keywordsArray = ['Mount Kilimanjaro', 'Tarangire National Park', 'Ngorongoro Crater', 'Eastern Serengeti'];

    // Get the current keywords based on the current image index
    const currentKeywords = keywordsArray[currentImageIndex];

    return (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden w-[300px] z-20">
            <img
                ref={imageRef}
                loading="lazy"
                src={imageUrls[currentImageIndex]}
                alt="Explore Tanzania Safari"
                className="w-full h-40 object-cover rounded-t-lg image-transition" // Add the image-transition class
            />
            <div className="p-4">
                <div className="text-md font-semibold text-primary mb-2 font-now">
                    Exclusive Safari Adventure: <br />7 Days Lemosho & 5 Days Migration Safari
                </div>
                <p className="mb-2 font-now text-[#757371] text-sm">
                    Embark on an extraordinary journey exploring the captivating landscapes of Arusha,
                    <span className="text-primary text-semibold font-now"> {currentKeywords}</span>,
                    as part of this immersive 12-night adventure in Tanzania.
                </p>
                <p className="text-sm text-gray-500 mb-2">Trip Duration: {tripStartDate} - {tripEndDate}</p>
                <div className="flex justify-center mb-2">
                    <a
                        href="https://wetu.com/Itinerary/Landing/a0618581-0fdc-4ea1-abd7-94d3e6964294"
                        className="text-primary hover:underline transition duration-300 font-now text-sm"
                    >
                        View Detailed Itinerary
                    </a>
                </div>
                <button
                    onClick={handleClose}
                    className="mt-4 p-2 bg-primary text-white rounded-md w-full focus:outline-none transition duration-300 font-now"
                >
                    Close Offer
                </button>
            </div>
        </div>
    );
};

export default SpecialOfferPopup;