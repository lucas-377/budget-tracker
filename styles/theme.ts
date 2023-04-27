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
    primary: '#303A44',
    secondary: '#202A33'
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