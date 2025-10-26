import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Automotive", path: "/category/automotive" },
    { name: "Tools", path: "/category/tools" },
    { name: "Home & Garden", path: "/category/home-garden" },
    { name: "Electronics", path: "/category/electronics" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        Sitewide 6% Off Discount (Code: NEWUSER06) | Global Shipping | Free Shipping On Order Over $69
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-background border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">CD</span>
              </div>
              <span className="text-xl font-bold text-primary">CESDeals</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search & Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-muted rounded-lg px-3 py-2 w-64">
                <Search className="w-4 h-4 text-muted-foreground mr-2" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="border-0 bg-transparent focus-visible:ring-0 p-0 h-auto"
                />
              </div>
              
              <Button variant="ghost" size="icon" asChild>
                <Link to="/cart">
                  <ShoppingCart className="w-5 h-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
