"use client";

import { useState } from "react";
import ViralityMeter from "./ViralityMeter";
import TarpitSection from "./TarpitSection";
import UserPersonas from "./UserPersonas";
import MarketAnalysis from "./MarketAnalysis";

interface AnalysisResult {
  viralityScore: number;
  overallScore: number;
  strengths: string[];
  weaknesses: string[];
  tarpits: Array<{
    title: string;
    description: string;
    severity: "high" | "medium" | "low";
  }>;
  personas: Array<{
    name: string;
    age: string;
    occupation: string;
    painPoints: string[];
    goals: string[];
  }>;
  marketSize: string;
  competition: string;
  recommendations: string[];
}

export default function IdeaAnalyzer() {
  const [idea, setIdea] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyzeIdea = async () => {
    if (!idea.trim()) return;

    setIsAnalyzing(true);

    // Simulate API call with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Mock analysis result based on the idea
    const mockResult: AnalysisResult = {
      viralityScore: Math.floor(Math.random() * 40) + 60, // 60-100
      overallScore: Math.floor(Math.random() * 30) + 70, // 70-100
      strengths: [
        "Clear value proposition",
        "Large addressable market",
        "Low barrier to entry",
        "Strong network effects potential",
      ],
      weaknesses: [
        "High customer acquisition cost",
        "Regulatory challenges",
        "Strong incumbents",
        "Monetization complexity",
      ],
      tarpits: [
        {
          title: "The Feature Creep Trap",
          description:
            "Adding too many features without validating core value proposition",
          severity: "high",
        },
        {
          title: "Premature Scaling",
          description: "Scaling before achieving product-market fit",
          severity: "medium",
        },
        {
          title: "Ignoring Customer Feedback",
          description:
            "Building in isolation without continuous user validation",
          severity: "high",
        },
      ],
      personas: [
        {
          name: "Tech-Savvy Millennial",
          age: "25-35",
          occupation: "Software Developer",
          painPoints: [
            "Time management",
            "Information overload",
            "Work-life balance",
          ],
          goals: [
            "Increase productivity",
            "Learn new skills",
            "Build side projects",
          ],
        },
        {
          name: "Busy Professional",
          age: "30-45",
          occupation: "Marketing Manager",
          painPoints: [
            "Budget constraints",
            "Proving ROI",
            "Team coordination",
          ],
          goals: ["Drive growth", "Optimize campaigns", "Streamline processes"],
        },
      ],
      marketSize: "$12.5B TAM, $2.1B SAM",
      competition: "Moderate - 3 major players, fragmented market",
      recommendations: [
        "Start with MVP focused on core value proposition",
        "Validate with 10-20 early adopters before scaling",
        "Consider B2B2C model for faster growth",
        "Build strong moats through data network effects",
      ],
    };

    setResult(mockResult);
    setIsAnalyzing(false);
  };

  return (
    <section id="analyzer" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            AI-Powered Startup Analysis
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Describe your startup idea and get comprehensive analysis with
            actionable insights
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8 mb-8">
          <label
            htmlFor="idea"
            className="block text-lg font-semibold text-white mb-4"
          >
            Describe your startup idea:
          </label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g., A platform that connects remote workers with local coffee shops offering workspace packages..."
            className="w-full h-32 bg-black/50 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:border-[var(--neon-green)] focus:outline-none resize-none"
            disabled={isAnalyzing}
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-400">
              {idea.length}/500 characters
            </span>
            <button
              onClick={analyzeIdea}
              disabled={!idea.trim() || isAnalyzing}
              className="bg-[var(--neon-green)] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[var(--neon-blue)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed neon-glow"
            >
              {isAnalyzing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </div>
              ) : (
                "Analyze Idea"
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-8">
            {/* Overall Score */}
            <div className="bg-[var(--dark-card)] border border-gray-700 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Overall Analysis
                </h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[var(--neon-green)]">
                    {result.overallScore}/100
                  </div>
                  <div className="text-sm text-gray-400">Viability Score</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[var(--neon-green)] mb-3">
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {result.strengths.map((strength, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="text-[var(--neon-green)]">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[var(--neon-pink)] mb-3">
                    Areas of Concern
                  </h4>
                  <ul className="space-y-2">
                    {result.weaknesses.map((weakness, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="text-[var(--neon-pink)]">⚠</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Virality Meter */}
            <ViralityMeter score={result.viralityScore} />

            {/* Tarpit Section */}
            <TarpitSection tarpits={result.tarpits} />

            {/* User Personas */}
            <UserPersonas personas={result.personas} />

            {/* Market Analysis */}
            <MarketAnalysis
              marketSize={result.marketSize}
              competition={result.competition}
              recommendations={result.recommendations}
            />
          </div>
        )}
      </div>
    </section>
  );
}
