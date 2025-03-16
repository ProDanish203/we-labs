import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Database,
  Layout,
  Server,
  Globe,
  Zap,
  RefreshCw,
  Layers,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-12 w-12 text-blue-500 mb-4" />,
      description:
        "Creating responsive, user-friendly interfaces using modern frameworks like React and Next.js. I focus on performance optimization and accessibility to ensure the best user experience.",
      features: [
        "Responsive Web Design",
        "Single Page Applications",
        "UI/UX Implementation",
        "Performance Optimization",
      ],
      image: "/auth.jpg",
    },
    {
      title: "Backend Development",
      icon: <Server className="h-12 w-12 text-blue-500 mb-4" />,
      description:
        "Building robust server-side applications with Node.js and Express. I develop RESTful APIs and implement secure authentication systems to power your web applications.",
      features: [
        "API Development",
        "Server Architecture",
        "Authentication Systems",
        "Database Integration",
      ],
      image: "/auth.jpg",
    },
    {
      title: "Full-Stack Solutions",
      icon: <Code className="h-12 w-12 text-blue-500 mb-4" />,
      description:
        "End-to-end web application development from concept to deployment. I handle both client and server-side development to create cohesive, scalable applications.",
      features: [
        "End-to-End Development",
        "System Architecture",
        "Third-party API Integration",
        "Deployment & DevOps",
      ],
      image: "/auth.jpg",
    },
    {
      title: "Database Design",
      icon: <Database className="h-12 w-12 text-blue-500 mb-4" />,
      description:
        "Designing efficient database structures and implementing data models that scale. I work with both SQL and NoSQL databases to find the right solution for your needs.",
      features: [
        "Schema Design",
        "Data Modeling",
        "Query Optimization",
        "Migration & Scaling",
      ],
      image: "/auth.jpg",
    },
    {
      title: "Web Application Maintenance",
      icon: <RefreshCw className="h-12 w-12 text-blue-500 mb-4" />,
      description:
        "Ongoing support and maintenance for existing web applications. I help keep your applications running smoothly with updates, bug fixes, and performance improvements.",
      features: [
        "Bug Fixing",
        "Performance Tuning",
        "Feature Updates",
        "Security Patches",
      ],
      image: "/auth.jpg",
    },
    {
      title: "Technical Consultation",
      icon: <Layers className="h-12 w-12 text-blue-500 mb-4" />,
      description:
        "Expert advice on technology choices and implementation strategies. I provide guidance on best practices and help you make informed decisions for your projects.",
      features: [
        "Technology Stack Advice",
        "Code Reviews",
        "Architecture Planning",
        "Best Practices Implementation",
      ],
      image: "/auth.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-purple-200/20 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">My Services</h1>
            <p className="text-gray-700 mb-8 text-lg">
              I offer comprehensive web development services tailored to meet
              your specific needs. From frontend design to backend development,
              I deliver high-quality solutions that drive results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-500/90 text-white font-medium py-3 px-6 rounded-md transition-all hover:translate-y-[-2px]"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-200 transition-all hover:translate-y-[-2px]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-bold text-xl">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h4 className="font-medium text-gray-800 mb-2">
                    What's included:
                  </h4>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Zap className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                My Work Process
              </h2>
              <p className="text-gray-600">
                I follow a structured approach to ensure your project is
                delivered successfully.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    title: "Discovery & Planning",
                    description:
                      "I start by understanding your requirements, goals, and target audience. This phase includes research, planning, and creating a roadmap for your project.",
                    icon: <Globe className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Design & Prototyping",
                    description:
                      "Based on the requirements, I create wireframes and prototypes to visualize the user interface and experience. This helps in getting early feedback and making necessary adjustments.",
                    icon: <Layout className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Development",
                    description:
                      "This is where the actual coding happens. I develop the frontend and backend components of your application using the latest technologies and best practices.",
                    icon: <Code className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Testing & Deployment",
                    description:
                      "Before delivery, I thoroughly test the application to ensure it's bug-free and performs well. Once approved, I deploy it to your preferred hosting environment.",
                    icon: <Server className="h-8 w-8 text-white" />,
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`relative md:flex ${
                      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="md:block absolute left-1/2 top-8 w-8 h-8 rounded-full bg-blue-500 transform -translate-x-1/2 z-10 flex items-center justify-center">
                      <span className="text-white font-bold text-center w-full h-full flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content box */}
                    <div
                      className={`md:w-5/12 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="md:hidden flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                          <span className="text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <div className="hidden md:block">
                        <h3 className="text-xl font-semibold mb-3">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your ideas to life with modern web
            development solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-medium py-3 px-8 rounded-md transition-all hover:translate-y-[-2px]"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about my services and process.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to complete a project?",
                  answer:
                    "Project timelines vary depending on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "I offer flexible pricing options including fixed-price quotes for well-defined projects and hourly rates for ongoing work. Each project is unique, so I provide custom quotes based on your specific requirements.",
                },
                {
                  question:
                    "Do you provide ongoing support after project completion?",
                  answer:
                    "Yes, I offer maintenance and support packages to ensure your application continues to run smoothly. This includes bug fixes, security updates, and minor feature enhancements.",
                },
                {
                  question: "What technologies do you specialize in?",
                  answer:
                    "I specialize in modern web technologies including React, Next.js, Node.js, Express, MongoDB, and SQL databases. I'm also experienced with HTML, CSS, JavaScript, TypeScript, and various frontend frameworks.",
                },
                {
                  question: "Can you work with an existing development team?",
                  answer:
                    "Absolutely! I'm comfortable collaborating with existing teams and can adapt to your workflow and communication preferences. I've worked in various team settings and can integrate seamlessly.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
