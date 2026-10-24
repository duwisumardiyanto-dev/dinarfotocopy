---
name: Metro Print Dynamics
colors:
  surface: '#0d1322'
  surface-dim: '#0d1322'
  surface-bright: '#333949'
  surface-container-lowest: '#080e1c'
  surface-container-low: '#151b2a'
  surface-container: '#191f2f'
  surface-container-high: '#242a39'
  surface-container-highest: '#2f3445'
  on-surface: '#dde2f7'
  on-surface-variant: '#c0c7d4'
  inverse-surface: '#dde2f7'
  inverse-on-surface: '#2a3040'
  outline: '#8a919e'
  outline-variant: '#414752'
  surface-tint: '#a4c9ff'
  primary: '#a4c9ff'
  on-primary: '#00315d'
  primary-container: '#0078d7'
  on-primary-container: '#000510'
  inverse-primary: '#005fad'
  secondary: '#7ada95'
  on-secondary: '#00391a'
  secondary-container: '#00753b'
  on-secondary-container: '#98f9b0'
  tertiary: '#ffb5a0'
  on-tertiary: '#601500'
  tertiary-container: '#db3d04'
  on-tertiary-container: '#120100'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004884'
  secondary-fixed: '#96f7af'
  secondary-fixed-dim: '#7ada95'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005228'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872100'
  background: '#0d1322'
  on-background: '#dde2f7'
  surface-variant: '#2f3445'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 1rem
  gutter-desktop: 1.25rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system channels the bold clarity of the Swiss-inspired Metro design movement fused with the practical rigor of an on-demand commercial digital copy & print shop. It strips away ornamental clutter to celebrate typographic hierarchy, authentic grid modularity, and high-contrast color coding.

The design language embodies three core pillars:
1. **Instant Utility:** Information and core actions—uploading print-ready documents, selecting binding formats, tracking queue velocity, and calculating real-time job costs—take absolute precedence over decorative flourishes.
2. **Kinetic Modular Tiles:** Drawing directly from dynamic live-tiles, the interface treats cards as functional surfaces with glanceable live states (e.g., "Printing - 42% complete", "Ready for Pickup", "A4 Color Bound").
3. **Structured Industrial Precision:** Crisp alignment, sharp corners, and high-contrast contrast surfaces communicate mechanical precision, reliability, and speed for students, office administrators, and walk-in businesses.

## Colors

The palette leverages a deep charcoal-slate base (`#111726`) paired with distinct chromatic channels inspired by modern metro tiles:
- **Primary (Azure Cyan / `#0078D7`):** Primary interactive triggers, active tabs, upload dropzones, and document preview highlights.
- **Secondary (Vibrant Emerald / `#107C41`):** Completed print jobs, positive status badges, balance confirmations, and cost-effective bundle alerts.
- **Tertiary (Energetic Amber / `#D83B01`):** Urgent notifications, ongoing print queues, express delivery tags, and priority order flags.
- **Accent Tints:** Royal Violet (`#68217A`) is designated for user accounts, chat with print operators, and binding/finishing configurations.
- **Surface & Dark Contrasters:** Deep background (`#0B0F19`), elevated tile surface (`#161E31`), bordered tile containers (`#222D47`), and high-clarity typography in crisp white (`#FFFFFF`) with secondary slate grey (`#94A3B8`).

## Typography

The typography relies on Plus Jakarta Sans throughout for clean, geometric rhythm, excellent screen rendering, and contemporary digital presence. 

- **Display & Headlines:** Heavy weights (700 and 800) set in tight tracking bring the authoritative, poster-like impact characteristic of Swiss and Metro typography.
- **Status & Navigation Labels:** Set in uppercase with expanded letter-spacing (0.05em to 0.08em) for instantaneous scanability across busy print dashboards.
- **Numbers & Metrics:** Tabular figures are enforced for page counts, file sizes, cost breakdowns, and order queue estimations.

## Layout & Spacing

