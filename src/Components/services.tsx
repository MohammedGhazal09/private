import { useState } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  console.log(hoveredService);
  

  const services = [
    {
      title: "Brand Identity",
      description: "Craft distinctive brand identities that capture your essence and resonate with your audience. We create cohesive visual systems that tell your story across every touchpoint.",
      icon: "✨",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      stats: "50+ Brands Transformed"
    },
    {
      title: "Web Development", 
      description: "Build lightning-fast, scalable web experiences that convert visitors into customers. From concept to deployment, we create digital solutions that drive results.",
      icon: "🚀",
      gradient: "from-blue-500 via-teal-500 to-green-500",
      stats: "200+ Projects Delivered"
    },
    {
      title: "Digital Marketing",
      description: "Amplify your reach with data-driven marketing strategies that deliver measurable results. We turn insights into action and audiences into advocates.",
      icon: "📊",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      stats: "300% Average ROI"
    },
    {
      title: "Strategy & Consulting",
      description: "Navigate the digital landscape with expert guidance. We help you identify opportunities, overcome challenges, and build sustainable competitive advantages.",
      icon: "🎯",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      stats: "100+ Strategies Developed"
    }
  ];

  return (
    <div className="h-auto min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0c0c1d] to-[#111132] text-white relative py-4 sm:py-8">
      
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 h-full flex flex-col max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-8 md:mb-12">
          <p className="font-light text-xs sm:text-sm md:text-lg text-gray-300 mb-2 sm:mb-4 px-2">
            Transforming visions into digital reality
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              one pixel at a time
            </span>
          </p>
          
          <div className="flex justify-center mb-3 sm:mb-6">
            <div className="w-24 sm:w-32 md:w-64 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>
        </div>

        {/* Hero Title Section */}
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-8">
            <div className="relative group">
              <img 
                src="https://st3.depositphotos.com/13768208/33325/i/1600/depositphotos_333253058-stock-photo-young-business-men-hold-meeting.jpg" 
                alt="Business team meeting" 
                className="w-16 h-8 sm:w-24 sm:h-12 md:w-48 md:h-20 lg:w-64 lg:h-24 rounded-full object-cover shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x200/1f2937/ffffff?text=Business+Team";
                }}
              />
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-thin text-white text-center px-2">
              <span className="font-bold hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Innovative
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
                Solutions
              </span>
              <br />
              <span className="font-bold hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                For Your
              </span>{" "}
              Business.
            </h1>
            
            <button className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 border-none text-xs sm:text-sm md:text-base font-bold cursor-pointer text-white hover:scale-105 hover:shadow-xl transition-all duration-300 mt-2 sm:mt-4">
              EXPLORE SERVICES
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex-1 pb-4 sm:pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative p-3 sm:p-4 md:p-6 border border-white/10 bg-black/20 backdrop-blur-sm flex flex-col justify-between min-h-[200px] sm:min-h-[240px] md:min-h-[280px] cursor-pointer overflow-hidden rounded-lg hover:bg-white/95 hover:scale-102 hover:-translate-y-1 transition-all duration-300"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg`} />
                
                <div className="relative z-10 flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <span className="text-xl sm:text-2xl md:text-3xl filter drop-shadow-lg">
                      {service.icon}
                    </span>
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-300 mb-2 sm:mb-3 md:mb-4">
                    {service.description}
                  </p>
                  
                  <div className="text-xs text-orange-400 group-hover:text-orange-600 font-semibold transition-colors duration-300 mb-3 sm:mb-4">
                    {service.stats}
                  </div>
                </div>
                
                <button className={`relative z-10 mt-auto px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-gradient-to-r ${service.gradient} text-white border-none cursor-pointer font-semibold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                  <span className="flex items-center justify-center gap-2">
                    Explore
                    <span>→</span>
                  </span>
                </button>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;