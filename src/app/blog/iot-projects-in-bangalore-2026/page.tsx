'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { trackEvent } from '@/lib/analytics';
import { submitLead, LEAD_ERROR } from '@/lib/submitLead';

const SLUG = 'iot-projects-in-bangalore-2026';
const WA_LINK =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20need%20an%20IoT%20project%20in%20Bangalore%20%E2%80%94%20can%20you%20help%3F';

// ─── Table of Contents ───────────────────────────────────────────────────────

const tocItems = [
  { id: 'what-is-iot-project', label: 'What Is an IoT Final-Year Project?' },
  { id: 'why-bangalore', label: 'Why Bangalore for IoT Projects?' },
  { id: 'iot-project-ideas', label: '50+ IoT Project Ideas (2025–2026)' },
  { id: 'components', label: 'Common Components & Tech Stack' },
  { id: 'cost', label: 'Cost of IoT Projects in Bangalore' },
  { id: 'how-we-build', label: 'How WEBUILDPRO Builds Your IoT Project' },
  { id: 'colleges', label: 'Colleges We Serve in Bangalore' },
  { id: 'faq', label: 'Frequently Asked Questions' },
  { id: 'contact-form', label: 'Enquire / Order Now' },
];

// ─── IoT Project Ideas Data ───────────────────────────────────────────────────

