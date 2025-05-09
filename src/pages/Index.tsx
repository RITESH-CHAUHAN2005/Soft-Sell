
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  DollarSign,
  CheckCircle,
  Shield,
  Zap,
  Lightbulb,
  Coins,
  ArrowRight,
  MessageCircle,
  Mail,
  Users,
  Code,
  FileText,
  Layout,
  Pen,
  Calendar as CalendarIcon,
  Download,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import ChatWidget from "@/components/ChatWidget";

const brandLogos = [
  "Microsoft", "Adobe", "Autodesk", "Oracle", "SAP"
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "Microsoft Office",
    message: "",
  });
  const [activeTab, setActiveTab] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set dark mode permanently on initial render
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Success notification
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      licenseType: "Microsoft Office",
      message: "",
    });
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Benefits", id: "benefits" },
    { name: "Services", id: "services" },
    { name: "Workshops", id: "workshops" },
    { name: "Community", id: "community" },
    { name: "News", id: "news" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-indigo-950/90 backdrop-blur-md px-4 py-6 border-b border-indigo-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-500">
              <span className="text-amber-400">Soft</span>Sell
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium hover:text-amber-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button className="border-white text-[#0F172A] bg-white hover:bg-amber-400/20 hover:text-white transition-colors duration-200 px-4 py-2"
            >Get Started</Button>
          </div>

          {/* Mobile Navigation Trigger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-indigo-900 border-b border-indigo-800 shadow-lg py-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium hover:text-amber-400 transition-colors py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button className="mt-2">Get Started</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-indigo-900 dark:bg-indigo-950 text-white py-20 pt-28">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair leading-tight">
              Unlock Hidden Value in{' '}
              <span className="bg-amber-400 text-indigo-900 px-2 leading-none inline-block">
                Your Unused
              </span>{' '}
              Software
            </h1>

            <p className="text-lg mb-8 text-indigo-100">
              Turn your surplus software licenses into instant cash with SoftSell.
              Fast, secure, and fully transparent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-400 text-indigo-900 font-bold border border-amber-400 hover:bg-transparent hover:text-[#fbbf24] hover:border-[#fbbf24] transition-colors duration-200"
              >
                Get a Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-[#0F172A] bg-white hover:bg-amber-400/20 hover:text-white transition-colors duration-200 px-4 py-2">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-indigo-800/50 p-6 rounded-3xl shadow-xl backdrop-blur-sm relative z-10">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&fit=crop&auto=format"
                alt="Software License"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-indigo-700 p-3 rounded-xl shadow-lg">
                <div className="text-white font-bold">Video Editing</div>
                <div className="text-xs text-indigo-200">Professional software</div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 rotate-12 bg-amber-300 h-32 w-32 rounded-full -z-10 blur-xl opacity-60"></div>
            <div className="absolute bottom-1/4 -left-8 bg-indigo-600 h-24 w-24 rounded-full -z-10 blur-xl opacity-40"></div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-indigo-900/30 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-400 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={index}
                className="text-gray-300 font-bold text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Goals Section */}
      <section id="benefits" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold mb-4 font-playfair"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Benefits of Working with SoftSell
            </motion.h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We make reselling unused software licenses simple, secure, and profitable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="h-12 w-12 text-blue-500" />,
                title: "Instant Valuations",
                description: "Get an immediate quote for your software licenses - no waiting around."
              },
              {
                icon: <Shield className="h-12 w-12 text-indigo-500" />,
                title: "Trusted Resale Experts",
                description: "Our team has over 10 years of experience in the software license market."
              },
              {
                icon: <Zap className="h-12 w-12 text-amber-500" />,
                title: "Secure Fast Payments",
                description: "Receive payment within 24 hours of license verification."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-indigo-900/30 p-8 rounded-xl shadow-md border border-indigo-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center p-3 mb-4 rounded-lg bg-indigo-800/50">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-indigo-950/50 rounded-3xl mx-4 my-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-2/5 mb-8 md:mb-0 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&auto=format"
              alt="Professional with clipboard"
              className="rounded-full border-8 border-indigo-800 shadow-xl mx-auto w-64 h-64 object-cover"
            />
            <div className="absolute -z-10 inset-0 rounded-full blur-3xl bg-indigo-700/30 transform scale-75 translate-x-4 translate-y-4"></div>
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
              <div className="text-xs text-indigo-200 rotate-[30deg]">TRUSTED • FAST • SECURE • PROFESSIONAL</div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-3/5 md:pl-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              Thousands Of <span className="bg-amber-400 px-2 text-indigo-900">Software Licenses</span> Bought & Sold Every Year
            </h2>
            <p className="mb-6 text-gray-300">
              Join thousands of satisfied clients who have successfully converted their unused software assets into cash with our market-leading platform.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" /> Fair market valuations that beat competitors
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" /> Complete legal compliance maintained
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" /> Trusted by Fortune 500 companies
              </li>
            </ul>
            <Button className="bg-amber-400 text-indigo-900 font-bold border border-amber-400 hover:bg-transparent hover:text-[#fbbf24] hover:border-[#fbbf24] transition-colors duration-200"
            >
              Get Your Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Explore Our World's Best Services</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We specialize in reselling a wide range of software licenses across different categories
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-lg grid-cols-4 mx-auto">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All</TabsTrigger>
              <TabsTrigger value="office" onClick={() => setActiveTab("office")}>Office</TabsTrigger>
              <TabsTrigger value="design" onClick={() => setActiveTab("design")}>Design</TabsTrigger>
              <TabsTrigger value="dev" onClick={() => setActiveTab("dev")}>Developer</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layout className="h-8 w-8 text-white" />,
                category: "office",
                title: "Office & Productivity",
                color: "bg-pink-500",
                description: "Microsoft Office, Google Workspace, and other productivity suites."
              },
              {
                icon: <Pen className="h-8 w-8 text-white" />,
                category: "design",
                title: "Design & Creative",
                color: "bg-amber-500",
                description: "Adobe Creative Cloud, Corel, and other design tools."
              },
              {
                icon: <FileText className="h-8 w-8 text-white" />,
                category: "office",
                title: "Business Tools",
                color: "bg-green-500",
                description: "CRM, accounting, and enterprise management software."
              },
              {
                icon: <Code className="h-8 w-8 text-white" />,
                category: "dev",
                title: "Developer Tools",
                color: "bg-indigo-500",
                description: "IDEs, hosting licenses, and development platforms."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`bg-indigo-900/30 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${activeTab !== "all" && service.category !== activeTab ? "opacity-50" : ""
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: activeTab !== "all" && service.category !== activeTab ? 0.5 : 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`${service.color} p-4 flex items-center justify-between`}>
                  <div className="flex items-center">
                    <div className="rounded-full p-2 bg-white/20 mr-3">
                      {service.icon}
                    </div>
                    <span className="text-white font-medium">
                      {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                    </span>
                  </div>
                  <div className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                    Popular
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-heading">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-500 text-sm">Sell Now</span>
                    <div className="flex">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                      <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="mt-8 border-white text-[#0F172A] bg-white hover:bg-amber-400/20 transition-colors duration-200"
            >
              View All Services
            </Button>


          </div>
        </div>
      </section>

      {/* Free Valuation Section */}
      <section id="workshops" className="bg-indigo-900/20 py-16 rounded-2xl mx-4 my-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-playfair">Join Our Free Workshops</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=500&h=500&fit=crop&auto=format"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div className="md:w-3/5">
              <p className="mb-8 text-gray-300">
                Learn how to maximize the value of your unused software licenses and ensure a smooth, secure transaction process.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-red-900/30 p-3 rounded-full mr-4">
                    <CalendarIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 font-heading">Expert-Led Sessions</h3>
                    <p className="text-gray-300 text-sm">Learn from industry professionals</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 font-heading">Live Q&A</h3>
                    <p className="text-gray-300 text-sm">Get your questions answered</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-900/30 p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 font-heading">Free Resources</h3>
                    <p className="text-gray-300 text-sm">Guides and checklists included</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-900/30 p-3 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 font-heading">Networking</h3>
                    <p className="text-gray-300 text-sm">Connect with other professionals</p>
                  </div>
                </div>
              </div>

              <Button className="bg-amber-400 text-indigo-900 font-bold border border-amber-400 hover:bg-transparent hover:text-[#fbbf24] hover:border-[#fbbf24] transition-colors duration-200"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div>
        <section
          className="bg-indigo-900 text-white py-12 my-8 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: "url('/banner.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center bg-cover bg-center rounded-lg">
          <div className="mb-6 md:mb-0 w-full md:w-auto">
            <h3 className="text-3xl font-bold font-playfair">
              <span className="bg-amber-400 text-indigo-900 px-2">Thousands Of</span> Licenses
              <br />Resold By Industry Experts
            </h3>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="text-center">
              <h4 className="text-5xl font-bold text-white-400">45K+</h4>
              <p className=" text-xl font-bold text-indigo-200">Satisfied Clients</p>
            </div>

            <div className="text-center">
              <h4 className="text-5xl font-bold text-white-400">328+</h4>
              <p className="text-xl font-bold text-indigo-200">Companies Served</p>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Team Section */ }
  <section className=" text-white py-16 my-8 rounded-xl">
    <div className="container mx-auto px-4 border border-[#4b4b9c] rounded-md p-4 gap-4 ">
      <div className="text-center mb-12">
        <span className="bg-indigo-800 text-white text-xs px-3 py-1 rounded-full uppercase">Meet Our Team</span>
        <h2 className="text-3xl font-bold mt-3 mb-4 font-playfair">
          Our Top Class & Professional<br />Advisors In One Place
        </h2>
      </div>

      <div className="flex justify-center mb-16 relative">
        <div className="relative z-10">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format"
            alt="Team member"
            className="rounded-full border-4 border-white w-48 h-48 object-cover"
          />
          <div className="absolute -bottom-4 left-0 right-0 mx-auto bg-amber-400 text-indigo-900 font-bold w-32 text-center py-1 rounded-full">
            Marketing
          </div>
          <div className="absolute -z-10 top-4 -left-4 w-24 h-24 bg-amber-300 rounded-full blur-xl opacity-60"></div>
        </div>

        <div className="flex space-x-3 absolute bottom-0 left-0 right-0 justify-center">
          <button className="w-2 h-2 bg-indigo-500 rounded-full"></button>
          <button className="w-3 h-3 bg-white rounded-full"></button>
          <button className="w-2 h-2 bg-indigo-500 rounded-full"></button>
          <button className="w-2 h-2 bg-indigo-500 rounded-full"></button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`w-12 h-12 rounded-full overflow-hidden ${i === 1 ? 'border-2 border-amber-400' : ''}`}>
            <img
              src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`}
              alt={`Team member ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* News Section */ }
  <section id="news" className="bg-indigo-900 text-white py-16 my-8 rounded-xl">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="bg-indigo-800 text-white text-xs px-3 py-1 rounded-full uppercase">Blog & News</span>
        <h2 className="text-3xl font-bold mt-3 mb-4 font-playfair">Our Latest News Feed</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&auto=format",
            title: "How To Complete License Resale In 4 Easy Steps",
            tag: "Process"
          },
          {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&auto=format",
            title: "The Most Valuable Enterprise Software Licenses",
            tag: "Market"
          },
          {
            image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=300&h=200&fit=crop&auto=format",
            title: "Legal FAQs For Software License Trading",
            tag: "Legal"
          },
          {
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=300&h=200&fit=crop&auto=format",
            title: "How We Keep Your License Sales Secure",
            tag: "Security"
          }
        ].map((news, index) => (
          <div key={index} className="bg-indigo-800 rounded-xl overflow-hidden shadow-md">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6 text-white">
              <span className="bg-amber-400 text-indigo-900 text-xs px-2 py-1 rounded-full">{news.tag}</span>
              <h3 className="font-bold mt-3 mb-2 font-heading">{news.title}</h3>
              <a href="#" className="text-amber-400 text-sm flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Dual CTA Section */ }
  <section id="community" className="py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 font-playfair">Join Our Community</h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 md:mx-32">
        <div className="bg-indigo-900/30 p-6 rounded-xl shadow-md border border-indigo-700">
          <div className="flex items-center mb-4">
            <div className="bg-amber-900/30 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold font-heading">Become a Seller</h3>
          </div>
          <p className="text-gray-300 mt-8 mb-10">
            Turn your unused software licenses into cash. Our platform ensures maximum value and secure transactions.
          </p>
          <Button className="w-full bg-indigo-600 text-white border border-indigo-600 hover:bg-white hover:text-indigo-600 hover:border-indigo-600 transition-colors duration-200">
            Apply Now
          </Button>
        </div>

        <div className="bg-indigo-900/30 p-6 rounded-xl shadow-md border border-indigo-700">
          <div className="flex items-center mb-4">
            <div className="bg-blue-900/30 p-3 rounded-full mr-4">
              <Download className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold font-heading">Become a Buyer</h3>
          </div>
          <p className="text-gray-300 mt-8 mb-10">
            Access verified software licenses at competitive prices. Save on your software purchases.
          </p>
          <Button className="w-full bg-indigo-600 text-white border border-indigo-600 hover:bg-white hover:text-indigo-600 hover:border-indigo-600 transition-colors duration-200">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="bg-indigo-900 text-white py-12 my-8 rounded-xl overflow-hidden relative ">
        <div className=" grid grid-cols-3 md:grid-cols-3 gap-6 mt-12 md:mx-20">
          {[
            {
              image: "https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=400&fit=crop&auto=format",
              title: "License Trading Network",
              members: "1.4k members"
            },
            {
              image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&fit=crop&auto=format",
              title: "IT Managers Forum",
              members: "956 members"
            },
            {
              image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&fit=crop&auto=format",
              title: "Enterprise Software Group",
              members: "2.1k members"
            }
          ].map((group, index) => (
            <div key={index} className="bg-indigo-700/30 rounded-xl overflow-hidden shadow-md">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2 font-heading">{group.title}</h3>
                <p className="text-gray-300 text-sm">{group.members}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Contact Form */ }
  <section id="contact" className="container mx-auto px-4 py-20">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 font-playfair">Get in Touch</h2>
        <p className="text-slate-300">
          Have questions or ready to get started? Contact us today.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-indigo-900/30 p-8 rounded-lg shadow-lg border border-indigo-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Your name"
              required
              className="bg-indigo-800/50 border-indigo-700"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="your.email@example.com"
              required
              className="bg-indigo-800/50 border-indigo-700"
            />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleFormChange}
              placeholder="Your company"
              className="bg-indigo-800/50 border-indigo-700"
            />
          </div>
          <div>
            <Label htmlFor="licenseType">License Type</Label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-indigo-700 rounded-md bg-indigo-800/50 text-white"
            >
              <option value="Microsoft Office">Microsoft Office</option>
              <option value="Adobe Creative Cloud">Adobe Creative Cloud</option>
              <option value="AutoCAD">AutoCAD</option>
              <option value="Windows OS">Windows OS</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Tell us about your software licenses and any questions you have"
              rows={4}
              className="bg-indigo-800/50 border-indigo-700"
            />
          </div>
        </div>
        <Button type="submit" className=" w-full border-white text-[#0F172A] bg-white hover:bg-amber-500 hover:text-white transition-colors duration-200 px-4 py-2"
        >Send Inquiry</Button>
      </motion.form>
    </div>
  </section>

  {/* Footer */ }
  <footer className="bg-indigo-950 text-white py-10 border-t border-indigo-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 font-heading">
            <span className="text-amber-400">Soft</span>Sell
          </h2>
          <p className="mb-4 text-gray-300">
            Turn unused software licenses into cash. Fast, secure, and hassle-free.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 font-heading">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 font-heading">Contact</h3>
          <p className="mb-2 text-gray-300">info@softsell.com</p>
          <p className="mb-4 text-gray-300">123 Software Lane, Digital City</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-indigo-900 mt-8 pt-8 text-center text-sm text-gray-300">
        <p>© 2025 SoftSell. All rights reserved.</p>
      </div>
    </div>
  </footer>

  {/* Chat Widget */ }
  <ChatWidget />
    </div >
  );
};

export default Index;
