/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Process from './components/Process';
import Packages from './components/Packages';
import TrustBar from './components/TrustBar';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Process />
        <Packages />
        <TrustBar />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
