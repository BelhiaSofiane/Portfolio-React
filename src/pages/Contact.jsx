import emailjs from '@emailjs/browser'; 
import    { useRef } from 'react';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_ox3sbwv", "template_w5yg3p2", form.current, {
        publicKey: "PqdP1dCSEiUeFoPJp",
      })
      .then(
        ()=>{
          console.log("SUCCESS!")
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

    return (
      <section className="rounded-xl px-4 py-16 max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="border rounded-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Let's Connect!</h2>
          <p className="text-sm">
            I'm always open to discussing new projects or opportunities. Feel free to reach out.
          </p>
        </div>

        {/* Email and Social Links */}
        <div className="mb-6">
          <p className="mb-2 text-sm sm:text-base">
            Email:{" "}
            <a href="mailto:sofianebelhia150@gmail.com" className="underline">
              Sofianebelhia150@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 text-xl">
            <a
              href="https://github.com/BelhiaSofianeCS50"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <i className="fab fa-github"></i>
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sofiane-belhia-1696b5285/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <i className="fab fa-linkedin"></i>
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="p-6 rounded-xl shadow-md w-full max-w-md mx-auto space-y-4">
          <h3 className="text-left font-medium">Contact Form</h3>
          <input
            type="text"
            name='name'
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 placeholder-inherit"
            required
          />
          <input
            type="email"
            name='email'
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 placeholder-inherit"
            required
          />
          <textarea
            placeholder="Your Message"
            name='message'
            rows="4"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 placeholder-inherit"
            required
          ></textarea>
          <button type="submit" value="Send" className="border w-full py-2 rounded-md transition">
            Send Message
          </button>
        </form>
      </section>
    );
};

export default Contact;
