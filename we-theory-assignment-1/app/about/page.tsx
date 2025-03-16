import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  CheckCircle,
  Calendar,
  MapPin,
  GraduationCap,
} from "lucide-react";
import SkillBadge from "@/components/skill-badge";

export default function About() {
  const skills = [
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
    { name: "React.js", color: "bg-cyan-100 text-cyan-800" },
    { name: "Next.js", color: "bg-gray-100 text-gray-800" },
    { name: "Node.js", color: "bg-green-100 text-green-800" },
    { name: "Express", color: "bg-gray-100 text-gray-800" },
    { name: "MongoDB", color: "bg-green-100 text-green-800" },
    { name: "SQL", color: "bg-blue-100 text-blue-800" },
    { name: "HTML/CSS", color: "bg-orange-100 text-orange-800" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
    { name: "Git", color: "bg-red-100 text-red-800" },
    { name: "RESTful APIs", color: "bg-purple-100 text-purple-800" },
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
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <Image
                  src="/main.jpg"
                  alt="Danish Siddiqui"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-md">
                  <GraduationCap className="text-blue-500 h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I am a skilled Full-Stack Web Developer with over 2 years of
                experience, currently pursuing a Bachelor's degree in Computer
                Science at Bahria University Karachi, Pakistan.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Fluent in both English and Urdu, I possess effective
                communication skills that allow me to articulate technical
                concepts effortlessly and work seamlessly with diverse teams and
                clients.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                My passion for web development and academic pursuits drive me to
                create innovative solutions that deliver exceptional user
                experiences.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-500/90 text-white font-medium py-3 px-6 rounded-md transition-all hover:translate-y-[-2px]"
                >
                  <Download size={16} />
                  Download Resume
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md border border-gray-200 transition-all hover:translate-y-[-2px]"
                >
                  Contact Me
                </Link>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://github.com"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 hover:text-blue-500 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 hover:text-blue-500 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 hover:text-blue-500 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 hover:text-blue-500 transition-all"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Personal Information
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium block">Date of Birth</span>
                      <span className="text-gray-600">May 02, 2003</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium block">Email</span>
                      <span className="text-gray-600">
                        danishsidd203@gmail.com
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium block">Location</span>
                      <span className="text-gray-600">Karachi, Pakistan</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <span className="font-medium block">Education</span>
                      <span className="text-gray-600">
                        Bachelor's in Computer Science, Bahria University
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Languages</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">English</span>
                      <span>Fluent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Urdu</span>
                      <span>Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-6">Interests</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Web Development",
                    "UI/UX Design",
                    "Open Source",
                    "New Technologies",
                    "Reading",
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Technical Skills
            </h2>

            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <SkillBadge
                  key={index}
                  name={skill.name}
                  icon={<CheckCircle className="h-4 w-4" />}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Education & Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                  Education
                </h3>

                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-gray-200 pb-8">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-semibold text-lg">
                        Bachelor's in Computer Science
                      </h4>
                      <p className="text-gray-600">
                        Bahria University, Karachi
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        2020 - Present
                      </p>
                      <p className="mt-3 text-gray-700">
                        Focusing on software engineering, data structures,
                        algorithms, and web development.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-semibold text-lg">
                        High School Diploma
                      </h4>
                      <p className="text-gray-600">City School, Karachi</p>
                      <p className="text-gray-500 text-sm mt-1">2016 - 2018</p>
                      <p className="mt-3 text-gray-700">
                        Graduated with distinction in Computer Science and
                        Mathematics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Experience
                </h3>

                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-gray-200 pb-8">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500"></div>
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-semibold text-lg">
                        Full-Stack Developer
                      </h4>
                      <p className="text-gray-600">TechSolutions Inc.</p>
                      <p className="text-gray-500 text-sm mt-1">
                        2022 - Present
                      </p>
                      <p className="mt-3 text-gray-700">
                        Developing and maintaining web applications using React,
                        Node.js, and MongoDB. Implementing responsive designs
                        and RESTful APIs.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-semibold text-lg">
                        Frontend Developer Intern
                      </h4>
                      <p className="text-gray-600">WebCraft Studios</p>
                      <p className="text-gray-500 text-sm mt-1">2021 - 2022</p>
                      <p className="mt-3 text-gray-700">
                        Assisted in developing user interfaces using HTML, CSS,
                        and JavaScript. Collaborated with the design team to
                        implement responsive layouts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
