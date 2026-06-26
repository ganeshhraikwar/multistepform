import React from 'react';
import { UserData, ValidationErrors } from '../types';

interface PersonalInfoProps {
  data: UserData;
  errors: ValidationErrors;
  onChange: (data: UserData) => void;
}

export function PersonalInfo({ data, errors, onChange }: PersonalInfoProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-marine-blue mb-2">Personal info</h1>
        <p className="text-cool-gray text-[14px] md:text-[16px]">Please provide your name, email address, and phone number.</p>
      </div>

      <div className="space-y-4 md:space-y-5 flex-grow">
        <div>
          <div className="flex justify-between items-baseline mb-1.5 md:mb-2">
            <label htmlFor="name" className="text-[13px] md:text-sm font-medium text-marine-blue">Name</label>
            {errors.name && <span className="text-strawberry-red text-[13px] md:text-sm font-bold">{errors.name}</span>}
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={data.name}
            onChange={handleChange}
            className={`w-full p-2.5 md:p-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-purplish-blue font-medium text-marine-blue transition-all duration-200 ${
              errors.name ? 'border-strawberry-red focus:border-strawberry-red focus:ring-strawberry-red' : 'border-[#D6D9E6] hover:border-purplish-blue'
            }`}
          />
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1.5 md:mb-2">
            <label htmlFor="email" className="text-[13px] md:text-sm font-medium text-marine-blue">Email Address</label>
            {errors.email && <span className="text-strawberry-red text-[13px] md:text-sm font-bold">{errors.email}</span>}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={data.email}
            onChange={handleChange}
            className={`w-full p-2.5 md:p-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-purplish-blue font-medium text-marine-blue transition-all duration-200 ${
              errors.email ? 'border-strawberry-red focus:border-strawberry-red focus:ring-strawberry-red' : 'border-[#D6D9E6] hover:border-purplish-blue'
            }`}
          />
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-1.5 md:mb-2">
            <label htmlFor="phone" className="text-[13px] md:text-sm font-medium text-marine-blue">Phone Number</label>
            {errors.phone && <span className="text-strawberry-red text-[13px] md:text-sm font-bold">{errors.phone}</span>}
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={data.phone}
            onChange={handleChange}
            className={`w-full p-2.5 md:p-3 rounded-lg border focus:outline-none focus:ring-1 focus:ring-purplish-blue font-medium text-marine-blue transition-all duration-200 ${
              errors.phone ? 'border-strawberry-red focus:border-strawberry-red focus:ring-strawberry-red' : 'border-[#D6D9E6] hover:border-purplish-blue'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
