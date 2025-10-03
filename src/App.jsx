import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./routes/Landing";
import About from "./routes/About";
import Sponsors from "./routes/Sponsors";
import Pathways from "./routes/Pathways";
import Leaderboard from "./routes/Leaderboard";
import Blog from "./routes/Blog";
import Join from "./routes/Join";
import Tasks from "./routes/Tasks";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/pathways" element={<Pathways />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/join" element={<Join />} />
          <Route path="/tasks/:id" element={<Tasks />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
