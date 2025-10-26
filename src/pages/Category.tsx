import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const categoryTitles: Record<string, string> = {
  automotive: "Automotive",
  tools: "Tools",
  "home-garden": "Home & Garden",
  electronics: "Electronics",
  outdoors: "Outdoors",
};

const categoryDescriptions: Record<string, string> = {
  automotive: "Professional automotive tools and accessories for car maintenance and repair",
  tools: "High-quality tools for every job, from basic to professional grade",
  "home-garden": "Everything you need for your home and garden projects",
  electronics: "Latest electronics and gadgets for modern living",
  outdoors: "Outdoor equipment and gear for all your adventures",
};

const Category = () => {
  const { category } = useParams();
  const products = getProductsByCategory(category || "");
  const title = categoryTitles[category || ""] || "Category";
  const description = categoryDescriptions[category || ""] || "";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-white/20" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-primary-foreground/90">{description}</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing {products.length} products
            </p>
            <select className="border rounded-lg px-4 py-2 bg-background">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">No products found in this category.</p>
              <Button asChild>
                <Link to="/shop">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
