import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using CESDeals, you accept and agree to be bound by the terms and 
                provisions of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
              <p className="mb-3">
                Permission is granted to temporarily download one copy of the materials on CESDeals' 
                website for personal, non-commercial transitory viewing only. This is the grant of a 
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on CESDeals' website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing information. However, we do 
                not warrant that product descriptions, pricing, or other content on this site is accurate, 
                complete, reliable, current, or error-free. We reserve the right to correct any errors, 
                inaccuracies, or omissions and to change or update information at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Pricing and Payment</h2>
              <p className="mb-3">
                All prices are subject to change without notice. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or discontinue products without prior notice</li>
                <li>Limit quantities purchased per person, per household, or per order</li>
                <li>Refuse any order for any reason</li>
                <li>Require verification of information prior to acceptance of an order</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping and Delivery</h2>
              <p>
                We aim to process and ship orders within the timeframes stated on our website. However, 
                delivery times are estimates and we cannot guarantee delivery by a specific date. Title 
                and risk of loss for items purchased pass to you upon delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Returns and Refunds</h2>
              <p>
                Items may be returned within 30 days of receipt for a full refund, provided they are in 
                their original condition and packaging. Shipping costs are non-refundable, and return 
                shipping is the responsibility of the customer unless the item is defective or we made 
                an error in your order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account. 
                You must notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <p>
                The materials on CESDeals' website are provided on an 'as is' basis. CESDeals makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations of Liability</h2>
              <p>
                In no event shall CESDeals or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising 
                out of the use or inability to use the materials on CESDeals' website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of 
                your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts 
                in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to revise these terms of service at any time without notice. By using 
                this website, you are agreeing to be bound by the current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us through our 
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

export default Terms;