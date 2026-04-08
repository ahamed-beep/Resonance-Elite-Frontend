import React from 'react'

const ServicesSection = () => {
  return (
    <div className="bg-white   md:pt-16 ">
        <h2 className="text-2xl font-jakarta md:text-4xl text-center font-bold text-[#000000]">
          From Structure to Sound Perfection in Every Detail
        </h2>

        {/* 1. TUNING — Image Left */}
        <div className="flex flex-col mt-14 md:flex-row items-start justify-start">
          <div className="w-full md:w-1/2 h-[250px] md:h-[450px]">
            <img src="/Images/service1.jpg" alt="Tuning" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start text-start px-6 md:px-12 pt-6 md:pt-12">
          <div className='flex' >

            <h2 className="text-lg px-5 text-[#000000] py-1 font-jakarta  border-[#000000] border font-bold  ">Tuning</h2>
          </div>
            <h4 className="mt-4 text-[#000000] font-jakarta text-lg md:text-xl  font-light ">
              Competition-Grade DSP Tuning
            </h4>
            <p className=" mt-3 md:mt-6 mb-5 md:mb-0 text-gray-800 font-jakarta leading-relaxed  text-md  max-w-lg  font-light">
              We use competition-level, studio-grade DSP tuning in cars, featuring binaural microphones calibrated to real human hearing. For precise cabin acoustics, we measure real-time reflections via 3D Room Vectoring Graphs, and apply advanced filters, EQs, time alignment, and phase alignment to correct the frequency and phase response of the system—delivering the absolute uncompromised sound.
            </p>
          </div>
        </div>

        {/* 2. A-PILLARS — Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-stretch">
          <div className="w-full md:w-1/2 h-[250px] md:h-[450px]">
            <img src="/Images/service2.jpg" alt="A-Pillars" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start text-start px-6 md:px-12 pt-6 md:pt-12">
          <div className='flex' >

            <h2 className="text-lg px-5 text-[#000000] font-bold py-1 font-jakarta  border-[#000000] border ">A-Pillars</h2>
          </div>
            <h4 className="mt-4 text-[#000000] font-jakarta text-lg md:text-xl  font-light">
              Hand-Crafted Precision Design
            </h4>
            <p className=" mt-3 md:mt-6 mb-5 md:mb-0 text-gray-800 font-jakarta leading-relaxed  text-md  max-w-lg  font-light">
              Each set is custom-tailored and laser-aligned using competition-proven angle & axis theory, minimizing reflections and ensuring perfect orientation within the cabin. The result is optimal structural integrity, refined aesthetics, and superior acoustic performance.
            </p>
          </div>
        </div>

        {/* 3. AMP RACK — Image Left */}
        <div className="flex flex-col md:flex-row items-start justify-start">
          <div className="w-full md:w-1/2 h-[250px] md:h-[450px]">
            <img src="/Images/service3.jpg" alt="Amp Rack" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start text-start px-6 md:px-12 pt-6 md:pt-12">
          <div className='flex' >

            <h2 className="text-lg px-5 text-[#000000] py-1 font-jakarta  border-[#000000] border font-bold ">Amp Rack</h2>
          </div>
            <h4 className="mt-4 text-[#000000] font-jakarta text-lg md:text-xl  font-light">
              CAD-Designed Amplifier Rack
            </h4>
            <p className=" mt-3 md:mt-6 mb-5 md:mb-0 text-gray-800 font-jakarta leading-relaxed  text-md  max-w-lg  font-light">
              Our amplifier racks are meticulously CAD-designed for exact fitment and maximum efficiency. Each rack is engineered to optimize airflow, minimize vibration, and ensure clean, organized installation, delivering reliable performance and longevity for high-end audio systems. Customizable to your vehicle layout, these racks combine structural integrity with a sleek, professional finish.
            </p>
          </div>
        </div>

        {/* 4. CUSTOM ENCLOSURES — Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-start justify-start">
          <div className="w-full md:w-1/2 h-[250px] md:h-[450px]">
            <img src="/Images/service4.jpg" alt="Custom Enclosures" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-start text-start px-6 md:px-12 pt-6 md:pt-12">
            <div className='flex' >
            <h2 className="text-lg px-5 text-[#000000] py-1 font-jakarta  border-[#000000] border font-bold ">Custom Enclosures</h2>
            </div>
            <h4 className="mt-4 text-[#000000] font-jakarta text-lg md:text-xl   font-light">
              Premium Material Craftsmanship
            </h4>
            <p className=" mt-3 md:mt-6 mb-5 md:mb-0 text-gray-800 font-jakarta leading-relaxed  text-md  max-w-lg  font-light">
              Our custom enclosures are precision-crafted using fiberglass, carbon fiber, MDF, and other exotic materials to perfectly fit your vehicle. Each enclosure is designed for optimal acoustic performance, structural integrity, and seamless integration, delivering superior sound quality while complementing your car's interior aesthetics.
            </p>
          </div>
        </div>

      </div>
  )
}

export default ServicesSection