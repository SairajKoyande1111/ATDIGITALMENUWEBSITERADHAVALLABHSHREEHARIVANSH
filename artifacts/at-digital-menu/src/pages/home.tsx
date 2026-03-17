import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, Menu as MenuIcon, X, QrCode, Receipt, Clock, Bug, 
  Megaphone, UserX, Trash2, ScanLine, Smartphone, Bot, MessageCircle, 
  Sparkles, Star, Database, Paintbrush, Zap, Link as LinkIcon, Mic, 
  Phone, ThumbsUp, Globe, Users, BarChart3, Share2, Ban, Banknote, 
  Utensils, Coffee, Beer, Hotel, Store, Pizza, Croissant, MapPin, 
  PiggyBank, Leaf, BrainCircuit, Check 
} from "lucide-react";
import { Button, Input, Reveal, Accordion } from "@/components/ui-elements";

// --- NAVIGATION ---
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              AT
            </div>
            <span className="font-display font-bold text-xl text-slate-900 hidden sm:block">Digital Menu</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="font-semibold">Log in</Button>
            <Button>Get Started Free</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-slate-800 p-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px bg-slate-100 w-full my-2"></div>
          <Button variant="outline" className="w-full justify-center">Log in</Button>
          <Button className="w-full justify-center">Get Started Free</Button>
        </div>
      )}
    </header>
  );
}

// --- SECTIONS ---

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] max-w-7xl">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              <span>The Future of Dining</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 font-display">
              Replace Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">Physical Menu.</span><br />
              Upgrade Your Guest Experience.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              AT Digital Menu is an enterprise-grade QR-based platform — instantly updated, beautifully designed, and built for every food & beverage establishment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-white">
                <QrCode className="h-5 w-5 text-primary" />
                View Live Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="text-slate-900 font-bold">500+</span> restaurants</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative lg:h-[600px] flex justify-center items-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              {/* Decorative rings behind phone */}
              <div className="absolute inset-0 border-2 border-slate-100 rounded-full scale-110 opacity-50 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-0 border border-primary/20 rounded-full scale-150 opacity-30 animate-[spin_40s_linear_infinite_reverse]"></div>
              
              <img 
                src={`${import.meta.env.BASE_URL}images/hero-mockup.png`}
                alt="Digital Menu on Smartphone" 
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                style={{ filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.1))" }}
              />
              
              {/* Floating badges */}
              <div className="absolute top-1/4 -left-12 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_reverse]">
                <div className="bg-green-100 p-2 rounded-lg text-green-600"><Check size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Price Updated</p>
                  <p className="text-sm font-bold text-slate-900">Instantly</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* CSS for custom float animation */}
      <style dangerouslySetInlineStyle={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}

