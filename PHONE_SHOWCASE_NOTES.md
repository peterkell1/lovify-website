# PhoneShowcase - Local Asset Migration

## Main Phone Screen Images
Located in `/public/assets/phone-case/`

| Section | Title | Image |
|---------|-------|-------|
| 1 | Smarter Recovery | `mock-1.png` |
| 2 | Fuel That Moves You Forward | `mock-2.png` |
| 3 | Dial In Your Sleep | `mock-3.png` |
| 4 | Push With Purpose | `mock-4.png` |

## Section 1 - Floating Items (Desktop)

| File | Description | Size Class |
|------|-------------|------------|
| `mock-1-1.png` | Leaf icon | `w-12` (small) |
| `mock-1-2.png` | "Feel More Joy" card | `max-w-[14.5rem]` (large) |
| `mock-1-3.png` | Music notes icon | `w-20` (medium) |
| `mock-1-4.png` | Heart icon | `w-20` (medium) |
| `mock1-6.png` | "Favourite Songs" card | `max-w-[14.5rem]` (large) |
| `mock-1-5.png` | Nature thumbnail | `w-12` (small) |

> Note: `mock1-6.png` has no second hyphen in filename (different from others).

All desktop items have `drop-shadow-lg` (icons) or `drop-shadow-xl rounded-2xl` (cards).

## Section 1 - Floating Items (Mobile)

| File | Position | Size Class |
|------|----------|------------|
| `mock-1-3.png` | top-left | `!max-w-14` |
| `mock1-6.png` | top-right | `!max-w-24 rounded-lg` |
| `mock-1-2.png` | bottom-left | `!max-w-24 rounded-lg` |
| `mock-1-4.png` | bottom-right | `!max-w-14` |

All mobile items have `drop-shadow-lg` or `drop-shadow-xl`.

## Still TODO
- Sections 2, 3, 4 floating items (desktop + mobile) still use CDN URLs
- Need local assets for those sections to complete migration
