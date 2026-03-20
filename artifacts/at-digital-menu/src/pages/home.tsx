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
    <section className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-6 items-center">

          {/* Text column — padded on all sizes */}
          <Reveal className="max-w-2xl order-2 lg:order-1 px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-primary tracking-wide mb-3 whitespace-nowrap">With AI Smart Menus</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 leading-[1.15] mb-6 font-display">
              <span className="whitespace-nowrap">Replace <span className="relative inline-block" style={{ color: "#3d3d3d" }}>
                Paper Menus
                <span className="strike-line" />
              </span></span><br />
              With AI Smart Menus<br />
              <span className="relative inline-block" style={{ color: "#3d3d3d" }}>
                Stop Printing.
                <span className="strike-line strike-line-delay" />
              </span><br />
              <span className="text-primary">Start Digitalizing.</span>
            </h1>
            <style dangerouslySetInnerHTML={{__html: `
              .strike-line {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                height: 5px;
                width: 0%;
                background: hsl(var(--primary));
                border-radius: 2px;
                animation: strikeThrough 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
              }
              .strike-line-delay {
                animation-delay: 1.3s;
              }
              @keyframes strikeThrough {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}} />
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
          </Reveal>

          {/* Image column — zero padding on mobile so phone+QR go full-bleed edge-to-edge */}
          <Reveal delay={0.2} className="flex items-start order-1 lg:order-2 lg:-ml-20 w-full">
            {/* Phone */}
            <img
              src={`${import.meta.env.BASE_URL}images/hero-phone.png`}
              alt="AT Digital Menu on Smartphone"
              className="-ml-10 w-[78%] sm:ml-0 sm:w-full sm:max-w-[400px] lg:max-w-[560px] object-contain flex-shrink-0"
              style={{ mixBlendMode: "multiply" }}
            />
            {/* QR column — flex-1 on mobile fills remaining width, fixed on desktop */}
            <div className="flex-1 sm:flex-none flex flex-col gap-1 sm:gap-2 sm:flex-shrink-0 -ml-10 sm:-ml-8 lg:-ml-16 self-start mt-2 sm:mt-8 pr-2 sm:pr-0">
              <img
                src={`${import.meta.env.BASE_URL}images/qr-card.png`}
                alt="Scan to View Menu QR Card"
                className="w-full sm:w-[110px] lg:w-[270px] object-contain shadow-lg"
              />
              <Button className="w-full text-[9px] sm:text-[10px] lg:text-base font-bold rounded-full py-1 lg:py-2 h-auto">
                Tap / Scan for Demo
              </Button>
              <div className="pt-0.5 sm:pt-1 text-center sm:text-left">
                <p className="text-[8px] sm:text-[9px] lg:text-sm font-bold text-slate-900 mb-0.5">Get yours today</p>
                <div className="font-mono text-[7px] sm:text-[8px] lg:text-sm flex items-center justify-center sm:justify-start flex-wrap">
                  <span className="text-slate-700 whitespace-nowrap">atdigitalmenu.com /</span>
                  <span style={{ display: 'inline-block', width: '9ch', overflow: 'hidden' }}>
                    <span className="typewriter-brand text-primary font-semibold whitespace-nowrap border-r border-primary">yourbrand</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <style dangerouslySetInnerHTML={{__html: `
            .typewriter-brand {
              display: inline-block;
              overflow: hidden;
              width: 0;
              animation: brandType 2.5s steps(9) 0.4s infinite;
            }
            @keyframes brandType {
              0%   { width: 0 }
              45%  { width: 9ch }
              85%  { width: 9ch }
              100% { width: 0 }
            }
          `}} />

        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const BASE = import.meta.env.BASE_URL;
  const problems = [
    {
      img: `${BASE}images/prob-high-cost.png`,
      title: "High Operational Costs",
      desc: "Reprints and design updates silently drain ₹1L+ a year. Every change costs money you shouldn't be spending.",
    },
    {
      img: `${BASE}images/prob-no-realtime.png`,
      title: "No Real-Time Control",
      desc: "Sold out? Too bad — your menu doesn't know that yet. Updates lag by hours while customers stay confused.",
    },
    {
      img: `${BASE}images/prob-missed-revenue.png`,
      title: "Missed Revenue",
      desc: "No combos. No suggestions. No upsells. Customers order less because your menu never asks for more.",
    },
    {
      img: `${BASE}images/prob-zero-marketing.png`,
      title: "Zero Marketing Reach",
      desc: "A menu that can't be shared is invisible. No WhatsApp. No Instagram. No reach beyond your four walls.",
    },
    {
      img: `${BASE}images/prob-no-insights.png`,
      title: "No Customer Insights",
      desc: "No order history. No preferences. No idea who your best customers are. You can't grow what you can't measure.",
    },
    {
      emoji: "🎨",
      title: "Poor Experience",
      desc: "Static, text-heavy menus don't impress. Today's customers expect something that looks as good as the food.",
    },
    {
      emoji: "🔄",
      title: "Inefficient Operations",
      desc: "Your staff explains what the menu should. Outdated info creates confusion, slows service, and piles on errors.",
    },
    {
      emoji: "🌱",
      title: "Limited Scalability",
      desc: "Hard to stay consistent across outlets. Paper menus pile up, wear out, and quietly hurt your brand.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Physical Menus Are Costing You <span className="text-primary">More Than You Think</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {problems.map((prob, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="group flex flex-col items-center text-center">
                {prob.img ? (
                  <img src={prob.img} alt={prob.title} className="w-36 h-36 object-contain mb-5 group-hover:scale-110 transition-transform duration-300" style={{ mixBlendMode: "multiply" }} />
                ) : (
                  <div className="text-5xl mb-5">{prob.emoji}</div>
                )}
                <h3 className="text-base font-semibold text-slate-900 mb-2">{prob.title}</h3>
                <p className="text-sm text-slate-900 leading-relaxed text-center">{prob.desc}</p>
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
    { name: "Pricing", href: "#pricing" },
  ];
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refunds & Cancellations", href: "#" },
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
            <p className="text-slate-900 max-w-sm leading-relaxed mb-6">
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
                  <a href={href} className="text-slate-900 hover:text-primary transition-colors text-sm">{name}</a>
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
                  <a href={href} className="text-slate-900 hover:text-primary transition-colors text-sm">{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-sm text-slate-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} AT Digital Menu. All Rights Reserved.</p>
            <p>
              Product by{" "}
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
        <PricingSection />
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
