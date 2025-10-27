
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">General Information</h2>
              <p>
                The information provided by CESDeals ("we," "us," or "our") on cesdeals.com (the "Site") 
                is for general informational purposes only. All information on the Site is provided in good 
                faith, however we make no representation or warranty of any kind, express or implied, 
                regarding the accuracy, adequacy, validity, reliability, availability, or completeness of 
                any information on the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links Disclaimer</h2>
              <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content 
                belonging to or originating from third parties or links to websites and features in banners or 
                other advertising. Such external links are not investigated, monitored, or checked for accuracy, 
                adequacy, validity, reliability, availability, or completeness by us.
              </p>
              <p className="mt-3">
                We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability 
                of any information offered by third-party websites linked through the site or any website or 
                feature linked in any banner or other advertising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
              <p>
                While we strive to provide accurate product descriptions, specifications, and pricing information, 
                we do not warrant that product descriptions or other content on the Site is accurate, complete, 
                reliable, current, or error-free. Products and their features are subject to change without notice.
              </p>
              <p className="mt-3">
                Product images shown are for illustration purposes only and may not be an exact representation 
                of the product. Actual product packaging and materials may contain more and/or different 
                information than that shown on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Pricing Disclaimer</h2>
              <p>
                All prices listed on the Site are in US Dollars unless otherwise stated. Prices are subject to 
                change without notice. While we make every effort to ensure pricing accuracy, errors may occur. 
                In the event of a pricing error, we reserve the right to cancel any orders placed for products 
                listed at the incorrect price.
              </p>
              <p className="mt-3">
                Discounts and promotional offers are valid for a limited time and subject to availability. 
                We reserve the right to modify or terminate any promotion at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Affiliate Links Disclaimer</h2>
              <p>
                CESDeals may contain affiliate links, which means we may receive a commission if you click a 
                link and purchase something that we have recommended. While clicking these links won't cost 
                you any extra money, they will help us keep this site up and running.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Testimonials Disclaimer</h2>
              <p>
                The Site may contain testimonials by users of our products and/or services. These testimonials 
                reflect the real-life experiences and opinions of such users. However, the experiences are 
                personal to those particular users, and may not necessarily be representative of all users of 
                our products and/or services.
              </p>
              <p className="mt-3">
                We do not claim, and you should not assume, that all users will have the same experiences. 
                Your individual results may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Disclaimer</h2>
              <p>
                The Site cannot and does not contain professional advice. The information is provided for 
                general informational and educational purposes only and is not a substitute for professional 
                advice. Accordingly, before taking any actions based upon such information, we encourage you 
                to consult with the appropriate professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind 
                incurred as a result of the use of the site or reliance on any information provided on the site. 
                Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Advertising Disclaimer</h2>
              <p>
                This Site is affiliated with Google AdSense. We allow third-party companies to serve ads and/or 
                collect certain anonymous information when you visit our website. These companies may use 
                non-personally identifiable information (e.g., click stream information, browser type, time and 
                date, subject of advertisements clicked or scrolled over) during your visits to this and other 
                websites in order to provide advertisements about goods and services likely to be of interest to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Disclaimer</h2>
              <p>
                We reserve the right to modify this disclaimer at any time. Changes and clarifications will 
                take effect immediately upon their posting on the website. If we make material changes to this 
                disclaimer, we will notify you here that it has been updated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, please contact us through our 
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

export default Disclaimer;
