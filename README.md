# Alecktos website

A personal site for Alexander Berlind, with the wedding invitation and RSVP site
for Malin & Alexander as a subsection.

## Routes

| Path                     | Content                            | Language |
|--------------------------|------------------------------------|----------|
| `/`                      | Personal presentation and projects | English  |
| `/wedding`               | Wedding info and RSVP form         | Swedish  |
| `/wedding/accommodation` | Accommodation options              | Swedish  |
| `/wedding/schedule`      | Schedule for the day               | Swedish  |
| `/wedding/presents`      | Gift list                          | Swedish  |

The old bare paths (`/accommodation`, `/schedule`, `/presents`) are not
redirected and now return 404.

## Structure

All wedding code is self-contained under `app/wedding/**` — pages, components
and the server action. `app/components/` is reserved for components shared
between the two sections. The root page is a single file with no shared
components.

`app/layout.tsx` is deliberately minimal (html/body, fonts, `globals.css`);
everything wedding-specific — nav, hero image, blush background, metadata and
`lang="sv"` — lives in `app/wedding/layout.tsx`.

## Domain knowledge
- Declined guests will not be added as contacts in Resend.
- `submitRegistration` currently returns a stubbed success and never reaches the
  database or the emails — see the `//inactivate actual sending` early return in
  `app/wedding/actions/registration.ts`.

## Wedding palette (`/wedding` only)

The root page uses only the sage and off-white variables from this table; the
blush colors are the wedding branding.

| Color         | Hex       | CSS Variable    | Usage                                                                      |
|---------------|-----------|-----------------|----------------------------------------------------------------------------|
| Sage Darker   | `#4A5240` | `sage-darker`   | Primary text for better contrast                                           |
| Sage Dark     | `#5D664C` | `sage-dark`     | Secondary text, icons                                                      |
| Sage Light    | `#A0AB89` | `sage-light`    | Header background, accommodation section, input borders                    |
| Sage Lighter  | `#C8D4B5` | `sage-lighter`  | Subtle backgrounds, hover accents                                          |
| Off-White     | `#FFFAF9` | `off-white`     | Input backgrounds, cards, form containers                                  |
| Blush Lighter | `#FBF0F1` | `blush-lighter` | Subtle backgrounds, hover accents                                          |
| Blush Light   | `#F6E5E7` | `blush-light`   | Page background                                                            |
| Blush Medium  | `#F5D5D2` | `blush-medium`  | Guest sections background, button hover states, success message background |
| Blush Dark    | `#E69B97` | `blush-dark`    | Primary buttons, focus rings, date overlay text                            |
| Blush Darker  | `#D4817C` | `blush-darker`  | Button hover accents, active states                                        |
| Blush Darkest | `#B86A65` | `blush-darkest` | Submit button, active nav link                                             |
| Error         | `#C45B52` | `error`         | Form errors, alerts                                                        |

## Misc

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
