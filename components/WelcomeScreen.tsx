import React from 'react';
import { ArrowRight, Activity, Clock } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 sm:p-12 max-w-2xl mx-auto h-full animate-in fade-in zoom-in duration-500">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 flex items-center gap-2">
        <Activity size={16} />
        Built Specifically for Healthcare Workers
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
        6-Week Shift-Proof Fitness Challenge for Nurses
      </h1>
      
      <p className="text-lg sm:text-xl text-blue-50 mb-8 max-w-xl leading-relaxed drop-shadow-sm">
        Lose 10–15 lbs, feel more energized on shift, and finally stay consistent — without spending hours in the gym.
      </p>

      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left mb-8 border border-white/10 shadow-lg">
        <p className="text-white/90 mb-4 text-sm sm:text-base">
          If you're a nurse working long shifts, rotating days/nights, and trying to squeeze in "normal" workouts... it's no wonder nothing sticks.
        </p>
        <p className="text-white font-semibold italic">
          We'll build your plan around your schedule so you can make real progress without burning out.
        </p>
      </div>

      <button
        onClick={onStart}
        className="group relative bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] transition-all transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3 text-lg"
      >
        Start the Nurse Fitness Quiz
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
      
      <div className="mt-6 flex items-center text-blue-200 text-sm gap-2">
        <Clock size={14} />
        <span>Takes 2 minutes</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;