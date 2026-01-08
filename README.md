# FUTURE_FS_02 - E-Commerce Store

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS. Features a complete shopping experience with product browsing, cart management, and checkout functionality.

## Features

- **Product Catalog**: Browse products with detailed information and images
- **Product Quick View**: Quick preview of products without navigating away
- **Shopping Cart**: Add/remove items, update quantities, and view cart summary
- **Cart Drawer**: Convenient side panel for cart management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with shadcn/ui component library
- **Product Detail Pages**: Comprehensive product information with reviews and specifications

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Package Manager**: npm / bun
- **State Management**: React Context API

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── CartDrawer.tsx  # Shopping cart sidebar
│   ├── ProductCard.tsx # Product display card
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Products.tsx    # Product listing
│   ├── ProductDetail.tsx # Individual product page
│   ├── Cart.tsx        # Cart page
│   ├── Checkout.tsx    # Checkout page
│   └── NotFound.tsx    # 404 page
├── context/            # React Context for state management
│   └── CartContext.tsx # Shopping cart context
├── data/               # Static data
│   └── products.ts     # Product database
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript types
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/TejasSharma356/FUTURE_FS_02.git
   cd FUTURE_FS_02
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or the port specified in your terminal).

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - Run TypeScript type checking

## Key Components

### CartContext
Global state management for shopping cart functionality, tracking items, quantities, and totals.

### ProductCard
Reusable component for displaying individual products with image, name, price, and quick view button.

### CartDrawer
Side panel drawer component for viewing and managing cart items with add/remove functionality.

### Product Pages
- **Index**: Home page with featured products and promotions
- **Products**: Full product catalog with filtering and sorting
- **ProductDetail**: Detailed view of a single product with full specifications
- **Cart**: Shopping cart with item management and checkout button
- **Checkout**: Secure checkout process

## Development

### Project Configuration

- **Vite Config**: [vite.config.ts](vite.config.ts)
- **Tailwind Config**: [tailwind.config.ts](tailwind.config.ts)
- **TypeScript Config**: [tsconfig.json](tsconfig.json)
- **ESLint Config**: [eslint.config.js](eslint.config.js)

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with Vite
- Lazy loading for images
- Code splitting for better load times
- CSS optimization with Tailwind purging

## Responsive Design

The application is fully responsive and tested on:
- Desktop (1920px and up)
- Laptop (1366px)
- Tablet (768px and up)
- Mobile (320px and up)

## Contributing

1. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please reach out to [TejasSharma356](https://github.com/TejasSharma356)

---

**Repository**: [FUTURE_FS_02](https://github.com/TejasSharma356/FUTURE_FS_02)
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
