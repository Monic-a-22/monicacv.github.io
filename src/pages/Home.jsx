import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Shield, Rocket, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Building Quality Systems, Not Just Running Tests",
    "From Zero to Release Confidence",
    "Founding QA Leadership for Product Teams",
    "Engineering Quality at Scale",
    "Your Quality Partner from Day One"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { icon: Shield, label: "7+ Years", desc: "Quality Engineering" },
    { icon: Rocket, label: "5 Companies", desc: "Across SaaS & Enterprise" },
    { icon: Code2, label: "~75%", desc: "Automation Coverage" },
    { icon: Sparkles, label: "~55–60%", desc: "Defect Reduction" }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Clean background */}
        <div className="absolute inset-0 bg-slate-950" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        {/* Subtle accent glow - reduced */}
        <motion.div
          animate={{ opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-violet-300">Available for opportunities</span>
              </div>

              <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Monica Rao
              </h1>

              <h2 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight text-slate-300 mb-4">
                Founding Lead QA & Quality Engineer
              </h2>

              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-display text-xl text-violet-400 font-semibold tracking-tight mb-8 h-8"
              >
                {taglines[currentTagline]}
              </motion.p>

              <p className="text-lg text-slate-400 mb-12 leading-[1.8] max-w-xl">
                I design, build, and run quality systems for product companies. 
                With 7+ years specializing in SaaS startups, I've established QA functions 
                from scratch, achieving up to 75% automation coverage and reducing
                production issues by ~55–60%.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('CaseStudies')}>
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-xl group">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl">
                    <Mail className="mr-2 w-5 h-5" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right - Stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300"
                >
                  <item.icon className="w-10 h-10 text-violet-400 mb-4" />
                  <div className="font-display text-3xl font-bold tracking-tight text-white mb-1">{item.label}</div>
                  <div className="text-slate-400">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-violet-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Current Role - Seldon */}
      <section className="relative py-32 border-b border-slate-800/50 bg-slate-900/30 overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">Currently</span>
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              Founding Lead QA at <span className="text-violet-400">Seldon</span>
              <span className="text-slate-500 text-2xl ml-2">(UK)</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-[1.8] mb-12 max-w-3xl">
              Leading quality for a cloud-native ML inference and deployment platform. 
              Built the QA function from scratch, designed Playwright and Pytest automation 
              frameworks achieving <span className="text-violet-400 font-semibold">~75% UI automation coverage</span>, 
              integrated CI/CD pipelines using GitHub Actions, and enabled confident releases 
              for a Kubernetes-based distributed system.
            </p>

            {/* Tech Tags */}
            <div>
              <div className="text-sm text-slate-500 uppercase tracking-wider mb-4">
                Technologies & Focus
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  'Playwright',
                  'Pytest', 
                  'Kubernetes',
                  'GitHub Actions',
                  'Python SDK',
                  'ML Platform',
                  'Event-Driven Architecture'
                ].map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-5 py-2.5 rounded-lg bg-slate-800 border border-slate-700/80 text-slate-300 text-sm font-medium hover:border-slate-600 transition-all"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick overview section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              What I Bring to Your Team
            </h2>
            <p className="text-slate-400 text-lg leading-[1.8] max-w-2xl mx-auto">
              I'm not a task-based tester. I design and run quality systems that scale with your product.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "QA Function Building",
                desc: "Build complete quality systems from scratch, including frameworks, processes, CI/CD pipelines, and team operating models.",
                color: "violet"
              },
              {
                title: "Automation Architecture",
                desc: "Design and implement robust automation platforms using Playwright, Cypress, and Pytest with comprehensive coverage strategies.",
                color: "amber"
              },
              {
                title: "Quality Leadership",
                desc: "Own end-to-end release quality, define test strategy, mentor engineers, and drive a sustainable quality culture across teams.",
                color: "emerald"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300"
              >
                <div className={`w-12 h-1 rounded-full bg-${card.color}-500 mb-6`} />
                <h3 className="font-display text-xl font-semibold tracking-tight text-white mb-4">{card.title}</h3>
                <p className="text-slate-400 leading-[1.75]">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to={createPageUrl('About')}>
              <Button variant="ghost" className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10">
                Learn more about my approach
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Companies worked with */}
      <section className="py-28 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Trusted by Product Companies Where I Built and Led Quality
            </h2>
            <p className="text-slate-400 text-base">
              From early-stage startups to global-scale platforms.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
            {[
              { name: 'Seldon', hasCase: true },
              { name: 'Kula', hasCase: false },
              { name: 'Everstage', hasCase: true },
              { name: 'Simplilearn', hasCase: true },
              { name: 'Pickyourtrail', hasCase: true },
              { name: 'Amazon', hasCase: false }
            ].map((company, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {company.hasCase ? (
                  <Link
                    to={createPageUrl('CaseStudies')}
                    className="text-2xl font-semibold text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {company.name}
                  </Link>
                ) : (
                  <span className="text-2xl font-semibold text-slate-300">
                    {company.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white mb-8">
              Ready to Build Quality Into Your Product?
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-[1.8] max-w-2xl mx-auto">
              Whether you're a startup needing to establish your first QA function or 
              a scaling company looking for quality leadership, let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-6 text-lg rounded-xl">
                  Start a Conversation
                </Button>
              </Link>
              <Link to={createPageUrl('Resume')}>
                <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-10 py-6 text-lg rounded-xl">
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
