"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IdeaAnalyzer from "./components/IdeaAnalyzer";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  return (
    <div className="min-h-screen animated-bg">
      <Header />
      <main>
        <Hero onAnalyzeClick={() => setShowAnalyzer(true)} />
        {showAnalyzer && <IdeaAnalyzer />}
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
