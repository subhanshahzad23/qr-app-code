import Features from "@/components/HomePage/Features";
import Hero from "@/components/HomePage/Hero";
import HowItWorks from "@/components/HomePage/HowItWorks";
import Steps from "@/components/HomePage/Steps";
import Testimonials from "@/components/HomePage/Testimonials";
import Trial from "@/components/HomePage/Trial";
import Trust from "@/components/HomePage/Trust";
import Ways from "@/components/HomePage/Ways";

export default function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <Features />
      <HowItWorks />
      <Trust />
      <Ways />
      <Testimonials />
      <Trial />
    </main>
  );
}
