import React from "react";
import Slider from "react-slick";

// Update image paths to be relative to the public folder
const profileLinks = {
  Leetcode: "https://i.postimg.cc/sX2RtSSb/LCprofile.png",
  CodeChef: "https://i.postimg.cc/T3rGmTfN/codechef-Profile.png",
  CodeForces: "https://i.postimg.cc/W48vWSDM/codeforces-Profile.png",
};

const Profiles = () => {
  // Slick Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Shows one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Autoplay interval
    arrows: false, // Disable navigation arrows for a cleaner look
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller devices
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-white px-4 sm:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Profiles
      </h1>
      <Slider {...settings}>
        {Object.entries(profileLinks).map(([platform, image], index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-transparent flex items-center justify-center rounded-xl shadow-lg overflow-hidden">
              <img
                src={image}
                alt={platform}
                className="w-full h-full object-cover" // Ensures the image covers the container
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Profiles;
