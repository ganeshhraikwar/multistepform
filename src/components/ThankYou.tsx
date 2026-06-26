import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-10 md:py-0">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-20 h-20 bg-strawberry-red rounded-full flex items-center justify-center mb-8 shadow-lg shadow-strawberry-red/20"
      >
        <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center">
          <Check size={28} strokeWidth={4} className="text-white" />
        </div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-marine-blue mb-4"
      >
        Thank you!
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-cool-gray leading-relaxed max-w-[440px] text-[15px]"
      >
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </motion.p>
    </div>
  );
}
