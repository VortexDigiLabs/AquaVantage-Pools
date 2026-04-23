/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceMatrix from './components/ServiceMatrix';

// Lazy load non-critical sections below the fold
const Featured = lazy(() => import('./components/Featured'));
const Process = lazy(() => import('./components/Process'));
const Packages = lazy(() => import('./components/Packages'));
const TrustBar = lazy(() => import('./components/TrustBar'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading placeholder
const SectionLoader = () => <div className="h-[400px] bg-brand-navy flex items-center justify-center text-white/20 uppercase tracking-widest text-[10px]">Loading Experience...</div>;

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceMatrix />
        
        <Suspense fallback={<SectionLoader />}>
          <Featured />
          <Process />
          <Packages />
          <TrustBar />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
