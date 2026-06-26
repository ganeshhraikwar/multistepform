import React from 'react';
import { FormState } from '../types';
import { PLANS, ADD_ONS } from '../data';

interface SummaryProps {
  state: FormState;
  onGoToPlan: () => void;
}

export function Summary({ state, onGoToPlan }: SummaryProps) {
  const isYearly = state.billingCycle === 'yearly';
  const plan = PLANS.find(p => p.id === state.planId)!;
  const planPrice = isYearly ? plan.priceYearly : plan.priceMonthly;
  
  const selectedAddOns = ADD_ONS.filter(addon => state.addOnIds.includes(addon.id));
  const addOnsTotal = selectedAddOns.reduce((total, addon) => {
    return total + (isYearly ? addon.priceYearly : addon.priceMonthly);
  }, 0);
  
  const total = planPrice + addOnsTotal;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-marine-blue mb-2">Finishing up</h1>
        <p className="text-cool-gray">Double-check everything looks OK before confirming.</p>
      </div>

      <div className="bg-alabaster rounded-xl p-4 md:p-6 mb-6">
        <div className="flex items-center justify-between pb-4 md:pb-6 border-b border-light-gray">
          <div>
            <h3 className="font-bold text-marine-blue text-[15px] md:text-lg capitalize leading-tight">
              {plan.name} ({state.billingCycle})
            </h3>
            <button 
              onClick={onGoToPlan}
              className="text-cool-gray underline text-[13px] md:text-sm hover:text-purplish-blue transition-colors focus:outline-none focus:ring-2 focus:ring-purplish-blue rounded"
            >
              Change
            </button>
          </div>
          <div className="font-bold text-marine-blue text-[15px] md:text-lg">
            ${planPrice}/{isYearly ? 'yr' : 'mo'}
          </div>
        </div>

        {selectedAddOns.length > 0 && (
          <div className="pt-4 space-y-3 md:space-y-4">
            {selectedAddOns.map(addon => (
              <div key={addon.id} className="flex justify-between items-center">
                <span className="text-cool-gray text-[13px] md:text-[14px]">{addon.name}</span>
                <span className="text-marine-blue text-[13px] md:text-[14px]">
                  +${isYearly ? addon.priceYearly : addon.priceMonthly}/{isYearly ? 'yr' : 'mo'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between items-center px-4 md:px-6 mt-4">
        <span className="text-cool-gray text-[13px] md:text-sm">
          Total (per {isYearly ? 'year' : 'month'})
        </span>
        <span className="text-purplish-blue font-bold text-lg md:text-xl">
          +${total}/{isYearly ? 'yr' : 'mo'}
        </span>
      </div>
    </div>
  );
}
