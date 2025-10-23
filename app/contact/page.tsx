'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto py-10 space-y-8 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <h1 className="text-5xl font-bold text-burgundy-500 mb-6 p-12">Contact Me</h1>
      <p className="text-gray-900 text-3xl mb-12 px-4">
        Let’s connect! I’d love to collaborate on exciting projects or discuss opportunities.
      </p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#b05b74]"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#b05b74]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#b05b74]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#b05b74] text-white px-6 py-3 rounded-md hover:bg-[#9a4f68] transition transform hover:scale-105"
        >
          Send Message
        </button>
      </motion.form>

      {status && <p className="text-center text-lg mt-4">{status}</p>}

      {/* Social Links Section */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          href="https://www.linkedin.com/in/faycloudevents"
          target="_blank"
          className="flex items-center gap-2 text-blue-700 hover:scale-110 transition"
        >
          <FaLinkedin size={30} />
          <span>LinkedIn</span>
        </Link>

        <Link
          href="https://github.com/OhayitsFay?tab=repositories"
          target="_blank"
          className="flex items-center gap-2 text-gray-800 hover:scale-110 transition"
        >
          <FaGithub size={30} />
          <span>GitHub</span>
        </Link>

        <Link
          href="tel:+2349037856229"
          className="flex items-center gap-2 text-green-600 hover:scale-110 transition"
        >
          <FaPhoneAlt size={25} />
          <span>+234 903 785 6229</span>
        </Link>

        <Link
          href="mailto:favouratuhu@gmail.com"
          className="flex items-center gap-2 text-gray-900 hover:scale-110 transition"
        >
          <FaEnvelope size={30} />
          <span>favouratuhu@gmail.com</span>
        </Link>
      </motion.div>
    </motion.section>
  );
}
