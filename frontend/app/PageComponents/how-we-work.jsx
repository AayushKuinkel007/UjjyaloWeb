import Timeline from "../Components/Timeline/Timeline";

export default function HowWeWorkPage() {
  return (
    <>
      <section id="process">
        <div className="flex justify-center">
          <span className="inline-block px-8 py-3 bg-[#1a1a1a]/40 border border-white/10 font-bold uppercase text-white text-xs rounded-full mt-4">
            Our Process
          </span>
        </div>
        <div className="min-h-screen">
          {/* Page Header */}
          <div className="container mx-auto px-4 py-16 md:py-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
              How We Work
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              Our proven process from discovery to launch
            </p>
          </div>

          {/* Timeline Component */}
          <Timeline />
        </div>
      </section>
    </>
  );
}
