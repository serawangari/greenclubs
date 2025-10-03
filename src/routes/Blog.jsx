import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "🌱 Growing Green Champions",
      image: "/images/blog1.png",
      content: `Schools are becoming hubs of sustainability where learners explore
      eco-friendly practices and environmental responsibility. From planting
      trees to reducing waste, these champions of tomorrow are gaining
      skills that matter for a greener planet.`,
    },
    {
      title: "💧 Water Is Life – Conservation in Action",
      image: "/images/blog2.png",
      content: `Through fun water-saving activities, children are learning how
      every drop counts. Relay games and awareness projects are showing
      schools how to conserve resources while making learning exciting
      and hands-on.`,
    },
    {
      title: "♻️ Waste to Wealth – Recycling Journeys",
      image: "/images/blog3.png",
      content: `Students are turning waste into creative projects, showing how
      recycling can spark innovation. From sorting challenges to
      eco-art competitions, learners are gaining lifelong habits for
      reducing waste and caring for the environment.`,
    },
  ];

  return (
    <div className="p-12 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Blog & News
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-700 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
