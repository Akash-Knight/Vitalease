import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true),1000); 
    setTimeout(onComplete,1000);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-white flex flex-col justify-center items-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"  
      }`}
    >
      {/* Logo with animation */}
      <div className="w-24 h-24 flex justify-center items-center animate-bounce">
        <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-lg text-gray-600 animate-pulse">Loading...</p>
    </div>
  );
}
