'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Menu, X, Shield, Wifi, Camera, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      id: 1,
      title: 'CCTV Installation',
      description: 'State-of-the-art surveillance systems designed to protect your property with crystal-clear monitoring and intelligent alerts.',
      icon: Camera,
      features: ['HD/4K Cameras', 'Night Vision', 'Cloud Storage', 'Mobile App Access']
    },
    {
      id: 2,
      title: 'WiFi Installation',
      description: 'High-speed wireless connectivity engineered for seamless performance across your entire space.',
      icon: Wifi,
      features: ['Mesh Networks', 'Fast Speeds', 'Extended Coverage', 'Easy Management']
    },
    {
      id: 3,
      title: 'Cyber Security',
      description: 'Comprehensive digital protection for your business and personal data with industry-leading security protocols.',
      icon: Shield,
      features: ['Threat Detection', 'Data Encryption', '24/7 Monitoring', 'Expert Support']
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Serene Technologies </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="#about" className="hover:text-primary transition-colors">About</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="#services" className="block px-4 py-2 hover:bg-secondary rounded-lg">Services</Link>
              <Link href="#about" className="block px-4 py-2 hover:bg-secondary rounded-lg">About</Link>
              <Link href="#contact" className="block px-4 py-2 hover:bg-secondary rounded-lg">Contact</Link>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-balance">
                Where deep <span className="text-primary">tech</span> meets a human mindset
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are a collective of passionate technologists brought together by our rare tech knowledge, our human-centric mindset and a passion for using technology and digital solutions to drive business transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="h-12 px-8 border-primary text-primary hover:bg-primary/10 bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Shield className="w-24 h-24 mx-auto text-primary/40" />
                    <p className="text-sm text-muted-foreground">Secure • Reliable • Intelligent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">Our Collection</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Smart solutions for every need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore how we help businesses transform with cutting-edge technology and expert implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden group">
                  <div className="p-8">
                    <div className="mb-6 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <p key={idx} className="text-sm text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </p>
                      ))}
                    </div>
                    <button className="text-primary hover:gap-2 transition-all flex items-center gap-1 font-semibold">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-semibold mb-4">Join Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Want to be a techie too?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are the tech collective experienced in developing comprehensive digital solutions. We provide support every step of the way to drive business transformation.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
            Join the collective
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in touch with us</h2>
              <p className="text-muted-foreground mb-8">
                Have questions or ready to get started? Our team is here to help. Reach out and let's discuss how we can transform your digital presence.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">hello@Serene Technologies .ai</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">123 Tech Boulevard, Innovation City</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border border-border p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service</label>
                  <select className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary outline-none transition-colors text-foreground">
                    <option>Select a service</option>
                    <option>CCTV Installation</option>
                    <option>WiFi Installation</option>
                    <option>Cyber Security</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/40 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-primary">Serene Technologies </span>
              </div>
              <p className="text-sm text-muted-foreground">Smart technology solutions for the modern world.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">CCTV Installation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">WiFi Installation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cyber Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Serene Technologies . All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
