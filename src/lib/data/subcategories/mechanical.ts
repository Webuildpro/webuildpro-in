// lib/data/subcategories/mechanical.ts
// READY-TO-USE DATA FILE for Mechanical sub-category pages. Rocket only builds the template around it.
// Each entry -> a page at /projects/mechanical/[slug].

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface SubProject {
  title: string;
  abstract: string;
  difficulty: Difficulty;
  timeline: string;
}

export interface SubCategory {
  slug: string;
  branch: "mechanical";
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  projects: SubProject[];
  faqs: { q: string; a: string }[];
}

export const mechanicalSubCategories: SubCategory[] = [
  {
    slug: "automobile-projects-in-bangalore",
    branch: "mechanical",
    keyword: "Automobile Projects in Bangalore",
    metaTitle: "Automobile Projects in Bangalore | WEBUILDPRO",
    metaDescription: "Final year automobile projects in Bangalore for Mechanical. Fabricated working models with report & documentation. Online & offline delivery.",
    intro: "Looking for automobile projects in Bangalore for your final year? WEBUILDPRO fabricates working automobile engineering projects for Mechanical students in Bangalore — real, built-and-tested models, not just CAD renders. Automobile projects are a favourite because they combine mechanics, fabrication and often electronics, and they demonstrate well in vivas. Every project below is fabricated in our Bangalore workshop and delivered with fabrication drawings, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "Regenerative Braking Test Rig", abstract: "Demonstrates energy recovery during braking on a working rig, capturing and storing braking energy. Covers mechanical design, energy conversion and measurement.", difficulty: "Advanced", timeline: "3–4 weeks" },
      { title: "Automatic Tyre Inflation System", abstract: "Maintains tyre pressure automatically using a sensor and compressor mechanism. Demonstrates a practical automotive safety system.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Electronic Steering / Ackermann Mechanism Model", abstract: "A working model showing vehicle steering geometry and turning behaviour. Demonstrates kinematics and mechanism design.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Fuel Consumption Monitoring System", abstract: "Measures and displays real-time fuel usage to improve efficiency. Combines flow sensing with a display.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Automatic Braking with Obstacle Sensing", abstract: "A scaled vehicle that brakes automatically when an obstacle is detected. Demonstrates sensor-actuator integration in automotive safety.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are these physical working models?", a: "Yes — every automobile project is fabricated and tested in our Bangalore workshop before delivery." },
      { q: "Do I get fabrication drawings?", a: "Yes — drawings, bill of materials, report material and a walkthrough are included." },
      { q: "Do you deliver outside Bangalore?", a: "Yes, we ship pan-India; in-person builds are ideal for fabrication-heavy projects." },
    ],
  },
  {
    slug: "hydraulics-pneumatics-projects-in-bangalore",
    branch: "mechanical",
    keyword: "Hydraulics & Pneumatics Projects in Bangalore",
    metaTitle: "Hydraulics & Pneumatics Projects Bangalore | WEBUILDPRO",
    metaDescription: "Final year hydraulics and pneumatics projects in Bangalore for Mechanical. Working fabricated systems with documentation. Online & offline.",
    intro: "WEBUILDPRO fabricates hydraulics and pneumatics projects in Bangalore for Mechanical final year students — working fluid-power systems built and tested in our workshop. These projects clearly demonstrate fluid mechanics and actuation, which reads well in vivas. Every project below is delivered with fabrication drawings, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "Hydraulic Scissor Lift", abstract: "A working scissor lift raised by a hydraulic cylinder. Demonstrates fluid power, load handling and linkage design.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Pneumatic Sheet Metal Cutting Machine", abstract: "Cuts sheet metal using pneumatic actuation. Demonstrates compressed-air power and mechanism design.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Pneumatic Lifting / Material Handling Machine", abstract: "Lifts and moves loads using air pressure. A clean demonstration of pneumatics and automation.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Hydraulic Jack / Press Model", abstract: "Demonstrates hydraulic force multiplication in a working jack or press. Covers Pascal's law and mechanical design.", difficulty: "Beginner", timeline: "2 weeks" },
      { title: "Pneumatic Bending Machine", abstract: "Bends rods or sheets using pneumatic force. Demonstrates practical industrial pneumatics.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are these safe to demonstrate?", a: "Yes — built with appropriate pressure ratings and safety in mind for demonstration." },
      { q: "Do I get documentation?", a: "Yes — drawings, bill of materials, report material and a walkthrough are included." },
      { q: "Online or offline?", a: "In-person builds in Bangalore are ideal; we ship pan-India for outstation students." },
    ],
  },
  {
    slug: "robotics-mechatronics-projects-in-bangalore",
    branch: "mechanical",
    keyword: "Robotics & Mechatronics Projects in Bangalore",
    metaTitle: "Robotics & Mechatronics Projects Bangalore | WEBUILDPRO",
    metaDescription: "Final year robotics and mechatronics projects in Bangalore for Mechanical. Fabricated working robots with documentation. Online & offline.",
    intro: "WEBUILDPRO builds robotics and mechatronics projects in Bangalore for Mechanical final year students — where mechanics meets electronics and control. These projects are visually impressive and demonstrate cross-disciplinary skill. Every project below is fabricated and tested in our Bangalore workshop and delivered with drawings, code, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "Automated Pick-and-Place SCARA Arm", abstract: "A SCARA-configuration robotic arm automating pick-and-place along a path. Demonstrates mechanism design, actuation and control.", difficulty: "Advanced", timeline: "3–4 weeks" },
      { title: "Automated Material Sorting Conveyor", abstract: "A conveyor that sorts items by size, weight or colour automatically. Combines mechanics, sensors and control.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Wall-Climbing / Pipe-Inspection Robot", abstract: "A robot that traverses walls or pipes for inspection. Demonstrates traction mechanisms and mechatronic control.", difficulty: "Advanced", timeline: "3–4 weeks" },
      { title: "Automatic Bottle Filling & Capping Machine", abstract: "Positions, fills and caps bottles automatically. Demonstrates industrial automation and mechanism design.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Gesture / Voice Controlled Robotic Arm", abstract: "A robotic arm controlled by hand gestures or voice. Combines mechanics with sensor-based control.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are these fully working robots?", a: "Yes — fabricated and tested before delivery, with mechanics, electronics and code." },
      { q: "Can I customise it?", a: "Yes — bring your idea and we'll design and build a custom mechatronics project." },
      { q: "Do you deliver pan-India?", a: "Yes, though in-person builds in Bangalore suit hardware-heavy robots best." },
    ],
  },
  {
    slug: "design-analysis-projects-in-bangalore",
    branch: "mechanical",
    keyword: "Design & Analysis Projects in Bangalore",
    metaTitle: "Design & Analysis Projects in Bangalore | WEBUILDPRO",
    metaDescription: "Final year design and analysis projects in Bangalore for Mechanical. CAD, FEA & CFD projects with reports. Online & offline delivery.",
    intro: "WEBUILDPRO delivers design and analysis projects in Bangalore for Mechanical final year students — CAD modelling, FEA and CFD projects with proper simulation and reporting. These suit students aiming for design and R&D roles. Every project below includes CAD files, analysis results, report material and a walkthrough. These are ideal for online delivery pan-India, with in-person support in Bangalore.",
    projects: [
      { title: "Lightweight Chassis Design & FEA", abstract: "Designs a lightweight vehicle chassis and validates it with finite element analysis. Covers material choice, load paths and stress analysis.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "CFD Analysis of a Car/Aerofoil", abstract: "Simulates airflow over a body to study drag and lift. Demonstrates meshing, CFD setup and result interpretation.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Heat Exchanger Design & Analysis", abstract: "Designs and analyses a heat exchanger for thermal performance. Covers thermal design and simulation.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Gear / Shaft Design & Optimisation", abstract: "Designs and optimises a gear or shaft with stress and fatigue analysis. Demonstrates machine-design fundamentals.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Structural Analysis of a Bracket/Frame", abstract: "Models and analyses a component under load using FEA to improve strength-to-weight. Covers CAD and simulation.", difficulty: "Intermediate", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Which software do you use?", a: "SolidWorks, ANSYS, CATIA or Fusion 360 depending on the project and your college's tools." },
      { q: "Do I get the CAD and analysis files?", a: "Yes — CAD files, analysis results, report material and a walkthrough are included." },
      { q: "Can this be done online?", a: "Yes — design and analysis projects are ideal for online delivery pan-India." },
    ],
  },
  {
    slug: "agricultural-projects-in-bangalore",
    branch: "mechanical",
    keyword: "Agricultural Projects in Bangalore",
    metaTitle: "Agricultural Projects in Bangalore for Mech | WEBUILDPRO",
    metaDescription: "Final year agricultural mechanical projects in Bangalore. Fabricated farm machines and tools with documentation. Online & offline.",
    intro: "WEBUILDPRO fabricates agricultural projects in Bangalore for Mechanical final year students — practical farm machinery and tools that solve real problems. These projects demonstrate applied design and often win appreciation for social relevance. Every project below is fabricated in our Bangalore workshop and delivered with drawings, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "Solar-Powered Agricultural Sprayer", abstract: "A solar-charged sprayer for pesticides or fertiliser, reducing manual effort. Combines solar power with a spraying mechanism.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Multipurpose Seed Sowing Machine", abstract: "Sows seeds at set spacing and depth mechanically. Demonstrates mechanism design and precision agriculture.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Mini Thresher / Grain Separator", abstract: "Separates grain from crop efficiently on a small scale. Covers mechanical separation design.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Pedal-Operated Water Pump", abstract: "Pumps water using pedal power for irrigation without electricity. A sustainable, working design.", difficulty: "Beginner", timeline: "2 weeks" },
      { title: "Automatic Crop Cutting Machine", abstract: "A small machine that cuts crops mechanically to reduce labour. Demonstrates cutting mechanism design.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are these working machines?", a: "Yes — fabricated and tested in our Bangalore workshop before delivery." },
      { q: "Do I get documentation?", a: "Yes — drawings, bill of materials, report material and a walkthrough are included." },
      { q: "Delivery outside Bangalore?", a: "Yes, we ship pan-India; in-person builds suit these fabrication projects best." },
    ],
  },
  {
    slug: "renewable-energy-projects-in-bangalore",
    branch: "mechanical",
    keyword: "Renewable Energy Projects in Bangalore",
    metaTitle: "Renewable Energy Projects Bangalore for Mech | WEBUILDPRO",
    metaDescription: "Final year renewable energy mechanical projects in Bangalore. Solar, wind and energy-harvesting models with reports. Online & offline.",
    intro: "WEBUILDPRO builds renewable energy projects in Bangalore for Mechanical final year students — solar, wind and energy-harvesting models that are timely and impactful. Every project below is fabricated and tested in our Bangalore workshop and delivered with drawings, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "Solar Tracking System (Dual-Axis)", abstract: "A panel that rotates on two axes to follow the sun, maximising energy capture versus a fixed panel. Demonstrates tracking mechanism and control.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Vertical-Axis Wind Turbine Model", abstract: "Generates power from wind using a vertical-axis design suited to low speeds. Covers blade and generator design.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Speed Breaker Power Generation", abstract: "Harvests energy from vehicles passing over a speed breaker. Demonstrates mechanical energy harvesting.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Footstep Power Generation", abstract: "Generates electricity from footsteps using a piezo or mechanical system. A popular energy-harvesting project.", difficulty: "Beginner", timeline: "2 weeks" },
      { title: "Gravity Light / Energy Generator", abstract: "Produces power from a descending weight. Demonstrates potential-energy conversion.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are these working generators?", a: "Yes — each produces measurable output and is tested before delivery." },
      { q: "Do I get documentation?", a: "Yes — drawings, bill of materials, report material and a walkthrough are included." },
      { q: "Online or offline?", a: "In-person builds in Bangalore are ideal; we ship pan-India for outstation students." },
    ],
  },
];
