// Extra, page-specific depth for each /projects/<branch>/<sub> page: tools, learning outcomes,
// viva focus and two additional FAQs. Keyed by `${branch}/${slug}`.

export interface SubExtra {
  tech: string[];
  learn: string[];
  viva: string[];
  faqs: { q: string; a: string }[];
}

export const subExtras: Record<string, SubExtra> = {
  // ───────────────────────────── CSE ─────────────────────────────
  'cse/machine-learning-projects-in-bangalore': {
    tech: ['Python', 'Scikit-learn', 'TensorFlow or PyTorch', 'Pandas and NumPy', 'OpenCV', 'Jupyter and Google Colab', 'Flask or Streamlit for the interface'],
    learn: ['Cleaning data and splitting it into train, validation and test sets', 'Choosing a model and tuning its hyperparameters', 'Reading accuracy, precision, recall and the confusion matrix', 'Wrapping a trained model in a simple web or desktop interface'],
    viva: ['Why you picked this algorithm over the alternatives', 'How you avoided overfitting and how you know the accuracy is honest', 'What the dataset contains, where it came from and how you balanced it'],
    faqs: [
      { q: 'Which ML project is best for a final year CSE student?', a: 'Pick one with a dataset you understand and a result you can show: crop or medical image classification, fake news detection or a recommender. A smaller project you can explain fully beats a complex one you cannot.' },
      { q: 'Do I need a GPU for a machine learning project?', a: 'Not for most. Tabular and text projects run on a laptop. For image models, Google Colab gives free GPU time, and transfer learning keeps training short.' },
    ],
  },
  'cse/ai-projects-in-bangalore': {
    tech: ['Python', 'OpenCV and MediaPipe', 'Hugging Face Transformers', 'LangChain or LlamaIndex for RAG', 'A vector store such as FAISS or Chroma', 'Streamlit or Flask', 'Speech libraries for voice input'],
    learn: ['How embeddings and retrieval let a chatbot answer from your own documents', 'Running real-time inference on a camera or microphone feed', 'Evaluating an AI system beyond a single demo', 'Handling failure cases such as no face found or low-confidence answers'],
    viva: ['The difference between the model, the retrieval step and the interface', 'How the system behaves when the input is outside its training data', 'Which parts use a pre-trained model and which you built yourself'],
    faqs: [
      { q: 'Can I use a pre-trained model in my AI project?', a: 'Yes, and most real systems do. Say clearly what is pre-trained, then show your own contribution: the data pipeline, fine-tuning, interface or evaluation.' },
      { q: 'Is an AI chatbot project too common?', a: 'A generic chatbot is common. One that answers from a specific document set with sources, tested on real questions, is not. The data and evaluation make it yours.' },
    ],
  },
  'cse/data-science-projects-in-bangalore': {
    tech: ['Python', 'Pandas and NumPy', 'Matplotlib, Seaborn and Plotly', 'Scikit-learn', 'Statsmodels or Prophet for time series', 'SQL', 'Power BI or Streamlit for dashboards'],
    learn: ['Exploratory data analysis and cleaning messy real-world data', 'Feature engineering and picking the right evaluation metric', 'Time-series forecasting versus classification problems', 'Presenting findings in a dashboard a non-technical person can use'],
    viva: ['How you handled missing values and outliers', 'Why you chose that metric, for example RMSE or F1', 'What business decision your result would change'],
    faqs: [
      { q: 'What is the difference between a data science and a machine learning project?', a: 'A data science project covers the whole path: collecting and cleaning data, analysis, modelling and communicating results. An ML project can focus mainly on building and tuning the model.' },
      { q: 'Where do I get datasets for a data science project?', a: 'Kaggle, the UCI repository and government open-data portals are the usual sources. Pick one with a clear question and enough rows, and cite it in your report.' },
    ],
  },
  'cse/blockchain-projects-in-bangalore': {
    tech: ['Solidity', 'Ethereum test networks such as Sepolia', 'Hardhat or Truffle', 'MetaMask', 'Web3.js or Ethers.js', 'React for the front end', 'IPFS for file storage'],
    learn: ['Writing and testing a smart contract', 'Why records on a chain cannot be quietly edited', 'Gas costs and why large files are stored off-chain', 'Connecting a wallet to a web front end'],
    viva: ['Why this problem needs a blockchain and not a normal database', 'What is stored on-chain and what is stored off-chain', 'How you tested the contract and handled failed transactions'],
    faqs: [
      { q: 'Do blockchain projects need real cryptocurrency?', a: 'No. Development and demos run on test networks with free test coins, so there is no real money involved.' },
      { q: 'Is blockchain a good choice for a final year project?', a: 'It is a good choice when the problem is about trust between parties, such as certificates, land records or supply chains. Be ready to explain why a database would not be enough.' },
    ],
  },
  'cse/iot-projects-in-bangalore': {
    tech: ['ESP32 or NodeMCU', 'Arduino IDE or PlatformIO', 'MQTT', 'Firebase or ThingSpeak', 'Blynk or a custom React dashboard', 'Python or Node.js back end', 'Common sensors: DHT, ultrasonic, RFID, PIR'],
    learn: ['Reading sensors and sending data to the cloud over Wi-Fi', 'How MQTT and HTTP differ for device messaging', 'Building a live dashboard and alert logic', 'Handling a dropped connection without losing data'],
    viva: ['Why you chose MQTT or HTTP and what each costs in power and complexity', 'What happens to your data when Wi-Fi drops', 'How the device is secured against someone else controlling it'],
    faqs: [
      { q: 'How is a CSE IoT project different from an ECE one?', a: 'CSE IoT projects put more weight on the software side: the cloud back end, dashboard, data analysis or prediction. ECE projects put more weight on the circuit and hardware design.' },
      { q: 'Do I need to build hardware for a CSE IoT project?', a: 'Usually yes, a small working device makes the demo convincing. Keep the hardware simple, such as an ESP32 with a sensor, and spend your effort on the software layer.' },
    ],
  },
  'cse/python-projects-in-bangalore': {
    tech: ['Python 3', 'Flask or Django', 'SQLite or PostgreSQL', 'BeautifulSoup and Requests', 'Pandas', 'Tkinter or Streamlit', 'smtplib for automation'],
    learn: ['Structuring a Python project into modules instead of one long script', 'Building and securing a small web app', 'Scraping and cleaning data responsibly', 'Scheduling and automating repetitive tasks'],
    viva: ['Why you chose Flask or Django', 'How you structured the code and handled errors', 'How you would deploy it and keep user data safe'],
    faqs: [
      { q: 'Is a Python project enough for final year?', a: 'Yes, if it solves a real problem and has depth: a database, user login, analytics or automation. A basic script is better suited to a mini project.' },
      { q: 'Flask or Django for my project?', a: 'Flask is lighter and easier to explain for small apps. Django gives you login, admin and an ORM out of the box, which saves time on larger systems.' },
    ],
  },
  'cse/image-processing-projects-in-bangalore': {
    tech: ['Python', 'OpenCV', 'TensorFlow or PyTorch', 'YOLO for object detection', 'Tesseract or EasyOCR', 'NumPy', 'Flask or Tkinter for the interface'],
    learn: ['Preprocessing images: resizing, thresholding, filtering and edge detection', 'Detecting objects versus classifying whole images', 'Reading text from images with OCR', 'Why lighting and camera angle change accuracy'],
    viva: ['Which preprocessing steps you used and why', 'How you measured detection accuracy', 'What breaks the system, for example poor light or motion blur'],
    faqs: [
      { q: 'Can image processing projects run without a GPU?', a: 'Classic OpenCV projects run fine on a laptop CPU. Deep-learning detectors are slower on CPU but workable for a demo, and Colab can be used for training.' },
      { q: 'Number plate recognition: is it allowed for a college project?', a: 'Yes, as an academic project on your own test images or a public dataset. Do not run it on people in public places without permission.' },
    ],
  },
  'cse/cybersecurity-projects-in-bangalore': {
    tech: ['Python', 'Scapy', 'Scikit-learn', 'The cryptography library (AES, RSA)', 'Wireshark', 'Flask', 'Datasets such as NSL-KDD or CICIDS'],
    learn: ['How symmetric and asymmetric encryption differ in practice', 'Extracting features from network traffic or URLs', 'Why intrusion detection needs balanced data and careful evaluation', 'Basics of authentication, hashing and salting'],
    viva: ['Why you chose that encryption or detection method', 'How you tested it on safe data and what the false-positive rate was', 'What attacks your system does not defend against'],
    faqs: [
      { q: 'Are cybersecurity projects safe to run in college?', a: 'Yes, when you work on your own machines or a lab network and public datasets. Never test on networks or systems you do not own.' },
      { q: 'What is a good cybersecurity project for CSE?', a: 'Phishing detection, intrusion detection with ML and an encrypted file or password tool are all practical. They are easy to demo and rich in viva questions.' },
    ],
  },

  // ───────────────────────────── EEE ─────────────────────────────
  'eee/power-electronics-projects-in-bangalore': {
    tech: ['MOSFETs and IGBTs', 'Gate driver ICs', 'Inductors and transformers', 'Arduino or STM32 for PWM control', 'MATLAB/Simulink and Proteus for simulation', 'Oscilloscope and multimeter', 'Heat sinks and protection circuits'],
    learn: ['How PWM duty cycle sets output voltage in a converter', 'Choosing inductors, capacitors and switching frequency', 'Simulating before building to avoid blown components', 'Measuring efficiency and ripple on a real board'],
    viva: ['The working principle and waveform at each stage', 'How you selected component values', 'What protection you added and what the efficiency came out to'],
    faqs: [
      { q: 'Should I simulate the project before building it?', a: 'Yes. A MATLAB or Proteus simulation catches design mistakes cheaply and gives you waveforms for the report. Then show the hardware results next to the simulation.' },
      { q: 'Are power electronics projects dangerous?', a: 'Keep voltages low for a college build, use proper insulation and fuses, and never touch the circuit while it is powered. We build and test on safe voltage levels.' },
    ],
  },
  'eee/plc-automation-projects-in-bangalore': {
    tech: ['Siemens, Allen-Bradley or Delta PLC', 'Ladder logic programming', 'HMI or SCADA screens', 'Sensors: proximity, level, limit switches', 'Relays and contactors', 'Pneumatic or conveyor mock-ups', 'Modbus or MQTT for IIoT links'],
    learn: ['Writing ladder logic with timers, counters and interlocks', 'Wiring inputs and outputs safely to a PLC', 'Building an operator screen on an HMI', 'Adding emergency stop and fault handling'],
    viva: ['Walk through your ladder logic rung by rung', 'What each sensor does and how it is wired', 'How the system stops safely when something fails'],
    faqs: [
      { q: 'Which PLC brand is best for a student project?', a: 'Use whichever your college lab has. The logic transfers between brands, and examiners care more about your ladder design than the brand name.' },
      { q: 'Can I show a PLC project without industrial hardware?', a: 'Yes. A small trainer panel with a PLC, push buttons and indicator lamps, or a simulator, is enough for a clear demo.' },
    ],
  },
  'eee/ev-projects-in-bangalore': {
    tech: ['Li-ion cells and BMS ICs', 'Arduino, ESP32 or STM32', 'Current and voltage sensors', 'BLDC motor and controller', 'CAN bus basics', 'RFID for access', 'MATLAB for battery modelling'],
    learn: ['How a battery management system balances cells and protects them', 'Estimating state of charge from voltage and current', 'How regenerative braking returns energy to the battery', 'Charging safety: over-voltage, over-current and temperature limits'],
    viva: ['Why lithium cells need a BMS', 'How you estimate state of charge and how accurate it is', 'What protections trigger and at which thresholds'],
    faqs: [
      { q: 'Is it safe to build a battery project in college?', a: 'It is safe with proper protection and low pack voltages. Use a BMS, fuses and a fire-safe place for charging, and never leave a charging pack unattended.' },
      { q: 'What is a good EV project for EEE students?', a: 'A battery management system, a monitoring dashboard or a regenerative braking demo. All use real EV concepts and fit a student budget.' },
    ],
  },
  'eee/solar-energy-projects-in-bangalore': {
    tech: ['Solar panels and charge controllers', 'Arduino or ESP32', 'LDR sensors and servo or stepper motors for tracking', 'Voltage and current sensors', 'Buck and boost converters for MPPT', 'Lead-acid or Li-ion storage', 'ThingSpeak or Blynk for monitoring'],
    learn: ['How a solar panel’s IV curve sets the maximum power point', 'Implementing a perturb-and-observe MPPT algorithm', 'Why tracking raises energy yield and what it costs in power', 'Logging and visualising solar data'],
    viva: ['How MPPT finds the best operating point', 'How much extra energy tracking gave you in your measurements', 'How you sized the panel, battery and controller'],
    faqs: [
      { q: 'Does solar tracking really increase output?', a: 'Yes. A tracker keeps the panel facing the sun, and measured gains over a fixed panel are commonly a noticeable share of daily energy. Log both panels side by side so your own numbers are in the report.' },
      { q: 'Can I test a solar project indoors?', a: 'You can test the electronics with a lamp, but results are only meaningful in real sunlight. Plan the final measurements on a clear day.' },
    ],
  },
  'eee/motor-control-projects-in-bangalore': {
    tech: ['Arduino, STM32 or ESP32', 'H-bridge and ESC drivers', 'Encoders and hall sensors', 'PID control', 'Current sensors', 'MATLAB/Simulink', 'Variable frequency drive basics'],
    learn: ['Closed-loop speed control with PID and how to tune it', 'Reading speed from an encoder or hall sensor', 'How a VFD changes frequency and voltage together', 'Detecting overload and faults early'],
    viva: ['How you tuned the PID gains and what changed with each one', 'The difference between open-loop and closed-loop control', 'How the system protects the motor from overload'],
    faqs: [
      { q: 'What is the difference between a BLDC and a DC motor project?', a: 'A DC motor is simple to drive. A BLDC motor needs electronic commutation, so the controller design is the main work and the project shows more depth.' },
      { q: 'Do I need a real VFD for an induction motor project?', a: 'A commercial VFD is the easiest route for a demo. Building a small inverter-based drive is harder but scores higher if you can explain it.' },
    ],
  },

  // ───────────────────────────── Mechanical ─────────────────────────────
  'mechanical/automobile-projects-in-bangalore': {
    tech: ['Arduino or ESP32', 'Ultrasonic and IR sensors', 'Servo and DC motors', 'Hall-effect or optical speed sensors', 'SolidWorks or CATIA for design', 'Fabricated chassis and linkages', 'Load cells and flow sensors'],
    learn: ['How steering, braking and tyre systems work mechanically', 'Adding sensors and control logic to a mechanical system', 'Designing a test rig that gives repeatable measurements', 'Reading results and linking them to theory'],
    viva: ['The working principle with a labelled diagram', 'How you chose dimensions and materials', 'What your test results show compared with the theory'],
    faqs: [
      { q: 'Should an automobile project be a working model or a design study?', a: 'A working model or test rig is more convincing. Add a short design calculation and a CAD model so the report shows the engineering behind it.' },
      { q: 'Can I add electronics to a mechanical project?', a: 'Yes, and it usually helps. A sensor and microcontroller turn a simple mechanism into a mechatronics project with more marks.' },
    ],
  },
  'mechanical/hydraulics-pneumatics-projects-in-bangalore': {
    tech: ['Hydraulic cylinders and hand pumps', 'Pneumatic cylinders and compressors', 'Directional control valves', 'Pressure gauges and regulators', 'Fabricated mild-steel frames', 'Relay or Arduino control', 'Pascal’s law calculations'],
    learn: ['Pascal’s law and force multiplication in hydraulics', 'Selecting cylinder bore, stroke and pressure for a load', 'Reading and drawing a circuit with valves and actuators', 'Safe handling of pressurised systems'],
    viva: ['Calculate the force your cylinder produces at the working pressure', 'Why you chose hydraulics or pneumatics for this task', 'What safety devices the system has'],
    faqs: [
      { q: 'Hydraulic or pneumatic: which is easier to build?', a: 'Pneumatic systems are cleaner and simpler to set up. Hydraulic systems give much higher force but need leak-proof joints and more careful design.' },
      { q: 'Do I need design calculations for the report?', a: 'Yes. Show the force, pressure, cylinder size and factor of safety. Examiners ask for these in the viva.' },
    ],
  },
  'mechanical/robotics-mechatronics-projects-in-bangalore': {
    tech: ['Arduino, ESP32 or Raspberry Pi', 'Servo, stepper and DC motors', 'IR, ultrasonic and colour sensors', 'SolidWorks or Fusion 360', '3D printed or laser-cut parts', 'ROS basics', 'OpenCV for vision'],
    learn: ['Combining mechanical design, electronics and code in one system', 'Kinematics of an arm: reach, joint limits and repeatability', 'Sensor feedback and simple control loops', 'Debugging across hardware and software'],
    viva: ['How the mechanism turns motor motion into the required movement', 'How you calibrated the sensors and actuators', 'What limits the speed and accuracy of your system'],
    faqs: [
      { q: 'Is a robotics project harder than other mechanical projects?', a: 'It needs more integration work, but a focused scope such as a pick-and-place arm or a sorting conveyor stays manageable. Keep one clear task and make it reliable.' },
      { q: 'Do I need to know programming for mechatronics?', a: 'Basic Arduino programming is enough for most student builds. We explain the code so you can answer viva questions on it.' },
    ],
  },
  'mechanical/design-analysis-projects-in-bangalore': {
    tech: ['SolidWorks, CATIA or Fusion 360', 'ANSYS or Abaqus for FEA', 'ANSYS Fluent or OpenFOAM for CFD', 'MATLAB', 'Material property data', 'Mesh convergence checks', 'Hand calculations for validation'],
    learn: ['Setting up boundary conditions and loads correctly', 'Mesh quality and convergence studies', 'Validating a simulation against hand calculation', 'Reading stress, deformation and flow results'],
    viva: ['Why you chose those boundary conditions and that mesh size', 'How you validated the result', 'What you changed in the design after the analysis'],
    faqs: [
      { q: 'Is a simulation-only project accepted?', a: 'Many colleges accept it, but a validated simulation with a physical prototype or lab test scores better. Check your department’s rule first.' },
      { q: 'Which software should I learn for FEA and CFD?', a: 'ANSYS is the most common in Bangalore colleges and industry. Use whichever licence your college provides and learn the workflow well.' },
    ],
  },
  'mechanical/agricultural-projects-in-bangalore': {
    tech: ['12V solar panel and battery', 'DC pump and nozzles', 'Gearbox and chain drive', 'Arduino with soil moisture sensor', 'Fabricated frame and wheels', 'Seed metering mechanism', 'Basic fabrication tools'],
    learn: ['Designing machines for low cost and rugged field use', 'Torque, speed and gear ratio calculations', 'Metering seeds or fluid at a consistent rate', 'Testing a machine and recording field performance'],
    viva: ['How you calculated power and torque needs', 'How the metering is kept uniform', 'The cost per machine and who would use it'],
    faqs: [
      { q: 'Why are agricultural projects good for Bangalore students?', a: 'They have a clear real-world user, use simple fabrication, and give strong viva stories about cost and farmer benefit. Local farms can be a source of real feedback.' },
      { q: 'Should I add sensors to an agricultural machine?', a: 'A simple soil moisture or level sensor can add value, but only if it improves the machine. The mechanical design must remain the focus.' },
    ],
  },
  'mechanical/renewable-energy-projects-in-bangalore': {
    tech: ['Solar panels and tracking mechanism', 'Small VAWT blades and generator', 'Piezoelectric sensors', 'Dynamo or DC generator', 'Rack-and-pinion or gear train', 'Battery and charge controller', 'Voltage and current logging'],
    learn: ['Converting mechanical motion into electrical energy', 'Estimating realistic power output rather than ideal output', 'Energy storage and charge control basics', 'Logging output to build an honest results table'],
    viva: ['How much power it really produces and how you measured it', 'The energy conversion path and losses at each stage', 'Where this could be used practically'],
    faqs: [
      { q: 'How much power do footstep or speed-breaker projects generate?', a: 'Student prototypes produce small amounts, enough for LEDs or a phone charger over time. Report your measured values honestly and explain scale-up limits.' },
      { q: 'Solar or wind: which is better for a student project?', a: 'Solar is more predictable and easy to measure. A vertical-axis wind turbine shows more mechanical design but depends on wind availability.' },
    ],
  },

  // ───────────────────────────── Civil ─────────────────────────────
  'civil/structural-projects-in-bangalore': {
    tech: ['STAAD.Pro or ETABS', 'AutoCAD', 'IS 456 and IS 1893', 'Universal testing machine', 'Concrete mix design', 'Strain gauges', 'Scale models'],
    learn: ['Modelling loads and load combinations as per Indian Standards', 'Checking beam, column and slab design', 'Casting and testing specimens in the lab', 'Comparing software results with hand calculation'],
    viva: ['Which codes you followed and why', 'How you applied the loads and checked the result', 'What failed first in the test and why'],
    faqs: [
      { q: 'Do structural projects need lab testing?', a: 'A lab test makes the project much stronger. Pair a STAAD or ETABS model with a tested specimen and compare the results.' },
      { q: 'Which Indian Standards should I cite?', a: 'IS 456 for concrete design, IS 800 for steel, IS 875 for loads and IS 1893 for earthquake design are the usual ones. Cite the editions your department uses.' },
    ],
  },
  'civil/transportation-projects-in-bangalore': {
    tech: ['Traffic counters and survey forms', 'Excel or Python for analysis', 'AutoCAD Civil 3D', 'IRC codes', 'Arduino or sensors for signal systems', 'QGIS for mapping', 'Video-based vehicle counting'],
    learn: ['Collecting traffic volume, speed and delay data properly', 'Applying IRC guidelines to a design', 'Finding patterns such as peak hours and blackspots', 'Proposing and costing a practical fix'],
    viva: ['How long and when you surveyed and why that is enough', 'Which IRC clauses you used', 'What your recommendation would cost and change'],
    faqs: [
      { q: 'Do I need field data for a transportation project?', a: 'Yes. Real counts or surveys from a road near you make the project credible. Plan the survey days early and record the conditions.' },
      { q: 'Can I add IoT to a traffic project?', a: 'Yes, a sensor-based adaptive signal is a good bridge between civil and electronics. Keep the traffic analysis as the core.' },
    ],
  },
  'civil/geotechnical-projects-in-bangalore': {
    tech: ['Soil testing apparatus (sieve, Atterberg limits, Proctor)', 'Direct shear or triaxial test', 'CBR apparatus', 'GeoStudio or PLAXIS', 'IS 2720 test methods', 'Fly ash, lime or fibres as stabilisers', 'Excel for plotting'],
    learn: ['Classifying soil and reading its test results', 'How stabilisers change strength and plasticity', 'Computing bearing capacity and slope factor of safety', 'Presenting lab data in clear graphs'],
    viva: ['Which tests you ran and what each result means', 'How the stabiliser percentage was decided', 'How the lab result relates to field behaviour'],
    faqs: [
      { q: 'Do geotechnical projects need a soil testing lab?', a: 'Yes. Your college or a testing lab provides the apparatus. Book lab slots early because tests like triaxial and CBR take time.' },
      { q: 'Which stabiliser should I test?', a: 'Fly ash and lime are the most common and well documented. Test several percentages so you can show the trend and the best mix.' },
    ],
  },
  'civil/water-resources-projects-in-bangalore': {
    tech: ['HEC-RAS and EPANET', 'Flume or hydraulic bench', 'Rainfall and catchment data', 'Water quality kits (pH, turbidity, TDS)', 'AutoCAD', 'Drip irrigation components', 'Excel or Python for hydrology'],
    learn: ['Estimating runoff and sizing a rainwater harvesting system', 'Measuring open-channel flow and discharge', 'Interpreting water quality parameters', 'Designing a small hydraulic structure'],
    viva: ['How you estimated the catchment and storage size', 'Which standards you compared your water results with', 'How your design would work in a dry year'],
    faqs: [
      { q: 'Is rainwater harvesting a good project for Bangalore?', a: 'Yes. It is locally relevant, rules already encourage it, and you can base the design on real rainfall and roof area data.' },
      { q: 'What data do I need for a hydrology project?', a: 'Rainfall records, catchment area and land use. Cite the source of the rainfall data in your report.' },
    ],
  },
  'civil/environmental-projects-in-bangalore': {
    tech: ['Water and air quality test kits', 'IoT gas and dust sensors', 'Biological treatment units (STP, wetland)', 'AutoCAD', 'Energy audit tools', 'CPCB and BIS standards', 'Excel for analysis'],
    learn: ['Treatment stages and the role of each unit', 'Measuring BOD, COD, pH and solids before and after treatment', 'Reading air quality indices and their sources', 'Proposing low-cost fixes backed by measurements'],
    viva: ['Treatment efficiency you achieved and how you measured it', 'Which discharge standards you compared with', 'The cost and maintenance needs of your system'],
    faqs: [
      { q: 'Do environmental projects need before and after measurements?', a: 'Yes. Results before and after treatment or intervention are the strongest evidence and make the report convincing.' },
      { q: 'Can I build a small working treatment model?', a: 'A scaled model with sand, gravel and plants or a small aeration unit works well for demonstration. Test and report real water quality values.' },
    ],
  },
  'civil/construction-management-projects-in-bangalore': {
    tech: ['Revit or ArchiCAD for BIM', 'MS Project or Primavera', 'AutoCAD', 'Excel for estimating', 'IS 1200 measurement rules', 'Rate analysis data', 'Risk matrix templates'],
    learn: ['Building a 3D BIM model and extracting quantities', 'Creating a schedule with dependencies and the critical path', 'Estimating cost using rate analysis', 'Identifying and rating project risks'],
    viva: ['What the critical path is in your schedule and why', 'How quantities were taken off and checked', 'Which risks are most severe and your response to them'],
    faqs: [
      { q: 'Is a software-only construction management project acceptable?', a: 'Usually yes, since BIM, scheduling and estimating are software-based. Base it on a real or realistic building so the numbers are meaningful.' },
      { q: 'Which is better to learn: Revit or Primavera?', a: 'They do different jobs. Revit is for modelling and quantities, Primavera or MS Project for scheduling. Using both in one project is the strongest option.' },
    ],
  },

  // ───────────────────────────── ECE ─────────────────────────────
  'ece/iot-projects-in-bangalore': {
    tech: ['ESP32 and NodeMCU', 'Arduino IDE or PlatformIO', 'MQTT, HTTP and Blynk', 'Firebase or ThingSpeak', 'DHT, MQ, ultrasonic, PIR and soil sensors', 'LoRa or GSM for long range', 'Custom PCB basics'],
    learn: ['Reading sensors and calibrating them', 'Sending data to the cloud and showing it live', 'Setting alert thresholds and notifications', 'Powering a device reliably, including battery operation'],
    viva: ['Block diagram and data flow from sensor to dashboard', 'Why you chose that sensor, board and protocol', 'How you handled a dropped connection or a faulty reading'],
    faqs: [
      { q: 'Which IoT platform is easiest for a student project?', a: 'Blynk and ThingSpeak are quick to set up and give a clean dashboard. Firebase or MQTT with a custom dashboard shows more depth for a final year project.' },
      { q: 'How is an ECE IoT project judged?', a: 'Mainly on the working hardware, sensor accuracy and the live demo. A neat circuit, clear block diagram and a dashboard that updates in real time score well.' },
    ],
  },
  'ece/embedded-systems-projects-in-bangalore': {
    tech: ['Arduino, STM32 and ARM Cortex-M', '8051 and PIC microcontrollers', 'Embedded C', 'FreeRTOS basics', 'UART, I2C and SPI', 'Keil, STM32CubeIDE or MPLAB', 'Logic analyser and oscilloscope'],
    learn: ['Writing efficient embedded C and using interrupts and timers', 'Using UART, I2C and SPI to talk to peripherals', 'Debugging with a logic analyser or serial output', 'Why an RTOS helps when tasks compete for time'],
    viva: ['Why you chose this microcontroller and its key specifications', 'How interrupts and timers are used in your code', 'How the communication protocols work at signal level'],
    faqs: [
      { q: 'Arduino or STM32 for an embedded systems project?', a: 'Arduino is quick and easy to explain. STM32 shows stronger embedded skills and is closer to what companies use, but needs more setup time.' },
      { q: 'Do I need an RTOS in my project?', a: 'Not always. Use one when several tasks must run on schedule, such as sensing, display and communication together. Otherwise a clean super-loop is fine.' },
    ],
  },
  'ece/robotics-projects-in-bangalore': {
    tech: ['Arduino, ESP32 and Raspberry Pi', 'L298N or similar motor drivers', 'Servo and stepper motors', 'IR, ultrasonic and gyro sensors', 'PID control', 'OpenCV for vision', 'Bluetooth, RF and Wi-Fi control'],
    learn: ['Driving motors safely with a driver board and separate power', 'Line following and obstacle avoidance logic', 'Tuning a PID loop for smooth motion', 'Adding remote or autonomous control'],
    viva: ['How the robot senses and decides', 'How you powered motors and electronics without resets', 'How you tuned the control and what failed on the way'],
    faqs: [
      { q: 'What is the easiest robotics project to demo reliably?', a: 'A line follower or Bluetooth-controlled car is the safest. Make it consistent first, then add an extra feature such as obstacle avoidance.' },
      { q: 'Why does my robot reset when the motors start?', a: 'Motors draw current spikes that drop the supply. Power motors from a separate battery or regulator and add capacitors near the driver.' },
    ],
  },
  'ece/drone-projects-in-bangalore': {
    tech: ['Flight controller (Pixhawk, APM or similar)', 'Brushless motors and ESCs', 'LiPo batteries and chargers', 'Mission Planner or QGroundControl', 'GPS and telemetry modules', 'Camera and FPV gear', 'Frame and propeller selection'],
    learn: ['How thrust, weight and battery capacity decide flight time', 'Calibrating sensors and tuning a flight controller', 'Planning autonomous waypoint missions', 'Safe pre-flight checks and handling LiPo batteries'],
    viva: ['How you chose motors, propellers and battery for the payload', 'What the flight controller does and how it was tuned', 'What safety checks you ran and what the legal limits are'],
    faqs: [
      { q: 'Are there rules for flying a student drone in India?', a: 'Yes. Drone rules apply to flying, including restricted zones and registration for some categories. Test in a permitted open area and check the current rules before flying.' },
      { q: 'Can I show a drone project without flying it?', a: 'A bench demo of the flight controller, sensors and telemetry works if flying is not allowed, but a short permitted flight is far more convincing.' },
    ],
  },
  'ece/vlsi-projects-in-bangalore': {
    tech: ['Verilog and VHDL', 'Xilinx Vivado or ModelSim', 'Cadence or Synopsys tools if your college has them', 'FPGA boards (Basys, Nexys, Artix)', 'Testbenches and waveform viewers', 'Synthesis and timing reports', 'Logic gate and adder fundamentals'],
    learn: ['Writing synthesisable Verilog and testbenches', 'Reading area, power and timing reports', 'Pipelining and why it raises speed', 'Moving a design from simulation to an FPGA board'],
    viva: ['Explain the architecture and the data path', 'What the timing report says about your maximum frequency', 'How you verified the design with your testbench'],
    faqs: [
      { q: 'Do I need an FPGA board for a VLSI project?', a: 'Simulation and synthesis reports are enough for many colleges. An FPGA demo is a clear plus because it shows the design running in hardware.' },
      { q: 'Verilog or VHDL for my project?', a: 'Verilog is more common in industry and easier to start with. Use VHDL if your department or guide prefers it.' },
    ],
  },
  'ece/biomedical-projects-in-bangalore': {
    tech: ['Pulse, SpO2 and temperature sensors (MAX30100/30102, DS18B20)', 'ECG front-end modules', 'Arduino or ESP32', 'Signal filtering', 'OLED or LCD displays', 'GSM or cloud alerts', 'Calibration against a reference device'],
    learn: ['Acquiring and filtering weak biomedical signals', 'Converting sensor readings into meaningful units', 'Checking accuracy against a commercial device', 'Designing for safety and low power'],
    viva: ['How the sensor works and what noise affects it', 'How you checked accuracy against a reference', 'Why the project is a monitoring aid and not a diagnostic device'],
    faqs: [
      { q: 'Are student biomedical projects medically accurate?', a: 'They are prototypes for learning. Compare readings with a commercial device and state the error clearly. Say in the report that it is not a medical-grade diagnostic tool.' },
      { q: 'Can I test a biomedical project on people?', a: 'Use yourself or consenting classmates for non-invasive sensors only, follow your college’s rules, and keep all data private.' },
    ],
  },
  'ece/communication-projects-in-bangalore': {
    tech: ['LoRa, RF 433 MHz and Zigbee modules', 'GSM and GPS modules', 'Bluetooth and Wi-Fi', 'Li-Fi using LEDs and photodiodes', 'MATLAB or GNU Radio for modulation', 'Antenna basics', 'Spectrum analyser if available'],
    learn: ['How modulation, bit rate and range trade off', 'Setting up point-to-point and mesh links', 'Measuring range, signal strength and packet loss', 'Using GSM and GPS to send alerts and locations'],
    viva: ['Which modulation or protocol you used and why', 'How you measured range and error rate', 'What affects your link: distance, obstacles and interference'],
    faqs: [
      { q: 'Which wireless technology is best for a communication project?', a: 'LoRa is excellent for long range at low data rates, Wi-Fi and Bluetooth for short range and higher speed. Choose by the range and data needs of your use case.' },
      { q: 'Do I need a licence to use RF modules?', a: 'Low-power modules in licence-exempt bands such as 865–867 MHz (LoRa) and 2.4 GHz are the safe choice in India. Check the current rules before using 433 MHz modules or raising transmit power.' },
    ],
  },
};
