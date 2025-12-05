import React from 'react';
import { CheckCircle2, CalendarCheck, FileText } from 'lucide-react';

const SuccessScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-in zoom-in duration-500 h-full">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 size={40} className="text-green-600" />
      </div>
      
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h2>
      
      <p className="text-slate-600 mb-8 max-w-md text-lg">
        Thanks for applying for the Nurse Fitness Challenge. Your coaches Marco & Alec will reach out to you ASAP (check spam mail, texts, messenger, or whatever info you gave).
      </p>

      <div className="bg-blue-50 rounded-xl p-6 w-full max-w-md border border-blue-100 text-left">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <CalendarCheck size={18} />
          Next Steps:
        </h3>
        <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
          <li className="flex items-start gap-3">
            <span className="bg-blue-200 text-blue-800 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">1</span>
            <span>Check your email (and spam) for the challenge outline.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-blue-200 text-blue-800 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">2</span>
            <span>If you selected a text/DM option, look out for a message from us within 24 hours.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-blue-200 text-blue-800 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">3</span>
            <span>Get ready to transform your shift work lifestyle!</span>
          </li>
        </ul>
      </div>
      
      <a 
        href="https://shift-proof-nurses-fit.lovable.app"
        className="mt-8 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
      >
        Back to Main Site
      </a>
    </div>
  );
};

export default SuccessScreen;