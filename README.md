# Next.js + shadcn/ui Starter Kit

A modern, feature-rich starter template built with Next.js 14, Tailwind CSS, TypeScript, and shadcn/ui components.

## Features

- 🚀 Next.js 14 with App Router
- 💅 shadcn/ui Components (40+ pre-built components)
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🌙 Dark mode support
- 🧩 Component showcase page
- 🔍 ESLint and Prettier for code quality
- 🪝 Husky for Git hooks
- 📱 Fully responsive design
- 🎯 Path aliases (@/ based imports)
- 📦 Organized project structure

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## Getting Started

1. Clone the repository:

```
git clone https://github.com/dzikrisyairozi/next-shadcn-ui-starter.git
```

2. Install dependencies:

```
pnpm install
```

3. Run the development server:

```
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

````
next-shadcn-ui-starter/
├── src/
│ ├── app/ # App router pages
│ ├── components/ # React components
│ │ └── ui/ # shadcn/ui components
│ ├── hooks/ # Custom React hooks
│ └── lib/ # Utility functions
├── public/ # Static files
├── styles/ # Global styles
└── ```config files
````

## Available Scripts

```
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm lint:fix   # Fix ESLint errors
pnpm format     # Format code with Prettier
```

## Components Showcase

Visit `/sandbox` route to explore all available components. Components are organized into categories:

- Form Inputs
- Layout
- Navigation
- Feedback
- Data Display
- Overlay

## Customization

### Styling

1. Modify `globals.css` for global styles
2. Update `tailwind.config.ts` for Tailwind configuration
3. Edit component-specific styles in their respective files

### Theme

The default theme can be customized in `src/app/globals.css`:

- Light/dark mode colors
- Border radius
- Animations
- Typography

### Adding New Components

1. Use shadcn/ui CLI to add new components:

```
pnpm dlx shadcn-ui@latest add button
```

2. Components will be added to `src/components/ui/`

## Best Practices

- Use TypeScript for type safety
- Follow the established project structure
- Utilize path aliases for imports
- Keep components modular and reusable
- Use Prettier and ESLint for code consistency

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this starter kit for any project.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## Support

For support, please open an issue in the GitHub repository.
