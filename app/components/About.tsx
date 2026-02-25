const stats = [
  { value: "3", label: "Days" },
  { value: "40+", label: "Speakers" },
  { value: "1,200+", label: "Attendees" },
  { value: "12", label: "Sessions" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A gathering for the curious and the bold
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              KAUGE Symposium is an annual three-day event that unites academics,
              entrepreneurs, artists, and thinkers to explore the intersections of
              technology, culture, and society.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Held in the heart of Tallinn, the symposium features keynote
              addresses, hands-on workshops, and curated networking sessions
              designed to spark collaboration across disciplines.
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-white/10 bg-white/5 rounded-2xl p-8 flex flex-col gap-2"
              >
                <span className="text-5xl font-bold text-white">{s.value}</span>
                <span className="text-white/50 text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
