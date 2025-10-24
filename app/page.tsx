'use client';
import { motion } from 'framer-motion';
import Cards from '@/app/ui/Cards';
import Link from 'next/link';

export default function HomePage() {
  // Each letter of the name will bounce like it’s dancing
  const name = 'Favourite Atuhu'.split('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center space-y-8 p-12"
    >
      <header className="text-center mb-10">
        <motion.img
          src="/favourite.jpg"
          alt="Favourite Atuhu"
          className="w-100% rounded-full mx-auto mb-6 border-4 border-burgundy-500 object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Dancing name */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-burgundy-400 mb-9 text-center">
          {name.map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-gray-900 text-xl sm:text-2xl mb-20 text-center px-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer | Tech Enthusiast | Software Tester
        </motion.p>
      </header>

      {/* About Preview */}
      <motion.section
        className="w-full max-w-4xl text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold mb-10 text-burgundy-600">About Me</h2>
        <p className="text-gray-900 leading-relaxed mb-8 text-2xl sm:text-3xl">
          I’m a passionate full stack developer experienced in building responsive
          web apps using Next.js, React, and Django. I love solving complex
          problems and creating efficient, scalable solutions.
        </p>
        <Link
          href="/about"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Learn More About Me
        </Link>
      </motion.section>

      {/* Projects Preview */}
      <motion.section
        className="w-full max-w-5xl text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold mb-10 text-burgundy-600 p-12 ">Projects</h2>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible md:grid-cols-3 snap-x snap-mandatory scroll-smooth">
          <Cards
            title="Event Planning Hub"
            description="An event management platform built with JavaScript and APIs."
            link="https://eventplanninghub.netlify.app/"
            image="/project1.jpg"
          />
          <Cards
            title="Sleep Outside Project"
            description="E-commerce app with API integration and validation."
            link="https://wdd330sleepoutsideteam8.netlify.app/"
            image="/project2.jpg"
          />
          <Cards
            title="DevSattt Website"
            description="Corporate logistics site built with Next.js & SEO optimization."
            link="https://ohayitsfay.github.io/devsattt/"
            image="/project3.jpg"
          />
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold mb-10 text-burgundy-600">Get in Touch</h2>
        <p className="text-gray-700 mb-4 text-lg sm:text-3xl">
          I’m open to freelance, contract, or full-time opportunities.
        </p>
        <Link
          href="/contact"
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Contact Me
        </Link>
      </motion.section>
    </motion.div>
  );
}