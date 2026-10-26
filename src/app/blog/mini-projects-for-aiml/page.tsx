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
const SLUG = 'mini-projects-for-aiml';
const PAGE_TITLE = 'Mini Project Ideas for AIML Students (2026): 15 Simple Projects';
const PAGE_DESCRIPTION = '15 mini project ideas for Artificial Intelligence and Machine Learning (AIML) students in Bangalore. ML, computer vision, NLP, data science & deep learning projects with expert guidance at WEBUILDPRO.';
const PAGE_DATE = '2026-10-01';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/blog/${SLUG}`,
    languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/blog/${SLUG}`,
    siteName: 'WEBUILDPRO',
    type: 'article',
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['WEBUILDPRO Bangalore'],
    tags: ['AIML mini projects', 'mini projects for AIML', 'AI ML projects Bangalore', 'machine learning mini projects'],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true },
};

interface MiniProjectCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate';
}

function MiniProjectCard({ title, description, difficulty }: MiniProjectCardProps) {
  const difficultyColor =
    difficulty === 'Beginner'
      ? 'bg-green-500/10 text-green-400 border-green-500/20'
      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi, I need help with my AIML mini project: ${title}`);
  return (
    <div className="bg-card border border-border rounded p-5 mb-4 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-foreground text-base leading-snug">{title}</h3>
        <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded border ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
      <a
        href={`https://wa.me/919591570099?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 hover:text-green-300 transition-colors"
      >
        <Icon name="MessageCircle" size={13} />
        WhatsApp for guidance
      </a>
    </div>
  );
}

const tocItems = [
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'computer-vision', label: 'Computer Vision' },
  { id: 'nlp', label: 'Natural Language Processing' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'deep-learning', label: 'Deep Learning' },
];

