import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwlapag");

  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Let's work together</h3>
            <p className="text-lg mb-8 text-gray-600">I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600">
                <i className="fas fa-envelope text-red-400 text-xl w-5"></i>
                <span>hey@tomlord.dev</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <i className="fab fa-linkedin text-blue-400 text-xl w-5"></i>
                <a href="https://linkedin.com/in/tom-lord" className="hover:text-blue-400 transition-colors duration-300">linkedin.com/in/tom-lord</a>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <i className="fab fa-github text-slate-800 text-xl w-5"></i>
                <a href="https://github.com/tomlord90" className="hover:text-slate-800 transition-colors duration-300">github.com/tomlord90</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm contact-form">
            <div className="mb-6">
              <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300" />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="mb-6">
              <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="mb-6">
              <textarea name="message" placeholder="Your Message" rows="5" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-vertical min-h-[120px]"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="w-full px-6 py-3 bg-yellow-400 text-gray-800 font-medium rounded-lg hover:bg-yellow-400 hover:-translate-y-0.5 transition-all duration-300">
              Send Message
            </button>
            {state.succeeded && (
              <p className="mt-4 text-green-600 text-center">Thank you for your message! I'll get back to you soon.</p>
            )}
            {state.errors && state.errors.length > 0 && (
              <p className="mt-4 text-red-600 text-center">Sorry, there was an error sending your message. Please try again or email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 