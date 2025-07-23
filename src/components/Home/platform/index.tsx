import Link from "next/link";

const Platform = () => {
  return (
    <section className=" sm:pt-24 pt-12 relative z-1 overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        {/* Main Content Card */}
        <div className="relative group">
          {/* Clean professional background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-primary/5 rounded-3xl"></div>
          
          {/* Subtle border */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors duration-500"></div>
          
          {/* Content Container */}
          <div className="relative px-10 md:px-16 py-14 grid grid-cols-12 items-center gap-8">
            {/* Text Content */}
            <div className="lg:col-span-8 col-span-12 relative z-10">
              {/* Subtitle badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                <span className="text-primary text-sm font-medium">Digital Transformation Partner</span>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-white sm:text-40 text-30 mb-6 leading-tight">
                Let's Build Your{" "}
                <span className="relative inline-block">
                  <span className="text-primary bg-gradient-to-r from-primary to-tealGreen bg-clip-text text-transparent">
                    Digital Success
                  </span>
                  {/* Underline decoration */}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-tealGreen rounded-full opacity-60"></div>
                </span>{" "}
                Together!
              </h2>
              
              {/* Description */}
              <div className="text-muted text-opacity-80 text-18 leading-relaxed space-y-4">
                <p>
                  Are you ready to take your business to the next level with the{" "}
                  <span className="text-primary font-medium">best IT company in Kathmandu?</span>
                </p>
                <p>
                  Whether you need a custom website, effective SEO, eye-catching designs, or full digital marketing support –{" "}
                  <strong className="text-white font-semibold bg-gradient-to-r from-primary/20 to-transparent px-2 py-1 rounded">
                    NepByte
                  </strong>{" "}
                  is here to help.
                </p>
                
                {/* Call to action text */}
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl border-l-4 border-primary/50 mt-6">
                  <p className="text-white/90 font-medium">
                    🚀 Contact NepByte today for a free consultation and personalized IT solutions tailored just for your business. 
                    <span className="text-primary"> Don't wait—start your digital transformation now!</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button Section */}
            <div className="lg:col-span-4 col-span-12 relative z-10">
              <div className="flex lg:justify-end lg:mt-0 mt-8 justify-center">
                <div className="relative group/btn">
                  {/* Subtle button shadow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-tealGreen/20 rounded-lg opacity-0 group-hover/btn:opacity-100 transition duration-300"></div>
                  
                  <Link
                    href="/contact"
                    
                    className="relative flex items-center justify-center text-darkmode bg-gradient-to-r from-primary to-blue-600 border-0 py-4 px-8 rounded-lg sm:text-20 text-18 font-semibold hover:from-tealGreen hover:to-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group/btn"
                  >
                    <span className="mr-2">Get Free Consultation</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Feature highlights */}
              <div className="lg:mt-8 mt-6 space-y-3 lg:text-right text-center">
                <div className="flex items-center lg:justify-end justify-center text-sm text-muted/70">
                  <div className="w-2 h-2 bg-tealGreen rounded-full mr-2 animate-pulse"></div>
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center lg:justify-end justify-center text-sm text-muted/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse delay-100"></div>
                  <span>Tailored Solutions</span>
                </div>
                <div className="flex items-center lg:justify-end justify-center text-sm text-muted/70">
                  <div className="w-2 h-2 bg-tealGreen rounded-full mr-2 animate-pulse delay-200"></div>
                  <span>Expert Team in Kathmandu</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements - Minimal */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full opacity-50"></div>
          </div>
        </div>
        
        {/* Subtle Decorative Element */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-gradient-to-br from-primary/5 to-transparent w-64 h-64 rounded-full sm:-bottom-40 -bottom-20 blur-2xl absolute sm:-left-32 -left-16 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Platform;