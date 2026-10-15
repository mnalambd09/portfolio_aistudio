import { Project, SkillCategory, ExperienceItem, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Md. Nurul Alam',
  shortName: 'M. N. Alam',
  nameBn: 'মোঃ নুরুল আলম',
  title: 'Senior Full-Stack Engineer & AI Systems Architect',
  titleBn: 'সিনিয়র ফুল-স্ট্যাক ও এআই সিস্টেমস আর্কিটেক্ট',
  tagline: 'Architecting ultra-scalable web platforms, resilient distributed microservices, and high-performance Generative AI engines.',
  taglineBn: 'উচ্চ স্কেলেবল ওয়েব প্ল্যাটফর্ম, স্থিতিস্থাপক মাইক্রোসার্ভিসেস এবং আধুনিক জেনারেটিভ এআই সিস্টেম তৈরিতে বিশেষজ্ঞ।',
  email: 'MNALAMBD09@gmail.com',
  location: 'Dhaka, Bangladesh',
  locationBn: 'ঢাকা, বাংলাদেশ',
  availability: 'Open for Global Remote & High-Impact Contracts',
  availabilityBn: 'আন্তর্জাতিক রিমোট জব ও হাই-ইমপ্যাক্ট চুক্তির জন্য উন্মুক্ত',
  yearsOfExperience: '7+',
  completedProjects: '45+',
  uptimeRecord: '99.98%',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'nexus-pulse',
    title: 'NexusPulse AI Orchestrator',
    titleBn: 'নেক্সাসপালস এআই অর্কেস্ট্রেটর',
    tagline: 'High-throughput multi-tenant RAG and LLM workflow runtime',
    taglineBn: 'হাই-থ্রুপুট মাল্টি-টেন্যান্ট আরএজি ও এলএলএম ওয়ার্কফ্লো ইঞ্জিন',
    description: 'An enterprise orchestration engine managing multi-agent reasoning, semantic vector search caching, and token budgeting across distributed systems.',
    descriptionBn: 'একটি এন্টারপ্রাইজ সিস্টেম যা মাল্টি-এজেন্ট রিজনিং, সিম্যান্টিক ভেক্টর সার্চ ক্যাশিং এবং ডিস্ট্রিবিউটেড টোকেন বাজেট নিয়ন্ত্রণ করে।',
    category: 'ai',
    tags: ['Go', 'React 19', 'Gemini API', 'PostgreSQL', 'pgvector', 'Redis', 'Docker'],
    metrics: [
      { label: 'Token Throughput', labelBn: 'টোকেন থ্রুপুট', value: '15M+ / day' },
      { label: 'Cache Hit Rate', labelBn: 'ক্যাশ হিট রেট', value: '38.4%' },
      { label: 'Avg Latency', labelBn: 'গড় ল্যাটেন্সি', value: '140ms' },
    ],
    architectureSummary: 'Built with Go for goroutine-level concurrency, pgvector for HNSW indexing, and an event-driven Redis cache layer for semantic query deduplication.',
    architectureSummaryBn: 'উচ্চ সমসাময়িকতার জন্য Go, HNSW ইনডেক্সিং এর জন্য pgvector এবং কুয়েরি অপ্টিমাইজেশনের জন্য Redis ক্যাশ লেয়ার দিয়ে নির্মিত।',
    architectureComponents: [
      { layer: 'Frontend UI', tech: 'React 19, TypeScript, Tailwind CSS', detail: 'Real-time SSE streaming visualizer and interactive workflow canvas' },
      { layer: 'API Gateway', tech: 'Go (Fiber) + gRPC', detail: 'Rate limiter, JWT auth verification, and request demultiplexing' },
      { layer: 'Reasoning Engine', tech: 'Gemini 4 Argon & Hybrid RAG', detail: 'High thinking reasoning pipelines with structured tool calling' },
      { layer: 'Persistence & Vector', tech: 'PostgreSQL + pgvector', detail: '1536-dim embeddings with HNSW cosine distance indexing' },
    ],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    color: 'from-sky-500 to-indigo-600',
  },
  {
    id: 'bangla-voice-nlp',
    title: 'BanglaVoice & Cognitive NLP',
    titleBn: 'বাংলাভয়েস ও কগনিটিভ এনএলপি',
    tagline: 'Real-time low-latency Bengali speech-to-text & semantic analysis',
    taglineBn: 'রিয়েল-টাইম লো-ল্যাটেন্সি বাংলা স্পিচ-টু-টেক্সট ও সিম্যান্টিক অ্যানালিসিস',
    description: 'A speech recognition and natural language processing platform specialized in colloquial dialects and regional accents of Bengali.',
    descriptionBn: 'বাংলা ভাষা এবং আঞ্চলিক উপভাষার জন্য তৈরি একটি স্পিচ রিকগনিশন ও এনএলপি প্ল্যাটফর্ম।',
    category: 'ai',
    tags: ['Python', 'FastAPI', 'WebSockets', 'React', 'PyTorch', 'Tailwind'],
    metrics: [
      { label: 'WER (Word Error)', labelBn: 'শব্দ ত্রুটি হার', value: '< 6.8%' },
      { label: 'Audio Stream Delay', labelBn: 'অডিও ডিলে', value: '180ms' },
      { label: 'Bengali Dialects', labelBn: 'উপভাষা কভারেজ', value: '8 Regions' },
    ],
    architectureSummary: 'Utilizes WebSocket full-duplex chunk streaming to an optimized acoustic inference worker pool with dynamic audio normalization.',
    architectureSummaryBn: 'ওয়েবসকেট ও অপ্টিমাইজড পাইথন ইনফারেন্স ওয়ার্কার পুলের মাধ্যমে রিয়েলটাইম অডিও স্ট্রিম প্রসেস করে।',
    architectureComponents: [
      { layer: 'Client Capture', tech: 'AudioContext & WebRTC', detail: 'Browser PCM capture resampled to 16kHz mono stream' },
      { layer: 'Streaming Hub', tech: 'FastAPI + WebSockets', detail: 'Asynchronous event loop handling hundreds of concurrent mic sessions' },
      { layer: 'Inference', tech: 'Fine-tuned Transformer & Gemini TTS', detail: 'High-accuracy phonetic alignment and natural voice feedback' },
    ],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'cloud-mesh',
    title: 'CloudMesh Microservices Observability',
    titleBn: 'ক্লাউডম্যাশ মাইক্রোসার্ভিসেস অবজারভার',
    tagline: 'Zero-trust topology mapping & eBPF distributed tracing',
    taglineBn: 'জিরো-ট্রাস্ট টপোলজি ম্যাপিং ও ডিস্ট্রিবিউটেড ট্রেসিং ইঞ্জিন',
    description: 'An infrastructure monitoring tool rendering live dependency graphs, service health anomalies, and network latencies without code instrumentation.',
    descriptionBn: 'কোড পরিবর্তন ছাড়াই মাইক্রোসার্ভিসের লাইভ ডিপেনডেন্সি গ্রাফ ও নেটওয়ার্ক ল্যাটেন্সি মনিটরিং টুল।',
    category: 'cloud',
    tags: ['Rust', 'Node.js', 'TypeScript', 'Docker', 'Kubernetes', 'Prometheus'],
    metrics: [
      { label: 'Metrics Processed', labelBn: 'প্রসেসড মেট্রিক্স', value: '120k / sec' },
      { label: 'CPU Overhead', labelBn: 'সিপিইউ ওভারহেড', value: '< 1.2%' },
      { label: 'Alert Detection', labelBn: 'অ্যালার্ট ডিটেকশন', value: '< 300ms' },
    ],
    architectureSummary: 'Kernel-level telemetry parsed in Rust and aggregated into a high-speed TypeScript event pipeline connected to a WebGL visualizer.',
    architectureSummaryBn: 'কার্নেল-লেভেল টেলিমেট্রি এবং রিয়েল-টাইম ওয়েবজিএল গ্রাফ ভিজুয়ালাইজার দিয়ে সজ্জিত।',
    architectureComponents: [
      { layer: 'Visualizer', tech: 'Three.js / WebGL + React', detail: '3D interactive live mesh topology graph' },
      { layer: 'Collector', tech: 'Rust Kernel Agent', detail: 'Zero-overhead socket capture and packet timing analysis' },
      { layer: 'Aggregator', tech: 'Node.js Cluster + TimescaleDB', detail: 'Time-series compaction and real-time anomaly detection' },
    ],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true,
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'fintrack-pro',
    title: 'FinTrack Enterprise Ledger',
    titleBn: 'ফিনট্র্যাক এন্টারপ্রাইজ লেজার',
    tagline: 'Multi-currency financial ledger with immutable audit trails',
    taglineBn: 'মাল্টি-কারেন্সি অর্থনৈতিক লেজার এবং অপরিবর্তনীয় অডিট ট্রেইল',
    description: 'Double-entry bookkeeping system with automatic reconciliation, bank statement OCR parsing, and real-time exchange hedging calculations.',
    descriptionBn: 'ডাবল-এন্ট্রি হিসাবব্যবস্থা, ব্যাংক স্টেটমেন্ট অটোমেশন এবং রিয়েল-টাইম কারেন্সি ক্যালকুলেশন ইঞ্জিন।',
    category: 'fullstack',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind', 'Stripe'],
    metrics: [
      { label: 'Transactions Audited', labelBn: 'অডিটকৃত লেনদেন', value: '$85M+' },
      { label: 'Reconciliation Speed', labelBn: 'রিকনসিলিয়েশন গতি', value: '10x Faster' },
      { label: 'Data Accuracy', labelBn: 'তথ্য নির্ভুলতা', value: '99.999%' },
    ],
    architectureSummary: 'Built on strict ACID transactions with row-level pessimistic locking, cryptographic hash chaining for audit integrity.',
    architectureSummaryBn: 'কঠোর এসিড (ACID) ট্রানজ্যাকশন এবং ক্রিপ্টোগ্রাফিক হ্যাশ চেইনিং সহ সর্বোচ্চ নিরাপত্তা প্রদানকারী।',
    architectureComponents: [
      { layer: 'Web App', tech: 'Next.js App Router & Tailwind', detail: 'Keyboard-first financial data grids with zero layout shifts' },
      { layer: 'Ledger Engine', tech: 'Node.js Worker Threads', detail: 'Concurrent double-entry validation and balance reconciliation' },
      { layer: 'Database', tech: 'PostgreSQL with Partitioning', detail: 'Monthly table partitions with read-replica read scaling' },
    ],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'smart-retail-ai',
    title: 'SmartRetail Edge Inventory',
    titleBn: 'স্মার্টরিটেইল এজ ইনভেন্টরি',
    tagline: 'Computer vision stock auditing & foot-traffic heatmaps',
    taglineBn: 'কম্পিউটার ভিশন ভিত্তিক স্টক অডিট ও কাস্টমার হিটম্যাপ সিস্টেম',
    description: 'A cloud-edge hybrid platform syncing on-premise IP camera detections with centralized warehouse management and replenishment alerts.',
    descriptionBn: 'অন-প্রিমিসেস সিসিটিভি ক্যামেরা ও কেন্দ্রীয় গুদাম ব্যবস্থাপনাকে সংযুক্তকারী কৃত্রিম বুদ্ধিমত্তা সম্পন্ন প্ল্যাটফর্ম।',
    category: 'ai',
    tags: ['React', 'Node.js', 'Python', 'OpenCV', 'MQTT', 'Tailwind'],
    metrics: [
      { label: 'Detection Accuracy', labelBn: 'শনাক্তকরণ নির্ভুলতা', value: '98.2%' },
      { label: 'Stockout Reduction', labelBn: 'স্টকঘাটতি হ্রাস', value: '42%' },
      { label: 'Edge FPS', labelBn: 'এজ এফপিএস', value: '30 FPS' },
    ],
    architectureSummary: 'Lightweight YOLO models running on edge gateways transmitting delta telemetry via MQTT to a central React dashboard.',
    architectureSummaryBn: 'এজ গেটওয়ে এবং এমকিউটিটি প্রোটোকলের মাধ্যমে সেন্ট্রাল রিয়্যাক্ট ড্যাশবোর্ডে ডেটা স্থানান্তর।',
    architectureComponents: [
      { layer: 'Dashboard', tech: 'React, TanStack Table, Recharts', detail: 'Live heatmap overlays and inventory forecasting' },
      { layer: 'Telemetry Gateway', tech: 'MQTT Broker + Node.js', detail: 'Low-bandwidth edge payload serialization' },
    ],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: false,
    color: 'from-rose-500 to-pink-600',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    titleBn: 'ফ্রন্টএন্ড ইঞ্জিনিয়ারিং',
    iconName: 'Layout',
    skills: [
      { name: 'React 19 / 18', level: 96, years: '6 yrs', highlight: 'Hooks, Suspense, Server Components, Concurrent Mode' },
      { name: 'TypeScript', level: 94, years: '6 yrs', highlight: 'Strict typing, Generics, Utility Types, AST transformations' },
      { name: 'Next.js & Vite', level: 92, years: '5 yrs', highlight: 'SSR, SSG, Edge Middleware, Bundle Optimization' },
      { name: 'Tailwind CSS', level: 95, years: '5 yrs', highlight: 'Design systems, responsive architecture, Tailwind v4' },
      { name: 'State & Cache', level: 90, years: '6 yrs', highlight: 'Zustand, Redux Toolkit, TanStack Query' },
    ],
  },
  {
    title: 'Backend & Distributed Systems',
    titleBn: 'ব্যাকএন্ড ও ডিস্ট্রিবিউটেড সিস্টেমস',
    iconName: 'Server',
    skills: [
      { name: 'Node.js / Express', level: 95, years: '7 yrs', highlight: 'Event loop tuning, Clustering, Streams, Microservices' },
      { name: 'Go (Golang)', level: 86, years: '3 yrs', highlight: 'Goroutines, Channels, gRPC, High-throughput APIs' },
      { name: 'Python (FastAPI)', level: 88, years: '4 yrs', highlight: 'Async endpoints, Pydantic, ML inference serving' },
      { name: 'REST & GraphQL', level: 92, years: '6 yrs', highlight: 'Schema design, Federation, Dataloader, OpenAPI' },
      { name: 'WebSockets & SSE', level: 90, years: '5 yrs', highlight: 'Real-time bidirectional streams, Pub/Sub, Heartbeats' },
    ],
  },
  {
    title: 'AI, LLMs & Machine Learning',
    titleBn: 'এআই, এলএলএম ও মেশিন লার্নিং',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Gemini SDK & Models', level: 94, years: '3 yrs', highlight: 'Gemini 4 Argon, Gemini 3.8 Flash, High Thinking' },
      { name: 'RAG Architecture', level: 92, years: '3 yrs', highlight: 'Hybrid search, Semantic chunking, Re-ranking' },
      { name: 'Vector Databases', level: 88, years: '3 yrs', highlight: 'pgvector, Pinecone, Qdrant, Cosine similarity' },
      { name: 'Function Calling & Agents', level: 90, years: '2.5 yrs', highlight: 'Autonomous tool pipelines, Multi-step reasoning' },
      { name: 'Prompt Engineering', level: 95, years: '3 yrs', highlight: 'Few-shot, Chain-of-thought, Schema enforcement' },
    ],
  },
  {
    title: 'Databases & Storage',
    titleBn: 'ডাটাবেস ও স্টোরেজ সিস্টেম',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 92, years: '7 yrs', highlight: 'Query optimization, Partitioning, ACID transactions' },
      { name: 'Redis', level: 90, years: '6 yrs', highlight: 'In-memory caching, Distributed locks, Streams' },
      { name: 'MongoDB', level: 88, years: '5 yrs', highlight: 'Document modeling, Aggregation pipelines' },
      { name: 'Database Indexing', level: 89, years: '6 yrs', highlight: 'B-tree, GIN, GiST, HNSW vector indexing' },
    ],
  },
  {
    title: 'DevOps, Cloud & Architecture',
    titleBn: 'ডেভঅপস, ক্লাউড ও আর্কিটেকচার',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker & Containers', level: 92, years: '6 yrs', highlight: 'Multi-stage builds, Distroless images, Compose' },
      { name: 'Kubernetes', level: 82, years: '3 yrs', highlight: 'Deployments, Ingress, HPA, ConfigMaps' },
      { name: 'AWS & GCP', level: 88, years: '5 yrs', highlight: 'Cloud Run, ECS, S3, IAM, CloudWatch, BigQuery' },
      { name: 'CI/CD Pipelines', level: 90, years: '5 yrs', highlight: 'GitHub Actions, automated tests, blue-green deploys' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Full-Stack & AI Systems Architect',
    roleBn: 'লিড ফুল-স্ট্যাক ও এআই সিস্টেমস আর্কিটেক্ট',
    company: 'NeuralFlow Technologies',
    companyBn: 'নিউরালফ্লো টেকনোলজিস',
    location: 'Dhaka, Bangladesh & Remote',
    period: '2023 - Present',
    periodBn: '২০২৩ - বর্তমান',
    type: 'Full-Time',
    typeBn: 'ফুল-টাইম',
    responsibilities: [
      'Architected and led the development of enterprise multi-tenant GenAI platforms processing 15M+ daily tokens with sub-150ms semantic caching.',
      'Transitioned core monolith services into Go and Node.js microservices, cutting server infrastructure costs by 38%.',
      'Mentored a cross-functional team of 11 engineers, establishing CI/CD automation, strict TypeScript standards, and code review benchmarks.',
    ],
    responsibilitiesBn: [
      'দৈনিক ১৫ মিলিয়নের বেশি টোকেন প্রক্রিয়াকরণক্ষম এন্টারপ্রাইজ জেনএআই প্ল্যাটফর্ম আর্কিটেক্ট ও পরিচালনা করেছেন।',
      'কোর মনোলিথ সিস্টেমকে Go ও Node.js মাইক্রোসার্ভিসে রূপান্তর করে অবকাঠামো খরচ ৩৮% হ্রাস করেছেন।',
      '১১ জন ইঞ্জিনিয়ারের একটি দলকে মেন্টরিং এবং উচ্চমানের কোড স্ট্যান্ডার্ড নিশ্চিত করেছেন।',
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Go', 'Gemini API', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Senior Software Engineer',
    roleBn: 'সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার',
    company: 'Apex Cloud Solutions',
    companyBn: 'অ্যাপেক্স ক্লাউড সল্যুশনস',
    location: 'Dhaka, Bangladesh',
    period: '2021 - 2023',
    periodBn: '২০২১ - ২০২৩',
    type: 'Full-Time',
    typeBn: 'ফুল-টাইম',
    responsibilities: [
      'Spearheaded the development of real-time cloud analytics dashboards using Next.js, WebSockets, and Redis pub/sub.',
      'Optimized PostgreSQL database performance, resolving complex table locking issues and reducing query execution times by 55%.',
      'Engineered automated e2e testing pipelines with Playwright and Jest, elevating test coverage from 45% to 92%.',
    ],
    responsibilitiesBn: [
      'Next.js এবং WebSockets ব্যবহার করে রিয়েলটাইম ক্লাউড অ্যানালিটিক্স ড্যাশবোর্ড তৈরি করেছেন।',
      'পোস্টগ্রেসকিউএল অপ্টিমাইজেশনের মাধ্যমে জটিল কুয়েরি এক্সিকিউশন টাইম ৫৫% কমিয়ে এনেছেন।',
      'টেস্ট অটোমেশন পাইপলাইন কার্যকর করে কোড কভারেজ ৯২% এ উন্নীত করেছেন।',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'Tailwind'],
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Developer',
    roleBn: 'ফুল-স্ট্যাক ডেভেলপার',
    company: 'InnovateX Software Lab',
    companyBn: 'ইনোভেক্স সফটওয়্যার ল্যাব',
    location: 'Dhaka, Bangladesh',
    period: '2019 - 2021',
    periodBn: '২০১৯ - ২০২১',
    type: 'Full-Time',
    typeBn: 'ফুল-টাইম',
    responsibilities: [
      'Engineered responsive web applications and RESTful backend APIs for international fintech and e-commerce clients.',
      'Integrated Stripe, PayPal, and SSLCommerz payment gateways with automatic webhook verification and idempotency protection.',
      'Collaborated closely with product designers to implement pixel-perfect user experiences and accessibility best practices.',
    ],
    responsibilitiesBn: [
      'আন্তর্জাতিক ক্লায়েন্টদের জন্য আধুনিক ওয়েব অ্যাপ্লিকেশন ও ব্যাকএন্ড এপিআই তৈরি করেছেন।',
      'নিরাপদ পেমেন্ট গেটওয়ে এবং ওয়েবহুক ইন্টিগ্রেশন সম্পন্ন করেছেন।',
      'ইউজার ইন্টারফেস ও পারফরম্যান্স অপ্টিমাইজেশনে গুরুত্বপূর্ণ অবদান রেখেছেন।',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Bootstrap/Tailwind'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Tariqul Islam',
    title: 'VP of Engineering',
    company: 'Global Cloud Systems',
    quote: 'Md. Nurul Alam is among the rarest engineers who can effortlessly navigate from low-level concurrency and DB indexes to pixel-perfect React frontend animations. His technical depth is astounding.',
    quoteBn: 'নুরুল আলম এমন একজন বিরল ইঞ্জিনিয়ার যিনি জটিল ডাটাবেস ও কনকারেন্সি থেকে শুরু করে চমৎকার ফ্রন্টএন্ড ডিজাইন উভয় দিকেই অত্যন্ত দক্ষ।',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 't-2',
    name: 'Sarah Jenkins',
    title: 'Product Director',
    company: 'Nexus AI Labs',
    quote: 'Nurul delivered our core AI pipeline 3 weeks ahead of schedule. His ability to understand business constraints and convert them into scalable architecture was invaluable.',
    quoteBn: 'নুরুল আমাদের এআই পাইপলাইন নির্দিষ্ট সময়ের ৩ সপ্তাহ আগেই সম্পন্ন করেছিলেন। তার কাজের মান এবং গতি অসাধারণ।',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 't-3',
    name: 'Kamrul Hasan',
    title: 'CTO & Co-founder',
    company: 'FinPulse Tech',
    quote: 'Working with Nurul on our high-volume ledger was a masterclass in resilience engineering. He writes code that simply works under intense load.',
    quoteBn: 'উচ্চ ভলিউমের অর্থনৈতিক সফটওয়্যার নির্মাণে নুরুলের আর্কিটেকচারাল সিদ্ধান্ত আমাদের অসাধারণ নিরাপত্তা ও গতি এনে দিয়েছে।',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  },
];

export const CODE_SNIPPETS = {
  aiPipeline: `// Distributed High-Thinking AI Inference Pipeline
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

export async function orchestrateReasoning(prompt: string, context: string[]) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
  });

  // gemini-4-argon with high thinking mode
  const response = await ai.models.generateContent({
    model: 'gemini-4-argon',
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    config: {
      systemInstruction: 'You are an autonomous engineering architect.',
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.HIGH,
      },
    },
  });

  return response.text;
}`,

  concurrency: `// High-Speed Concurrency Worker in Go
package orchestrator

type TaskResult struct {
    ID      string
    Latency time.Duration
    Payload []byte
    Err     error
}

func WorkerPool(jobs <-chan Job, results chan<- TaskResult, wg *sync.WaitGroup) {
    defer wg.Done()
    for j := range jobs {
        start := time.Now()
        data, err := j.Execute()
        results <- TaskResult{
            ID:      j.ID,
            Latency: time.Since(start),
            Payload: data,
            Err:     err,
        }
    }
}`,

  reactCustomHook: `// React 19 Custom Real-Time Event Stream Hook
import { useEffect, useState, useRef } from 'react';

export function useSSEStream<T>(endpoint: string, payload: any) {
  const [data, setData] = useState<T | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const abortCtrlRef = useRef<AbortController | null>(null);

  const startStream = async () => {
    abortCtrlRef.current?.abort();
    abortCtrlRef.current = new AbortController();
    setIsStreaming(true);

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: abortCtrlRef.current.signal,
    });

    const reader = res.body?.getReader();
    // Progressive stream processing
  };

  return { data, isStreaming, startStream };
}`,
};
