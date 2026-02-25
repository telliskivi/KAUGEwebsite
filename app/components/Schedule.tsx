const days = [
  {
    day: "Day 1",
    date: "September 12",
    sessions: [
      {
        time: "09:00",
        title: "Opening Ceremony & Welcome Address",
        speaker: "Dr. Anna Leppänen",
        type: "Keynote",
      },
      {
        time: "11:00",
        title: "The Ethics of Artificial Intelligence",
        speaker: "Dr. Anna Leppänen",
        type: "Talk",
      },
      {
        time: "14:00",
        title: "Innovation in the Nordics",
        speaker: "Marcus Johansson",
        type: "Panel",
      },
      {
        time: "16:30",
        title: "Workshop: Designing for Inclusion",
        speaker: "Sofia Bergman",
        type: "Workshop",
      },
    ],
  },
  {
    day: "Day 2",
    date: "September 13",
    sessions: [
      {
        time: "09:30",
        title: "Digital Governance and Society",
        speaker: "Liis Tamm",
        type: "Keynote",
      },
      {
        time: "11:30",
        title: "Language, Machines, and Meaning",
        speaker: "Prof. Kaito Yamamoto",
        type: "Talk",
      },
      {
        time: "14:00",
        title: "Futures of Work: A Roundtable",
        speaker: "Multiple Speakers",
        type: "Panel",
      },
      {
        time: "16:00",
        title: "Workshop: Systems Thinking",
        speaker: "Erko Saar",
        type: "Workshop",
      },
    ],
  },
  {
    day: "Day 3",
    date: "September 14",
    sessions: [
      {
        time: "10:00",
        title: "Philosophy of Knowledge in the Digital Age",
        speaker: "Erko Saar",
        type: "Keynote",
      },
      {
        time: "12:00",
        title: "Networking Lunch & Exhibitions",
        speaker: "",
        type: "Social",
      },
      {
        time: "14:30",
        title: "Creative Technology: Art Meets Code",
        speaker: "Sofia Bergman",
        type: "Talk",
      },
      {
        time: "17:00",
        title: "Closing Ceremony",
        speaker: "All Speakers",
        type: "Keynote",
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  Keynote: "text-indigo-300",
  Talk: "text-violet-300",
  Panel: "text-emerald-300",
  Workshop: "text-amber-300",
  Social: "text-pink-300",
};

export default function Schedule() {
  return (
    <section id="schedule" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Three days of ideas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {days.map((d) => (
            <div key={d.day} className="flex flex-col gap-4">
              <div className="mb-2">
                <p className="text-white font-bold text-xl">{d.day}</p>
                <p className="text-white/50 text-sm">{d.date}</p>
              </div>
              {d.sessions.map((s) => (
                <div
                  key={s.title}
                  className="border border-white/10 bg-white/5 rounded-xl p-5 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-xs font-mono">{s.time}</span>
                    <span className={`text-xs font-medium ${typeColors[s.type]}`}>
                      {s.type}
                    </span>
                  </div>
                  <p className="text-white font-semibold leading-snug">{s.title}</p>
                  {s.speaker && (
                    <p className="text-white/40 text-xs">{s.speaker}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
