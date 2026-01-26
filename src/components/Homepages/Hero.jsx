import React from 'react';

const Hero = () => {
  return (
    <div 
      id="home" 
      className="relative w-full  overflow-hidden hidden md:block" // Hide on mobile, show on desktop
    >
      {/* Hero container with top: 0 and no extra spacing */}
      <div className="relative w-full h-screen flex items-center justify-center -mt-16 md:mt-0"> {/* Negative margin to remove header gap */}
        
        {/* Background image container - set to top edge */}
        <div className="absolute inset-0 w-full h-full top-0">
          {/* Image with proper responsive behavior */}
          <img 
            src="/src/assets/heroimg.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80";
            }}
          />
          
          {/* Overlay for better readability if needed */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Optional content container - empty as per your request */}
        <div className="relative z-10">
          {/* You can add content here if needed later */}
        </div>

      </div>
    </div>
  );
};

export default Hero;