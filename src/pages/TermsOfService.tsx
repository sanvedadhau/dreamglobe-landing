import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { useCanonical } from '@/hooks/useCanonical';

const TermsOfService = () => {
  useCanonical();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
        breadcrumb="Legal"
      />
      
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="card-professional p-8 md:p-12 space-y-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  <strong>Last Updated:</strong> January 1, 2024
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to DreamGlobe Immigration Services. These Terms of Service ("Terms") govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">1. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DreamGlobe Immigration Services provides immigration consulting, visa application assistance, document services, and related advisory services. We act as consultants and facilitators; we do not guarantee visa approval or admission outcomes, as these decisions are solely at the discretion of respective government authorities.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">2. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As our client, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and complete information for all applications</li>
                  <li>Notify us promptly of any changes to your circumstances</li>
                  <li>Attend scheduled appointments and interviews</li>
                  <li>Pay all fees as agreed upon in the service agreement</li>
                  <li>Cooperate fully with the application process</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">3. Fees and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our service fees are communicated at the time of engagement and are separate from government fees, embassy fees, and other third-party charges. Fees are non-refundable once services have commenced, except as specified in individual service agreements.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">4. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DreamGlobe Immigration Services shall not be liable for any visa refusals, delays, or rejections by government authorities. Our liability is limited to the service fees paid for the specific service in question. We are not responsible for any consequential damages, including travel costs, lost opportunities, or emotional distress.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, graphics, logos, and images, is the property of DreamGlobe Immigration Services and is protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality of all client information and documents. Information is shared only as necessary for visa processing and as permitted by our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the service agreement with written notice. Upon termination, any fees for services already rendered are non-refundable. We reserve the right to refuse service to anyone for any reason.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified Terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-cream rounded-lg">
                  <p className="text-navy font-medium">DreamGlobe Immigration Services</p>
                  <p className="text-muted-foreground">Lalwani Icon 3rd Floor, Viman Nagar, Pune - 411014</p>
                  <p className="text-muted-foreground">Email: info@dreamglobe.co.in</p>
                  <p className="text-muted-foreground">Phone: +91 9112220244</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
