# PHASE 2: ARCHITECTURE PLAN
## SANIP/EQASA Website Rebuild

**Date:** 2026-08-30  
**Phase:** Architecture & Project Structure  
**Status:** Ready for review and approval

---

## 1. PROJECT STRUCTURE OVERVIEW

```
SANIP/
├── index.html                  # Homepage
├── css/
│   ├── global.css              # Global styles, variables, reset
│   ├── layout.css              # Layout, grid, spacing system
│   ├── typography.css          # Typography, headings, body text
│   ├── components.css          # Buttons, forms, cards, etc.
│   ├── responsive.css          # Mobile-first breakpoints
│   ├── utilities.css           # Helper classes
│   └── print.css               # Print styles
├── js/
│   ├── main.js                 # Global initialization
│   ├── navigation.js           # Mobile menu toggle, dropdowns
│   ├── forms.js                # Form validation, submission
│   ├── events.js               # Event calendar interactions
│   ├── cart.js                 # Cart functionality
│   └── accessibility.js        # Keyboard nav, ARIA support
├── images/                     # Downloaded from live site
│   ├── logo/
│   ├── featured/               # Homepage carousel, hero images
│   ├── gallery/                # Equestrian photos
│   └── placeholders/           # Placeholder images (list maintained)
├── assets/                     # PDFs, downloads
│   ├── downloads/              # User-downloadable PDFs
│   ├── forms/                  # Form assets
│   └── icons/                  # SVG/icon files
├── pages/                      # Individual page files
│   ├── index.html              # Homepage (duplicate in root)
│   ├── about-us.html           # About Us page
│   ├── need-to-know.html       # Need to Know hub
│   ├── need-to-know/
│   │   ├── regulations.html    # Exam Regulations & Conditions
│   │   ├── credits-exemptions.html
│   │   ├── exam-day.html
│   │   ├── recommended-reading.html
│   │   └── required-documents.html
│   ├── syllabus.html           # Syllabus hub
│   ├── syllabus-pages/         # Individual module pages
│   │   ├── module-1.html
│   │   ├── module-2.html
│   │   ├── module-3.html
│   │   ├── module-4.html
│   │   ├── module-5.html
│   │   ├── module-5-1.html
│   │   ├── module-6.html
│   │   ├── module-6-1.html
│   │   ├── module-7.html
│   │   └── module-7-1.html
│   ├── exam-dates.html         # Event calendar
│   ├── downloads.html          # Downloads & resources
│   ├── rpl.html                # RPL information
│   ├── fees.html               # EQASA fees table
│   ├── alumni.html             # Alumni list
│   ├── contact.html            # Contact information
│   ├── news.html               # News & notices hub
│   ├── news-2026.html          # 2026 EQASA message
│   ├── cart.html               # Shopping cart
│   ├── shop.html               # Product listing
│   ├── product-registration.html
│   ├── account/
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── my-account.html
│   │   ├── my-profile.html
│   │   └── password-reset.html
│   └── faq.html                # FAQ section
├── components/                 # Reusable component templates
│   ├── header.html             # Header + navigation
│   ├── footer.html             # Footer
│   ├── sidebar.html            # Sidebar (Website & Syllabus info)
│   ├── navigation-menu.html    # Main navigation
│   ├── mobile-menu.html        # Mobile hamburger menu
│   ├── breadcrumbs.html        # Breadcrumb navigation
│   ├── button.html             # Button patterns
│   ├── form-input.html         # Form input patterns
│   ├── form-select.html        # Select/dropdown patterns
│   ├── card.html               # Card/post component
│   ├── table.html              # Responsive table wrapper
│   ├── event-listing.html      # Event item
│   ├── download-item.html      # Download item
│   ├── contact-item.html       # Contact person row
│   ├── module-card.html        # Syllabus module card
│   ├── hero.html               # Hero section
│   └── testimonial.html        # Quotes/testimonials (if used)
├── data/                       # JSON data files for content
│   ├── navigation.json         # Menu structure
│   ├── modules.json            # Syllabus modules info
│   ├── fees.json               # Fee structure
│   ├── events.json             # Events data (placeholder)
│   ├── contacts.json           # Contact information
│   ├── downloads.json          # Downloads listing
│   ├── products.json           # WooCommerce products
│   └── news.json               # News items
├── includes/                   # PHP/template includes (if needed)
│   ├── config.php              # Configuration
│   ├── database.php            # Database connection (mock)
│   └── functions.php           # Utility functions
├── docs/
│   ├── ARCHITECTURE.md         # This document
│   ├── COMPONENT-LIBRARY.md    # Component documentation
│   ├── CSS-GUIDE.md            # CSS structure guide
│   ├── RESPONSIVE-GUIDE.md     # Responsive design guidelines
│   └── IMAGE-INVENTORY.md      # Image tracking (placeholders list)
└── README.md                   # Project overview

```

