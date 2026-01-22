import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Calendar, MapPin, ChevronDown, ChevronUp,
  ArrowUpRight, Sparkles, TrendingUp, Users, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  const [expandedId, setExpandedId] = useState('seldon');

  const experiences = [
    {
      id: 'seldon',
      company: 'Seldon',
      role: 'Founding Lead QA',
      type: 'Full-time',
      period: 'July 2024 – Present',
      location: 'London, UK',
      logo: 'S',
      color: 'violet',
      current: true,
      highlights: [
        'Established the QA function from scratch for a cloud-native ML inference platform',
        'Built Playwright + Pytest automation frameworks achieving ~75% UI coverage',
        'Designed API test isolation strategies for microservices architecture',
        'Integrated GitHub Actions CI pipelines for automated quality gates',
        'Single point of accountability for product quality and release confidence'
      ],
      tech: ['Playwright', 'Pytest', 'Python', 'GitHub Actions', 'Kubernetes', 'Docker'],
      metrics: [
        { label: 'UI Coverage', value: '~75%' },
        { label: 'QA Function', value: '0 → Full' },
        { label: 'Release Confidence', value: 'Predictable' }
      ]
    },
    {
      id: 'kula',
      company: 'Kula',
      role: 'Senior QA Engineer',
      type: 'Full-time',
      period: 'January 2024 – April 2024',
      location: 'Chennai, India',
      logo: 'K',
      color: 'emerald',
      highlights: [
        'Improved release cycle time by ~30% through optimized testing processes',
        'Increased automation coverage from ~40% to ~65% using Cypress',
        'Implemented shift-left testing practices across engineering teams',
        'Collaborated with product and engineering on quality strategy'
      ],
      tech: ['Cypress', 'JavaScript', 'TypeScript', 'CI/CD'],
      metrics: [
        { label: 'Release Time', value: '-30%' },
        { label: 'Coverage', value: '40% → 65%' }
      ]
    },
    {
      id: 'everstage',
      company: 'Everstage',
      role: 'QA Engineer II',
      type: 'Full-time · Founding QA',
      period: 'December 2022 – December 2023',
      location: 'Chennai, India',
      logo: 'E',
      color: 'amber',
      highlights: [
        'Founding QA team member — built automation from zero to ~70% coverage',
        'Reduced production defects by ~55–60% through comprehensive testing strategy',
        'Mentored 5 junior QA engineers on automation and best practices',
        'Owned end-to-end quality for multiple product areas',
        'Designed and implemented test strategy and quality gates'
      ],
      tech: ['Playwright', 'Cypress', 'Python', 'Pytest', 'Selenium', 'Jira', 'Xray'],
      metrics: [
        { label: 'Coverage', value: '0 → ~70%' },
        { label: 'Defects', value: '~55–60%' },
        { label: 'Regression Cycles', value: '~60% Faster' }
      ]
    },
    {
      id: 'simplilearn',
      company: 'Simplilearn',
      role: 'SDET 3',
      type: 'Full-time',
      period: 'March 2022 – December 2022',
      location: 'Bengaluru, India',
      logo: 'SL',
      color: 'blue',
      highlights: [
        'Increased regression coverage by ~65% through framework improvements',
        'Reduced regression execution time by ~60% via parallel execution',
        'Decreased production incidents by ~55–60% with enhanced test coverage',
        'Mentored 16 QA/SDET engineers on automation and testing practices',
        'Led automation strategy for web and mobile platforms'
      ],
      tech: ['Selenium', 'TestNG', 'Java', 'Jenkins', 'Appium'],
      metrics: [
        { label: 'Regression Coverage', value: '+65%' },
        { label: 'Execution Time', value: '~60% Faster' },
        { label: 'Production Issues', value: '~55–60%' }
      ]
    },
    {
      id: 'pickyourtrail',
      company: 'Pickyourtrail',
      role: 'QA Automation Engineer',
      type: 'Full-time',
      period: 'March 2021 – March 2022',
      location: 'Chennai, India',
      logo: 'P',
      color: 'rose',
      highlights: [
        'Built automation framework from scratch using Playwright + Python',
        'Achieved ~60% regression coverage within 8 months',
        'Owned QA for the company\'s first mobile app launch',
        'Reduced regression execution time by ~45%',
        'Mentored 4 QA engineers during automation and mobile testing transition'
      ],
      tech: ['Playwright', 'Python', 'Selenium', 'Appium'],
      metrics: [
        { label: 'Coverage', value: '0 → ~60%' },
        { label: 'Regression Time', value: '~45% Faster' }
      ]
    },
    {
      id: 'amazon',
      company: 'Amazon',
      role: 'Quality Associate (Alexa & Devices)',
      type: 'Full-time',
      period: 'October 2018 – March 2021',
      location: 'Chennai, India',
      logo: 'A',
      color: 'orange',
      highlights: [
        'Worked on Alexa and device ecosystem across 15+ device types',
        'Executed 500+ test cases per sprint with high precision',
        'Contributed to Selenium/TestNG automation framework',
        'Gained foundational understanding of enterprise-scale QA'
      ],
      tech: ['Selenium', 'TestNG', 'Java', 'Manual Testing'],
      metrics: [
        { label: 'Devices Tested', value: '15+ Types' },
        { label: 'Test Cases/Sprint', value: '500+' }
      ]
    }
  ];

  const colorClasses = {
    violet: { bg: 'bg-violet-500', light: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30' },
    emerald: { bg: 'bg-emerald-500', light: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
    blue: { bg: 'bg-blue-500', light: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
    rose: { bg: 'bg-rose-500', light: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
    orange: { bg: 'bg-orange-500', light: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/20" />
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Professional <span className="text-violet-400">Journey</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              7+ years of building quality systems across startups and enterprises,
              from Alexa at Amazon to cloud-native ML platforms at Seldon.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { label: 'Years Experience', value: '7+' },
                { label: 'Companies', value: '6' },
                { label: 'QA Functions Built', value: '4' },
                { label: 'Engineers Mentored', value: '25+' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, idx) => {
                const colors = colorClasses[exp.color];
                const isExpanded = expandedId === exp.id;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full ${colors.bg} border-4 border-slate-950 hidden md:block z-10`} />

                    <div 
                      className={`ml-0 md:ml-16 rounded-2xl border transition-all duration-300 cursor-pointer
                        ${isExpanded ? `${colors.border} bg-slate-900/80` : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'}`}
                      onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    >
                      {/* Header */}
                      <div className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 rounded-xl ${colors.light} flex items-center justify-center flex-shrink-0`}>
                              <span className={`text-xl font-bold ${colors.text}`}>{exp.logo}</span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                                {exp.current && (
                                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                                    Current
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <Building2 className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-300">{exp.company}</span>
                                <span className="text-slate-600">·</span>
                                <span className="text-slate-500 text-sm">{exp.type}</span>
                              </div>
                              <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {exp.period}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5" />
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-slate-500 flex-shrink-0">
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </Button>
                        </div>

                        {/* Metrics preview */}
                        <div className="flex flex-wrap gap-3 mt-4">
                          {exp.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="px-3 py-1.5 rounded-lg bg-slate-800/50 text-sm">
                              <span className="text-slate-400">{metric.label}:</span>
                              <span className={`ml-1.5 font-semibold ${colors.text}`}>{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 border-t border-slate-800 pt-6">
                              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">
                                Key Achievements
                              </h4>
                              <ul className="space-y-3">
                                {exp.highlights.map((highlight, hIdx) => (
                                  <motion.li
                                    key={hIdx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: hIdx * 0.05 }}
                                    className="flex items-start gap-3 text-slate-300"
                                  >
                                    <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                    <span>{highlight}</span>
                                  </motion.li>
                                ))}
                              </ul>

                              <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mt-6 mb-3">
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, tIdx) => (
                                  <Badge 
                                    key={tIdx}
                                    variant="secondary"
                                    className="bg-slate-800 text-slate-300 border-slate-700"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-blue-400">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Bachelor of Engineering</h3>
                <p className="text-slate-300">Electronics and Communication Engineering (ECE)</p>
                <p className="text-slate-500 mt-1">Agni College of Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
