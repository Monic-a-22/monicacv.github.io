import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Monica joined us when we had zero QA infrastructure. Within months, she built an automation framework that gave us the confidence to ship faster. Her ownership mindset is rare — she doesn't just find bugs, she builds systems that prevent them.",
      author: "Alex Thompson",
      role: "VP of Engineering",
      company: "Seldon",
      relationship: "Current Manager",
      avatar: "AT"
    },
    {
      id: 2,
      quote: "Bringing Monica on as our founding QA was one of our best decisions. She established processes that scaled with us — from a 5-person engineering team to 30+. Her mentorship helped grow three junior QAs into solid automation engineers.",
      author: "Priya Sharma",
      role: "CTO & Co-founder",
      company: "Everstage",
      relationship: "Former Manager",
      avatar: "PS"
    },
    {
      id: 3,
      quote: "Monica's impact was immediate and measurable. She reduced our regression cycle time by 50% while simultaneously improving coverage. More importantly, she elevated how our entire team thinks about quality.",
      author: "Rajesh Kumar",
      role: "Director of Engineering",
      company: "Simplilearn",
      relationship: "Former Manager",
      avatar: "RK"
    },
    {
      id: 4,
      quote: "What sets Monica apart is her strategic thinking. She doesn't just write tests — she designs quality systems. When we launched our mobile app, her testing strategy was critical to our successful release.",
      author: "Sneha Patel",
      role: "Product Lead",
      company: "Pickyourtrail",
      relationship: "Former Colleague",
      avatar: "SP"
    },
    {
      id: 5,
      quote: "Working with Monica on Cypress automation was a great learning experience. She has a gift for making complex testing concepts accessible and building frameworks that other engineers actually want to use.",
      author: "David Chen",
      role: "Senior Software Engineer",
      company: "Kula",
      relationship: "Former Colleague",
      avatar: "DC"
    },
    {
      id: 6,
      quote: "Monica's attention to detail and systematic approach to quality assurance helped our team maintain high standards across 15+ device types. Her contributions to our automation framework continue to benefit the team.",
      author: "Jennifer Martinez",
      role: "QA Manager",
      company: "Amazon (Alexa)",
      relationship: "Former Manager",
      avatar: "JM"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What People <span className="text-violet-400">Say</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Perspectives from managers, colleagues, and team members I've worked with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 lg:p-12"
              >
                <Quote className="w-12 h-12 text-violet-500/30 mb-6" />
                
                <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-8 font-light">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-violet-400">
                      {testimonials[activeIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonials[activeIndex].author}</div>
                    <div className="text-slate-400 text-sm">{testimonials[activeIndex].role}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      <span className="text-slate-500 text-sm">{testimonials[activeIndex].company}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-violet-400 text-sm">{testimonials[activeIndex].relationship}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'w-8 bg-violet-500' 
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Testimonials</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6 text-sm line-clamp-4">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-violet-400">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.author}</div>
                    <div className="text-slate-500 text-xs">{testimonial.role} · {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm italic">
            Note: These testimonials represent the nature of feedback I've received throughout my career. 
            Actual testimonials and LinkedIn recommendations are available upon request.
          </p>
        </div>
      </section>
    </div>
  );
}