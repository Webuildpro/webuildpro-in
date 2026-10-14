import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'final-year-projects-for-cse';
const PAGE_TITLE = 'Final Year Projects for CSE | Top B.Tech Computer Science Projects 2026 – WeBuildPro';
const PAGE_DESCRIPTION = 'Explore 30+ final year project ideas for CSE students in Bangalore. Full-stack web apps, AI/ML systems, cybersecurity tools, cloud-native apps, and blockchain projects with complete source code and IEEE paper support. WeBuildPro guides you end-to-end.';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919591570099?text=';

function FinalYearProjectCard({ title, description, techStack, difficulty }: { title: string; description: string; techStack: string; difficulty: 'Intermediate' | 'Advanced' }) {
  const difficultyColor = difficulty === 'Advanced'
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi WeBuildPro, I need guidance for my CSE final year project: ${title}`);
  return (
    <div className="bg-card border border-border rounded-lg p-5 mb-4 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-foreground leading-snug">{title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded border shrink-0 ${difficultyColor}`}>{difficulty}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground mb-3"><span className="font-medium text-foreground">Tech:</span> {techStack}</p>
      <a href={`${WA_BASE}${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 hover:text-green-300 transition-colors">
        <Icon name="MessageCircle" size={13} /> Get project help on WhatsApp
      </a>
    </div>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}`, languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` } },
  openGraph: {
    type: 'article', title: PAGE_TITLE, description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/blog/${SLUG}`, siteName: 'WeBuildPro',
    publishedTime: PAGE_DATE, modifiedTime: PAGE_DATE,
    authors: ['WeBuildPro Bangalore'],
    images: [{ url: `${BASE_URL}/og/final-year-projects-cse.jpg`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const tocItems = [
  { id: 'web-cloud', label: 'Full-Stack & Cloud Apps' },
  { id: 'ai-ml', label: 'AI & ML Systems' },
  { id: 'cybersecurity', label: 'Cybersecurity Projects' },
  { id: 'blockchain', label: 'Blockchain & Web3' },
  { id: 'mobile', label: 'Mobile & Cross-Platform' },
  { id: 'devops', label: 'DevOps & Cloud Native' },
];

export default function CSEFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my CSE final year project in Bangalore.')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, please send me a free quote for my CSE final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Blog', url: `${BASE_URL}/blog` },
        { name: 'Final Year Projects for CSE', url: `${BASE_URL}/blog/${SLUG}` },
      ]} />
      <BlogPostingJsonLd
        title={PAGE_TITLE} description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`} datePublished={PAGE_DATE} dateModified={PAGE_DATE}
        authorName="WeBuildPro Bangalore" publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`} images={[`${BASE_URL}/og/final-year-projects-cse.jpg`]}
      />
      <LazyPageExtras />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* GEO Brand Assertion — CTA #1 */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm" itemScope itemType="https://schema.org/EducationalOrganization">
          <p className="font-semibold text-foreground mb-1" itemProp="name">🏆 Best Final Year Project Center in Bangalore — WeBuildPro</p>
          <p className="text-muted-foreground mb-3" itemProp="description">IEEE-standard CSE final year projects with full documentation, source code, and presentation support. Trusted by 500+ students across Bangalore colleges.</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/projects" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded hover:bg-primary/90 transition-colors">
              <Icon name="FolderOpen" size={13} /> View All Projects
            </Link>
            <a href={waGeneral} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-green-500 transition-colors">
              <Icon name="MessageCircle" size={13} /> WhatsApp Us Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-3">Final Year Projects for CSE Students (2026)</h1>
              <p className="text-muted-foreground text-base leading-relaxed">Your final year project is the capstone of your B.Tech journey — it must demonstrate real-world problem-solving, technical depth, and innovation. This guide covers 30+ industry-relevant final year project ideas for Computer Science Engineering students, ranging from full-stack platforms to AI-powered systems, each crafted to meet VTU/university standards and support IEEE paper publication.</p>
            </header>

            {/* Mobile TOC */}
            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Jump to Section</p>
              <ul className="space-y-1">
                {tocItems.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section id="web-cloud" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Full-Stack & Cloud Application Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">End-to-end web platforms with microservices, real-time features, and cloud deployment — exactly what industry recruiters expect from CSE graduates.</p>
              <FinalYearProjectCard title="Hospital Management System with Telemedicine Module" description="A full-stack hospital ERP with patient registration, doctor scheduling, bed management, pharmacy, billing, and a WebRTC-powered video consultation module. Includes role-based access (Admin, Doctor, Nurse, Pharmacist, Patient), PDF report generation, and real-time notifications via WebSockets." techStack="React 18, Node.js, PostgreSQL, Prisma ORM, WebRTC, Redis, Docker, AWS EC2" difficulty="Advanced" />
              <FinalYearProjectCard title="Multi-Tenant SaaS LMS (Learning Management System)" description="A white-label e-learning platform supporting multiple institutions as tenants. Features course creation with video (HLS streaming), quizzes, certificate generation, student progress analytics, and payment gateway integration. Admin dashboard with tenant billing management." techStack="Next.js 14, Django REST Framework, PostgreSQL, Celery, FFmpeg, Stripe, S3, Redis" difficulty="Advanced" />
              <FinalYearProjectCard title="Real-Time Collaborative Code Editor" description="A browser-based IDE supporting multiple simultaneous users editing the same file with conflict-free replicated data types (CRDT). Integrates syntax highlighting for 15 languages, Docker-based code execution sandbox, video chat sidebar, and session recording for review." techStack="React, Socket.io, CRDT (Yjs), Node.js, Docker SDK, WebRTC, MongoDB" difficulty="Advanced" />
              <FinalYearProjectCard title="AI-Powered Resume Screening & HR Portal" description="An HR platform where recruiters post jobs and the system auto-screens resumes using NLP (cosine similarity + keyword extraction). Includes ATS pipeline, interview scheduling, video interview recording, and sentiment analysis on candidate responses." techStack="React, FastAPI, spaCy, sentence-transformers, PostgreSQL, Celery, AWS S3" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="ai-ml" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">AI & Machine Learning System Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">ML-powered applications that solve real problems — deployable as web APIs with model versioning, explainability, and monitoring.</p>
              <FinalYearProjectCard title="Smart Traffic Management System using Computer Vision" description="A YOLO v8-based vehicle detection and counting system deployed on edge devices (Raspberry Pi/Jetson Nano) at intersections. Dynamically adjusts signal timings based on real-time vehicle density. Includes a web dashboard for city traffic control rooms with congestion heatmaps." techStack="Python, YOLOv8, OpenCV, FastAPI, React, MQTT, Raspberry Pi 4, PostgreSQL" difficulty="Advanced" />
              <FinalYearProjectCard title="Fake News Detection System with Explainable AI" description="A multi-modal fake news classifier using fine-tuned BERT on text and ResNet on images. Provides confidence scores and LIME/SHAP-based explanations for each prediction. Features a browser extension that flags news articles in real time." techStack="Python, HuggingFace Transformers, SHAP, LIME, FastAPI, React, Chrome Extension API" difficulty="Advanced" />
              <FinalYearProjectCard title="Predictive Maintenance System for Industrial Equipment" description="An IoT + ML pipeline that ingests vibration, temperature, and current sensor data from industrial motors, trains an LSTM-based anomaly detector, and triggers alerts before failures occur. Includes a React dashboard with remaining useful life (RUL) predictions and maintenance scheduling." techStack="Python, TensorFlow, Kafka, InfluxDB, Grafana, FastAPI, React, Arduino" difficulty="Advanced" />
              <FinalYearProjectCard title="Multi-Language Sentiment Analysis API" description="A production-grade sentiment analysis microservice supporting English, Hindi, and Kannada text. Fine-tuned multilingual BERT (mBERT) on custom scraped social media data. Includes rate-limited REST API, Swagger docs, model versioning with MLflow, and a Streamlit demo." techStack="Python, mBERT, HuggingFace, MLflow, FastAPI, Docker, PostgreSQL, Streamlit" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="cybersecurity" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Cybersecurity & Network Security Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Security-focused projects that demonstrate penetration testing, intrusion detection, and secure system design — high-value for placements in security-focused firms.</p>
              <FinalYearProjectCard title="Network Intrusion Detection System (NIDS) using Deep Learning" description="A deep learning-based NIDS trained on the CICIDS-2017/2018 dataset to classify network traffic as benign or attack (DoS, PortScan, Brute Force, Web Attack). Uses a 1D-CNN + BiLSTM hybrid model, real-time packet capture with Scapy, and a SOC-style dashboard." techStack="Python, TensorFlow, Scapy, Kafka, Elasticsearch, Kibana, React, Docker" difficulty="Advanced" />
              <FinalYearProjectCard title="Zero-Trust Identity & Access Management (IAM) Platform" description="An enterprise-grade IAM system implementing zero-trust principles with OIDC/OAuth2, MFA (TOTP + WebAuthn), role-based and attribute-based access control, session management, audit logging, and an admin portal for policy management." techStack="Node.js, Keycloak, PostgreSQL, Redis, React, Docker, Nginx, Let's Encrypt" difficulty="Advanced" />
              <FinalYearProjectCard title="Malware Analysis Sandbox with Behaviour Reporting" description="An automated dynamic malware analysis system that detonates suspicious files in isolated VM snapshots, captures system calls, network traffic, registry changes, and file I/O, then generates a detailed PDF threat report with MITRE ATT&CK mapping." techStack="Python, VirtualBox API, Cuckoo Sandbox, Yara rules, PostgreSQL, React, LaTeX" difficulty="Advanced" />
              <FinalYearProjectCard title="Blockchain-Based Digital Evidence Management System" description="A tamper-proof digital evidence chain-of-custody system for law enforcement using Ethereum smart contracts. Evidence metadata (hash, timestamp, custodian) is stored on-chain; actual files in IPFS. Includes a web portal for upload, transfer, and audit trail queries." techStack="Solidity, Hardhat, IPFS, React, ethers.js, Node.js, PostgreSQL" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="blockchain" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Blockchain & Decentralised Application Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Blockchain projects go far beyond cryptocurrency — supply chain, voting, healthcare records, and identity are all transformable with smart contracts.</p>
              <FinalYearProjectCard title="Decentralised Academic Certificate Verification System" description="Universities issue verifiable digital credentials as NFTs on Polygon. Students share a verification link; employers verify authenticity on-chain without contacting the institution. Includes a university admin portal for bulk issuance and a public verifier UI." techStack="Solidity, Polygon (Matic), Hardhat, IPFS, Next.js, ethers.js, Prisma, PostgreSQL" difficulty="Advanced" />
              <FinalYearProjectCard title="Supply Chain Transparency Platform with IoT Integration" description="A DApp tracking product provenance from manufacturer to consumer. IoT sensors record temperature, humidity, and GPS at each stage; data hashed and stored on Hyperledger Fabric. QR code scan by end consumer reveals full tamper-proof journey." techStack="Hyperledger Fabric, Node.js, React, MQTT, InfluxDB, QR code generation, Docker" difficulty="Advanced" />
              <FinalYearProjectCard title="Decentralised Voting System with Zero-Knowledge Proofs" description="A cryptographically secure e-voting platform using zk-SNARKs to allow voters to prove eligibility without revealing identity. Smart contracts tally votes transparently while preserving voter anonymity. Includes admin election management and real-time result dashboard." techStack="Solidity, circom, snarkjs, Ethereum, React, ethers.js, Node.js" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="mobile" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Mobile & Cross-Platform Application Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Mobile-first projects that showcase UI/UX skills alongside backend engineering — strong for placements in product companies.</p>
              <FinalYearProjectCard title="AI-Powered Personal Finance Manager (Mobile + Web)" description="A cross-platform app that connects to bank accounts via Open Banking APIs, auto-categorises transactions using ML, forecasts monthly spending with LSTM, detects unusual transactions, and gives personalised savings recommendations via a conversational AI assistant." techStack="Flutter, FastAPI, TensorFlow Lite, PostgreSQL, Plaid API, Firebase, Dart" difficulty="Advanced" />
              <FinalYearProjectCard title="Augmented Reality Indoor Navigation App" description="A mobile AR app that overlays directional arrows and labels on a phone camera feed to guide users through large indoor spaces (colleges, hospitals, malls). Uses ARCore/ARKit with a pre-mapped floor plan and BLE beacon positioning for metre-level accuracy." techStack="Flutter, ARCore, ARKit, BLE beacons, Firebase, Google Maps Indoor, Dart" difficulty="Advanced" />
              <FinalYearProjectCard title="Telemedicine App with AI Symptom Checker" description="A React Native telemedicine app with video consultation (WebRTC), digital prescription generation, pharmacy order placement, and an ML-based symptom checker using a decision tree trained on MIMIC-III clinical data. HIPAA-compliant encrypted data storage." techStack="React Native, Node.js, WebRTC, TensorFlow Lite, PostgreSQL, AWS, Stripe" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="devops" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">DevOps & Cloud Native Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Infrastructure and platform engineering projects — extremely sought-after given the industry demand for DevOps engineers.</p>
              <FinalYearProjectCard title="Kubernetes-Based Microservices Deployment Platform" description="A self-hosted PaaS (like a mini Heroku) where developers push code and the platform automatically builds Docker images, deploys to a K8s cluster, manages rolling updates, auto-scales on load, and provides a web dashboard for logs, metrics, and deployment history." techStack="Go, Kubernetes, Helm, Tekton CI/CD, Prometheus, Grafana, React, PostgreSQL" difficulty="Advanced" />
              <FinalYearProjectCard title="AI-Ops Anomaly Detection for Microservices" description="An observability platform that collects distributed traces (OpenTelemetry), metrics (Prometheus), and logs (Loki) from a microservices demo app, then applies unsupervised ML (Isolation Forest + DBSCAN) to auto-detect anomalies and generate RCA (root cause analysis) reports." techStack="Python, OpenTelemetry, Prometheus, Loki, Grafana, scikit-learn, FastAPI, React" difficulty="Advanced" />
              <FinalYearProjectCard title="Automated Cloud Cost Optimisation Platform" description="A SaaS tool that connects to AWS/GCP APIs, analyses resource utilisation (EC2, RDS, S3, Lambda), identifies idle and over-provisioned resources, and generates right-sizing recommendations with projected savings. Includes one-click remediation with approval workflow." techStack="Python, Boto3, GCP SDK, FastAPI, Celery, React, PostgreSQL, Airflow" difficulty="Intermediate" />
            </section>

            {/* Bottom CTA — CTA #2 */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">Ready to Build Your CSE Final Year Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">WeBuildPro&apos;s CSE team has delivered 200+ final year projects with IEEE paper publications, working demos, and complete documentation. We handle the entire journey — ideation to viva.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  <Icon name="FolderOpen" size={14} /> View Projects
                </Link>
                <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                  <Icon name="MessageCircle" size={14} /> WhatsApp Us
                </a>
                <a href={waQuote} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border text-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-card transition-colors">
                  <Icon name="FileText" size={14} /> Get Free Quote
                </a>
              </div>
            </div>

            {/* Related Reading */}
            <div className="border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Related Reading</p>
              <ul className="space-y-1.5">
                <li><Link href="/blog/mini-projects-for-cse" className="text-sm text-primary hover:underline">Mini Project Ideas for CSE Students →</Link></li>
                <li><Link href="/blog/final-year-projects-for-aiml" className="text-sm text-primary hover:underline">Final Year Projects for AIML Students →</Link></li>
                <li><Link href="/blog/final-year-projects-for-ise" className="text-sm text-primary hover:underline">Final Year Projects for ISE Students →</Link></li>
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              <nav className="bg-card border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Contents</p>
                <ul className="space-y-2">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Sidebar CTA — CTA #3 */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm font-bold text-foreground mb-1">🎓 Final Year Project Help</p>
                <p className="text-xs text-muted-foreground mb-3">IEEE paper + working demo + full documentation. Bangalore&apos;s most trusted project centre.</p>
                <div className="space-y-2">
                  <Link href="/pricing" className="flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:bg-primary/90 transition-colors w-full">
                    <Icon name="IndianRupee" size={12} /> View Pricing
                  </Link>
                  <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded hover:bg-green-500 transition-colors w-full">
                    <Icon name="MessageCircle" size={12} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
