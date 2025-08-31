// K-PNI A3 결과지 디자인 시스템
export const THEME = {
  colors: {
    primary: '#629449',
    background: '#F5F5F5',
    white: '#FFFFFF',
    mainWhite: '#FBFBFB',
    text: '#0B0B0B',
    gray: '#D3D4D6',
  },
  typography: {
    fontSize: { 
      xs: 6,
      sm: 9, 
      md: 11, 
      lg: 13, 
      xl: 15,
      xxl: 20,
      huge: 48
    },
    fontFamily: {
      moyamoya: 'Cafe24 Moyamoya OTF',
      ohsquare: 'Cafe24 Ohsquare',
      ohsquareAir: 'Cafe24 Ohsquare air',
      pretendard: 'Pretendard Variable'
    },
    lineHeight: {
      tight: '1.23em',
      normal: '1.268em'
    }
  },
  spacing: { 
    xs: 3,
    sm: 4, 
    md: 8, 
    lg: 16, 
    xl: 24,
    xxl: 32
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