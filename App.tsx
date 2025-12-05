import React, { useState, useMemo, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import FormStep from './components/FormStep';
import SuccessScreen from './components/SuccessScreen';
import { FORM_SECTIONS } from './constants';
import { FormData, Question } from './types';
import { ChevronLeft, ChevronRight, Stethoscope } from 'lucide-react';

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  
  // Flatten questions to a linear array for easier navigation index
  // We need to re-calculate this whenever formData changes because of conditional logic
  const activeQuestions = useMemo(() => {
    const questions: { question: Question; sectionTitle: string; totalInSection: number; currentInSection: number }[] = [];
    
    FORM_SECTIONS.forEach((section) => {
      // Filter questions based on conditional logic
      const visibleQuestions = section.questions.filter(q => {
        if (!q.conditional) return true;
        const dependentValue = formData[q.conditional.field];
        if (!dependentValue) return false;
        
        // Check if the current value of the dependent field matches one of the required values
        if (Array.isArray(dependentValue)) {
            // If the dependent field is an array (checkbox), check intersection
            return dependentValue.some(val => q.conditional!.value.includes(val));
        } else {
            // String value (radio/text)
            return q.conditional.value.includes(dependentValue as string);
        }
      });

      visibleQuestions.forEach((q, index) => {
        questions.push({
          question: q,
          sectionTitle: section.title,
          totalInSection: visibleQuestions.length,
          currentInSection: index + 1
        });
      });
    });
    
    return questions;
  }, [formData]);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStart = () => {
    setStarted(true);
  };

  const handleChange = (id: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    const currentQuestionData = activeQuestions[currentStepIndex];
    const questionId = currentQuestionData.question.id;
    const value = formData[questionId];

    // Basic Validation
    if (currentQuestionData.question.required) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        alert("Please fill out this field to continue.");
        return;
      }
      if (currentQuestionData.question.type === 'checkbox' && currentQuestionData.question.options) {
          // ensure at least one checkbox is checked if required
          if(Array.isArray(value) && value.length === 0) {
              alert("Please select at least one option.");
              return;
          }
      }
    }

    if (currentStepIndex < activeQuestions.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      submitForm();
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      // Optional: go back to welcome screen?
      setStarted(false);
    }
  };

  const submitForm = async () => {
    console.log("Form Submitted:", formData);
    // Simulate API call
    setTimeout(() => {
      setCompleted(true);
    }, 1000);
  };

  // Safe access to current question
  const currentQ = activeQuestions[currentStepIndex];

  // Calculate progress
  const progress = ((currentStepIndex + 1) / activeQuestions.length) * 100;

  return (
    <div className="min-h-screen w-full relative overflow-hidden font-sans">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          // Using a high-quality Nurse/Gym image
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80")',
        }}
      />
      {/* Strong Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-600/90 z-10" />

      {/* Main Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header - Always visible */}
        <header className="p-6 flex justify-between items-center text-white/80">
           <div className="flex items-center gap-2 font-bold text-white text-lg tracking-wide">
             <div className="bg-orange-500 p-1.5 rounded-lg">
                <Stethoscope size={20} className="text-white" />
             </div>
             NURSE FIT
           </div>
           {started && !completed && (
             <div className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
               Step {currentStepIndex + 1} of {activeQuestions.length}
             </div>
           )}
        </header>

        {/* Dynamic View */}
        <main className="flex-grow flex items-center justify-center p-4">
          {!started ? (
            <WelcomeScreen onStart={handleStart} />
          ) : completed ? (
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[400px]">
                 <SuccessScreen />
            </div>
          ) : (
            <div className="w-full max-w-2xl flex flex-col gap-4">
              {/* Progress Bar */}
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-orange-500 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Form Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 min-h-[400px] flex flex-col justify-between transition-all duration-300">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-blue-500 uppercase mb-2 block">
                    {currentQ.sectionTitle}
                  </span>
                  
                  <FormStep 
                    key={currentQ.question.id} // Key ensures re-render on step change for animation
                    question={currentQ.question}
                    formData={formData}
                    onChange={handleChange}
                    onNext={handleNext}
                  />
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
                  <button 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <ChevronLeft size={20} />
                    Back
                  </button>
                  
                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-0.5"
                  >
                    {currentStepIndex === activeQuestions.length - 1 ? 'Finish' : 'Next'}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
        
        {/* Footer */}
        <footer className="p-6 text-center text-white/40 text-xs">
          © {new Date().getFullYear()} Nurse Fitness Challenge. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;