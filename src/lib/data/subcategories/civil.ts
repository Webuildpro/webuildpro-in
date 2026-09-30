// lib/data/subcategories/civil.ts
// READY-TO-USE DATA FILE for Civil sub-category pages.
// Each entry -> a page at /projects/civil/[slug].

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SubProject {
  title: string;
  abstract: string;
  difficulty: Difficulty;
  timeline: string;
}

export interface SubCategory {
  slug: string;
  branch: 'civil';
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  projects: SubProject[];
  faqs: { q: string; a: string }[];
}

export const civilSubCategories: SubCategory[] = [
  {
    slug: 'structural-projects-in-bangalore',
    branch: 'civil',
    keyword: 'Structural Engineering Projects in Bangalore',
    metaTitle: 'Structural Engineering Projects in Bangalore | WEBUILDPRO',
    metaDescription:
      'Final year structural engineering projects in Bangalore for Civil. Working models, analysis and documentation. Online & offline delivery.',
    intro:
      'Looking for structural engineering projects in Bangalore for your final year? WEBUILDPRO builds and analyses structural engineering projects for Civil students in Bangalore — working scale models, FEA studies and load-testing rigs built and tested in our lab. Structural projects demonstrate core civil competencies and perform well in vivas because the results are visible and measurable. Every project below is delivered with drawings, analysis reports, a bill of materials and a walkthrough. We deliver in person across Bangalore and support students pan-India.',
    projects: [
      {
        title: 'Seismic-Resistant Building Frame Model',
        abstract:
          'A scaled building frame designed and tested for lateral seismic loads. Demonstrates base isolation, shear walls and ductile detailing under simulated earthquake forces.',
        difficulty: 'Advanced',
        timeline: '3–4 weeks',
      },
      {
        title: 'Pre-Stressed Concrete Beam Analysis',
        abstract:
          'Fabricates and tests a pre-stressed concrete beam to compare deflection and cracking with a conventional beam. Covers pre-stressing concepts and structural behaviour.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Steel Truss Bridge Model with Load Testing',
        abstract:
          'Constructs a scaled steel truss bridge and applies incremental loads to measure deflection and identify failure modes. Demonstrates structural analysis and fabrication.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Retaining Wall Stability Analysis',
        abstract:
          'Models a retaining wall and analyses stability against overturning, sliding and bearing failure. Covers soil-structure interaction and design checks.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Composite Slab / Ferrocement Roof Panel',
        abstract:
          'Casts and tests a lightweight composite or ferrocement panel for flexural strength and crack resistance. Demonstrates alternative construction materials.',
        difficulty: 'Beginner',
        timeline: '2 weeks',
      },
    ],
    faqs: [
      {
        q: 'Are these physical working models?',
        a: 'Yes — every structural project is fabricated and tested in our Bangalore lab before delivery.',
      },
      {
        q: 'Do I get analysis reports?',
        a: 'Yes — drawings, load-test results, analysis reports and a walkthrough are included.',
      },
      {
        q: 'Do you deliver outside Bangalore?',
        a: 'Yes, we ship pan-India; in-person builds are ideal for fabrication-heavy structural models.',
      },
    ],
  },
  {
    slug: 'transportation-projects-in-bangalore',
    branch: 'civil',
    keyword: 'Transportation Engineering Projects in Bangalore',
    metaTitle: 'Transportation Engineering Projects Bangalore | WEBUILDPRO',
    metaDescription:
      'Final year transportation engineering projects in Bangalore for Civil. Traffic, pavement and road-safety models with documentation. Online & offline.',
    intro:
      'WEBUILDPRO builds transportation engineering projects in Bangalore for Civil final year students — traffic management, pavement analysis and road-safety systems that address real urban challenges. Transportation projects are highly relevant given Bangalore\'s infrastructure growth. Every project below is delivered with drawings, data, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.',
    projects: [
      {
        title: 'Smart Traffic Signal Control System',
        abstract:
          'An adaptive traffic signal that adjusts green-time based on real-time vehicle density using sensors. Demonstrates traffic flow optimisation and control logic.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Pavement Condition Index (PCI) Survey & Analysis',
        abstract:
          'Surveys a road stretch, calculates PCI scores and recommends maintenance priorities. Demonstrates pavement evaluation methodology.',
        difficulty: 'Beginner',
        timeline: '2 weeks',
      },
      {
        title: 'Speed Breaker Design & Impact Study',
        abstract:
          'Designs and evaluates speed-breaker geometry for vehicle speed reduction and driver comfort. Covers geometric design and safety analysis.',
        difficulty: 'Beginner',
        timeline: '2 weeks',
      },
      {
        title: 'Roundabout Capacity & Delay Analysis',
        abstract:
          'Analyses traffic capacity and vehicle delay at a roundabout using field data and simulation. Demonstrates intersection design and level-of-service assessment.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Accident Blackspot Identification & Remediation',
        abstract:
          'Identifies accident-prone locations from historical data, analyses causes and proposes engineering countermeasures. Demonstrates road-safety audit methodology.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
    ],
    faqs: [
      {
        q: 'Are these field-based or lab-based projects?',
        a: 'Both — some involve field surveys; others are lab analysis and modelling. We guide you through both.',
      },
      {
        q: 'Do I get documentation?',
        a: 'Yes — data sheets, analysis reports, drawings and a walkthrough are included.',
      },
      {
        q: 'Online or offline?',
        a: 'Analysis-heavy projects are ideal online; field-survey projects benefit from in-person support in Bangalore.',
      },
    ],
  },
  {
    slug: 'geotechnical-projects-in-bangalore',
    branch: 'civil',
    keyword: 'Geotechnical Engineering Projects in Bangalore',
    metaTitle: 'Geotechnical Engineering Projects Bangalore | WEBUILDPRO',
    metaDescription:
      'Final year geotechnical engineering projects in Bangalore for Civil. Soil testing, foundation models and slope stability with documentation.',
    intro:
      'WEBUILDPRO delivers geotechnical engineering projects in Bangalore for Civil final year students — soil testing, foundation models and slope-stability studies carried out in our lab. Geotechnical projects demonstrate hands-on soil mechanics knowledge that is directly valued in construction and infrastructure firms. Every project below is delivered with test data, analysis, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.',
    projects: [
      {
        title: 'Soil Stabilisation Using Fly Ash / Lime',
        abstract:
          'Tests the effect of fly ash or lime addition on soil strength and compressibility. Demonstrates ground-improvement techniques with before-and-after data.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Slope Stability Analysis (Finite Slope)',
        abstract:
          'Analyses a finite slope for failure under various conditions using limit-equilibrium methods. Covers factor of safety, slip surfaces and remediation.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Pile Foundation Load Test Model',
        abstract:
          'Constructs a scaled pile model and applies axial load to measure load-settlement behaviour. Demonstrates pile capacity and soil-pile interaction.',
        difficulty: 'Advanced',
        timeline: '3 weeks',
      },
      {
        title: 'Bearing Capacity of Shallow Foundation (Lab)',
        abstract:
          'Determines bearing capacity of a model footing in a soil tank under controlled conditions. Covers Terzaghi\'s theory and failure patterns.',
        difficulty: 'Beginner',
        timeline: '2 weeks',
      },
      {
        title: 'Permeability & Seepage Analysis of Earthen Dam',
        abstract:
          'Models seepage through an earthen dam cross-section and measures permeability. Demonstrates flow-net construction and piping risk assessment.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
    ],
    faqs: [
      {
        q: 'Do you perform actual soil tests?',
        a: 'Yes — tests are conducted in our lab with proper equipment and results are documented.',
      },
      {
        q: 'Do I get test reports?',
        a: 'Yes — test data, analysis, drawings and a walkthrough are included.',
      },
      {
        q: 'Delivery outside Bangalore?',
        a: 'Lab-based projects can be shipped; in-person builds in Bangalore are ideal for hands-on soil work.',
      },
    ],
  },
  {
    slug: 'water-resources-projects-in-bangalore',
    branch: 'civil',
    keyword: 'Water Resources Engineering Projects in Bangalore',
    metaTitle: 'Water Resources Projects Bangalore for Civil | WEBUILDPRO',
    metaDescription:
      'Final year water resources engineering projects in Bangalore for Civil. Hydraulics, irrigation and water-treatment models with documentation.',
    intro:
      'WEBUILDPRO builds water resources engineering projects in Bangalore for Civil final year students — hydraulics, irrigation and water-treatment models that address real water challenges. Water resources is a growing priority in Karnataka and across India. Every project below is delivered with drawings, experimental data, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.',
    projects: [
      {
        title: 'Rainwater Harvesting System Design',
        abstract:
          'Designs a rooftop rainwater harvesting system for a building, sizing storage and filtration components. Demonstrates sustainable water management.',
        difficulty: 'Beginner',
        timeline: '2 weeks',
      },
      {
        title: 'Open Channel Flow Experiment (Flume)',
        abstract:
          'Measures velocity profiles, discharge and hydraulic jump in a laboratory flume. Demonstrates open-channel hydraulics and Manning\'s equation.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Drip Irrigation System Design & Prototype',
        abstract:
          'Designs and builds a small drip irrigation prototype for a field plot, optimising water use. Demonstrates irrigation engineering and water-saving principles.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Water Quality Testing & Treatment Study',
        abstract:
          'Tests water samples for key parameters and evaluates treatment methods to meet standards. Demonstrates water quality analysis and treatment design.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Small Dam / Weir Model with Spillway',
        abstract:
          'Constructs a scaled dam or weir model and tests spillway performance under varying inflows. Demonstrates hydraulic design and overflow management.',
        difficulty: 'Advanced',
        timeline: '3 weeks',
      },
    ],
    faqs: [
      {
        q: 'Are these working hydraulic models?',
        a: 'Yes — models are built and tested with real water flow in our lab before delivery.',
      },
      {
        q: 'Do I get documentation?',
        a: 'Yes — drawings, experimental data, report material and a walkthrough are included.',
      },
      {
        q: 'Online or offline?',
        a: 'In-person builds in Bangalore are ideal for hydraulic models; design projects can be done online.',
      },
    ],
  },
  {
    slug: 'environmental-projects-in-bangalore',
    branch: 'civil',
    keyword: 'Environmental Engineering Projects in Bangalore',
    metaTitle: 'Environmental Engineering Projects Bangalore | WEBUILDPRO',
    metaDescription:
      'Final year environmental engineering projects in Bangalore for Civil. Waste management, pollution control and green-building models with documentation.',
    intro:
      'WEBUILDPRO builds environmental engineering projects in Bangalore for Civil final year students — waste management, pollution control and sustainable construction projects that are timely and socially relevant. Environmental projects are increasingly valued by employers and score well in vivas for their real-world impact. Every project below is delivered with drawings, data, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.',
    projects: [
      {
        title: 'Sewage Treatment Plant (STP) Model',
        abstract:
          'Builds a scaled STP demonstrating primary, secondary and tertiary treatment stages. Covers biological treatment, sedimentation and effluent quality.',
        difficulty: 'Advanced',
        timeline: '3–4 weeks',
      },
      {
        title: 'Solid Waste Management & Composting Study',
        abstract:
          'Designs a solid waste segregation and composting system and measures compost quality. Demonstrates integrated waste management principles.',
        difficulty: 'Beginner',
        timeline: '2 weeks',
      },
      {
        title: 'Air Quality Monitoring Station (IoT)',
        abstract:
          'Builds a low-cost IoT air quality monitor measuring PM2.5, CO₂ and temperature with a live dashboard. Demonstrates environmental sensing and data logging.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Green Building Energy Audit',
        abstract:
          'Audits a building for energy consumption, identifies inefficiencies and recommends green-building measures. Demonstrates sustainable design assessment.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Constructed Wetland / Bio-Filter for Greywater',
        abstract:
          'Designs and tests a small constructed wetland or bio-filter to treat greywater to reuse standards. Demonstrates natural treatment systems.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
    ],
    faqs: [
      {
        q: 'Are these working models or just reports?',
        a: 'Working models where applicable — STP, bio-filter and IoT monitor are physical builds; audit projects are analysis-based.',
      },
      {
        q: 'Do I get documentation?',
        a: 'Yes — drawings, data, report material and a walkthrough are included for every project.',
      },
      {
        q: 'Delivery outside Bangalore?',
        a: 'Yes, pan-India with online support; physical builds are best done in person in Bangalore.',
      },
    ],
  },
  {
    slug: 'construction-management-projects-in-bangalore',
    branch: 'civil',
    keyword: 'Construction Management Projects in Bangalore',
    metaTitle: 'Construction Management Projects Bangalore | WEBUILDPRO',
    metaDescription:
      'Final year construction management projects in Bangalore for Civil. Scheduling, cost estimation and BIM projects with documentation. Online & offline.',
    intro:
      'WEBUILDPRO delivers construction management projects in Bangalore for Civil final year students — project scheduling, cost estimation, BIM and quality-control studies that prepare you for site and project-management roles. Construction management projects are ideal for students targeting PMC, contracting and infrastructure firms. Every project below is delivered with schedules, cost sheets, model files, report material and a walkthrough. These are well-suited for online delivery pan-India, with in-person support in Bangalore.',
    projects: [
      {
        title: 'BIM Model of a Residential Building (Revit)',
        abstract:
          'Creates a full BIM model of a residential building with clash detection and quantity take-off. Demonstrates Building Information Modelling workflow.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Project Scheduling with MS Project / Primavera',
        abstract:
          'Develops a detailed construction schedule with critical path, resource levelling and earned value analysis. Demonstrates project planning and control.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Cost Estimation & Tendering for a Building',
        abstract:
          'Prepares a detailed estimate, bill of quantities and tender document for a building project. Covers rate analysis and cost control.',
        difficulty: 'Beginner',
        timeline: '2 weeks',
      },
      {
        title: 'Quality Control Plan for a Construction Project',
        abstract:
          'Develops a QC plan with inspection checklists, test frequencies and non-conformance procedures for a construction project. Demonstrates quality management.',
        difficulty: 'Intermediate',
        timeline: '2–3 weeks',
      },
      {
        title: 'Risk Assessment & Mitigation for Infrastructure Project',
        abstract:
          'Identifies, quantifies and mitigates risks for an infrastructure project using a risk register and Monte Carlo simulation. Demonstrates project risk management.',
        difficulty: 'Advanced',
        timeline: '3 weeks',
      },
    ],
    faqs: [
      {
        q: 'Which software do you use?',
        a: 'Revit, AutoCAD, MS Project, Primavera or equivalent tools depending on the project and your college requirements.',
      },
      {
        q: 'Do I get the project files?',
        a: 'Yes — model files, schedules, cost sheets, report material and a walkthrough are included.',
      },
      {
        q: 'Can this be done online?',
        a: 'Yes — construction management projects are ideal for online delivery pan-India.',
      },
    ],
  },
];
