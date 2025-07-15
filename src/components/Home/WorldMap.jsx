import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Exact marker coordinates matching the design
const markers = [
  {
    id: "india",
    name: "INDIA",
    coordinates: [76.94, 9.18], // Kayamkulam, Kerala
    description: "SOLAR PLANT – KAYAMKULAM, KERALA",
    labelColor: "#FACC15",
    withTag: true,
  },
  {
    id: "usa1",
    name: "USA 1",
    coordinates: [-97, 31],
  },
  {
    id: "usa2",
    name: "USA 2",
    coordinates: [-122, 49],
  },
  {
    id: "europe",
    name: "Europe",
    coordinates: [10, 51],
  },
];

export default function DottedWorldMap() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative w-full h-screen bg-[#0E2E4E] text-white">
      <ComposableMap
        projectionConfig={{ scale: 145 }}
        className="w-full h-full"
      >
        {/* Dotted Pattern */}
        <defs>
          <pattern id="dotPattern" patternUnits="userSpaceOnUse" width={8} height={8}>
            <circle cx={4} cy={4} r={1.5} fill="#CBD5E1" />
          </pattern>
        </defs>

        {/* Map Base */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url(#dotPattern)"
                stroke="transparent"
              />
            ))
          }
        </Geographies>

        {/* Markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinates={marker.coordinates}
            onMouseEnter={() => setHovered(marker)}
            onMouseLeave={() => setHovered(null)}
          >
            <g className="group">
              {/* Outer Ring */}
              <circle r={10} fill="transparent" stroke="white" strokeWidth={2} />
              {/* Middle Circle */}
              <circle r={5.5} fill="#0E2E4E" stroke="white" strokeWidth={2} />
              {/* Center Dot */}
              <circle r={2.5} fill={marker.withTag ? "#FACC15" : "#FFFFFF"} />
            </g>
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip/Label for Hover */}
      {hovered?.withTag && (
        <div
          className="absolute z-50 text-white"
          style={{
            left: "59.5%", // Adjust based on actual positioning
            top: "51%",    // Adjust based on actual positioning
          }}
        >
          <div className="flex items-center gap-2">
            {/* Label Bubble */}
            <div className="bg-yellow-400 text-black font-bold px-2 py-1 text-sm rounded-md shadow-md">
              {hovered.name}
            </div>
            {/* Description Box */}
            <div className="bg-[#002C52] px-3 py-2 rounded-md shadow-lg text-xs">
              {hovered.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
