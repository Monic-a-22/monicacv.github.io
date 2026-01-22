import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Linkedin, MapPin, Send, CheckCircle2, 
  MessageSquare, Calendar, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mzddlqjp", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(e.target),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      toast.success('Message sent successfully!');

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cvmonica97@gmail.com',
      href: 'mailto:cvmonica97@gmail.com',
      color: 'violet'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/monica-cv',
      href: 'https://www.linkedin.com/in/monica-cv',
      color: 'blue'
    }
  ];

  const topics = [
    "Building QA functions from scratch (Founding QA)",
    "Test strategy & quality systems design",
    "Automation architecture (Playwright, Cypress, Pytest)",
    "Release quality ownership & quality gates",
    "Scaling QA teams & mentoring engineers",
    "Senior / Lead QA roles in product startups"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/20" />
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's <span className="text-violet-400">Connect</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              If you're building a product and care about shipping with confidence, I'd love to talk. 
              I'm open to discussions around building QA functions from scratch, improving quality strategy, 
              or leading quality for fast-moving product teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 id="get-in-touch" className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

              {/* Contact Methods */}
              <div className="space-y-4 mb-12">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    key={idx}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${method.color}-500/10 flex items-center justify-center`}>
                      <method.icon className={`w-6 h-6 text-${method.color}-400`} />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{method.label}</div>
                      <div className="text-white font-medium">{method.value}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 ml-auto group-hover:text-violet-400 transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span className="text-white font-medium">Location</span>
                </div>
                <p className="text-slate-300">
                  Based in India, currently working with a London-based startup (Seldon) in a remote setup. 
                  Primarily targeting UK relocation opportunities; also open to remote roles.
                </p>
              </div>

              {/* Topics */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-violet-400" />
                  What I Can Help With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-sm border border-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-violet-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-violet-500"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-300">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-slate-700 text-white focus:border-violet-500"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-700 text-white focus:border-violet-500"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-slate-800/50 border-slate-700 text-white focus:border-violet-500 resize-none"
                        placeholder="Tell me about your product, team, and what you’re trying to build."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-violet-600 hover:bg-violet-700 text-white py-6 text-lg rounded-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">○</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm">Open to new opportunities</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Currently Open to New Opportunities
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I’m actively exploring Founding QA, QA Lead, and Senior Quality Engineer roles at product startups in the UK and EU. 
              Open to both relocation opportunities and remote teams.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
