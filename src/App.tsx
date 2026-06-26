import React, { useState } from 'react';
import { FormState, ValidationErrors } from './types';
import { Sidebar } from './components/Sidebar';
import { PersonalInfo } from './components/PersonalInfo';
import { SelectPlan } from './components/SelectPlan';
import { AddOns } from './components/AddOns';
import { Summary } from './components/Summary';
import { ThankYou } from './components/ThankYou';

const INITIAL_STATE: FormState = {
  currentStep: 1,
  userData: {
    name: '',
    email: '',
    phone: '',
  },
  planId: 'arcade',
  billingCycle: 'monthly',
  addOnIds: [],
};

export default function App() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [direction, setDirection] = useState(1);

  const validateStep1 = () => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    if (!state.userData.name.trim()) {
      newErrors.name = 'This field is required';
      isValid = false;
    }
    
    if (!state.userData.email.trim()) {
      newErrors.email = 'This field is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.userData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    
    if (!state.userData.phone.trim()) {
      newErrors.phone = 'This field is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (state.currentStep === 1 && !validateStep1()) return;
    
    setDirection(1);
    setState(s => ({ ...s, currentStep: s.currentStep + 1 }));
  };

  const handleBack = () => {
    setDirection(-1);
    setState(s => ({ ...s, currentStep: s.currentStep - 1 }));
  };

  const handleGoToPlan = () => {
    setDirection(-1);
    setState(s => ({ ...s, currentStep: 2 }));
  };

  return (
    <main className="min-h-screen bg-magnolia flex items-start md:items-center justify-center p-0 md:p-4 font-sans relative">
      {/* Mobile background map/color if needed outside */}
      <div className="w-full max-w-[940px] bg-transparent md:bg-white md:rounded-3xl md:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-4 flex flex-col md:flex-row min-h-screen md:h-auto md:min-h-[600px] overflow-hidden md:overflow-visible relative z-10">
        
        {/* Mobile Header / Desktop Sidebar */}
        <div className="md:shrink-0 h-[172px] md:h-auto z-0 absolute top-0 left-0 w-full md:relative md:w-auto">
          <Sidebar currentStep={state.currentStep} />
        </div>

        {/* Form Content Area */}
        <div className="flex-grow px-6 py-8 md:px-[100px] md:py-10 relative bg-white mt-[99px] md:mt-0 mb-24 md:mb-0 rounded-xl md:rounded-none mx-4 sm:mx-8 md:mx-0 shadow-xl md:shadow-none flex flex-col z-10 md:bg-transparent">
          
          <div className="flex-grow relative overflow-hidden md:overflow-visible">
              <div key={state.currentStep} className="w-full h-full animate-[fadeIn_0.3s_ease-in-out]">
                {state.currentStep === 1 && (
                  <PersonalInfo 
                    data={state.userData} 
                    errors={errors} 
                    onChange={(userData) => setState({ ...state, userData })} 
                  />
                )}
                {state.currentStep === 2 && (
                  <SelectPlan 
                    planId={state.planId} 
                    billingCycle={state.billingCycle}
                    onChangePlan={(planId) => setState({ ...state, planId })}
                    onChangeCycle={(billingCycle) => setState({ ...state, billingCycle })}
                  />
                )}
                {state.currentStep === 3 && (
                  <AddOns 
                    selectedAddOns={state.addOnIds} 
                    billingCycle={state.billingCycle}
                    onChange={(addOnIds) => setState({ ...state, addOnIds })}
                  />
                )}
                {state.currentStep === 4 && (
                  <Summary 
                    state={state}
                    onGoToPlan={handleGoToPlan}
                  />
                )}
                {state.currentStep === 5 && <ThankYou />}
              </div>
          </div>

          {/* Bottom Navigation */}
          {state.currentStep < 5 && (
            <div className="md:mt-8 flex justify-between items-center p-4 md:p-0 pt-4 bg-white md:bg-transparent fixed md:relative bottom-0 left-0 w-full md:w-auto shadow-[0_-4px_10px_rgb(0,0,0,0.05)] md:shadow-none z-20">
              {state.currentStep > 1 ? (
                <button 
                  type="button"
                  onClick={handleBack}
                  className="text-cool-gray font-bold hover:text-marine-blue transition-colors focus:outline-none focus:ring-2 focus:ring-marine-blue rounded px-2 py-1"
                >
                  Go Back
                </button>
              ) : (
                <div></div>
              )}
              
              <button 
                type="button"
                onClick={handleNext}
                className={`px-6 py-3 rounded-lg font-medium text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purplish-blue/50 ${
                  state.currentStep === 4 
                    ? 'bg-purplish-blue hover:bg-purplish-blue/90 shadow-md hover:shadow-lg' 
                    : 'bg-marine-blue hover:bg-marine-blue/90 shadow-md hover:shadow-lg'
                }`}
              >
                {state.currentStep === 4 ? 'Confirm' : 'Next Step'}
              </button>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
