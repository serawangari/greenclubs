import React from "react";

export default function Sponsors() {
  const sponsors = [
    { name: "Britam", img: "/images/britam.png" },
    { name: "CIC", img: "/images/cic.png" },
    { name: "Capital A", img: "/images/capitala.png" },
    { name: "Leafscape", img: "/images/leafscape.png" },
  ];

  return (
    <div className="min-h-screen bg-leafscape-1 bg-opacity-90 py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-10 capitalize tracking-wide">
          Partners & Sponsors
        </h1>
        <p className="text-white mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          We are grateful to our amazing sponsors who support Leafscape’s
          mission. Together, we nurture eco-champions and build sustainable
          green communities.
        </p>

        {/* CTA */}
        <button className="mb-16 px-10 py-4 bg-yellow-400 text-green-900 font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-500 transition">
          Become a Sponsor
        </button>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
          {sponsors.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={s.img}
                alt={s.name}
                className="h-24 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
