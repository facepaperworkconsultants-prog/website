"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

/* ── HERO ───────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="Regulatory compliance background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-teal/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-[10%] w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-left">
            <div className="badge badge-teal mb-6 !bg-teal/20 !text-teal-light">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
              Regulatory Guidance · Documentation Support · Compliance Assistance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
              Your Regulatory Partner for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-teal">
                Cosmetics &amp; Medical Devices
              </span>{" "}
              in India
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              From regulatory documentation to licensing and application support, Face PaperWorks Consultants helps businesses navigate India&apos;s cosmetics and medical-device regulatory requirements with clarity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="btn btn-primary text-base !py-4 !px-8">
                Request a Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/services/cosmetics" className="btn btn-outline-white text-base !py-4 !px-8">
                Explore Our Services
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                CDSCO Registration
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Import Licensing
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                MD-42
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:block animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/20 to-gold/10 rounded-3xl blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image src="/images/cosmetics-hero.jpg" alt="Cosmetics products for regulatory compliance" width={300} height={400} className="object-cover w-full h-[260px]" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                    <div className="text-teal-light font-heading font-bold text-lg mb-1">Cosmetics</div>
                    <p className="text-white/60 text-sm">CDSCO import registration &amp; manufacturing licence support</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                    <div className="text-gold-light font-heading font-bold text-lg mb-1">Medical Devices</div>
                    <p className="text-white/60 text-sm">MD-14/MD-15 import licensing &amp; MD-42 registration</p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image src="/images/medical-devices.jpg" alt="Medical devices for regulatory compliance" width={300} height={400} className="object-cover w-full h-[260px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 10 480 0 720 20C960 40 1200 60 1440 40V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

/* ── SERVICES OVERVIEW ────────────────── */
function ServicesOverview() {
  const { ref, isVisible } = useInView();
  const cosmeticsServices = [
    "Import registration of cosmetics with CDSCO",
    "COS-1 application preparation and filing support",
    "COS-2 registration pathway guidance",
    "COS-4 / COS-4A support for eligible already-registered cosmetics",
    "Regulatory documentation review",
    "Manufacturer authorisation and document coordination",
    "Product and ingredient documentation review",
    "Cosmetic labelling and compliance review",
    "Application query responses and post-submission support",
    "Cosmetic manufacturing licence assistance (State Licensing Authority)",
  ];
  const medicalServices = [
    "Medical-device import licensing and application support",
    "Form MD-14 application support and related MD-15 import licence processes",
    "MD-42 registration for applicable sale and distribution activities",
    "Medical-device classification and regulatory pathway assessment",
    "Documentation review and application preparation",
    "Device classification and technical file coordination",
    "Free Sale / authorisation / quality document support",
    "Labelling and IFU review",
    "Regulatory query response and follow-up",
  ];

  return (
    <section className="section bg-white pattern-dots" ref={ref}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-teal mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Comprehensive Regulatory Support
          </h2>
          <div className="divider mx-auto mb-6"></div>
          <p className="text-grey-dark text-lg">
            End-to-end regulatory support tailored to the product, route, and applicable regulatory pathway.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Cosmetics Card */}
          <div className="group relative bg-white rounded-2xl border border-grey-medium/60 overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="h-2 bg-gradient-to-r from-teal to-teal-light"></div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Cosmetics Regulatory Services</h3>
                  <p className="text-sm text-grey-dark">CDSCO &amp; State Licensing Authority</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {cosmeticsServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-grey-dark">
                    <svg className="w-4 h-4 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/services/cosmetics" className="btn btn-primary w-full justify-center">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Medical Device Card */}
          <div className="group relative bg-white rounded-2xl border border-grey-medium/60 overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="h-2 bg-gradient-to-r from-navy to-navy-light"></div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Medical Device Regulatory Services</h3>
                  <p className="text-sm text-grey-dark">Medical Devices Rules, 2017</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {medicalServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-grey-dark">
                    <svg className="w-4 h-4 text-navy mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/services/medical-devices" className="btn btn-secondary w-full justify-center">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── WHY CHOOSE US ────────────────────── */
function WhyChooseUs() {
  const { ref, isVisible } = useInView();
  const features = [
    { icon: "🎯", title: "Regulatory-Focused Consultancy", desc: "Cosmetics and medical device import regulation in India is all we do." },
    { icon: "📋", title: "Structured Documentation Support", desc: "Systematic preparation and review of all regulatory documents." },
    { icon: "🤝", title: "Personalised Guidance", desc: "One point of contact, tailored to your product and business model." },
    { icon: "💬", title: "Transparent Communication", desc: "Regular updates and honest timelines at every stage." },
    { icon: "🔄", title: "Full Application Lifecycle", desc: "Support from first consultation through to post-approval compliance." },
    { icon: "⚙️", title: "Tailored Solutions", desc: "Solutions matched to the product and applicable regulatory pathway." },
  ];

  return (
    <section className="section bg-grey" ref={ref}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-navy mb-4">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Choose Face PaperWorks Consultants?
          </h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {features.map((f, i) => (
            <div key={i} className="card group cursor-default" style={{animationDelay: `${i * 100}ms`}}>
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">{f.title}</h3>
              <p className="text-sm text-grey-dark leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHO WE HELP ──────────────────────── */
function WhoWeHelp() {
  const { ref, isVisible } = useInView();
  const audiences = [
    { icon: "🌍", title: "International Cosmetic Manufacturers & Beauty Brands", desc: "Overseas companies looking to register and import cosmetics into the Indian market." },
    { icon: "🏢", title: "Indian Cosmetic Importers & Distributors", desc: "Domestic businesses importing and distributing international cosmetic products in India." },
    { icon: "🏥", title: "Medical-Device Manufacturers & Overseas Suppliers", desc: "Companies seeking import registration and licensing for medical devices in India." },
    { icon: "📄", title: "Indian Businesses Seeking Licences", desc: "Companies requiring manufacturing, import, sale, or distribution licences for regulated products." },
  ];

  return (
    <section className="section bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-gold mb-4">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Who We Help</h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className={`grid md:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {audiences.map((a, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-grey-medium/60 hover:border-teal/30 hover:shadow-lg transition-all duration-300 bg-white group">
              <div className="text-3xl shrink-0">{a.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">{a.title}</h3>
                <p className="text-sm text-grey-dark leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS ──────────────────────────── */
function ProcessSection() {
  const { ref, isVisible } = useInView();
  const steps = [
    { num: "01", title: "Initial Consultation", desc: "Understand the product, business model, target market, and regulatory objective." },
    { num: "02", title: "Regulatory Assessment", desc: "Identify the potentially applicable regulatory pathway and requirements." },
    { num: "03", title: "Documentation Preparation", desc: "Prepare a product-specific checklist and review supporting documents." },
    { num: "04", title: "Application Filing Support", desc: "Assist with application preparation, submission coordination, and responses to regulatory queries." },
    { num: "05", title: "Follow-up & Compliance", desc: "Help track application progress and coordinate follow-up actions, subject to the applicable authority's process." },
  ];

  return (
    <section className="section bg-navy relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
          <div className="divider mx-auto !bg-gradient-to-r !from-teal !to-gold"></div>
        </div>
        <div className={`grid md:grid-cols-5 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 h-full">
                <div className="text-4xl font-bold text-teal/30 mb-3 font-heading">{s.num}</div>
                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
              </div>
              {i < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-teal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-white/40 text-xs mt-8 max-w-2xl mx-auto">
          Actual requirements and timelines depend on the product, completeness of documentation, and the regulatory authority&apos;s process.
        </p>
      </div>
    </section>
  );
}

/* ── CLIENTS ──────────────────────────── */
function ClientsSection() {
  const { ref, isVisible } = useInView();
  const clients = [
    "Double J Holdings", "Korinmi Private Limited", "TGCK India Private Limited",
    "Nabu Trade", "Areum Nexus Private Limited", "Reputer Agrotech Pvt Ltd.",
    "Tulip Cosmetics", "Kaeni Cosmetics", "Diauni Cosmetics Pvt Ltd",
    "Driha Integrated Pvt Limited",
  ];

  return (
    <section className="section bg-grey" ref={ref}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge badge-teal mb-4">Our Clients</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Brands &amp; Companies We Have Worked With</h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {clients.map((c, i) => (
            <div key={i} className="bg-white rounded-xl p-5 text-center border border-grey-medium/60 hover:border-teal/30 hover:shadow-md transition-all duration-300">
              <p className="text-sm font-semibold text-navy">{c}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-grey-dark text-sm mt-6">...and many more</p>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────── */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useInView();
  const faqs = [
    { q: "How can a foreign cosmetic brand enter the Indian market?", a: "Foreign cosmetic brands must obtain CDSCO import registration under the Cosmetics Rules, 2020. This involves appointing an Indian importer (or authorised agent), preparing product documentation, manufacturer authorisation, and filing the registration application with CDSCO. We provide end-to-end support for this process." },
    { q: "What documents may be required for cosmetic import registration?", a: "Typically, product composition/formula details, manufacturer authorisation letter, Free Sale Certificate, GMP certificate, product labels/artwork, and other product-specific documents. Exact requirements vary based on the product category and may be updated by CDSCO." },
    { q: "What is the general process for medical-device import licensing?", a: "Medical device import involves device classification, technical documentation preparation, filing Form MD-14 with CDSCO for an import licence (MD-15), and compliance with the Medical Devices Rules, 2017. The process varies by device risk class." },
    { q: "What is the difference between CDSCO and State FDA licensing?", a: "CDSCO (Central Drugs Standard Control Organisation) handles import registrations and approvals at the central level. State FDAs (State Licensing Authorities) handle manufacturing licences and local sale/distribution licences like MD-42. Both operate under different scopes of the Drugs & Cosmetics Act and related Rules." },
    { q: "What is MD-42 used for?", a: "MD-42 is a licence/registration for the sale, stock, and distribution of medical devices within India. It is issued by the relevant State Licensing Authority and is applicable for entities distributing or selling medical devices." },
    { q: "Can Face PaperWorks Consultants assist with regulatory queries?", a: "Yes. We help respond to CDSCO queries, prepare clarification documents, and coordinate with regulatory authorities throughout the application process." },
    { q: "How can I request a product-specific regulatory assessment?", a: "You can fill out the consultation form on our Contact page or reach us via email or WhatsApp. We'll arrange an initial discussion to understand your product and suggest the applicable regulatory pathway." },
  ];

  return (
    <section className="section bg-white" ref={ref}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-navy mb-4">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className={`max-w-3xl mx-auto space-y-3 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {faqs.map((faq, i) => (
            <div key={i} className="border border-grey-medium/60 rounded-xl overflow-hidden hover:border-teal/30 transition-colors">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold text-navy pr-4">{faq.q}</span>
                <svg className={`w-5 h-5 text-teal shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-5 px-5' : 'max-h-0'}`}>
                <p className="text-sm text-grey-dark leading-relaxed border-t border-grey-medium/40 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PAGE ─────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <WhoWeHelp />
      <ProcessSection />
      <ClientsSection />
      <FAQSection />
    </>
  );
}
