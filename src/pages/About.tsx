import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About CESDeals</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your trusted partner for quality automotive tools, home essentials, and more since 2015
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To provide DIY enthusiasts and professionals with high-quality tools and equipment at competitive prices, backed by exceptional customer service and expert guidance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-accent mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground">
                    To become the leading online destination for automotive and home improvement products, recognized for our quality, reliability, and commitment to customer satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5K+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Customer First</h3>
                  <p className="text-muted-foreground">
                    We put our customers at the heart of everything we do, ensuring their satisfaction is our top priority.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Quality Assured</h3>
                  <p className="text-muted-foreground">
                    Every product we sell meets our strict quality standards and comes with our satisfaction guarantee.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously improve our service and expand our product range to meet evolving customer needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  Founded in 2015, CESDeals started as a small automotive tools supplier with a simple mission: make professional-grade tools accessible to everyone. What began in a small warehouse has grown into a comprehensive online marketplace serving customers worldwide.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've expanded our product range to include home improvement tools, garden equipment, electronics, and outdoor gear. Our commitment to quality and customer satisfaction has remained unchanged.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve over 10,000 customers across 50 countries, offering more than 5,000 carefully selected products. Our team of experts is dedicated to helping you find the right tools for your projects, whether you're a professional tradesperson or a weekend DIY enthusiast.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
