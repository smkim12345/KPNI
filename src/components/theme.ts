// K-PNI A3 결과지 디자인 시스템
export const THEME = {
  colors: {
    primaryDark: '#4b7a33',
    primary: '#66A247',
    background: '#FFFFFF',
    white: '#FFFFFF',
    mainWhite: '#F5F6FA',
    text: '#0B0B0B',
    darkGray: '#4F4F4F',
    mediumGray: '#bdbdbd',
    gray: '#cfcfcf',
    lightGray: '#f0f0f0',
    tableGreen1: 'rgba(174, 218, 151, 0.7)',
    tableGreen2: 'rgba(157, 215, 128, 0.7)',
    blue: '#000DFF',

    // Level 색상 (등급별 색상)
    level: {
      high: 'rgba(130, 207, 91, 0.76)',
      mediumHigh: 'rgba(152, 215, 115, 0.7)',
      medium: 'rgba(174, 223, 139, 0.7)',
      mediumLow: 'rgba(188, 230, 167, 0.7)',
      low: 'rgba(201, 237, 183, 0.7)'
    },

    // Border 색상 (테두리 색상)
    border: {
      light: 'rgba(194, 194, 194)',
      medium: 'rgba(108, 108, 108)',
      dark: 'rgba(135, 135, 135)',
      dash: '#d4d4d4'
    },
    
    // 척도별 색상 팔레트 (Scale Color Palette)
    scale: {
      // 자녀 특성 (Child Characteristics)
      childCharacter: {
        primary: '#FDB68C',    // 메인 색상
        secondary: '#F8CC89',  // 중간 색상
        light: '#F9F0DA'       // 연한 색상
      },

      // 양육 태도 (Parenting Attitude)
      parentingAttitude: {
        primary: '#7FB8F0',    // 메인 색상
        secondary: '#A9CEF4',  // 중간 색상
        light: '#E9F4FF'       // 연한 색상
      },

      // 양육 환경 (Parenting Environment)
      parentingEnvironment: {
        primary: '#5FB5BA',    // 메인 색상
        secondary: '#88CACE',  // 중간 색상
        light: '#DDF1F3'       // 연한 색상
      },

      // 양육 스트레스 (Parenting Stress)
      parentingStress: {
        primary: '#B296D3',    // 메인 색상
        secondary: '#C5ACDF',  // 중간 색상
        light: '#EBE9F9'       // 연한 색상
      },

      // 양육 과정 (Parenting Process)
      parentingProcess: {
        primary: '#E89BB0',    // 메인 색상
        secondary: '#F0B9C8',  // 중간 색상
        light: '#FFF0F4'       // 연한 색상
      }
    },
  },
  typography: {
    fontSize: {
      xxs: 8.1,
      xs: 9.5,
      sm: 12.2, 
      md: 14.9, 
      lg: 17.6, 
      xl: 20.3,
      xxl: 27.0,
      huge: 64.9
    },
    fontFamily: {
      ohsquare: 'Pretendard', // Cafe24 Ohsquare → Pretendard ExtraBold로 대체
      ohsquareAir: 'Cafe24 Ohsquare air',
      pretendard: 'Pretendard'
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
      tight: '1em',
      normal: '1.268em'
    }
  },
  spacing: {
    xs: 4.1,
    sm: 5.4,
    md: 10.8,
    lg: 21.6,
    xl: 32.4,
    xxl: 43.3,
  },
  borderRadius: {
    xs: 5.4,
    sm: 20.3,
    md: 27.0,
    lg: 33.8
  },
  layout: {
    a3: {
      pageBackground: '#f5f5f5',
    },
  },

  // 차트 관련 상수
  chart: {
    scaleValues: [20, 30, 40, 50, 60, 70, 80],
    averageRange: {
      min: 40,
      max: 60
    },
    tScoreRange: {
      min: 20,
      max: 80
    }
  },

  // B섹션 설명글 공통 스타일
  B_SECTION_DESCRIPTION: {
    fontFamily: 'Pretendard',
    fontWeight: 300,
    fontSize: 11.4,
    lineHeight: '1.25em',
    color: '#0B0B0B',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
  },
} as const;