---

## 2. PAGE HIERARCHY & ORGANIZATION

### Primary Structure (Based on Live Site Navigation)

```
HOME (index.html)
│
├── ABOUT US (about-us.html)
│   └── Long-form content page
│
├── EXAM DATES (exam-dates.html)
│   └── Event calendar with views
│
├── NEED TO KNOW (need-to-know.html)
│   ├── regulations.html
│   ├── credits-exemptions.html
│   ├── exam-day.html
│   ├── recommended-reading.html
│   └── required-documents.html
│
├── SYLLABUS (syllabus.html)
│   ├── module-1.html
│   ├── module-2.html
│   ├── module-3.html
│   ├── module-4.html
│   ├── module-5.html
│   ├── module-5-1.html
│   ├── module-6.html
│   ├── module-6-1.html
│   ├── module-7.html
│   └── module-7-1.html
│
├── DOWNLOADS (downloads.html)
│   └── PDF/DOC resource listing
│
├── RPL (rpl.html)
│   └── Recognition of Prior Learning
│
├── FEES (fees.html)
│   └── Fee table
│
├── ALUMNI (alumni.html)
│   └── Download link for instructors list
│
├── CONTACT (contact.html)
│   └── Contact table + info
│
├── ACCOUNT (account/)
│   ├── login.html
│   ├── register.html
│   ├── my-account.html
│   ├── my-profile.html
│   └── password-reset.html
│
├── SHOP (shop.html)
│   └── WooCommerce product listing
│
├── PRODUCT (product-registration.html)
│   └── EQASA Registration (R400)
│
├── CART (cart.html)
│   └── Shopping cart
│
├── NEWS (news.html)
│   └── News & Notices hub
│       └── news-2026.html (Annual message)
│
└── FAQ (faq.html)
    └── FAQ section (from homepage)
```

---

## 3. COMPONENT INVENTORY

### Recurring Page Components (Across All Pages)

```
HEADER (components/header.html)
├── Logo/Branding
├── Primary Navigation Menu
└── Cart Icon/Counter

NAVIGATION MENU (components/navigation-menu.html)
├── Home
├── Account (dropdown)
│   ├── My Account
│   ├── Register After Payment
│   ├── My Profile
│   ├── Login
│   ├── Logout
│   └── Password Reset
├── Exam Dates
├── Need to Know
├── Syllabus
├── FAQ
├── Cart
├── Contact Us
└── 2026 EQASA

SIDEBAR (components/sidebar.html)
├── Website Information Section
│   ├── EQASA Fees
│   ├── Need to Know - All
│   ├── News and Notices
│   ├── Alumni List
│   ├── Syllabus
│   ├── RPL
│   └── Downloads
└── Syllabus Information Section
    ├── Module 1 link
    ├── Module 2 link
    ├── Module 3 link
    ├── Module 4 link
    ├── Module 5 link
    ├── Module 5.1 link
    ├── Module 6 link
    ├── Module 6.1 link
    ├── Module 7 link
    └── Module 7.1 link

FOOTER (components/footer.html)
├── Column 1: SANIP branding + about
├── Column 2: Quick links
│   ├── EQASA Registration
│   ├── Home
│   ├── Account links
│   ├── Exam Dates
│   └── Syllabus
├── Column 3: Resources
│   ├── Need to Know
│   ├── FAQ
│   ├── Cart
│   ├── Contact
│   └── 2026 EQASA
├── Column 4: Copyright/Credits
│   ├── © SANIP 2026
│   └── Powered by [credit]
└── Back to Top link

BREADCRUMBS (components/breadcrumbs.html)
└── Hierarchical page navigation

MOBILE HAMBURGER MENU (components/mobile-menu.html)
└── Responsive mobile navigation toggle
```

