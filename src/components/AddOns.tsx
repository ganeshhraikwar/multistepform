import React from 'react';
import { BillingCycle } from '../types';
import { ADD_ONS } from '../data';
import { Check } from 'lucide-react';

interface AddOnsProps {
  selectedAddOns: string[];
  billingCycle: BillingCycle;
  onChange: (addOns: string[]) => void;
}

export function AddOns({ selectedAddOns, billingCycle, onChange }: AddOnsProps) {
  const isYearly = billingCycle === 'yearly';

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      onChange(selectedAddOns.filter(item => item !== id));
    } else {
      onChange([...selectedAddOns, id]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-marine-blue mb-2">Pick add-ons</h1>
        <p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="space-y-4">
        {ADD_ONS.map((addon) => {
          const isSelected = selectedAddOns.includes(addon.id);
          
          return (
            <div
              key={addon.id}
              onClick={() => toggleAddOn(addon.id)}
              className={`border-[1.5px] rounded-xl p-4 sm:px-6 sm:py-5 flex items-center gap-4 sm:gap-6 cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'border-purplish-blue bg-alabaster bg-opacity-50 ring-[1px] ring-purplish-blue' 
                  : 'border-[#D6D9E6] hover:border-purplish-blue hover:bg-magnolia/30'
              } hover:-translate-y-0.5 active:scale-[0.99]`}
            >
              <div 
                className={`w-5 h-5 rounded-[4px] flex items-center justify-center border-[1px] transition-colors ${
                  isSelected ? 'bg-purplish-blue border-purplish-blue' : 'border-[#D6D9E6] bg-white'
                }`}
              >
                {isSelected && <Check size={14} strokeWidth={3} className="text-white" />}
              </div>
              
              <div className="flex-grow">
                <h3 className="font-bold text-marine-blue text-[15px] sm:text-[16px]">{addon.name}</h3>
                <p className="text-cool-gray text-[12px] sm:text-[14px] leading-tight mt-0.5">{addon.description}</p>
              </div>
              
              <div className="text-purplish-blue text-[13px] sm:text-sm font-medium">
                +${isYearly ? addon.priceYearly : addon.priceMonthly}/{isYearly ? 'yr' : 'mo'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
