import Timeline from '../components/Timeline/Timeline';

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Page Header */}
      <div className="container mx-auto px-4 py-16 md:py-24">
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
  );
}