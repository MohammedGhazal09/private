import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      staggerChildren: 0.15,
      ease: [0.22, 1, 0.36, 1]
    },
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const services = [
    {
      title: "Brand Identity",
      description: "Craft distinctive brand identities that capture your essence and resonate with your audience. We create cohesive visual systems that tell your story across every touchpoint.",
      icon: "✨",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      hoverGradient: "from-purple-600 via-pink-600 to-red-600",
      stats: "50+ Brands Transformed"
    },
    {
      title: "Web Development", 
      description: "Build lightning-fast, scalable web experiences that convert visitors into customers. From concept to deployment, we create digital solutions that drive results.",
      icon: "🚀",
      gradient: "from-blue-500 via-teal-500 to-green-500",
      hoverGradient: "from-blue-600 via-teal-600 to-green-600",
      stats: "200+ Projects Delivered"
    },
    {
      title: "Digital Marketing",
      description: "Amplify your reach with data-driven marketing strategies that deliver measurable results. We turn insights into action and audiences into advocates.",
      icon: "📊",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      hoverGradient: "from-orange-600 via-amber-600 to-yellow-600",
      stats: "300% Average ROI"
    },
    {
      title: "Strategy & Consulting",
      description: "Navigate the digital landscape with expert guidance. We help you identify opportunities, overcome challenges, and build sustainable competitive advantages.",
      icon: "🎯",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      hoverGradient: "from-indigo-600 via-purple-600 to-pink-600",
      stats: "100+ Strategies Developed"
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0c0c1d] to-[#111132] text-white flex flex-col overflow-hidden relative"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: useTransform(springX, (x) => x - 8),
          y: useTransform(springY, (y) => y - 8),
        }}
        animate={{
          scale: hoveredService !== null ? 2 : 1,
          opacity: hoveredService !== null ? 0.8 : 0.3
        }}
      />

      {/* Header Section */}
      <motion.div 
        className="flex-1 flex justify-center items-center pt-8 px-4 sm:justify-end sm:pr-8 lg:pr-16 relative z-10"
        variants={variants}
      >
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <motion.p 
            className="font-light text-base text-gray-300 text-center sm:text-right sm:text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transforming visions into digital reality
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
              one pixel at a time
            </span>
          </motion.p>
          <motion.div
            className="relative"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent sm:w-64 lg:w-96" />
            <motion.div
              className="absolute inset-0 w-48 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent sm:w-64 lg:w-96"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Title Section */}
      <motion.div 
        className="flex-[2] flex flex-col items-center justify-center space-y-8 px-4 py-8 sm:space-y-12 lg:space-y-16 relative z-10"
        variants={variants}
      >
        <motion.div 
          className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8 lg:gap-16"
          variants={variants}
        >
          <motion.div className="left-24 relative group">
            <motion.img 
              src="https://st3.depositphotos.com/13768208/33325/i/1600/depositphotos_333253058-stock-photo-young-business-men-hold-meeting.jpg" 
              alt="Business team meeting" 
              className="w-36 h-14 rounded-full object-cover sm:w-52 sm:h-20 lg:w-96 lg:h-32 shadow-2xl border border-white/10"
              whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src = "https://via.placeholder.com/400x200/1f2937/ffffff?text=Business+Team";
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-thin text-white text-center sm:text-5xl lg:text-9xl"
            variants={variants}
          >
            <motion.span 
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 20px rgba(249, 115, 22, 0.8)",
                color: "#f97316"
              }}
              className="font-bold cursor-pointer transition-all duration-500 inline-block"
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Innovative
            </motion.span>{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Solutions
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8 lg:gap-16"
          variants={variants}
        >
          <motion.h1 
            className="text-4xl font-thin text-white text-center sm:text-5xl lg:text-9xl"
            variants={variants}
          >
            <motion.span 
              whileHover={{ 
                scale: 1.1,
                textShadow: "0 0 20px rgba(249, 115, 22, 0.8)",
                color: "#f97316"
              }}
              className="font-bold cursor-pointer transition-all duration-500 inline-block"
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              For Your
            </motion.span>{" "}
            Business.
          </motion.h1>
          
          <motion.button 
            className="relative w-36 h-14 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 border-none text-sm font-bold cursor-pointer text-white sm:w-44 sm:h-16 sm:text-base lg:w-96 lg:h-32 lg:text-2xl overflow-hidden group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative z-10">EXPLORE SERVICES</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="flex-[3] w-full px-4 pb-8 sm:px-6 lg:max-w-7xl lg:mx-auto relative z-10"
        variants={variants}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-6 border border-white/10 bg-black/20 backdrop-blur-sm flex flex-col justify-between min-h-[280px] cursor-pointer overflow-hidden lg:border-r lg:last:border-r-0 lg:border-b-0 lg:min-h-[320px]"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)"
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 25
              }}
              variants={{
                initial: { opacity: 0, y: 60, rotateX: -10 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  transition: { 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }
                }
              }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
            >
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  background: hoveredService === index 
                    ? `linear-gradient(135deg, ${service.hoverGradient})`
                    : `linear-gradient(135deg, ${service.gradient})`
                }}
              />
              
              {/* Floating particles on hover */}
              {hoveredService === index && (
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-400 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: "100%",
                        opacity: 0
                      }}
                      animate={{
                        y: "-20%",
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div className="relative z-10 flex-1">
                <motion.div
                  className="flex items-center gap-4 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-3xl lg:text-4xl filter drop-shadow-lg"
                    animate={{ 
                      rotate: hoveredService === index ? [0, 10, -10, 0] : 0,
                      scale: hoveredService === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.span>
                  <motion.h2 
                    className="text-xl font-bold sm:text-2xl lg:text-2xl text-white group-hover:text-gray-900 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {service.title}
                  </motion.h2>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 group-hover:text-gray-700 leading-relaxed text-sm lg:text-base transition-colors duration-300 mb-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.div
                  className="text-xs text-orange-400 group-hover:text-orange-600 font-semibold transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.stats}
                </motion.div>
              </div>
              
              <motion.button 
                className={`relative z-10 mt-4 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white border-none cursor-pointer font-semibold text-sm rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <motion.span
                  className="flex items-center gap-2"
                  whileHover={{ x: 2 }}
                >
                  Explore
                  <motion.span
                    animate={{ x: hoveredService === index ? 3 : 0 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </motion.button>
              
              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/50 rounded-lg transition-all duration-300"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(249, 115, 22, 0.3)" 
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;