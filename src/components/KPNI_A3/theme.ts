// K-PNI A3 결과지 디자인 시스템
export const THEME = {
  colors: {
    primary: '#629449',
    background: '#F5F5F5',
    white: '#FFFFFF',
  },
  typography: {
    fontSize: { 
      xs: 9, 
      sm: 11, 
      md: 13, 
      lg: 16, 
      xl: 20 
    }
  },
  spacing: { 
    xs: 4, 
    sm: 8, 
    md: 16, 
    lg: 24,
    xl: 32
  },
  layout: {
    a3: {
      pageBackground: '#f5f5f5',
    },
    border: {
      thickness: 50,
    }
  }
} as const;