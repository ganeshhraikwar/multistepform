import React from 'react';
import { STEPS } from '../data';

interface SidebarProps {
  currentStep: number;
}

export function Sidebar({ currentStep }: SidebarProps) {
  return (
    <div className="w-full h-full md:w-[274px] md:h-[568px] flex-shrink-0 bg-purplish-blue md:rounded-2xl p-8 pt-10 flex flex-row md:flex-col justify-center md:justify-start items-start md:gap-8 relative overflow-hidden space-x-4 md:space-x-0">
      {/* Background SVG pattern to match design */}
      <svg className="absolute bottom-0 left-0 w-full md:h-auto object-cover pointer-events-none md:bottom-0 z-0 h-full md:h-[auto] block md:hidden" preserveAspectRatio="none" viewBox="0 0 375 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd" clipRule="evenodd" d="M0 172H375V70.5C375 70.5 328.5 57 280.5 83C232.5 109 189 80 149.5 96.5C110 113 57.5 104.5 0 112.5V172Z" fill="#F9818E" 
        />
        <path 
          fillRule="evenodd" clipRule="evenodd" d="M0 172H375V97.5C375 97.5 301 88 260 118C219 148 170.5 135 133 148.5C95.5 162 48 157 0 166V172Z" fill="#FFAF7E" 
        />
        <path 
          d="M0 172H210C210 172 185 135.5 115 134C45 132.5 17 116.5 0 116.5V172Z" fill="#6259FF" 
        />
      </svg>
      <svg className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none hidden md:block" viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 274H274V112.5C274 112.5 240 92 205 130C170 168 139 125 110 150C81 175 42 162 0 174V274Z" fill="#F9818E" />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 274H274V154.5C274 154.5 220.5 139.5 190.5 186.5C160.5 233.5 125 214.5 97.5 236C70 257.5 35 249.5 0 263.5V274Z" fill="#FFAF7E" />
        <path d="M0 274H154C154 274 135.5 217 84.5 214.5C33.5 212 12.5 187 0 187V274Z" fill="#6259FF" />
        <path d="M0 274H74C74 274 54 227 0 224V274Z" fill="#473DFF" />
        <circle cx="107" cy="188" r="3" fill="white" />
        <circle cx="127" cy="198" r="3" fill="white" />
        <path d="M97 197L117 177" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M102 202L122 182" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {STEPS.map((step) => {
        const isActive = currentStep === step.num || (currentStep === 5 && step.num === 4);
        
        return (
          <div key={step.num} className="flex items-center gap-4 z-10 md:mb-6">
            <div 
              className={`w-[34px] h-[34px] rounded-full border-[1px] flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                isActive 
                  ? 'bg-light-blue border-light-blue text-marine-blue' 
                  : 'border-white text-white'
              }`}
            >
              {step.num}
            </div>
            <div className="hidden md:block">
              <p className="text-light-gray text-[13px] uppercase tracking-wider mb-0.5">STEP {step.num}</p>
              <p className="text-white text-[15px] font-bold tracking-widest uppercase">{step.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
