# Contributing to Next.js + shadcn/ui Starter Kit

Thank you for your interest in contributing! This document provides guidelines and steps for contributing to this project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## Getting Started

1. Fork the repository
2. Clone your fork:

```
git clone https://github.com/dzikrisyairozi/next-shadcn-ui-starter.git
```

3. Create a new branch:

```
git checkout -b feature/your-feature-name
```

4. Install dependencies:

```
pnpm install
```

## Development Workflow

1. Make your changes
2. Follow the coding standards:

   - Use TypeScript
   - Follow ESLint rules
   - Format with Prettier
   - Use meaningful commit messages

3. Test your changes:

```
pnpm dev
pnpm lint
pnpm format:check
```

4. Commit your changes:

```
git add .
git commit -m "feat: add new feature"
```

## Commit Message Guidelines

We follow conventional commits. Format: `type(scope): message`

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

Example:

```
feat(ui): add new calendar component
fix(auth): resolve login issue
docs(readme): update installation steps
```

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update the README.md if needed
4. Create a Pull Request with:
   - Clear title
   - Detailed description
   - Link to related issue
   - Screenshots (if UI changes)

## Branch Naming

Format: `type/description`

Examples:

- `feature/add-dark-mode`
- `fix/button-alignment`
- `docs/update-readme`

## Code Style

- Use TypeScript features
- Follow component structure:
  - Props interface first
  - Component logic
  - Styles
  - Export

Example:

```typescript
interface ButtonProps {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'default', children }: ButtonProps) {
  // Component logic
}
```

## Questions?

Feel free to open an issue for:

- Questions
- Bug reports
- Feature requests

## License

By contributing, you agree that your contributions will be licensed under the MIT License```
