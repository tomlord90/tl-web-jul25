export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-5xl font-source font-bold text-center mb-12 text-slate-800">About Me</h2>
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <p className="text-lg mb-6 text-slate-900">I graduated with Bachelor’s degrees in Computer Science and Modern Languages (French & German) from the Technical University of Berlin, Germany, and the University of Birmingham, UK, respectively.</p>
            <p className="text-lg mb-6 text-slate-900">I have worked in the FinTech, IoT and real estate industries, developing software for millions of end-users using numerous technologies. Java and TypeScript have been a common thread throughout these projects, so this is where my expertise lies, though I am always eager to try out new technologies.</p>
            <p className="text-lg mb-6 text-slate-900">I completed the Pivotal Spring Core Professional training program in 2019 and have attended various European conferences in the quest to further my professional knowledge. In the workplace, I value clear and concise communication, creativity, and an inclusive learning environment promoting constant self-improvement.</p>
            <p className="text-lg mb-6 text-slate-900">When I’m not programming, I enjoy music production, playing the guitar, photography, chess, cinema, and getting engrossed in a great book.  I speak fluent German, French, and am currently immersing myself in Spanish, having recently moved to Valencia.</p>
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