function ProblemSection() {
  const problems = [
    { icon: Receipt, title: "Exorbitant Reprint Costs", desc: "Rs.5,000–Rs.25,000 per reprint. Over Rs.1,00,000 wasted annually just to update prices." },
    { icon: Clock, title: "Zero Real-Time Updates", desc: "Waiting 24-48 hours for a designer and printer means you can't react to inventory changes." },
    { icon: Bug, title: "Significant Hygiene Risk", desc: "Physical menus are handled by hundreds daily, often carrying more bacteria than public surfaces." },
    { icon: Megaphone, title: "Zero Marketing Value", desc: "A physical book cannot be shared on WhatsApp, posted to Instagram, or reach new customers." },
    { icon: UserX, title: "Anonymous Customers", desc: "Every guest walks in and out. You collect zero data, names, or contact info for retention." },
    { icon: Trash2, title: "Environmental Waste", desc: "Billions of paper menus are printed globally every year, with over 80% ending up in landfills." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Physical Menus Are Costing You <span className="text-primary">More Than You Think</span>
          </h2>
          <p className="text-lg text-slate-600">The traditional paper menu is a static, expensive bottleneck in a fast-moving industry.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-3xl card-hover h-full">
                <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <prob.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{prob.title}</h3>
                <p className="text-slate-600 leading-relaxed">{prob.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const steps = [
    { icon: ScanLine, title: "Scan & Open", desc: "Guest scans QR code or clicks a link. No app download required." },
    { icon: Smartphone, title: "Branded Welcome", desc: "A beautiful, bespoke welcome screen matching your identity." },
    { icon: Bot, title: "AI Voice Search", desc: "Guests browse via AI assistant, voice search, and smart filters." },
    { icon: MessageCircle, title: "WhatsApp Integration", desc: "Direct ordering, queries, and service requests sent to staff." },
    { icon: Sparkles, title: "Smart Pairing", desc: "AI suggests wine pairings, sides, and highlights daily specials." },
    { icon: Star, title: "Instant Feedback", desc: "One-tap Google Review prompt immediately post-meal." },
    { icon: Database, title: "Data Captured", desc: "Customer details flow securely into your admin dashboard." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Zap className="h-4 w-4" />
              <span>Not Just A PDF</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              The Complete <br/>Guest Experience Platform
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              AT Digital Menu transforms a static list into an interactive journey, increasing order value and capturing vital marketing data.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary z-10 relative">
                      <step.icon className="h-5 w-5" />
                    </div>
                    {i !== steps.length - 1 && (
                      <div className="absolute top-12 bottom-[-32px] left-1/2 w-px bg-slate-100 -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-slate-900 font-display mb-1">{step.title}</h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-amber-500/5 rounded-3xl"></div>
            {/* landing page solution visual elegant restaurant interior */}
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop" 
              alt="Restaurant Experience" 
              className="w-full h-[800px] object-cover rounded-3xl shadow-2xl border-8 border-white"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">New Review</h5>
                  <p className="text-sm text-slate-500">Just now via Digital Menu</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">"The digital menu made ordering so easy, and the wine pairing suggestion was spot on!"</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Paintbrush, title: "Professional Custom Design", desc: "Bespoke design matching your brand identity. Mobile-first and beautiful." },
    { icon: Zap, title: "Instant Real-Time Updates", desc: "Change prices, add items, or fix typos in seconds. Zero downtime." },
    { icon: LinkIcon, title: "QR Code + Link Access", desc: "Scannable table QRs and shareable web links for Instagram bios." },
    { icon: Mic, title: "AI-Powered Assistant", desc: "Voice search, smart recommendations, and dynamic allergen filtering." },
    { icon: Phone, title: "WhatsApp Integration", desc: "Direct ordering and customer queries routed straight to staff phones." },
    { icon: ThumbsUp, title: "Google Review Prompts", desc: "Automated, one-tap review requests post-meal to boost your rating." },
    { icon: Globe, title: "Multi-Language Support", desc: "Serve international guests effortlessly with auto-translation." },
    { icon: Users, title: "Customer Data Collection", desc: "Capture names, numbers, and visit history to build your CRM." },
    { icon: BarChart3, title: "Analytics Dashboard", desc: "See what customers browse, click, and order to optimize your menu." },
    { icon: Share2, title: "Social Media Links", desc: "Connect your Instagram, Facebook, and YouTube directly in the menu." },
    { icon: Ban, title: "Instant Sold-Out Marking", desc: "Mark items unavailable instantly to avoid customer disappointment." },
    { icon: Banknote, title: "Zero Printing Cost", desc: "Eliminate reprinting budgets forever. Pay one flat fee." },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Everything Your Menu <span className="text-primary">Should Be</span>
          </h2>
          <p className="text-lg text-slate-600">Packed with enterprise features, designed for simplicity.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 card-hover h-full group">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TargetMarketSection() {
  const markets = [
    { img: `${import.meta.env.BASE_URL}images/restaurant.png`, name: "Fine Dining Restaurants" },
    { img: `${import.meta.env.BASE_URL}images/cafe.png`, name: "Cafes & Roasteries" },
    { img: `${import.meta.env.BASE_URL}images/bar.png`, name: "Bars, Pubs & Lounges" },
    { img: `${import.meta.env.BASE_URL}images/hotel.png`, name: "Hotels & Resorts" },
    { img: `${import.meta.env.BASE_URL}images/cloud-kitchen.png`, name: "Cloud Kitchens" },
    { img: `${import.meta.env.BASE_URL}images/qsr.png`, name: "QSR & Fast Food" },
    { img: `${import.meta.env.BASE_URL}images/bakery.png`, name: "Bakeries & Sweets" },
    { img: `${import.meta.env.BASE_URL}images/street-food.png`, name: "Dhaba & Street Food" },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Built For Every F&B Establishment
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">From high-end luxury dining to bustling quick-service, our platform scales to your operational needs.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {markets.map((market, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <img
                  src={market.img}
                  alt={market.name}
                  className="h-48 w-48 object-contain mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                />
                <h4 className="font-semibold text-slate-900">{market.name}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  const values = [
    { icon: Zap, title: "Instant Updates", desc: "Make changes that reflect immediately on every table." },
    { icon: PiggyBank, title: "Cost Elimination", desc: "Never pay for menu printing, binding, or design corrections again." },
    { icon: Leaf, title: "Sustainability", desc: "Run a paperless operation and appeal to eco-conscious diners." },
    { icon: Share2, title: "Smart Marketing", desc: "Share your beautiful menu via WhatsApp/Instagram for free reach." },
    { icon: BrainCircuit, title: "Guest Intelligence", desc: "Collect data from every visit to run targeted retention campaigns." },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            The AT Digital Menu Advantage
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {values.map((val, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 backdrop-blur-sm">
                  <val.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-display text-white">{val.title}</h3>
                <p className="text-sm text-slate-400">{val.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Rahul S.", role: "Owner, The Spice Route", quote: "Switching to AT Digital Menu saved us Rs. 80,000 in printing costs this year alone. Updating weekend specials takes 30 seconds." },
    { name: "Priya M.", role: "Manager, Cafe Brew", quote: "Our customers love the beautiful interface. Since we added the WhatsApp ordering feature, our table turnover has improved by 20%." },
    { name: "Vikram K.", role: "Director, Azure Hotels", quote: "The ability to collect guest data and automatically prompt for Google Reviews is a game-changer. Our rating went from 4.2 to 4.7." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Trusted by F&B Leaders
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative">
                <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">"</div>
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-8 relative z-10 leading-relaxed text-lg">"{test.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                     {/* landing page user portrait */}
                     <img src={`https://images.unsplash.com/photo-${1531427186611 + i}?w=100&h=100&fit=crop`} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{test.name}</h4>
                    <p className="text-sm text-slate-500">{test.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">No setup fees. No printing costs. Cancel anytime.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* Starter */}
          <Reveal delay={0}>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Starter</h3>
              <p className="text-sm text-slate-500 mb-6">Perfect for small cafes.</p>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-bold text-slate-900 font-display">Rs.999</span>
                <span className="text-slate-500 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Basic Digital Menu', 'Custom QR Code', 'Up to 50 Items', 'Standard Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full bg-white">Start Free Trial</Button>
            </div>
          </Reveal>

          {/* Professional (Highlighted) */}
          <Reveal delay={0.1}>
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl md:scale-105 relative z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">Professional</h3>
              <p className="text-sm text-slate-400 mb-6">Everything you need to grow.</p>
              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-bold text-white font-display">Rs.2,499</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited Items', 'AI Search & Filtering', 'WhatsApp Integration', 'Basic Analytics', 'Google Review Prompts'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Get Professional</Button>
            </div>
          </Reveal>

          {/* Enterprise */}
          <Reveal delay={0.2}>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Enterprise</h3>
              <p className="text-sm text-slate-500 mb-6">For multi-outlet chains.</p>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-bold text-slate-900 font-display">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Multi-outlet Dashboard', 'Bespoke Custom Design', 'POS Integration Options', 'Dedicated Account Manager'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full bg-white">Contact Sales</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { question: "Do my customers need to download an app?", answer: "No, absolutely not. The menu opens instantly in the customer's native mobile browser (Safari, Chrome, etc.) as soon as they scan the QR code or click the link." },
    { question: "How quickly can I update my menu?", answer: "Updates are instant. As soon as you change a price, add a special, or mark an item sold out in your admin panel, it reflects immediately on the live menu." },
    { question: "Can I use my existing photos?", answer: "Yes! You can upload your own high-quality images. If you don't have photos, we also offer professional food photography services as an add-on." },
    { question: "What if my internet goes down?", answer: "The menu is highly optimized and can be cached by the customer's browser. As long as they load it once, they can continue to view the menu even if their connection drops." },
    { question: "Is there a setup fee?", answer: "No, we handle the entire initial setup, menu ingestion, and design formatting for free as part of your subscription." },
    { question: "Can I share my menu on WhatsApp?", answer: "Yes! You get a custom short-link (e.g., menu.yourrestaurant.com) that you can paste into your Instagram bio, send via WhatsApp broadcasts, or embed anywhere online." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">Got questions? We've got answers.</p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Ready to Transform Your Menu?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Join hundreds of restaurants already using AT Digital Menu to increase sales and elevate their dining experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Free menu setup & ingestion</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <span className="font-medium">14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">We've received your request!</h3>
                  <p className="text-slate-600">Our team will contact you within 24 hours to set up your free trial.</p>
                  <Button className="mt-8" onClick={() => setSubmitted(false)} variant="outline">Send another message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">Get Your Free Demo</h3>
                  <div>
                    <Input placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input placeholder="Restaurant Name" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Phone Number" type="tel" required />
                    <Input placeholder="Email Address" type="email" required />
                  </div>
                  <Button type="submit" className="w-full mt-4">
                    Start Free Trial
                  </Button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    No credit card required. Cancel anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white font-display font-bold text-xl">
                AT
              </div>
              <span className="font-display font-bold text-2xl text-white">Digital Menu</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Empowering Every Restaurant With Smarter Menus. We build technology that helps F&B businesses reduce costs, increase sales, and delight their guests.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white">
                IG
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white">
                FB
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-white">
                IN
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 font-display tracking-wide uppercase text-sm">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 font-display tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} AT Digital Menu. All Rights Reserved.</p>
          <p>Designed with ❤️ for the F&B Industry</p>
        </div>
      </div>
    </footer>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TargetMarketSection />
        <ValueSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
