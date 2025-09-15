
const featuresData = [
  {
    icon: 'fas fa-search-plus',
    title: 'Intuitive Search',
    description: 'Easy-to-use interface with powerful product search and filtering.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile Optimized',
    description: 'A flawless shopping experience on any device or screen size.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Secure Payments',
    description: 'SSL encrypted checkout with multiple secure payment options.',
  },
];

const Features= () => {
  return (
    <section className="container mx-auto px-4 md:px-12 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose TechStore?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {featuresData.map((feature, index) => (
          <div key={index} className="p-8 bg-white rounded-2xl shadow-lg card-hover">
            <i className={`${feature.icon} text-5xl text-blue-500 mb-4`}></i>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;