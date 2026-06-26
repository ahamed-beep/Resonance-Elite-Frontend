import React from 'react'

const CtaSection = () => {
  return (
     <div className="bg-white  pb-5 md:py-10">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col justify-center text-left py-6 md:py-0 px-6 md:px-10">
            <h2 className="text-3xl md:text-5xl font-bold font-jakarta text-black">
              Join The Community
            </h2>
            <p className="mt-6 text-gray-700 font-jakarta text-sm md:text-base leading-relaxed max-w-lg font-light">
              Resonance Elite is a league of individuals who refuse to compromise on acoustic perfection. By stepping into our world, you gain exclusive access to behind-the-scenes engineering, early private reveals of bespoke fabrications, and curated technical insights straight from our design studio.
            </p>
            <button className="mt-8 px-6 py-3 font-jakarta bg-black text-white text-xs font-semibold uppercase tracking-widest border border-black hover:bg-white hover:text-black transition duration-300 w-fit">
              Join Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-full">
            <img
              src="/Images/cta.webp"
              alt="Join the community"
              className="w-full h-full object-cover block"
            />
          </div>

        </div>
      </div>
  )
}

export default CtaSection