const iotProjects = [
  // Smart Home & Buildings
  {
    id: 1, category: 'Smart Home & Buildings',
    title: 'IoT Home Automation with Voice Control',
    description: 'Control lights, fans, AC and appliances via Google Assistant or Alexa. Uses ESP32 + Relay Module + Blynk/Firebase. Demonstrates smart home integration with voice commands.',
    difficulty: 'Beginner', hardware: 'ESP32, Relay Module, IR Sensors',
  },
  {
    id: 2, category: 'Smart Home & Buildings',
    title: 'IoT Smart Energy Management System',
    description: 'Monitor real-time energy consumption per room with PZEM-004T sensors and ESP32. Dashboard shows kWh usage and cost prediction. Ideal for IEEE-based energy conservation projects.',
    difficulty: 'Intermediate', hardware: 'ESP32, PZEM-004T, OLED Display',
  },
  {
    id: 3, category: 'Smart Home & Buildings',
    title: 'IoT Smart Door Lock with Face Recognition',
    description: 'Raspberry Pi-based facial recognition door lock that logs entry attempts to a cloud database and sends Telegram alerts on unauthorized access.',
    difficulty: 'Advanced', hardware: 'Raspberry Pi 4, Camera Module, Solenoid Lock',
  },
  {
    id: 4, category: 'Smart Home & Buildings',
    title: 'IoT Smart Street Light System',
    description: 'Adaptive street lighting using LDR and PIR sensors with ESP32. Lights dim when no motion detected, brighten on vehicle/pedestrian detection — saves up to 40% energy.',
    difficulty: 'Intermediate', hardware: 'ESP32, LDR, PIR Sensor, Relay',
  },
  {
    id: 5, category: 'Smart Home & Buildings',
    title: 'IoT Smart Garbage Level Monitor',
    description: 'Ultrasonic sensors in bins transmit fill levels over MQTT to a city dashboard. Alerts municipality when bins exceed 80% — eliminates unnecessary collection routes.',
    difficulty: 'Beginner', hardware: 'ESP32, HC-SR04 Ultrasonic, NodeMCU',
  },
  {
    id: 6, category: 'Smart Home & Buildings',
    title: 'IoT Smart Parking Management System',
    description: 'IR sensors detect occupied/vacant slots; ESP32 publishes real-time slot data to a web dashboard. LED matrix at entrance shows available count.',
    difficulty: 'Beginner', hardware: 'ESP32, IR Sensors, LED Matrix',
  },
  // Agriculture
  {
    id: 7, category: 'Smart Agriculture',
    title: 'IoT-Powered Smart Crop Monitoring System',
    description: 'Monitors soil moisture, temperature, humidity and NPK levels. Automated drip irrigation triggered when moisture falls below threshold. Live dashboard on ThingSpeak/Blynk.',
    difficulty: 'Intermediate', hardware: 'ESP32, DHT22, Soil Moisture, NPK Sensor',
  },
  {
    id: 8, category: 'Smart Agriculture',
    title: 'IoT Greenhouse Automation System',
    description: 'Automates temperature, humidity, CO2 and light control inside greenhouses using ESP32. Cloud dashboard logs environment parameters and alerts on deviations.',
    difficulty: 'Intermediate', hardware: 'ESP32, DHT22, MH-Z19B CO2, LED Grow Lights',
  },
  {
    id: 9, category: 'Smart Agriculture',
    title: 'IoT Smart Agriculture Drone for Pesticide Detection',
    description: 'Drone equipped with gas sensors detects crop disease and triggers precision pesticide spraying. GPS-guided waypoint mission. IEEE-aligned multi-sensor fusion project.',
    difficulty: 'Advanced', hardware: 'Pixhawk, Gas Sensor Array, GPS, Sprayer',
  },
  {
    id: 10, category: 'Smart Agriculture',
    title: 'IoT Aquaponics Water Quality Monitor',
    description: 'pH, DO, TDS and temperature sensors monitor fish-tank and plant-bed health. ESP32 triggers alerts when parameters go out of range. Ideal for sustainable farming research.',
    difficulty: 'Intermediate', hardware: 'ESP32, pH Sensor, DO Sensor, TDS Sensor',
  },
  {
    id: 11, category: 'Smart Agriculture',
    title: 'IoT Groundwater Level Predictor & Water Saver',
    description: 'Water level sensors + ML model on cloud predicts depletion trends. Automates pump scheduling to conserve groundwater. Combines IoT and basic ML — IEEE publication-ready.',
    difficulty: 'Intermediate', hardware: 'ESP32, Ultrasonic Level Sensor, Relay',
  },
  // Healthcare
  {
    id: 12, category: 'Healthcare IoT',
    title: 'IoT-Based Patient Health Monitoring System',
    description: 'Continuously monitors SpO2, heart rate, body temperature and ECG. Live dashboard streams vitals; Telegram bot sends alerts when readings exceed safe thresholds.',
    difficulty: 'Intermediate', hardware: 'ESP32, MAX30102, MLX90614, AD8232 ECG',
  },
  {
    id: 13, category: 'Healthcare IoT',
    title: 'IoT Wearable Pulse Oximeter & Health Band',
    description: 'Compact wrist-worn device with MAX30102 and MLX90614 transmits SpO2, heart rate and temperature to a mobile app. Battery-operated with BLE connection.',
    difficulty: 'Intermediate', hardware: 'ESP32, MAX30102, MLX90614, LiPo Battery',
  },
  {
    id: 14, category: 'Healthcare IoT',
    title: 'IoT Smart Medicine Reminder & Dispenser',
    description: 'Servo-driven pill dispenser triggered at scheduled times. GSM module calls patient if medication is not taken. Cloud dashboard lets doctors monitor compliance remotely.',
    difficulty: 'Intermediate', hardware: 'ESP32, SIM800L, Servo Motor, RTC DS3231',
  },
  {
    id: 15, category: 'Healthcare IoT',
    title: 'IoT Fall Detection Wearable for Elderly',
    description: 'MPU6050 accelerometer detects fall events and sends GPS location + alert via GSM to family members. Real-time Telegram alert with Google Maps link.',
    difficulty: 'Intermediate', hardware: 'ESP32, MPU6050, GPS NEO-6M, SIM800L',
  },
  {
    id: 16, category: 'Healthcare IoT',
    title: 'IoT Smart Soldier Health Monitoring System',
    description: 'Wearable monitors soldier vitals (SpO2, temperature, GPS) and transmits over LoRa to field base station. Designed for low-connectivity battlefield environments.',
    difficulty: 'Advanced', hardware: 'ESP32, MAX30102, GPS, LoRa SX1276',
  },
  // Environment & Safety
  {
    id: 17, category: 'Environment & Safety',
    title: 'IoT Gas Leakage Detection & Alert System',
    description: 'MQ-2 and MQ-135 sensors detect LPG, CO and smoke. ESP32 triggers buzzer alarm and sends Telegram/Blynk alert instantly. Automatic exhaust fan activation on detection.',
    difficulty: 'Beginner', hardware: 'ESP32, MQ-2, MQ-135, Buzzer, Relay',
  },
  {
    id: 18, category: 'Environment & Safety',
    title: 'IoT Air Quality Monitoring System',
    description: 'PMS5003 dust sensor + MQ-135 + MQ-7 (CO) measure PM2.5, PM10, CO, VOCs and CO2. Hourly data posted to ThingSpeak; daily AQI trend report emailed automatically.',
    difficulty: 'Intermediate', hardware: 'ESP32, PMS5003, MQ-135, MQ-7',
  },
  {
    id: 19, category: 'Environment & Safety',
    title: 'IoT Water Quality Monitoring System',
    description: 'pH, turbidity, TDS and temperature sensors monitor river or tank water quality. Real-time ThingSpeak dashboard + Telegram alert on pollution spikes.',
    difficulty: 'Intermediate', hardware: 'ESP32, pH Probe, Turbidity Sensor, TDS Sensor',
  },
  {
    id: 20, category: 'Environment & Safety',
    title: 'IoT Smart Fire Detection & Suppression System',
    description: 'Flame sensor + MQ-2 smoke detector + temperature sensor trigger automated water sprinkler via relay. Alert sent to phone instantly. Industrial-grade detection logic.',
    difficulty: 'Intermediate', hardware: 'ESP32, Flame Sensor, MQ-2, DHT22, Relay, Sprinkler',
  },
  {
    id: 21, category: 'Environment & Safety',
    title: 'IoT Flood Early Warning System',
    description: 'Ultrasonic water level sensors in rivers transmit data over LoRa to a gateway. Alarm triggered when water rises above safe levels. Suitable for rural flood-prone zones.',
    difficulty: 'Intermediate', hardware: 'ESP32, HC-SR04, LoRa, GSM SIM800L',
  },
  {
    id: 22, category: 'Environment & Safety',
    title: 'IoT Miner Safety Helmet System',
    description: 'Helmet-mounted sensors (MQ series, DHT22, gas) detect dangerous mine conditions. LoRa/GSM relay data to surface control room. Immediate evacuation alert on threshold breach.',
    difficulty: 'Advanced', hardware: 'ESP32, MQ Sensors, LoRa/GSM, DHT22',
  },
  // Industrial IoT (IIoT)
  {
    id: 23, category: 'Industrial IoT (IIoT)',
    title: 'Industrial Automation System with IIoT',
    description: 'Modbus RTU sensors connect to ESP32 gateway that publishes to MQTT broker. Node-RED dashboard shows live machine status, energy consumption and OEE metrics.',
    difficulty: 'Advanced', hardware: 'ESP32, Modbus Sensors, MQTT Broker, Node-RED',
  },
  {
    id: 24, category: 'Industrial IoT (IIoT)',
    title: 'IoT-Based Industrial Safety Monitoring System',
    description: 'Vibration, temperature and current sensors on industrial motors detect anomalies. Alert pipeline uses MQTT → cloud → Telegram. IEEE IIoT paper implementation.',
    difficulty: 'Advanced', hardware: 'ESP32, ADXL345, Thermocouple, ACS712',
  },
  {
    id: 25, category: 'Industrial IoT (IIoT)',
    title: 'IoT-Based Real-Time Battery Monitoring System',
    description: 'Voltage, current and temperature of lithium battery packs monitored over BLE/Wi-Fi. State-of-charge prediction using Coulomb counting. Ideal for EV-adjacent projects.',
    difficulty: 'Intermediate', hardware: 'ESP32, INA219, NTC Thermistor, LiPo Bank',
  },
  {
    id: 26, category: 'Industrial IoT (IIoT)',
    title: 'Energy Monitoring System with IoT Dashboard',
    description: 'PZEM-004T measures kWh, voltage, current and power factor per phase. ESP32 logs to cloud; Node-RED dashboard generates monthly billing reports.',
    difficulty: 'Intermediate', hardware: 'ESP32, PZEM-004T, Node-RED, MQTT',
  },
  {
    id: 27, category: 'Industrial IoT (IIoT)',
    title: 'Predictive Maintenance IoT System',
    description: 'Vibration FFT analysis on rotating machinery using MPU6050 detects bearing wear patterns. Anomaly detection ML model deployed on edge ESP32 (TFLite Micro).',
    difficulty: 'Advanced', hardware: 'ESP32, MPU6050, TFLite Micro',
  },
  // Transportation & Logistics
  {
    id: 28, category: 'Transportation & Logistics',
    title: 'IoT Vehicle Tracking System with GPS',
    description: 'GPS NEO-6M on vehicle transmits live coordinates over GSM/SIM800L to Google Maps-embedded web dashboard. Geo-fence alerts when vehicle leaves defined zone.',
    difficulty: 'Intermediate', hardware: 'ESP32, GPS NEO-6M, SIM800L, Google Maps API',
  },
  {
    id: 29, category: 'Transportation & Logistics',
    title: 'IoT RFID Attendance & Access Control System',
    description: 'RFID-RC522 module scans student/employee cards; ESP32 logs attendance to Google Sheets via API. Admin dashboard shows daily report. No manual register needed.',
    difficulty: 'Beginner', hardware: 'ESP32, RFID RC522, Google Sheets API',
  },
  {
    id: 30, category: 'Transportation & Logistics',
    title: 'Wireless EV Charging Station with IoT + RFID',
    description: 'RFID-authenticated EV charging dock monitors energy delivered per session and bills automatically. ESP32 publishes session data to cloud. Energy metering with PZEM.',
    difficulty: 'Advanced', hardware: 'ESP32, RFID, PZEM-004T, Relay',
  },
  {
    id: 31, category: 'Transportation & Logistics',
    title: 'IoT Smart Toll Tax System',
    description: 'Vehicles approach RFID reader at toll gate; deduction processed from cloud wallet. LED and LCD display confirmation. No cash required. ESP32 + cloud backend.',
    difficulty: 'Intermediate', hardware: 'ESP32, RFID, LCD, Servo Gate',
  },
  {
    id: 32, category: 'Transportation & Logistics',
    title: 'IoT Cold Chain Temperature Monitor',
    description: 'Temperature and humidity sensors inside refrigerated trucks transmit readings every 30 seconds. Alerts triggered if temperature exceeds safe range. Cloud audit trail for compliance.',
    difficulty: 'Intermediate', hardware: 'ESP32, DHT22/DS18B20, GSM SIM800L',
  },
  // Weather & Environment
  {
    id: 33, category: 'Weather & Environment',
    title: 'IoT Weather Station with Cloud Dashboard',
    description: 'DHT22 + BMP280 + rain gauge + anemometer build a full personal weather station. Data uploaded every 5 minutes to ThingSpeak. Mobile app shows forecasted trends.',
    difficulty: 'Beginner', hardware: 'ESP32, DHT22, BMP280, Rain Gauge',
  },
  {
    id: 34, category: 'Weather & Environment',
    title: 'IoT Soil NPK & Weather Combined Monitor',
    description: 'Combines soil NPK, moisture, pH with ambient weather data. ML model on cloud recommends optimal fertiliser dosage. Farmers receive WhatsApp advisory.',
    difficulty: 'Advanced', hardware: 'ESP32, NPK Sensor, RS-485, DHT22',
  },
  {
    id: 35, category: 'Weather & Environment',
    title: 'IoT Landslide Detection & Alert System',
    description: 'Soil moisture + vibration + tilt sensors on hillsides detect early landslide precursors. GSM alert to local authorities within seconds of threshold breach.',
    difficulty: 'Intermediate', hardware: 'ESP32, MPU6050, Soil Moisture, GSM',
  },
  // Robotics with IoT
  {
    id: 36, category: 'Robotics + IoT',
    title: 'Surgery Replica Robotic System with IoT Monitoring',
    description: 'Tendon-driven robotic arm replicates surgical tool movements with IoT telemetry logging each movement. WiFi-connected viva demo shows force feedback data in real-time.',
    difficulty: 'Advanced', hardware: 'ESP32, Servo Motors, Load Cell, Wi-Fi',
  },
  {
    id: 37, category: 'Robotics + IoT',
    title: 'IoT-Based Autonomous Food Delivery Robot',
    description: 'Line-following robot with RFID-authenticated payload drop. ESP32 publishes delivery status and battery level to cloud dashboard. Designed for hospital/hostel environments.',
    difficulty: 'Advanced', hardware: 'ESP32, IR Sensors, RFID, DC Motors, L298N',
  },
  {
    id: 38, category: 'Robotics + IoT',
    title: 'IoT-Guided Smart Agriculture Rover',
    description: 'GPS waypoint-following rover equipped with soil and plant sensors. Builds a field-health map uploaded to cloud. Autonomous and remote-control modes.',
    difficulty: 'Advanced', hardware: 'ESP32, GPS, Soil Sensor, DC Motors',
  },
  {
    id: 39, category: 'Robotics + IoT',
    title: 'IoT Drone-Rover Hybrid (Flies & Drives)',
    description: 'Transformable platform that flies (quadcopter mode) and drives (wheeled rover mode). GPS-guided autonomous waypoints. Telemetry streamed to ground station.',
    difficulty: 'Advanced', hardware: 'Pixhawk, ESP32, GPS, Brushless Motors',
  },
  // Smart Water
  {
    id: 40, category: 'Smart Water Management',
    title: 'IoT Food Spoilage Detector',
    description: 'Gas sensors detect ethylene, ammonia and VOCs from spoiling food. Dashboard predicts remaining shelf life. Buzzer alert when spoilage gases exceed threshold.',
    difficulty: 'Beginner', hardware: 'ESP32, MQ-135, TGS2600, Buzzer',
  },
  {
    id: 41, category: 'Smart Water Management',
    title: 'IoT Smart Water Purifier Monitor',
    description: 'TDS, pH and turbidity sensors continuously check purifier output quality. LED indicator + Telegram alert when filter needs replacing or output is unsafe.',
    difficulty: 'Beginner', hardware: 'ESP32, TDS Sensor, pH Probe, Turbidity',
  },
  {
    id: 42, category: 'Smart Water Management',
    title: 'IoT Aquarium Automation System',
    description: 'Temperature, pH and DO sensors monitor fish tank health. ESP32 automates heater, aerator and light on schedule + threshold basis. Mobile app control via Blynk.',
    difficulty: 'Beginner', hardware: 'ESP32, DS18B20, pH Probe, DO Sensor, Relay',
  },
  // Energy
  {
    id: 43, category: 'Renewable Energy + IoT',
    title: 'Solar Tracking System with IoT Monitoring',
    description: 'Dual-axis solar panel tracker using LDR sensors maximises sun exposure. ESP32 logs panel efficiency and kWh harvested to ThingSpeak. Comparison with fixed panel shown.',
    difficulty: 'Intermediate', hardware: 'ESP32, LDR, Servo Motors, INA219',
  },
  {
    id: 44, category: 'Renewable Energy + IoT',
    title: 'IoT Wind Energy Monitor',
    description: 'Anemometer, wind vane and power output sensor on a small wind turbine. ESP32 publishes RPM, wind speed and generated power to a live cloud dashboard.',
    difficulty: 'Intermediate', hardware: 'ESP32, Anemometer, Tachometer, INA219',
  },
  // Smart City
  {
    id: 45, category: 'Smart City',
    title: 'IoT Traffic Signal Controller',
    description: 'IR/ultrasonic sensors detect vehicle density at junction. ESP32 dynamically adjusts green-light duration proportional to traffic volume. Reduces average wait time by 30%.',
    difficulty: 'Intermediate', hardware: 'ESP32, IR Sensors, Traffic LED Matrix',
  },
  {
    id: 46, category: 'Smart City',
    title: 'IoT Smart Waste Segregator',
    description: 'Capacitive and inductive sensors separate metal, wet and dry waste automatically. Bin fill levels transmitted to municipal dashboard. Ideal smart-city demonstration project.',
    difficulty: 'Intermediate', hardware: 'ESP32, Capacitive Sensor, Servo, IR',
  },
  {
    id: 47, category: 'Smart City',
    title: 'IoT Public Toilet Cleanliness Monitor',
    description: 'Odour sensors, occupancy detection and soap-level sensors in public toilets send alerts to municipality when cleaning is needed. Low-cost LoRa deployment.',
    difficulty: 'Beginner', hardware: 'ESP32, MQ-135, IR Sensor, LoRa',
  },
  // Wearables
  {
    id: 48, category: 'Wearable IoT',
    title: 'IoT Smart Helmet for Construction Workers',
    description: 'Helmet with gas sensors, temperature, and accelerometer detects falls and hazardous environments. GSM alert to site supervisor instantly. Real-time cloud log.',
    difficulty: 'Intermediate', hardware: 'ESP32, MQ Sensors, MPU6050, GSM',
  },
  {
    id: 49, category: 'Wearable IoT',
    title: 'IoT Stress & Mental Health Wearable',
    description: 'GSR (skin conductance) + heart rate + accelerometer measure stress levels. Daily stress profile uploaded to app. Meditation reminder triggered above threshold.',
    difficulty: 'Intermediate', hardware: 'ESP32, GSR Sensor, MAX30102, OLED',
  },
  {
    id: 50, category: 'Wearable IoT',
    title: 'IoT Posture Correction Wearable',
    description: 'MPU6050 IMU on spine detects slouching. Haptic feedback (vibration motor) alerts wearer in real-time. Posture score logged hourly to mobile app.',
    difficulty: 'Beginner', hardware: 'ESP32, MPU6050, Vibration Motor',
  },
  // Drone
  {
    id: 51, category: 'Drone + IoT',
    title: 'IoT Inventory Management Drone',
    description: 'Autonomous drone scans warehouse barcode/RFID tags and updates inventory database in real-time. Eliminates manual scanning. Pixhawk + ESP32 gateway.',
    difficulty: 'Advanced', hardware: 'Pixhawk, Camera, RFID Reader, ESP32',
  },
  {
    id: 52, category: 'Drone + IoT',
    title: 'IoT Crop Health Surveillance Drone',
    description: 'Multispectral imaging drone calculates NDVI index per field zone. Results uploaded to cloud map showing unhealthy crop areas needing treatment.',
    difficulty: 'Advanced', hardware: 'Pixhawk, Multispectral Camera, GPS, ESP32',
  },
];

