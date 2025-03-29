'use client';

import { motion } from 'motion/react';

function TypingText({ text }: { text: string }) {
  return (
    <motion.small
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.005 } },
      }}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.005 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.small>
  );
}

export { TypingText };
