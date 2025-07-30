export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-5xl font-source font-bold text-center mb-12 text-slate-800">About Me</h2>
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <p className="text-lg mb-6 text-slate-900">I am a software engineer specialising in building robust, user-centric applications for complex industries like FinTech, IoT, and real estate. My work with technologies such as Java, Spring, React, and TypeScript has powered software used by millions of people.</p>
            <p className="text-lg mb-6 text-slate-900">My background is unique, combining a Bachelor's in Computer Science from the Technical University of Berlin with one in Modern Languages (French & German) from the University of Birmingham. This dual focus equips me to write elegant code and communicate technical concepts with clarity. I am a certified Spring Core Professional and a firm believer in continuous learning through industry conferences and collaboration.</p>
            <p className="text-lg mb-6 text-slate-900">In the workplace, I value clear and concise communication, creativity, and an inclusive learning environment promoting constant self-improvement.</p>
            <p className="text-lg mb-6 text-slate-900">Originally from the UK, I lived in Berlin for 12 years and speak fluent German, French, and currently immersing myself in Spanish after moving to Valencia last year. When I'm not coding, I'm likely producing music, playing the guitar, taking photographs, or getting lost in a good book.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-slate-800 mb-2">9+</h3>
                <p className="text-slate-600 font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-slate-800 mb-2">40+</h3>
                <p className="text-slate-600 font-medium">Used technologies</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-slate-800 mb-2">4</h3>
                <p className="text-slate-600 font-medium">Spoken languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 