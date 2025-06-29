"use client";

import { useEffect, useState } from "react";

interface ViralityMeterProps {
  score: number;
}

export default function ViralityMeter({ score }: ViralityMeterProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 500);
    return () => clearTimeout(timer);
  }, [score]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "var(--neon-green)";
    if (score >= 60) return "var(--neon-blue)";
    if (score >= 40) return "var(--neon-purple)";
    return "var(--neon-pink)";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Highly Viral";
    if (score >= 60) return "Good Potential";
    if (score >= 40) return "Moderate Risk";
    return "Low Virality";
  };

  const circumference = 2 * Math.PI * 120;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (animatedScore / 100) * circumference;

  const viralFactors = [
    {
      name: "Shareability",
      score: 85,
      description: "How likely users are to share",
    },
    {
      name: "Network Effects",
      score: 72,
      description: "Value increases with more users",
    },
    {
      name: "Emotional Appeal",
      score: 68,
      description: "Triggers strong emotions",
    },
    {
      name: "Uniqueness",
      score: 91,
      description: "Stands out from competition",
    },
    {
      name: "Accessibility",
      score: 79,
      description: "Easy to understand and use",
    },
  ];

  return (
    <div className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        🔥 Virality Meter
      </h3>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Circular Progress */}
        <div className="relative">
          <svg width="280" height="280" className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke={getScoreColor(score)}
              strokeWidth="12"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-2000 ease-out"
              style={{
                filter: `drop-shadow(0 0 10px ${getScoreColor(score)})`,
              }}
            />
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className="text-5xl font-bold mb-2"
              style={{ color: getScoreColor(score) }}
            >
              {animatedScore}
            </div>
            <div className="text-lg text-gray-300">{getScoreLabel(score)}</div>
            <div className="text-sm text-gray-400 text-center mt-2">
              Viral Potential Score
            </div>
          </div>
        </div>

        {/* Viral Factors */}
        <div className="flex-1 space-y-4">
          <h4 className="text-xl font-semibold text-white mb-4">
            Viral Factors Analysis
          </h4>
          {viralFactors.map((factor, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{factor.name}</span>
                <span className="text-[var(--neon-green)] font-bold">
                  {factor.score}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${factor.score}%`,
                    background: `linear-gradient(90deg, ${getScoreColor(
                      factor.score
                    )}, ${getScoreColor(factor.score)}aa)`,
                    boxShadow: `0 0 10px ${getScoreColor(factor.score)}33`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-400">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="mt-8 p-4 bg-black/30 rounded-lg border border-gray-600">
        <h5 className="text-lg font-semibold text-[var(--neon-blue)] mb-2">
          💡 Virality Insights
        </h5>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>
            • Your idea shows strong uniqueness - leverage this in your
            marketing
          </li>
          <li>• High shareability indicates good word-of-mouth potential</li>
          <li>
            • Consider building stronger network effects to increase stickiness
          </li>
          <li>• Focus on emotional triggers to boost viral coefficient</li>
        </ul>
      </div>
    </div>
  );
}
