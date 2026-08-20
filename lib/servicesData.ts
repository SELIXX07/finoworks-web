export interface ServiceDetail {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  tag: string;
  heroDesc: string;
  theme: string;
  badge: string;
  problem: string;
  solution: string;
  features: { title: string; desc: string }[];
  deliverables: string[];
  specs: { label: string; val: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'swift-integration': {
    slug: 'swift-integration',
    num: '01',
    title: 'SWIFT Integration (SAA / SAG / AMH / Lite2)',
    tagline: 'End-to-End Core Banking to SWIFT Alliance Gateway Integration',
    tag: 'Infrastructure',
    badge: 'SWIFT ALLIANCE SPECIALIZATION',
    theme: 'qc-ice',
    heroDesc: 'Seamless architecture, deployment, and configuration of SWIFT Alliance Access (SAA), Alliance Gateway (SAG), Alliance Messaging Hub (AMH), and Alliance Lite2 with guaranteed 100% straight-through processing (STP).',
    problem: 'Core Banking Systems (Oracle Flexcube, Temenos T24, SAP) frequently suffer from fragile middleware, manual file handling errors, and risk of message truncation during network drops.',
    solution: 'FinoWorks engineers robust, redundant, dual-site active-active SWIFT connectivity pipelines with automated reconciliation and zero-loss queuing.',
    features: [
      { title: 'SAA & SAG Clustering', desc: 'Active-Active and Active-Passive high-availability server clustering with automatic failover.' },
      { title: 'Core Banking Adapters', desc: 'Certified bi-directional connectors for Oracle Flexcube, Temenos, Finacle, and custom APIs.' },
      { title: 'Automated Reconciliation', desc: 'Real-time ACK/NAK tracking and end-of-day statement parsing (MT940/950 & camt.053).' },
      { title: 'HSM & PKI Configuration', desc: 'Hardware Security Module (HSM) setup, token provisioning, and secure VPN router tunnels.' },
    ],
    deliverables: [
      'Complete High-Availability SAA/SAG Architecture Blueprint',
      'Core Banking Direct Adapter Deployment & Testing',
      'Automated Disaster Recovery (DR) Runbook & Failover Drill',
      'SWIFT CSP Compliant Baseline Configuration Certificate',
    ],
    specs: [
      { label: 'Protocols', val: 'SWIFTNet FIN, InterAct, FileAct' },
      { label: 'Supported Versions', val: 'SAA v7.5+, SAG v7.6+, AMH' },
      { label: 'STP Rate', val: '100% Straight-Through Processing' },
      { label: 'SLA', val: '99.999% Availability Architecture' },
    ],
  },

  'iso-20022-migration': {
    slug: 'iso-20022-migration',
    num: '02',
    title: 'ISO 20022 MT ↔ MX Migration & Converter',
    tagline: 'Zero-Downtime Cross-Border Payment Modernization (CBPR+)',
    tag: 'Compliance',
    badge: 'MANDATORY GLOBAL CUTOVER',
    theme: 'qc-dark',
    heroDesc: 'Complete translation, enrichment, and interoperability between legacy MT text messages and rich XML-based ISO 20022 (pacs, camt, pain) without altering legacy core banking databases.',
    problem: 'Legacy MT messages restrict unstructured text to 35 characters, leading to compliance flags, truncated beneficiary data, and high false-positive AML holds during cross-border transit.',
    solution: 'Our intelligent MT ↔ MX Converter parses, validates, and enriches payment data into compliant pacs.008/009 XML hierarchies with zero data truncation.',
    features: [
      { title: 'MT103/202 to pacs.008/009', desc: 'Automated bidirectional mapping with ISO 20022 CBPR+ validation rules.' },
      { title: 'Structured Addressing', desc: 'Enrichment of hybrid and structured postal addresses and Ultimate Debtor/Creditor fields.' },
      { title: 'MyStandards Portal UAT', desc: 'Automated test suite integration against SWIFT MyStandards Readiness Portal.' },
      { title: 'Real-Time Schema Validation', desc: 'Zero latency in-flight XML syntax and business rule checking before network dispatch.' },
    ],
    deliverables: [
      'Comprehensive Gap & Truncation Impact Report',
      'MT ↔ MX Translation Engine Middleware Deployment',
      'Full CBPR+ Validation Pass Certificate',
      'Staff Operational & Exception Handling Training',
    ],
    specs: [
      { label: 'Message Types', val: 'pacs.008, pacs.009, camt.053, pain.001' },
      { label: 'Standard', val: 'ISO 20022 CBPR+ / HVPS+' },
      { label: 'Cutover Risk', val: 'Zero Operational Downtime Guarantee' },
      { label: 'Validation', val: 'SWIFT MyStandards Certified' },
    ],
  },

  'csp-assessment-v2026': {
    slug: 'csp-assessment-v2026',
    num: '03',
    title: 'SWIFT CSP v2026 Independent Assessments',
    tagline: 'Authorized CISA-Certified Audit & Technical Remediation',
    tag: 'Audit',
    badge: 'MANDATORY ANNUAL COMPLIANCE',
    theme: 'qc-cream',
    heroDesc: 'Authorized independent cybersecurity assessments across all 32 mandatory and advisory CSCF v2026 controls with direct hands-on remediation engineering and SWIFT KYC Registry submission.',
    problem: 'SWIFT mandates independent audits for all connected BICs. Generalist IT auditors lack SWIFT-specific operational knowledge and cannot fix identified technical vulnerabilities.',
    solution: 'Our CISA-certified assessors simulate audits, test Secure Zone boundaries, execute technical fixes directly, and certify your attestation for the KYC Registry.',
    features: [
      { title: '32 CSCF Controls Audited', desc: 'Complete review of Secure Zone architecture, privileged access, and incident response.' },
      { title: 'Hands-On Remediation', desc: 'Direct OS hardening, firewall ACL tuning, MFA configuration, and PKI cert updates.' },
      { title: 'Simulated Penetration Testing', desc: 'Ethical red teaming inside the SWIFT boundary to uncover lateral movement risks.' },
      { title: 'KYC Registry Attestation', desc: 'Formal submission and evidence pack archiving on the SWIFT KYC Security Analytics Portal.' },
    ],
    deliverables: [
      'Official Independent Assessment Report (CISA Signed)',
      'Executive Summary & Board Compliance Dashboard',
      'Detailed Technical Remediation Evidence Pack',
      'SWIFT KYC Registry Attestation Confirmation',
    ],
    specs: [
      { label: 'Framework', val: 'SWIFT CSCF v2026' },
      { label: 'Auditor Certifications', val: 'CISA, ISO 27001 Lead Auditor' },
      { label: 'Scope', val: 'Architecture Types A1, A2, A3, A4, B' },
      { label: 'Success Rate', val: '100% First-Pass Attestation' },
    ],
  },

  'cyber-security-assessment': {
    slug: 'cyber-security-assessment',
    num: '04',
    title: 'Enterprise Banking Cyber Security Assessment',
    tagline: 'Holistic Threat & Vulnerability Evaluation for Financial Institutions',
    tag: 'Security',
    badge: 'ENTERPRISE RISK GOVERNANCE',
    theme: 'qc-amber',
    heroDesc: 'Comprehensive vulnerability assessments, network architecture reviews, and zero-trust maturity assessments tailored to central bank regulatory requirements.',
    problem: 'Modern cyber threats exploit blind spots between legacy core banking systems, cloud adapters, and perimeter firewall configurations.',
    solution: 'We conduct deep, structured evaluations of your entire financial IT topology, providing prioritized technical roadmaps to eliminate attack vectors.',
    features: [
      { title: 'Zero-Trust Architecture Review', desc: 'Evaluating micro-segmentation, identity isolation, and least-privilege policies.' },
      { title: 'Active Directory Hardening', desc: 'Auditing Kerberos delegation, privileged group memberships, and Tiered Admin models.' },
      { title: 'Cloud & API Security', desc: 'Assessing OAuth2/mTLS gateways connecting core banking to Open Banking APIs.' },
      { title: 'Regulatory Compliance Mapping', desc: 'Benchmarking against NIST CSF, ISO 27001, and local Central Bank cyber guidelines.' },
    ],
    deliverables: [
      'Comprehensive Enterprise Cyber Risk Matrix',
      'Vulnerability Severity & Exploitability Analysis',
      'Prioritized 30-60-90 Day Technical Remediation Roadmap',
      'Executive Board Risk Presentation',
    ],
    specs: [
      { label: 'Frameworks', val: 'NIST CSF, ISO 27001, CIS Benchmarks' },
      { label: 'Scope', val: 'Network, OS, Identity, Middleware, Cloud' },
      { label: 'Methodology', val: 'Automated Scanning + Manual Expert Audits' },
      { label: 'Outcome', val: 'Zero-Trust Compliance Blueprint' },
    ],
  },

  'penetration-testing': {
    slug: 'penetration-testing',
    num: '05',
    title: 'Financial Systems Penetration Testing & Red Teaming',
    tagline: 'Simulated Adversary Attacks on Core Banking & Payment Rails',
    tag: 'Security',
    badge: 'ETHICAL ADVERSARY EMULATION',
    theme: 'qc-dark',
    heroDesc: 'Certified ethical hackers simulating nation-state and financial crime adversary techniques against SWIFT terminals, Core Banking APIs, and payment middleware.',
    problem: 'Static automated vulnerability scanners fail to identify complex multi-step logic flaws and payment manipulation vulnerabilities in banking middleware.',
    solution: 'Our offensive security team manually probes payment workflows, testing authorization bypasses, transaction spoofing, and privilege escalation routes.',
    features: [
      { title: 'SWIFT Secure Zone Pen-Testing', desc: 'Testing physical and logical isolation of Alliance workstations and operator jump hosts.' },
      { title: 'Core Banking API Testing', desc: 'Fuzzing REST/SOAP payment endpoints for injection, parameter tampering, and BOLA flaws.' },
      { title: 'Red Team Adversary Simulation', desc: 'End-to-end covert testing from phishing initial access to lateral movement.' },
      { title: 'Ransomware Resilience Testing', desc: 'Assessing immutable backup security, domain controllers, and recovery speed.' },
    ],
    deliverables: [
      'Proof-of-Concept Exploit Demonstration Videos',
      'CVSS-Ranked Vulnerability & Impact Log',
      'Direct Patch & Configuration Remediation Guidance',
      'Post-Remediation Verification & Retest Letter',
    ],
    specs: [
      { label: 'Standards', val: 'OWASP Top 10, PTES, OSSTMM' },
      { label: 'Certifications', val: 'OSCP, OSCE, CEH Certified Hackers' },
      { label: 'Target Scope', val: 'Black Box, Gray Box, White Box' },
      { label: 'Safety', val: 'Zero Disruption to Live Financial Operations' },
    ],
  },

  'siem-solutions': {
    slug: 'siem-solutions',
    num: '06',
    title: 'SIEM & SOC Threat Intelligence Solutions',
    tagline: '24/7 Centralized SWIFT & Banking Security Event Monitoring',
    tag: 'Operations',
    badge: 'REAL-TIME EVENT SURVEILLANCE',
    theme: 'qc-ice',
    heroDesc: 'Deployment, ingestion parser development, and custom correlation rule engineering for Splunk, Elastic, QRadar, and Microsoft Sentinel monitoring SWIFT event streams.',
    problem: 'Financial institutions generate millions of disconnected log events daily, allowing unauthorized SAA logins and anomalous transactions to go undetected.',
    solution: 'We engineer customized ingestion parsers for SWIFT Alliance text logs, event queues, and firewall syslogs with high-fidelity alerting rules.',
    features: [
      { title: 'SWIFT SAA / SAG Log Parsing', desc: 'Normalizing proprietary SWIFT security audit events into CEF/Syslog feeds.' },
      { title: 'Behavioral Anomaly Detection', desc: 'Alerting on off-hours logins, unauthorized RMA modifications, and abnormal payment sums.' },
      { title: 'Automated Incident Response Playbooks', desc: 'SOAR integration to automatically isolate compromised workstations.' },
      { title: 'Central Bank Audit Trail Dashboards', desc: 'Pre-built executive reporting dashboards tracking audit compliance metrics in real time.' },
    ],
    deliverables: [
      'Custom SIEM Parser & Ingestion Pipeline',
      'SWIFT-Specific Threat Correlation Rule Pack',
      'SOC Analyst Runbooks & Incident Response SOPs',
      'Real-Time Compliance Audit Dashboard',
    ],
    specs: [
      { label: 'Platforms', val: 'Splunk, Microsoft Sentinel, IBM QRadar, ELK' },
      { label: 'Feed Types', val: 'SAA Logs, SAG Syslog, Windows Event, Firewall' },
      { label: 'Response', val: 'Sub-Minute Threat Detection Time' },
      { label: 'Storage', val: 'Immutable 7-Year Forensic Retention Archive' },
    ],
  },

  'it-health-performance': {
    slug: 'it-health-performance',
    num: '07',
    title: 'IT Health & Performance Assessment',
    tagline: 'Capacity Planning & Hardware Optimization for Banking Engines',
    tag: 'Infrastructure',
    badge: 'OPTIMIZATION & RELIABILITY',
    theme: 'qc-cream',
    heroDesc: 'Comprehensive stress testing, latency profiling, and capacity planning for mission-critical core banking databases and SWIFT message queues.',
    problem: 'Transaction volume spikes during month-end or central bank settlement cutoffs cause payment delays, queue overflows, and unexpected database deadlocks.',
    solution: 'We benchmark server I/O, network latency, JVM heap usage, and database query indexes to unlock maximum throughput and sub-millisecond response times.',
    features: [
      { title: 'Database Index & Query Tuning', desc: 'Eliminating bottlenecks in Oracle Flexcube, PostgreSQL, and IBM DB2 transaction tables.' },
      { title: 'Queue & Middleware Benchmarking', desc: 'Optimizing IBM MQ, ActiveMQ, and Kafka partitions for financial message delivery.' },
      { title: 'Disaster Recovery Stress Testing', desc: 'Measuring Recovery Point Objective (RPO) and Recovery Time Objective (RTO) under load.' },
      { title: 'Hardware Lifecycle Audit', desc: 'Evaluating SAN storage throughput, server CPU headroom, and end-of-life hardware risks.' },
    ],
    deliverables: [
      'Comprehensive IT Performance & Latency Audit Report',
      'Database & Middleware Optimization Parameter Script',
      '3-Year Capacity Planning & Hardware Scaling Forecast',
      'Disaster Recovery RTO/RPO Verification Certificate',
    ],
    specs: [
      { label: 'Databases', val: 'Oracle Database 19c, PostgreSQL, IBM DB2, MS SQL' },
      { label: 'Queues', val: 'IBM MQ, RabbitMQ, Kafka, ActiveMQ' },
      { label: 'Target Latency', val: 'Sub-10ms Message Routing' },
      { label: 'Capacity Buffer', val: 'Engineered for 5x Peak Volume Spikes' },
    ],
  },

  'granular-data-integration': {
    slug: 'granular-data-integration',
    num: '08',
    title: 'Granular Data Integration (GDI)',
    tagline: 'Real-Time Financial Message Streaming to BI & Analytics Warehouses',
    tag: 'Data',
    badge: 'DATA INTELLIGENCE & BI',
    theme: 'qc-amber',
    heroDesc: 'High-throughput data extraction and streaming pipelines transforming SWIFT FIN and ISO 20022 messages into structured analytics schemas for BI, AML, and liquidity management.',
    problem: 'Valuable liquidity, FX, and corporate payment insights remain locked in unstructured SWIFT message text files, requiring manual end-of-day SQL reporting.',
    solution: 'Our GDI pipeline captures SWIFT message streams in real time, parses every XML node, and populates your data warehouse with zero operational latency.',
    features: [
      { title: 'Real-Time Liquidity Dashboards', desc: 'Live monitoring of nostro/vostro account balances across worldwide correspondent banks.' },
      { title: 'AML & Sanctions Screening Stream', desc: 'Streaming rich ISO 20022 originator and beneficiary fields directly into fraud models.' },
      { title: 'Automated Regulatory Filings', desc: 'Automating central bank cross-border trade and foreign exchange reports.' },
      { title: 'ETL Pipelines to BigQuery & Snowflake', desc: 'Seamless synchronization with modern cloud data platforms and internal analytics pools.' },
    ],
    deliverables: [
      'Real-Time SWIFT Data Streaming Pipeline Architecture',
      'Structured Financial Data Warehouse Schema',
      'Treasury & Liquidity Live PowerBI / Tableau Dashboards',
      'Data Integrity & Cryptographic Audit Verification System',
    ],
    specs: [
      { label: 'Warehouses', val: 'Snowflake, BigQuery, AWS Redshift, Oracle' },
      { label: 'Streaming', val: 'Kafka, Apache Spark, RabbitMQ' },
      { label: 'Throughput', val: '50,000+ Transactions Per Second' },
      { label: 'Security', val: 'AES-256 Column-Level Encryption & Tokenization' },
    ],
  },

  'sil-ipla-migration': {
    slug: 'sil-ipla-migration',
    num: '09',
    title: 'SIL / IPLA Migration & Replacement',
    tagline: 'Modernizing Deprecated SWIFT Integration Layer (SIL) Pipelines',
    tag: 'Middleware',
    badge: 'LEGACY MODERNIZATION',
    theme: 'qc-dark',
    heroDesc: 'Replacing legacy, unmaintained SWIFT Integration Layer (SIL) and IPLA modules with modern, automated AutoClient file transfer and RESTful microservice architectures.',
    problem: 'SWIFT has deprecated older SIL middleware. Banks running unmaintained SIL installations face critical security risks, lack vendor patches, and risk sudden payment outages.',
    solution: 'FinoWorks provides turnkey migration from legacy SIL scripts to modern, hardened AutoClient pipelines with automated message queues and monitoring.',
    features: [
      { title: 'Zero Message Loss Cutover', desc: 'Parallel run verification guaranteeing every transaction is mirrored and accounted for.' },
      { title: 'AutoClient Automation', desc: 'Automating secure file drops, cryptographic signing, and pickup from Alliance Gateway.' },
      { title: 'Custom API Wrapper Middleware', desc: 'Exposing legacy file-based core banking systems to modern REST/JSON microservices.' },
      { title: 'Comprehensive Error Recovery', desc: 'Auto-retry mechanisms, quarantine folders, and instant SMS/Email error notifications.' },
    ],
    deliverables: [
      'SIL Deprecation & Migration Assessment Report',
      'Turnkey AutoClient Middleware Deployment & Config',
      'End-to-End Core Banking Integration Verification',
      'Technical Support & Operational Handover Runbook',
    ],
    specs: [
      { label: 'Legacy Replaced', val: 'SWIFT SIL v5/v6, IPLA, Custom FTP' },
      { label: 'Modern Target', val: 'AutoClient v7.5+, MQ, REST API' },
      { label: 'Cutover Protocol', val: 'Zero-Downtime Parallel Staging' },
      { label: 'Support', val: 'Full Post-Migration Standby Coverage' },
    ],
  },

  'swift-annual-managed-support': {
    slug: 'swift-annual-managed-support',
    num: '10',
    title: 'SWIFT Annual Managed Support (24/7 SLA)',
    tagline: 'Dedicated Extended Engineering Team for Mission-Critical SWIFT Ops',
    tag: 'Managed Care',
    badge: '24/7 STANDBY ENGINEERING',
    theme: 'qc-ice',
    heroDesc: 'Dedicated annual technical maintenance, patch management, PKI certificate renewals, and emergency standby support backed by strict financial SLAs.',
    problem: 'Finding and retaining certified SWIFT engineers in-house is expensive and difficult, leaving banking operations vulnerable during unexpected network outages.',
    solution: 'FinoWorks becomes your dedicated SWIFT engineering team, providing continuous monitoring, scheduled patch rollouts, and 15-minute emergency response SLAs.',
    features: [
      { title: '15-Minute Critical Incident SLA', desc: 'Direct escalation to senior SWIFT certified solution architects 24/7/365.' },
      { title: 'Proactive Patch & Release Management', desc: 'Testing and applying all SWIFT mandatory security updates and SAA releases.' },
      { title: 'PKI Certificate Lifecycle Management', desc: 'Never risk service interruption due to expired RMA or Alliance PKI certificates.' },
      { title: 'Annual CSP Audit Preparation', desc: 'Continuous compliance checks ensuring your bank is 100% prepared for annual CSP attestation.' },
    ],
    deliverables: [
      'Dedicated 24/7 Helpdesk Hotline & Escalation Channel',
      'Quarterly SWIFT Health & Security Review Reports',
      'Complete Patch & Release Installation Logs',
      'Annual Pre-Audit Attestation Verification Report',
    ],
    specs: [
      { label: 'Coverage', val: '24/7/365 Global Follow-The-Sun NOC' },
      { label: 'Response SLA', val: '< 15 Minutes for Critical Priority 1' },
      { label: 'Hubs', val: 'Nairobi HQ, Bangalore Dev Center, USA Hub' },
      { label: 'Contract', val: 'Annual Service Level Agreement (SLA)' },
    ],
  },

  'white-labeled-risk-software': {
    slug: 'white-labeled-risk-software',
    num: '11',
    title: 'White-Labeled Banking Risk Software',
    tagline: 'Enterprise Threat Intelligence & Audit Scorecard Platform',
    tag: 'Software',
    badge: 'PROPRIETARY SAAS SUITE',
    theme: 'qc-cream',
    heroDesc: 'Custom-branded risk assessment, compliance tracking, and automated vulnerability monitoring software built specifically for financial institutions and central bank reporting.',
    problem: 'Commercial off-the-shelf risk software is too generic, failing to model SWIFT-specific controls (CSCF) or calculate real financial messaging exposure.',
    solution: 'Our white-labeled risk software provides bank CISOs and compliance teams with tailored dashboards, automated evidence collection, and one-click regulator exports.',
    features: [
      { title: 'Custom Institution Branding', desc: 'Fully white-labeled with your financial group logo, custom domains, and theme styling.' },
      { title: 'Automated CSCF Control Audit Scorecard', desc: 'Live compliance gauge tracking all 32 controls with automated task assignments.' },
      { title: 'Central Bank Audit Export Engine', desc: 'One-click generation of regulator-ready compliance binders and evidence archives.' },
      { title: 'On-Premise or Private Cloud Hosting', desc: 'Strict data residency compliance with isolated tenant databases and zero external telemetry.' },
    ],
    deliverables: [
      'Fully Branded Enterprise Risk Software License',
      'On-Premise or Private Cloud Deployment Configuration',
      'Automated SIEM & LDAP / Active Directory Integration',
      'Executive & Risk Committee Training Sessions',
    ],
    specs: [
      { label: 'Deployment', val: 'On-Premise Docker/Kubernetes or Private VPC' },
      { label: 'Security', val: 'SOC2 Type II, ISO 27001, Role-Based Access' },
      { label: 'Export Formats', val: 'PDF Executive Briefs, Excel Matrices, JSON' },
      { label: 'Licensing', val: 'Enterprise Annual Subscription' },
    ],
  },
};
