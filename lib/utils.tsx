'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

/* ---------------------------
   📅 DATE FORMAT HELPER
--------------------------- */
export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/* ---------------------------
   🎬 PAGE TRANSITION WRAPPER
--------------------------- */
export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Math.random()} // ensures re-animation on route change
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};