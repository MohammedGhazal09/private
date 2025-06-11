import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

interface Variants {
  [key: string]: {
    y?: number;
    opacity?: number;
    transition?: {
      duration?: number;
      staggerChildren?: number;
    };
  };
}

const variants: Variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 7,
      staggerChildren: 0.5,
    },
  },
};

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);
    
    try {
      const result = await emailjs.sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      );
      
      console.log('Email sent successfully:', result);
      setSuccess(true);
      
      // Reset form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (error) {
      console.error('Email send failed:', error);
      setError(true);
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-8 lg:py-0"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="flex-1 flex flex-col gap-6 lg:gap-10 text-center lg:text-left" variants={variants}>
        <motion.h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" variants={variants}>
          Let's work together
        </motion.h1>
        <motion.div className="flex flex-col gap-3" variants={variants}>
          <h2 className="text-lg lg:text-xl font-semibold text-orange-500">Mail</h2>
          <span className="text-white text-sm lg:text-base font-light">hello@react.dev</span>
        </motion.div>
        <motion.div className="flex flex-col gap-3" variants={variants}>
          <h2 className="text-lg lg:text-xl font-semibold text-orange-500">Address</h2>
          <span className="text-white text-sm lg:text-base font-light">Hello street New York</span>
        </motion.div>
        <motion.div className="flex flex-col gap-3" variants={variants}>
          <h2 className="text-lg lg:text-xl font-semibold text-orange-500">Phone</h2>
          <span className="text-white text-sm lg:text-base font-light">+1 234 5678</span>
        </motion.div>
      </motion.div>
      
      <div className="flex-1 relative flex items-center justify-center w-full">
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 6, duration: 1 }}
        >
          <svg 
            className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]"
            viewBox="0 0 300 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Envelope Body */}
            <motion.path
              strokeWidth={2}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, delay: 0 }}
              d="M50 80 L250 80 L250 200 L50 200 Z"
            />
            
            {/* Envelope Flap */}
            <motion.path
              strokeWidth={2}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              d="M50 80 L150 140 L250 80"
            />
            
            {/* Letter inside envelope */}
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 2 }}
              d="M70 110 L230 110"
            />
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              d="M70 130 L200 130"
            />
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 2.4 }}
              d="M70 150 L180 150"
            />
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
              d="M70 170 L210 170"
            />
            
            {/* @ Symbol */}
            <motion.circle
              cx="150"
              cy="50"
              r="15"
              strokeWidth={2}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 3 }}
            />
            <motion.circle
              cx="150"
              cy="50"
              r="8"
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
            />
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.5, delay: 3.4 }}
              d="M158 42 L158 58"
            />
            
            {/* Decorative elements - Communication waves */}
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 3.6 }}
              d="M30 60 Q40 50, 50 60"
            />
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 3.8 }}
              d="M250 60 Q260 50, 270 60"
            />
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 4 }}
              d="M25 70 Q35 60, 45 70"
            />
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 4.2 }}
              d="M255 70 Q265 60, 275 70"
            />
            
            {/* Heart symbol for personal touch */}
            <motion.path
              strokeWidth={1.5}
              fill="none"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 4.4 }}
              d="M200 50 C200 45, 205 40, 210 40 C215 40, 220 45, 220 50 C220 55, 210 65, 210 65 C210 65, 200 55, 200 50 Z"
            />
          </svg>
        </motion.div>
        
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="relative z-10 flex flex-col gap-4 lg:gap-5 w-full max-w-md lg:max-w-lg p-5 lg:p-6 rounded-xl bg-black bg-opacity-10 backdrop-blur-md border border-white border-opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 7, duration: 1 }}
        >
          <input 
            type="text" 
            required 
            placeholder="Name" 
            name="name"
            className="w-full p-3 lg:p-4 bg-black bg-opacity-20 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          />
          <input 
            type="email" 
            required 
            placeholder="Email" 
            name="email"
            className="w-full p-3 lg:p-4 bg-black bg-opacity-20 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          />
          <textarea 
            rows={6} 
            placeholder="Message" 
            name="message"
            className="w-full p-3 lg:p-4 bg-black bg-opacity-20 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            required
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="w-full p-3 lg:p-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          
          {error && (
            <motion.div 
              className="p-3 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg text-red-300 text-sm text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Failed to send message. Please try again.
            </motion.div>
          )}
          
          {success && (
            <motion.div 
              className="p-3 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg text-green-300 text-sm text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;