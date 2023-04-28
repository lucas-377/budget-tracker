/**
 * Default theme of the application
 *
 * @author Lucas Santana
 */

// Export of type theme
export type Theme = {
  theme: typeof theme;
};

export const theme = {
  colors: {
    gray100: '#CEFAE3', // Buttons Alt
    gray800: '#34433B', // Text

    emerald400: '#13C76F', // Brand
    emerald500: '#1FBD6D', // Brand Hover
    emerald600: '#14A35B', // Buttons
    emerald700: '#0F7641', // Buttons Hover
    emerald800: '#084023', // Titles
  },
  spacing: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    text: 'Red Hat Text, sans-serif',
    interactive: 'Red Hat Display, sans-serif',
  },
  breakpoints: {
    tablet: '860px',
    mobile: '615px',
  },
};
