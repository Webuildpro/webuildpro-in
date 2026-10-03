// lib/data/subcategories/cse.ts
// READY-TO-USE DATA FILE for CSE sub-category pages. Rocket only builds the template around it.
// Same shape as the ECE file. Each entry -> a page at /projects/cse/[slug].

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface SubProject {
  title: string;
  abstract: string;
  difficulty: Difficulty;
  timeline: string;
}

export interface SubCategory {
  slug: string;
  branch: "cse";
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  projects: SubProject[];
  faqs: { q: string; a: string }[];
}

export const cseSubCategories: SubCategory[] = [
  {
    slug: "machine-learning-projects-in-bangalore",
    branch: "cse",
    keyword: "Machine Learning Projects in Bangalore",
    metaTitle: "Machine Learning Projects in Bangalore",
    metaDescription: "Final year machine learning projects in Bangalore for CSE. Real ML models with source code, datasets & documentation. Online & offline delivery.",
    intro: "Looking for machine learning projects in Bangalore for your final year? WEBUILDPRO builds real, working ML projects for CSE and ISE students in Bangalore — trained models, clean code and proper datasets, not toy demos. Machine learning is the single most in-demand skill for placements, so a strong ML project doubles as a portfolio piece for interviews. Every project below comes with full source code, the dataset, a trained model, report material and a walkthrough so you can explain the algorithm, the features and the results in your viva. We deliver online pan-India and offline at our Bangalore lab, and adapt each project to your college's IEEE or non-IEEE requirement.",
    projects: [
      { title: "Crop Disease Detection Using Deep Learning", abstract: "Identifies plant diseases from leaf images using a convolutional neural network. Covers dataset preparation, CNN training and a prediction interface, with clear accuracy metrics for the report.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Driver Drowsiness Detection System", abstract: "Detects a sleepy driver from eye and head movement using computer vision and alerts them in real time. Demonstrates OpenCV, facial landmark detection and live classification.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Fake News Detection Using NLP", abstract: "Classifies news articles as real or fake using natural language processing and a trained ML model. Covers text preprocessing, feature extraction and model evaluation.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Movie / Product Recommendation System", abstract: "Suggests items to users based on preferences using collaborative or content-based filtering. A practical, resume-friendly ML project with a working recommendation interface.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Medical Diagnosis Predictor (Diabetes/Heart)", abstract: "Predicts disease risk from patient data using classification models. Demonstrates the full ML pipeline from data cleaning to prediction with accuracy reporting.", difficulty: "Intermediate", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Do ML projects include the dataset and trained model?", a: "Yes — you get the source code, the dataset, the trained model, report material and a walkthrough." },
      { q: "Can I do a machine learning project online?", a: "Yes. ML projects are ideal for online delivery — we mentor over video and hand over everything digitally." },
      { q: "Are these IEEE-based?", a: "We build both IEEE (with base paper) and non-IEEE ML projects. Tell us your department's requirement." },
    ],
  },
  {
    slug: "ai-projects-in-bangalore",
    branch: "cse",
    keyword: "AI Projects in Bangalore",
    metaTitle: "AI Projects in Bangalore for CSE",
    metaDescription: "Final year AI projects in Bangalore for CSE students. Chatbots, computer vision & intelligent apps with source code. Online & offline delivery.",
    intro: "WEBUILDPRO builds AI projects in Bangalore for CSE final year students — genuinely intelligent applications using modern AI techniques, from computer vision to natural language. Artificial intelligence is what recruiters and evaluators care about most in 2026, and a well-built AI project sets you apart in both vivas and interviews. Every AI project below is a working build delivered with source code, models, report material and a walkthrough so you understand and can defend the approach. We deliver online pan-India and offline at our Bangalore lab.",
    projects: [
      { title: "AI Chatbot with RAG for Institutional Data", abstract: "A chatbot that answers questions from your college or company documents using retrieval-augmented generation. Demonstrates embeddings, a vector store and an LLM interface.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Face Recognition Attendance System", abstract: "Marks attendance automatically from a camera feed using face detection and recognition. A popular AI project covering OpenCV, encoding and a records database.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Sign Language to Text/Speech Converter", abstract: "Translates hand signs into text or speech using computer vision and a trained model. A high-impact assistive-AI project with real social value.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "AI-Based Resume Screening Tool", abstract: "Ranks resumes against a job description using NLP and similarity scoring. Demonstrates text parsing, feature matching and a scoring interface.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "Traffic Sign & Object Recognition", abstract: "Detects traffic signs and objects from images or video for driver assistance using a trained detection model. Covers dataset, training and real-time inference.", difficulty: "Advanced", timeline: "3 weeks" },
    ],
    faqs: [
      { q: "What counts as an AI project vs an ML project?", a: "They overlap — AI projects here focus on applied intelligence like chatbots, vision and NLP apps. We help you pick the right fit." },
      { q: "Do I get the code and models?", a: "Yes, full source code, models, documentation and a walkthrough are included." },
      { q: "Can this be done remotely?", a: "Yes — AI projects are delivered online pan-India with video mentoring, or in person in Bangalore." },
    ],
  },
  {
    slug: "data-science-projects-in-bangalore",
    branch: "cse",
    keyword: "Data Science Projects in Bangalore",
    metaTitle: "Data Science Projects in Bangalore",
    metaDescription: "Final year data science projects in Bangalore for CSE. Data analysis, prediction & visualisation with code and datasets. Online & offline.",
    intro: "WEBUILDPRO builds data science projects in Bangalore for CSE final year students — real analysis on real datasets with prediction and visualisation, not surface-level demos. Data science is a top career path, and a solid project shows you can clean data, build models and communicate results. Every project below includes source code, the dataset, visualisations, report material and a walkthrough. We deliver online pan-India and offline at our Bangalore lab.",
    projects: [
      { title: "Sales Forecasting with Time Series", abstract: "Predicts future sales from historical data using time-series models. Covers data cleaning, trend analysis, forecasting and a results dashboard.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Customer Churn Prediction", abstract: "Predicts which customers are likely to leave using classification on behavioural data. Demonstrates feature engineering, modelling and evaluation.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "Sentiment Analysis of Reviews/Tweets", abstract: "Classifies text as positive or negative using NLP. Covers text preprocessing, vectorisation and a model with an interactive interface.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "Stock Price Trend Analysis", abstract: "Analyses and visualises stock trends with predictive modelling. Demonstrates data collection, analysis and charting, with clear caveats on prediction limits.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "COVID / Health Data Dashboard", abstract: "An interactive dashboard analysing and visualising public health datasets. Covers data wrangling, aggregation and visualisation.", difficulty: "Beginner", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Do you provide the dataset?", a: "Yes — every data science project comes with the dataset, code, visualisations and documentation." },
      { q: "Which tools do you use?", a: "Typically Python with pandas, scikit-learn and visualisation libraries, chosen to suit your project and college expectations." },
      { q: "Is remote delivery available?", a: "Yes, data science projects are perfect for online delivery pan-India, with in-person options in Bangalore." },
    ],
  },
  {
    slug: "blockchain-projects-in-bangalore",
    branch: "cse",
    keyword: "Blockchain Projects in Bangalore",
    metaTitle: "Blockchain Projects in Bangalore for CSE",
    metaDescription: "Final year blockchain projects in Bangalore for CSE. Secure, decentralised apps with smart contracts and source code. Online & offline delivery.",
    intro: "WEBUILDPRO builds blockchain projects in Bangalore for CSE final year students — secure, decentralised applications with real smart contracts. Blockchain projects signal you're on top of emerging technology, and they stand out in placements. Every project below is a working build delivered with source code, smart contracts, report material and a walkthrough so you can explain the consensus, the contract logic and the security model. We deliver online pan-India and offline at our Bangalore lab.",
    projects: [
      { title: "Blockchain-Based Land Registry", abstract: "Stores tamper-proof property records on a blockchain with smart contracts. Demonstrates decentralised storage, contract logic and a verification interface.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Secure Certificate Verification System", abstract: "Verifies degree or document authenticity via blockchain, preventing forgery. Covers hashing, contracts and a verification portal.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Decentralised Voting System", abstract: "A transparent, tamper-resistant e-voting application on a blockchain. Demonstrates identity handling, contracts and result integrity.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Supply Chain Tracking on Blockchain", abstract: "Traces a product from source to shelf using blockchain records. Covers contracts, event logging and a tracking dashboard.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Crowdfunding DApp", abstract: "A decentralised crowdfunding platform with smart-contract-managed funds. Demonstrates contract development and a web3 front end.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Do these use real smart contracts?", a: "Yes — every blockchain project uses working smart contracts, delivered with full source code and documentation." },
      { q: "Is blockchain too hard for final year?", a: "Not with guidance. We scope it to your timeline and walk you through the contract and consensus so you can defend it." },
      { q: "Can it be done online?", a: "Yes, blockchain projects are delivered online pan-India or in person in Bangalore." },
    ],
  },
  {
    slug: "iot-projects-in-bangalore",
    branch: "cse",
    keyword: "IoT Projects in Bangalore for CSE",
    metaTitle: "IoT Projects in Bangalore for CSE",
    metaDescription: "Final year IoT projects in Bangalore for CSE/ISE. Cloud dashboards, smart systems and connected apps with code. Online & offline delivery.",
    intro: "WEBUILDPRO builds IoT projects in Bangalore for CSE and ISE final year students — the software-and-cloud side of the Internet of Things, with dashboards, data pipelines and connected apps. IoT blends embedded data with cloud software, exactly the full-stack skill product companies want. Every project below comes with source code, cloud setup, report material and a walkthrough. We deliver online pan-India and offline at our Bangalore lab.",
    projects: [
      { title: "Smart Home Automation with App & Voice", abstract: "Full home control through an app and voice assistant with a cloud backend. Demonstrates device APIs, a dashboard and real-time control.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "IoT Energy Monitoring with Prediction", abstract: "Measures household power use and forecasts consumption with a cloud dashboard. Combines data collection, storage and predictive analytics.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Smart Parking Management System", abstract: "Detects free parking slots in real time and guides drivers via an app. Covers sensor data ingestion, a backend and a live map.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "IoT Attendance & Access System", abstract: "RFID or app-based attendance and access logged to the cloud with a management dashboard. Demonstrates device-to-cloud data flow.", difficulty: "Beginner", timeline: "2 weeks" },
      { title: "Weather Monitoring Cloud Dashboard", abstract: "Collects environmental sensor data and displays live analytics on a web dashboard. Covers data pipelines and visualisation.", difficulty: "Beginner", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Is this hardware or software focused?", a: "For CSE we focus on the cloud/software side, though we can include the hardware unit too. Tell us your preference." },
      { q: "Do I get cloud setup instructions?", a: "Yes — code, cloud configuration, documentation and a walkthrough are all included." },
      { q: "Online or offline?", a: "Both — online pan-India or in person at our Bangalore lab." },
    ],
  },
  {
    slug: "python-projects-in-bangalore",
    branch: "cse",
    keyword: "Python Projects in Bangalore",
    metaTitle: "Python Projects in Bangalore for CSE",
    metaDescription: "Final year Python projects in Bangalore for CSE. Automation, web apps and data tools with clean source code. Online & offline delivery.",
    intro: "WEBUILDPRO builds Python projects in Bangalore for CSE final year students — from automation tools to web apps and data utilities, all with clean, readable code you can explain. Python is the most versatile language for final year work and interviews. Every project below comes with source code, report material and a walkthrough. We deliver online pan-India and offline at our Bangalore lab.",
    projects: [
      { title: "Web Scraping & Data Analysis Tool", abstract: "Collects data from websites and analyses it into reports and charts. Demonstrates scraping, cleaning and visualisation.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "Automated Email/Task Bot", abstract: "Automates repetitive tasks like scheduled emails or file processing. A practical Python automation project.", difficulty: "Beginner", timeline: "1–2 weeks" },
      { title: "Django/Flask Web Application", abstract: "A full web app with database, login and CRUD using a Python framework. Demonstrates full-stack fundamentals.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Expense Tracker with Analytics", abstract: "Logs income and expenses and shows totals and charts. A clean, demonstrable Python project.", difficulty: "Beginner", timeline: "1–2 weeks" },
      { title: "Chatbot with Python", abstract: "A rule-based or ML-backed chatbot for a website or FAQ. Demonstrates conversation logic and integration.", difficulty: "Intermediate", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Is Python good for final year?", a: "Yes — it's versatile, industry-relevant and great for demos. We help you pick a project matching your level." },
      { q: "Do you explain the code?", a: "Yes, every project includes a walkthrough so you can defend every part of it." },
      { q: "Remote available?", a: "Yes — online pan-India or in person in Bangalore." },
    ],
  },
  {
    slug: "image-processing-projects-in-bangalore",
    branch: "cse",
    keyword: "Image Processing Projects in Bangalore",
    metaTitle: "Image Processing Projects in Bangalore",
    metaDescription: "Final year image processing projects in Bangalore for CSE. OpenCV & computer vision builds with source code. Online & offline delivery.",
    intro: "WEBUILDPRO builds image processing projects in Bangalore for CSE final year students — computer vision applications using OpenCV and modern techniques. Image processing projects are visual, impressive and interview-relevant. Every project below is delivered with source code, sample data, report material and a walkthrough. We deliver online pan-India and offline at our Bangalore lab.",
    projects: [
      { title: "Number Plate Recognition System", abstract: "Detects and reads vehicle number plates from images or video. Demonstrates detection, segmentation and OCR.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Face Mask Detection", abstract: "Detects whether people are wearing masks in a live feed using computer vision. Covers detection and classification.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "Object Detection & Counting", abstract: "Detects and counts objects in images or video. Demonstrates detection models and counting logic.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Image-Based Attendance", abstract: "Recognises faces to mark attendance from a photo or camera. Covers recognition and record keeping.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Handwritten Digit/Text Recognition", abstract: "Recognises handwritten digits or characters using image processing and ML. A classic computer-vision project.", difficulty: "Intermediate", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Which libraries do you use?", a: "Mainly OpenCV with Python, plus ML frameworks where needed, chosen to suit your project." },
      { q: "Do I get sample images/data?", a: "Yes — code, sample data, documentation and a walkthrough are included." },
      { q: "Online or offline?", a: "Both — online pan-India or in person in Bangalore." },
    ],
  },
  {
    slug: "cybersecurity-projects-in-bangalore",
    branch: "cse",
    keyword: "Cyber Security Projects in Bangalore",
    metaTitle: "Cyber Security Projects in Bangalore",
    metaDescription: "Final year cyber security projects in Bangalore for CSE. Intrusion detection, encryption & security tools with code. Online & offline.",
    intro: "WEBUILDPRO builds cyber security projects in Bangalore for CSE final year students — practical security tools and detection systems that are highly relevant to today's job market. Every project below is a working build delivered with source code, report material and a walkthrough so you can explain the threat model and the defence. We deliver online pan-India and offline at our Bangalore lab.",
    projects: [
      { title: "Network Intrusion Detection with ML", abstract: "Flags cyberattacks in network traffic using a trained ML model. Demonstrates feature extraction, classification and alerting.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Phishing Website Detection", abstract: "Detects fraudulent websites using ML on URL and page features. Covers dataset, modelling and a checking interface.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "File Encryption/Decryption Tool", abstract: "Secures files with strong encryption and a simple interface. Demonstrates cryptography fundamentals.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "Steganography Tool", abstract: "Hides secret data inside images and extracts it. Demonstrates data hiding and retrieval techniques.", difficulty: "Intermediate", timeline: "2 weeks" },
      { title: "Two-Factor Authentication System", abstract: "Adds OTP-based second-factor login to an app. Demonstrates secure authentication flows.", difficulty: "Intermediate", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Are these ethical/legal to build?", a: "Yes — all projects are defensive and educational, built for learning and demonstration." },
      { q: "Do I get documentation?", a: "Yes — source code, report material and a walkthrough are included." },
      { q: "Remote available?", a: "Yes — online pan-India or in person in Bangalore." },
    ],
  },
];
