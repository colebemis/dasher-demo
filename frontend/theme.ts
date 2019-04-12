const theme = {
  space: ['0', '0.25rem', '0.5rem', '0.75rem', '1rem', '1.5rem', '2rem'],
  fonts: {
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '2rem',
  ],
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: [
      '#f8f9fa',
      '#f1f3f5',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
  },
  radii: ['0', '3px', '6px'],
  mediaQueries: {
    small: '@media screen and (min-width: 40em)',
    medium: '@media screen and (min-width: 48em)',
    large: '@media screen and (min-width: 64em)',
  },
}

export default theme
