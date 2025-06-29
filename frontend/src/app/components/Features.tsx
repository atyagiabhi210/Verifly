export default function Features() {
  const features = [
    {
      icon: "🔥",
      title: "Virality Score",
      description:
        "AI-powered analysis that predicts how viral your startup idea could become based on shareability, network effects, and market dynamics.",
      color: "var(--neon-green)",
    },
    {
      icon: "⚠️",
      title: "Tarpit Detection",
      description:
        "Identify common mistakes and pitfalls that similar startups have fallen into, helping you avoid costly errors before they happen.",
      color: "var(--neon-pink)",
    },
    {
      icon: "👥",
      title: "User Personas",
      description:
        "Generate detailed customer profiles with pain points, goals, and motivations to help you build the right product for the right people.",
      color: "var(--neon-blue)",
    },
    {
      icon: "📊",
      title: "Market Analysis",
      description:
        "Comprehensive market size analysis, competition assessment, and strategic recommendations tailored to your specific idea.",
      color: "var(--neon-purple)",
    },
    {
      icon: "🤖",
      title: "AI Insights",
      description:
        "Advanced machine learning algorithms analyze thousands of successful and failed startups to provide data-driven insights.",
      color: "var(--neon-green)",
    },
    {
      icon: "🎯",
      title: "Action Plan",
      description:
        "Get a clear roadmap with prioritized next steps, validation strategies, and milestone recommendations for your startup journey.",
      color: "var(--neon-blue)",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Powerful Features for Startup Success
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to validate, refine, and launch your startup
            idea with confidence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div
                  className="text-4xl mb-4 inline-block p-4 rounded-full"
                  style={{
                    backgroundColor: `${feature.color}20`,
                    border: `2px solid ${feature.color}40`,
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--neon-green)]/10 to-[var(--neon-blue)]/10 border border-[var(--neon-green)]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to validate your startup idea?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who have used Verifly to turn
              their ideas into successful businesses.
            </p>
            <button className="bg-[var(--neon-green)] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[var(--neon-blue)] transition-colors neon-glow">
              Start Your Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
