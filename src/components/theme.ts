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
    lightGray: '#ebebeb',
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
      light: 'rgba(194, 194, 194, 0.65)',
      medium: 'rgba(108, 108, 108, 0.65)',
      dark: 'rgba(135, 135, 135, 0.65)',
      table: '#a8a8a8'
    },

    // Table 색상 (테이블 색상)
    table: {
      cellGray: '#f0f0f0'
    },
    
    // 척도별 색상 팔레트 (Scale Color Palette)
    scale: {
      // 자녀 특성 (Child Characteristics)
      childCharacter: {
        primary: '#FDB68C',    // 메인 색상
        secondary: '#FCD9A3',  // 중간 색상
        light: '#F9F0DA',      // 연한 색상
        bright: '#F8CC89'      // 밝은 강조 색상
      },

      // 양육 태도 (Parenting Attitude)
      parentingAttitude: {
        primary: '#A9CEF4',    // 메인 색상
        secondary: '#C9E0F8',  // 중간 색상
        light: '#E9F4FF',      // 연한 색상
        bright: '#B9DBFF'      // 밝은 강조 색상
      },

      // 양육 환경 (Parenting Environment)
      parentingEnvironment: {
        primary: '#88CACE',    // 메인 색상
        secondary: '#BCEBEE', // 중간 색상
        light: '#DDF1F3',      // 연한 색상
        bright: '#94D9DE'      // 밝은 강조 색상
      },

      // 양육 스트레스 (Parenting Stress)
      parentingStress: {
        primary: '#C5ACDF',    // 메인 색상
        secondary: '#D7D3F0',  // 중간 색상
        light: '#EBE9F9',      // 연한 색상
        bright: '#C0BAEA'      // 밝은 강조 색상
      },

      // 양육 과정 (Parenting Process)
      parentingProcess: {
        primary: '#F0B9C8',    // 메인 색상
        secondary: '#F6DEE5',  // 중간 색상
        light: '#FFF0F4',      // 연한 색상
        bright: '#F2CBD6'      // 밝은 강조 색상
      }
    },
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
    xs: 3,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
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
    fontSize: 9,
    lineHeight: '1.2em',
    color: '#0B0B0B',
    whiteSpace: 'pre-line',
    wordBreak: 'keep-all',
  },
} as const;