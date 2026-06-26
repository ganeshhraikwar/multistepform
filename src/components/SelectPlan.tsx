import React from 'react';
import { BillingCycle } from '../types';
import { PLANS } from '../data';
import { motion } from 'motion/react';

interface SelectPlanProps {
  planId: string;
  billingCycle: BillingCycle;
  onChangePlan: (id: string) => void;
  onChangeCycle: (cycle: BillingCycle) => void;
}

export function SelectPlan({ planId, billingCycle, onChangePlan, onChangeCycle }: SelectPlanProps) {
  const isYearly = billingCycle === 'yearly';

  return (
    <div className="flex flex-col">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-marine-blue mb-2">Select your plan</h1>
        <p className="text-cool-gray text-[14px] md:text-[16px]">You have the option of monthly or yearly billing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[18px] mb-8">
        {PLANS.map((plan) => {
          const isSelected = planId === plan.id;
          const Icon = plan.icon;
          
          return (
            <motion.div
              key={plan.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChangePlan(plan.id)}
              className={`border-[1.5px] rounded-xl p-4 cursor-pointer transition-all duration-200 flex md:flex-col items-start gap-4 md:gap-10 md:pt-5 ${
                isSelected 
                  ? 'border-purplish-blue bg-alabaster bg-opacity-50 ring-[1px] ring-purplish-blue' 
                  : 'border-[#D6D9E6] hover:border-purplish-blue hover:bg-magnolia/30'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${plan.bg} ${plan.color}`}>
                <Icon size={22} strokeWidth={2.5} />
              </div>
              <div className="mt-1 md:mt-0">
                <h3 className="font-bold text-marine-blue text-[16px]">{plan.name}</h3>
                <p className="text-cool-gray text-[14px]">
                  ${isYearly ? plan.priceYearly : plan.priceMonthly}/{isYearly ? 'yr' : 'mo'}
                </p>
                {isYearly && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-marine-blue text-[12px] mt-1.5 font-medium"
                  >
                    {plan.freeMonths}
                  </motion.p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-2 md:mt-8 bg-alabaster rounded-xl p-3.5 flex justify-center items-center gap-6">
        <span className={`text-[14px] font-bold transition-colors ${!isYearly ? 'text-marine-blue' : 'text-cool-gray'}`}>
          Monthly
        </span>
        
        <button 
          onClick={() => onChangeCycle(isYearly ? 'monthly' : 'yearly')}
          className="w-10 h-5 bg-marine-blue rounded-full relative px-1 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purplish-blue transition-colors"
          aria-label="Toggle billing cycle"
        >
          <motion.div 
            className="w-3.5 h-3.5 bg-white rounded-full shadow-sm"
            animate={{ x: isYearly ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        
        <span className={`text-[14px] font-bold transition-colors ${isYearly ? 'text-marine-blue' : 'text-cool-gray'}`}>
          Yearly
        </span>
      </div>
    </div>
  );
}
