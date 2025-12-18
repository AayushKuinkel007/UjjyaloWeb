"use client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const FinalCTA = () => {
  const router = useRouter();

  const navigateToContact = () => {
    router.push('/contact');
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="relative overflow-hidden group rounded-xl md:rounded-2xl bg-[#000000] border border-[#2a2a2a] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f48c25]/5 via-[#f48c25]/10 to-[#f48c25]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Floating orbs for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-32 md:h-32 bg-[#f48c25]/10 rounded-full blur-2xl md:blur-3xl animate-pulse pointer-events-none" />
        <div 
          className="absolute bottom-1/4 right-1/4 w-28 h-28 md:w-40 md:h-40 bg-[#f48c25]/5 rounded-full blur-2xl md:blur-3xl animate-pulse pointer-events-none" 
          style={{ animationDelay: '1s' }} 
        />
        
        <div className="relative z-10 space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight">
            Let's Illuminate Your Next Project
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Tell us a bit about what you're building & we'll take it from there.
          </p>
          
          <div className="pt-2 md:pt-4">
            <button
              onClick={navigateToContact}
              className="group/btn inline-flex items-center gap-2 md:gap-3 bg-[#f48c25] hover:bg-[#ff9933] text-black font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,140,37,0.4)] hover:scale-105 active:scale-95"
            >
              <span>Contact Us</span>
              <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-black/30 group-hover/btn:border-black/60 transition-all duration-300 group-hover/btn:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;