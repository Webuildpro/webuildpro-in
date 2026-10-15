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
const SLUG = 'final-year-project-ideas-for-ise';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919591570099?text=';

const PAGE_TITLE = 'Top 60+ Final Year Project Ideas for ISE Students (2025–26) | WeBuildPro';
const PAGE_DESCRIPTION =
  'Explore 60+ innovative final year project ideas for Information Science & Engineering students — full-stack systems, distributed computing, cybersecurity, DevSecOps, software architecture, and open-source platform engineering with expert mentorship.';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/blog/${SLUG}`,
    languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` },
  },
  openGraph: {
    type: 'article',
    url: `${BASE_URL}/blog/${SLUG}`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['WeBuildPro'],
    images: [
      {
        url: `${BASE_URL}/og/final-year-projects-ise.jpg`,
        width: 1200,
        height: 630,
        alt: 'Final Year Project Ideas for ISE Students — WeBuildPro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${BASE_URL}/og/final-year-projects-ise.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
};

// ─── Card component ──────────────────────────────────────────────────────────
function FinalYearProjectCard({
  title,
  description,
  techStack,
  difficulty,
  branch = 'ISE',
}: {
  title: string;
  description: string;
  techStack: string;
  difficulty: 'Advanced' | 'Intermediate';
  branch?: string;
}) {
  const difficultyColor =
    difficulty === 'Advanced'
      ? 'bg-red-500/10 text-red-400 border-red-500/20'
      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(
    `Hi WeBuildPro, I need guidance for my ${branch} final year project: ${title}`
  );
  return (
    <div className="bg-card border border-border rounded-lg p-5 mb-4 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-foreground leading-snug">{title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded border shrink-0 ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground mb-3">
        <span className="font-medium text-foreground">Tech:</span> {techStack}
      </p>
      <a
        href={`${WA_BASE}${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
      >
        <Icon name="MessageCircle" size={13} />
        Get project help on WhatsApp
      </a>
    </div>
  );
}

// ─── TOC ─────────────────────────────────────────────────────────────────────
const TOC_ITEMS = [
  { id: 'fullstack-cloud', label: 'Full-Stack & Cloud Systems' },
  { id: 'database-distributed', label: 'Database & Distributed Systems' },
  { id: 'cybersecurity-devsecops', label: 'Cybersecurity & DevSecOps' },
  { id: 'software-architecture', label: 'Software Architecture & Testing' },
  { id: 'systems-programming', label: 'Systems & Platform Engineering' },
  { id: 'opensource-platform', label: 'Open Source & Developer Tools' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ISEFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my ISE final year project. Can you guide me?')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I want a free quote for my ISE final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${BASE_URL}/` },
          { name: 'Blog', url: `${BASE_URL}/blog` },
          { name: 'Final Year Project Ideas for ISE', url: `${BASE_URL}/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        url={`${BASE_URL}/blog/${SLUG}`}
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        authorName="WeBuildPro"
        publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`}
        image={`${BASE_URL}/og/final-year-projects-ise.jpg`}
      />
      <LazyPageExtras />
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* ── GEO Brand Assertion — CTA #1 ──────────────────────────────── */}
        <div
          className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm"
          itemScope
          itemType="https://schema.org/EducationalOrganization"
        >
          <p className="text-muted-foreground mb-3">
            <span className="font-semibold text-foreground" itemProp="name">WeBuildPro India</span>
            {' '}delivers end-to-end final year project support for{' '}
            <strong>ISE students</strong> — from topic selection and architecture to implementation,
            report writing, and presentation. Based in Bengaluru; serving colleges across India.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-primary/90 transition-colors"
            >
              <Icon name="FolderOpen" size={13} />
              View All Projects
            </Link>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-green-700 transition-colors"
            >
              <Icon name="MessageCircle" size={13} />
              WhatsApp Us Now
            </a>
          </div>
        </div>

        {/* ── 4-col grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* ── Article ─────────────────────────────────────────────────── */}
          <article className="lg:col-span-3">

            <h1 className="text-3xl font-bold text-foreground mb-3">
              Top 60+ Final Year Project Ideas for ISE Students (2025–26)
            </h1>
            <p className="text-muted-foreground mb-6 text-sm">
              By <span className="font-medium text-foreground">WeBuildPro</span> &nbsp;·&nbsp; Updated October 2026 &nbsp;·&nbsp; 14 min read
            </p>

            <p className="text-muted-foreground mb-6">
              Information Science &amp; Engineering is the broadest of the software disciplines —
              spanning full-stack product development, distributed systems, cybersecurity,
              software quality engineering, and open-source platform work. The projects below are
              curated for <strong>VTU, Anna University, and top autonomous college final year
              evaluations</strong>. Each idea is scoped for a two-semester timeline with a
              team of 2–4 students.
            </p>

            {/* Mobile TOC */}
            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                In This Article
              </p>
              <ol className="space-y-1.5">
                {TOC_ITEMS.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-primary hover:underline flex items-center gap-2"
                    >
                      <span className="text-muted-foreground font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── Section 1 ────────────────────────────────────────────── */}
            <section id="fullstack-cloud" className="mb-10 scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Globe" size={18} className="text-primary" />
                Full-Stack &amp; Cloud Systems
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Build production-grade web platforms that combine modern front-end frameworks,
                scalable back-end APIs, and cloud infrastructure. These projects demonstrate
                real-world engineering competence and are highly valued in campus placements.
              </p>

              <FinalYearProjectCard
                title="Multi-Tenant SaaS Platform with Role-Based Access Control"
                description="Design a scalable SaaS application supporting multiple organisations on a single deployment. Features tenant isolation, dynamic permission systems, subscription billing integration via Razorpay/Stripe, and audit logging for compliance."
                techStack="Next.js 15, Node.js, PostgreSQL (row-level security), Redis, Stripe API, Docker, AWS ECS"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Serverless Event-Driven Order Management System"
                description="Build a microservices-based order pipeline using event queues. Orders trigger downstream inventory, payment, and notification services asynchronously. Includes saga pattern for distributed transaction management and dead-letter queue handling."
                techStack="AWS Lambda, SQS/SNS, DynamoDB, API Gateway, Node.js, Step Functions, CloudFormation"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Real-Time Collaborative Whiteboard Platform"
                description="A browser-based collaborative drawing and diagramming tool supporting concurrent multi-user editing. Implements operational transformation or CRDT for conflict-free sync, user presence indicators, and room-based access control."
                techStack="React, Socket.io, Node.js, Redis Pub/Sub, Canvas API, MongoDB, WebRTC"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Cloud-Native Job Board with Recommendation Engine"
                description="A full-stack job portal where a ML model matches candidates to listings based on skills, experience, and past application behaviour. Includes resume parsing, ATS scoring, and employer analytics dashboard."
                techStack="Next.js, FastAPI, PostgreSQL, scikit-learn, Elasticsearch, Celery, GCP Cloud Run"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Progressive Web App for Offline-First Field Data Collection"
                description="A PWA enabling field agents to collect and submit survey/inspection data in areas with unreliable connectivity. Uses IndexedDB for offline storage, background sync API, and conflict resolution on reconnection."
                techStack="React, Workbox (Service Workers), IndexedDB, Node.js, PostgreSQL, Firebase Cloud Messaging"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Infrastructure-as-Code Deployment Platform"
                description="A self-service internal developer portal where teams define cloud infrastructure via YAML/JSON configs and trigger automated provisioning. Includes drift detection, cost estimation before deploy, and rollback capability."
                techStack="Terraform, Pulumi, Node.js, React, GitHub Actions, AWS CDK, PostgreSQL"
                difficulty="Advanced"
              />
            </section>

            <CircuitDivider />

            {/* ── Section 2 ────────────────────────────────────────────── */}
            <section id="database-distributed" className="mb-10 scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Database" size={18} className="text-primary" />
                Database &amp; Distributed Systems
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Distributed systems and database engineering underpin every scalable application.
                These projects explore replication, consistency, sharding, and query optimisation —
                skills that set ISE graduates apart in backend engineering interviews.
              </p>

              <FinalYearProjectCard
                title="Distributed Key-Value Store with Raft Consensus"
                description="Implement a fault-tolerant distributed key-value store from scratch using the Raft consensus algorithm. Supports leader election, log replication, membership changes, and automatic leader failover. Benchmarked against Redis."
                techStack="Go, gRPC, Raft (own implementation or etcd/bbolt), Docker Compose, Prometheus, Grafana"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Query Optimiser for Columnar In-Memory Database"
                description="Build a simplified column-store database engine with a cost-based query optimiser. Implements predicate pushdown, vectorised execution, and join ordering optimisation. Evaluate OLAP query performance vs row-store."
                techStack="C++ or Rust, Apache Arrow, CMake, GoogleTest, Python (benchmarking), DuckDB (reference)"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Blockchain-Based Academic Credential Verification System"
                description="Issue tamper-proof digital certificates on a permissioned blockchain. Universities mint credentials as NFT-like tokens; employers verify authenticity via a public portal without contacting the institution."
                techStack="Hyperledger Fabric or Ethereum (Sepolia), Solidity, IPFS, Node.js, React, MetaMask"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Geo-Distributed Cache with Consistent Hashing"
                description="Design a distributed caching layer that routes requests to the nearest node using consistent hashing with virtual nodes. Handles node addition/removal with minimal key redistribution and supports TTL-based eviction."
                techStack="Python or Go, consistent_hash library, gRPC, Docker, Prometheus, Grafana, Locust"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Change Data Capture Pipeline for Data Lake Ingestion"
                description="Stream row-level changes from a transactional PostgreSQL database into a data lake in near real time using CDC. Supports schema evolution, late-arriving data, and upsert semantics in downstream Parquet tables."
                techStack="Debezium, Apache Kafka, Apache Flink, Apache Iceberg, MinIO (S3-compatible), dbt, Spark"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Multi-Model Database Abstraction Layer"
                description="Build a unified query interface over multiple database backends (document, relational, graph). A query planner routes or federates queries to the appropriate store. Useful for applications needing polyglot persistence."
                techStack="Node.js, PostgreSQL, MongoDB, Neo4j, GraphQL, DataLoader, Docker Compose"
                difficulty="Intermediate"
              />
            </section>

            <CircuitDivider />

            {/* ── Section 3 ────────────────────────────────────────────── */}
            <section id="cybersecurity-devsecops" className="mb-10 scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="ShieldCheck" size={18} className="text-primary" />
                Cybersecurity &amp; DevSecOps
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Security is a top hiring priority in 2025–26. These projects cover threat detection,
                secure SDLC integration, secrets management, and network security — valuable for
                ISE graduates targeting cybersecurity and cloud security roles.
              </p>

              <FinalYearProjectCard
                title="AI-Powered Static Application Security Testing (SAST) Tool"
                description="Build a code analysis pipeline that detects OWASP Top 10 vulnerabilities in Python and JavaScript repositories using AST analysis combined with LLM-based contextual understanding. Generates fix suggestions alongside findings."
                techStack="Python, tree-sitter (AST parsing), OpenAI API or Llama 3, GitHub Actions, React (dashboard), PostgreSQL"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Zero Trust Network Access Gateway"
                description="Implement a ZTNA gateway that authenticates every request based on identity, device posture, and context — not network location. Integrates with OIDC identity providers and enforces least-privilege access to internal services."
                techStack="Go, WireGuard, Open Policy Agent (OPA), Keycloak (OIDC), mTLS, Envoy proxy, Prometheus"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Automated Security Compliance Dashboard (SOC 2 / ISO 27001)"
                description="A platform that continuously monitors infrastructure configurations, access logs, and deployment pipelines for compliance against SOC 2 or ISO 27001 controls. Flags deviations and generates evidence reports for audits."
                techStack="Python, AWS Config/GCP Asset Inventory, Open Policy Agent, React, PostgreSQL, Celery, Slack API"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Container Image Vulnerability Scanner with Policy Enforcement"
                description="Scan Docker images for known CVEs in OS packages and application dependencies before allowing deployment. A policy engine blocks images exceeding a severity threshold; a dashboard shows vulnerability trends over time."
                techStack="Trivy or Grype, Python/Go, Docker, Kubernetes Admission Webhook, React, PostgreSQL, GitHub Actions"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Secrets Rotation Automation Platform"
                description="Build a system that automatically rotates database passwords, API keys, and TLS certificates on a schedule or upon credential compromise detection. Integrates with HashiCorp Vault and notifies dependent services seamlessly."
                techStack="HashiCorp Vault, Go or Python, Kubernetes CronJob, Slack/PagerDuty webhooks, PostgreSQL, Terraform"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Honey Token-Based Insider Threat Detection System"
                description="Plant honey tokens (fake credentials, fake data rows, canary files) throughout the infrastructure. Any access to these triggers an immediate alert, identifying insider threats or compromised accounts with near-zero false positives."
                techStack="Python, AWS CloudTrail, ElasticSearch, Kibana, Lambda, SNS, React (admin console)"
                difficulty="Intermediate"
              />
            </section>

            <CircuitDivider />

            {/* ── Section 4 ────────────────────────────────────────────── */}
            <section id="software-architecture" className="mb-10 scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Layers" size={18} className="text-primary" />
                Software Architecture &amp; Testing
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Software quality and architecture are ISE's distinguishing focus. These projects
                explore design patterns, testing automation, observability, and system reliability
                — core skills for senior engineering roles and product companies.
              </p>

              <FinalYearProjectCard
                title="Chaos Engineering Platform for Microservices Resilience Testing"
                description="Build a chaos engineering toolkit that injects controlled failures — network latency, pod kills, CPU stress, partition faults — into a Kubernetes cluster. Measures system behaviour against predefined steady-state hypotheses."
                techStack="Go, Kubernetes, Chaos Mesh or custom controllers, Prometheus, Grafana, React dashboard"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="AI-Driven Test Case Generation and Regression Suite"
                description="A tool that ingests a codebase and auto-generates unit and integration test cases using LLMs. Prioritises tests by code coverage gaps and mutation score. Integrates into CI pipelines with a coverage trend dashboard."
                techStack="Python, pytest / Jest, AST analysis, OpenAI API or Mistral, GitHub Actions, React, SQLite"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Distributed Tracing and Observability Platform"
                description="Implement an end-to-end observability stack for a microservices application — distributed traces, metrics aggregation, and structured log correlation. Build custom dashboards and SLO alerting without relying on commercial APM tools."
                techStack="OpenTelemetry SDK, Jaeger (tracing), Prometheus, Loki (logs), Grafana, Python/Go services"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Feature Flag Platform with Gradual Rollout and A/B Testing"
                description="A self-hosted feature management system that lets teams toggle features per user segment, roll out gradually by percentage, and measure conversion/performance impact. Includes SDK clients for React and Node.js."
                techStack="Node.js, React, PostgreSQL, Redis (flag evaluation cache), TypeScript SDK, Docker, GitHub Actions"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Automated API Contract Testing Gateway"
                description="A gateway that validates API requests and responses against OpenAPI specs in real time during testing. Breaks CI builds on contract violations and generates consumer-driven contract tests from real traffic samples."
                techStack="Python (Schemathesis or Prism), Node.js, OpenAPI 3.0, GitHub Actions, React dashboard, PostgreSQL"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Technical Debt Quantification and Prioritisation Tool"
                description="Analyse a codebase to identify and quantify technical debt: code smells, cyclomatic complexity hotspots, outdated dependencies, duplicate logic, and missing test coverage. Generates a prioritised remediation roadmap with estimated effort."
                techStack="Python, SonarQube API, tree-sitter, PyDriller (git mining), React, PostgreSQL, D3.js"
                difficulty="Intermediate"
              />
            </section>

            <CircuitDivider />

            {/* ── Section 5 ────────────────────────────────────────────── */}
            <section id="systems-programming" className="mb-10 scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Cpu" size={18} className="text-primary" />
                Systems &amp; Platform Engineering
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Platform and systems engineering projects demonstrate deep technical depth —
                compiler internals, OS concepts, networking stacks, and runtime design. These
                are exceptional differentiators for students targeting product engineering or
                SRE/infrastructure roles.
              </p>

              <FinalYearProjectCard
                title="Custom Container Runtime (OCI-Compliant)"
                description="Implement a minimal OCI-compliant container runtime from scratch using Linux namespaces, cgroups, and overlay filesystems. Supports container image pull from a registry, layer caching, and process isolation benchmarks."
                techStack="Go, Linux syscalls (clone, unshare, pivot_root), cgroups v2, overlayfs, OCI Image Spec, runc reference"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Bytecode Interpreter for a Subset of Python"
                description="Build a stack-based virtual machine that compiles a Python subset (functions, closures, loops, classes) to custom bytecode and executes it. Includes a garbage collector using mark-and-sweep and a REPL for interactive use."
                techStack="C or Rust, custom lexer/parser (no ANTLR), mark-and-sweep GC, Python test suite for validation"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Programmable Network Packet Processor (eBPF-Based)"
                description="Write eBPF programs that run in the Linux kernel to implement custom packet filtering, load balancing, and per-connection rate limiting without modifying kernel source. Comparable in scope to a simplified Cilium feature set."
                techStack="C (eBPF), libbpf, bpftool, Linux 5.15+, Python (control plane), Grafana (metrics), iproute2"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Log-Structured Merge-Tree (LSM-Tree) Storage Engine"
                description="Implement an LSM-tree storage engine from scratch supporting get/put/delete with a write-ahead log, memtable, and sorted string table (SSTable) compaction. Benchmark read/write amplification against a B-tree engine."
                techStack="Go or C++, custom binary file format, bloom filters, LRU block cache, LevelDB as reference"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Service Mesh Sidecar Proxy with mTLS"
                description="Build a lightweight sidecar proxy that intercepts pod-to-pod traffic in Kubernetes, terminates and initiates mTLS connections, enforces traffic policies, and exposes Prometheus metrics — a simplified Envoy/Istio sidecar."
                techStack="Go, net/http, crypto/tls, Kubernetes (kubectl, admission webhook), Prometheus, x509 cert management"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Automated Database Migration Tool with Rollback Safety"
                description="A CLI tool for managing SQL schema migrations with dry-run mode, checksum verification, lock-based concurrency safety, and automated rollback on failure. Supports PostgreSQL and MySQL; integrates with GitHub Actions for CI gating."
                techStack="Go or Python, PostgreSQL, MySQL, GitHub Actions, Docker (test DB spin-up), SQLite (state tracking)"
                difficulty="Intermediate"
              />
            </section>

            <CircuitDivider />

            {/* ── Section 6 ────────────────────────────────────────────── */}
            <section id="opensource-platform" className="mb-10 scroll-mt-24">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Code2" size={18} className="text-primary" />
                Open Source &amp; Developer Tools
              </h2>
              <p className="text-muted-foreground text-sm mb-5">
                Building developer tools and open-source contributions signal initiative and
                practical engineering maturity. These projects create real value for developer
                communities and make strong GitHub portfolio pieces during placement season.
              </p>

              <FinalYearProjectCard
                title="AI-Powered Code Review Bot for GitHub Pull Requests"
                description="A GitHub App that automatically reviews pull requests for style violations, potential bugs, security anti-patterns, and performance issues using LLM analysis of diffs. Posts inline review comments and a summary card."
                techStack="Node.js (Probot), GitHub API, OpenAI API or Mistral, Redis (rate limiting), Docker, Vercel/Railway"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Developer Documentation Generator from Source Code"
                description="Automatically generate searchable, versioned documentation from code comments, type signatures, and README files. Outputs a static site with full-text search, API reference, and code examples extracted by AST analysis."
                techStack="Python, tree-sitter, Jinja2, MkDocs or Docusaurus, Typesense (search), GitHub Actions, React"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Unified CLI for Multi-Cloud Resource Management"
                description="A developer-friendly CLI that provides a consistent interface for managing resources across AWS, GCP, and Azure — listing VMs, buckets, databases, IAM roles — without switching between three separate cloud CLIs."
                techStack="Go (Cobra/Viper), AWS SDK, GCP Go SDK, Azure SDK, SQLite (local state), Bubble Tea (TUI), GitHub Actions"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Plugin Architecture Framework for Extensible Applications"
                description="Design and implement a plugin system in Go or Python that allows third parties to extend an application at defined extension points without modifying the core. Includes plugin discovery, version negotiation, sandboxed execution, and hot-reload."
                techStack="Go (hashicorp/go-plugin) or Python (pluggy), gRPC, Docker sandbox, semver, React plugin marketplace UI"
                difficulty="Advanced"
              />
              <FinalYearProjectCard
                title="Dependency Vulnerability Auditor with Fix Automation"
                description="Scan package dependency trees (npm, pip, Maven) for known CVEs and outdated packages. Automatically open pull requests with patched dependency versions, run tests, and merge if CI passes. Tracks risk score over time."
                techStack="Python or Node.js, OSV (Open Source Vulnerabilities) API, GitHub API, Snyk DB, Celery, React dashboard"
                difficulty="Intermediate"
              />
              <FinalYearProjectCard
                title="Interactive API Explorer and Mock Server Generator"
                description="A platform that ingests an OpenAPI 3.0 spec and produces a live interactive API explorer (like Swagger UI but richer) plus an instant mock server with configurable response scenarios, delays, and error injection for frontend teams."
                techStack="React, Node.js, OpenAPI 3.0 parser, Prism, TypeScript, Docker, WebSocket (live reload)"
                difficulty="Intermediate"
              />
            </section>

            {/* ── Bottom CTA — CTA #2 ──────────────────────────────────── */}
            <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6">
              <h2 className="text-lg font-bold text-foreground mb-2">
                Ready to Build Your ISE Final Year Project?
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                WeBuildPro's engineering team has helped 500+ ISE students across VTU and
                autonomous colleges deliver projects that earn distinction grades and land
                top-tier placements. We handle architecture, implementation, documentation,
                and presentation prep — you learn by building.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Icon name="FolderOpen" size={14} />
                  View All Projects
                </Link>
                <a
                  href={waGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  <Icon name="MessageCircle" size={14} />
                  WhatsApp Us
                </a>
                <a
                  href={waQuote}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors"
                >
                  <Icon name="IndianRupee" size={14} />
                  Get Free Quote
                </a>
              </div>
            </div>

            {/* ── Related Reading ──────────────────────────────────────── */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Related Reading
              </h3>
              <ul className="space-y-2">
                {[
                  { href: '/blog/mini-projects-for-ise', label: 'Mini Projects for ISE Students' },
                  { href: '/blog/final-year-project-ideas-for-cse', label: 'Final Year Projects for CSE Students' },
                  { href: '/blog/final-year-project-ideas-for-ece', label: 'Final Year Projects for ECE Students' },
                  { href: '/blog/final-year-project-ideas-for-aiml', label: 'Final Year Projects for AIML Students' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary hover:underline flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRight" size={12} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ── Sidebar ──────────────────────────────────────────────────── */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Desktop TOC */}
              <nav className="bg-card border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Sections
                </p>
                <ol className="space-y-2">
                  {TOC_ITEMS.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-xs text-muted-foreground hover:text-primary flex items-start gap-2 leading-snug transition-colors"
                      >
                        <span className="font-mono mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Sidebar CTA — CTA #3 */}
              <div className="bg-card border border-primary/30 rounded-lg p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Need Project Help?</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Expert mentorship from topic selection to viva. Trusted by 500+ students.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/pricing"
                    className="flex items-center justify-center gap-1.5 bg-primary text-primary-foreground px-3 py-2 rounded-md text-xs font-semibold hover:bg-primary/90 transition-colors w-full"
                  >
                    <Icon name="IndianRupee" size={12} />
                    View Pricing
                  </Link>
                  <a
                    href={waGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-green-600 text-white px-3 py-2 rounded-md text-xs font-semibold hover:bg-green-700 transition-colors w-full"
                  >
                    <Icon name="MessageCircle" size={12} />
                    WhatsApp Us
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
