const speakers = [
  {
    name: "Dr. Anna Leppänen",
    title: "Professor of AI Ethics, Aalto University",
    tag: "Keynote",
  },
  {
    name: "Marcus Johansson",
    title: "Co-founder & CEO, Norden Labs",
    tag: "Innovation",
  },
  {
    name: "Liis Tamm",
    title: "Director, Estonian Digital Society",
    tag: "Policy",
  },
  {
    name: "Prof. Kaito Yamamoto",
    title: "Computational Linguist, Kyoto University",
    tag: "Research",
  },
  {
    name: "Sofia Bergman",
    title: "Creative Director, Studio Norr",
    tag: "Design",
  },
  {
    name: "Erko Saar",
    title: "Philosopher & Author",
    tag: "Philosophy",
  },
];

const tagColors: Record<string, string> = {
  Keynote: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  Innovation: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Policy: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Research: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Design: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Philosophy: "bg-sky-500/20 text-sky-300 border-sky-500/30",
};

function Initials({ name }: { name: string }) {
  return name
    .split(" ")
    .filter((n) => n !== "Dr." && n !== "Prof.")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function Speakers() {
  return (
    <section id="speakers" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Speakers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Voices that inspire
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s) => (
            <div
              key={s.name}
              className="group border border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-colors duration-200 cursor-pointer"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500/40 to-violet-500/40 flex items-center justify-center text-white font-bold text-lg select-none">
                {Initials({ name: s.name })}
              </div>

              {/* Tag */}
              <span
                className={`self-start text-xs font-medium px-3 py-1 rounded-full border ${tagColors[s.tag]}`}
              >
                {s.tag}
              </span>

              {/* Name & title */}
              <div>
                <p className="text-white font-semibold text-lg leading-tight">{s.name}</p>
                <p className="text-white/50 text-sm mt-1">{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
