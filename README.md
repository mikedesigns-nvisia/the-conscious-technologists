# The Conscious Technologists - Framer Integration

A beautifully designed landing page for The Conscious Technologists collective, optimized for seamless integration with Framer, with comprehensive SEO and accessibility features.

## Project Structure

```
the-conscious-technologists/
├── assets/
│   └── svg/
│       ├── diamond-pattern.svg
│       ├── wave-pattern.svg
│       ├── leaf-1.svg
│       └── leaf-2.svg
├── framer-styles.css        # All extracted styles for Framer integration
├── framer-scripts.js        # JavaScript with Framer interaction hooks
├── framer.config.json       # Configuration for Framer integration
├── index.html               # Main HTML with Framer-ready components
└── README.md                # Project documentation
```

## Framer Integration Features

This codebase has been specifically structured for optimal Framer integration:

### 1. Component Markers

All major sections and interactive elements are marked with `data-framer-name` attributes that allow Framer to easily identify and manipulate specific components of the page. For example:

```html
<section id="about" class="py-20 watercolor-bg relative overflow-hidden" data-framer-name="about-section" aria-labelledby="about-heading">
```

### 2. Modular Asset Structure

All SVG patterns and decorative elements have been extracted into separate files in the `assets/svg/` directory, making them easy to modify or replace in Framer.

### 3. External Style and Script Files

All styles have been moved from inline to external CSS files (`framer-styles.css`), and all JavaScript has been consolidated in `framer-scripts.js` for better maintainability and easier integration with Framer.

### 4. Framer Interaction Hooks

The JavaScript includes a `FramerInteractions` object that exposes specific methods that can be called from Framer:

```javascript
window.FramerInteractions = {
    toggleMobileMenu: function() { ... },
    submitForm: function(formId) { ... },
    scrollToSection: function(sectionId) { ... }
};
```

### 5. Configuration for Framer

The `framer.config.json` file defines the component structure, properties that can be edited in Framer, and asset paths.

## How to Use with Framer

1. **Import the Project:**
   - Upload all files to your Framer project or host them externally.
   - In Framer, create a new HTML embed component and point it to your `index.html` file.

2. **Component Editing:**
   - Use the component selectors defined in `framer.config.json` to access and modify components in Framer.
   - Edit text, styles, and component properties through Framer's interface.

3. **Interactions:**
   - Call the methods defined in `FramerInteractions` to trigger specific behaviors.
   - For example, to submit the join form: `FramerInteractions.submitForm('join-form')`

4. **Mobile Menu:**
   - The mobile menu functionality has been fully implemented and can be triggered via `FramerInteractions.toggleMobileMenu()`

5. **Styling:**
   - All styles are organized in `framer-styles.css`, making it easy to apply global style changes.

## Responsive Behavior

The site is fully responsive, with breakpoints that match Framer's device presets. The mobile navigation has been implemented to work seamlessly with Framer interactions.

## SEO Optimization

The site includes comprehensive SEO enhancements:

1. **Rich Meta Tags**: Extended metadata including detailed description, keywords, and authorship
2. **Social Media Optimization**: Complete Open Graph and Twitter Card tags for better social sharing
3. **Semantic Structure**: Proper heading hierarchy and semantic HTML for better search engine understanding
4. **Canonical URLs**: Prevents duplicate content issues
5. **Descriptive Link Text**: All links have meaningful text for better indexing
6. **Mobile Optimization**: Fully responsive design is mobile-friendly (a critical SEO factor)

## Accessibility Features

The site meets WCAG guidelines with these accessibility implementations:

1. **Semantic HTML**: Proper use of HTML5 sectioning elements and ARIA roles
2. **Skip Navigation**: A skip-to-content link for keyboard users
3. **ARIA Attributes**: Comprehensive use of aria-label, aria-labelledby, and other ARIA attributes
4. **Keyboard Navigation**: All interactive elements are keyboard accessible
5. **Screen Reader Support**: All icons and decorative elements have aria-hidden attributes
6. **Focus Management**: Visible focus states for all interactive elements
7. **Form Accessibility**: Properly labeled form controls with clear error indicators
8. **Color Contrast**: All text meets WCAG AA standards for contrast
9. **Responsive Design**: Site remains accessible at all screen sizes

## Browser Support

This site works best in modern browsers that support CSS variables, flexbox, grid, and modern JavaScript features. For broader compatibility, consider adding polyfills or fallbacks.

## Future Enhancements

Some potential areas for future development:

1. Implementing form validation and submission handling
2. Adding animation sequences that can be controlled from Framer
3. Creating more sophisticated interaction prototypes
4. Adding light/dark mode toggle functionality with proper accessibility support
5. Implementing actual API integrations for the form submission
6. Adding automated accessibility testing to the build process
7. Implementing structured data (JSON-LD) for rich search results

## Credits

- Font Awesome for icons
- Tailwind CSS for utility classes
- Google Fonts for typography (Playfair Display and Poppins)
