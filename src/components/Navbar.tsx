"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Cosmetics Regulatory Services", href: "/services/cosmetics" },
      { label: "Medical Device Regulatory Services", href: "/services/medical-devices" },
      { label: "Other Licensing Services", href: "/services/other-licensing" },
    ],
  },
  { label: "Our Process", href: "/process" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-50">
          <div className="flex items-center">
            <div className={`font-heading font-bold text-lg lg:text-xl transition-colors ${scrolled || mobileOpen ? 'text-navy' : 'text-white'}`}>
              <span className="text-teal">Face</span> PaperWorks
            </div>
            <div className={`hidden sm:block text-[0.65rem] uppercase tracking-widest ml-3 pl-3 border-l transition-colors ${scrolled || mobileOpen ? 'text-grey-dark border-grey-medium' : 'text-white/70 border-white/30'}`}>
              Regulatory<br />Consultants
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.children ? (
                <button
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                    scrolled
                      ? "text-navy hover:text-teal hover:bg-teal/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    scrolled
                      ? "text-navy hover:text-teal hover:bg-teal/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {/* Dropdown */}
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 pt-2 animate-slideDown" style={{animation: 'slideDown 0.2s ease'}}>
                  <div className="bg-white rounded-xl shadow-xl border border-grey-medium/50 py-2 min-w-[280px] overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="flex items-center gap-3 px-5 py-3 text-sm text-navy hover:bg-teal/5 hover:text-teal transition-all group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal/40 group-hover:bg-teal transition-colors"></span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn btn-primary text-sm !py-2.5 !px-6"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 p-2"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2 bg-navy' : scrolled ? 'bg-navy' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : scrolled ? 'bg-navy' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2 bg-navy' : scrolled ? 'bg-navy' : 'bg-white'}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className="flex items-center justify-between w-full py-3 px-4 text-navy font-semibold text-lg rounded-lg hover:bg-grey transition-colors"
                      >
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === link.label && (
                        <div className="pl-4 pb-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 px-4 text-grey-dark hover:text-teal text-sm rounded-lg hover:bg-teal/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 text-navy font-semibold text-lg rounded-lg hover:bg-grey transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-grey-medium">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full justify-center text-base"
              >
                Request a Consultation
              </Link>
              <div className="mt-4 text-center text-sm text-grey-dark">
                <a href="mailto:facepaperworkconsultants@gmail.com" className="text-teal hover:underline">
                  facepaperworkconsultants@gmail.com
                </a>
                <br />
                <a href="tel:+917428593797" className="text-teal hover:underline mt-1 inline-block">
                  +91 7428593797
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
