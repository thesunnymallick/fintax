import React from "react";


const HeroSection = () => {
  return (
    <div className="bg-gray-100 min-h-[50vh] ">


      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-gray-800">Invoice</span>{" "}
          <span className="text-yellow-500">Lifecycle</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Transformed for business
        </p>
        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Our connected finance ecosystem is enabling new paths to efficiency
          and profitability while ensuring 100% compliance. Experience the most
          advanced automations that improve cash flow and working capital
          management in real time giving you the peace of mind you deserve.
        </p>
        <button className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-md text-lg hover:bg-yellow-600 transition">
          Request a Demo
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
