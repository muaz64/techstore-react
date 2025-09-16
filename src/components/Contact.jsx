import React, { useState } from 'react';

const Contact = () => {
  // State for each form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // A single handler to update the state for any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="container mx-auto px-4 md:px-12 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Column: Info & Map */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <p className="text-gray-600 flex items-center gap-3">
              <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
              123 Tech Avenue, Chattogram.
            </p>
            <p className="text-gray-600 flex items-center gap-3">
              <i className="fas fa-envelope text-blue-600 text-xl"></i>
              support@techstore.com
            </p>
            <p className="text-gray-600 flex items-center gap-3">
              <i className="fas fa-phone text-blue-600 text-xl"></i>
              +880-TECH-STORE
            </p>
          </div>
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-md">
            {/* Note the style attribute is an object in JSX */}
            <iframe 
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.8215780117!2d91.7583713972656!3d22.273413500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdf34a17951a7%3A0x3395c9325c276839!2sChattogram!5e0!3m2!1sen!2sbd!4v1726509141457!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center lg:text-left">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors">
              </textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              <i className="fas fa-paper-plane mr-2"></i> Send Message
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;