export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Project {
  id: string;
  title: string;
  overview: string;
  technologies: string[];
  deliverables: string[];
  difficulty: Difficulty;
  timeline: string;
  isIEEE?: boolean;
}

export interface BranchData {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  domains: string[];
  heroImage: string;
  faq: {q: string;a: string;}[];
  projects: Project[];
}

const DELIVERABLES_ACADEMIC = [
'Working hardware/software demo',
'Full source code',
'Circuit diagrams & schematics',
'Bill of Materials (BOM)',
'Project report material',
'PPT support',
'Viva walkthrough session'];


export const branchData: Record<string, BranchData> = {
  cse: {
    slug: 'cse',
    name: 'CSE / ISE / AI-ML / BCA / MCA',
    fullName: 'Computer Science, ISE, AI & Machine Learning, BCA & MCA',
    tagline: 'AI systems and software that run on real data — not demo datasets.',
    description: 'From deep learning pipelines to blockchain systems, we build CSE final-year projects that actually execute — with proper datasets, trained models, and documented architecture.',
    domains: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Blockchain', 'IoT Integration', 'Cloud & Edge AI', 'Network Security', 'Data Engineering'],
    heroImage: "/images/161efa977-1773272377613.webp",
    faq: [
    { q: 'Do you support IEEE paper-based projects?', a: 'Yes. We implement both IEEE and non-IEEE titles. If you have a specific paper, bring the DOI and we will scope the implementation against your timeline.' },
    { q: 'Can you build a project that uses a GPU for training?', a: 'Yes. Training is done on our hardware in the lab. You receive the trained model weights, inference code, and performance benchmarks as part of the delivery.' },
    { q: 'What if I want a web or mobile frontend added?', a: 'We scope the full stack — backend ML pipeline plus frontend interface. Mention it in the requirement and it will be included in the quote.' }],

    projects: [
    {
      id: 'cse-01',
      title: 'Real-Time Face Recognition Attendance System',
      overview: 'A computer vision system that identifies registered individuals from a live camera feed and marks attendance automatically in a database, eliminating manual roll-calls. Uses MTCNN for face detection and FaceNet embeddings for identification, achieving sub-200ms recognition latency on standard hardware.',
      technologies: ['Python', 'OpenCV', 'MTCNN', 'FaceNet', 'SQLite', 'Flask', 'Raspberry Pi / PC'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks',
      isIEEE: true
    },
    {
      id: 'cse-02',
      title: 'Deep Learning Crop Disease Detection',
      overview: 'A CNN-based image classification system trained on PlantVillage dataset to identify 38 crop disease categories from leaf photographs captured via a mobile camera. The system runs inference on-device using TensorFlow Lite, enabling offline diagnosis in low-connectivity agricultural settings.',
      technologies: ['Python', 'TensorFlow / Keras', 'MobileNetV2', 'TFLite', 'React Native', 'PlantVillage Dataset'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks',
      isIEEE: true
    },
    {
      id: 'cse-03',
      title: 'AI-Based Fake News Detection System',
      overview: 'An NLP pipeline that classifies news articles as real or fabricated using a fine-tuned BERT model trained on the LIAR and FakeNewsNet datasets. A browser extension and web dashboard allow users to paste article text or URLs for real-time credibility scoring with explainability outputs.',
      technologies: ['Python', 'HuggingFace Transformers', 'BERT', 'FastAPI', 'React', 'LIAR Dataset'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '4 weeks',
      isIEEE: true
    },
    {
      id: 'cse-04',
      title: 'Blockchain-Based Land Registry System',
      overview: 'A decentralised land ownership and transfer system built on Ethereum, where property records are stored as NFTs and ownership transfers are executed via smart contracts — removing the need for centralised intermediaries and reducing fraud risk. Includes a React frontend connected to MetaMask.',
      technologies: ['Solidity', 'Ethereum', 'Hardhat', 'IPFS', 'React', 'MetaMask', 'Web3.js'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '4–5 weeks',
      isIEEE: false
    },
    {
      id: 'cse-05',
      title: 'NLP-Powered Resume Screening System',
      overview: 'An automated recruitment pipeline that parses resumes in PDF/DOCX format, extracts structured entities (skills, experience, education) using spaCy NER, and ranks candidates against a job description using TF-IDF and semantic similarity scoring. Reduces initial screening time by over 80% in test deployments.',
      technologies: ['Python', 'spaCy', 'scikit-learn', 'pdfminer', 'Flask', 'PostgreSQL'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3 weeks',
      isIEEE: false
    },
    {
      id: 'cse-06',
      title: 'Driver Drowsiness Detection with Computer Vision',
      overview: 'A real-time alert system that monitors a driver\'s eye aspect ratio (EAR) and mouth aspect ratio (MAR) using dlib facial landmarks to detect microsleep and yawning events. An audio alarm triggers when drowsiness thresholds are exceeded for more than 2 consecutive seconds, with an optional SMS alert via Twilio.',
      technologies: ['Python', 'OpenCV', 'dlib', 'imutils', 'Raspberry Pi Camera', 'Pygame'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks',
      isIEEE: true
    },
    {
      id: 'cse-07',
      title: 'Federated Learning Healthcare Model',
      overview: 'A privacy-preserving machine learning framework where multiple hospital nodes train a shared diagnostic model on local patient data without centralising records. Uses PySyft for federated aggregation and demonstrates differential privacy guarantees on a chest X-ray pneumonia classification task.',
      technologies: ['Python', 'PySyft', 'PyTorch', 'TensorFlow Federated', 'Flask', 'NIH Chest X-Ray Dataset'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '5–6 weeks',
      isIEEE: true
    },
    {
      id: 'cse-08',
      title: 'Smart Traffic Prediction with LSTM',
      overview: 'A time-series forecasting system that predicts urban traffic density at intersections 30 minutes ahead using LSTM networks trained on historical sensor data. The model integrates with a simulated traffic light controller to demonstrate adaptive signal timing, reducing average wait times by 22% in simulation.',
      technologies: ['Python', 'Keras LSTM', 'NumPy', 'Pandas', 'SUMO Simulator', 'Matplotlib'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '4 weeks',
      isIEEE: true
    },
    {
      id: 'cse-09',
      title: 'RAG Chatbot for Institutional Data',
      overview: 'A retrieval-augmented generation chatbot that ingests institutional documents (syllabi, regulations, timetables) into a vector database and answers student queries with cited source passages. Built on LangChain with a local LLM backend, ensuring no student data is sent to external APIs.',
      technologies: ['Python', 'LangChain', 'ChromaDB', 'Ollama / Llama3', 'FastAPI', 'React'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '4–5 weeks',
      isIEEE: false
    },
    {
      id: 'cse-10',
      title: 'Network Intrusion Detection with ML',
      overview: 'A binary and multi-class classifier trained on the NSL-KDD and CICIDS datasets to distinguish normal network traffic from 14 attack categories including DoS, probe, R2L and U2R. An XGBoost ensemble achieves 98.4% accuracy on the test set, with a live packet capture interface using Scapy.',
      technologies: ['Python', 'XGBoost', 'scikit-learn', 'Scapy', 'Wireshark', 'NSL-KDD Dataset'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks',
      isIEEE: true
    },
    {
      id: 'cse-11',
      title: 'Smart Inventory Management with RFID & IoT',
      overview: 'An automated warehouse inventory system using RFID readers and ESP32 nodes to track item movements in real time. A web dashboard displays current stock levels, triggers low-stock alerts via Telegram, and logs all transactions to a cloud database — eliminating manual stocktaking for small warehouses.',
      technologies: ['ESP32', 'RFID RC522', 'Node.js', 'MQTT', 'InfluxDB', 'Grafana', 'Telegram Bot API'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks',
      isIEEE: false
    },
    {
      id: 'cse-12',
      title: 'Sentiment Analysis Dashboard for Social Media',
      overview: 'A real-time pipeline that streams tweets via the Twitter API, classifies sentiment using a fine-tuned RoBERTa model, and visualises trends on a live dashboard. Supports topic filtering, temporal trend plots, and geographic heat maps of sentiment distribution.',
      technologies: ['Python', 'Tweepy', 'RoBERTa', 'Apache Kafka', 'Elasticsearch', 'Kibana'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3 weeks',
      isIEEE: false
    }]

  },

  mechanical: {
    slug: 'mechanical',
    name: 'Mechanical',
    fullName: 'Mechanical Engineering',
    tagline: 'Fabricated, assembled and tested — not rendered in CAD and left there.',
    description: 'Mechanical projects at WeBuildPro are physically built in our Peenya lab using CNC, 3D printing, welding and precision tooling. Every build is tested before it leaves the bench.',
    domains: ['Robotics & Automation', 'Thermal Systems', 'Manufacturing', 'Renewable Energy', 'Mechatronics', 'CAD/CAM', 'Fluid Mechanics', 'Material Science'],
    heroImage: "/images/1e68218a1-1788087015129.webp",
    faq: [
    { q: 'Do you provide CAD files as part of the delivery?', a: 'Yes. Full SolidWorks or Fusion 360 CAD files, engineering drawings, and BOM are included in every mechanical project delivery.' },
    { q: 'Can you fabricate parts that need CNC machining?', a: 'Yes. We have access to CNC machining, laser cutting, 3D printing and sheet metal fabrication within the Peenya industrial estate — minutes from our lab.' },
    { q: 'What if my project requires a specific material?', a: 'Mention the material specification in your requirement. We will source it and include the cost in the fixed quote. Most standard metals, polymers and composites are available locally.' }],

    projects: [
    {
      id: 'mech-01',
      title: 'Automated Pick-and-Place SCARA Arm',
      overview: 'A 4-DOF SCARA robotic arm designed for PCB component placement, actuated by NEMA 17 stepper motors and controlled via an Arduino-based G-code interpreter. The system achieves ±0.5mm repeatability and is programmed to pick components from a feeder tray and place them on a target grid at 30 placements per minute.',
      technologies: ['SolidWorks', 'Arduino Mega', 'NEMA 17 Steppers', 'A4988 Drivers', 'Aluminium Extrusion', 'Vacuum Gripper'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '5–6 weeks'
    },
    {
      id: 'mech-02',
      title: 'Solar-Powered Agricultural Sprayer',
      overview: 'A battery-powered, GPS-guided field sprayer for small-scale farms, driven by a 150W solar panel array and 48V Li-ion battery bank. The chassis is fabricated from mild steel box section and carries a 20-litre tank with a centrifugal pump, solenoid nozzle control and a mobile app interface for spray-zone programming.',
      technologies: ['SolidWorks', 'Arduino', 'GPS NEO-M8N', 'BLDC Motor', 'Solar Charge Controller', 'Android App'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '4–5 weeks'
    },
    {
      id: 'mech-03',
      title: 'Regenerative Braking Test Rig',
      overview: 'A bench-scale dynamometer that simulates vehicle deceleration and quantifies the energy recovered by a BLDC motor operating in generator mode. The rig measures input kinetic energy, recovered electrical energy and braking torque simultaneously, providing a validated dataset for comparing regenerative efficiency across load profiles.',
      technologies: ['SolidWorks', 'BLDC Motor', 'Load Cell', 'Arduino', 'MOSFET Rectifier', 'LabVIEW / MATLAB'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks'
    },
    {
      id: 'mech-04',
      title: '3D-Printed Myoelectric Prosthetic Hand',
      overview: 'A five-fingered prosthetic hand printed in PLA with tendon-driven actuation controlled by surface EMG signals from forearm muscles. Two MyoWare sensors detect muscle contraction patterns and route control signals to five micro-servos, enabling grip, pinch and individual finger extension gestures.',
      technologies: ['Fusion 360', 'FDM 3D Printing (PLA)', 'MyoWare EMG Sensor', 'Arduino Nano', 'MG90S Servos', 'Tendon Wire'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '5 weeks',
      isIEEE: true
    },
    {
      id: 'mech-05',
      title: 'Hydraulic Scissor Lift (1/5 Scale)',
      overview: 'A scale model hydraulic scissor lift fabricated from mild steel flat bar, actuated by a single-acting hydraulic cylinder and a hand-operated pump. The model demonstrates force multiplication, stability analysis and the relationship between cylinder bore, stroke and platform travel, with load testing up to 20kg.',
      technologies: ['AutoCAD', 'MIG Welding', 'Hydraulic Cylinder', 'MS Flat Bar', 'Hydraulic Pump', 'Load Cell'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '2–3 weeks'
    },
    {
      id: 'mech-06',
      title: 'Automatic Tyre Inflation System',
      overview: 'A rotary union-based system that monitors tyre pressure via wireless TPMS sensors and automatically inflates or deflates tyres to a target pressure while the vehicle is moving. A microcontroller manages the solenoid valves and compressor relay, with a dashboard display showing real-time pressure for all four tyres.',
      technologies: ['SolidWorks', 'TPMS Sensors', 'STM32', 'Rotary Union', 'Solenoid Valve', 'Compressor Relay'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks'
    },
    {
      id: 'mech-07',
      title: 'CNC Pen Plotter (A4 Format)',
      overview: 'A two-axis CNC plotter that converts SVG vector files into G-code and draws them on A4 paper using a servo-lifted pen. Built on aluminium extrusion with GT2 belts and NEMA 17 steppers, the machine achieves 0.1mm resolution and is controlled by GRBL firmware on an Arduino Uno.',
      technologies: ['Fusion 360', 'GRBL / Arduino Uno', 'NEMA 17 Steppers', 'GT2 Belt', 'Aluminium Extrusion', 'Inkscape'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3 weeks'
    },
    {
      id: 'mech-08',
      title: 'Waste Plastic to Fuel Converter',
      overview: 'A lab-scale pyrolysis reactor that thermally decomposes mixed plastic waste (HDPE, PP, PS) into hydrocarbon fuel fractions through controlled heating in an oxygen-limited chamber. The system measures yield by plastic type, characterises the fuel output by calorific value, and quantifies char and gas by-products.',
      technologies: ['SS304 Reactor Vessel', 'PID Temperature Controller', 'Thermocouple', 'Condenser Coil', 'Gas Chromatography (analysis)'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '4 weeks',
      isIEEE: false
    },
    {
      id: 'mech-09',
      title: 'Vibration-Based Condition Monitoring Rig',
      overview: 'A rotating machinery test rig with a deliberately unbalanced rotor, misaligned coupling and seeded bearing defect, instrumented with MEMS accelerometers. FFT analysis of vibration signatures in MATLAB identifies fault frequencies corresponding to each defect type, demonstrating predictive maintenance methodology.',
      technologies: ['SolidWorks', 'ADXL345 Accelerometer', 'Arduino', 'MATLAB FFT', 'DC Motor', 'Coupling'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '4–5 weeks',
      isIEEE: true
    },
    {
      id: 'mech-10',
      title: 'Magnetic Levitation Demonstration System',
      overview: 'An electromagnetic levitation platform that suspends a ferromagnetic sphere at a stable air gap using closed-loop PID control. An IR sensor measures the gap continuously and a microcontroller adjusts the electromagnet current to counteract disturbances, maintaining levitation within ±0.3mm of the setpoint.',
      technologies: ['Electromagnet (custom wound)', 'IR Proximity Sensor', 'Arduino Uno', 'PID Control', 'MOSFET Driver', 'Power Supply'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks',
      isIEEE: true
    },
    {
      id: 'mech-11',
      title: 'Compressed Air Energy Storage Model',
      overview: 'A bench-scale system demonstrating the charge-store-discharge cycle of compressed air energy storage. An electric compressor charges a pressure vessel, and the stored air drives a pneumatic motor to generate electricity on demand. Instrumentation measures round-trip efficiency at three pressure levels.',
      technologies: ['Pneumatic Cylinder', 'Pressure Vessel', 'Pneumatic Motor', 'Pressure Transducer', 'Arduino', 'Data Logger'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks'
    },
    {
      id: 'mech-12',
      title: 'Automated Seed Sowing Machine',
      overview: 'A tractor-mounted seed drill mechanism with a metering wheel that dispenses seeds at a controlled rate into furrows cut by a fixed-point opener, covering them with a press wheel. The metering rate is adjustable for different seed sizes, and a row counter provides planting statistics on a small LCD panel.',
      technologies: ['SolidWorks', 'MIG Welding', 'Metering Wheel', 'Servo Motor', 'Arduino', 'LCD Display'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '3 weeks'
    }]

  },

  ece: {
    slug: 'ece',
    name: 'ECE',
    fullName: 'Electronics & Communication Engineering',
    tagline: 'Circuits that work on the bench, not just in simulation.',
    description: 'ECE projects at WeBuildPro are fully fabricated — PCB designed, populated, tested and verified. You receive a working board, not a breadboard prototype with flying wires.',
    domains: ['Embedded Systems', 'RF & Wireless', 'VLSI & FPGA', 'Signal Processing', 'IoT', 'Drone & UAV', 'Communication Systems', 'Sensor Networks'],
    heroImage: "/images/14fbaad7a-1765008574736.webp",
    faq: [
    { q: 'Do you design and fabricate custom PCBs?', a: 'Yes. PCB design in KiCad or Altium, gerber generation, fabrication and SMD assembly are all done in-house. You receive the final assembled and tested board.' },
    { q: 'Can you do FPGA-based projects?', a: 'Yes. We work with Xilinx Artix-7 (Basys 3 / Arty) and Intel Cyclone boards. VHDL and Verilog both supported.' },
    { q: 'What communication protocols do you support?', a: 'We regularly work with UART, SPI, I2C, CAN, LoRa, Zigbee, BLE, Wi-Fi (ESP32), RF433/868, and NB-IoT. Specify your requirement and we will pick the right protocol for the range and data rate needed.' }],

    projects: [
    {
      id: 'ece-01',
      title: 'Surgery Replica Robotic System with IoT',
      overview: 'A precision robotic arm that mirrors a surgeon\'s hand movements in real time, with IoT connectivity for remote operation and monitoring. Demonstrates tele-robotics, servo control and low-latency wireless communication.',
      technologies: ['Servo Motors', 'ESP32', 'IoT Dashboard', 'Wireless Communication', 'Robotic Arm Frame', 'Real-Time Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-02',
      title: 'Smart Agriculture Drone for Pesticide Detection (IoT)',
      overview: 'An aerial drone that surveys crop fields and uses onboard sensors to detect pesticide levels, sending live data to an IoT dashboard. Helps farmers monitor chemical usage and crop health remotely.',
      technologies: ['Drone Frame', 'Gas/Chemical Sensors', 'ESP32', 'IoT Dashboard', 'Flight Controller', 'Wireless Telemetry'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-03',
      title: 'Smart Drone-Rover Hybrid (Flies & Drives) with IoT',
      overview: 'A hybrid vehicle that both flies like a drone and drives on wheels like a rover, switching modes on command, with IoT-based control and telemetry. Ideal for surveillance and hard-to-reach terrain.',
      technologies: ['Drone + Rover Frame', 'Flight Controller', 'ESP32', 'IoT Control', 'Mode-Switch Logic', 'Wireless Telemetry'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '4 weeks'
    },
    {
      id: 'ece-04',
      title: 'RFID-Based Smart Trolley & Human-Following Cart',
      overview: 'A shopping/warehouse cart that auto-bills items via RFID and follows the user using sensors. Combines RFID, embedded control and obstacle avoidance.',
      technologies: ['RFID RC522', 'Arduino/ESP32', 'Ultrasonic Sensors', 'Motor Driver', 'LCD Display', 'Embedded Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-05',
      title: 'IoT-Powered Smart Crop System',
      overview: 'An automated farming system that monitors soil moisture, temperature and humidity, and controls irrigation through an IoT dashboard. Reduces water waste and improves yield.',
      technologies: ['Soil Moisture Sensor', 'DHT22', 'ESP32', 'IoT Dashboard', 'Solenoid Valve', 'Relay Module'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-06',
      title: 'Digital Taxi Faremeter',
      overview: 'An electronic fare meter that calculates trip cost from distance and time using microcontroller-based sensing, with a digital display. A practical embedded metering project.',
      technologies: ['Arduino', 'GPS Module', 'LCD Display', 'RTC Module', 'Embedded C', 'Fare Calculation Logic'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '2 weeks'
    },
    {
      id: 'ece-07',
      title: 'IoT Food Spoilage Detector',
      overview: 'A sensor unit that detects gases released by spoiling food and alerts users via an IoT app. Uses gas sensors, embedded processing and wireless alerts.',
      technologies: ['MQ Gas Sensors', 'ESP32', 'IoT App', 'Buzzer Alert', 'Wireless Communication', 'Embedded Processing'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '2 weeks'
    },
    {
      id: 'ece-08',
      title: 'Automated Smart Toll Tax System',
      overview: 'An RFID/ANPR-based toll booth that automatically identifies vehicles and deducts toll without stopping. Demonstrates automation, RFID and database logging.',
      technologies: ['RFID', 'Arduino/ESP32', 'Database Logging', 'Servo Barrier', 'LCD Display', 'Automation Logic'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-09',
      title: 'IoT-Based Patient Health Monitoring System',
      overview: 'Continuously monitors heart rate, temperature and SpO2, streaming vitals to doctors over IoT with threshold alerts. A widely-used healthcare embedded project.',
      technologies: ['MAX30102', 'MLX90614', 'ESP32', 'IoT Dashboard', 'Threshold Alerts', 'Custom PCB'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-10',
      title: 'Smart Aquarium',
      overview: 'Automates fish feeding, water temperature, and cleaning with sensor feedback and IoT control. Combines embedded automation and remote monitoring.',
      technologies: ['Temperature Sensor', 'ESP32', 'Servo Feeder', 'IoT Control', 'Relay Module', 'Water Pump'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '2 weeks'
    },
    {
      id: 'ece-11',
      title: 'Groundwater Prediction & Saver',
      overview: 'Uses sensors and data logic to predict groundwater levels and optimise usage, alerting on over-extraction. An environmental IoT project.',
      technologies: ['Water Level Sensor', 'ESP32', 'IoT Dashboard', 'Data Analytics', 'Alert System', 'Embedded Logic'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-12',
      title: 'Smart Water Purifier',
      overview: 'An IoT-enabled purifier that monitors water quality (TDS, pH) in real time and controls filtration stages automatically.',
      technologies: ['TDS Sensor', 'pH Sensor', 'ESP32', 'IoT Dashboard', 'Solenoid Valve', 'Relay Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-13',
      title: 'IoT-Based Smart Soldier Health Monitoring System',
      overview: 'A wearable that tracks a soldier\'s vitals and GPS location, transmitting data to a command base over IoT. Defense-focused embedded system.',
      technologies: ['Heart Rate Sensor', 'GPS NEO-6M', 'ESP32', 'IoT Dashboard', 'GSM Module', 'Wearable PCB'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3 weeks'
    },
    {
      id: 'ece-14',
      title: 'IoT-Based Food Delivery Robot',
      overview: 'An autonomous robot that navigates to deliver food within a defined area, controlled and tracked over IoT. Combines navigation, embedded control and connectivity.',
      technologies: ['Arduino/ESP32', 'Motor Driver', 'Ultrasonic Sensors', 'IoT Tracking', 'Line Following', 'Wireless Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-15',
      title: 'Smart Chemical Rover',
      overview: 'A remotely operated rover that detects and monitors hazardous chemicals/gases in unsafe environments, relaying readings wirelessly.',
      technologies: ['MQ Gas Sensors', 'Arduino/ESP32', 'Motor Driver', 'Wireless Control', 'LCD Display', 'Rover Chassis'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3 weeks'
    },
    {
      id: 'ece-16',
      title: 'Smart Agriculture Rover',
      overview: 'A ground rover that performs sowing, spraying and soil monitoring autonomously, controlled through an app.',
      technologies: ['Arduino/ESP32', 'Soil Sensor', 'Sprayer Pump', 'Motor Driver', 'App Control', 'Rover Chassis'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3 weeks'
    },
    {
      id: 'ece-17',
      title: 'Colour-Sorting Robotic Arm',
      overview: 'A robotic arm with a colour sensor that identifies and sorts objects by colour into bins. Demonstrates machine vision basics and robotic actuation.',
      technologies: ['TCS3200 Colour Sensor', 'Servo Motors', 'Arduino', 'Robotic Arm Frame', 'Sorting Logic', 'Embedded C'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-18',
      title: 'Autonomous Delivery IoT Robot',
      overview: 'A self-navigating delivery robot using obstacle avoidance and path planning, with IoT tracking.',
      technologies: ['Arduino/ESP32', 'Ultrasonic Sensors', 'Motor Driver', 'IoT Tracking', 'Path Planning', 'Wireless Communication'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-19',
      title: 'Remote-Controlled Robotic Arm',
      overview: 'A multi-axis robotic arm controlled wirelessly for pick-and-place and precision tasks. A strong fundamentals project in robotics and control.',
      technologies: ['Servo Motors', 'Arduino', 'RF/Bluetooth Module', 'Robotic Arm Frame', 'Wireless Controller', 'Embedded C'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-20',
      title: '3D Scanning System',
      overview: 'Captures the geometry of a physical object and reconstructs a digital 3D model using sensors and rotational scanning.',
      technologies: ['IR/Laser Distance Sensor', 'Stepper Motor', 'Arduino', '3D Reconstruction Software', 'Rotary Platform', 'Point Cloud Processing'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-21',
      title: 'Weight Counter & Segregator',
      overview: 'An automated conveyor system that weighs items and segregates them by weight range using load cells and actuators.',
      technologies: ['Load Cell', 'HX711 Amplifier', 'Arduino', 'Servo/Actuator', 'Conveyor Belt', 'LCD Display'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-22',
      title: 'Defense Missile Detector & Auto-Launcher',
      overview: 'A radar/sensor-based system that detects incoming threats and triggers an automated counter-launch mechanism. A defense-themed embedded + control project.',
      technologies: ['Radar/Ultrasonic Sensor', 'Arduino/ESP32', 'Servo Launcher', 'Detection Algorithm', 'Alert System', 'Embedded Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-23',
      title: 'Pick-and-Place Robotic Arm (with Customization)',
      overview: 'A programmable robotic arm for automated pick-and-place operations, customisable for different payloads and paths.',
      technologies: ['Servo Motors', 'Arduino/ESP32', 'Robotic Arm Frame', 'Path Programming', 'Gripper', 'Embedded C'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-24',
      title: 'Autonomous Spare-Part Delivery Robot for Factories',
      overview: 'An indoor autonomous robot that ferries spare parts between stations inside a factory using line/marker navigation.',
      technologies: ['Arduino/ESP32', 'Line Sensor', 'Motor Driver', 'RFID Markers', 'Autonomous Navigation', 'Rover Chassis'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-25',
      title: 'Autonomous Drone for Inventory Management',
      overview: 'A warehouse drone that flies fixed routes to scan and count stock via barcodes/RFID, syncing counts to an inventory system.',
      technologies: ['Drone Frame', 'Flight Controller', 'Barcode/RFID Scanner', 'ESP32', 'Inventory System', 'Autonomous Flight'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '4 weeks'
    },
    {
      id: 'ece-26',
      title: 'Wireless EV Charging Station with RFID',
      overview: 'A contactless electric-vehicle charging pad that uses inductive power transfer and RFID for user authentication and billing. Covers power electronics and wireless energy transfer.',
      technologies: ['Inductive Charging Coils', 'RFID RC522', 'Arduino/ESP32', 'Power Electronics', 'Billing Logic', 'Custom PCB'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-27',
      title: 'IoT-Based Real-Time Battery Monitoring System',
      overview: 'Monitors battery voltage, current, temperature and state-of-charge in real time, sending alerts over IoT to prevent failures. Key for EV and energy storage applications.',
      technologies: ['Voltage Sensor', 'Current Sensor', 'NTC Thermistor', 'ESP32', 'IoT Dashboard', 'Alert System'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-28',
      title: 'Energy Monitoring System',
      overview: 'Measures and logs power consumption of appliances/loads in real time, helping identify energy waste. Uses current/voltage sensing and a live dashboard.',
      technologies: ['CT Sensor', 'Voltage Transformer', 'ESP32', 'Live Dashboard', 'Data Logging', 'Custom PCB'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-29',
      title: 'Solar Tracking System',
      overview: 'A dual-axis system that rotates a solar panel to follow the sun, maximising energy capture versus a fixed panel. A classic, high-impact renewable-energy project.',
      technologies: ['LDR Sensors', 'Servo/Stepper Motors', 'Arduino', 'Solar Panel', 'Dual-Axis Mechanism', 'Embedded Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-30',
      title: 'Industrial Automation System with IIoT',
      overview: 'A PLC/microcontroller-driven automation line monitored and controlled through Industrial IoT, with live status and fault alerts.',
      technologies: ['PLC / Arduino', 'IIoT Gateway', 'MQTT', 'SCADA Dashboard', 'Sensors & Actuators', 'Fault Alert Logic'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'ece-31',
      title: 'Automated Bottle Filling Machine',
      overview: 'A conveyor-based system that positions, fills and caps bottles automatically using sensors and actuators. Demonstrates industrial automation and control.',
      technologies: ['Conveyor Motor', 'Solenoid Valve', 'Photoelectric Sensor', 'Arduino/PLC', 'Pneumatic Actuator', 'Embedded Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'ece-32',
      title: 'Industrial Safety-Based IIoT Monitoring System',
      overview: 'Monitors temperature, gas, vibration and electrical parameters across a plant, triggering safety alerts and shutdowns over Industrial IoT.',
      technologies: ['Temperature Sensor', 'MQ Gas Sensor', 'Vibration Sensor', 'ESP32', 'IIoT Dashboard', 'Safety Shutdown Logic'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    }]

  },

  eee: {
    slug: 'eee',
    name: 'EEE',
    fullName: 'Electrical & Electronics Engineering',
    tagline: 'Power systems and control loops — designed, wired and verified under load.',
    description: 'EEE projects at WeBuildPro are built on proper power electronics hardware — not simulated in MATLAB and called done. Every project is tested at the rated voltage and current before delivery.',
    domains: ['Power Electronics', 'Renewable Energy', 'Motor Drives', 'PLC & SCADA', 'EV & Battery Systems', 'Industrial Automation', 'Smart Grid', 'Control Systems'],
    heroImage: "/images/1a009f90c-1765197239094.webp",
    faq: [
    { q: 'Do you work with high-voltage projects?', a: 'We build and test power electronics at voltages up to 230V AC and 48V DC on our bench. Projects requiring higher voltages are scoped on a case-by-case basis with appropriate safety protocols.' },
    { q: 'Can you support PLC-based projects?', a: 'Yes. We work with Siemens S7-1200, Allen-Bradley Micro820, and Delta DVP series PLCs. SCADA integration using Ignition or WinCC is also in scope.' },
    { q: 'Do EEE projects include hardware or just simulation?', a: 'Hardware first. Simulation (MATLAB/Simulink, PSIM) is used for design validation before fabrication, but the deliverable is always a working physical unit.' }],

    projects: [
    {
      id: 'eee-01',
      title: 'Wireless EV Charging Station with RFID',
      overview: 'A contactless electric-vehicle charging pad that uses inductive power transfer and RFID for user authentication and billing. Covers power electronics and wireless energy transfer.',
      technologies: ['Inductive Charging Coils', 'RFID RC522', 'Arduino/ESP32', 'Power Electronics', 'Billing Logic', 'Custom PCB'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'eee-02',
      title: 'IoT-Based Real-Time Battery Monitoring System',
      overview: 'Monitors battery voltage, current, temperature and state-of-charge in real time, sending alerts over IoT to prevent failures. Key for EV and energy storage applications.',
      technologies: ['Voltage Sensor', 'Current Sensor', 'NTC Thermistor', 'ESP32', 'IoT Dashboard', 'Alert System'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'eee-03',
      title: 'Energy Monitoring System',
      overview: 'Measures and logs power consumption of appliances/loads in real time, helping identify energy waste. Uses current/voltage sensing and a live dashboard.',
      technologies: ['CT Sensor', 'Voltage Transformer', 'ESP32', 'Live Dashboard', 'Data Logging', 'Custom PCB'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'eee-04',
      title: 'Solar Tracking System',
      overview: 'A dual-axis system that rotates a solar panel to follow the sun, maximising energy capture versus a fixed panel. A classic, high-impact renewable-energy project.',
      technologies: ['LDR Sensors', 'Servo/Stepper Motors', 'Arduino', 'Solar Panel', 'Dual-Axis Mechanism', 'Embedded Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'eee-05',
      title: 'Industrial Automation System with IIoT',
      overview: 'A PLC/microcontroller-driven automation line monitored and controlled through Industrial IoT, with live status and fault alerts.',
      technologies: ['PLC / Arduino', 'IIoT Gateway', 'MQTT', 'SCADA Dashboard', 'Sensors & Actuators', 'Fault Alert Logic'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    },
    {
      id: 'eee-06',
      title: 'Automated Bottle Filling Machine',
      overview: 'A conveyor-based system that positions, fills and caps bottles automatically using sensors and actuators. Demonstrates industrial automation and control.',
      technologies: ['Conveyor Motor', 'Solenoid Valve', 'Photoelectric Sensor', 'Arduino/PLC', 'Pneumatic Actuator', 'Embedded Control'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '2–3 weeks'
    },
    {
      id: 'eee-07',
      title: 'Industrial Safety-Based IIoT Monitoring System',
      overview: 'Monitors temperature, gas, vibration and electrical parameters across a plant, triggering safety alerts and shutdowns over Industrial IoT.',
      technologies: ['Temperature Sensor', 'MQ Gas Sensor', 'Vibration Sensor', 'ESP32', 'IIoT Dashboard', 'Safety Shutdown Logic'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks'
    }]

  },

  civil: {
    slug: 'civil',
    name: 'Civil / Mining',
    fullName: 'Civil Engineering & Mining Technology',
    tagline: 'Structural models, material studies and smart infrastructure — physically tested.',
    description: 'Civil and mining projects at WeBuildPro combine physical model fabrication with instrumentation and data acquisition — giving you a project that demonstrates real engineering behaviour, not just a literature review.',
    domains: ['Structural Engineering', 'Geotechnical', 'Transportation', 'Environmental', 'Construction Technology', 'Smart Infrastructure', 'Mining Safety', 'Water Resources'],
    heroImage: "/images/154b9d489-1788087013543.webp",
    faq: [
    { q: 'Can you build physical scale models for civil projects?', a: 'Yes. Structural models, formwork systems and soil test rigs are fabricated in our lab. We also instrument them with load cells, strain gauges and displacement sensors for quantitative testing.' },
    { q: 'Do you support GIS and remote sensing projects?', a: 'Yes. We work with QGIS, ArcGIS, Google Earth Engine and drone-captured orthophotos for mapping, flood risk analysis and land use projects.' },
    { q: 'Can mining projects include sensor-based safety systems?', a: 'Yes. Gas detection, vibration monitoring and emergency alert systems with embedded electronics are within scope — we have both the civil knowledge and the electronics fabrication capability in-house.' }],

    projects: [
    {
      id: 'civil-01',
      title: 'IoT Structural Health Monitoring for Bridges',
      overview: 'A wireless sensor network installed on a 1:20 scale bridge model, measuring strain, deflection and vibration under controlled loading. STM32-based nodes transmit data via LoRa to a gateway, and a Python dashboard visualises real-time structural response and flags anomalies against a FEM baseline model built in ANSYS.',
      technologies: ['Strain Gauges', 'LVDT', 'Accelerometer', 'STM32', 'LoRa', 'ANSYS FEM', 'Python Dashboard'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '5–6 weeks',
      isIEEE: true
    },
    {
      id: 'civil-02',
      title: 'Self-Healing Concrete Study',
      overview: 'A comparative material study evaluating crack-healing efficiency in concrete specimens incorporating three healing agents: encapsulated sodium silicate, Bacillus subtilis bacterial spores, and polyurethane microcapsules. Crack width, compressive strength recovery and water permeability are measured at 7, 14 and 28 days post-cracking.',
      technologies: ['Concrete Mix Design', 'Compressive Strength Testing', 'Crack Width Gauge', 'Permeability Test Setup', 'Microscopy'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '6–8 weeks',
      isIEEE: false
    },
    {
      id: 'civil-03',
      title: 'GIS-Based Flood Risk Mapping',
      overview: 'A spatial analysis workflow in QGIS that integrates DEM data, land use classification, drainage network topology and historical rainfall records to produce a multi-tier flood hazard map for a selected urban catchment. Sensitivity analysis quantifies how a 20% increase in imperviousness changes the 100-year flood extent.',
      technologies: ['QGIS', 'SRTM DEM', 'HEC-RAS', 'Python (GeoPandas)', 'IMD Rainfall Data', 'Google Earth Engine'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks',
      isIEEE: false
    },
    {
      id: 'civil-04',
      title: 'Plastic-Waste-Modified Bituminous Road Study',
      overview: 'An experimental investigation into the effect of shredded LDPE plastic waste on the Marshall stability and flow properties of bituminous concrete mixes. Mix designs with 0%, 4%, 8% and 12% plastic content by weight of bitumen are prepared, compacted and tested, with results compared against VG-30 control mix benchmarks.',
      technologies: ['Marshall Stability Apparatus', 'Bitumen Extraction', 'Sieve Analysis', 'LDPE Shredder', 'Lab Mix Plant'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '4–5 weeks',
      isIEEE: false
    },
    {
      id: 'civil-05',
      title: 'Rainwater Harvesting Optimisation Model',
      overview: 'A site-specific water balance model for a 5,000m² commercial building rooftop catchment that optimises cistern sizing to maximise supply reliability across Bengaluru\'s bimodal monsoon pattern. The model outputs a demand-reliability curve and a 20-year NPV analysis comparing harvesting against municipal supply costs.',
      technologies: ['Python (Water Balance Model)', 'IMD Rainfall Data', 'AutoCAD (Roof Plan)', 'Excel NPV Model'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '2–3 weeks',
      isIEEE: false
    },
    {
      id: 'civil-06',
      title: 'BIM 5D Cost Modelling',
      overview: 'A full Building Information Model of a G+3 residential structure in Revit, linked to a quantity take-off schedule and a project timeline in MS Project to produce a 5D model that dynamically updates cost estimates when design parameters change. Clash detection reports and construction phasing animations are included in the deliverable.',
      technologies: ['Autodesk Revit', 'MS Project', 'Navisworks', 'CostX Quantity Take-Off', 'BIM 360'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '4 weeks',
      isIEEE: false
    },
    {
      id: 'civil-07',
      title: 'Mine Gas Detection & Alert System',
      overview: 'An underground mine safety system using MQ-series gas sensors (CO, CH4, H2S) and particulate sensors mounted on a ruggedised ESP32 node, with a LoRa uplink to a surface control room. The system triggers zone-specific audio/visual alarms and sends SMS alerts when gas concentrations exceed DGMS threshold limits.',
      technologies: ['MQ-2/MQ-7/MQ-136 Sensors', 'PM2.5 Sensor', 'ESP32', 'LoRa', 'GSM SIM800', 'Node-RED Dashboard'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks',
      isIEEE: true
    },
    {
      id: 'civil-08',
      title: 'Soil Stabilisation with Industrial Waste',
      overview: 'A laboratory investigation into the stabilisation of expansive black cotton soil using combinations of fly ash, GGBS and lime at varying percentages. CBR, UCS, Atterberg limits and swell pressure are measured for each combination, establishing the optimal blend for sub-grade stabilisation in Karnataka road construction.',
      technologies: ['CBR Apparatus', 'UCS Machine', 'Atterberg Limits Test', 'Compaction Test', 'Fly Ash / GGBS / Lime'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '4–6 weeks',
      isIEEE: false
    },
    {
      id: 'civil-09',
      title: 'Earthquake-Resistant Shear Wall Analysis',
      overview: 'A comparative finite element study in ETABS analysing the seismic performance of a G+10 RC frame building with three shear wall configurations (core wall, coupled wall, perimeter wall) under IS 1893 Zone III ground motion. Storey drift, base shear and ductility demand are compared across configurations.',
      technologies: ['ETABS', 'IS 1893 Response Spectrum', 'AutoCAD Structural Drawings', 'Excel Post-Processing'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '3–4 weeks',
      isIEEE: false
    },
    {
      id: 'civil-10',
      title: 'Smart Water Distribution Network',
      overview: 'An IoT-instrumented scale model of a water distribution network with pressure transducers and flow meters at six nodes, an ESP32 controller managing pump speed via VFD, and a SCADA interface that detects pipe burst events from pressure signature anomalies and isolates the affected zone within 3 seconds.',
      technologies: ['Pressure Transducers', 'Flow Meters', 'ESP32', 'VFD Pump Control', 'MQTT', 'Node-RED SCADA'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Advanced',
      timeline: '5 weeks',
      isIEEE: true
    },
    {
      id: 'civil-11',
      title: 'Pervious Concrete Mix Design Study',
      overview: 'A mix design investigation into pervious concrete using single-sized 10mm and 20mm aggregates with water-cement ratios of 0.30–0.38, measuring permeability coefficient, compressive strength and void ratio for each combination. Results are mapped against ASTM C1701 targets for stormwater infiltration applications.',
      technologies: ['Permeameter', 'Compression Testing Machine', 'Sieve Analysis', 'Mix Design Calculations', 'Water Permeability Test'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Beginner',
      timeline: '4–5 weeks',
      isIEEE: false
    },
    {
      id: 'civil-12',
      title: 'Traffic Volume & PCU Study with ML Classification',
      overview: 'A video-based traffic survey system using a fixed camera and a YOLO v8 object detection model to automatically classify and count vehicles by type (2W, 3W, car, LCV, HCV, bus) at a selected intersection. PCU-weighted flow rates are computed and compared with manual classified counts to validate the automated method.',
      technologies: ['YOLOv8', 'Python', 'OpenCV', 'Traffic Camera', 'Excel PCU Analysis', 'IRC 64 Standards'],
      deliverables: DELIVERABLES_ACADEMIC,
      difficulty: 'Intermediate',
      timeline: '3–4 weeks',
      isIEEE: true
    }]

  }
};

export const allBranches = Object.values(branchData);

export interface MiniProject {
  id: string;
  title: string;
  description: string;
  price: number;
  priceDisplay: string;
}

export const miniProjects: MiniProject[] = [
{
  id: 'mini-01',
  title: 'IoT-Based Weather Monitoring System',
  description: 'Measures temperature, humidity, rainfall and pressure with sensors and displays live readings on an IoT dashboard. A clean introduction to sensors and cloud data.',
  price: 5000,
  priceDisplay: '₹5,000'
},
{
  id: 'mini-02',
  title: 'IoT-Based Gas Leakage Detection & Alert System',
  description: 'Detects LPG/harmful gas leaks and instantly triggers a buzzer and a phone alert over IoT. A practical safety project.',
  price: 5500,
  priceDisplay: '₹5,500'
},
{
  id: 'mini-03',
  title: 'IoT & RFID-Based Attendance System',
  description: 'Marks attendance automatically when an RFID card is scanned and logs it to the cloud. Great beginner IoT + RFID project.',
  price: 3500,
  priceDisplay: '₹3,500'
},
{
  id: 'mini-04',
  title: 'IoT-Based Industrial Parameter Monitor',
  description: 'Continuously monitors industrial parameters like temperature, voltage and vibration and streams them to an IoT dashboard with alerts.',
  price: 6000,
  priceDisplay: '₹6,000'
},
{
  id: 'mini-05',
  title: 'Simple Home Automation Using IoT',
  description: 'Control home appliances (lights, fan) from a phone app over IoT. A popular, easy-to-demo starter project.',
  price: 5000,
  priceDisplay: '₹5,000'
},
{
  id: 'mini-06',
  title: 'IoT-Powered RC Car',
  description: 'A remote-controlled car driven over the internet/IoT with live control from a phone. Fun, hands-on embedded project.',
  price: 5000,
  priceDisplay: '₹5,000'
},
{
  id: 'mini-07',
  title: 'IoT-Based Miner Life-Saving Safety Helmet/Cap',
  description: 'A wearable helmet that monitors gas, temperature and impact for miners and sends emergency alerts over IoT. A strong safety-focused build.',
  price: 8000,
  priceDisplay: '₹8,000'
},
{
  id: 'mini-08',
  title: 'IoT-Based Air Quality Monitoring System',
  description: 'Measures air pollutants (CO, PM, gases) and reports the air quality index live to an IoT dashboard.',
  price: 5000,
  priceDisplay: '₹5,000'
},
{
  id: 'mini-09',
  title: 'IoT-Based Plant Monitoring System & Automatic Irrigator',
  description: 'Monitors soil moisture and automatically waters plants, with remote monitoring over IoT. Ideal agri/IoT mini project.',
  price: 5000,
  priceDisplay: '₹5,000'
},
{
  id: 'mini-10',
  title: 'Smart Dustbin',
  description: 'An automatic lid-opening dustbin using sensors, with fill-level detection. Simple, popular and easy to demonstrate.',
  price: 5000,
  priceDisplay: '₹5,000'
},
{
  id: 'mini-11',
  title: 'Smart Charging System by Walking & RFID Cut',
  description: 'Generates charge from footstep/walking energy and manages charging access via RFID. Combines energy harvesting and RFID.',
  price: 7000,
  priceDisplay: '₹7,000'
},
{
  id: 'mini-12',
  title: 'Gravity Energy Generator',
  description: 'Demonstrates electricity generation using gravitational/potential energy. A neat renewable-energy concept project.',
  price: 7000,
  priceDisplay: '₹7,000'
},
{
  id: 'mini-13',
  title: 'Bluetooth + Gesture + Obstacle-Avoidance Car',
  description: 'A car controllable three ways: Bluetooth, hand gestures, and autonomous obstacle avoidance. Covers multiple control methods in one build.',
  price: 7000,
  priceDisplay: '₹7,000'
},
{
  id: 'mini-14',
  title: 'Petrol Flowmeter with Live IoT',
  description: 'Measures fuel flow accurately and reports live readings over IoT. Useful anti-tampering/metering project.',
  price: 5500,
  priceDisplay: '₹5,500'
},
{
  id: 'mini-15',
  title: 'Surveillance Patrolling Mini Robot',
  description: 'A small robot that patrols a route and streams live camera surveillance. Combines robotics and monitoring.',
  price: 8000,
  priceDisplay: '₹8,000'
},
{
  id: 'mini-16',
  title: 'Smart Helmet Driver Safety System',
  description: 'Ensures the bike starts only when the helmet is worn, with alcohol detection and accident alerts. A high-impact road-safety project.',
  price: 8000,
  priceDisplay: '₹8,000'
},
{
  id: 'mini-17',
  title: 'Fingerprint-Authorised Vehicle Safety System',
  description: 'Starts a vehicle only after a valid fingerprint, preventing theft. A practical biometric security project.',
  price: 8000,
  priceDisplay: '₹8,000'
}];