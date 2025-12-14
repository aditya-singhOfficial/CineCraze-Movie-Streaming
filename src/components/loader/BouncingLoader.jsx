import React from "react";

const BouncingLoader = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-900">
      <div className="flex space-x-2">
        <div
          className="h-4 w-4 rounded-full bg-cyan-400 animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="h-4 w-4 rounded-full bg-purple-500 animate-bounce"
          style={{ animationDelay: "-0.15s" }}
        ></div>
        <div
          className="h-4 w-4 rounded-full bg-pink-500 animate-bounce"
          style={{ animationDelay: "-0.3s" }}
        ></div>
      </div>
    </div>
  );
};

export default BouncingLoader;