### Content Components

```
CARDS (components/card.html)
├── Featured post card
├── News item card
├── Module card
└── Event card

BUTTONS (components/button.html)
├── Primary (CTA)
├── Secondary
├── Tertiary
├── Danger
└── Disabled

FORMS (components/form-*.html)
├── Input text fields
├── Select dropdowns
├── Checkboxes
├── Radio buttons
├── Text areas
├── Submit buttons
└── Validation states

TABLES (components/table.html)
├── Contact info table
├── Fees table
├── Data table wrapper
└── Responsive table handling

EVENT LISTINGS (components/event-listing.html)
├── Event title
├── Date/time
├── Venue/location
├── Pricing
├── Status (Sold Out, Available, etc.)
└── "Get Tickets" button

DOWNLOAD ITEMS (components/download-item.html)
├── Title
├── Description
└── Download link

HEROES/FEATURED (components/hero.html)
├── Full-width hero section
├── Background image/color
├── Overlay text
└── CTA button
```

---

## 4. CSS ARCHITECTURE

### Global Styles (css/global.css)
```css
/* CSS Custom Properties (Variables) */
--color-primary: #...
--color-secondary: #...
--color-accent: #...
--color-text: #...
--color-text-light: #...
--color-border: #...
--color-background: #...

--font-primary: 'Font Name', serif;
--font-secondary: 'Font Name', sans-serif;

--space-xs: 0.5rem
--space-sm: 1rem
--space-md: 1.5rem
--space-lg: 2rem
--space-xl: 3rem

--breakpoint-mobile: 320px
--breakpoint-mobile-sm: 375px
--breakpoint-mobile-md: 480px
--breakpoint-tablet: 768px
--breakpoint-tablet-lg: 1024px
--breakpoint-laptop: 1280px
--breakpoint-desktop: 1440px
--breakpoint-desktop-lg: 1920px

/* Reset & Base Styles */
- HTML5 semantic element resets
- Box-sizing: border-box
- Base font sizing
- Link colors
- List resets
- Table resets
```

### Layout Styles (css/layout.css)
```css
/* Grid System */
- Container class (max-width: 1200px)
- Grid utilities
- Flexbox utilities
- Alignment helpers

/* Header Layout */
- Sticky header
- Logo positioning
- Navigation layout
- Cart icon positioning

/* Sidebar + Content Layout */
- Two-column layout
- Single-column layout (mobile)
- Sidebar width (300px)
- Content area calculation

/* Footer Layout */
- Four-column grid
- Mobile stacking
- Column widths
```

### Typography Styles (css/typography.css)
```css
/* Heading Hierarchy */
h1 - Page titles (2.5rem)
h2 - Section headings (2rem)
h3 - Subsection (1.5rem)
h4 - Minor heading (1.25rem)
h5 - Small heading (1.1rem)
h6 - Tiny heading (1rem)

/* Body Text */
p - Standard paragraph
body text size/line-height/letter-spacing

/* Special Text */
.lead - Large introductory text
.small - Smaller text
.muted - Lighter color text
.highlight - Emphasized text

/* Links */
a - Link color + decoration
a:hover - Hover state
a:active - Active state
a:focus - Focus state (accessibility)

/* Lists */
ul, ol - List styling
li - List item styling
.list-inline - Inline lists

/* Tables */
table - Table styling
thead, tbody - Section styling
th, td - Cell styling
```

### Components Styles (css/components.css)
```css
/* Buttons */
.btn - Base button style
.btn-primary - Primary action
.btn-secondary - Secondary action
.btn-small - Smaller button
.btn-large - Larger button
.btn-disabled - Disabled state
.btn:hover, :active, :focus

/* Forms */
.form-group - Form element wrapper
label - Label styling
input, select, textarea - Input styling
.input-error - Error state
.input-success - Success state
.input-focus - Focus state

/* Cards */
.card - Card container
.card-header - Card title
.card-body - Card content
.card-footer - Card footer
.card-hover - Hover effect

/* Navigation */
.nav - Navigation base
.nav-item - Nav item
.nav-link - Nav link
.nav-link.active - Active state
.dropdown - Dropdown container
.dropdown-menu - Dropdown menu
.dropdown-item - Dropdown item

/* Tables */
.table - Table wrapper
.table-responsive - Responsive wrapper
.table-striped - Alternating rows
.table-hover - Hover effects
thead, tbody - Coloring

/* Alerts/Messages */
.alert - Alert base
.alert-success - Success alert
.alert-error - Error alert
.alert-warning - Warning alert
.alert-info - Info alert

/* Badges/Tags */
.badge - Badge styling
.badge-primary - Primary badge
.badge-secondary - Secondary badge
```

