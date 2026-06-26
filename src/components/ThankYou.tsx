import React from 'react';
import { Check } from 'lucide-react';

export function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-10 md:py-0">
      <div
        className="w-20 h-20 bg-strawberry-red rounded-full flex items-center justify-center mb-8 shadow-lg shadow-strawberry-red/20 animate-fade-in"
      >
        <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center">
          <Check size={28} strokeWidth={4} className="text-white" />
        </div>
      </div>
      
      <h1 
        className="text-3xl font-bold text-marine-blue mb-4 animate-fade-in-up"
      >
        Thank you!
      </h1>
      
      <p 
        className="text-cool-gray leading-relaxed max-w-[440px] text-[15px] animate-fade-in-up"
      >
        Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.
      </p>
    </div>
  );
}
