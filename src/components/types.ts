// K-PNI A3 결과지 타입 정의

// 공통 인터페이스
export interface BaseSection {
  title: string;
  description?: string;
}

// 섹션 Props 공통 인터페이스
export interface SectionProps<T = any> {
  data: T;
  theme?: typeof import('./theme').THEME;
}

// 컴포넌트 Props 인터페이스
export interface ComponentProps {
  children?: React.ReactNode;
}

// 제목 컴포넌트 Props
export interface TitleProps {
  title: string;
  descriptions?: string[];
  icon?: React.ReactNode;
}