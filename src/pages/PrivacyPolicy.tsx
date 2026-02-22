import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { useCanonical } from '@/hooks/useCanonical';

const PrivacyPolicy = () => {
  useCanonical();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader 
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
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
                  DreamGlobe Immigration Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Passport and travel document details</li>
                  <li>Educational and employment history</li>
                  <li>Financial information for visa applications</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Process and manage your visa applications</li>
                  <li>Communicate with you about our services</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our services and website</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with third parties only in the following circumstances: with government agencies and embassies for visa processing, with partner organizations for service delivery, with service providers who assist our operations, and when required by law or to protect our rights.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">6. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-navy mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicy;
