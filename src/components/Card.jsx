import React from "react";

export default function Card({ image, title, description, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-20 h-20 mb-4 object-contain"
        />
      )}
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      )}
      {link && (
        <a
          href={link}
          className="px-4 py-2 bg-yellow-400 text-green-900 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
        >
          Learn More
        </a>
      )}
    </div>
  );
}
