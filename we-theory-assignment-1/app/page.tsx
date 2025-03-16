import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Database,
  Layout,
  Sparkles,
  Zap,
} from "lucide-react";
import AnimatedCounter from "@/components/animated-counter";
import ProjectCard from "@/components/project-card";
import TestimonialCard from "@/components/testimonial-card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-purple-200/20 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 animate-slide-up">
              <p className="text-blue-600 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Danish Siddiqui
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A Full-stack Developer with over 2 years of hands-on experience,
                I bring proficiency in crafting robust web applications. My
                expertise spans both front-end finesse and back-end
                architecture, ensuring innovative and efficient solutions for
                diverse projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-500/90 text-white font-medium py-3 px-6 rounded-md transition-all hover:translate-y-[-2px]"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-center gap-2 bg-gray-200 text-black hover:bg-gray-300 font-medium py-3 px-6 rounded-md border border-gray-200 transition-all hover:translate-y-[-2px]"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                <Image
                  src="/main.jpg"
                  alt="Danish Siddiqui"
                  width={500}
                  height={500}
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-md">
                  <Code className="text-blue-500 h-6 w-6" />
                </div>
                <div className="absolute -bottom-2 -left-4 bg-white p-3 rounded-full shadow-md">
                  <Database className="text-blue-500 h-6 w-6" />
                </div>
                <div className="absolute top-1/2 -right-6 bg-white p-3 rounded-full shadow-md">
                  <Layout className="text-blue-500 h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: 2, suffix: "+" },
              { label: "Projects Completed", value: 25, suffix: "+" },
              { label: "Happy Clients", value: 15, suffix: "+" },
              { label: "Technologies", value: 12, suffix: "+" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              My Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I specialize in building modern web applications using the latest
              technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                icon: <Layout className="h-10 w-10 text-blue-600 mb-4" />,
                description:
                  "Creating responsive and intuitive user interfaces with modern frameworks like React and Next.js.",
                features: [
                  "Responsive Design",
                  "UI/UX Implementation",
                  "State Management",
                  "Performance Optimization",
                ],
              },
              {
                title: "Backend Development",
                icon: <Database className="h-10 w-10 text-blue-600 mb-4" />,
                description:
                  "Building robust server-side applications with Node.js and Express. Developing RESTful APIs and database integrations.",
                features: [
                  "API Development",
                  "Server Architecture",
                  "Authentication",
                  "Database Integration",
                ],
              },
              {
                title: "Full-Stack Solutions",
                icon: <Sparkles className="h-10 w-10 text-blue-600 mb-4" />,
                description:
                  "End-to-end web application development from concept to deployment, handling both client and server-side development.",
                features: [
                  "End-to-End Development",
                  "System Architecture",
                  "Third-party Integration",
                  "Deployment",
                ],
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <ul className="space-y-2">
                  {skill.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Zap className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "A full-featured online store with product management, cart functionality, and payment processing.",
                imageSrc: "/react ecom.png",
                tags: ["Next.js", "Node.js", "MongoDB"],
                liveUrl: "#",
                githubUrl: "#",
              },
              {
                title: "Landing Page",
                description:
                  "A responsive landing page template with a clean and modern design for showcasing products or services.",
                imageSrc: "/landing.png",
                tags: ["React", "Firebase", "Tailwind CSS"],
                liveUrl: "#",
                githubUrl: "#",
              },
              {
                title: "Portfolio Website",
                description:
                  "A responsive portfolio website for a creative professional with project showcases and contact form.",
                imageSrc: "/portfolio.png",
                tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
                liveUrl: "#",
                githubUrl: "#",
              },
            ].map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-200 transition-all hover:translate-y-[-2px]"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              What Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from people I've worked with on various projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Danish delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
                author: "Sarah Johnson",
                position: "Product Manager",
                avatarSrc: "/user.webp",
              },
              {
                quote:
                  "Working with Danish was a great experience. He understood our requirements perfectly and implemented everything we needed.",
                author: "Michael Chen",
                position: "Startup Founder",
                avatarSrc: "/user.webp",
              },
              {
                quote:
                  "Danish is a talented developer who brings both technical expertise and creative solutions to the table. Highly recommended!",
                author: "Emily Rodriguez",
                position: "Creative Director",
                avatarSrc: "/user.webp",
              },
            ].map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
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
    </div>
  );
}
