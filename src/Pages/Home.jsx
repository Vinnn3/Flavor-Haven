import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-Page Hero Section */}
      <div className="relative w-full flex-grow h-screen">
        <img
          src="https://i.pinimg.com/564x/71/af/f7/71aff79279283b90562d7930ed154347.jpg" 
          alt="Culinary Inspiration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> 
        <div className="relative flex items-center justify-center h-full text-center text-white p-8">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Welcome to Flavour Haven
            </h1>
            <p className="text-lg max-w-4xl mx-auto">
              Discover a world of culinary inspiration with our extensive collection
              of recipes. Whether you're a seasoned chef or a home cook, we have
              something for everyone. Explore, create, and enjoy the art of cooking!
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <main className="bg-white py-16 flex-grow">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to Flavour Haven, your ultimate destination for culinary
            inspiration! At Flavour Haven, we believe that cooking should be a
            joyous and creative adventure, which is why we offer an extensive
            collection of recipes to suit every taste and skill level. Whether
            you're a seasoned chef looking to try something new or a home cook
            seeking quick and easy meal ideas, we’ve got you covered. Our diverse
            recipe collection spans a wide range of cuisines and dietary
            preferences, ensuring there's something delicious for everyone. Join our
            community of food enthusiasts and discover how simple and fun cooking
            can be with Flavour Haven.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Email: flavourheaven@gmail.com
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
            Phone Number: +254713277855
            </p>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 Flavour Haven. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
