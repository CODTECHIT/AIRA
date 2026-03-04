import React from "react";
import AboutSection from "../components/sections/AboutSection";
import FounderSection from "../components/sections/FounderSection";

const About = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col items-center">
      <AboutSection />
      <FounderSection />
    </div>
  );
};

export default About;
