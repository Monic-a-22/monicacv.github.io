import React from "react"

export default function Skills() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Skills
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Core QA capabilities and systems-level expertise across product teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h2 className="font-display text-xl font-semibold tracking-tight text-white mb-4">
                Quality Systems & Process
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "SDLC",
                  "STLC",
                  "Test strategy",
                  "QA process",
                  "Quality gates",
                  "Release management",
                  "Governance",
                  "Ownership",
                  "Systems thinking",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-sm border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h2 className="font-display text-xl font-semibold tracking-tight text-white mb-4">
                Test Leadership & Execution
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Test planning",
                  "Risk-based testing",
                  "Test design",
                  "Regression strategy",
                  "Release readiness",
                  "Defect triage",
                  "Metrics & reporting",
                  "Cross-functional collaboration",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-sm border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
