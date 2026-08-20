export interface OperatingCountry {
  name: string;
  code: string;
  nodes: number;
  role: string;
  region: string;
  latency: string;
  status: string;
}

export const operatingCountries: Record<string, OperatingCountry> = {
  "Kenya": {
    name: "Kenya",
    code: "KE",
    nodes: 18,
    role: "Global Corporate HQ & SAA Primary Gateway",
    region: "East Africa",
    latency: "12ms",
    status: "Primary Hub",
  },
  "India": {
    name: "India",
    code: "IN",
    nodes: 24,
    role: "Global Dev & ISO 20022 Engineering Hub (Clayworks)",
    region: "South Asia / APAC",
    latency: "18ms",
    status: "Engineering Center",
  },
  "United States": {
    name: "United States",
    code: "US",
    nodes: 14,
    role: "Americas Client Support & 24/7 NOC Center",
    region: "North America",
    latency: "14ms",
    status: "Support Hub",
  },
  "United Arab Emirates": {
    name: "United Arab Emirates",
    code: "AE",
    nodes: 12,
    role: "GCC Payment Rails & SWIFT Alliance Corridor",
    region: "Middle East / GCC",
    latency: "16ms",
    status: "Regional Node",
  },
  "Saudi Arabia": {
    name: "Saudi Arabia",
    code: "SA",
    nodes: 8,
    role: "SAMA Compliance & Core Banking Gateway",
    region: "Middle East / GCC",
    latency: "19ms",
    status: "Regional Node",
  },
  "Qatar": {
    name: "Qatar",
    code: "QA",
    nodes: 6,
    role: "Cross-Border Messaging & FX Liquidity Node",
    region: "Middle East / GCC",
    latency: "15ms",
    status: "Regional Node",
  },
  "Kuwait": {
    name: "Kuwait",
    code: "KW",
    nodes: 5,
    role: "Alliance Gateway Monitoring Node",
    region: "Middle East / GCC",
    latency: "17ms",
    status: "Regional Node",
  },
  "Bahrain": {
    name: "Bahrain",
    code: "BH",
    nodes: 4,
    role: "Banking Risk & SIEM Surveillance Node",
    region: "Middle East / GCC",
    latency: "16ms",
    status: "Regional Node",
  },
  "Oman": {
    name: "Oman",
    code: "OM",
    nodes: 5,
    role: "Disaster Recovery Standby Node",
    region: "Middle East / GCC",
    latency: "20ms",
    status: "Regional Node",
  },
};

export const operatingCountryNames = Object.keys(operatingCountries);
export const totalOperatingNodes = Object.values(operatingCountries).reduce((acc, c) => acc + c.nodes, 0);
