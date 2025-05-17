"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight, Clock, MapPin, Phone, Star, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "../components/mobile-menu"
import logo from "../assets/logo1.png"
import freight from '../assets/Freight.jpg'
import HomeLifts from "../assets/Home.png"
import Panoramic from '../assets/Panoramic.jpeg'
import Passenger from '../assets/Passenger.jpg'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [contactForm, setContactForm] = useState({
    name: '',
    emailFrom: '',
    serviece: '',
    message: '',
    mobile: ''
  })

  const handleContactForm = (value: any, target: string) => {
    setContactForm({ ...contactForm, [target]: value } as { name: string; emailFrom: string; serviece: string; message: string; mobile: string });
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target)
    // emailjs.send("service_z2v1koy","template_3g333cm",);
    // emailjs.sendForm('service_z2v1koy', 'template_3g333cm', e.target, 'l0o5lraDJGSJwyuBO').then(() => {
    //   // btn.value = 'Send Email';
    //   alert('Sent!');
    // }, (err) => {
    //   // btn.value = 'Send Email';
    //   alert(JSON.stringify(err));
    // });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="me-auto mr-auto md:container md:px-8 px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="New Well Elevators Logo"
              width={50}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold">New Well Elevators</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            {/* <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link> */}
            {/* <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link> */}
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a style={{ width: "133px" }} href="tel:+919676616995" className="text-primary font-medium inline-block rounded-md border border-transparent bg-indigo-600 text-center font-medium text-white hover:bg-indigo-700 py-2 hidden md:flex justify-center">
              Call Us
            </a>
            <a
              href="#KAT"
              style={{ width: "133px" }}
              className="inline-block rounded-md border border-transparent bg-indigo-600 text-center font-medium text-white hover:bg-indigo-700 py-2"
            >
              Get a Quote
            </a>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1" style={{ background: "black" }}>
        {/* Hero Section */}
        <section
          id="ai-dR3pV6"
          className="block block--desktop-first-visible block--mobile-first-visible"
          style={{
            padding: 0,
          }}
        >
          <div
            className="block-background block-background--fixed transition-with-bg z-0"
            style={{ backgroundColor: "transparent", position: "fixed" }}
          >
            <video
              src="https://videos.pexels.com/video-files/7706013/7706013-uhd_4096_2160_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="block-background__video--fixed block-background__image"
              poster="https://images.pexels.com/videos/7706013/pexels-photo-7706013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            />
            <div className="block-background__overlay--fixed block-background__overlay"></div>
          </div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Elevating Experiences, <br />
                <span className="text-primary">Floor by Floor</span>
              </h1>
              <p className="text-lg md:text-xl">
                Premium lift and elevator solutions for residential and commercial buildings. Safety, reliability, and
                innovation in every installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Explore Our Solutions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="bg-background/20 hover:bg-background/30">
                  24/7 Service Support
                  <Clock className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="text-sm">
                  <span className="font-bold">500+</span> satisfied clients
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-muted/100 bg-white relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Comprehensive Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From installation to maintenance, we provide end-to-end solutions for all your vertical transportation
                needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Installation",
                  description:
                    "Professional installation of new elevators and lifts with minimal disruption to your building.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                  ),
                },
                {
                  title: "Maintenance",
                  description:
                    "Regular servicing and preventative maintenance to ensure your lifts operate safely and efficiently.",
                  icon: <Wrench className="h-10 w-10 text-primary" />,
                },
                {
                  title: "Modernization",
                  description: "Upgrade your existing elevators with the latest technology and safety features.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                },
                {
                  title: "Repair",
                  description:
                    "Fast and reliable repair services with 24/7 emergency support for all elevator systems.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.93 4.93 14.14 14.14" />
                    </svg>
                  ),
                },
                {
                  title: "Consultation",
                  description: "Expert advice on the best lift solutions for your building's specific requirements.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  ),
                },
                {
                  title: "Safety Inspections",
                  description:
                    "Comprehensive safety audits and certification to ensure compliance with all regulations.",
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-muted/100 bg-light relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Premium Lift Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our range of high-quality elevators and lifts designed for various applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  title: "Passenger Elevators",
                  description:
                    "Smooth, quiet, and efficient elevators designed for residential and commercial buildings.",
                  image: Passenger,
                },
                {
                  title: "Freight Elevators",
                  description: "Heavy-duty elevators built to transport goods and equipment with maximum reliability.",
                  image: freight
                },
                {
                  title: "Home Lifts",
                  description: "Compact and stylish lifts that add accessibility and value to residential properties.",
                  image: HomeLifts
                },
                {
                  title: "Panoramic Elevators",
                  description:
                    "Glass-walled elevators that offer stunning views while providing elegant transportation.",
                  image: Panoramic
                },
              ].map((product, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105 w-100"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    {/* <Button variant="outline">
                      View Details
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {/*<section className="py-16 md:py-24 bg-muted/50 z-1  relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose Lift Solutions?</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "30+ Years of Experience",
                      description:
                        "Decades of expertise in the elevator industry, serving thousands of satisfied clients.",
                    },
                    {
                      title: "Certified Technicians",
                      description: "Our team consists of fully certified professionals with extensive training.",
                    },
                    {
                      title: "Energy-Efficient Solutions",
                      description: "Modern elevators designed to reduce energy consumption and operating costs.",
                    },
                    {
                      title: "24/7 Emergency Service",
                      description: "Round-the-clock support to address any elevator emergencies promptly.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-8">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Elevator+Technician"
                    alt="Elevator technician at work"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-bold">Fast Response Time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our average response time for emergency calls is under 30 minutes in metropolitan areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        {/* Projects Section */}
        {/*<section id="projects" className="py-16 md:py-24 relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore some of our most impressive elevator installations across various sectors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Skyline Tower",
                  category: "Commercial",
                  image: "/placeholder.svg?height=400&width=600&text=Skyline+Tower",
                },
                {
                  title: "Grand Hotel",
                  category: "Hospitality",
                  image: "/placeholder.svg?height=400&width=600&text=Grand+Hotel",
                },
                {
                  title: "City Hospital",
                  category: "Healthcare",
                  image: "/placeholder.svg?height=400&width=600&text=City+Hospital",
                },
                {
                  title: "Luxury Residence",
                  category: "Residential",
                  image: "/placeholder.svg?height=400&width=600&text=Luxury+Residence",
                },
                {
                  title: "Shopping Mall",
                  category: "Retail",
                  image: "/placeholder.svg?height=400&width=600&text=Shopping+Mall",
                },
                {
                  title: "Office Complex",
                  category: "Commercial",
                  image: "/placeholder.svg?height=400&width=600&text=Office+Complex",
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="text-sm font-medium mb-1">{project.category}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Button variant="link" className="p-0 h-auto text-white mt-2 w-fit">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>*/}

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-16 md:py-24 bg-white/100 relative">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our satisfied customers about their experience with our elevator solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Property Manager",
                  company: "Skyline Tower",
                  quote:
                    "The team at Lift Solutions provided exceptional service from consultation to installation. Our tenants are extremely satisfied with the smooth and quiet operation of the new elevators.",
                  avatar: "/placeholder.svg?height=60&width=60&text=SJ",
                },
                {
                  name: "Michael Chen",
                  role: "Facilities Director",
                  company: "Grand Hotel",
                  quote:
                    "We've been using Lift Solutions for maintenance of our 12 elevators for over 5 years. Their response time is impressive, and their technicians are knowledgeable and professional.",
                  avatar: "/placeholder.svg?height=60&width=60&text=MC",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Homeowner",
                  company: "Luxury Residence",
                  quote:
                    "Installing a home lift was the best decision for our multi-level home. The team was respectful of our space and completed the installation with minimal disruption.",
                  avatar: "/placeholder.svg?height=60&width=60&text=ER",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm border relative">
                  <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="fill-primary/20">
                      <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                    </svg>
                  </div>
                  <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section id="KAT" className="py-16 md:py-24 bg-primary text-primary-foreground relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Elevate Your Building?</h2>
                <p className="text-primary-foreground/90 mb-8 text-lg">
                  Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect
                  elevator solution for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg">
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </Button>
                </div>
              </div>
              <div className="bg-primary-foreground p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-foreground">Get a Free Quote</h3>
                <form className="space-y-4" onSubmit={(e)=>sendEmail(e)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <input
                        id="name"
                        placeholder="John Doe"
                        name='name'
                        value={contactForm?.name || ''}
                        onChange={(e) => handleContactForm(e.target.value, 'name')}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name='emailFrom'
                        value={contactForm?.emailFrom || ''}
                        onChange={(e) => handleContactForm(e.target.value, 'emailFrom')}
                        placeholder="john@example.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name='mobile'
                      value={contactForm?.mobile || ''}
                      onChange={(e) => handleContactForm(e.target.value, 'mobile')}
                      placeholder="+1 (555) 000-0000"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-foreground">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name='service'
                      value={contactForm?.serviece || ''}
                      onChange={(e) => handleContactForm(e.target.value, 'serviece')}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    >
                      <option className="text-black" value="">Select a service</option>
                      <option className="text-black" value="installation">New Installation</option>
                      <option className="text-black" value="maintenance">Maintenance</option>
                      <option className="text-black" value="repair">Repair</option>
                      <option className="text-black" value="modernization">Modernization</option>
                      <option className="text-black" value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      name="message"
                      value={contactForm?.message || ''}
                      onChange={(e) => handleContactForm(e.target.value, 'message')}
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    />
                  </div>
                  <Button type="submit" className="w-full" >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 relative bg-white/100">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contact Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or need assistance? Our team is here to help you with all your elevator needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Our support team is available 24/7</p>
                <a href="tel:+919676616995" className="text-primary font-medium hover:underline">
                  +919676616995
                </a>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send us an email and we'll respond shortly</p>
                <a href="mailto:durgamramesh96766@gmail.com" className="text-primary font-medium hover:underline">
                  durgamramesh96766@gmail.com
                </a>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="mx-auto bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">Come to our headquarters</p>
                <address className="not-italic text-primary font-medium">
                  New Well Elevator
                  <br />
                  4-41-18 Papi reddy nagar jagadhgiri gutta, Hyderabad, Telangana, 500038
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white/100 border-t relative">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={logo}
                  alt="New Well Elevators Logo"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span className="text-xl font-bold">New Well Solutions</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Providing premium elevator and lift solutions for residential and commercial buildings since 1990.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-primary">
                    Products
                  </Link>
                </li>
                {/* <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-primary">
                    Testimonials
                  </Link>
                </li> */}
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-muted-foreground hover:text-primary">Installation</p>
                </li>
                <li>
                  <p className="text-muted-foreground hover:text-primary">Maintenance</p>
                </li>
                <li>
                  <p className="text-muted-foreground hover:text-primary">Modernization</p>
                </li>
                <li>
                  <p className="text-muted-foreground hover:text-primary">Repair</p>
                </li>
                <li>
                  <p className="text-muted-foreground hover:text-primary">Consultation</p>
                </li>
                <li>
                  <p className="text-muted-foreground hover:text-primary">Safety Inspections</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Lift Solutions. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
