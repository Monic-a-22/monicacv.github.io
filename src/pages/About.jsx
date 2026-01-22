import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, MapPin, Award, Users, Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Ownership Mindset",
      desc: "I don't wait for problems to find me. I anticipate quality risks and build systems to prevent them before they impact users."
    },
    {
      icon: Users,
      title: "Collaborative Leadership",
      desc: "Quality is a team sport. I work alongside developers, product managers, and stakeholders to embed quality thinking across the entire organization."
    },
    {
      icon: Lightbulb,
      title: "Systems Thinking",
      desc: "I see beyond individual tests to understand how quality infrastructure, processes, and culture interconnect to drive release confidence."
    }
  ];

  const journey = [
    { year: "2018", title: "Started as QA at Amazon", desc: "Worked on Alexa & Devices at enterprise scale" },
    { year: "2021", title: "QA Automation at Pickyourtrail", desc: "Owned quality for the first mobile app launch" },
    { year: "2022", title: "SDET 3 at Simplilearn", desc: "Scaled automation for a high-traffic EdTech platform" },
    { year: "2024", title: "Founding Lead QA at Seldon", desc: "Building QA for a cloud-native ML platform" }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/20" />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-violet-400 mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">London, United Kingdom</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                The Story Behind<br />
                <span className="text-violet-400">My Quality Journey</span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed">
                I'm Monica Rao, a Quality Engineering leader who has spent the last
                7+ years helping product startups build reliable, scalable software.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-600/20 to-slate-800 p-1">
                <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-violet-500/20">MR</div>
                    <div className="text-slate-500 mt-4">Quality Engineering Leader</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-amber-500" />
                  <div>
                    <div className="text-white font-semibold">ISTQB Certified</div>
                    <div className="text-slate-500 text-sm">Foundation Level</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Narrative */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Quote className="w-16 h-16 text-violet-500/20 absolute -top-4 -left-8" />

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                <span className="text-white font-semibold">I fell into quality engineering almost by accident.</span> My
                first role at Amazon, working on Alexa, showed me how complex software ecosystems
                really are, and how critical quality becomes at scale. What started as executing
                test cases turned into a passion for building the systems that make testing
                meaningful.
              </p>

              <p className="text-white font-semibold">
                I'm known for building QA functions from scratch and owning release confidence.
              </p>

              <p>
                I've joined startups at their earliest stages, often as the first or founding QA
                engineer. At <span className="text-violet-400">Everstage</span>, I built automation from zero to 70%
                coverage. At <span className="text-violet-400">Pickyourtrail</span>, I owned quality for their first
                mobile app launch. At <span className="text-violet-400">Seldon</span>, I'm building the QA function
                for a cloud-native ML platform running on Kubernetes.
              </p>

              <p>
                <span className="text-white font-semibold">What drives me isn't just finding bugs</span> is
                architecting quality into the DNA of a product. I believe QA should be a strategic
                partner, not a gatekeeper. My approach blends technical depth (Playwright,
                Cypress, Pytest, CI/CD) with quality leadership (strategy, process design,
                mentoring).
              </p>

              <p>
                Today, I'm looking for opportunities where I can bring this founding QA mindset,
                building quality systems from scratch, owning release confidence, and partnering 
                with engineering teams to ship better software faster.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              My Quality Philosophy
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              These principles guide how I approach every project and team I work with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              The Journey So Far
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800" />

            {journey.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="text-violet-400 text-sm font-medium mb-1">{item.year}</div>
                  <div className="text-white font-semibold text-lg mb-1">{item.title}</div>
                  <div className="text-slate-400">{item.desc}</div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-violet-500 border-4 border-slate-950" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to see this philosophy in action?
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Explore my case studies to see how I've applied these principles to real products.
            </p>
            <Link to={createPageUrl('CaseStudies')}>
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-6 text-lg rounded-xl">
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