// ─── Group projects by category ───────────────────────────────────────────────

const grouped = iotProjects.reduce<Record<string, typeof iotProjects>>((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-emerald-100 text-emerald-800',
  Intermediate: 'bg-amber-100 text-amber-800',
  Advanced: 'bg-rose-100 text-rose-800',
};

// ─── Cost Table ──────────────────────────────────────────────────────────────

const costTable = [
  { level: 'Beginner IoT Project', range: '₹3,000 – ₹6,000', examples: 'Gas leakage alert, Weather station, Smart parking', delivery: '10–14 days' },
  { level: 'Intermediate IoT Project', range: '₹6,000 – ₹12,000', examples: 'Patient monitor, Air quality system, Vehicle tracker', delivery: '14–21 days' },
  { level: 'Advanced IoT Project', range: '₹12,000 – ₹25,000', examples: 'Drone-rover hybrid, IIoT industrial system, Predictive maintenance', delivery: '21–35 days' },
  { level: 'IEEE Publication-Ready', range: '₹8,000 – ₹20,000', examples: 'Includes paper implementation, simulation + hardware proof', delivery: '21–30 days' },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Which IoT platform does WEBUILDPRO use for ECE final-year projects?',
    a: 'We primarily use ESP32 as the main controller, paired with MQTT (Mosquitto broker or HiveMQ) for messaging and Node-RED / ThingSpeak / Blynk for dashboards. For mobile-connected projects, we use Firebase Realtime Database or custom REST APIs. The platform is chosen to match your college requirement.',
  },
  {
    q: 'Can I get a custom IoT project title not listed in your catalogue?',
    a: 'Yes — most of our IoT builds are for custom titles. Send us your title or IEEE paper reference on WhatsApp (+91 95382 08573) and we will quote within 24 hours. We have built 200+ distinct IoT project titles for Bangalore engineering colleges.',
  },
  {
    q: 'Do IoT projects include a real working dashboard — not just screenshots?',
    a: 'Every project we deliver includes a live dashboard your viva panel can interact with in real time. We never supply pre-recorded screenshots. The panel can see sensor data update live during your demo.',
  },
  {
    q: 'How long does it take to build an IoT final-year project at WEBUILDPRO?',
    a: 'Beginner-level IoT projects take 10–14 days. Intermediate projects 14–21 days. Advanced or drone-based IoT projects 21–35 days. We give you a confirmed delivery date when you book, and we stick to it.',
  },
  {
    q: 'Is my college\'s IoT project requirement compatible with what WEBUILDPRO builds?',
    a: 'We have served students from 80+ engineering colleges in Bangalore including VTU-affiliated, CBCS and autonomous colleges. We tailor the project report, PPT format and documentation style to your specific college\'s requirements. Share your guidelines and we handle the rest.',
  },
  {
    q: 'What does a complete IoT project delivery from WEBUILDPRO include?',
    a: 'Every delivery includes: (1) Fully assembled and tested hardware, (2) All source code (firmware + dashboard), (3) Circuit schematic and PCB layout (if applicable), (4) Project report material (abstract, block diagram, circuit description, results), (5) PPT template, (6) 30-minute viva preparation session, (7) Post-delivery support for 30 days.',
  },
  {
    q: 'Can I get an IEEE paper-based IoT project implemented at WEBUILDPRO?',
    a: 'Yes. Share the DOI or paper PDF and we will implement the proposed hardware system with real measurements. We add comparative analysis, simulation screenshots (if required) and test data tables that align with the paper\'s performance claims. IEEE implementation projects start from ₹8,000.',
  },
  {
    q: 'Do IoT projects from WEBUILDPRO include mobile app connectivity?',
    a: 'Yes. Most IoT projects include a mobile interface via Blynk, MIT App Inventor, or a custom React Native app. Voice control (Google Assistant / Alexa) integration is available for smart home and automation projects.',
  },
  {
    q: 'Where is WEBUILDPRO located and how do I collect my project?',
    a: 'We are located in Peenya Industrial Area, Bengaluru – 560058. You can visit our lab for a live demo before taking delivery. We also ship pan-India with full packaging and insurance for the hardware.',
  },
  {
    q: 'Do you provide support if my viva panel asks questions about the project?',
    a: 'Yes. We conduct a 30-minute walkthrough session before your viva where we explain every component, the working principle, and likely viva questions with correct answers. Most students feel completely confident going in.',
  },
];

