import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, TrendingUp, Users, Code, Target, Shield,
  Zap, CheckCircle2, Star, Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Achievements() {
  const keyAchievements = [
    {
      icon: Sparkles,
      title: "Built 4 QA Functions from Scratch",
      description: "Established complete quality engineering functions at Seldon, Everstage, Simplilearn, and Pickyourtrail — from zero automation to comprehensive test suites.",
      highlight: "Founding QA",
      color: "violet"
    },
    {
      icon: Code,
      title: "75%+ Automation Coverage",
      description: "Achieved industry-leading automation coverage across multiple companies using Playwright, Cypress, and Pytest frameworks.",
      highlight: "Technical Excellence",
      color: "emerald"
    },
    {
      icon: TrendingUp,
      title: "45-55% Defect Reduction",
      description: "Consistently reduced production issues through systematic test strategy, automation, and quality gates implementation.",
      highlight: "Business Impact",
      color: "amber"
    },
    {
      icon: Users,
      title: "10+ Engineers Mentored",
      description: "Developed junior QA engineers into skilled automation engineers through hands-on mentoring and structured learning programs.",
      highlight: "Leadership",
      color: "blue"
    },
    {
      icon: Zap,
      title: "50% Execution Time Reduction",
      description: "Optimized test suites for parallel execution and smart test selection, dramatically reducing regression cycle times.",
      highlight: "Efficiency",
      color: "rose"
    },
    {
      icon: Shield,
      title: "Enterprise-Scale Quality",
      description: "Led quality for platforms serving enterprise clients, including ML deployment infrastructure and EdTech platforms with millions of users.",
      highlight: "Scale",
      color: "cyan"
    }
  ];

  const metrics = [
    { value: "7+", label: "Years Experience", description: "In Quality Engineering" },
    { value: "6", label: "Companies", description: "Across SaaS & Enterprise" },
    { value: "75%+", label: "Peak Coverage", description: "Automation Coverage" },
    { value: "10+", label: "Engineers", description: "Mentored & Grown" },
    { value: "200+", label: "Test Cases/Sprint", description: "At Amazon Scale" },
    { value: "15+", label: "Device Types", description: "Tested at Amazon" }
  ];

  const certifications = [
    {
      title: "ISTQB Certified Tester",
      subtitle: "Foundation Level",
      issuer: "International Software Testing Qualifications Board",
      icon: Award
    }
  ];

  const recognition = [
    "Single point of accountability for product quality at Seldon",
    "Founding QA team member establishing quality culture at Everstage",
    "Led automation strategy transformation at Simplilearn",
    "Owned mobile app launch quality at Pickyourtrail",
    "Contributed to Alexa ecosystem quality at Amazon"
  ];

  const colorClasses = {
    violet: { bg: 'bg-violet-500', light: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30' },
    emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
    blue: { bg: 'bg-blue-500', light: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
    rose: { bg: 'bg-rose-500', light: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
    cyan: { bg: 'bg-cyan-500', light: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/20" />
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Achievements & <span className="text-violet-400">Recognition</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Measurable impact and milestones from 7+ years of building quality systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
              >
                <div className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white mb-1">{metric.value}</div>
                <div className="text-violet-400 font-medium text-sm mb-1">{metric.label}</div>
                <div className="text-slate-500 text-xs">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Key Achievements
            </h2>
            <p className="text-slate-400 text-lg">
              Highlights that demonstrate my impact and capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyAchievements.map((achievement, idx) => {
              const colors = colorClasses[achievement.color];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl bg-slate-900/50 border ${colors.border} hover:bg-slate-900/80 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center`}>
                      <achievement.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <Badge className={`${colors.light} ${colors.text} ${colors.border} border`}>
                      {achievement.highlight}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recognition & Certifications */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400" />
                Certifications
              </h2>
              
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                      <p className="text-violet-400 text-sm mb-1">{cert.subtitle}</p>
                      <p className="text-slate-500 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Recognition */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Star className="w-6 h-6 text-violet-400" />
                Notable Recognition
              </h2>
              
              <div className="space-y-4">
                {recognition.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              The Numbers Tell the Story
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "45-55%", label: "Average Defect Reduction", sublabel: "across companies" },
                { value: "50%", label: "Faster Regression Cycles", sublabel: "through optimization" },
                { value: "0 → 70%+", label: "Automation Journey", sublabel: "repeatedly achieved" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-purple-600/10 border border-violet-500/20"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-violet-400 font-medium">{stat.label}</div>
                  <div className="text-slate-500 text-sm mt-1">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
