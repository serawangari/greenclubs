import React from "react";

export default function Leaderboard() {
  const clubs = [
    { name: "Club Kiboko", logo: "/images/hippo.png", color: "bg-green-100", stars: 5 },
    { name: "Club Mamba", logo: "/images/crocodile.png", color: "bg-yellow-100", stars: 4 },
    { name: "Club Twiga", logo: "/images/giraffe.png", color: "bg-orange-100", stars: 3 },
    { name: "Club Simba", logo: "/images/lion.png", color: "bg-red-100", stars: 2 },
  ];

  return (
    <div className="min-h-screen bg-leafscape-1 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h1 className="text-4xl font-bold text-yellow-400  mb-6 capitalize">
          Club Leaderboard
        </h1>
        <p className= "text-gray-100 mb-12 max-w-2xl mx-auto">
          Our Green Clubs compete in challenges and activities to earn stars.  
          Here’s how the leaderboard stands 🌟
        </p>

        {/* Leaderboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-lg p-6 ${club.color} hover:shadow-2xl transition transform hover:scale-105`}
            >
              <img
                src={club.logo}
                alt={club.name}
                className="w-20 h-20 mx-auto mb-4"
                onError={(e) => (e.target.src = "/images/leaf-fallback.png")}
              />
              <h2 className="text-xl font-bold text-green-800 mb-2">
                {club.name}
              </h2>
              <div className="flex justify-center space-x-1 mb-3">
                {Array.from({ length: club.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Inspiring eco-action and teamwork 🌍
              </p>
            </div>
          ))}
        </div>

        {/* Challenges Section */}
        <div className="mt-20 text-left">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            Challenges
          </h2>
          <div className="space-y-8">
            <div className="bg-white/80 rounded-lg shadow p-6">
              <h3 className="font-bold text-green-700 text-lg mb-2">
                🌱 Challenge 1: The Plant Detective Scavenger Hunt
              </h3>
              <p className="text-gray-700">
                Explore the schoolyard, spot unique plants, and race to identify them.  
                Builds observation skills while making it fun and competitive!
              </p>
            </div>
            <div className="bg-white/80 rounded-lg shadow p-6">
              <h3 className="font-bold text-green-700 text-lg mb-2">
                💧 Challenge 2: Water Drop Relay Race
              </h3>
              <p className="text-gray-700">
                Teams transfer water using spoons or sponges—without spilling!  
                Learn conservation through teamwork and fun.
              </p>
            </div>
            <div className="bg-white/80 rounded-lg shadow p-6">
              <h3 className="font-bold text-green-700 text-lg mb-2">
                ♻️ Challenge 3: The Great Waste Sorting Challenge
              </h3>
              <p className="text-gray-700">
                Race to sort recyclable items into the right bins.  
                Builds practical recycling skills in a fun way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
