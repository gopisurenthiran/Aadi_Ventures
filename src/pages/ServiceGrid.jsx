// src/components/ServiceGrid.jsx
import React from "react";

const gridItems = [
  {
    title: "Solar Energy Systems and Services",
    image: null,
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    link: "#",
  },
  {
    title: null,
    image: "/images/solar-panel.jpg",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    title: "Energy and Telecom Solutions",
    image: null,
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    link: "#",
    
  },
  {
    title: "Telecom Storage",
    image: null,
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
    link: "#",
  },
  {
    title: null,
    image: "/images/tower.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    title: "Solar and Home Lighting",
    image: null,
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
    link: "#",
  },
  {
    title: null,
    image: "/images/solar-light.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    title: "Storage Solutions",
    image: null,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    link: "#",
  },
  {
    title: null,
    image: "/images/factory.jpg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Submetering",
    image: null,
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    link: "#",
  },
  {
    title: null,
    image: "/images/meter.jpg",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    title: "Water",
    image: null,
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    link: "#",
  },
  {
    title: null,
    image: "/images/water.jpg",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
];

const ServiceGrid = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-6 auto-rows-[150px] gap-1 md:auto-rows-[180px] lg:auto-rows-[200px]">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`${item.colSpan} ${item.rowSpan} relative rounded-xl overflow-hidden group`}
          >
            {item.image ? (
              <img
                src={item.image}
                alt="Grid"
                className="w-full h-full object-cover"
              />
            ) : (
              <a
                href={item.link}
                className="bg-[#033956] text-white h-full w-full p-5 flex flex-col justify-between group-hover:opacity-90 transition"
              >
                <div className="text-sm sm:text-lg font-semibold">
                  {item.title}
                </div>
                <span className="text-yellow-400 text-lg">→</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;
