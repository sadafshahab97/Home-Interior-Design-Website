/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUp, MessageCircle, Star, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-text-primary bg-bg-primary">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-primary/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold text-accent tracking-wide">
            Lumina<span className="italic font-light">Spaces</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-accent" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-bg-primary shadow-lg py-4 px-4 flex flex-col space-y-4">
            {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                Redefining <br />
                <span className="italic font-light text-accent/80">Modern Spaces</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed opacity-90">
                Elevate your environment with premium WPC/PVC solutions and bespoke interior design. The best interior designer in Karachi, crafting quiet luxury for your home.
              </p>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-bg-primary uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors rounded-sm"
              >
                Book Consultation
              </a>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="relative h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Elegant modern living room" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeInUp>
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Interior design details" 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeInUp>
              <FadeInUp delay={0.2}>
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-sm font-medium ml-2">4.9 Google Rating</span>
                </div>
                <h2 className="text-4xl md:text-5xl mb-6">Excellence in Every Detail</h2>
                <p className="mb-6 leading-relaxed opacity-90">
                  As the premier interior design studio in Karachi, we specialize in transforming ordinary rooms into extraordinary sanctuaries. Our philosophy of 'Quiet Luxury' ensures that every space we touch exudes elegance, comfort, and timeless appeal.
                </p>
                <p className="leading-relaxed opacity-90">
                  From comprehensive home renovation in Yaseenabad to bespoke commercial fit-outs, our 4.9-star rated team brings unparalleled expertise and meticulous attention to detail to every project.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4">Our Expertise</h2>
              <p className="max-w-2xl mx-auto opacity-90">Specialized solutions for sophisticated interiors.</p>
            </div>
          </FadeInUp>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "WPC & PVC Wall Panels",
                desc: "Discover the finest modern wall panels in Pakistan. Our WPC and PVC solutions offer durability, moisture resistance, and stunning aesthetics to elevate any room's character.",
                img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Luxury SPC Flooring",
                desc: "Experience the pinnacle of luxury flooring in Karachi. Our SPC (Stone Plastic Composite) and wooden flooring options provide the perfect foundation of elegance and resilience.",
                img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Home Renovation",
                desc: "Comprehensive home renovation services in Yaseenabad and across Karachi. We handle everything from conceptual design to final execution, ensuring a seamless transformation.",
                img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, index) => (
              <FadeInUp key={index} delay={index * 0.2}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl mb-4">{service.title}</h3>
                    <p className="text-sm leading-relaxed opacity-80">{service.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-accent text-bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                  <h2 className="text-4xl md:text-5xl mb-4 text-bg-primary">Selected Works</h2>
                  <p className="opacity-80 max-w-md">A glimpse into our portfolio of refined residential and commercial spaces.</p>
                </div>
                <a href="#" className="hidden md:inline-block uppercase tracking-widest text-sm border-b border-bg-primary/30 hover:border-bg-primary pb-1 transition-colors">
                  View All Projects
                </a>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600607687644-aac4c15ac28b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              ].map((img, index) => (
                <FadeInUp key={index} delay={index * 0.1}>
                  <div className={`relative overflow-hidden group rounded-lg ${index === 0 || index === 3 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
                    <img 
                      src={img} 
                      alt={`Portfolio piece ${index + 1}`} 
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </FadeInUp>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <a href="#" className="inline-block uppercase tracking-widest text-sm border-b border-bg-primary/30 hover:border-bg-primary pb-1 transition-colors">
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <div className="mb-8 flex justify-center">
              <MessageCircle className="w-12 h-12 text-accent/20" />
            </div>
            <blockquote className="text-2xl md:text-4xl font-serif leading-snug mb-8">
              "They completely transformed our Yaseenabad home. The attention to detail in the PVC wall paneling and the quality of the luxury flooring exceeded all our expectations. Truly the best interior designers in Karachi."
            </blockquote>
            <cite className="not-italic uppercase tracking-widest text-sm font-medium">
              — Sarah A., Residential Client
            </cite>
          </FadeInUp>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white border-t border-accent/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Your Space?</h2>
              <p className="mb-8 opacity-80">Contact us today to discuss your vision and discover how our premium interior solutions can bring it to life.</p>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white uppercase tracking-widest text-sm hover:bg-[#20bd5a] transition-colors rounded-sm shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </a>
            </FadeInUp>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-accent text-bg-primary pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-serif text-2xl font-bold mb-6">
                Lumina<span className="italic font-light">Spaces</span>
              </div>
              <p className="opacity-70 max-w-sm mb-8 leading-relaxed">
                Curating quiet luxury for modern living. Specializing in premium wall panels, luxury flooring, and bespoke interior design across Karachi.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
                <a href="#" className="opacity-70 hover:opacity-100 transition-opacity"><Facebook size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="uppercase tracking-widest text-sm font-semibold mb-6 opacity-50">Contact</h4>
              <ul className="space-y-4 opacity-80">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                  <span>Suite 402, Design Avenue<br />Yaseenabad, Karachi</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 flex-shrink-0" />
                  <span>+92 300 1234567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 flex-shrink-0" />
                  <span>hello@luminaspaces.pk</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase tracking-widest text-sm font-semibold mb-6 opacity-50">Quick Links</h4>
              <ul className="space-y-3 opacity-80">
                <li><a href="#services" className="hover:underline underline-offset-4">Our Services</a></li>
                <li><a href="#portfolio" className="hover:underline underline-offset-4">Portfolio</a></li>
                <li><a href="#about" className="hover:underline underline-offset-4">About Us</a></li>
                <li><a href="#" className="hover:underline underline-offset-4">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-bg-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-50 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LuminaSpaces Interior Design. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="flex items-center text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            >
              Back to Top <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
