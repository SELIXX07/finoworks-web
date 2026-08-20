'use client';

import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const hubs = [
  {
    id: 'franklin-usa',
    name: 'Franklin, TN, USA',
    address: '2550 Meridian Blvd, Suite 200',
    coordinates: [-86.8689, 35.9251] as [number, number],
  },
  {
    id: 'nairobi-kenya',
    name: 'Nairobi, Kenya',
    address: 'Mayfair Suites',
    coordinates: [36.8219, -1.2921] as [number, number],
  },
  {
    id: 'bengaluru-india',
    name: 'Bengaluru, India',
    address: 'Vaishnavi BVS Senate | Development Center',
    coordinates: [77.5946, 12.9716] as [number, number],
  },
];

type Hub = (typeof hubs)[number];

const highlightedCountries = new Set([
  'United States of America',
  'Kenya',
  'India',
]);

export default function CompanyHubMap() {
  const [activeHub, setActiveHub] = useState<Hub | null>(null);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl border border-blue-500/30 bg-[#051438] shadow-2xl">
      <div className="relative h-[clamp(360px,42vw,480px)] w-full">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 205,
            center: [10, 12],
          }}
          width={1200}
          height={600}
          className="block h-full w-full"
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.properties.name !== 'Antarctica')
                .map((geo) => {
                  const isHighlighted = highlightedCountries.has(
                    geo.properties.name,
                  );

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? '#00e5ff' : '#0b2558'}
                      stroke={isHighlighted ? '#ffffff' : '#1e3a8a'}
                      strokeWidth={isHighlighted ? 1 : 0.6}
                      style={{
                        default: { outline: 'none' },
                        hover: {
                          fill: isHighlighted ? '#38bdf8' : '#133575',
                          outline: 'none',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
            }
          </Geographies>

          {hubs.map((hub, index) => (
            <Marker
              key={hub.id}
              coordinates={hub.coordinates}
              onClick={() => setActiveHub(hub)}
            >
              <g
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View ${hub.name} details`}
              >
                <circle r={16} fill="#ef4444" opacity={0.35} />
                <circle r={8} fill="#ef4444" stroke="#ffffff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={3.5}
                  style={{
                    fontFamily: 'system-ui',
                    fill: '#ffffff',
                    fontSize: 7.5,
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </text>
              </g>
            </Marker>
          ))}
        </ComposableMap>

        {activeHub && (
          <div className="absolute right-4 top-4 z-10 max-w-xs rounded-xl border border-blue-500/40 bg-[#082156]/95 p-4 shadow-2xl backdrop-blur-md text-white">
            <button
              type="button"
              onClick={() => setActiveHub(null)}
              className="absolute right-3 top-2 text-xl leading-none text-blue-300 hover:text-white"
              aria-label="Close hub details"
            >
              ×
            </button>
            <p className="pr-5 font-bold text-white text-sm">{activeHub.name}</p>
            <p className="mt-1 text-xs text-blue-200 leading-relaxed">{activeHub.address}</p>
          </div>
        )}
      </div>

      <div className="border-t border-blue-500/30 bg-[#030d22] p-4 sm:p-5">
        <h2 className="text-sm font-bold text-blue-300 font-mono uppercase tracking-wider">
          Office & Center Details
        </h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {hubs.map((hub, index) => (
            <button
              key={hub.id}
              type="button"
              onClick={() => setActiveHub(hub)}
              className="flex items-start gap-2.5 rounded-lg p-2.5 text-left transition hover:bg-[#082156] bg-[#051438] border border-blue-500/20"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>
                <span className="block text-xs font-bold text-white">{hub.name}</span>
                <span className="mt-0.5 block text-[11px] text-blue-300">
                  {hub.address}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
