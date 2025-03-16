"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you for your message! I will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
        setSubmitStatus(null);
      }, 5000);
    }, 1000);
  };

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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential
              collaboration? Feel free to reach out using the form below or
              contact me directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-6 rounded-xl h-full">
                  <h2 className="text-xl font-semibold mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start group">
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all mr-4">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a
                          href="mailto:contact@example.com"
                          className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                          danishsidd203@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all mr-4">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a
                          href="tel:+923261153874"
                          className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                          +92 326 115 3874
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md group-hover:text-blue-500 transition-all mr-4">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-gray-600">Karachi, Pakistan</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-medium mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 hover:text-blue-500 transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 hover:text-blue-500 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://twitter.com"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md text-gray-700 hover:text-blue-500 transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

                  {submitMessage && (
                    <div
                      className={`mb-6 p-4 rounded-md ${
                        submitStatus === "success"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 mb-2 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required
                          placeholder="Your email address"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2 font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-blue-500 hover:bg-blue-500/90 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/auth.jpg"
                  alt="Map location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                    <h3 className="font-medium">Karachi, Pakistan</h3>
                    <p className="text-sm">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            I'm currently available for freelance projects, full-time positions,
            and consulting work. If you have a project that needs attention,
            let's talk!
          </p>
          <a
            href="mailto:danishsidd203@gmail.com"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-medium py-3 px-8 rounded-md transition-all hover:translate-y-[-2px]"
          >
            Email Me Directly
            <Mail size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
