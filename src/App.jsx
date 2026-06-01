import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GlobalStatsSection from './components/GlobalStatsSection';
import SilenceReasonsSection from './components/SilenceReasonsSection';
import VietnamStatsSection from './components/VietnamStatsSection';
import ConsequencesSection from './components/ConsequencesSection';
import AcademicViewSection from './components/AcademicViewSection';
import PolicyGapSection from './components/PolicyGapSection';
import LawTimelineSection from './components/LawTimelineSection';
import YouthResponsibilitySection from './components/YouthResponsibilitySection';
import ConclusionSection from './components/ConclusionSection';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import { presentationData } from './data/presentationData';
import './styles/presentation.css';

function App() {
  return (
    <div className="bg-dv-bg min-h-screen relative">
      {/* Ambient floating particles */}
      <FloatingParticles />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection data={presentationData.hero} />
        <GlobalStatsSection data={presentationData.globalStats} />
        <SilenceReasonsSection data={presentationData.silenceReasons} />
        <VietnamStatsSection data={presentationData.vietnamStats} />
        <ConsequencesSection data={presentationData.consequences} />
        <AcademicViewSection data={presentationData.academicView} />
        <PolicyGapSection data={presentationData.policyGap} />
        <LawTimelineSection data={presentationData.lawTimeline} />
        <YouthResponsibilitySection data={presentationData.youthResponsibility} />
        <ConclusionSection data={presentationData.conclusion} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
