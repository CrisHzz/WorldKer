"use client";

import HeaderLanding from '@/app/components/headerLanding';
import Stars from '@/app/components/Stars'; 

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Stars /> 

      <div className="absolute inset-0 opacity-30"> {/* Reducir la opacidad para que sea más delicado */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-700/50 to-transparent" style={{ transform: 'scale(1.2)' }} />
        <div className="absolute inset-0 bg-gradient-radial from-blue-700/80 to-transparent" style={{ transform: 'translate(20%, 20%) scale(1.5)' }} />
        <div className="absolute inset-0 bg-gradient-radial from-blue-700/30 to-transparent" style={{ transform: 'translate(-20%, -20%) scale(1.8)' }} />
      </div>

      <HeaderLanding />

      <main className="relative flex items-center justify-center w-full h-full text-center text-white text-4xl">
        Landing page
      </main>
    </div>
  );
}
