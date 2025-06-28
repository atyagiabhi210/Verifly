interface Tarpit {
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
}

interface TarpitSectionProps {
  tarpits: Tarpit[];
}

export default function TarpitSection({ tarpits }: TarpitSectionProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "var(--neon-pink)";
      case "medium":
        return "var(--neon-purple)";
      case "low":
        return "var(--neon-blue)";
      default:
        return "var(--neon-blue)";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return "🚨";
      case "medium":
        return "⚠️";
      case "low":
        return "⚡";
      default:
        return "⚡";
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case "high":
        return "Critical Risk";
      case "medium":
        return "Moderate Risk";
      case "low":
        return "Low Risk";
      default:
        return "Low Risk";
    }
  };

  return (
    <div className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          🕳️ Startup Tarpits
        </h3>
        <p className="text-gray-300">
          Common mistakes and pitfalls to avoid based on similar ideas
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tarpits.map((tarpit, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gray-600 rounded-lg p-6 hover:border-gray-500 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">
                {getSeverityIcon(tarpit.severity)}
              </span>
              <span
                className="text-xs px-2 py-1 rounded-full font-medium"
                style={{
                  color: getSeverityColor(tarpit.severity),
                  backgroundColor: `${getSeverityColor(tarpit.severity)}20`,
                  border: `1px solid ${getSeverityColor(tarpit.severity)}40`,
                }}
              >
                {getSeverityLabel(tarpit.severity)}
              </span>
            </div>

            <h4 className="text-lg font-semibold text-white mb-3">
              {tarpit.title}
            </h4>

            <p className="text-gray-300 text-sm leading-relaxed">
              {tarpit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Prevention Tips */}
      <div className="mt-8 p-6 bg-gradient-to-r from-black/50 to-gray-900/50 rounded-lg border border-gray-600">
        <h5 className="text-lg font-semibold text-[var(--neon-green)] mb-4 flex items-center gap-2">
          <span>🛡️</span>
          How to Avoid These Tarpits
        </h5>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h6 className="font-medium text-white mb-2">Validation First</h6>
            <p>
              Always validate your assumptions with real users before building
              complex features.
            </p>
          </div>
          <div>
            <h6 className="font-medium text-white mb-2">
              Incremental Development
            </h6>
            <p>Build in small iterations and gather feedback continuously.</p>
          </div>
          <div>
            <h6 className="font-medium text-white mb-2">
              Customer-Centric Focus
            </h6>
            <p>
              Keep your target customer's needs at the center of every decision.
            </p>
          </div>
          <div>
            <h6 className="font-medium text-white mb-2">Lean Operations</h6>
            <p>
              Maintain lean operations until you achieve product-market fit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
