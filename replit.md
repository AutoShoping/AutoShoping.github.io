# CESDeals E-commerce Platform

## Overview

CESDeals is an e-commerce platform specializing in automotive tools, home & garden supplies, electronics, and outdoor equipment. Built with React and TypeScript, the application provides a modern shopping experience with product browsing, cart management, user authentication, and responsive design. The platform targets auto body shops, DIY car owners, and home improvement enthusiasts.

## Recent Changes

### October 26, 2025 - Product Expansion and Feature Updates
- **Product Catalog Expansion**: Added 16 new products across categories (total: 28 products)
  - Automotive: 4 new products (dashboard camera, OBD2 scanner, jump starter, TPMS)
  - Tools: 4 new products (mechanic tool set, impact wrench, laser level, adjustable wrench set)
  - Home & Garden: 4 new products (pruning shears, solar lights, lawn sprinkler, tool organizer)
  - Electronics: 4 new products (wireless earbuds, smartwatch, power station, USB-C hub)
- **Cart System Overhaul**: Implemented fully functional shopping cart
  - Created CartContext for global cart state management
  - Cart starts empty by default (removed hardcoded items)
  - localStorage integration for cart persistence
  - Real-time cart count badge in navigation
  - Add to cart functionality on product cards and detail pages
- **Authentication System**: Implemented user login/registration
  - Created AuthContext for authentication state
  - Demo accounts available (demo@cesdeals.com / demo123, admin@cesdeals.com / admin123)
  - User registration with hashed password storage
  - Login/logout dropdown menu in navigation
  - Session persistence with localStorage

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, chosen for fast hot module replacement and optimized production builds
- **React Router** for client-side routing with declarative route configuration
- Strict TypeScript configuration disabled (`strict: false`) to allow gradual type adoption

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with HSL-based custom design tokens
- **CSS Custom Properties** for theme variables enabling consistent design system
- Components are aliased via `@/components` path for clean imports

**State Management**
- **React Context API** for global state (cart and authentication)
- **@tanstack/react-query** for server state management and data fetching
- **Local Storage** for cart persistence and basic authentication state

**Key Design Decisions**
- Single-page application (SPA) architecture for smooth user experience
- Component-based architecture with reusable UI elements
- Responsive design using Tailwind's breakpoint system
- Catch-all route pattern with custom 404 handling

### Authentication System

**Authentication Approach**
- Client-side authentication using Context API (`AuthContext`)
- Demo credentials hard-coded in the application for development/testing
- Simple hash-based password "verification" (not production-ready)
- User sessions persisted in localStorage
- No backend authentication server currently integrated

**Rationale**: Simplified authentication allows rapid prototyping without backend dependencies. This approach should be replaced with proper JWT-based authentication and secure backend validation for production.

### Shopping Cart System

**Cart Management**
- Context-based cart state (`CartContext`) managing items and quantities
- Cart data persisted to localStorage for session continuity
- Simple in-memory product catalog (`products.ts`) serving as data source
- Real-time cart count displayed in navigation

**Limitations**: Product data is currently static and client-side only. Future iterations would benefit from a backend API for dynamic inventory management.

### Data Layer

**Product Data**
- Static product catalog defined in `src/data/products.ts`
- Products organized by categories (automotive, tools, home-garden, electronics, outdoors)
- Each product includes pricing, images, features, and stock status
- No database currently - all product data is hardcoded

**Future Consideration**: Migration to a backend API with database (PostgreSQL recommended) would enable dynamic product management, inventory tracking, and order processing.

### Routing Structure

**Page Organization**
- `/` - Homepage with featured products and category highlights
- `/shop` - Main product browsing with filtering capabilities
- `/product/:id` - Individual product detail pages
- `/category/:category` - Category-specific product listings
- `/cart` - Shopping cart and checkout interface
- `/about` - Company information
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `*` - 404 Not Found page (catch-all route)

**Design Choice**: Catch-all route is positioned last to ensure custom routes take precedence, preventing unintended 404 redirects.

## External Dependencies

### Third-Party UI Libraries

**Radix UI Primitives**
- Complete suite of unstyled, accessible UI components
- Includes: Dialog, Dropdown, Popover, Tabs, Toast, Accordion, and 15+ other primitives
- Chosen for accessibility compliance (ARIA attributes, keyboard navigation)
- Provides foundation for shadcn/ui component system

**Supporting UI Libraries**
- **lucide-react** (v0.462.0) - Icon library for consistent iconography
- **embla-carousel-react** (v8.6.0) - Carousel/slider functionality
- **cmdk** (v1.1.1) - Command palette component
- **next-themes** (v0.3.0) - Theme switching support (dark mode)
- **react-day-picker** (v8.10.1) - Date picker component
- **input-otp** (v1.4.2) - OTP input component

### Form Management

**React Hook Form Ecosystem**
- **react-hook-form** - Form state management with validation
- **@hookform/resolvers** (v3.10.0) - Validation schema resolvers
- **zod** (implied via resolvers) - Schema validation

**Rationale**: React Hook Form chosen for performance (uncontrolled components) and minimal re-renders compared to alternatives like Formik.

### Styling & Design System

**Core Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities
- **class-variance-authority** (v0.7.1) - Component variant management
- **clsx** (v2.1.1) + **tailwind-merge** - Conditional class merging

**Design Tokens**: Custom HSL color system defined in `index.css` with CSS variables for theming.

### Development Tools

**Code Quality**
- **ESLint** with TypeScript support
- **Prettier** (implied via PostCSS/Tailwind)
- **lovable-tagger** - Component tagging for development mode

**Build Tools**
- **@vitejs/plugin-react-swc** - React plugin using SWC compiler for faster builds
- **PostCSS** with Autoprefixer for CSS processing

### Advertising Integration

**Google AdSense**
- Client ID: `ca-pub-5338931605037261`
- Integrated in `index.html` for monetization
- `ads.txt` file configured for ad verification

### Analytics & SEO

**Meta Tags**
- Open Graph tags for social media sharing
- Twitter Card integration
- SEO-optimized meta descriptions
- `robots.txt` configured for search engine crawlers (Googlebot, Bingbot, etc.)

### Missing Backend Services

**Currently Not Implemented**
- Payment processing gateway (Stripe, PayPal, etc.)
- Order management system
- Product database/CMS
- Email service for notifications
- Image hosting/CDN
- Search functionality backend

**Recommendation**: Future implementation should consider Stripe for payments, PostgreSQL for data persistence, and a RESTful API or GraphQL layer for frontend-backend communication.