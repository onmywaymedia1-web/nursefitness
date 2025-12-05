import React from 'react';
import { Question, FormData } from '../types';
import { Check } from 'lucide-react';

interface FormStepProps {
  question: Question;
  formData: FormData;
  onChange: (id: string, value: string | string[]) => void;
  onNext: () => void;
}

const FormStep: React.FC<FormStepProps> = ({ question, formData, onChange, onNext }) => {
  const currentValue = formData[question.id];

  const handleRadioChange = (value: string) => {
    onChange(question.id, value);
    // Auto advance for radio buttons after a short delay for better UX
    setTimeout(onNext, 250);
  };

  const handleCheckboxChange = (value: string) => {
    const currentList = (currentValue as string[]) || [];
    if (currentList.includes(value)) {
      onChange(question.id, currentList.filter((item) => item !== value));
    } else {
      onChange(question.id, [...currentList, value]);
    }
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-300">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">{question.label}</h2>
      {question.subtext && <p className="text-slate-500 mb-6">{question.subtext}</p>}

      <div className="space-y-3">
        {question.type === 'radio' && question.options?.map((option) => (
          <label
            key={option.value}
            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-slate-50 group
              ${currentValue === option.value 
                ? 'border-blue-500 bg-blue-50/50 shadow-md ring-1 ring-blue-500' 
                : 'border-slate-200 hover:border-blue-300'}`}
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={currentValue === option.value}
              onChange={() => handleRadioChange(option.value)}
              className="hidden"
            />
            <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors
              ${currentValue === option.value ? 'border-blue-500' : 'border-slate-300 group-hover:border-blue-400'}`}>
              {currentValue === option.value && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
            </div>
            <span className={`text-lg ${currentValue === option.value ? 'font-semibold text-blue-900' : 'text-slate-700'}`}>
              {option.label}
            </span>
          </label>
        ))}

        {question.type === 'checkbox' && question.options?.map((option) => {
          const isSelected = (currentValue as string[] || []).includes(option.value);
          return (
            <label
              key={option.value}
              className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-slate-50
                ${isSelected 
                  ? 'border-blue-500 bg-blue-50/50 shadow-md ring-1 ring-blue-500' 
                  : 'border-slate-200 hover:border-blue-300'}`}
            >
              <input
                type="checkbox"
                name={question.id}
                value={option.value}
                checked={isSelected}
                onChange={() => handleCheckboxChange(option.value)}
                className="hidden"
              />
              <div className={`w-6 h-6 rounded border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors
                ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}>
                {isSelected && <Check size={14} className="text-white" />}
              </div>
              <span className={`text-lg ${isSelected ? 'font-semibold text-blue-900' : 'text-slate-700'}`}>
                {option.label}
              </span>
            </label>
          );
        })}

        {(question.type === 'text' || question.type === 'textarea') && (
          <div className="relative">
             {question.type === 'textarea' ? (
                <textarea
                  value={(currentValue as string) || ''}
                  onChange={(e) => onChange(question.id, e.target.value)}
                  placeholder={question.placeholder}
                  className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all min-h-[120px]"
                />
             ) : (
               <input
                type="text"
                value={(currentValue as string) || ''}
                onChange={(e) => onChange(question.id, e.target.value)}
                placeholder={question.placeholder}
                className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormStep;