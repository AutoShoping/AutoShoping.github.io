import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About CESDeals</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted source for automotive tools, home & garden supplies, electronics, and more. Quality products at unbeatable prices.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/automotive" className="text-muted-foreground hover:text-primary transition-colors">Automotive</Link></li>
              <li><Link to="/category/tools" className="text-muted-foreground hover:text-primary transition-colors">Tools</Link></li>
              <li><Link to="/category/home-garden" className="text-muted-foreground hover:text-primary transition-colors">Home & Garden</Link></li>
              <li><Link to="/category/electronics" className="text-muted-foreground hover:text-primary transition-colors">Electronics</Link></li>
              <li><Link to="/category/outdoors" className="text-muted-foreground hover:text-primary transition-colors">Outdoors</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" />
              <Button size="icon" className="bg-accent hover:bg-accent/90">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 CESDeals. All rights reserved. | 
            <Link to="/privacy" className="hover:text-primary transition-colors ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-primary transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
