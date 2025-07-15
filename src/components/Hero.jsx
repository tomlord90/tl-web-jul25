export default function Hero() {
  return (
    <section id="home" className="min-h-[100vh] flex flex-col md:flex-row items-center text-white pt-20 relative scroll-mt-20">
      {/* For md and below: show image as <img> */}
      <div className="block md:hidden w-full">
        <img src="/tl-pp.webp" alt="Tom Lord" className="w-full h-auto object-contain" />
      </div>
      {/* For md and up: show background image as before */}
      <div className="hidden md:block md:w-[58.75%] bg-[url('/tl-pp-main.webp')] bg-cover bg-no-repeat min-h-screen"></div>
      <div className="w-full md:w-[41.25%] bg-none md:bg-[url('/tl-pp-side.webp')] bg-no-repeat bg-cover md:min-h-screen">
        <div className="md:h-screen bg-stone-800 border-white border-l-0 md:border-l-8 p-8 opacity-90">
          <h1 className="text-5xl pt-0 md:pt-30 font-bold mb-10">Hi, I'm <span className="text-yellow-400">Tom</span></h1>
          <h2 className="text-xl font-normal mb-6 opacity-90">
            A British/Irish full-stack software engineer with 9+ years experience developing business applications for various enterprises in the DACH region, mainly using <span className="text-yellow-400">Java</span> and <span className="text-yellow-400">React</span>.
          </h2>
          <p className="text-lg mb-10 opacity-80">
            I am currently based in Valencia, Spain, and looking for new opportunities working remotely.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-yellow-400 text-gray-800 font-medium rounded-lg hover:bg-yellow-400 hover:-translate-y-0.5 transition-all duration-300 inline-block">View My Work</a>
            <a href="#contact" className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-800 hover:-translate-y-0.5 transition-all duration-300 inline-block">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
} 