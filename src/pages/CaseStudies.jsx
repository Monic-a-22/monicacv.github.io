import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Building2, Target, Wrench, TrendingUp,
  Sparkles, Shield, Zap, Layers, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'seldon',
      company: 'Seldon',
      title: 'Building QA from Zero for a Cloud-Native ML Platform',
      subtitle: 'Founding Lead QA · Current Role',
      color: 'violet',
      icon: Sparkles,
      context: 'Seldon is a leading ML deployment platform enabling organizations to deploy, scale, and monitor machine learning models on Kubernetes. The platform serves enterprise clients requiring enterprise-grade reliability.',
      problem: 'As the company scaled, there was no dedicated QA function. Quality was ad-hoc, release confidence was low, and there was no systematic approach to testing the complex cloud-native, microservices architecture.',
      role: 'Brought in as the Founding Lead QA to establish the entire quality engineering function from scratch.',
      whatIDid: [
        'Designed and implemented comprehensive test strategy covering UI, API, and integration layers',
        'Built Playwright + Pytest automation frameworks from ground up',
        'Created API test isolation strategies for microservices running on Kubernetes',
        'Integrated GitHub Actions CI pipelines for automated quality gates',
        'Established release processes and quality metrics dashboards',
        'Became the single point of accountability for product quality'
      ],
      tools: ['Playwright', 'Pytest', 'Python', 'GitHub Actions', 'Kubernetes', 'Docker', 'PostgreSQL'],
      results: [
        { metric: '~75%', label: 'UI automation coverage achieved in early phases' },
        { metric: '0 → Full', label: 'QA function built with ownership, processes, and quality gates' },
        { metric: 'High', label: 'Predictable release confidence for a complex ML platform' }
      ],
      impact: 'Transformed quality from an afterthought into a core engineering capability, enabling faster, safer, and more scalable releases for enterprise ML deployments running in production.'
    },
    {
      id: 'everstage',
      company: 'Everstage',
      title: 'Founding QA: From Zero to 70% Coverage',
      subtitle: 'QA Engineer II · Founding Team Member',
      color: 'amber',
      icon: Target,
      context: 'Everstage is a commission management platform for sales teams. As an early-stage startup, the product was evolving rapidly with frequent releases and expanding feature scope.',
      problem: 'When I joined as part of the founding QA team, there was zero automation. Testing was entirely manual, which slowed down releases and allowed regressions to escape into production. The team needed a scalable quality system, not just more manual testing.',
      role: 'Founding QA team member responsible for establishing automation and quality processes.',
      whatIDid: [
        'Built automation framework from scratch using Playwright and Python',
        'Designed test strategy balancing coverage, speed, and maintainability',
        'Implemented E2E, integration, and API test suites',
        'Mentored 5 junior QA engineers on automation best practices and framework usage',
        'Introduced quality gates integrated with CI/CD pipelines',
        'Owned end-to-end quality for multiple product areas'
      ],
      tools: ['Playwright', 'Python', 'Pytest', 'Selenium', 'Jira', 'Xray', 'Jenkins'],
      results: [
        { metric: '0 → ~70%', label: 'Automation coverage achieved' },
        { metric: '~55–60%', label: 'Reduction in production defects' },
        { metric: '~60%', label: 'Faster regression cycles' },
        { metric: '3', label: 'Engineers mentored into automation contributors' },
        { metric: 'Clear', label: 'Ownership and predictable release quality' }
      ],
      impact: 'Transformed quality from a release bottleneck into a scalable engineering capability, enabling the company to move faster while significantly improving product stability and customer trust.'
    },
    {
      id: 'simplilearn',
      company: 'Simplilearn',
      title: 'Scaling Test Automation for a High-Traffic EdTech Platform',
      subtitle: 'SDET 3',
      color: 'blue',
      icon: TrendingUp,
      context: 'Simplilearn is a leading online learning platform serving millions of users worldwide across web, mobile, and API surfaces. The platform operates at high scale, making stability, performance, and release reliability business-critical.',
      problem: 'Regression testing was becoming a major bottleneck. Test execution was slow, coverage was inconsistent across critical flows, and production incidents were directly impacting learner experience and business metrics.',
      role: 'Senior SDET responsible for scaling automation coverage and execution efficiency across teams.',
      whatIDid: [
        'Re-architected the regression suite to support parallel execution',
        'Expanded test coverage across critical user journeys on web and mobile',
        'Implemented performance testing for high-traffic API endpoints',
        'Mentored 16 QA/SDET engineers on advanced automation design and execution',
        'Introduced shift-left testing practices across the development lifecycle',
        'Led automation strategy for both web and mobile platforms'
      ],
      tools: ['Selenium', 'TestNG', 'Java', 'Jenkins', 'Appium', 'JMeter'],
      results: [
        { metric: '+65%', label: 'Increase in regression coverage' },
        { metric: '~60%', label: 'Faster regression execution time' },
        { metric: '~55–60%', label: 'Reduction in production issues' },
        { metric: 'Improved', label: 'Predictable releases and earlier defect detection' }
      ],
      impact: 'Transformed QA from a release bottleneck into a scalable quality engine, enabling faster feature delivery while significantly improving platform stability and user trust.'
    },
    {
      id: 'pickyourtrail',
      company: 'Pickyourtrail',
      title: 'Owning QA for the First Mobile App Launch',
      subtitle: 'QA Automation Engineer',
      color: 'rose',
      icon: Shield,
      context: 'Pickyourtrail is a travel-tech company preparing to launch its first mobile application to complement an existing web platform. This was a critical product milestone with direct impact on customer experience and business growth.',
      problem: 'The company had no existing mobile testing infrastructure, and web automation coverage was also limited. Launching a brand-new mobile app without a strong quality foundation posed high risk to brand trust and user retention.',
      role: 'QA Automation Engineer owning quality for both the web platform and the new mobile app launch.',
      whatIDid: [
        'Built the web automation framework from scratch using Playwright and Python',
        'Designed and executed the mobile testing strategy for the first app release',
        'Created comprehensive regression suites covering critical user journeys',
        'Implemented API testing for backend services to reduce end-to-end risk',
        'Worked closely with developers to define and enforce quality standards',
        'Mentored 4 QA engineers during the transition to automation and mobile testing'
      ],
      tools: ['Playwright', 'Python', 'Selenium', 'Appium', 'Postman'],
      results: [
        { metric: '0 → ~60%', label: 'Regression coverage across platforms' },
        { metric: '~45%', label: 'Reduction in regression execution time' },
        { metric: 'Successful', label: 'First mobile app launch without major production issues' },
        { metric: 'Improved', label: 'Web platform stability and release confidence' }
      ],
      impact: 'Delivered a successful first mobile launch while strengthening web quality, reducing regression risk, and raising release confidence across the product.'
    }
  ];

  const colorClasses = {
    violet: { bg: 'bg-violet-500', light: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/30', gradient: 'from-violet-600 to-purple-600' },
    amber: { bg: 'bg-amber-500', light: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', gradient: 'from-amber-500 to-orange-500' },
    blue: { bg: 'bg-blue-500', light: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', gradient: 'from-blue-500 to-cyan-500' },
    rose: { bg: 'bg-rose-500', light: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30', gradient: 'from-rose-500 to-pink-500' }
  };

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
            <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Case <span className="text-violet-400">Studies</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Detailed breakdowns of how I've built quality systems, solved complex 
              challenges, and delivered measurable business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, idx) => {
              const colors = colorClasses[study.color];
              
              return (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${colors.light} flex items-center justify-center`}>
                        <study.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <Badge className={`${colors.light} ${colors.text} ${colors.border} border`}>
                          {study.company}
                        </Badge>
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {study.title}
                    </h2>
                    <p className="text-slate-400">{study.subtitle}</p>
                  </div>

                  {/* Main content grid */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left column - Context */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Context */}
                      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Context
                        </h3>
                        <p className="text-slate-300 leading-relaxed">{study.context}</p>
                      </div>

                      {/* Problem */}
                      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          The Challenge
                        </h3>
                        <p className="text-slate-300 leading-relaxed">{study.problem}</p>
                      </div>

                      {/* What I Did */}
                      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Wrench className="w-4 h-4" />
                          What I Did
                        </h3>
                        <p className="text-slate-400 mb-4 text-sm italic">{study.role}</p>
                        <ul className="space-y-3">
                          {study.whatIDid.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-3 text-slate-300">
                              <ChevronRight className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.tools.map((tool, tIdx) => (
                            <Badge 
                              key={tIdx}
                              variant="secondary"
                              className="bg-slate-800 text-slate-300 border-slate-700"
                            >
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right column - Results */}
                    <div className="space-y-6">
                      <div className={`p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} bg-opacity-10 border ${colors.border}`}>
                        <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Results & Impact
                        </h3>
                        <div className="space-y-6">
                          {study.results.map((result, rIdx) => (
                            <div key={rIdx} className="text-center">
                              <div className={`text-3xl lg:text-4xl font-bold text-white mb-1`}>
                                {result.metric}
                              </div>
                              <div className="text-slate-300 text-sm">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                          Business Impact
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{study.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  {idx < caseStudies.length - 1 && (
                    <div className="mt-24 border-t border-slate-800" />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for Your Next Quality Challenge
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Whether you're building your first QA function or scaling your existing 
              quality infrastructure, I'd love to hear about your challenges.
            </p>
            <Link to={`${createPageUrl('Contact')}#get-in-touch`}>
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-6 text-lg rounded-xl">
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
