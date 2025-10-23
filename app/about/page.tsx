'use client';
import Image from 'next/image';
import React from 'react';
import { PageWrapper } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
  /*<section className="max-w-500 mx-auto space-y-8 text-center">*/
    <PageWrapper>
      <section className="px-6 py-12 p-12 max-w-500 mx-auto space-y-8 text-center text-burgundy-800">
        {/* Intro */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
    
          <h1 className="text-5xl font-bold text-burgundy-700 mb-25 p-12">About Me</h1>
          <div className="flex flex-col items-center w-100% space-y-6">
            <Image
              src="/favourite.jpg"
              alt="Favourite Atuhu"
              width={550}
              height={150}
              className=" mb-4 border-4 border-burgundy-500 rounded-full"
            />
          <p className="text-gray-900 leading-relaxed text-3xl mb-20">
            Hello! I'm <span className="font-semibold text-bold text-4xl">Favourite Atuhu</span>, a passionate full stack developer with experience in building responsive 
            web applications using modern technologies like Nextjs, React, and Django. I love solving complex problems
            and creating efficient, scalable solutions. When I'm not coding, I enjoy exploring new tech trends and 
            contributing to open source projects.
            When  I'm not coding, I enjoy music, exploring design, and attending tech meetups.
          </p>
          </div>
        </motion.div>
        {/* Skills */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          >
          <h2 className="text-5xl font-semibold text-burgundy-600 mb-15">Skills</h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-cols-4 gap-6 mb-20 ">
            <div className="bg-[#fffff1] shadow-md rounded-lg p-4 border-l-4 border-[#b05b74]">
              <h3 className="font-semibold text-gray-950 mb-2 text-4xl">Frontend</h3>
                <ul className="list-disc list-inside text-gray-900 text-3xl">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML / CSS</li>
                </ul>
            </div>

            <div className="bg-[#fffff1] shadow-md rounded-lg p-4 border-l-4 border-[#b05b74]">
              <h3 className="font-bold text-gray-700 mb-4 text-4xl">Backend</h3>
                <ul className="list-disc list-inside text-gray-900 text-3xl">
                  <li>Node.js / Express</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                  <li>Authentication / JWT</li>
                </ul>
            </div>

            <div className="bg-[#fffff1] shadow-md rounded-lg p-4 border-l-4 border-[#b05b74]">
              <h3 className="font-bold text-gray-700 mb-4 text-4xl">Software Testing & QA</h3>
                <ul className="list-disc list-inside text-gray-900 text-3xl">
                  <li>Postman</li>
                  <li>JIRA</li>
                  <li>E2E Testing</li>
                  <li>Selenium / Cypress</li>
                 <li>and more...</li>
               </ul>
            </div>

            <div className="bg-[#fffff1] shadow-md rounded-lg p-4 border-l-4 border-[#b05b74]">
              <h3 className="font-bold text-gray-700 mb-4 text-4xl">Tools & Others</h3>
                <ul className="list-disc list-inside text-gray-900 text-3xl">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Agile / Scrum</li>
                </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-semibold text-burgundy-600 mb-15">Experience</h2>
          <div className="space-y-6">
            <div className="relative border-l-4 border-burgundy-600 pl-6">
              <h3 className="text-4xl font-semibold text-gray-950">Web Analyst</h3>
              <p className="text-3xl text-gray-950 mb-5">Devsattt Logistics LTD • Jan 2024 – Jun 2024</p>
              <p className="text-gray-900 text-2xl mb-10">
                Worked on building responsive web interfaces with React and Tailwind CSS. Collaborated with backend developers to integrate APIs and enhance user experience.
              </p>
            </div>

            <div className="relative border-l-4 border-burgundy-600 pl-6">
              <h3 className="text-4xl font-semibold text-gray-950">Freelance Web Developer</h3>
              <p className="text-3xl text-gray-950 mb-5">Remote • Jul 2024 – Present</p>
              <p className="text-gray-900 text-2xl">
                Designed and developed custom websites for small businesses, focusing on performance, accessibility, and modern design principles.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  )
}