import React from "react";

const Index = () => {
  return (
    <main>
      <section className="section cali-gradient">
        {/* 
          1) Keep using your container with flex & gap, but items-center + justify-center
          2) Increase the photo size from md:w-80/md:h-80 to md:w-96/md:h-96
          3) Remove md:justify-end so the photo and text remain centered on wider screens
        */}
        <div className="container-custom min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-16">

          {/* IMAGE COLUMN */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-96 md:h-96 bg-white shadow-lg rounded-sm overflow-hidden">
              <img
                src="public/images/cali.jpg"
                alt="Zain Parihar headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div className="w-full md:w-1/2 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
              Zain Parihar
            </h1>
            
            <p className="text-lg text-foreground/80 mb-6 font-light leading-relaxed">
              I'm a developer and researcher based in Toronto, Ontario. My work is at the intersection of Software Engineering, Machine Learning, and Hardware Design.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6 font-light leading-relaxed">
              Currently I'm a Software Development Co-op at Ericsson, and I'm studying Computing and Mathematics at Queen's University.
            </p>

            <p className="text-lg text-foreground/80 font-light leading-relaxed">
              I approach each project with a “less is more” philosophy. Every feature is purposeful, and every interface refined. I believe in the power of well-crafted code and thoughtful design to transform everyday challenges into something extraordinary.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Index;
