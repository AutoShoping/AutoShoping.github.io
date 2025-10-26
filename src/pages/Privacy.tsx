import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>
                At CESDeals, we collect information that you provide directly to us when you create an account, 
                make a purchase, subscribe to our newsletter, or contact our customer service. This may include 
                your name, email address, shipping address, payment information, and phone number.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your customer service requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold 
                certain information. Cookies are files with small amounts of data which may include an 
                anonymous unique identifier. You can instruct your browser to refuse all cookies or to 
                indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to 
                outside parties unless we provide you with advance notice. This does not include website 
                hosting partners and other parties who assist us in operating our website, conducting our 
                business, or serving our users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Google AdSense</h2>
              <p>
                We use Google AdSense Advertising on our website. Google, as a third-party vendor, uses 
                cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads 
                to our users based on their visit to our site and other sites on the Internet. Users may 
                opt out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. 
                Your personal information is contained behind secured networks and is only accessible by a 
                limited number of persons who have special access rights to such systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request restriction of processing your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our 
                <a href="/contact" className="text-primary hover:underline ml-1">Contact page</a>.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t">
              <p className="text-sm">Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;