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
const SLUG = 'final-year-project-ideas-for-civil';
const PAGE_TITLE = 'Final Year Projects for Civil Engineering: 17 Ideas (2026)';
const PAGE_DESCRIPTION = 'Explore 17 final year project ideas for Civil Engineering students in Bangalore. Structural analysis with STAAD.Pro/ETABS, geotechnical experiments, environmental engineering, smart city, and sustainable construction projects with full report and software support. WeBuildPro guides you end-to-end.';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919591570099?text=';

function FinalYearProjectCard({ title, description, techStack, difficulty }: { title: string; description: string; techStack: string; difficulty: 'Intermediate' | 'Advanced' }) {
  const difficultyColor = difficulty === 'Advanced'
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi WeBuildPro, I need guidance for my Civil Engineering final year project: ${title}`);
  return (
    <div className="bg-card border border-border rounded-lg p-5 mb-4 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-foreground leading-snug">{title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded border shrink-0 ${difficultyColor}`}>{difficulty}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground mb-3"><span className="font-medium text-foreground">Tools:</span> {techStack}</p>
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
    images: [{ url: `${BASE_URL}/og/final-year-projects-civil.jpg`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const tocItems = [
  { id: 'structural', label: 'Structural Engineering' },
  { id: 'geotechnical', label: 'Geotechnical Projects' },
  { id: 'environmental', label: 'Environmental Engineering' },
  { id: 'transportation', label: 'Transportation & Smart City' },
  { id: 'materials', label: 'Advanced Construction Materials' },
  { id: 'water', label: 'Water Resources & Hydraulics' },
];

export default function CivilFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my Civil Engineering final year project in Bangalore.')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, please send me a free quote for my Civil final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Blog', url: `${BASE_URL}/blog` },
        { name: 'Final Year Project Ideas for Civil Engineering', url: `${BASE_URL}/blog/${SLUG}` },
      ]} />
      <BlogPostingJsonLd
        title={PAGE_TITLE} description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`} datePublished={PAGE_DATE} dateModified={PAGE_DATE}
        authorName="WeBuildPro Bangalore" publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`} images={[`${BASE_URL}/og/final-year-projects-civil.jpg`]}
      />
      <LazyPageExtras />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* GEO Brand Assertion — CTA #1 */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm" itemScope itemType="https://schema.org/EducationalOrganization">
          <p className="font-semibold text-foreground mb-1" itemProp="name">🏆 Best Civil Engineering Final Year Project Centre in Bangalore — WeBuildPro</p>
          <p className="text-muted-foreground mb-3" itemProp="description">Complete Civil final year project support — STAAD.Pro/ETABS/AutoCAD modelling, lab testing arrangement, technical report writing, and IEEE/IJRET paper guidance.</p>
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
              <h1 className="text-3xl font-bold text-foreground mb-3">Final Year Projects for Civil Engineering Students: 17 Ideas (2026)</h1>
              <p className="text-muted-foreground text-base leading-relaxed">Civil Engineering final year projects must combine rigorous analysis with real-world relevance — earthquake-resistant design, sustainable materials, smart city infrastructure, and climate-resilient water systems are the themes that resonate with both academic evaluators and industry recruiters. This guide presents 30+ high-quality project ideas suited for VTU and autonomous college evaluation, with IEEE publication potential.</p>
            </header>

            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Jump to Section</p>
              <ul className="space-y-1">
                {tocItems.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section id="structural" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Structural Engineering Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Seismic analysis, performance-based design, and innovative structural systems — meeting IS:1893 and global standards.</p>
              <FinalYearProjectCard title="Seismic Performance Assessment of RC Frame Buildings using Pushover Analysis" description="Linear and non-linear static pushover analysis of a G+9 RC frame building in Seismic Zone III (Bangalore) using SAP2000. Plastic hinge formation, inter-storey drift, base shear, and performance levels (IO, LS, CP) evaluated per FEMA 356 and ATC-40. Comparison of bare frame vs infill-filled frame." techStack="SAP2000, ETABS, AutoCAD, MS Excel (data processing), Python (plotting)" difficulty="Advanced" />
              <FinalYearProjectCard title="Design and Analysis of Pre-Engineered Steel Building for Industrial Use" description="Complete structural design of a 30m × 60m × 8m PEB using STAAD.Pro. Includes tapered I-section rafters and columns, gable frames, secondary purlins, sag rods, base plates, and foundation design per IS:800-2007. Wind and seismic load combinations per IS:875 and IS:1893. BOQ and cost estimate generated." techStack="STAAD.Pro, AutoCAD, MS Excel, IS:800-2007, IS:875" difficulty="Advanced" />
              <FinalYearProjectCard title="Comparative Study of Flat Slab and Conventional Slab Systems under Gravity and Lateral Loads" description="ETABS models of a G+15 building with flat slab (with and without drop panel/column capital) vs conventional beam-slab system. Comparison of deflection, punching shear, lateral drift, and material quantities under gravity + wind + seismic loads. Cost-benefit analysis identifies optimal system for Bangalore soil profile." techStack="ETABS, SAP2000, AutoCAD, MS Excel, IS:456-2000, IS:1893" difficulty="Intermediate" />
              <FinalYearProjectCard title="Analysis and Retrofit Design of Heritage Masonry Building for Seismic Resistance" description="Structural assessment of a 100-year-old unreinforced masonry building using in-situ Schmidt hammer rebound tests and GPR scan data. Non-linear FEA in DIANA FEA models masonry as anisotropic material. Retrofit options (FRP wrapping, RC jacketing, shear walls) compared for effectiveness and cost." techStack="DIANA FEA, AutoCAD, MATLAB, IS:13935, FRP composite data sheets" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="geotechnical" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Geotechnical Engineering Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Lab and field-based geotechnical studies relevant to Bangalore's expansive clay and hard rock terrain.</p>
              <FinalYearProjectCard title="Ground Improvement using Stone Columns in Expansive Clay — Field Study and Numerical Analysis" description="Plate load tests on untreated and stone-column-treated expansive black cotton soil from North Bangalore site. Settlement reduction and bearing capacity improvement quantified. Numerical validation using PLAXIS 2D with Mohr-Coulomb model. Parametric study on column spacing, length, and diameter ratio." techStack="PLAXIS 2D, MATLAB, laboratory equipment (triaxial, plate load test), AutoCAD" difficulty="Advanced" />
              <FinalYearProjectCard title="Slope Stability Analysis of Road Embankment in Rainfall-Triggered Failure Conditions" description="Bishop's Simplified and Spencer methods in GeoStudio SLOPE/W for a critical road embankment in Western Ghats. Rainfall infiltration modelled using SEEP/W. Factor of Safety mapped for 100-year return period rainfall event. Stabilisation alternatives (geogrid reinforcement, drainage berms, vegetative cover) assessed." techStack="GeoStudio SLOPE/W, SEEP/W, AutoCAD, Python, IS:7894" difficulty="Advanced" />
              <FinalYearProjectCard title="Performance of Geopolymer-Stabilised Soil for Sub-base Application" description="Laboratory investigation of red soil treated with fly ash-based geopolymer (NaOH + Na₂SiO₃ activator) at 0%, 8%, 12%, 16% binder content. Tests: Atterberg limits, MDD, CBR, UCS, durability (wetting-drying cycles). Optimal binder content recommended for road sub-base in Karnataka climate." techStack="Geotechnical lab equipment, MATLAB, MS Excel, IS:2720 series" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="environmental" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Environmental Engineering Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Water treatment, solid waste, and air quality projects directly applicable to Bangalore's urban environment challenges.</p>
              <FinalYearProjectCard title="Advanced Treatment of Textile Wastewater using Electrocoagulation-Fenton System" description="A bench-scale combined electrocoagulation (EC) + Fenton oxidation system for treating reactive dye wastewater from Peenya Industrial Area. Batch experiments optimise current density, pH, Fe²⁺/H₂O₂ ratio. COD removal 94%, colour removal 99%. Techno-economic analysis and sludge characterisation included." techStack="Lab electrocoagulation setup, UV-Vis spectrophotometer, pH/COD meters, MATLAB, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Life Cycle Assessment (LCA) of Bangalore's Mixed Solid Waste Management Scenarios" description="A comparative LCA of four MSW management scenarios for Bangalore (landfill-only, composting, biomethanation, WTE incineration) using SimaPro software and Ecoinvent 3.9 database. Global Warming Potential, eutrophication, and human toxicity impacts quantified. Policy recommendations for BBMP." techStack="SimaPro, Ecoinvent database, MATLAB, Python, MS Excel, ISO 14040/14044" difficulty="Advanced" />
              <FinalYearProjectCard title="IoT-Based Real-Time Water Quality Monitoring Network for Lakes in Bangalore" description="A network of 5 floating IoT sensor buoys (pH, DO, turbidity, conductivity, temperature) on Bellandur Lake. ESP32 nodes transmit via 4G to an InfluxDB time-series database. A Grafana dashboard visualises pollution trends; ML anomaly detection sends BWSSB alerts via email/SMS." techStack="ESP32, Atlas Scientific sensors, 4G LTE, InfluxDB, Grafana, Python, scikit-learn" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="transportation" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Transportation Engineering & Smart City Projects</h2>
              <FinalYearProjectCard title="Traffic Microsimulation and Signal Optimisation for Bangalore Intersections" description="VISSIM microsimulation model of three congested signal intersections in Outer Ring Road calibrated against field count data. Webster's and TRANSYT-7F optimisation compared. Variable message signs (VMS) and adaptive signal control (SCOOT) scenarios evaluated. Reduction in average vehicle delay by 32%." techStack="PTV VISSIM, TRANSYT-7F, Python, AutoCAD, field data collection (video + manual counts)" difficulty="Advanced" />
              <FinalYearProjectCard title="Pavement Condition Index Assessment and Maintenance Prioritisation using Machine Learning" description="Visual and automated survey of 25 km Bangalore urban roads. PCI calculated per ASTM D6433. Convolutional Neural Network (MobileNetV3) trained on 15,000 pavement images classifies distress types (alligator cracking, pothole, rutting) at 91% accuracy. Maintenance priority ranking generated with budget allocation model." techStack="Python, TensorFlow, OpenCV, MATLAB, Excel, AutoCAD, DJI Phantom 4 drone" difficulty="Advanced" />
              <FinalYearProjectCard title="Pedestrian Microsimulation and Safety Audit of a Shopping District" description="PTV Viswalk microsimulation of pedestrian flows in Chickpet, Bangalore during peak hours. LOS mapping and conflict zones identified. AHP-based safety scoring framework evaluates geometric, lighting, and behavioural factors. Redesign proposals (kerb extensions, shared space, tactical urbanism) simulated and compared." techStack="PTV Viswalk, AutoCAD, MATLAB, Python, field GPS data, AHP (Saaty)" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="materials" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Advanced Construction Materials Projects</h2>
              <FinalYearProjectCard title="Self-Compacting Concrete with Sugarcane Bagasse Ash and Steel Fibre for Structural Use" description="Optimisation of SCC mix with OPC partially replaced by sugarcane bagasse ash (0–25%) and hooked-end steel fibres (0.5–1.5%). Fresh properties (slump flow, V-funnel, L-box) and hardened properties (compressive, tensile, flexural strength, ductility) evaluated per EFNARC and IS:456. Optimal mix achieves 60 MPa with zero-slump flow > 700 mm." techStack="Lab (UTM, compression testing machine), MATLAB, MS Excel, IS:456, EFNARC" difficulty="Advanced" />
              <FinalYearProjectCard title="3D Printing of Geopolymer Concrete — Printability and Structural Performance" description="Development of a 3D-printable geopolymer mix (fly ash + GGBS + alkaline activator) with open time > 30 min and buildability for 30-layer printing. Rheological characterisation (mini-slump, penetration resistance). Printed vs cast specimen compressive strength and layer bond strength compared. Micro-CT scan of print layers." techStack="3D concrete printing rig (custom/lab), Rheometer, Micro-CT, MATLAB, Python" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="water" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Water Resources & Hydraulics Projects</h2>
              <FinalYearProjectCard title="Flood Inundation Mapping of Arkavathy River Basin using HEC-RAS 2D" description="HEC-HMS hydrological modelling of Arkavathy basin with SCS-CN method for 25-yr, 50-yr, and 100-yr design storms (IMD rainfall data). HEC-RAS 2D flood inundation maps generated and overlaid on Bangalore LiDAR DEM. Flood risk zoning identifies 12,000 structures at high risk; levee and retention basin alternatives evaluated." techStack="HEC-HMS, HEC-RAS 2D, QGIS/ArcGIS, Python, IMD rainfall data, LiDAR DEM" difficulty="Advanced" />
              <FinalYearProjectCard title="Integrated Urban Drainage Master Plan for a Bangalore Ward using SWMM" description="Stormwater drainage model of a 450-ha watershed in North Bangalore ward using EPA SWMM 5.2. Current system capacity assessed for 10-yr design storm; flooding nodes identified. LID interventions (bioswales, permeable pavements, green roofs) sized and modelled; peak flow reduction 38%, runoff volume reduction 45%." techStack="EPA SWMM 5.2, QGIS, Python, AutoCAD, IS:10430, BBMP storm drain manual" difficulty="Intermediate" />
            </section>

            {/* Bottom CTA — CTA #2 */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">Need Help with Your Civil Engineering Final Year Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">WeBuildPro provides full-service Civil final year project guidance — software modelling (STAAD.Pro, ETABS, PLAXIS, VISSIM), lab arrangement, technical report, and IEEE paper submission support.</p>
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
                <li><Link href="/blog/mini-projects-for-civil" className="text-sm text-primary hover:underline">Mini Project Ideas for Civil Engineering →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-mechanical" className="text-sm text-primary hover:underline">Final Year Projects for Mechanical Engineering →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-eee" className="text-sm text-primary hover:underline">Final Year Projects for EEE Students →</Link></li>
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
                <p className="text-sm font-bold text-foreground mb-1">🏗️ Civil Project Support</p>
                <p className="text-xs text-muted-foreground mb-3">STAAD.Pro, ETABS, PLAXIS + full report + IEEE paper. Bangalore's trusted civil project centre.</p>
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