### Responsive Styles (css/responsive.css)
```css
/* Mobile First Approach */

/* Extra small devices (320px - 374px) */
@media (min-width: 320px) { }

/* Small devices (375px - 479px) */
@media (min-width: 375px) { }

/* Mobile landscape (480px - 767px) */
@media (min-width: 480px) { }

/* Tablet (768px - 1023px) */
@media (min-width: 768px) { }

/* Tablet landscape (1024px - 1279px) */
@media (min-width: 1024px) { }

/* Laptop (1280px - 1439px) */
@media (min-width: 1280px) { }

/* Desktop (1440px - 1919px) */
@media (min-width: 1440px) { }

/* Large desktop (1920px+) */
@media (min-width: 1920px) { }

/* Specific adjustments per breakpoint */
- Navigation changes (desktop menu vs mobile hamburger)
- Sidebar behavior (visible/hidden)
- Font sizes (scaling)
- Padding/margin (spacing adjustments)
- Column layouts (grid adjustments)
- Image sizing (responsive)
```

### Utilities (css/utilities.css)
```css
/* Spacing Utilities */
.m-* (margin)
.p-* (padding)
.mt-*, .mb-*, .ml-*, .mr-* (directional)

/* Display */
.d-none - Display none
.d-block - Display block
.d-flex - Display flex
.d-grid - Display grid
.hidden-mobile - Hide on mobile
.hidden-desktop - Hide on desktop
.visible-mobile - Show only mobile
.visible-desktop - Show only desktop

/* Text Utilities */
.text-center - Text alignment
.text-left, .text-right
.font-bold - Font weight
.font-italic - Font style
.text-uppercase, .text-lowercase
.text-truncate - Ellipsis
.line-clamp - Multi-line truncate

/* Visibility */
.sr-only - Screen reader only
.visually-hidden - Visually hidden but available to screen readers

/* Flex Utilities */
.flex-center - Flex centering
.flex-between - Space-between
.flex-wrap - Wrap content
```

---

## 5. JAVASCRIPT ORGANIZATION

### main.js (Global Initialization)
```javascript
// Initialize all components on page load
- DOM ready check
- Load navigation
- Load mobile menu
- Initialize forms
- Initialize event listeners
- Initialize accessibility features
- Load cart state
```

### navigation.js (Navigation & Menus)
```javascript
// Mobile hamburger menu toggle
- Toggle visibility
- Close on link click
- Close on outside click
- Accessibility: Focus management

// Dropdown menus
- Desktop hover state
- Mobile click state
- Keyboard navigation (arrow keys)
- Close on escape key

// Active page indicator
- Highlight current page in nav
- Update active classes
```

### forms.js (Form Handling)
```javascript
// Form validation
- Email validation
- Required field validation
- Phone number format
- Custom validation rules
- Error message display

// Form submission
- AJAX submission
- Fallback form submission
- Loading state
- Success/error messages
- Form reset after submission

// Input focus states
- Visual feedback
- Accessibility: Focus indicators
```

### events.js (Event Calendar)
```javascript
// Event calendar interactions
- Calendar view toggle (month/list/day)
- Date filtering
- Keyword search
- Event detail expansion
- Ticket booking button

// Event data
- Parse event data
- Filter by date
- Sort by proximity/date
```

### cart.js (Shopping Cart)
```javascript
// Cart functionality
- Add to cart
- Remove from cart
- Update quantities
- Calculate totals
- Persist cart state (localStorage)
- Update cart counter (header)

// Checkout flow
- Form validation
- Payment integration (mock)
- Order confirmation
```

### accessibility.js (Accessibility)
```javascript
// Keyboard navigation
- Tab order management
- Skip to content link
- Keyboard menu navigation

// ARIA support
- Add ARIA labels where needed
- Role attributes
- Live regions for dynamic content

// Focus management
- Visible focus indicators
- Focus trap in modals
- Focus restoration
```

---

## 6. DATA STRUCTURE

### navigation.json
```json
{
  "primary": [
    { "label": "Home", "href": "/" },
    { "label": "Account", "href": "#", "submenu": [
      { "label": "My Account", "href": "/account/" },
      { "label": "Register", "href": "/account/register/" },
      { "label": "Login", "href": "/account/login/" }
    ]},
    { "label": "Exam Dates", "href": "/exam-dates/" },
    { "label": "Need to Know", "href": "/need-to-know/" },
    { "label": "Syllabus", "href": "/syllabus/" },
    { "label": "FAQ", "href": "#faq" },
    { "label": "Cart", "href": "/cart/" },
    { "label": "Contact Us", "href": "/contact/" },
    { "label": "2026 EQASA", "href": "/news-2026/" }
  ],
  "sidebar_website_info": [
    { "label": "EQASA Fees", "href": "/fees/" },
    { "label": "Need to Know", "href": "/need-to-know/" },
    ...
  ],
  "sidebar_syllabus": [
    { "label": "Module 1", "href": "/syllabus/module-1/" },
    ...
  ]
}
```

### modules.json (Syllabus Data)
```json
[
  {
    "id": "module-1",
    "title": "Module 1 – Stable Yard Skills",
    "slug": "module-1",
    "level": 1,
    "type": "Stable Yard Skills",
    "description": "Professional Groom certification...",
    "requirements": [...],
    "content": "Long-form HTML content"
  },
  ...
]
```

### fees.json
```json
{
  "currency": "ZAR",
  "items": [
    { "description": "Registration (once-off)", "amount": 400 },
    { "description": "Module 1", "amount": 2090 },
    ...
  ]
}
```

### contacts.json
```json
[
  {
    "name": "Troy Kernick",
    "position": "Managing Director",
    "email": "kzn@sanip.org.za",
    "region": "Hillcrest – KZN"
  },
  ...
]
```

### downloads.json
```json
{
  "categories": [
    {
      "name": "Alumni & Lists",
      "items": [
        {
          "title": "EQASA ALUMNI LIST",
          "description": "Qualified instructors list",
          "url": "/assets/downloads/alumni-list.pdf"
        }
      ]
    },
    {
      "name": "Assessments",
      "items": [...]
    }
  ]
}
```

---

## 7. IMAGE ASSET MANAGEMENT

### Image Categories & Sources

#### Downloaded from Live Site
```
/images/
├── logo/
│   └── sanip-logo.png (from /wp-content/uploads/)
├── featured/
│   ├── 141.jpg
│   ├── Alex-and-Muffin.jpg
│   ├── Coach-Ong-Wan-Ming-Malaysia.png
│   ├── Dance-Austria-Tanzania-Saumur.jpg
│   └── Western-Cape-examiner-candidate.jpg
└── gallery/
    └── [carousel/featured images]
```

#### Cannot Access - Will Use Placeholders
```
/images/placeholders/
├── [image-name]-PLACEHOLDER.jpg (with PLACEHOLDER note)
└── IMAGE_INVENTORY.md (tracks all placeholders)
```

### Image Optimization Strategy
- Responsive images using `<picture>` tags
- srcset for different screen sizes
- WebP format where possible
- Fallback to JPG/PNG
- Lazy loading for below-fold images
- Responsive sizing rules in CSS

### Placeholder Tracking (IMAGE_INVENTORY.md)
```
# Image Inventory & Placeholders

## Successfully Downloaded
- ✓ sanip-logo.png
- ✓ 141.jpg
- ✓ Alex-and-Muffin.jpg
... [list continues]

## Missing/Placeholder Images
- ⚠ [image-name] - PLACEHOLDER (originally from /wp-content/uploads/...)
- ⚠ [image-name] - PLACEHOLDER
... [list continues]

**Total Placeholders:** X images
**Action Required:** Download these images from live site or obtain from SANIP
```

---

## 8. RESPONSIVE DESIGN STRATEGY

### Mobile-First Approach
- Base styles for 320px
- Progressive enhancement with media queries
- No mobile-specific breakout stylesheets
- Single responsive.css file

### Key Responsive Changes

