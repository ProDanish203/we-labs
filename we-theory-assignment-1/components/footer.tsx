"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Danish Siddiqui</h3>
            <p className="text-gray-600 mb-4">
              Full-stack developer specializing in creating modern web
              applications with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/prodanish203"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/danish-siddiqui-"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="mailto:danishsidd203@gmail.com"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Backend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Full-Stack Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Database Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mt-1 mr-2" />
                <span className="text-gray-600">danishsidd203@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Linkedin className="w-5 h-5 text-blue-500 mt-1 mr-2" />
                <span className="text-gray-600">linkedin.com/in/danish-siddiqui-</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Danish Siddiqui. All rights
            reserved.
          </p>
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-600 hover:text-blue-500 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
