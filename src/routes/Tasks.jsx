import React from "react";
import { useParams } from "react-router-dom";

// Pathways data (titles + images)
const pathways = [
  { title: "Eco-Identity & Belonging", icon: "/images/pathway1.png" },
  { title: "Nature Explorers", icon: "/images/pathway2.png" },
  { title: "Tree Companions", icon: "/images/pathway3.png" },
  { title: "Water Wisdom", icon: "/images/pathway4.png" },
  { title: "Waste Warriors", icon: "/images/pathway5.png" },
  { title: "Creative Conservation", icon: "/images/pathway6.png" },
  { title: "Climate Champions", icon: "/images/pathway7.png" },
  { title: "Young Gardeners", icon: "/images/pathway8.png" },
  { title: "Energy & Water Stewards", icon: "/images/pathway9.png" },
  { title: "Pollinator Protectors", icon: "/images/pathway10.png" },
  { title: "Eco-Innovators", icon: "/images/pathway11.png" },
  { title: "Impact Trackers", icon: "/images/pathway12.png" },
  { title: "Eco-Leaders in Action", icon: "/images/pathway13.png" },
  { title: "Biodiversity Ambassadors", icon: "/images/pathway14.png" },
  { title: "Green Communicators", icon: "/images/pathway15.png" },
  { title: "Community Builders", icon: "/images/pathway16.png" },
  { title: "Future Problem-Solvers", icon: "/images/pathway17.png" },
  { title: "Celebration & Legacy", icon: "/images/pathway18.png" },
];

function Tasks() {
  const { id } = useParams();
  const pathwayIndex = parseInt(id, 10) - 1;
  const pathway = pathways[pathwayIndex];

  if (!pathway) {
    return (
      <div className="p-8 bg-red-50 min-h-screen text-center">
        <h1 className="text-2xl font-bold text-red-700">Pathway Not Found</h1>
        <p>Please go back and select a valid pathway.</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-green-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src={pathway.icon}
          alt={pathway.title}
          className="w-24 h-24 object-contain"
          onError={(e) => (e.target.src = "/images/leaf-fallback.png")}
        />
        <h1 className="text-3xl font-bold text-green-700">{pathway.title}</h1>
      </div>

      {/* Placeholder content */}
      <p className="text-lg text-gray-700 mb-6">
        This section will hold detailed tasks and activities for the <strong>{pathway.title}</strong> pathway. 
        Here we will add challenges, step-by-step instructions, learning outcomes, and rewards.
      </p>

      {/* Example activity box */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-green-600 mb-2">Sample Activity</h2>
        <p className="text-gray-700">
          Activity details for this pathway will appear here. Teachers and students will be able to
          follow step-by-step guides and record progress.
        </p>
      </div>
    </div>
  );
}

export default Tasks;  // ✅ Fix
