import React from 'react'

const ProjectSection = () => {
  return (
<div>

     <div className="bg-white pt-8 md:pt-20 pb-6 px-6 md:px-10 text-center">
        <h2 className="text-2xl font-jakarta md:text-5xl font-bold text-gray-900">
          Our Projects
        </h2>
        <p className="mt-3 text-gray-600 font-jakarta text-md md:text-base max-w-2xl mx-auto leading-relaxed font-light">
          Where creativity and precision engineering meets art.
        </p>
      </div>
    <div className="relative w-full">
        <video
          className="w-full h-[300px] md:h-[600px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1775653107/Video_ijeu57.mp4" type="video/mp4" />
        </video>
      </div>  
</div>
  )
}

export default ProjectSection