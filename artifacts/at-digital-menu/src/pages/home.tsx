import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-1" : "bg-transparent py-2"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="AT Digital Menu"
              className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
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
      <style dangerouslySetInnerHTML={{__html: `
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
  const BASE = import.meta.env.BASE_URL;
  const features: { icon?: React.ElementType; img?: string; title: string; desc: string }[] = [
    { img: `${BASE}images/custom-design.png`, title: "Professional Custom Design", desc: "Bespoke design matching your brand identity. Mobile-first and beautiful." },
    { img: `${BASE}images/realtime.png`, title: "Instant Real-Time Updates", desc: "Change prices, add items, or fix typos in seconds. Zero downtime." },
    { img: `${BASE}images/qr-access.png`, title: "QR Code + Link Access", desc: "Scannable table QRs and shareable web links for Instagram bios." },
    { img: `${BASE}images/ai-assistant.png`, title: "AI-Powered Assistant", desc: "Voice search, smart recommendations, and dynamic allergen filtering." },
    { img: `${BASE}images/whatsapp.png`, title: "WhatsApp Integration", desc: "Direct ordering and customer queries routed straight to staff phones." },
    { img: `${BASE}images/google-review.png`, title: "Google Review Prompts", desc: "Automated, one-tap review requests post-meal to boost your rating." },
    { img: `${BASE}images/multilang.png`, title: "Multi-Language Support", desc: "Serve international guests effortlessly with auto-translation." },
    { img: `${BASE}images/customer-data.png`, title: "Customer Data Collection", desc: "Capture names, numbers, and visit history to build your CRM." },
    { img: `${BASE}images/analytics.png`, title: "Analytics Dashboard", desc: "See what customers browse, click, and order to optimize your menu." },
    { img: `${BASE}images/social-media.png`, title: "Social Media Links", desc: "Connect your Instagram, Facebook, and YouTube directly in the menu." },
    { img: `${BASE}images/table-reservation.png`, title: "Table Reservation", desc: "Let guests reserve tables directly from the digital menu — no calls needed." },
    { img: `${BASE}images/no-print.png`, title: "Zero Printing Cost", desc: "Eliminate reprinting budgets forever. Pay one flat fee." },
    { img: `${BASE}images/light-dark-mode.png`, title: "Light & Dark Mode", desc: "" },
    { img: `${BASE}images/welcome-sound.png`, title: "Welcome Sound", desc: "" },
    { img: `${BASE}images/coupons.png`, title: "Coupons, Offers & Discounts", desc: "" },
    { img: `${BASE}images/ai-smart-picks.png`, title: "AI Smart Picks", desc: "" },
    { img: `${BASE}images/tap-call-waiter.png`, title: "Tap to Call Waiter", desc: "" },
    { img: `${BASE}images/payment-gateway.png`, title: "Payment Gateway", desc: "" },
    { img: `${BASE}images/admin-panel.png`, title: "Admin Panel", desc: "" },
    { img: `${BASE}images/custom-qr-card.png`, title: "Custom QR Card Design", desc: "" },
    { img: `${BASE}images/google-map.png`, title: "Google Map Integration", desc: "" },
    { img: `${BASE}images/one-tap-call.png`, title: "One Tap Call", desc: "" },
    { img: `${BASE}images/nutritional.png`, title: "Nutritional Content, Allergens & Ingredients", desc: "" },
    { img: `${BASE}images/menu-availability.png`, title: "Live Menu Availability Control", desc: "" },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight md:whitespace-nowrap">
            Smart Menus Built with <span className="text-primary">Smart Features</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-3 group cursor-pointer px-4 py-4 xl:py-3 xl:border-r xl:border-slate-100${(i + 1) % 4 === 0 ? ' xl:border-r-0' : ''}`}>
                <div className="shrink-0">
                  {feature.img ? (
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                    />
                  ) : feature.icon ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/5 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center">
                      <span className="text-xs text-slate-400 font-medium">Soon</span>
                    </div>
                  )}
                </div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 leading-snug">{feature.title}</h3>
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
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Designed for Every{" "}
            <span style={{ color: "#cc7a00" }}>Food & Beverage</span> Business
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {markets.map((market, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <img
                  src={market.img}
                  alt={market.name}
                  className="h-[200px] w-[200px] object-contain mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
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
  const BASE = import.meta.env.BASE_URL;
  const values = [
    { img: `${BASE}images/adv-zero-printing.png`, title: "Zero Printing Cost", line1: "Cut printing costs completely.", line2: "Save ₹1,00,000+ every year." },
    { img: `${BASE}images/adv-instant-control.png`, title: "Instant Control", line1: "Update prices and items instantly.", line2: "Stay in control across all tables." },
    { img: `${BASE}images/adv-ai-insights.png`, title: "AI Insights", line1: "Turn data into smart decisions.", line2: "Boost sales with actionable insights." },
    { img: `${BASE}images/adv-smart-marketing.png`, title: "Smart Marketing", line1: "Promote your menu everywhere.", line2: "Drive traffic via WhatsApp & Instagram." },
    { img: `${BASE}images/adv-touch-free.png`, title: "Touch-Free Dining", line1: "Offer a fully contactless experience.", line2: "Enable access with QR-based menus." },
    { img: `${BASE}images/adv-eco-impact.png`, title: "Eco Impact", line1: "Go completely paperless today.", line2: "Build a strong eco-friendly brand." },
    { img: `${BASE}images/adv-high-engagement.png`, title: "High Engagement", line1: "Capture attention with rich visuals.", line2: "Increase conversions with interactions." },
    { img: `${BASE}images/adv-smart-intelligence.png`, title: "Smart Intelligence", line1: "Understand customer behavior deeply.", line2: "Optimize every interaction effortlessly." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight md:whitespace-nowrap">
            Smarter <span className="text-primary">Operations.</span> Higher <span className="text-primary">Revenue.</span> Stronger <span className="text-primary">Business</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {values.map((val, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="group flex flex-col items-center text-center">
                <img
                  src={val.img}
                  alt={val.title}
                  className="w-36 h-36 object-contain mb-5 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                />
                <h3 className="text-base font-semibold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-900 leading-relaxed text-center md:hidden">{val.line1} {val.line2}</p>
                <p className="hidden md:block text-sm text-slate-900 leading-relaxed text-center">{val.line1}</p>
                <p className="hidden md:block text-sm text-slate-900 leading-relaxed text-center">{val.line2}</p>
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
  const features = [
    "Professional Custom Design",
    "Unlimited Menu Items",
    "QR Code + Link Access",
    "Real-Time Menu Updates",
    "WhatsApp Integration",
    "Google Review Prompts",
    "Multi-Language Support",
    "Customer Data Collection",
    "Analytics Dashboard",
    "Social Media Links",
    "Table Reservation",
    "Zero Printing Cost",
    "Light & Dark Mode",
    "Welcome Sound",
    "Coupons, Offers & Discounts",
    "AI Smart Picks",
    "Tap to Call Waiter",
    "Payment Gateway",
    "Admin Panel",
    "Custom QR Card Design",
    "Google Map Integration",
    "One Tap Call",
    "Nutritional Content, Allergens & Ingredients",
    "Live Menu Availability Control",
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            One Subscription. Complete Business Control.{" "}
            <span className="text-primary">Zero Compromises.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16">

            {/* Left: Plan info */}
            <div className="md:w-72 shrink-0 flex flex-col items-center">
              {/* Logo */}
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="AT Digital Menu"
                className="h-20 w-auto object-contain mb-8"
              />

              {/* Pricing */}
              <div className="flex flex-col gap-2 mb-8 items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-slate-900">₹</span>
                  <span className="text-6xl font-bold text-slate-900 tracking-tight">999</span>
                  <span className="text-slate-900 text-lg font-medium">/ Month</span>
                </div>
                <p className="text-slate-900 text-sm">Billed monthly · Cancel anytime</p>
              </div>

              <Button className="w-full py-4 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 mb-3">
                Get Started Free
              </Button>
              <p className="text-center text-slate-900 text-sm mb-10">7-day free trial · No credit card required</p>

              {/* Trust badges — side by side */}
              <div className="border-t border-slate-100 pt-8 w-full">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-slate-700 text-sm font-medium whitespace-nowrap">Free onboarding &amp; setup</p>
                  <span className="text-slate-300 text-sm">|</span>
                  <p className="text-slate-700 text-sm font-medium whitespace-nowrap">Dedicated support</p>
                </div>
              </div>
            </div>

            {/* Divider between left plan info and features */}
            <div className="hidden md:block w-px bg-slate-100 self-stretch" />

            {/* Right: Features */}
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 text-center w-full">Everything Included in one plan</p>
              {/* Two feature columns with a thin line divider between them */}
              <div className="flex gap-0">
                {/* Left feature column */}
                <div className="flex-1 flex flex-col gap-3 pr-6">
                  {features.slice(0, Math.ceil(features.length / 2)).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5 leading-none">·</span>
                      <p className="text-slate-700 text-base leading-snug">{feature}</p>
                    </div>
                  ))}
                </div>
                {/* Thin divider */}
                <div className="w-px bg-slate-200 self-stretch shrink-0" />
                {/* Right feature column */}
                <div className="flex-1 flex flex-col gap-3 pl-6">
                  {features.slice(Math.ceil(features.length / 2)).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5 leading-none">·</span>
                      <p className="text-slate-700 text-base leading-snug">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

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
  const [phoneValue, setPhoneValue] = useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  const businessCategories = [
    "Fine Dining Restaurants",
    "Cafes",
    "Bars, Pubs & Lounges",
    "Hotels & Resorts",
    "Cloud Kitchens",
    "QSR & Fast Food",
    "Bakeries & Sweets",
    "Dhaba & Street Food",
    "Others (Let's connect to discuss)",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Ready to Grow? <span className="text-primary">Your Smarter Menu </span><span className="text-slate-900">Starts Here</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Copy & trust points — shown below form on mobile */}
          <Reveal className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-5 leading-tight">
              Transform &amp; Digitalize Your Menu
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Join hundreds of businesses using AT Digital Menu to increase sales, streamline operations, and elevate customer experience.
            </p>

            {/* Connect with us */}
            <h3 className="text-lg font-bold text-slate-900 mb-4">Connect with us</h3>
            <div className="space-y-4 mb-10">
              <a href="tel:+919619523254" className="flex items-center gap-3 group">
                <img src={`${import.meta.env.BASE_URL}images/call-icon.png`} alt="Phone" className="w-7 h-7 object-contain shrink-0" />
                <span className="text-slate-700 font-medium group-hover:text-primary transition-colors">+91 9619523254</span>
              </a>
              <a href="mailto:info@atdigitalmenu.com" className="flex items-center gap-3 group">
                <img src={`${import.meta.env.BASE_URL}images/mail-icon.png`} alt="Email" className="w-7 h-7 object-contain shrink-0" />
                <span className="text-slate-700 font-medium group-hover:text-primary transition-colors">info@atdigitalmenu.com</span>
              </a>
              <div className="flex items-start gap-3">
                <img src={`${import.meta.env.BASE_URL}images/location-icon.png`} alt="Location" className="w-7 h-7 object-contain shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium leading-relaxed">205/ Kairali Park, Katemanivali, Kalyan East, 421306</span>
              </div>
            </div>

            {/* Follow our socials */}
            <h3 className="text-lg font-bold text-slate-900 mb-4">Follow our socials</h3>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform duration-200">
                <img src={`${import.meta.env.BASE_URL}images/instagram.png`} alt="Instagram" className="w-9 h-9 object-contain" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform duration-200">
                <img src={`${import.meta.env.BASE_URL}images/facebook.png`} alt="Facebook" className="w-9 h-9 object-contain" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:scale-110 transition-transform duration-200">
                <img src={`${import.meta.env.BASE_URL}images/youtube.png`} alt="YouTube" className="w-9 h-9 object-contain" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-200">
                <img src={`${import.meta.env.BASE_URL}images/linkedin.png`} alt="LinkedIn" className="w-9 h-9 object-contain" />
              </a>
            </div>
          </Reveal>

          {/* Right: Form — shown first on mobile */}
          <Reveal delay={0.2} className="order-1 md:order-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">We've received your request!</h3>
                <p className="text-slate-600 mb-8">Our team will contact you within 24 hours to set up your free trial.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Send another message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <Input placeholder="Your full name" required />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Brand / Business Name</label>
                  <Input placeholder="Your restaurant or brand name" required />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Business Category</label>
                  <select
                    required
                    defaultValue=""
                    className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your category</option>
                    {businessCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <PhoneInput
                    defaultCountry="IN"
                    value={phoneValue}
                    onChange={setPhoneValue}
                    placeholder="Phone number"
                    className="phone-input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <Input placeholder="your@email.com" type="email" />
                </div>

                <Button type="submit" className="w-full text-base font-bold py-4 mt-2">
                  Launch Your Digital Menu
                </Button>
                <p className="text-xs text-center text-slate-500">
                  No credit card required. Free setup included. Cancel anytime.
                </p>
              </form>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  const BASE = import.meta.env.BASE_URL;
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Live Demo", href: "#" },
    { name: "Why AT Digital Menu", href: "#" },
    { name: "Features", href: "#features" },
    { name: "For", href: "#" },
    { name: "Advantage", href: "#" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refunds & Cancellations", href: "#" },
    { name: "Contact", href: "#contact" },
  ];
  const socials = [
    { img: `${BASE}images/instagram.png`, label: "Instagram" },
    { img: `${BASE}images/facebook.png`, label: "Facebook" },
    { img: `${BASE}images/youtube.png`, label: "YouTube" },
    { img: `${BASE}images/linkedin.png`, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white text-slate-600 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src={`${BASE}images/logo.png`}
                alt="AT Digital Menu"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-6">
              We transform traditional menus into powerful digital platforms that drive business growth, boost marketing reach, and elevate every customer experience.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ img, label }) => (
                <a key={label} href="#" aria-label={label} className="hover:scale-110 transition-transform duration-200">
                  <img src={img} alt={label} className="w-8 h-8 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 font-display tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} className="text-slate-500 hover:text-primary transition-colors text-sm">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 font-display tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(({ name, href }) => (
                <li key={name}>
                  <a href={href} className="text-slate-500 hover:text-primary transition-colors text-sm">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} AT Digital Menu. All Rights Reserved. Product developed by{" "}
            <a
              href="https://airavatatechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              AIRAVATA TECHNOLOGIES
            </a>
          </p>
          <p>Designed with 💛 for the F&B Industry</p>
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919619523254"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform duration-200 drop-shadow-xl"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/whatsapp-icon.png`}
          alt="WhatsApp"
          className="w-14 h-14 object-contain"
        />
      </a>
    </div>
  );
}
