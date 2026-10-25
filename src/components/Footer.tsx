import Link from "next/link";

const footerServices = [
  { label: "Cosmetics Import Registration", href: "/services/cosmetics" },
  { label: "Cosmetics Manufacturing Licence", href: "/services/cosmetics#manufacturing" },
  { label: "Medical Device Import Licence", href: "/services/medical-devices" },
  { label: "MD-42 Registration", href: "/services/medical-devices#md42" },
  { label: "Other Licensing Services", href: "/services/other-licensing" },
];

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

const footerLegal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-teal to-teal-dark">
        <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Planning to Launch or Import Products into India?
            </h3>
            <p className="text-white/80 text-lg">
              Let&apos;s discuss your product, documentation, and regulatory requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-outline-white whitespace-nowrap">
              Request a Consultation
            </Link>
            <Link href="/contact" className="btn whitespace-nowrap" style={{background: 'white', color: 'var(--navy)'}}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-heading font-bold text-xl">
                <span className="text-teal">Face</span> PaperWorks
              </span>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Regulatory Consultants</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Helping overseas brands and Indian importers bring cosmetics and medical devices into India, fully compliant and without the paperwork headaches.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-white/60">35, Block-F, Nehru Place, New Delhi</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:facepaperworkconsultants@gmail.com" className="text-white/60 hover:text-teal transition-colors">
                  facepaperworkconsultants@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+917428593797" className="text-white/60 hover:text-teal transition-colors">
                  +91 7428593797
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Our Services</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-4 mt-8">Legal</h4>
            <ul className="space-y-3">
              {footerLegal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-teal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory References */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Official References</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.cdsco.gov.in/opencms/en/Cosmetics/cosmetics/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-teal transition-colors flex items-center gap-2">
                  CDSCO — Cosmetics
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Cosmetics-Rules/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-teal transition-colors flex items-center gap-2">
                  Cosmetics Rules, 2020
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Medical-Devices-Rules" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-teal transition-colors flex items-center gap-2">
                  Medical Devices Rules, 2017
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-white/40 leading-relaxed">
                Face PaperWorks Consultants is a regulatory consultancy. We are not CDSCO, a State FDA, or an authorised government portal. We provide documentation and application support services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2026 Face PaperWorks Consultants. Subsidiary of AJR Smart Technology. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Regulatory Consultancy · Cosmetics · Medical Devices
          </p>
        </div>
      </div>
    </footer>
  );
}
