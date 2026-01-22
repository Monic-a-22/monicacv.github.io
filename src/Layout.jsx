import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  FileText,
  Award,
  MessageSquare,
  Mail,
  ExternalLink,
  Linkedin,
  Github
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'Home', icon: Home },
    { name: 'About', page: 'About', icon: User },
    { name: 'Skills', page: 'Skills', icon: Code2 },
    { name: 'Experience', page: 'Experience', icon: Briefcase },
    { name: 'Case Studies', page: 'CaseStudies', icon: FileText },
    { name: 'Achievements', page: 'Achievements', icon: Award },
    { name: 'Testimonials', page: 'Testimonials', icon: MessageSquare },
    { name: 'Contact', page: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <span className="font-display text-white font-semibold text-lg hidden sm:block">Monica Rao</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentPageName === item.page
                      ? 'text-violet-400 bg-violet-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="ml-4 flex items-center gap-2">
                <Link to={createPageUrl('Contact')}>
                  <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      currentPageName === item.page
                        ? 'text-violet-400 bg-violet-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to={createPageUrl('Home')} className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MR</span>
                </div>
                <span className="text-white font-semibold text-lg">Monica Rao</span>
              </Link>
              <p className="text-slate-400 mb-6 max-w-md">
                Founding Lead QA and Quality Engineering Leader helping product startups 
                build reliable software through strategic quality systems.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/in/monicarao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/monicarao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:monica.rao@example.com"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.page}>
                    <Link 
                      to={createPageUrl(item.page)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More */}
            <div>
              <h4 className="text-white font-semibold mb-4">More</h4>
              <ul className="space-y-2">
                {navItems.slice(5).map((item) => (
                  <li key={item.page}>
                    <Link 
                      to={createPageUrl(item.page)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Monica Rao. Building quality into software.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
