"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";

const serviceOptions = [
  "Cosmetics Import Registration",
  "Cosmetic Manufacturing Licence",
  "Medical Device Import Licence",
  "MD-12-Related Licensing Assistance",
  "MD-42 Registration Assistance",
  "Regulatory Documentation Review",
  "Other Regulatory Services",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "", companyName: "", email: "", phone: "", country: "",
    service: "", productCategory: "", description: "", contactMethod: "email", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.consent) { alert("Please agree to the Privacy Policy before submitting."); return; }
    setSubmitting(true);
    // Simulate form submission — replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <>
        <section className="relative pt-32 pb-20 bg-navy"><div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-dark"></div><div className="container mx-auto px-4 lg:px-6 relative z-10"><h1 className="text-4xl font-bold text-white">Thank You</h1></div></section>
        <section className="section bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-4">Your Enquiry Has Been Submitted</h2>
              <p className="text-grey-dark mb-8">Thank you for reaching out to Face PaperWorks Consultants. We have received your enquiry and will get back to you within 1–2 business days.</p>
              <Link href="/" className="btn btn-primary">Return to Homepage</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-dark"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <span className="badge mb-4 !bg-teal/20 !text-teal-light">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-2xl">Share your requirements and we&apos;ll get back to you with a product-specific regulatory assessment.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">Consultation Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input id="fullName" name="fullName" type="text" required className="form-input" placeholder="Your full name" value={formData.fullName} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="companyName">Company Name *</label>
                    <input id="companyName" name="companyName" type="text" required className="form-input" placeholder="Your company name" value={formData.companyName} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label" htmlFor="email">Business Email *</label>
                    <input id="email" name="email" type="email" required className="form-input" placeholder="your@company.com" value={formData.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                    <input id="phone" name="phone" type="tel" required className="form-input" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label" htmlFor="country">Country *</label>
                    <input id="country" name="country" type="text" required className="form-input" placeholder="e.g. South Korea, USA, India" value={formData.country} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="service">Service Required *</label>
                    <select id="service" name="service" required className="form-input" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="productCategory">Product Category</label>
                  <input id="productCategory" name="productCategory" type="text" className="form-input" placeholder="e.g. Skincare, Haircare, Surgical instruments, Diagnostic devices" value={formData.productCategory} onChange={handleChange} />
                </div>
                <div>
                  <label className="form-label" htmlFor="description">Brief Description of Requirement *</label>
                  <textarea id="description" name="description" required rows={4} className="form-input" placeholder="Tell us about your product, regulatory needs, and any specific questions..." value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div>
                  <label className="form-label">Preferred Contact Method</label>
                  <div className="flex gap-6 mt-1">
                    {["email", "phone", "whatsapp"].map((m) => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer text-sm text-grey-dark">
                        <input type="radio" name="contactMethod" value={m} checked={formData.contactMethod === m} onChange={handleChange} className="accent-teal" />
                        {m.charAt(0).toUpperCase() + m.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="accent-teal mt-1" />
                    <span className="text-sm text-grey-dark">
                      I agree to the <Link href="/privacy-policy" className="text-teal hover:underline">Privacy Policy</Link> and consent to Face PaperWorks Consultants processing my information to respond to this enquiry. *
                    </span>
                  </label>
                </div>
                <button type="submit" disabled={submitting} className="btn btn-primary w-full justify-center text-base !py-4">
                  {submitting ? (
                    <span className="flex items-center gap-2"><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Submitting...</span>
                  ) : "Submit Enquiry"}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-grey rounded-2xl p-6 border border-grey-medium/60">
                <h3 className="font-bold text-navy mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div><p className="font-semibold text-navy">Office Address</p><p className="text-grey-dark">35, Block-F, Nehru Place,<br/>New Delhi, India</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div><p className="font-semibold text-navy">Email</p><a href="mailto:facepaperworkconsultants@gmail.com" className="text-teal hover:underline">facepaperworkconsultants@gmail.com</a></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div><p className="font-semibold text-navy">Phone / WhatsApp</p><a href="tel:+917428593797" className="text-teal hover:underline">+91 7428593797</a></div>
                  </div>
                </div>
              </div>
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Why Contact Us?</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  {["Free initial consultation", "Product-specific assessment", "Clear regulatory pathway guidance", "No-obligation discussion", "Response within 1–2 business days"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
