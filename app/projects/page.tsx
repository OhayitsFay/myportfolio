'use client';
import Cards from '@/app/ui/Cards';
import Link from 'next/link';
import { motion, Variants, easeInOut } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Event Planning Hub',
      description: 'An event management platform built with JavaScript and APIs.',
      link: 'https://eventplanninghub.netlify.app/',
      image: '/project1.jpg',
    },
    {
      title: 'Sleep Outside Project',
      description: 'E-commerce app with API integration and validation.',
      link: 'https://wdd330sleepoutsideteam8.netlify.app/',
      image: '/project2.jpg',
    },
    {
      title: 'DevSattt Website',
      description: 'Corporate logistics site built with Next.js & SEO optimization.',
      link: 'https://ohayitsfay.github.io/devsattt/',
      image: '/project3.jpg',
    },
  ];

  // Animation variants for staggered entry
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut, }, },
  };

  return (
    <motion.section
      className="max-w-500 mx-auto text-center space-y-10 p-12 "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-5xl font-bold text-burgundy-600 mb-6 p-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="text-3xl text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        A showcase of my projects demonstrating my skills in web development, API integration, and modern JavaScript frameworks.
      </motion.p>

      {/* Animated cards grid */}
      <motion.div
        className="gap-8  mt-8 mb-10 p-12 grid sm:grid-cols-2 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, i) => (
          <motion.div key={i} variants={cardVariants} whileHover={{ scale: 1.05 }}>
            <Cards {...project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link
          href="https://github.com/OhayitsFay?tab=repositories"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View All Projects
        </Link>
      </motion.div>
    </motion.section>
  );
}
