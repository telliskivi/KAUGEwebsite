export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Event badge */}
      <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        Tallinn, Estonia · September 12–14, 2025
      </div>

      {/* Main heading */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none mb-6">
        KAUGE
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
          Symposium
        </span>
      </h1>

      {/* Sub-heading */}
      <p className="max-w-xl text-lg md:text-xl text-white/60 leading-relaxed mb-10">
        Three days of ideas, conversations, and connections that shape the future
        of knowledge and culture.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#register"
          className="bg-white text-neutral-950 font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-colors duration-200 text-sm"
        >
          Register Now
        </a>
        <a
          href="#about"
          className="border border-white/20 text-white/80 font-medium px-8 py-4 rounded-full hover:border-white/40 hover:text-white transition-colors duration-200 text-sm"
        >
          Learn More
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