**320px - 374px (Extra Small Mobile)**
- Single column layout
- Full-width content
- Hamburger navigation
- Stacked sidebar (below content)
- Larger touch targets (44-48px buttons)
- Simplified tables (vertical stacking)

**375px - 479px (Small Mobile)**
- Slightly increased padding
- Slightly larger font sizes
- Better spacing

**480px - 767px (Mobile Landscape)**
- Two-column layouts start
- Sidebar optional visibility
- Better table handling

**768px - 1023px (Tablet)**
- Two-column main layout
- Sidebar visible alongside content
- Full navigation bar (no hamburger)
- Improved spacing
- Larger input fields

**1024px - 1279px (Tablet Landscape)**
- Proper grid layouts
- Full sidebar width
- Better proportioning

**1280px+ (Desktop & Above)**
- Optimal reading width
- Three-column layouts where appropriate
- Full menu expansion
- Proper spacing throughout
- Optimized image sizes

### Responsive Components Checklist
- ✓ Navigation (hamburger → full menu)
- ✓ Sidebar (below content → beside content)
- ✓ Forms (full width → constrained width)
- ✓ Tables (vertical → horizontal)
- ✓ Images (100% width → constrained)
- ✓ Grid layouts (1 col → 2 col → 3 col)
- ✓ Typography (scale with breakpoints)
- ✓ Buttons/inputs (touch-friendly sizing)

---

## 9. COMPONENT LIBRARY

### Button Patterns
```html
<button class="btn btn-primary">Action</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-small">Small</button>
<button class="btn btn-large">Large</button>
<button class="btn btn-disabled" disabled>Disabled</button>
<button class="btn btn-primary" data-action="submit">Submit</button>
```

### Form Patterns
```html
<form class="form">
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Card Patterns
```html
<div class="card">
  <div class="card-header">
    <h3>Title</h3>
  </div>
  <div class="card-body">
    <p>Content here</p>
  </div>
  <div class="card-footer">
    <a href="#" class="btn btn-secondary">Read More</a>
  </div>
</div>
```

### Navigation Patterns
```html
<nav class="nav">
  <ul class="nav-list">
    <li class="nav-item">
      <a href="/" class="nav-link active">Home</a>
    </li>
    <li class="nav-item dropdown">
      <button class="nav-link">Account</button>
      <ul class="dropdown-menu">
        <li><a href="/login/">Login</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

---

## 10. PAGE TEMPLATE STRUCTURE

### Standard Page Layout
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, title, description -->
  <!-- CSS links -->
</head>
<body>
  <!-- Skip to content link (accessibility) -->
  
  <!-- Header with navigation -->
  <!-- Include components/header.html -->
  
  <main class="main-content">
    <div class="container">
      <div class="content-wrapper">
        
        <!-- Page content area -->
        <article class="page-content">
          <h1>Page Title</h1>
          <!-- Page-specific content -->
        </article>
        
        <!-- Sidebar (optional on mobile) -->
        <aside class="sidebar">
          <!-- Include components/sidebar.html -->
        </aside>
        
      </div>
    </div>
  </main>
  
  <!-- Footer -->
  <!-- Include components/footer.html -->
  
  <!-- JavaScript -->
  <script src="/js/main.js"></script>
  <!-- Page-specific JS if needed -->
