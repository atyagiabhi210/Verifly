"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      company: "TechFlow Solutions",
      image: "👩‍💻",
      quote:
        "Verifly saved me 6 months of development time. The virality analysis showed me my idea had potential, but the tarpit detection revealed critical flaws I hadn't considered. Now we're profitable with 50K+ users!",
      metrics: "50K+ Users • $2M ARR",
    },
    {
      name: "Marcus Rodriguez",
      role: "Serial Entrepreneur",
      company: "InnovateLab",
      image: "👨‍💼",
      quote:
        "I've launched 3 startups before, but Verifly's user persona insights were a game-changer. Understanding our target customers this deeply helped us achieve product-market fit in just 4 months.",
      metrics: "3rd Successful Exit • 4-Month PMF",
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "DataCorp",
      image: "👩‍🔬",
      quote:
        "The market analysis feature is incredibly accurate. Verifly predicted our TAM within 5% of what we discovered after 6 months of research. It's like having a crystal ball for startups.",
      metrics: "95% Accuracy • 6-Month Validation",
    },
    {
      name: "David Kim",
      role: "Tech Founder",
      company: "AI Ventures",
      image: "👨‍🎨",
      quote:
        "Verifly's AI insights helped us pivot early and avoid the 'feature creep' trap. We went from idea to Series A in 18 months. This platform is essential for any serious entrepreneur.",
      metrics: "Series A • 18 Months",
    },
    {
      name: "Rachel Thompson",
      role: "Startup Advisor",
      company: "Venture Partners",
      image: "👩‍⚕️",
      quote:
        "I recommend Verifly to every entrepreneur I mentor. The comprehensive analysis gives founders the confidence to move forward or the wisdom to pivot. It's transformed how I approach startup validation.",
      metrics: "50+ Startups Advised • 80% Success Rate",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Loved by Founders Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of entrepreneurs who have transformed their ideas
            into successful businesses
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon-green)] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

            {/* Quote Icon */}
            <div className="text-[var(--neon-green)] text-6xl font-serif absolute top-4 left-4 opacity-20">
              &ldquo;
            </div>

            <div className="relative z-10">
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 pl-8">
                {testimonials[currentTestimonial].quote}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-[var(--neon-green)] font-medium">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="hidden md:block text-right">
                  <div className="text-[var(--neon-blue)] font-semibold">
                    {testimonials[currentTestimonial].metrics}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[var(--neon-green)] text-white hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-[var(--neon-green)] text-white hover:text-black p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-[var(--neon-green)] scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--neon-green)] mb-2">
              15,000+
            </div>
            <div className="text-gray-400 text-sm">Ideas Validated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--neon-blue)] mb-2">
              89%
            </div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--neon-purple)] mb-2">
              $2.1B+
            </div>
            <div className="text-gray-400 text-sm">Raised by Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--neon-pink)] mb-2">
              3.2x
            </div>
            <div className="text-gray-400 text-sm">Faster Launch</div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Featured in:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-500">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-500">Forbes</div>
            <div className="text-2xl font-bold text-gray-500">Wired</div>
            <div className="text-2xl font-bold text-gray-500">VentureBeat</div>
            <div className="text-2xl font-bold text-gray-500">ProductHunt</div>
          </div>
        </div>
      </div>
    </section>
  );
}
