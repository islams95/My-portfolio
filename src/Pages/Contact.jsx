import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-6 py-12 pt-20"
    >
      {/* Contact Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 relative inline-block after:block after:absolute after:w-full after:h-1 after:bg-blue-600 after:bottom-0 after:left-0 after:rounded-md">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Feel free to reach out for collaborations or inquiries.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {submitted && (
          <div className="mb-4 text-green-600 font-semibold text-center">
            Message sent successfully! 🎉
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all"
          >
            Send Message ✉️
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Other Ways to Reach Me</h3>
        <p className="text-gray-700 mb-2">📧 Email: <a href="mailto:islams2024@gmail.com" className="text-blue-600 hover:underline">islams2024@gmail.com</a></p>
        <p className="text-gray-700 mb-2">📞 Saudi Arabia: <a href="tel:+966564949080" className="text-blue-600 hover:underline">+966564949080</a></p>
        <p className="text-gray-700 mb-2">📞 Egypt: <a href="tel:+201554100996" className="text-blue-600 hover:underline">+201554100996</a></p>
        <p className="text-gray-700">🌍 Location: Jeddah, Saudi Arabia</p>
      </div>
    </motion.div>
  );
}

export default Contact;