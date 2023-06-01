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
    gray050: '#f1f7ef', // Background
    gray100: '#CEFAE3', // Buttons Alt
    gray200: '#e5e8e5', // Description Text
    gray300: '#dfdfdf', // Divider
    gray500: '#7e7e7c', // Description Title
    gray600: '#62635e', // Section Title
    gray800: '#34433B', // Text

    emerald400: '#13C76F', // Brand
    emerald500: '#1FBD6D', // Brand Hover
    emerald600: '#14A35B', // Buttons
    emerald700: '#0F7641', // Buttons Hover
    emerald800: '#084023', // Titles

    green100: '#e1fce9', // Button secondary
    green500: '#40c167', // Incomes
    red500: '#c13e45', // Expenses
    blue500: '#7791f9', // Info
  },
  fonts: {
    heading: 'Nunito, sans-serif',
    text: 'Red Hat Text, sans-serif',
  },
  breakpoints: {
    tablet: '860px',
    mobile: '615px',
  },
};