The layout is governed by an asymmetrical modular dashboard grid that mirrors live-tile hubs. 

- **Grid Architecture:** 
  - Mobile (360px–639px): 2-column grid with a baseline `gutter` of `1rem` and `margin` of `1rem`. Tiles occupy either 1x1 (small status) or 2x1 (broad action banner).
  - Tablet (640px–1023px): 4-column grid with `1.25rem` gutters.
  - Desktop (1024px+): 12-column live canvas or a constrained 6-tile modular hub with a max width of 1440px.
- **Tile Rhythms:** Tiles conform strictly to aspect proportions: 1x1 (Square Small), 2x1 (Wide Banner), and 2x2 (Primary Interactive Hub). Gaps remain rigid and uniform without soft drift.

## Elevation & Depth

Visual hierarchy does not use diffuse fuzzy drop shadows. Instead, it relies on bold tonal surfaces and structural low-contrast borders:

- **Surface Tiers:**
  - Base Floor: `#0B0F19`
  - Elevated Container / Tile: `#161E31`
  - Floating Live Tile / Highlighted State: Pure Accent Fills (`#0078D7`, `#107C41`, `#D83B01`, `#68217A`)
- **Boundary Precision:** Unselected neutral tiles employ a 1px solid stroke in `#222D47`. Selected or focused tiles shift to a 2px crisp outline in `#0078D7` or full solid accent fills with stark white iconography.
- **Active State / Pressed:** Scale down transform (`scale(0.98)`) with a high-contrast brightness boost (`filter: brightness(1.15)`) mimicking hardware tile press feedback.

## Shapes

In true Metro and architectural print fashion, all container shapes are strictly sharp (`0px` border radius). 

Buttons, live tiles, progress trackers, modal trays, badge tags, and file drop areas adopt razor-sharp rectilinear geometry. This maximizes interior information density, emphasizes the modular grid structure, and differentiates the service from generic soft-cornered SaaS tools.

## Components

### Live Tiles (Core System Component)
- **Structure:** Sharp square or rectangular containers with high-contrast glyphs placed top-left or centered, and persistent metadata docked bottom-left.
- **Dynamic Ribbon:** Top-right corner displays small badges (e.g., "FASE 1", "READY", "3 FILES").
- **States:** Default (solid surface `#161E31`), Color-Coded (solid primary, secondary, or tertiary fill with `#FFFFFF` text), and Progress State (segmented vertical or horizontal fill indicating upload/print percentage).

### Buttons
- **Primary:** Sharp-cornered block button in `#0078D7` with bold white centered text (`label-md`). Hover adds 10% white overlay; active scales to 0.98.
- **Secondary:** Transparent background with a 1.5px solid border in `#222D47` or `#FFFFFF`, filling solid white on hover with `#0B0F19` text.
- **Danger / Quick Cancel:** Solid `#D83B01` with white text.

### File Upload & Dropzone
- Rectangular zone framed with a 2px dashed border in `#0078D7` over `#161E31`. Includes instant drag-and-drop support, format support chips (PDF, DOCX, PPTX), page count calculator, and a clear tabular file list.

### Inputs & Selectors (Print Parameters)
- Rectangular field with `#161E31` background, 1px border in `#222D47`, and stark white input text.
- Focus swaps the border to 2px solid `#0078D7` without outline blur.
- Paper type, binding style, and color options (Grayscale vs Full Color) toggle via sharp segmented control tiles rather than standard dropdown menus.

### Status Badges & Chips
- Compact rectangular chips with uppercase typography (`label-sm`).
- Solid background tints: `#107C41` for "Siap Diambil", `#D83B01` for "Sedang Dicetak", `#0078D7` for "Menunggu File", `#68217A` for "Chat CS".

### Order Queue Tracker
- Step progression rendered as a stark segmented bar where each stage (Upload > Review & Bayar > Cetak > Selesai) lights up as a solid geometric block with high-contrast text and timestamp data.