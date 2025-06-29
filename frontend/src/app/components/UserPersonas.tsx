interface Persona {
  name: string;
  age: string;
  occupation: string;
  painPoints: string[];
  goals: string[];
}

interface UserPersonasProps {
  personas: Persona[];
}

export default function UserPersonas({ personas }: UserPersonasProps) {
  const getPersonaAvatar = (index: number) => {
    const avatars = ["👩‍💻", "👨‍💼", "👩‍🔬", "👨‍🎨", "👩‍⚕️", "👨‍🏫"];
    return avatars[index % avatars.length];
  };

  return (
    <div className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          👥 Target User Personas
        </h3>
        <p className="text-gray-300">
          Detailed profiles of your potential customers
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {personas.map((persona, index) => (
          <div
            key={index}
            className="bg-black/30 border border-gray-600 rounded-lg p-6 hover:border-[var(--neon-blue)] transition-colors"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{getPersonaAvatar(index)}</div>
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {persona.name}
                </h4>
                <p className="text-gray-400">
                  {persona.age} • {persona.occupation}
                </p>
              </div>
            </div>

            {/* Pain Points */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-[var(--neon-pink)] mb-3 flex items-center gap-2">
                <span>😣</span>
                Pain Points
              </h5>
              <ul className="space-y-2">
                {persona.painPoints.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-[var(--neon-pink)] mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Goals */}
            <div>
              <h5 className="text-lg font-semibold text-[var(--neon-green)] mb-3 flex items-center gap-2">
                <span>🎯</span>
                Goals
              </h5>
              <ul className="space-y-2">
                {persona.goals.map((goal, goalIndex) => (
                  <li
                    key={goalIndex}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-[var(--neon-green)] mt-1">•</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Persona Insights */}
      <div className="mt-8 p-6 bg-gradient-to-r from-black/50 to-gray-900/50 rounded-lg border border-gray-600">
        <h5 className="text-lg font-semibold text-[var(--neon-blue)] mb-4 flex items-center gap-2">
          <span>🧠</span>
          Persona Insights
        </h5>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h6 className="font-medium text-white mb-2">Primary Motivations</h6>
            <p>
              Focus on productivity improvements and time-saving solutions for
              your core users.
            </p>
          </div>
          <div>
            <h6 className="font-medium text-white mb-2">
              Communication Channels
            </h6>
            <p>
              Reach these personas through LinkedIn, industry forums, and
              professional networks.
            </p>
          </div>
          <div>
            <h6 className="font-medium text-white mb-2">Value Proposition</h6>
            <p>
              Emphasize efficiency gains and professional growth opportunities.
            </p>
          </div>
          <div>
            <h6 className="font-medium text-white mb-2">Pricing Sensitivity</h6>
            <p>
              Both segments value ROI and are willing to pay for proven
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