</body>
</html>
```

---

## 11. CONTENT DELIVERY STRATEGY

### Static HTML Files
- Each page as individual .html file
- Semantic HTML5 markup
- No server-side rendering required
- Content embedded directly in HTML

### Component Includes
- Include patterns in HTML comments
- Reference component files as templates
- Can be combined with a build process if needed

### Data-Driven Content
- JSON data files for lists (events, downloads, contacts)
- JavaScript to parse and render lists
- Alternative: Static HTML if no dynamic updates needed

### Image Delivery
- Local /images/ folder
- Downloaded assets where possible
- Placeholder strategy for unavailable images
- Responsive srcset and picture tags

---

## 12. ASSET FILE TYPES & FORMATS

```
CSS:           .css files (global)
JavaScript:    .js files (modular)
HTML:          .html files (pages)
Images:        .jpg, .png, .webp (responsive)
Documents:     .pdf files (downloads)
Data:          .json files (structured data)
Fonts:         .woff2, .woff (web-safe)
Icons:         .svg files (SVG sprites or individual)
```

---

## 13. BUILD & DEPLOYMENT NOTES

### Development Setup
```bash
SANIP/
├── (local development folder structure as above)
└── No build process required for initial version
```

### File Serving
- Can be served with simple HTTP server
- No Node.js/webpack required
- Works in any static file server
- Can be deployed to any web host

### Future Enhancements
- Build process (if adding Sass, minification)
- Component templating system
- Static site generator (11ty, Hugo, etc.)
- API integration for dynamic content

---

## 14. ACCESSIBILITY FEATURES

### Built-In
- ✓ Semantic HTML5 markup
- ✓ ARIA labels and roles
- ✓ Keyboard navigation
- ✓ Focus management
- ✓ Color contrast compliance
- ✓ Skip to content links
- ✓ Form labels
- ✓ Error messaging
- ✓ Alt text for images

### Testing Plan
- WCAG 2.1 AA compliance
- Keyboard-only navigation
- Screen reader testing
- Color contrast verification
- Focus indicator visibility

---

## 15. PERFORMANCE CONSIDERATIONS

### Optimization Strategy
- Minimal CSS (no bloated frameworks)
- Vanilla JavaScript (no jQuery dependencies)
- Lazy loading for images
- Responsive images (srcset/picture)
- Optimized image sizes
- Minified assets (optional build step)
- Critical CSS in head
- Deferred JS loading

### Expected Performance
- Fast load times
- Optimized image delivery
- Clean, minimal dependencies
- Mobile-friendly
- Accessibility doesn't degrade performance

---

## 16. FILE NAMING CONVENTIONS

### Pages
- Kebab-case: `module-1.html`, `need-to-know.html`
- Descriptive: `exam-dates.html`, `password-reset.html`

### CSS
- Kebab-case: `global.css`, `responsive.css`
- Functional: `components.css`, `layout.css`

### JavaScript
- Kebab-case: `main.js`, `navigation.js`
- Purpose-based: `forms.js`, `cart.js`

### Images
- Kebab-case: `alex-and-muffin.jpg`, `coach-ong-wan-ming.png`
- Descriptive with size hints: `hero-equestrian-1920.jpg`

### Components
- Kebab-case: `form-input.html`, `event-listing.html`
- Reusable names

### Data
- Kebab-case: `navigation.json`, `modules.json`
- Plural for collections: `downloads.json`, `contacts.json`

---

## 17. ARCHITECTURE SUMMARY

**Total Structure:**
- 30+ HTML page files
- 7 CSS files (organized by concern)
- 6 JavaScript files (modular)
- 10+ component templates
- 8+ JSON data files
- 50+ image assets
- 10+ downloadable PDFs
- Responsive design (8 breakpoints)
- Accessibility built-in
- No complex dependencies

**Design Approach:**
- Mobile-first responsive
- Component-based
- Semantic HTML
- Maintainable CSS
- Modular JavaScript
- Performance-optimized
- Accessibility-first
- Content-focused

**Preservation:**
- ✓ All 20+ pages
- ✓ All navigation
- ✓ All content
- ✓ All functionality UI
- ✓ All downloads
- ✓ All contact info
- ✓ All images
- ✓ All forms
- ✓ All account areas
- ✓ All syllabus
- ✓ All events/exams
- ✓ All products/cart

---

## 18. READY FOR PHASE 3?

**Before proceeding to Phase 3 (Build), please confirm:**

1. ✓ Project structure is clear and logical?
2. ✓ All pages from live site are included?
3. ✓ Component organization makes sense?
4. ✓ CSS strategy is appropriate?
5. ✓ JavaScript modularization is correct?
6. ✓ Responsive breakpoints cover all devices?
7. ✓ Image management strategy is acceptable?
8. ✓ Data structure supports content needs?
9. ✓ No key elements are missing?
10. ✓ Ready to start building?

**If approved, Phase 3 will:**
1. Create all folder/file structure
2. Build CSS foundation (variables, reset, layout)
3. Create component templates
4. Build page templates
5. Add navigation and structure
6. Implement responsive design
7. Add content from live site
8. Test thoroughly

---

**Status:** ✓ Phase 2 Architecture Complete - Awaiting Approval for Phase 3 Build