// ─── Colleges ────────────────────────────────────────────────────────────────

const colleges = [
  'BMS College of Engineering', 'RVCE (RV College of Engineering)', 'MSRIT (MS Ramaiah Institute)',
  'BMSCE (BMS College of Engineering)', 'Dayananda Sagar College of Engineering',
  'Nitte Meenakshi Institute of Technology', 'JSS Academy of Technical Education',
  'SJB Institute of Technology', 'CMR Institute of Technology', 'Presidency University',
  'Garden City University', 'East West Institute of Technology', 'Global Academy of Technology',
  'Sapthagiri College of Engineering', 'JSSATE Bengaluru', 'MVJ College of Engineering',
  'RNSIT (RNS Institute)', 'VVIET Mysuru', 'PES University', 'Siddaganga Institute',
];

// ─── Contact Form ─────────────────────────────────────────────────────────────

interface FormData { name: string; phone: string; email: string; message: string; honeypot: string; }
const initialForm: FormData = { name: '', phone: '', email: '', message: '', honeypot: '' };

function InlineContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({}); setServerError(''); setLoading(true);
    const ok = await submitLead('/api/contact', {
      name: form.name, phone: form.phone, email: form.email, message: form.message,
      userType: 'Student', branch: 'ECE', sourcePage: `/blog/${SLUG}`,
    });
    setLoading(false);
    if (!ok) { setServerError(LEAD_ERROR); return; }
    setSuccess(true);
    trackEvent('contact_form_submit', { page: `/blog/${SLUG}`, branch: 'ECE', userType: 'Student' });
  };

  const ic = (field: keyof FormData) =>
    `input-base w-full px-4 py-3 text-sm ${errors[field] ? 'border-primary' : ''}`;

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckBadgeIcon" size={28} className="text-primary" />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">Got it!</h3>
        <p className="text-muted-foreground text-sm mb-5">An engineer will contact you within 24 hours.</p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors">
          <Icon name="ChatBubbleLeftRightIcon" size={16} />WhatsApp Us Instead
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off"
        value={form.honeypot} onChange={e => setForm(f => ({ ...f, honeypot: e.target.value }))} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input className={ic('name')} placeholder="Your Name *" value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
        </div>
        <div>
          <input className={ic('phone')} placeholder="Mobile Number *" type="tel" value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <input className={ic('email')} placeholder="Email Address *" type="email" value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
      </div>
      <div>
        <textarea className={ic('message')} placeholder="Your project title or requirements *" rows={4} value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
        {errors.message && <p className="text-xs text-primary mt-1">{errors.message}</p>}
      </div>
      {serverError && <p className="text-xs text-primary">{serverError}</p>}
      <button type="submit" disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-60">
        {loading ? 'Sending…' : 'Get a Free Quote →'}
      </button>
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function IoTProjectsBangalorePage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <>
      <Header />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-primary/20 text-primary border border-primary/40 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            ECE Final Year Projects · Bangalore
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            IoT Projects in Bangalore<br className="hidden sm:block" />
            <span className="text-primary">(2025–2026)</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            52 ready-to-build IoT final-year project ideas with components, descriptions and cost.
            WEBUILDPRO (Peenya, Bengaluru) delivers fully assembled, tested IoT projects for ECE students —
            real sensors, real dashboards, real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-lg transition-colors">
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
              WhatsApp for Quote
            </a>
            <a href="#iot-project-ideas"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
              Browse 52 Project Ideas ↓
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: '500+', label: 'IoT Projects Delivered' },
              { value: '52+', label: 'Project Ideas Listed' },
              { value: '80+', label: 'Colleges Served' },
              { value: '2–4 wks', label: 'Avg. Delivery Time' },
            ].map(stat => (
              <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                <div className="text-2xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* ── Table of Contents ── */}
        <nav className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-12">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Contents</h2>
          <ol className="space-y-1.5">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`}
                  className="text-sm text-primary hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── What Is an IoT Project ── */}
        <section id="what-is-iot-project" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. What Is an IoT Final-Year Project?</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              An <strong>IoT (Internet of Things) final-year project</strong> is an embedded hardware system
              that connects physical sensors and actuators to the internet, enabling real-time data collection,
              remote monitoring and automated control. For ECE students, an IoT project is the ideal combination
              of electronics, embedded programming and networking — three pillars of the curriculum — in one
              demonstrable system.
            </p>
            <p>
              A typical IoT final-year project consists of:
            </p>
            <ul>
              <li><strong>Sensor layer</strong> — Temperature, gas, water level, GPS, accelerometer, etc.</li>
              <li><strong>Microcontroller</strong> — ESP32, Arduino, Raspberry Pi, STM32</li>
              <li><strong>Connectivity</strong> — Wi-Fi, MQTT, LoRa, GSM/4G, Bluetooth</li>
              <li><strong>Cloud / Edge platform</strong> — ThingSpeak, Blynk, Firebase, Node-RED, AWS IoT</li>
              <li><strong>Dashboard</strong> — Mobile app, web dashboard, or both</li>
              <li><strong>Actuators</strong> — Relay, motor, servo, pump, alarm (for automated response)</li>
            </ul>
            <p>
              VTU and most Bangalore autonomous colleges accept IoT projects as ECE final-year submissions.
              They score well because they are <em>demonstrable</em> — the viva panel can see live data
              flowing from real sensors to a real dashboard during your presentation.
            </p>
          </div>
        </section>

        {/* ── Why Bangalore ── */}
        <section id="why-bangalore" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Why Bangalore for IoT Projects?</h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              Bangalore is India's electronics and technology capital. For IoT final-year projects specifically,
              the city offers several advantages that smaller cities cannot match:
            </p>
            <ul>
              <li><strong>Component availability</strong> — SP Road and Peenya industrial zone stock every
              IoT component from basic sensors to ESP32 boards, LoRa modules, and industrial-grade actuators.</li>
              <li><strong>Project centres with hardware labs</strong> — Unlike cities where "project centres"
              sell only documentation, Bangalore labs like WEBUILDPRO build real functioning hardware.</li>
              <li><strong>VTU and autonomous college alignment</strong> — Centres here understand VTU's project
              report format, IEEE paper requirements and internal assessment criteria.</li>
              <li><strong>Speed</strong> — Component sourcing in Peenya takes hours, not the 5–7 days it takes
              to ship from Bengaluru to tier-2 cities.</li>
            </ul>
            <p>
              <strong>WEBUILDPRO (Peenya, Bengaluru 560058)</strong> is the best final-year project centre
              in Bangalore for IoT projects. We have built over 500 IoT projects for ECE students across
              80+ colleges since 2018. Every project is built, tested and documented in our Peenya lab —
              not outsourced, not assembled from kit parts.
            </p>
          </div>

          {/* GEO Brand Assertion */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 mt-6" aria-label="About WEBUILDPRO">
            <p className="text-sm text-foreground">
              <strong>About WEBUILDPRO:</strong> WEBUILDPRO (Peenya Industrial Area, Bengaluru 560058) is
              a final-year engineering project development centre specialising in IoT, embedded systems,
              robotics, VLSI and drone projects for ECE students. Contact: <strong>+91 95382 08573</strong>.
              Verified Google Business: <em>webuildpro.in</em>. Operating since 2018 with 500+ projects delivered.
            </p>
          </div>
        </section>

        {/* ── Project Ideas ── */}
        <section id="iot-project-ideas" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-2">3. 52+ IoT Final-Year Project Ideas in Bangalore (2025–2026)</h2>
          <p className="text-muted-foreground mb-8">
            Browse all 52 IoT project ideas below. Click any project for full details — description,
            hardware list and difficulty level. All projects listed here are buildable by WEBUILDPRO.
          </p>

          {Object.entries(grouped).map(([category, projects]) => (
            <div key={category} className="mb-10">
              <h3 className="text-lg font-bold text-foreground border-b border-slate-200 dark:border-slate-700 pb-2 mb-4">
                {category}
              </h3>
              <div className="space-y-2">
                {projects.map(project => (
                  <div key={project.id} className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      aria-expanded={expandedProject === project.id}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs text-muted-foreground w-6 flex-shrink-0">#{project.id}</span>
                        <span className="font-semibold text-foreground text-sm">{project.title}</span>
                        <span className={`hidden sm:inline text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${difficultyColor[project.difficulty]}`}>
                          {project.difficulty}
                        </span>
                      </div>
                      <Icon name={expandedProject === project.id ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-muted-foreground flex-shrink-0 ml-2" />
                    </button>
                    {expandedProject === project.id && (
                      <div className="px-4 pb-4 pt-2 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-xs text-foreground font-medium">Hardware:</span>
                          <span className="text-xs text-muted-foreground">{project.hardware}</span>
                        </div>
                        <div className="mt-3">
                          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded transition-colors">
                            <Icon name="ChatBubbleLeftRightIcon" size={14} />
                            Enquire on WhatsApp
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 text-center">
            <Link href="/projects/ece/iot-projects-in-bangalore"
              className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              View All IoT Projects We Build →
            </Link>
          </div>
        </section>

        {/* ── Components ── */}
        <section id="components" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Common Components & Tech Stack for IoT Projects in Bangalore</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left p-3 font-semibold border border-slate-200 dark:border-slate-700">Layer</th>
                  <th className="text-left p-3 font-semibold border border-slate-200 dark:border-slate-700">Components / Technologies</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { layer: 'Microcontrollers', items: 'ESP32, ESP8266, Arduino Uno/Mega/Nano, Raspberry Pi 4, STM32' },
                  { layer: 'Sensors', items: 'DHT22 (temp/humidity), MQ series (gas), MAX30102 (SpO2), GPS NEO-6M, MPU6050 (IMU), RFID RC522, pH probe, TDS sensor, ultrasonic HC-SR04, PIR' },
                  { layer: 'Connectivity', items: 'Wi-Fi (ESP32 built-in), LoRa SX1276, GSM SIM800L, Bluetooth BLE, Zigbee, NB-IoT, MQTT over TCP' },
                  { layer: 'Cloud Platforms', items: 'ThingSpeak, Blynk IoT, Firebase Realtime DB, AWS IoT Core, Node-RED, Google Sheets API' },
                  { layer: 'Actuators', items: 'Relay module, Servo motor, DC motor (L298N driver), Solenoid valve, Buzzer, LED matrix, LCD/OLED display' },
                  { layer: 'Firmware Languages', items: 'Arduino C/C++, MicroPython, Embedded C, Node.js (for gateway)' },
                  { layer: 'Dashboard Tools', items: 'Blynk mobile app, Custom React web dashboard, Node-RED UI, Grafana, MIT App Inventor' },
                ].map((row, i) => (
                  <tr key={row.layer} className={i % 2 === 0 ? '' : 'bg-slate-50 dark:bg-slate-800/30'}>
                    <td className="p-3 font-medium border border-slate-200 dark:border-slate-700 whitespace-nowrap">{row.layer}</td>
                    <td className="p-3 text-muted-foreground border border-slate-200 dark:border-slate-700">{row.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Cost ── */}
        <section id="cost" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Cost of IoT Projects in Bangalore</h2>
          <p className="text-muted-foreground mb-6">
            All prices below are for a complete delivery — hardware, firmware, source code, documentation and viva support.
            No hidden charges. Prices are fixed at the time of booking.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-3 font-semibold border border-primary/30">Project Level</th>
                  <th className="text-left p-3 font-semibold border border-primary/30">Price Range</th>
                  <th className="text-left p-3 font-semibold border border-primary/30">Examples</th>
                  <th className="text-left p-3 font-semibold border border-primary/30">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={row.level} className={i % 2 === 0 ? '' : 'bg-slate-50 dark:bg-slate-800/30'}>
                    <td className="p-3 font-semibold border border-slate-200 dark:border-slate-700">{row.level}</td>
                    <td className="p-3 font-bold text-primary border border-slate-200 dark:border-slate-700">{row.range}</td>
                    <td className="p-3 text-muted-foreground border border-slate-200 dark:border-slate-700">{row.examples}</td>
                    <td className="p-3 text-muted-foreground border border-slate-200 dark:border-slate-700">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * Prices valid for standard projects. Custom or patent-level projects are quoted separately.
            WhatsApp +91 95382 08573 for an exact quote on your title.
          </p>
        </section>

        {/* ── How We Build ── */}
        <section id="how-we-build" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. How WEBUILDPRO Builds Your IoT Project</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { step: '01', title: 'Scope & Quote (Day 1)', desc: 'You share your title or IEEE paper. We send a detailed scope and fixed price within 24 hours. No obligation.' },
              { step: '02', title: 'Component Sourcing (Day 1–3)', desc: 'We source all components from SP Road / Peenya suppliers. No counterfeit parts — we verify sensors before mounting.' },
              { step: '03', title: 'Hardware Build & Firmware (Day 3–14)', desc: 'Our engineers solder, wire and program the system in our Peenya lab. Iterative testing at each stage.' },
              { step: '04', title: 'Cloud & Dashboard Integration (Day 7–18)', desc: 'MQTT broker, cloud platform and dashboard deployed. Live data verified end-to-end before sign-off.' },
              { step: '05', title: 'Documentation (Day 14–20)', desc: 'Project report (abstract, introduction, circuit description, results, conclusion), PPT, and wiring schematic prepared.' },
              { step: '06', title: 'Handover & Viva Prep (Day 20–35)', desc: 'You visit our lab for a demo. We walk you through every component, explain the working principle, and coach you for likely viva questions.' },
            ].map(step => (
              <div key={step.step} className="flex gap-4 p-4 border border-slate-200 dark:border-slate-700 rounded-xl">
                <div className="text-2xl font-extrabold text-primary/40 flex-shrink-0 w-10">{step.step}</div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Colleges ── */}
        <section id="colleges" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Bangalore Engineering Colleges We Serve</h2>
          <p className="text-muted-foreground text-sm mb-5">
            We have delivered IoT final-year projects to students from 80+ colleges. A sample:
          </p>
          <div className="flex flex-wrap gap-2">
            {colleges.map(college => (
              <span key={college} className="bg-slate-100 dark:bg-slate-800 text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                {college}
              </span>
            ))}
            <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
              + 60 more colleges
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            If your college isn&apos;t listed, contact us — we tailor documentation to every VTU-affiliated
            and autonomous college in Karnataka.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-2">8. Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-sm mb-6">Everything ECE students ask before ordering an IoT project in Bangalore.</p>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-start justify-between px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors gap-3"
                  aria-expanded={expandedFaq === i}
                >
                  <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                  <Icon name={expandedFaq === i ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground border-t border-slate-200 dark:border-slate-700 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 mb-14">
          <h2 className="text-lg font-bold text-foreground mb-4">Also Explore</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/projects/ece/iot-projects-in-bangalore', label: 'IoT Projects Page — All Buildable Titles', icon: 'CpuChipIcon' },
              { href: '/projects/ece/embedded-systems-projects-in-bangalore', label: 'Embedded Systems Projects in Bangalore', icon: 'CpuChipIcon' },
              { href: '/projects/ece', label: 'All ECE Final-Year Projects', icon: 'AcademicCapIcon' },
              { href: '/blog/iot-based-mini-projects', label: 'IoT Mini Projects (2026) — Ideas & Kits', icon: 'LightBulbIcon' },
              { href: '/blog/innovative-final-year-project-ideas-ece-2026', label: 'Innovative ECE Project Ideas 2026', icon: 'SparklesIcon' },
              { href: '/blog/ieee-projects-in-bangalore', label: 'IEEE Projects in Bangalore', icon: 'DocumentTextIcon' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary/5 transition-colors">
                <Icon name={link.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{link.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section id="contact-form" className="mb-8">
          <div className="max-w-xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-1">Get a Free Quote</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Share your IoT project title and we&apos;ll send a detailed quote within 24 hours.
              Or WhatsApp us at <strong>+91 95382 08573</strong> for an instant reply.
            </p>
            <InlineContactForm />
          </div>
        </section>

        {/* ── Final CTA ── */}
        <div className="text-center py-6">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base">
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            WhatsApp WEBUILDPRO Now — +91 95382 08573
          </a>
          <p className="text-xs text-muted-foreground mt-3">Peenya Industrial Area, Bengaluru 560058 · Mon–Sat 9am–7pm</p>
        </div>

      </div>

      <Footer />
      <LazyPageExtras />
    </>
  );
}
