import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden h-[50vh] mx-3 relative">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a
          href="#"
          className="text-yellow-500 hover:underline font-semibold absolute bottom-3"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default Card;
