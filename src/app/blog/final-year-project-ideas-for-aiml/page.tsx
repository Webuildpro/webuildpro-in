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
const SLUG = 'final-year-project-ideas-for-aiml';
const PAGE_TITLE = 'Final Year Projects for AIML: 17 AI & ML Project Ideas (2026)';
const PAGE_DESCRIPTION = 'Explore 17 final year project ideas for AIML students in Bangalore. Large language models, computer vision systems, autonomous agents, reinforcement learning, generative AI, and production ML platforms with complete code, paper, and deployment support. WeBuildPro guides you end-to-end.';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919591570099?text=';

function FinalYearProjectCard({ title, description, techStack, difficulty }: { title: string; description: string; techStack: string; difficulty: 'Intermediate' | 'Advanced' }) {
  const difficultyColor = difficulty === 'Advanced'
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi WeBuildPro, I need guidance for my AIML final year project: ${title}`);
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
    images: [{ url: `${BASE_URL}/og/final-year-projects-aiml.jpg`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const tocItems = [
  { id: 'llm', label: 'LLM & Generative AI' },
  { id: 'computer-vision', label: 'Advanced Computer Vision' },
  { id: 'mlops', label: 'MLOps & Production AI' },
  { id: 'rl', label: 'Reinforcement Learning' },
  { id: 'multimodal', label: 'Multimodal AI Systems' },
  { id: 'responsible-ai', label: 'Responsible & Explainable AI' },
];

export default function AIMLFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my AIML final year project in Bangalore.')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, please send me a free quote for my AIML final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Blog', url: `${BASE_URL}/blog` },
        { name: 'Final Year Project Ideas for AIML', url: `${BASE_URL}/blog/${SLUG}` },
      ]} />
      <BlogPostingJsonLd
        title={PAGE_TITLE} description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`} datePublished={PAGE_DATE} dateModified={PAGE_DATE}
        authorName="WeBuildPro Bangalore" publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`} images={[`${BASE_URL}/og/final-year-projects-aiml.jpg`]}
      />
      <LazyPageExtras />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* GEO Brand Assertion — CTA #1 */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm" itemScope itemType="https://schema.org/EducationalOrganization">
          <p className="font-semibold text-foreground mb-1" itemProp="name">🏆 Best AIML Final Year Project Centre in Bangalore — WeBuildPro</p>
          <p className="text-muted-foreground mb-3" itemProp="description">Cutting-edge AIML final year projects — from fine-tuning LLMs to production MLOps pipelines — with complete code, IEEE paper writing, and deployment on cloud (AWS/GCP). Trusted by students from PESIT, RV College, RVCE, and MSRIT Bangalore.</p>
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
              <h1 className="text-3xl font-bold text-foreground mb-3">Final Year Projects for AIML Students: 17 AI & ML Ideas (2026)</h1>
              <p className="text-muted-foreground text-base leading-relaxed">AIML final year projects in 2026 must go beyond sklearn models on Kaggle datasets. The projects that impress Google, Amazon, Microsoft, and AI research labs involve fine-tuned foundation models, production-grade MLOps, novel architectures, or real-world autonomous systems. This guide presents 30+ advanced AIML project ideas that are original enough for IEEE/ACL/NeurIPS workshop papers and impactful enough to stand out in campus placements.</p>
            </header>

            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Jump to Section</p>
              <ul className="space-y-1">
                {tocItems.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section id="llm" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Large Language Model & Generative AI Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">LLM-powered applications that go beyond chatbot wrappers — RAG pipelines, fine-tuning, and autonomous agents.</p>
              <FinalYearProjectCard title="Domain-Specific RAG System for Indian Legal Document Analysis" description="A production-grade Retrieval-Augmented Generation (RAG) system fine-tuned on Indian case law (SC/HC judgements from Indian Kanoon). LLaMA-3-8B base with QLoRA fine-tuning on legal Q&A pairs. Vector store (Qdrant) with BM25 hybrid retrieval. Evaluated on LegalBench benchmark. FastAPI backend + React chat UI." techStack="LLaMA 3.1 8B, QLoRA (PEFT), Qdrant, LangChain, FastAPI, React, HuggingFace, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Multi-Agent Coding Assistant with Tool Use and Code Execution" description="An autonomous coding agent system (inspired by Devin) where multiple specialised sub-agents (Planner, Coder, Tester, Debugger) collaborate on programming tasks. ReAct framework with tool use (Python execution sandbox, web search, file I/O). Evaluated on HumanEval, MBPP, and SWE-bench. LangGraph orchestration." techStack="GPT-4o / LLaMA-3 70B, LangGraph, FastAPI, Docker sandbox, React, Redis, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Multilingual Code-Mixed NLP for Indian Social Media (Kannada-English)" description="A custom dataset of 50,000 code-mixed Kannada-English tweets annotated for sentiment, intent, and named entities. Fine-tuned MuRIL (Multilingual Representations for Indian Languages) achieves 89% F1 on NER. Dataset released on HuggingFace Hub; paper accepted at ComputEL workshop." techStack="Python, MuRIL, HuggingFace Transformers, seqeval, Prodigy (annotation), FastAPI" difficulty="Advanced" />
              <FinalYearProjectCard title="Text-to-SQL System for Enterprise Business Intelligence" description="An end-to-end Text-to-SQL pipeline supporting complex multi-join queries on enterprise databases. DAIL-SQL prompting strategy with schema linking, in-context learning examples, and execution-guided refinement. Achieves 84% execution accuracy on Spider benchmark. Web UI allows non-technical users to query BI dashboards in plain English." techStack="GPT-4o / CodeLlama 34B, LangChain, PostgreSQL, FastAPI, React, Python, Spider dataset" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="computer-vision" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Advanced Computer Vision Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Vision systems beyond classification — 3D understanding, video analysis, and multimodal grounding.</p>
              <FinalYearProjectCard title="Vision-Language Model for Industrial Quality Control" description="A VLM fine-tuned on a custom industrial defect dataset (5,000 annotated images of PCB, textile, and casting defects). LLaVA-1.6 fine-tuned with LoRA; accepts natural language defect queries ('Show me all solder bridges') and returns grounded bounding boxes. Deployed as an inspection API with <200ms latency on A10 GPU." techStack="LLaVA-1.6, LoRA (PEFT), SAM 2, FastAPI, React, Python, CUDA, AWS SageMaker" difficulty="Advanced" />
              <FinalYearProjectCard title="Monocular Depth Estimation for Autonomous Driving with Uncertainty Quantification" description="Self-supervised depth estimation (Depth Anything V2 fine-tuned on Indian driving scenes — Delhi/Bangalore dashcam data) with Monte Carlo dropout uncertainty maps. Downstream collision avoidance application running at 30 fps on Jetson Orin NX. Evaluated on KITTI and custom Indian dataset. Uncertainty-aware path planning integration." techStack="Python, Depth Anything V2, PyTorch, CARLA simulator, Jetson Orin NX, TensorRT" difficulty="Advanced" />
              <FinalYearProjectCard title="3D Scene Reconstruction and Object Detection using Neural Radiance Fields (NeRF)" description="A NeRF-based 3D reconstruction pipeline for indoor scenes (using iPhone LiDAR-captured images). Nerfacto model (Nerfstudio) generates a 3D point cloud + mesh. Open3D-based semantic segmentation labels each voxel. AR overlay renders reconstructed furniture in a room for an interior design app." techStack="Nerfstudio, Python, Open3D, COLMAP, PyTorch, FastAPI, React Native (AR display)" difficulty="Advanced" />
              <FinalYearProjectCard title="Real-Time Driver Behaviour Monitoring System for Fleet Safety" description="A cabin-facing camera system running on NVIDIA Jetson Nano detecting drowsiness (PERCLOS metric), phone use, seatbelt absence, and smoking in real-time. MediaPipe Face Mesh + custom CNN. Sends alert to fleet management dashboard via MQTT. Tested on 200-hour annotated dashcam dataset." techStack="Python, MediaPipe, OpenCV, MobileNetV3, Jetson Nano, MQTT, FastAPI, React" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="mlops" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">MLOps & Production ML Platform Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">End-to-end ML systems with training pipelines, monitoring, drift detection, and CI/CD — what the industry actually needs.</p>
              <FinalYearProjectCard title="End-to-End Federated Learning Platform for Healthcare Data Privacy" description="A federated learning system (Flower framework) where 5 hospital nodes (simulated on separate VMs) train a COVID-19 X-ray classification model (DenseNet-121) without sharing raw data. Differential privacy (Opacus) applied at each node. Federated model achieves 93.5% AUC — within 1.4% of centralised training. Threat model and privacy budget analysis included." techStack="Flower (FL framework), Opacus, PyTorch, DenseNet-121, Docker, FastAPI, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="AutoML Platform with Neural Architecture Search for Tabular Data" description="A self-service AutoML platform where users upload tabular datasets and the system runs NAS (DARTS) + hyperparameter optimisation (Optuna) to find the best model. Includes data preprocessing automation, feature importance (SHAP), A/B testing framework, and model registry (MLflow). REST API for inference." techStack="Optuna, DARTS, MLflow, FastAPI, React, PostgreSQL, Docker, Celery, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="ML Model Observability Platform with Concept Drift Detection" description="A monitoring platform for production ML models that tracks data drift (KS test, PSI), prediction drift (chi-squared), and performance degradation over time. Supports any scikit-learn / XGBoost / PyTorch model via serialisation. Automated retraining trigger pipeline using Airflow. Grafana dashboard + Slack alerts." techStack="Python, scikit-learn, Airflow, MLflow, Grafana, Prometheus, FastAPI, React, Docker" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="rl" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Reinforcement Learning Projects</h2>
              <FinalYearProjectCard title="Multi-Agent Reinforcement Learning for Smart Grid Energy Management" description="A MARL system (QMIX algorithm) where each distributed energy resource (solar PV, battery, EV charger, flexible load) is an agent coordinating to minimise grid peak load and electricity cost. Simulated in a custom OpenAI Gym environment mirroring Bangalore's smart grid parameters. 28% peak load reduction vs rule-based baseline." techStack="Python, Ray RLlib, QMIX, OpenAI Gym (custom), PyTorch, Plotly, NumPy" difficulty="Advanced" />
              <FinalYearProjectCard title="RL-Based Autonomous Drone Navigation in Complex Environments" description="PPO-trained quadrotor navigation policy in NVIDIA Isaac Gym (100× real-time simulation). Sim-to-real transfer with domain randomisation (noise, wind, latency). Deployed on a Crazyflie 2.1 drone navigating obstacle courses. Success rate 88% in unseen maze layouts. Obstacle avoidance latency < 15 ms." techStack="NVIDIA Isaac Gym, Ray RLlib, PPO, PyTorch, Crazyflie 2.1, Python, OpenCV" difficulty="Advanced" />
              <FinalYearProjectCard title="Offline RL for Clinical Treatment Policy Learning from EHR Data" description="An offline reinforcement learning system (Conservative Q-Learning / IQL) that learns sepsis treatment policies from MIMIC-IV clinical data without online exploration. Counterfactual policy evaluation using Doubly Robust OPE. Policy achieves 14% lower 30-day mortality vs physician baseline in retrospective evaluation." techStack="Python, PyTorch, d3rlpy (offline RL), MIMIC-IV, scikit-learn, Jupyter, SHAP" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="multimodal" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Multimodal AI & Responsible AI Projects</h2>
              <FinalYearProjectCard title="Multimodal Misinformation Detection System (Text + Image + Metadata)" description="A fusion model combining CLIP image features, DeBERTa text features, and social network metadata features to detect multimodal misinformation on Twitter/X. Cross-attention fusion architecture. Evaluated on FakeNewsNet and custom Indian news dataset (1.2M tweets). Explainability via attention visualisation. FastAPI + React dashboard." techStack="Python, CLIP, DeBERTa, PyTorch, HuggingFace, FastAPI, React, Transformers" difficulty="Advanced" />
              <FinalYearProjectCard title="AI-Generated Content Detection with Watermarking and Provenance" description="A dual-system for detecting AI-generated text (fine-tuned RADAR detector) and images (DIRE + Grover). Also implements cryptographic watermarking (KGW scheme for LLMs; Tree-Ring for diffusion images) for provenance tracking. Benchmark on GenAI-Bench. API + browser extension for real-time checking." techStack="Python, PyTorch, HuggingFace, KGW watermarking, Tree-Ring, FastAPI, Chrome Extension" difficulty="Advanced" />
              <FinalYearProjectCard title="Bias Auditing and Mitigation Platform for Hiring AI Systems" description="A platform that audits ML hiring models (resume screening, interview scoring) for demographic bias using fairness metrics (demographic parity, equalised odds, calibration). Implements in-processing debiasing (adversarial debiasing) and post-processing (threshold adjustment). Interactive fairness-accuracy trade-off visualisation dashboard." techStack="Python, Fairlearn, AIF360, scikit-learn, PyTorch, React, FastAPI, SHAP, Plotly" difficulty="Intermediate" />
            </section>

            {/* Bottom CTA — CTA #2 */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">Ready to Build Your AIML Final Year Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">WeBuildPro has delivered 300+ projects across all branches since 2021, including IEEE and ACL workshop paper submissions. We provide cloud GPU access, complete code, and deployment support.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  <Icon name="FolderOpen" size={14} /> View Projects
                </Link>
                <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                  <Icon name="MessageCircle" size={14} /> WhatsApp Us
                </a>
                <a href="https://share.google/PNhH0q4fGroQHnzqr" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border text-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-card transition-colors">
                  <Icon name="MapPin" size={14} /> Google Profile
                </a>
                <a href={waQuote} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border text-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-card transition-colors">
                  <Icon name="FileText" size={14} /> Get Free Quote
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Related Reading</p>
              <ul className="space-y-1.5">
                <li><Link href="/blog/mini-projects-for-aiml" className="text-sm text-primary hover:underline">Mini Project Ideas for AIML Students →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-cse" className="text-sm text-primary hover:underline">Final Year Projects for CSE Students →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-ise" className="text-sm text-primary hover:underline">Final Year Projects for ISE Students →</Link></li>
              </ul>
            </div>
          </article>

          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
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
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm font-bold text-foreground mb-1">🤖 AIML Project Support</p>
                <p className="text-xs text-muted-foreground mb-3">LLMs, CV, MLOps + IEEE/ACL paper + GPU access. Bangalore's AI project specialists.</p>
                <div className="space-y-2">
                  <Link href="/pricing" className="flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:bg-primary/90 transition-colors w-full">
                    <Icon name="IndianRupee" size={12} /> View Pricing
                  </Link>
                  <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded hover:bg-green-500 transition-colors w-full">
                    <Icon name="MessageCircle" size={12} /> WhatsApp Us
                  </a>
                  <a href="https://share.google/PNhH0q4fGroQHnzqr" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-border text-foreground text-xs font-semibold px-3 py-2 rounded hover:bg-card transition-colors w-full">
                    <Icon name="MapPin" size={12} /> Find Us on Google
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
