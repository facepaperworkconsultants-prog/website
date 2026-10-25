import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Face PaperWorks Consultants. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 bg-navy">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: October 2026</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto prose prose-navy prose-sm">
            <div className="space-y-8 text-grey-dark leading-relaxed text-sm">
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">1. Introduction</h2>
                <p>Face PaperWorks Consultants (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), a subsidiary of AJR Smart Technology, is committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, store, and share information when you use our website or services.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">2. Information We Collect</h2>
                <p>We may collect the following information when you submit an enquiry or interact with our website:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Personal details: Full name, company name, email address, phone number, country</li>
                  <li>Business details: Product category, service requirements, regulatory needs</li>
                  <li>Communication preferences: Preferred contact method</li>
                  <li>Technical data: Browser type, IP address, pages visited (through analytics)</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To respond to your enquiries and provide consultancy services</li>
                  <li>To communicate with you regarding your regulatory requirements</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">4. Data Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and delivering services, subject to confidentiality agreements.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">5. Data Security</h2>
                <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">6. Data Retention</h2>
                <p>We retain your personal information only as long as necessary to fulfil the purposes for which it was collected, or as required by law.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">7. Your Rights</h2>
                <p>You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at facepaperworkconsultants@gmail.com.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">8. Cookies</h2>
                <p>Our website may use cookies to improve user experience and analyse website traffic. You can control cookies through your browser settings.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy mb-3">9. Contact</h2>
                <p>For privacy-related questions, contact us at:</p>
                <p className="mt-2"><strong>Face PaperWorks Consultants</strong><br/>35, Block-F, Nehru Place, New Delhi, India<br/>Email: facepaperworkconsultants@gmail.com<br/>Phone: +91 7428593797</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
