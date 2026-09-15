# Copilot Repository Instructions

## Project Overview

This is a Next.js 16 website built with React 19 and TypeScript in strict mode. It has two parts:

- `/` — a personal presentation page for Alexander Berlind, in English
- `/wedding/**` — a wedding invitation and RSVP subsite for Malin & Alexander, in Swedish

## Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode enabled)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Database**: Neon (PostgreSQL via @neondatabase/serverless)
- **Email**: Resend
- **Validation**: Zod

## Code Style and Formatting

### General
- Use **tab indentation** for all files (as per .editorconfig)
- Use LF (Unix) line endings
- Insert final newline at end of files
- Trim trailing whitespace
- Use UTF-8 encoding
- Follow K&R brace style (opening brace on same line)

### TypeScript
- **Always use TypeScript** for all new files
- Enable strict mode (already configured in tsconfig.json)
- **Never use `any` type** - use proper typing or `unknown` if necessary
- Prefer interfaces over type aliases for object types
- Use explicit return types for functions
- Use path aliases with `@/*` for imports (e.g., `@/app/wedding/components/...`)

### React
- Use **functional components only**
- Prefer React hooks over class components
- Use "use client" directive for client components
- Use "use server" directive for server actions
- Follow Next.js App Router conventions
- Component files should use `.tsx` extension

### JSX/TSX
- Use consistent tab indentation for JSX elements at the same nesting level
- Use double quotes for JSX attributes
- Prefer self-closing tags when there are no children

## Design System

### Color Scheme

The blush and sage variables below are the wedding palette, defined in `app/globals.css`.
The blush colors are wedding branding and belong only under `/wedding`; the personal
root page uses the sage and off-white variables.

| Variable        | Hex     | Usage                                                   |
|-----------------|---------|---------------------------------------------------------|
| `sage-darker`   | #4A5240 | Primary text for better contrast                        |
| `sage-dark`     | #5D664C | Secondary text, icons                                   |
| `sage-light`    | #A0AB89 | Header background, accommodation section, input borders |
| `sage-lighter`  | #C8D4B5 | Subtle backgrounds, hover accents                       |
| `off-white`     | #FFFAF9 | Input backgrounds, cards, form containers               |
| `blush-lighter` | #FBF0F1 | Subtle backgrounds, hover accents                       |
| `blush-light`   | #F6E5E7 | Page background                                         |
| `blush-medium`  | #F5D5D2 | Guest sections background, button hover states          |
| `blush-dark`    | #E69B97 | Primary buttons, focus rings, date overlay text         |
| `blush-darker`  | #D4817C | Button hover accents, active states                     |
| `blush-darkest` | #B86A65 | Submit button, active nav link                          |
| `error`         | #C45B52 | Form errors, alerts                                     |

**Always use these predefined color variables** instead of arbitrary color values.

## Security
- Always sanitize user input before rendering (use escape-html library)
- Use Zod for input validation
- Never commit secrets or API keys
- Use environment variables for sensitive data

## Code Organization

- Wedding-only code is self-contained under `app/wedding/**`, with its components in `app/wedding/components/` and its
  server action in `app/wedding/actions/`
- `app/components/` is reserved for components genuinely shared between the two sections
- Only `page.tsx` and `route.ts` create routes, so the `components/` and `actions/` folders under `app/wedding/` are not
  routable
- `app/layout.tsx` stays minimal (html/body, fonts, globals.css); wedding branding belongs in `app/wedding/layout.tsx`
- Use Next.js App Router file conventions (page.tsx, layout.tsx, etc.)

## Routing

- Internal links in the wedding subsite must be absolute and start with `/wedding`
- The nav active state uses exact `pathname ===` comparison, never `startsWith` — `startsWith("/wedding")` would mark
  the first link active on every wedding page
- The old bare paths (`/accommodation`, `/schedule`, `/presents`) are not redirected and return 404

## Scripts and Commands
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Production**: `npm start`
- **Lint**: `npm run lint`

## Best Practices
- Write clean, readable code with descriptive variable names
- Keep functions small and focused on a single responsibility
- Add comments only when necessary to explain complex logic
- Handle errors gracefully with appropriate error messages
- Test forms and user interactions thoroughly
- Ensure accessibility in all UI components
- Follow Next.js performance best practices (use Server Components by default)
- Optimize images using Next.js Image component

## Dependencies
- Only add new dependencies when absolutely necessary
- Prefer built-in Next.js features over third-party libraries
- Check for security vulnerabilities before adding packages
- Update package versions conservatively

## Testing
- Currently no test framework is configured
- Manual testing is required for all changes
- Test all form validations and error states
- Verify responsive design across different screen sizes
