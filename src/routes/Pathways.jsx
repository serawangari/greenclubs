import React from "react";
import { Link } from "react-router-dom";

export default function Pathways() {
  const pathways = [
    { title: "1 Eco-Identity & Belonging", image: "/images/pathway1.png" },
    { title: "2. Nature Explorers", image: "/images/pathway2.png" },
    { title: "3. Tree Companions", image: "/images/pathway3.png" },
    { title: "4. Water Wisdom", image: "/images/pathway4.png" },
    { title: "5. Creative Conservation", image: "/images/pathway5.png" },
    { title: "6. Climate Champions", image: "/images/pathway6.png" },
    { title: "7. Young Gardeners", image: "/images/pathway7.png" },
    { title: "8. Energy & Water Stewards", image: "/images/pathway8.png" },
    { title: "9. Pollinator Protectors", image: "/images/pathway9.png" },
    { title: "10. Impact Trackers", image: "/images/pathway10.png" },
    { title: "11. Eco-Leaders in Action", image: "/images/pathway11.png" },
    { title: "12. Biodiversity Ambassadors", image: "/images/pathway12.png" },
    { title: "13. Green Communicators", image: "/images/pathway13.png" },
    { title: "14. Future Problem-Solvers", image: "/images/pathway14.png" },
    { title: "15. Collaboration & Legacy", image: "/images/pathway15.png" },
    { title: "16. Community Builders", image: "/images/pathway16.png" },
    { title: "17. Planet Protectors", image: "/images/pathway17.png" },
    { title: "18. Innovation for Nature", image: "/images/pathway18.png" },
  ];

  return (
    <div className="min-h-screen bg-leafscape-2 py-20 px-6">
      {/* Page Header */}
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-16 drop-shadow-lg capitalize">
        18 Green Pathways Of Learning
      </h1>

      {/* Circle + Description Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        {/* Circle Layout */}
        <div className="relative w-[500px] h-[500px] mx-auto">
          {pathways.map((p, i) => (
            <Link
              key={i}
              to="/tasks"
              className="absolute flex flex-col items-center text-xs text-green-900 font-semibold hover:scale-110 hover:text-green-700 transition transform"
              style={{
                top: `${50 - 40 * Math.cos((2 * Math.PI * i) / pathways.length)}%`,
                left: `${50 + 40 * Math.sin((2 * Math.PI * i) / pathways.length)}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-16 h-16 mb-1 rounded-full shadow-lg border-2 border-green-400"
                onError={(e) => (e.target.src = "/images/leaf-fallback.png")}
              />
            </Link>
          ))}
        </div>

        {/* Description */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-green-900 mb-6 capitalize drop-shadow-md">
            Explore & Learn Through Fun, Action-Oriented Pathways
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            Leafscape’s 18 pathways are designed to be exciting adventures
            where kids become explorers, gardeners, innovators, and leaders. 
            Each pathway blends fun challenges with real-life action —
            from protecting pollinators to reducing waste and growing school gardens.
            It’s not just about learning, it’s about making a difference while having fun!
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-10 drop-shadow-md">
        FULL PATHWAY LIST
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pathways.map((p, idx) => (
          <Link
            key={idx}
            to="/tasks"
            className="flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, #${Math.floor(
                Math.random() * 16777215
              ).toString(16)}, #${Math.floor(
                Math.random() * 16777215
              ).toString(16)})`,
              color: "white",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-20 w-20 mb-4 rounded-full border-2 border-white shadow"
              onError={(e) => (e.target.src = "/images/leaf-fallback.png")}
            />
            <p className="font-bold text-lg text-center">{p.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
