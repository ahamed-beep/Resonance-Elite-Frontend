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
              Get a sneak preview of the latest audio innovations and new products
              from Focal and Naim by subscribing to our exclusive newsletters.
              Be among the first to benefit from privileged information delivered
              straight to your inbox.
            </p>
            <button className="mt-8 px-6 py-3 font-jakarta bg-black text-white text-xs font-semibold uppercase tracking-widest border border-black hover:bg-white hover:text-black transition duration-300 w-fit">
              Join Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full h-full">
            <img
              src="/Images/cta.jpg"
              alt="Join the community"
              className="w-full h-full object-cover block"
            />
          </div>

        </div>
      </div>
  )
}

export default CtaSection