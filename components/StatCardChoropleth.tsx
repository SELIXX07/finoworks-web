'use client';

import { useEffect, useState } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { FeatureCollection, Geometry } from 'geojson';
import type { Topology } from 'topojson-specification';
import { operatingCountries, totalOperatingNodes, type OperatingCountry } from '@/lib/operatingCountries';
import { ShieldCheck, MapPin, ArrowUpRight, Activity } from 'lucide-react';

interface CountryFeature {
  type: string;
  id: string;
  properties: {
    name: string;
    [key: string]: unknown;
  };
  geometry: Geometry;
}

const WORLD_TOPO_URL =
  'https://raw.githubusercontent.com/subyfly/topojson/refs/heads/master/world-countries.json';

export default function StatCardChoropleth() {
  const [worldData, setWorldData] = useState<FeatureCollection<Geometry, { name: string }> | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<OperatingCountry | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<OperatingCountry | null>(null);

  const activeCountry = hoveredCountry || selectedCountry;

  useEffect(() => {
    let mounted = true;
    async function loadMap() {
      try {
        const res = await fetch(WORLD_TOPO_URL);
        if (!res.ok) throw new Error('Failed to load map data');
        const topo = (await res.json()) as Topology;
        const objectKey = Object.keys(topo.objects)[0];
        const geojson = feature(topo, topo.objects[objectKey]) as unknown as FeatureCollection<
          Geometry,
          { name: string }
        >;
        if (mounted) {
          setWorldData(geojson);
          setLoading(false);
        }
      } catch (err) {
        console.warn('Map load error, fallback rendering', err);
        if (mounted) setLoading(false);
      }
    }
    loadMap();
    return () => {
      mounted = false;
    };
  }, []);

  // Natural Earth Projection scaled to 960x480
  const width = 960;
  const height = 480;
  const projection = geoNaturalEarth1()
    .scale(160)
    .translate([width / 2, height / 2]);
  const pathGenerator = geoPath().projection(projection);

  return (
    <div className="relative w-full rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {/* Stat Card Header with ChartStatFlow & Trend Badge */}
      <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-b from-slate-50/90 to-white flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              GLOBAL SWIFT NODES & OPERATIONS
            </span>
          </div>

          <div className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            {activeCountry ? (
              <span className="flex items-center gap-2">
                {activeCountry.name}
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-[#0055ff]/10 text-[#0055ff]">
                  {activeCountry.nodes} Nodes
                </span>
              </span>
            ) : (
              <span>{totalOperatingNodes} Active Nodes</span>
            )}
          </div>

          <p className="text-xs text-slate-500 font-medium">
            {activeCountry
              ? `${activeCountry.role} • ${activeCountry.latency} latency • ${activeCountry.status}`
              : `Operating across Kenya, India, USA & Middle East GCC (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman)`}
          </p>
        </div>

        {/* Trend / Pass Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-bold shrink-0 self-start">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>+100% Attestation</span>
        </div>
      </div>

      {/* Interactive Choropleth Map View */}
      <div className="relative w-full aspect-[2/1] min-h-[340px] md:min-h-[400px] bg-slate-900 p-2 md:p-4 overflow-hidden flex items-center justify-center">
        {loading || !worldData ? (
          <div className="flex flex-col items-center justify-center gap-3 text-slate-400 text-xs font-mono">
            <div className="w-6 h-6 border-2 border-[#0055ff] border-t-transparent rounded-full animate-spin" />
            <span>Loading Global Choropleth Map…</span>
          </div>
        ) : (
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-full object-contain"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Base Continents (muted non-operating countries) */}
            <g>
              {worldData.features.map((feat, idx) => {
                const countryName = feat.properties?.name;
                const isOperating = countryName in operatingCountries;
                const isHovered = activeCountry?.name === countryName;
                const pathD = pathGenerator(feat);

                if (!pathD) return null;

                if (!isOperating) {
                  return (
                    <path
                      key={idx}
                      d={pathD}
                      fill="#1e293b"
                      stroke="#0f172a"
                      strokeWidth="0.5"
                      opacity="0.6"
                      className="transition-colors duration-150"
                    />
                  );
                }

                // Operating Countries Highlighted with Choropleth Colors
                const countryInfo = operatingCountries[countryName];
                const fillColor = isHovered
                  ? '#00d2ff'
                  : countryInfo.nodes >= 18
                  ? '#0055ff'
                  : countryInfo.nodes >= 10
                  ? '#2563eb'
                  : '#3b82f6';

                return (
                  <path
                    key={idx}
                    d={pathD}
                    fill={fillColor}
                    stroke="#ffffff"
                    strokeWidth={isHovered ? '1.5' : '0.75'}
                    className="cursor-pointer transition-all duration-200 hover:opacity-100 hover:brightness-125"
                    onMouseEnter={() => setHoveredCountry(countryInfo)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onClick={() => setSelectedCountry(countryInfo)}
                  >
                    <title>{`${countryName}: ${countryInfo.nodes} Nodes (${countryInfo.role})`}</title>
                  </path>
                );
              })}
            </g>
          </svg>
        )}
      </div>

      {/* Operating Countries Filter Chips */}
      <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 space-y-3">
        <div className="flex justify-between items-center text-[11px] font-mono text-slate-500 font-bold">
          <span>OPERATING COUNTRIES ONLY:</span>
          <span className="text-[#0055ff]">
            {Object.keys(operatingCountries).length} JURISDICTIONS
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.values(operatingCountries).map((c) => {
            const isSelected = activeCountry?.name === c.name;

            return (
              <button
                key={c.code}
                onClick={() => setSelectedCountry(c)}
                onMouseEnter={() => setHoveredCountry(c)}
                onMouseLeave={() => setHoveredCountry(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0055ff] text-white shadow-sm ring-2 ring-[#0055ff]/30'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-[#0055ff] hover:text-[#0055ff]'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>{c.name}</span>
                <span className="font-mono text-[10px] opacity-70">
                  ({c.nodes})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
