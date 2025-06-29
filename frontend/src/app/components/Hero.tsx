interface HeroProps {
  onAnalyzeClick: () => void;
}

export default function Hero({ onAnalyzeClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Validate your startup idea.</span>
            <br />
            <span className="text-white">Before you build it.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get instant AI-powered analysis of your startup idea with virality
            metrics, common pitfalls, user personas, and actionable insights to
            maximize your chances of success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={onAnalyzeClick}
              className="bg-[var(--neon-green)] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--neon-blue)] transition-all duration-300 neon-glow pulse-glow min-w-[200px]"
            >
              Analyze My Idea
            </button>
            <button className="border border-[var(--neon-blue)] text-[var(--neon-blue)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--neon-blue)] hover:text-black transition-all duration-300 min-w-[200px]">
              See Example Analysis
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              "🔥 Virality Score",
              "⚠️ Pitfall Detection",
              "👥 User Personas",
              "📊 Market Analysis",
              "💡 AI Insights",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--dark-card)] border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300 hover:border-[var(--neon-green)] transition-colors"
              >
                {feature}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--neon-green)] mb-2">
                10,000+
              </div>
              <div className="text-gray-400">Ideas Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--neon-blue)] mb-2">
                94%
              </div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--neon-purple)] mb-2">
                2.3x
              </div>
              <div className="text-gray-400">Success Improvement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--neon-green)] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[var(--neon-purple)] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>
    </section>
  );
}
