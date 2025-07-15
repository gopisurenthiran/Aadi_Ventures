import bgImg from "/assets/home-bg.png"; // yellow dot background
import mainImg from "/assets/solar.png"; // windmill + solar imagec
import client from "/assets/clients.png"; // client logos image
import { useState } from "react";


export default function HeroSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Energy",
      content: "Solar, Power and Oil & Gas.",
      color: "bg-[#F8BF14]",
    },
    {
      title: "Infrastructure",
      content: "Smart cities, bridges, highways, and more.",
      color: "bg-[#096EA5]",
    },
    {
      title: "Water",
      content: "Water treatment, desalination, and conservation.",
      color: "bg-[#065681]",
    },
    {
      title: "Industrial",
      content: "Manufacturing, automation, and logistics.",
      color: "bg-[#033956]",
    },
  ];
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="bg-[linear-gradient(to_top,_#fff6f3,_transparent)]">
        <div className="min-h-screen w-full flex items-center justify-center px-6">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Left content */}
            <div className="order-1 md:order-none  md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-primary text-[#002B5B] leading-tight">
                Eco-Friendly
                <br />
                Energy, Sustainable
                <br />
                Solutions
              </h1>
              <p className="mt-4 text-[#033956] text-base font-secondary max-w-md mx-auto md:mx-0">
                Choose What Matters To Your <br /> Business, Your Customers.{" "}
                <br />
                We are building brands, not <br /> the relationship
              </p>
              <button className="mt-6 px-6 py-2 bg-[#033956] text-white font-secondary rounded-full shadow hover:bg-[#003f8c] transition-all">
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
      <section className="relative px-4 bg-white overflow-hidden">
        {/* Background Yellow Dot */}
        <img
          src={bgImg}
          alt="background"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] z-0"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative z-10">
          {/* Left Content */}
          <div className="md:col-span-2 flex  md:justify-start  md:text-left mt-4">
            <div className="text-[#F8BF14] font-primary font-bold leading-tight">
              <h2 className="text-4xl sm:text-7xl md:text-[7rem]">
                Creating <br /> business to <br />
                your business
              </h2>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-1 flex justify-center mt-6 md:mt-0">
            <img
              src={mainImg}
              alt="business visual"
              className="w-full max-w-xs sm:max-w-sm md:max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl  text-center font-primary text-[#033956] mb-4">
          Smart Energy Solutions
        </h2>

        {/* Paragraph */}
        <p className="text-center text-sm sm:text-base font-secondary text-[#000000] mb-10">
          Powering Tomorrow with Clean, Reliable, and Affordable Solar Energy
          Solutions. Powering Tomorrow with Clean, Reliable, and Affordable{" "}
          <br />
          Solar Energy Solutions. Powering Tomorrow with Clean, Reliable, and
          Affordable Solar Energy Solutions. Powering Tomorrow with Clean,{" "}
          <br />
          Reliable, and Affordable Solar Energy Solutions.
        </p>

        {/* Accordion Items */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="border-none">
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center font-primary px-6 py-4 rounded-t-md ${
                  item.color
                } ${index === 0 ? "text-[#033956]" : "text-white"}`}
              >
                {item.title}
                {openIndex === index ? (
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M6 9L12 15L18 9H6Z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M9 6L15 12L9 18V6Z" />
                  </svg>
                )}
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className="border border-t-0 border-[#D5D5D5] font-secondary rounded-b-md bg-white px-6 py-4 flex justify-between items-center text-sm text-[#000000]">
                  <span>{item.content}</span>
                  <button className="bg-black text-white text-xs  px-4 py-2 rounded font-primary">
                    Read More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl text-center  font-primary text-[#033956] mb-4">
          Services & Solutions
        </h2>
        <p className="text-center text-sm sm:text-base font-secondary text-[#000000] mb-10">
          Powering Tomorrow with Clean, Reliable, and Affordable Solar Energy
          Solutions.Powering Tomorrow with Clean, Reliable, and Affordable Solar
          Energy Solutions.Powering Tomorrow with Clean, Reliable, and
          Affordable Solar Energy Solutions.Powering Tomorrow with Clean,
          Reliable, and Affordable Solar Energy Solutions.
        </p>

        {/* grid new */}

        <div className="w-full px-4 md:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full ">
            {/* Column 1 */}
            <div className="grid gap-4">
              <div className="h-[300px]">
                <a
                  href="/solar-energy-systems"
                  className="bg-[#173954] text-white p-5 rounded-xl flex flex-col justify-center h-full w-full group hover:opacity-90 transition"
                >
                  <div className=" text-lg leading-tight font-primary">
                    Solar Energy Systems
                    <br />
                    and Services
                  </div>
                  <span className=" text-left text-yellow-400 text-3xl transform group-hover:translate-x-2 transition">
                    ⟶
                  </span>
                </a>
              </div>
              <div className="h-[200px]">
                <a
                  href="/energy-telecom"
                  className="bg-[#0B263C] text-white p-5 rounded-xl flex flex-col justify-center h-full w-full group hover:opacity-90 transition"
                >
                  <div className=" text-lg leading-tight font-primary">
                    Telecom Storage
                  </div>
                   <span className=" text-left text-yellow-400 text-3xl transform group-hover:translate-x-2 transition">
                    ⟶
                  </span>
                </a>
              </div>
              <div>
                <img
                  src="/assets/04.png"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="grid gap-4">
              <div>
                <img
                  src="/assets/01.png"
                  alt=""
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/assets/03.png"
                  alt=""
                  className="w-full h-full  rounded-lg"
                />
              </div>
              <div className="h-[150px]">
                <a
                  href="/submetering"
                  className="bg-[#173954] text-white p-5 rounded-xl flex flex-col justify-center h-full w-full group hover:opacity-90 transition"
                >
                  <div className=" text-lg text-right font-primary">
                    Submetering
                  </div>
                  <span className="text-yellow-400 text-3xl text-right transform group-hover:-translate-x-2 transition">
                    ⟵
                  </span>
                </a>
              </div>
            </div>

            {/* Column 3 */}
            <div className="grid gap-4">
              <div className="h-[300px]">
                <a
                  href="/energy-telecom"
                  className="bg-[#173954] text-white p-5 rounded-xl flex flex-col justify-center h-full w-full group hover:opacity-90 transition"
                >
                  <div className=" text-lg leading-tight font-primary">
                    Energy and
                    <br />
                    Telecom Solutions
                  </div>
                  <span className=" text-left text-yellow-400 text-3xl transform group-hover:translate-x-2 transition">
                    ⟶
                  </span>
                </a>
              </div>
              <div className="h-[200px]">
                <a
                  href="/solar-home-lighting"
                  className="bg-[#173954] text-white p-5 rounded-xl flex flex-col justify-center h-full w-full group hover:opacity-90 transition"
                >
                  <div className=" text-lg font-primary">
                    Solar and
                    <br />
                    Home Lighting
                  </div>
                  <span className=" text-left text-yellow-400 text-3xl transform group-hover:translate-x-2 transition">
                    ⟶
                  </span>
                </a>
              </div>
              <div>
                <img
                  src="/assets/06.png"
                  alt=""
                  className="w-full h-full  rounded-lg"
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="grid gap-4">
              <div className="h-[150px]">
                <a
                  href="/storage-solutions"
                  className="bg-[#0B263C] text-white p-5 rounded-xl flex flex-col justify-center h-full w-full group hover:opacity-90 transition"
                >
                  <div className="text-lg font-primary">Storage Solutions</div>
                   <span className=" text-left text-yellow-400 text-3xl transform group-hover:translate-x-2 transition">
                    ⟶
                  </span>
                </a>
              </div>
              <div>
                <img
                  src="/assets/02.png"
                  alt=""
                  className="w-full h-full  rounded-lg"
                />
              </div>
              <div className="h-[150px]">
                <a
                  href="/water"
                  className="bg-[#0B263C] text-white p-5 rounded-xl flex flex-col justify-center h-full w-full group hover:opacity-90 transition"
                >
                  <div className=" text-lg text-right font-primary">Water</div>
                 <span className="text-yellow-400 text-3xl text-right transform group-hover:-translate-x-2 transition">
                    ⟵
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative py-12 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[28px] font-primary text-[#EFC042] mb-10">
            Target Market
          </p>
        </div>

        {/* Dots Container */}
        <div className="relative w-full h-[500px] max-w-7xl mx-auto md:h-[500px] sm:h-[400px] h-[300px]">
          {/* === INDIA Marker (Tooltip on hover) === */}
          <div className="absolute top-[53%] left-[66%] group z-20">
            <div className="w-4 h-4 bg-yellow-400 border-2 border-white rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-yellow-500 border-2 border-white rounded-full relative z-10"></div>

            {/* Tooltip */}
            <div className="absolute left-8 top-[-10px] hidden group-hover:flex flex-col items-start z-20">
              <div className="bg-[#EFC042] text-black font-primary text-[10px] px-2 py-1 rounded">
                INDIA
              </div>
              <div className="bg-[#082943] text-white text-[10px] px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                <div
                  className="w-[50px] h-[30px] bg-center bg-contain bg-no-repeat"
                  style={{ backgroundImage: "url('/assets/solar-panel.png')" }}
                ></div>
                <div className="leading-tight font-secondary">
                  <span className="text-[#EFC042] text-[10px]">
                    SOLAR PLANT
                  </span>
                  <br />
                  KAYAMKULAM, KERALA
                </div>
              </div>
            </div>
          </div>

          {/* Other Dots */}
          {/* Dot 1 */}
          <div className="absolute top-[46.5%] left-[20.5%] group z-10">
            <div className="w-4 h-4 bg-white border-2 border-[#033956] rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-white border-2 border-[#033956] rounded-full relative z-10"></div>
          </div>

          {/* Dot 2 */}
          <div className="absolute top-[11.8%] left-[17.7%] group z-10">
            <div className="w-4 h-4 bg-white border-2 border-[#033956] rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-white border-2 border-[#033956] rounded-full relative z-10"></div>
          </div>

          {/* Dot 3 */}
          <div className="absolute top-[30.1%] left-[45.2%] group z-10">
            <div className="w-4 h-4 bg-white border-2 border-[#033956] rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-white border-2 border-[#033956] rounded-full relative z-10"></div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8BF14] mx-auto px-4 py-12 relative overflow-hidden text-center">
        {/* Background Image */}
        <img src={client} alt="clients" className="w-full h-auto mx-auto" />

        {/* Labels */}
        <div className="absolute top-[25%] left-[42%] transform -translate-x-1/2 text-xs sm:text-sm md:text-xl">
          <span className="inline-block bg-white text-black font-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow">
            Utilities and its EPCs
          </span>
        </div>

        <div className="absolute bottom-[23%] left-[15%] rotate-[10deg] text-xs sm:text-sm md:text-xl">
          <span className="inline-block bg-white text-black font-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow">
            Investors and Asset Owners
          </span>
        </div>

        <div className="absolute bottom-[33%] right-[16%] rotate-[-10deg] text-xs sm:text-sm md:text-xl">
          <span className="inline-block bg-white text-black font-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow">
            IOCs and its EPCs
          </span>
        </div>
      </section>

      <section className="bg-white py-16 px-4 max-w-6xl mx-auto">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl  text-[#033956] font-primary mb-4">
            Why Choose Aadi?
          </h2>

          {/* Subtitle */}
          <p className="text-[#000000]  mx-auto mb-12 font-secondary">
            We combine innovation, expertise, and sustainability to deliver
            exceptional results for our clients.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src="/assets/plant.png"
                alt="Sustainable Approach"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl text-[#033956] font-primary mb-2">
                Sustainable Approach
              </h3>
              <p className="text-[12px] text-[#808080] font-secondary">
                Our solutions are designed with environmental sustainability at
                their core, minimizing ecological impact while maximizing
                efficiency.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src="/assets/cycle.png"
                alt="Innovative Technology"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl text-[#033956] font-primary mb-2">
                Innovative Technology
              </h3>
              <p className="text-[12px] text-[#808080] font-secondary">
                We leverage cutting-edge technologies and methodologies to
                generate forward-thinking solutions that stand the test of time.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <img
                src="/assets/plan.png"
                alt="Expert Team"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl  text-[#033956] font-primary mb-2">
                Expert Team
              </h3>
              <p className="text-[12px] text-[#808080] font-secondary">
                Our team of industry experts brings decades of combined
                experience to every project, ensuring superior quality and
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Desktop Section with background and logo */}
      <section
        className="relative w-full h-[440px] bg-no-repeat bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/assets/wind.png')" }}
      >
        {/* Logo Overlay - Desktop Only */}
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="/assets/aadi.png" alt="Aadi Logo" className="h-16 w-auto" />
        </div>
      </section>

      {/* ✅ Mobile Section with image only (no logo) */}
      <section className="md:hidden">
        <img
          src="/assets/mobile-img.png"
          alt="Wind Mobile"
          className="w-full h-auto"
        />
      </section>
    </>
  );
}
