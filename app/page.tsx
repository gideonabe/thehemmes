'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '@/components/SplashScreen';
import Homepage from '@/components/Homepage';

export default function Page() {
  const [isEntered, setIsEntered] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Check if the user has already "entered" this session
  //   const hasEntered = sessionStorage.getItem('the_hemmes_entered');
  //   if (hasEntered) {
  //     setIsEntered(true);
  //   }
  //   setIsLoading(false);
  // }, []);

  // const handleEnter = () => {
  //   sessionStorage.setItem('the_hemmes_entered', 'true');
  //   setIsEntered(true);
  // };

  // if (isLoading) return null;

  return (
    <main className="relative h-screen w-full bg-cloud-dancer">
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <SplashScreen key="splash" onEnter={() => setIsEntered(true)} />
          // <SplashScreen key="splash" onEnter={handleEnter} />
        ) : (
          <Homepage key="home" />
        )}
      </AnimatePresence>
    </main>
  );
}