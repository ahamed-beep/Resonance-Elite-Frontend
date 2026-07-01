import React from "react";

const ProjectSection = () => {
  return (
    <section className="bg-white">
      <div className="pt-8 sm:pt-10 md:pt-16 lg:pt-20 min-[1920px]:pt-24 min-[2560px]:pt-32 min-[3200px]:pt-40 pb-6 md:pb-8 min-[1920px]:pb-10 px-4 sm:px-6 md:px-10 min-[1920px]:px-16 min-[2560px]:px-24 min-[3200px]:px-32 text-center">
        <div className="mx-auto max-w-7xl min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[2100px] min-[3200px]:max-w-[2600px]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[1920px]:text-6xl min-[2560px]:text-7xl min-[3200px]:text-8xl font-jakarta font-bold text-gray-900 leading-tight">
            Our Projects
          </h2>

          <p className="mt-3 md:mt-4 min-[1920px]:mt-5 text-sm sm:text-base md:text-lg min-[1920px]:text-xl min-[2560px]:text-2xl min-[3200px]:text-3xl text-gray-600 font-jakarta max-w-2xl min-[1920px]:max-w-4xl min-[3200px]:max-w-6xl mx-auto leading-relaxed font-light">
            Where creativity and precision engineering meets art.
          </p>
        </div>
      </div>

      <div className="relative w-full bg-black overflow-hidden">
        <video
          className="w-full aspect-video h-auto object-cover object-center block"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1781951778/project_y0ykdb.webm"
            type="video/webm"
          />

          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ProjectSection;