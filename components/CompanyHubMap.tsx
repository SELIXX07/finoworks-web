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

export default function CompanyHubMap() {
  const [activeHub, setActiveHub] = useState<Hub | null>(null);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl">
      <div className="relative aspect-[16/9] min-h-[360px] sm:min-h-[400px] w-full">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 145, center: [10, 8] }}
          width={1200}
          height={600}
          className="h-full w-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#4D82D2"
                  stroke="#FFFFFF"
                  strokeWidth={0.7}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#3D70BD', outline: 'none' },
                    pressed: { fill: '#3564AA', outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {hubs.map((hub, index) => (
            <Marker
              key={hub.id}
              coordinates={hub.coordinates}
              onClick={() => setActiveHub(hub)}
            >
              <g className="cursor-pointer" role="button" tabIndex={0}>
                <circle r={15} fill="#DC2626" opacity={0.2} />
                <circle r={8} fill="#DC2626" stroke="#FFFFFF" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={4}
                  style={{
                    fontFamily: 'system-ui',
                    fill: 'white',
                    fontSize: 8,
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
          <div className="absolute right-5 top-5 max-w-xs rounded-xl border bg-white/95 p-4 shadow-lg backdrop-blur z-20">
            <button
              type="button"
              onClick={() => setActiveHub(null)}
              className="absolute right-3 top-2 text-xl leading-none text-gray-500 hover:text-gray-900"
              aria-label="Close hub details"
            >
              ×
            </button>
            <p className="pr-5 font-semibold text-gray-900">{activeHub.name}</p>
            <p className="mt-1 text-sm text-gray-600">{activeHub.address}</p>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-base font-bold text-gray-900">
          Office & Center Details
        </h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {hubs.map((hub, index) => (
            <button
              key={hub.id}
              type="button"
              onClick={() => setActiveHub(hub)}
              className="flex items-start gap-2.5 rounded-lg p-2 text-left transition hover:bg-gray-50"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>
                <span className="block text-xs font-bold text-gray-900">{hub.name}</span>
                <span className="mt-0.5 block text-[11px] text-gray-600 leading-tight">
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
