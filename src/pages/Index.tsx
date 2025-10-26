import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Car, Home, Zap } from "lucide-react";
import { products } from "@/data/products";

const Index = () => {
  const topSelling = products.slice(0, 8);
  const newArrivals = products.slice(8, 12);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary via-primary to-blue-700 text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Auto Body Shop<br />
                  <span className="text-accent">DIY Car Owners</span>
                </h1>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Professional Car Repair Tools in One Place
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link to="/category/automotive">
                    Go to Auto Repair Tools <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <Wrench className="w-12 h-12 mb-3 text-accent" />
                        <h3 className="font-bold text-lg mb-2">Professional Tools</h3>
                        <p className="text-sm text-primary-foreground/80">Quality tools for every job</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <Car className="w-12 h-12 mb-3 text-accent" />
                        <h3 className="font-bold text-lg mb-2">Auto Parts</h3>
                        <p className="text-sm text-primary-foreground/80">Genuine replacement parts</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-4 mt-8">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <Home className="w-12 h-12 mb-3 text-accent" />
                        <h3 className="font-bold text-lg mb-2">Home & Garden</h3>
                        <p className="text-sm text-primary-foreground/80">Everything for your home</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <Zap className="w-12 h-12 mb-3 text-accent" />
                        <h3 className="font-bold text-lg mb-2">Electronics</h3>
                        <p className="text-sm text-primary-foreground/80">Latest tech gadgets</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Selling Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">TOP-SELLING</h2>
              <p className="text-muted-foreground">Discover our best-selling products</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {topSelling.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/shop">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Banner */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground">Find exactly what you need</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Automotive", path: "/category/automotive", icon: Car, color: "from-blue-500 to-blue-600" },
                { name: "Tools", path: "/category/tools", icon: Wrench, color: "from-orange-500 to-orange-600" },
                { name: "Home & Garden", path: "/category/home-garden", icon: Home, color: "from-green-500 to-green-600" },
                { name: "Electronics", path: "/category/electronics", icon: Zap, color: "from-purple-500 to-purple-600" },
              ].map((category) => (
                <Link key={category.path} to={category.path}>
                  <Card className="overflow-hidden group hover:shadow-[var(--shadow-hover)] transition-all">
                    <CardContent className={`p-8 bg-gradient-to-br ${category.color} text-white`}>
                      <category.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-lg">{category.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
              <p className="text-muted-foreground">Check out our latest products</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Get Exclusive Deals</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Subscribe to our newsletter and get 6% off your first order
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
