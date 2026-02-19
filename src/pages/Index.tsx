import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Stats />
    <Problem />
    <HowItWorks />
    <Testimonials />
    <Pricing />
    <FAQ />
    <FormSection />
    <Footer />
  </div>
);

export default Index;
