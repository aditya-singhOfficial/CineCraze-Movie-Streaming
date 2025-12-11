import React from "react";

const BouncingLoader = () => {
  return (
    /* 1. Container: Full screen, Dark Background, Centered content */
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-900">
      
      {/* 2. Wrapper for the dots */}
      <div className="flex space-x-2">
        
        {/* Dot 1: Cyan */}
        <div 
          className="h-4 w-4 rounded-full bg-cyan-400 animate-bounce" 
          style={{ animationDelay: '0s' }}
        ></div>

        {/* Dot 2: Purple (Delayed slightly) */}
        <div 
          className="h-4 w-4 rounded-full bg-purple-500 animate-bounce" 
          style={{ animationDelay: '-0.15s' }}
        ></div>

        {/* Dot 3: Pink (Delayed more) */}
        <div 
          className="h-4 w-4 rounded-full bg-pink-500 animate-bounce" 
          style={{ animationDelay: '-0.3s' }}
        ></div>
        
      </div>
    </div>
  );
};

export default BouncingLoader;