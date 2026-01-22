import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  TestTube,
  GitBranch,
  Settings,
  CheckCircle2,
  Zap,
  Shield,
  Layers,
  Box,
  Cpu
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('automation');

  const skillCategories = {
    automation: {
      icon: Code2,
      title: "Test Automation",
      color: "violet",
      skills: [
        { name: "Playwright", level: 95, desc: "Primary framework for E2E and UI automation" },
        { name: "Cypress", level: 90, desc: "JavaScript-based E2E testing" },
        { name: "Pytest", level: 90, desc: "Python test framework for API and backend" },
        { name: "Selenium", level: 85, desc: "Cross-browser web automation" },
        { name: "TestNG", level: 80, desc: "Java testing framework" },
        { name: "Cucumber", level: 75, desc: "BDD framework for readable tests" }
      ]
    },
    languages: {
      icon: Cpu,
      title: "Languages",
      color: "amber",
      skills: [
        { name: "Python", level: 92, desc: "Primary automation and scripting language" },
        { name: "JavaScript", level: 88, desc: "Frontend and Node.js testing" },
        { name: "TypeScript", level: 85, desc: "Type-safe JavaScript development" },
        { name: "SQL", level: 80, desc: "Database queries and validation" }
      ]
    },
    testing: {
      icon: TestTube,
      title: "Testing Types",
      color: "emerald",
      skills: [
        { name: "UI/E2E Testing", level: 95, desc: "Full user journey validation" },
        { name: "API Testing", level: 92, desc: "REST/GraphQL endpoint testing" },
        { name: "Integration Testing", level: 90, desc: "Service interaction validation" },
        { name: "SDK Testing", level: 85, desc: "Developer experience validation" },
        { name: "Performance Testing", level: 75, desc: "Load and stress testing" },
        { name: "Security Testing", level: 70, desc: "Vulnerability and penetration basics" }
      ]
    },
    cicd: {
      icon: GitBranch,
      title: "CI/CD & DevOps",
      color: "blue",
      skills: [
        { name: "GitHub Actions", level: 90, desc: "Primary CI/CD platform" },
        { name: "Jenkins", level: 80, desc: "Enterprise CI/CD pipelines" },
        { name: "Docker", level: 85, desc: "Containerized test environments" },
        { name: "Kubernetes", level: 75, desc: "Container orchestration" }
      ]
    },
    process: {
      icon: Settings,
      title: "Process & Strategy",
      color: "rose",
      skills: [
        { name: "Test Strategy Design", level: 95, desc: "Quality roadmap and planning" },
        { name: "SDLC/STLC", level: 90, desc: "Lifecycle planning and quality integration" },
        { name: "QA Process & Governance", level: 88, desc: "Standards, compliance, and operating models" },
        { name: "Quality Gates", level: 92, desc: "Release readiness criteria" },
        { name: "Risk-based Testing", level: 90, desc: "Priority-driven test selection" },
        { name: "Shift-left Testing", level: 90, desc: "Early quality integration" },
        { name: "Release Management", level: 85, desc: "Version control and deployment" },
        { name: "Quality Systems Ownership", level: 92, desc: "End-to-end quality accountability" },
        { name: "RTM/Coverage", level: 88, desc: "Requirements traceability" }
      ]
    },
    tools: {
      icon: Box,
      title: "Tools & Platforms",
      color: "orange",
      skills: [
        { name: "Jira", level: 95, desc: "Project and bug tracking" },
        { name: "Git/GitHub", level: 92, desc: "Version control" },
        { name: "Xray", level: 88, desc: "Test management" },
        { name: "Zephyr", level: 85, desc: "Test case management" },
        { name: "Postman", level: 90, desc: "API development and testing" },
        { name: "PostgreSQL/MySQL", level: 80, desc: "Database management" }
      ]
    }
  };

  const colorClasses = {
    violet: { bg: 'bg-violet-500', light: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/30' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
    emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    blue: { bg: 'bg-blue-500', light: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
    rose: { bg: 'bg-rose-500', light: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/30' },
    orange: { bg: 'bg-orange-500', light: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' }
  };

  const expertise = [
    { icon: Zap, title: "Framework Design", desc: "Building scalable automation architectures from scratch" },
    { icon: Shield, title: "Quality Ownership", desc: "End-to-end release confidence and quality accountability" },
    { icon: Layers, title: "Full Stack Testing", desc: "UI to API to backend to infrastructure validation" },
    { icon: CheckCircle2, title: "Team Leadership", desc: "Mentoring engineers and building quality culture" }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Technical <span className="text-violet-400">Arsenal</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit built over 7+ years of quality engineering 
              across SaaS, ML platforms, and consumer products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Tabs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-16">
              {Object.entries(skillCategories).map(([key, category]) => {
                const colors = colorClasses[category.color];
                return (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                      data-[state=inactive]:bg-slate-900 data-[state=inactive]:text-slate-400 data-[state=inactive]:border-slate-800
                      data-[state=active]:${colors.light} data-[state=active]:${colors.text} data-[state=active]:${colors.border}
                      border hover:border-slate-700`}
                  >
                    <category.icon className="w-4 h-4 mr-2 inline" />
                    {category.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(skillCategories).map(([key, category]) => {
              const colors = colorClasses[category.color];
              return (
                <TabsContent key={key} value={key}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-white font-semibold">{skill.name}</h4>
                              <p className="text-slate-500 text-sm mt-1">{skill.desc}</p>
                            </div>
                            <span className={`text-lg font-bold ${colors.text}`}>{skill.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Tech Stack Visual */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Primary Tech Stack
            </h2>
            <p className="text-slate-400">The tools I use most frequently to build quality systems</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Playwright', bg: 'bg-green-500/20 border-green-500/30 text-green-400' },
              { name: 'Cypress', bg: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' },
              { name: 'Pytest', bg: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
              { name: 'Python', bg: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' },
              { name: 'TypeScript', bg: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
              { name: 'GitHub Actions', bg: 'bg-purple-500/20 border-purple-500/30 text-purple-400' },
              { name: 'Docker', bg: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400' },
              { name: 'Kubernetes', bg: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400' },
              { name: 'PostgreSQL', bg: 'bg-sky-500/20 border-sky-500/30 text-sky-400' },
              { name: 'Jira', bg: 'bg-blue-500/20 border-blue-500/30 text-blue-400' },
              { name: 'Postman', bg: 'bg-orange-500/20 border-orange-500/30 text-orange-400' },
              { name: 'Git', bg: 'bg-red-500/20 border-red-500/30 text-red-400' }
            ].map((tech, idx) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-xl text-sm font-medium border ${tech.bg}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg">ISTQB Certified Tester</h3>
                <p className="text-slate-400">Foundation Level</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
