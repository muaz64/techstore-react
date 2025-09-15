import { useState } from 'react';

const faqData = [
  {
    question: 'How do I track my order?',
    answer: "Once your order has shipped, we will send you an email with a tracking number and a link to the carrier's website. You can also find this information in your order history when you are logged into your account.",
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on most items. Products must be in their original condition and packaging. Please contact our support team to initiate a return.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Visa, Mastercard, American Express, PayPal, and Apple Pay for all online orders. All transactions are securely processed and encrypted.',
  },
];


const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="p-6">
      <button
        className="faq-question w-full text-left font-semibold text-lg flex justify-between items-center transition-colors hover:text-blue-600"
        onClick={onClick}
      >
        {item.question}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
        </span>
      </button>
      <div
        className={`faq-answer mt-4 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="pb-2">{item.answer}</p>
      </div>
    </div>
  );
};

// The main FAQ component
const FAQ = () => {
  // State to track the index of the currently open FAQ item. 'null' means all are closed.
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle toggling an FAQ item
  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container mx-auto px-4 md-px-12 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
        <i className="fas fa-question-circle text-blue-600 mr-2"></i> Frequently Asked Questions
      </h2>
      <div className="bg-white rounded-2xl shadow-lg divide-y divide-gray-200">
        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;