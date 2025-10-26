import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { cartCount } = useCart();
  const { user, isAuthenticated, login, register, logout } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      toast.success("Login successful!");
      setLoginDialogOpen(false);
      setEmail("");
      setPassword("");
      setName("");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    const success = await register(email, password, name);
    if (success) {
      toast.success("Registration successful!");
      setLoginDialogOpen(false);
      setEmail("");
      setPassword("");
      setName("");
      setIsRegisterMode(false);
    } else {
      toast.error("Email already exists");
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

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
              
              <Button variant="ghost" size="icon" asChild className="relative" data-testid="button-cart">
                <Link to="/cart">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </Button>

              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" data-testid="button-user-menu">
                      <User className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      <div className="flex flex-col">
                        <span className="font-semibold">{user?.name}</span>
                        <span className="text-xs text-muted-foreground">{user?.email}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} data-testid="button-logout">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" data-testid="button-login">
                      <User className="w-5 h-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{isRegisterMode ? "Create Account" : "Login"}</DialogTitle>
                      <DialogDescription>
                        {isRegisterMode
                          ? "Create a new account to start shopping"
                          : "Login to your account"}
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={isRegisterMode ? handleRegister : handleLogin} className="space-y-4">
                      {isRegisterMode && (
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            data-testid="input-name"
                          />
                        </div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          data-testid="input-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          data-testid="input-password"
                        />
                      </div>
                      {!isRegisterMode && (
                        <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                          <p className="font-semibold mb-1">Demo Accounts:</p>
                          <p>Email: demo@cesdeals.com | Password: demo123</p>
                          <p>Email: admin@cesdeals.com | Password: admin123</p>
                        </div>
                      )}
                      <Button type="submit" className="w-full" data-testid="button-submit-login">
                        {isRegisterMode ? "Register" : "Login"}
                      </Button>
                      <div className="text-center">
                        <button
                          type="button"
                          className="text-sm text-primary hover:underline"
                          onClick={() => setIsRegisterMode(!isRegisterMode)}
                          data-testid="button-toggle-mode"
                        >
                          {isRegisterMode
                            ? "Already have an account? Login"
                            : "Don't have an account? Register"}
                        </button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              )}

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
