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
    <section className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
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
                      fill={isHighlighted ? '#4D82D2' : '#FFFFFF'}
                      stroke="#64748B"
                      strokeWidth={isHighlighted ? 0.8 : 1.25}
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
                <circle r={15} fill="#DC2626" opacity={0.2} />
                <circle r={8} fill="#DC2626" stroke="#FFFFFF" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={4}
                  style={{
                    fontFamily: 'system-ui',
                    fill: '#FFFFFF',
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
          <div className="absolute right-4 top-4 z-10 max-w-xs rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
            <button
              type="button"
              onClick={() => setActiveHub(null)}
              className="absolute right-3 top-2 text-xl leading-none text-slate-500 hover:text-slate-900"
              aria-label="Close hub details"
            >
              ×
            </button>
            <p className="pr-5 font-semibold text-slate-900">{activeHub.name}</p>
            <p className="mt-1 text-sm text-slate-600">{activeHub.address}</p>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 bg-white p-4 sm:p-5">
        <h2 className="text-base font-bold text-slate-900">
          Office & Center Details
        </h2>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {hubs.map((hub, index) => (
            <button
              key={hub.id}
              type="button"
              onClick={() => setActiveHub(hub)}
              className="flex items-start gap-2.5 rounded-lg p-2 text-left transition hover:bg-slate-50 border border-slate-100"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>
                <span className="block text-xs font-bold text-slate-900">{hub.name}</span>
                <span className="mt-0.5 block text-[11px] text-slate-600">
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
