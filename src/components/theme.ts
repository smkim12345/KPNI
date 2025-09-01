// K-PNI A3 결과지 디자인 시스템
export const THEME = {
  colors: {
    primary: '#629449',
    background: '#F5F5F5',
    white: '#FFFFFF',
    mainWhite: '#FBFBFB',
    text: '#0B0B0B',
    gray: '#cfcfcf',
    lightGray: '#F3F3F3',
    tableGreen1: 'rgba(174, 218, 151, 0.7)',
    tableGreen2: 'rgba(157, 215, 128, 0.7)',
    blue: '#000DFF',
    
    // 척도별 색상 팔레트 (Scale Color Palette)
    scale: {
      // 자녀 특성 (Child Characteristics)
      childCharacter: {
        primary: '#FDB68C',    // 메인 색상
        secondary: '#FCD9A3',  // 중간 색상
        light: '#F9F0DA'       // 연한 색상
      },
      
      // 양육 태도 (Parenting Attitude)  
      parentingAttitude: {
        primary: '#A9CEF4',    // 메인 색상
        secondary: '#C9E0F8',  // 중간 색상
        light: '#E9F4FF'       // 연한 색상
      },
      
      // 양육 환경 (Parenting Environment)
      parentingEnvironment: {
        primary: '#88CACE',    // 메인 색상
        secondary: '#BCEBEEE', // 중간 색상
        light: '#DDF1F3'       // 연한 색상
      },
      
      // 양육 스트레스 (Parenting Stress)
      parentingStress: {
        primary: '#D0AFF2',    // 메인 색상
        secondary: '#D7D3F0',  // 중간 색상
        light: '#EBE9F9'       // 연한 색상
      },
      
      // 양육 과정 (Parenting Process)
      parentingProcess: {
        primary: '#F0C0CD',    // 메인 색상
        secondary: '#F6DEE5',  // 중간 색상
        light: '#FFF0F4'       // 연한 색상
      }
    }
  },
  typography: {
    fontSize: {
      xxs: 6,
      xs: 7,
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
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
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
  borderRadius: {
    xs: 4,
    sm: 15,
    md: 20,
    lg: 25
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