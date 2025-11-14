import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center particles">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="text-4xl md:text-6xl font-mono font-bold mb-4 gradient-blue neon-blue">
            {text}
            <span className="animate-blink ml-2 text-cyan-400">|</span>
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl animate-fade-in-scale">
            Crafting Digital Experiences
          </p>
        </div>

        {/* Enhanced loading bar */}
        <div className="w-[280px] mx-auto">
          <div className="glass-dark h-2 rounded-full relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-20"></div>
            <div className="w-[40%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_15px_#3b82f6] animate-loading-bar relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Loading text */}
          <div className="mt-4 flex justify-center">
            <span className="text-gray-500 text-sm font-mono animate-pulse">
              Initializing Portfolio...
            </span>
          </div>
        </div>

        {/* Decorative code blocks */}
        <div className="absolute -top-20 -left-20 text-gray-700/50 font-mono text-xs rotate-12 animate-float">
          &lt;developer&gt;
        </div>
        <div className="absolute -bottom-20 -right-20 text-gray-700/50 font-mono text-xs -rotate-12 animate-float" style={{animationDelay: '1s'}}>
          &lt;/creative&gt;
        </div>
      </div>
    </div>
  );
};