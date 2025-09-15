
const Hero = () => {
  return (
    <section id="home" className="gradient-bg py-24 md:py-32 rounded-b-3xl shadow-xl -mt-20 flex items-center justify-center text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
            Premium Electronics at Your Fingertips
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 opacity-90 animate-fadeIn delay-100">
            Discover the latest technology with secure payments, fast shipping, and excellent customer service.
          </p>
          <a href="#products" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all transform hover:scale-105">
            Shop Now <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;