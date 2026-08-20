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
    address: 'Mayfair Suites, Westlands',
    coordinates: [36.8219, -1.2921] as [number, number],
  },
  {
    id: 'bengaluru-india',
    name: 'Bengaluru, India',
    address: 'Vaishnavi BVS Senate',
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
    <section className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="relative aspect-[16/8.5] w-full min-h-[260px] sm:min-h-[300px]">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 145,
            center: [10, 14],
          }}
          width={1200}
          height={600}
          className="h-full w-full"
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
                      fill={isHighlighted ? '#4D82D2' : '#FFFFFF'}
                      stroke="#D9E0EA"
                      strokeWidth={0.55}
                      style={{
                        default: { outline: 'none' },
                        hover: {
                          fill: isHighlighted ? '#3D70BD' : '#F8FAFC',
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
                <circle r={13} fill="#DC2626" opacity={0.2} />
                <circle r={7} fill="#DC2626" stroke="#FFFFFF" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={3.5}
                  style={{
                    fontFamily: 'system-ui',
                    fill: '#FFFFFF',
                    fontSize: 7,
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
          <div className="absolute right-3 top-3 z-10 max-w-[240px] rounded-xl border border-slate-200 bg-white/95 p-3.5 shadow-xl backdrop-blur">
            <button
              type="button"
              onClick={() => setActiveHub(null)}
              className="absolute right-2.5 top-1.5 text-lg leading-none text-gray-400 hover:text-gray-900"
              aria-label="Close hub details"
            >
              ×
            </button>
            <p className="pr-4 font-bold text-xs text-gray-900">{activeHub.name}</p>
            <p className="mt-0.5 text-[11px] text-gray-600 leading-tight">{activeHub.address}</p>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 bg-slate-50/60 p-3.5 sm:p-4">
        <div className="flex items-center justify-between pb-2">
          <span className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            FinoWorks Global Operations
          </span>
          <span className="font-mono text-[10px] font-bold text-[#0055ff]">
            3 Primary Hubs
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {hubs.map((hub, index) => (
            <button
              key={hub.id}
              type="button"
              onClick={() => setActiveHub(hub)}
              className="flex items-center gap-2 rounded-lg p-2 text-left transition hover:bg-white bg-white/80 border border-slate-200/80 shadow-xs"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                {index + 1}
              </span>
              <span className="truncate">
                <span className="block text-[11px] font-bold text-gray-900 truncate">{hub.name}</span>
                <span className="block text-[9px] text-gray-500 truncate leading-tight font-mono">
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
