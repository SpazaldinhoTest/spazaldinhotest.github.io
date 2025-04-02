
import React from "react";

const Index = () => {
  return (
    <main>
      <section className="section cali-gradient">
        <div className="container-custom min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white shadow-lg rounded-sm overflow-hidden">
              {/* Placeholder for headshot */}
              <div className="w-full h-full bg-cali-sand flex items-center justify-center">
                <span className="text-cali-clay text-opacity-50 text-lg">Your Photo</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              Jane Doe
            </h1>
            
            <p className="text-lg text-foreground/80 mb-6 font-light leading-relaxed">
              I'm a designer and developer based in Los Angeles, California. My work focuses on creating minimalist, functional spaces both digitally and physically.
            </p>
            
            <p className="text-lg text-foreground/80 font-light leading-relaxed">
              With a background in architecture and user experience design, I bring a unique perspective to every project. My designs are inspired by the California coastline, mid-century modern architecture, and the interplay between natural and built environments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
