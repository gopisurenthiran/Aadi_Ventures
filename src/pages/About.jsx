export default function About() {
  return (
    <>
      <section className="bg-[linear-gradient(to_top,_#fff6f3,_transparent)]">
        <div className="min-h-screen w-full flex items-center justify-center px-6">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Left content */}
            <div className="order-1 md:order-none  md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary text-[#002B5B] leading-tight mb-10">
                Heading
              </h1>
              <p className="mt-4 text-[#033956] text-base font-secondary max-w-md mx-auto md:mx-0 mb-4">
                Choose What Matters To Your <br /> Business, Your Customers.{" "}
                <br />
                We are building brands, not <br /> the relationship
              </p>
              <button className="mt-6 px-6 py-2 bg-[#F8BF14] text-white font-secondary rounded-full shadow hover:bg-[#F8BF14] transition-all ">
                Let’s Go
              </button>
            </div>

            {/* Right image */}
            <div className="order-2 md:col-span-2">
              <div className="relative">
                <img
                  src="/assets/home-image.png"
                  alt="tower"
                  className="relative z-10 w-full max-w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Desktop Section with background and logo */}
      <section
        className="relative w-full h-[440px] bg-no-repeat bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/assets/wind.png')" }}
      >
        {/* No logo here — image background only */}
      </section>

      {/* ✅ Mobile Section with image only (no logo) */}
      <section className="md:hidden">
        <img
          src="/assets/wind.png"
          alt="Wind Mobile"
          className="w-full h-auto"
        />
      </section>
    </>
  );
}
