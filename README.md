# AI Greener Livestock - Research Project Website

A professional, responsive website for the USDA-funded research project "Artificial Intelligence for Greener Livestock: Educational and Research" (Award Number: 2022-70001-37404).

## 🌱 Project Overview

This website showcases cutting-edge research in AI-powered methane emission monitoring for livestock operations. The project combines optical gas imaging (OGI) technology with deep learning to create practical tools for sustainable livestock management.

### Key Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional Academic Aesthetic**: Clean, modern layout with good typography
- **Accessibility**: Built with WCAG guidelines in mind, proper semantic HTML and ARIA attributes
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Fast Performance**: Optimized for speed with Next.js and modern best practices
- **Interactive Elements**: Tabs, accordions, and engaging user interface components

## 🚀 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) for accessible, modular components
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **Language**: TypeScript for type safety
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-greener-livestock.git
   cd ai-greener-livestock
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Project Structure

```
ai-greener-livestock/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── technology/        # Technology page
│   ├── publications/      # Publications page
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Site footer
├── lib/                  # Utility functions
├── public/               # Static assets
└── README.md             # This file
```

### Adding New Pages

1. Create a new directory in the `app/` folder
2. Add a `page.tsx` file with your page component
3. Update the navigation in `components/Header.tsx`

Example:
```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
    </div>
  )
}
```

### Customizing Styles

The website uses Tailwind CSS for styling. You can:

1. **Modify existing styles** by editing the Tailwind classes in components
2. **Add custom styles** in `app/globals.css`
3. **Configure theme** in `tailwind.config.js`

### Adding UI Components

The project uses Shadcn/ui components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Available components include: button, card, dialog, tabs, accordion, and more.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out/` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Enable static exports in `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Deploy the `out/` folder to GitHub Pages

### Custom Server

For custom hosting:

```bash
npm run build
npm run start
```

The application will be available on port 3000.

## 📄 Content Management

### Updating Research Information

1. **Publications**: Edit `app/publications/page.tsx`
2. **Team Information**: Update `app/about/page.tsx` and `app/contact/page.tsx`
3. **Technical Details**: Modify `app/technology/page.tsx`
4. **Statistics**: Update metrics in `app/page.tsx`

### Adding Images

1. Place images in the `public/` directory
2. Reference them using relative paths: `/image-name.jpg`
3. Use Next.js Image component for optimization:
   ```typescript
   import Image from 'next/image'
   
   <Image
     src="/your-image.jpg"
     alt="Description"
     width={800}
     height={600}
   />
   ```

### SEO Configuration

Update meta tags in:
- `app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata

## 🔍 Research Highlights

The website showcases:

- **Gasformer Architecture**: 88.56% mean IoU accuracy for methane detection
- **Multiple Datasets**: 15,000+ annotated images across MR, CR, and CD datasets
- **Real-time Processing**: 97-115 FPS performance for practical deployment
- **Dietary Impact Research**: 98% methane reduction with specific treatments
- **Open Source**: Code and datasets available for research community

## 🤝 Contributing

This website was created for the USDA research project. For updates or contributions:

1. Contact the research team (see Contact page)
2. Submit issues or suggestions via email
3. Follow academic collaboration guidelines

## 📧 Contact

**Principal Investigator**: Toqi Tahamid Sarker  
**Email**: toqitahamid.sarker@siu.edu  
**Institution**: Southern Illinois University  
**Award Number**: 2022-70001-37404  

## 📜 License

This project is developed for academic research purposes under USDA funding. Please contact the research team for usage permissions.

## 🏆 Acknowledgments

- **Funding**: USDA National Institute of Food and Agriculture (Award: 2022-70001-37404)
- **Institution**: Southern Illinois University, Carbondale
- **Research Team**: Interdisciplinary collaboration between Schools of Computing and Agricultural Sciences

---

*This website represents ongoing research in AI-powered sustainable agriculture. For the latest updates and research findings, please visit our publications page or contact the research team directly.*
