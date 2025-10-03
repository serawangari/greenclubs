import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-start text-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        {/* Optional subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-green-900/10"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full px-6 pt-40 md:pt-56">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-6 capitalize">
            Explore Nature, Learn and Grow
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Welcome to Leafscape, where environmental education comes to life in fun and engaging ways. Our program inspires students to connect with the natural world and become young eco-champions.
          </p>
        </div>
      </section>

{/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-800 mb-6"
          >
            Why Leafscape?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Leafscape is more than an environmental club, it’s a movement.
            We bring together schools, students, and communities to learn, act,
            and celebrate sustainability. Each activity is designed to spark curiosity,
            build responsibility, and empower young people to become eco-leaders. 
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              img: "/images/boy-weeding.png",
              title: "Hands-on Learning",
              desc: "From planting seedlings in school gardens to tracking climate data with fun experiments, Leafscape turns environmental science into playful, practical learning. Students don’t just learn theory — they get their hands dirty and grow alongside nature.",
              bg: "bg-yellow-100",
            },
            {
              img: "/images/children.png",
              title: "18 Fun Pathways",
              desc: "Our 18 engaging pathways cover everything from biodiversity and pollinators to recycling, clean energy, and climate action. Each pathway offers exciting challenges, games, and storytelling designed to be fun while building lifelong green habits.",
              bg: "bg-pink-100",
            },
            {
              img: "/images/bee-pollinator.png",
              title: "Community Impact",
              desc: "Leafscape connects schools with local communities through tree-planting drives, recycling campaigns, and eco-innovation challenges. Together, kids become leaders who inspire their neighborhoods to join in the journey towards a greener world.",
              bg: "bg-purple-100",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              viewport={{ once: true }}
              className={`${feature.bg} p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform`}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="h-24 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-green-800 mb-4 text-center uppercase">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Leaderboard Teaser */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-leafscape-1 text-center"
      >
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          Eco-Leaderboard
        </h2>
        <p className="text-white text-lg mb-8">
          See which schools are leading the way in climate action and eco-innovation. 
          Points are earned for every activity, challenge, and project completed, 
          and top schools are celebrated as eco-champions!
        </p>
        <Link
          to="/leaderboard"
          className="px-8 py-3 bg-yellow-400 text-green-900 font-bold rounded-lg shadow hover:bg-yellow-500 transition"
        >
          View Leaderboard
        </Link>
      </motion.section>

      {/* Final Call-to-Action */}
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-green-700 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Eco-Journey?
        </h2>
        <p className="text-green-100 max-w-2xl mx-auto mb-8">
          Join hundreds of students and teachers already making their mark 
          through Leafscape pathways. Together, we can grow greener schools 
          and stronger communities — while having fun along the way!
        </p>
        <motion.div whileHover={{ rotate: -2, scale: 1.05 }}>
          <Link
            to="/join"
            className="px-8 py-3 bg-yellow-400 text-green-900 font-bold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Join Us Today
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
