// KPNI 척도 관련 유틸리티 함수들
// GST 호환성을 유지하면서 공통 로직 제공

import { THEME } from '../components/theme';

/**
 * 척도 색상 인터페이스 (GST 호환)
 */
export interface ScaleColors {
  primary: string;
  secondary: string;
  light: string;
}

/**
 * 척도명 상수 정의
 */
export const SCALE_NAMES = {
  CHILD_CHARACTER: '자녀특성',
  PARENTING_ATTITUDE: '양육태도', 
  PARENTING_ENVIRONMENT: '양육환경',
  PARENTING_STRESS: '양육스트레스',
  PARENTING_PROCESS: '양육과정'
} as const;

/**
 * 척도명에 따라 primary 색상을 반환하는 함수
 * GST와 호환되는 범용적인 구조
 * 
 * @param scaleName - 척도명 (예: "자녀특성", "양육태도")
 * @returns 해당 척도의 primary 색상
 */
export const getScaleColorByName = (scaleName: string): string => {
  if (scaleName.includes('자녀') || scaleName.includes('특성')) {
    return THEME.colors.scale.childCharacter.primary;
  } else if (scaleName.includes('양육') && scaleName.includes('태도')) {
    return THEME.colors.scale.parentingAttitude.primary;
  } else if (scaleName.includes('양육') && scaleName.includes('환경')) {
    return THEME.colors.scale.parentingEnvironment.primary;
  } else if (scaleName.includes('스트레스')) {
    return THEME.colors.scale.parentingStress.primary;
  } else if (scaleName.includes('과정')) {
    return THEME.colors.scale.parentingProcess.primary;
  }
  
  // 기본값 (GST 호환)
  return THEME.colors.primary;
};

/**
 * 척도명에 따라 전체 색상 세트(primary, secondary, light)를 반환하는 함수
 * GST와 호환되는 범용적인 구조
 * 
 * @param scaleName - 척도명 (예: "자녀특성", "양육태도")
 * @returns 해당 척도의 전체 색상 객체
 */
export const getScaleColorsByName = (scaleName: string): ScaleColors => {
  if (scaleName.includes('자녀') || scaleName.includes('특성')) {
    return {
      primary: THEME.colors.scale.childCharacter.primary,
      secondary: THEME.colors.scale.childCharacter.secondary,
      light: THEME.colors.scale.childCharacter.light
    };
  } else if (scaleName.includes('양육') && scaleName.includes('태도')) {
    return {
      primary: THEME.colors.scale.parentingAttitude.primary,
      secondary: THEME.colors.scale.parentingAttitude.secondary,
      light: THEME.colors.scale.parentingAttitude.light
    };
  } else if (scaleName.includes('양육') && scaleName.includes('환경')) {
    return {
      primary: THEME.colors.scale.parentingEnvironment.primary,
      secondary: THEME.colors.scale.parentingEnvironment.secondary,
      light: THEME.colors.scale.parentingEnvironment.light
    };
  } else if (scaleName.includes('스트레스')) {
    return {
      primary: THEME.colors.scale.parentingStress.primary,
      secondary: THEME.colors.scale.parentingStress.secondary,
      light: THEME.colors.scale.parentingStress.light
    };
  } else if (scaleName.includes('과정')) {
    return {
      primary: THEME.colors.scale.parentingProcess.primary,
      secondary: THEME.colors.scale.parentingProcess.secondary,
      light: THEME.colors.scale.parentingProcess.light
    };
  }
  
  // 기본값 (GST 호환)
  return {
    primary: THEME.colors.primary,
    secondary: THEME.colors.lightGray,
    light: THEME.colors.mainWhite
  };
};