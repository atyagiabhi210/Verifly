interface MarketAnalysisProps {
  marketSize: string;
  competition: string;
  recommendations: string[];
}

export default function MarketAnalysis({
  marketSize,
  competition,
  recommendations,
}: MarketAnalysisProps) {
  return (
    <div className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          📊 Market Analysis
        </h3>
        <p className="text-gray-300">
          Market opportunity and strategic recommendations
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Market Overview */}
        <div className="space-y-6">
          <div className="bg-black/30 border border-gray-600 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-[var(--neon-green)] mb-4 flex items-center gap-2">
              <span>💰</span>
              Market Size
            </h4>
            <div className="text-2xl font-bold text-white mb-2">
              {marketSize}
            </div>
            <p className="text-gray-400 text-sm">
              Total Addressable Market (TAM) and Serviceable Addressable Market
              (SAM)
            </p>
          </div>

          <div className="bg-black/30 border border-gray-600 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-[var(--neon-blue)] mb-4 flex items-center gap-2">
              <span>⚔️</span>
              Competition Level
            </h4>
            <div className="text-xl font-semibold text-white mb-2">
              {competition}
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p>• Opportunity for differentiation exists</p>
              <p>• Market validation through existing players</p>
              <p>• Room for innovative approaches</p>
            </div>
          </div>

          {/* Market Trends */}
          <div className="bg-black/30 border border-gray-600 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-[var(--neon-purple)] mb-4 flex items-center gap-2">
              <span>📈</span>
              Market Trends
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white">Digital Transformation</span>
                <span className="text-[var(--neon-green)] font-bold">
                  ↗ +23%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">Remote Work Solutions</span>
                <span className="text-[var(--neon-green)] font-bold">
                  ↗ +18%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white">AI Integration</span>
                <span className="text-[var(--neon-green)] font-bold">
                  ↗ +31%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <div className="bg-black/30 border border-gray-600 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-[var(--neon-green)] mb-4 flex items-center gap-2">
              <span>💡</span>
              Strategic Recommendations
            </h4>
            <div className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-black/50 rounded-lg border border-gray-700"
                >
                  <div className="bg-[var(--neon-green)] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {recommendation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Items */}
          <div className="mt-6 bg-gradient-to-r from-[var(--neon-green)]/10 to-[var(--neon-blue)]/10 border border-[var(--neon-green)]/30 rounded-lg p-6">
            <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>🚀</span>
              Next Steps
            </h5>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">□</span>
                Validate core assumptions with 10+ potential users
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">□</span>
                Build and test MVP with limited feature set
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">□</span>
                Analyze competitor pricing and positioning
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">□</span>
                Develop go-to-market strategy and timeline
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
