import React from "react";
import Card from "../components/Card"; // ✅ use reusable Card

export default function About() {
  const objectives = [
    {
      title: "PLANT LIFE & NEEDS",
      img: "/images/seedling.png",
      desc: "Understand plant life cycles, needs, and importance",
      bg: "bg-yellow-100",
    },
    {
      title: "CARE & STEWARDSHIP",
      img: "/images/girl-watering.png",
      desc: "Demonstrate responsibility in plant care & environmental stewardship",
      bg: "bg-pink-100",
    },
    {
      title: "CLIMATE AWARENESS",
      img: "/images/water.png",
      desc: "Recognize climate patterns and their impact on living things",
      bg: "bg-blue-100",
    },
    {
      title: "REDUCE REUSE RECYCLE",
      img: "/images/children.png",
      desc: "Apply reduce, reuse, recycle principles in daily life",
      bg: "bg-green-100",
    },
    {
      title: "THINKING SKILLS",
      img: "/images/boy-weeding.png",
      desc: "Develop observation, critical thinking, and problem-solving skills",
      bg: "bg-purple-100",
    },
    {
      title: "COMMUNITY & ACTION",
      img: "/images/bee-pollinator.png",
      desc: "Foster community engagement and environmental activism",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-leafscape-1 py-16 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center pt-24 mb-16">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg capitalize">
          About Leafscape
        </h1>
        <p className="text-white text-xl leading-relaxed px-6 max-w-3xl mx-auto">
          At Leafscape, we believe in nurturing young eco-champions through
          learning that is hands-on, fun, and deeply connected to nature.
        </p>
      </div>

      {/* Objectives */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {objectives.map((obj, idx) => (
          <div
            key={idx}
            className={`${obj.bg} p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition`}
          >
            <img
              src={obj.img}
              alt={obj.title}
              className="w-28 h-28 mx-auto mb-6 object-contain"
              onError={(e) => (e.target.src = "/images/leaf-fallback.png")}
            />
            <h2 className="text-2xl font-bold text-green-900 mb-3 text-center">
              {obj.title}
            </h2>
            <p className="text-lg text-gray-800 text-center">{obj.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <button className="px-10 py-4 bg-yellow-400 text-green-900 text-xl font-bold uppercase rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