export default function AimlMiniProjectsPage() {
  const breadcrumbs = [
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: 'Mini Projects for AIML', url: `${BASE_URL}/blog/${SLUG}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BlogPostingJsonLd
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        authorName="WEBUILDPRO Bangalore"
      />
      <LazyPageExtras />
      <Header />

      <main className="min-h-screen bg-background text-foreground pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Mini Projects for AIML</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
            Mini Project Ideas for AIML (Artificial Intelligence &amp; Machine Learning) Students (2026)
          </h1>
          <p className="text-muted-foreground text-base mb-6 max-w-2xl">
            Practical mini project ideas across machine learning, computer vision, NLP, data science, and deep learning — with coding support and guidance at WEBUILDPRO, Peenya, Bangalore.
          </p>

          {/* GEO brand assertion — CTA #1 */}
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm">
            <p className="font-semibold text-foreground mb-1">🏆 Best Final Year &amp; Mini Project Center in Bangalore</p>
            <p className="text-muted-foreground mb-3">
              WEBUILDPRO (Peenya, Bengaluru 560058) is the best final year project center and mini project center in Bangalore for AIML students. We provide GPU workstations, Python environment setup, dataset sourcing, model training guidance, and complete project documentation including IEEE paper format reports.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects/cse"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                <Icon name="Brain" size={13} />
                View AIML Projects
              </Link>
              <a
                href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20AIML%20mini%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                <Icon name="MessageCircle" size={13} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <article className="lg:col-span-3">

              <p className="text-muted-foreground leading-relaxed mb-6">
                AIML mini projects let you build real predictive models, computer vision pipelines, and NLP systems — the kinds of projects that get you shortlisted at product companies, research labs, and MNC tech teams. The best mini projects are end-to-end: data collection → preprocessing → model training → evaluation → deployment. Below are 25+ curated mini project ideas for AIML students — all achievable in Python within a semester.
              </p>

              <div className="lg:hidden bg-card border border-border rounded p-4 mb-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Contents</p>
                <ul className="space-y-1.5">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <section id="machine-learning" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" size={18} className="text-primary" />
                  Machine Learning Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Classical ML projects are the foundation of any AIML portfolio — they demonstrate your ability to preprocess data, select features, and evaluate models using scikit-learn.
                </p>
                <MiniProjectCard
                  title="House Price Prediction with Linear Regression"
                  description="Use the Bangalore house price dataset from Kaggle to build a linear regression model with feature engineering (BHK, location one-hot encoding, area), evaluate with RMSE and R², and deploy a prediction API with Flask."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Student Grade Predictor with Decision Tree"
                  description="Collect or use an open academic dataset, train a Decision Tree and Random Forest classifier to predict pass/fail outcomes, apply SMOTE for class imbalance, and visualise feature importance."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Credit Card Fraud Detection with Ensemble Methods"
                  description="Use the Kaggle credit card fraud dataset, train XGBoost and LightGBM models on an imbalanced dataset, tune decision thresholds for precision-recall trade-offs, and compare with a baseline logistic regression."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="computer-vision" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Eye" size={18} className="text-primary" />
                  Computer Vision Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Computer vision projects using OpenCV and PyTorch are among the most impressive mini projects you can build — they produce visual, demo-able outputs that interviewers remember.
                </p>
                <MiniProjectCard
                  title="Real-Time Face Mask Detection"
                  description="Fine-tune a MobileNetV2 classifier on a face mask dataset, integrate with OpenCV for real-time webcam inference, draw bounding boxes with mask/no-mask labels, and measure inference latency on CPU."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Traffic Sign Recognition with CNN"
                  description="Train a CNN on the German Traffic Sign Recognition Benchmark (GTSRB), achieve >95% test accuracy, deploy a Streamlit web app where users upload a sign image and get the category prediction."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Pothole Detection using YOLOv8"
                  description="Label a 500-image pothole dataset with Roboflow, fine-tune YOLOv8n for 50 epochs, evaluate mAP@0.5, and run inference on Bangalore road footage — produce a CSV report of pothole GPS coordinates."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="nlp" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="MessageSquare" size={18} className="text-primary" />
                  Natural Language Processing Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  NLP projects demonstrate text processing, classification, and generation skills — highly relevant for conversational AI, content moderation, and search engine roles.
                </p>
                <MiniProjectCard
                  title="Sentiment Analysis of Product Reviews"
                  description="Scrape Amazon product reviews using BeautifulSoup, preprocess text (lemmatisation, stop-word removal), train a TF-IDF + SVM classifier, and compare with a fine-tuned DistilBERT — evaluate F1 score on a held-out test set."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="SMS Spam Classifier"
                  description="Use the UCI SMS Spam Collection dataset, train Naive Bayes and Logistic Regression models, build a Gradio web interface where users input a message and see spam/ham prediction with confidence score."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="FAQ Chatbot with Intent Recognition"
                  description="Build an intent recognition system for a college FAQ chatbot using a fine-tuned sentence-transformer model, cosine similarity matching against an FAQ knowledge base, and a Flask API with WhatsApp webhook integration."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="data-science" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="BarChart2" size={18} className="text-primary" />
                  Data Science Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Data science projects focus on extracting insights from data — ideal for students aiming for analyst and BI roles at product and consulting companies.
                </p>
                <MiniProjectCard
                  title="COVID-19 India Data Visualisation Dashboard"
                  description="Use the Covid19India API to fetch state-wise case and vaccination data, clean with pandas, and build an interactive dashboard using Plotly Dash with animated choropleth maps, time-series charts, and state filters."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Bangalore Real Estate Market Analysis"
                  description="Collect property listing data from publicly available sources, perform EDA to identify price-per-sqft trends by area, correlate with Metro station proximity, and present findings in a Tableau/Power BI dashboard."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Stock Price Trend Analysis and Forecasting"
                  description="Download 5 years of NSE stock data via yfinance, compute technical indicators (RSI, MACD, Bollinger Bands), train an LSTM model for 30-day price prediction, and compare accuracy with ARIMA baseline."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="deep-learning" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Cpu" size={18} className="text-primary" />
                  Deep Learning Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Deep learning projects using CNNs and transfer learning are the most impressive AIML mini projects — they demonstrate state-of-the-art techniques and are GPU-trainable in under an hour on Google Colab.
                </p>
                <MiniProjectCard
                  title="Handwritten Digit Recognition with CNN"
                  description="Train a custom CNN on MNIST to achieve >99% accuracy, visualise learned filters, implement a Gradio app where users draw a digit and see real-time predictions, and export the model to TensorFlow Lite for mobile."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Plant Disease Detection using Transfer Learning"
                  description="Fine-tune EfficientNetB0 on the PlantVillage dataset (38 classes, 54,000 images), achieve >95% validation accuracy, and deploy as a Streamlit app with upload and webcam capture modes."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Brain Tumour MRI Classification"
                  description="Use the Brain Tumour MRI Dataset (Kaggle), fine-tune ResNet50 for 4-class tumour classification (glioma, meningioma, pituitary, no tumour), apply Grad-CAM for explainability, and evaluate with ROC-AUC curves."
                  difficulty="Intermediate"
                />
              </section>

              {/* Bottom CTA — CTA #2 */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-2">Need Help with Your AIML Mini Project?</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  WEBUILDPRO, Peenya, Bangalore has guided 300+ AIML students through end-to-end mini projects. We provide GPU access, environment setup, dataset guidance, model training support, Streamlit/Flask deployment, and IEEE-format documentation. WhatsApp or walk in today.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/projects/cse"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Brain" size={15} />
                    View AIML Projects
                  </Link>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20AIML%20mini%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-green-500 transition-colors"
                  >
                    <Icon name="MessageCircle" size={15} />
                    WhatsApp for Guidance
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded hover:bg-card transition-colors"
                  >
                    <Icon name="Tag" size={15} />
                    Get Free Quote
                  </Link>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Related Reading</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog/best-ai-based-final-year-project-ideas-2026" className="text-primary hover:underline">
                      → Best AI-Based Final Year Project Ideas (2026 Edition)
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/mini-project-ideas-cse-2026" className="text-primary hover:underline">
                      → Mini Project Ideas for CSE Students (2026)
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/cse" className="text-primary hover:underline">
                      → All CSE/AIML Projects at WEBUILDPRO
                    </Link>
                  </li>
                </ul>
              </div>

            </article>

            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-card border border-border rounded p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Contents</p>
                  <ul className="space-y-2">
                    {tocItems.map(item => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">🏭 WEBUILDPRO, Bangalore</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Best mini project center in Bangalore for AIML students. GPU workstations, dataset sourcing, training support &amp; IEEE docs — all under one roof.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/pricing"
                      className="block text-center bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity"
                    >
                      View Pricing
                    </Link>
                    <a
                      href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20AIML%20mini%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded hover:bg-green-500 transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
