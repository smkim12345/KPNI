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
 * 척도 타입 정의
 */
export type ScaleType = keyof typeof SCALE_NAMES;

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
 * 척도별 색상 매핑
 */
const SCALE_COLORS_MAP: Record<string, ScaleColors> = {
  [SCALE_NAMES.CHILD_CHARACTER]: {
    primary: THEME.colors.scale.childCharacter.primary,
    secondary: THEME.colors.scale.childCharacter.secondary,
    light: THEME.colors.scale.childCharacter.light
  },
  [SCALE_NAMES.PARENTING_ATTITUDE]: {
    primary: THEME.colors.scale.parentingAttitude.primary,
    secondary: THEME.colors.scale.parentingAttitude.secondary,
    light: THEME.colors.scale.parentingAttitude.light
  },
  [SCALE_NAMES.PARENTING_ENVIRONMENT]: {
    primary: THEME.colors.scale.parentingEnvironment.primary,
    secondary: THEME.colors.scale.parentingEnvironment.secondary,
    light: THEME.colors.scale.parentingEnvironment.light
  },
  [SCALE_NAMES.PARENTING_STRESS]: {
    primary: THEME.colors.scale.parentingStress.primary,
    secondary: THEME.colors.scale.parentingStress.secondary,
    light: THEME.colors.scale.parentingStress.light
  },
  [SCALE_NAMES.PARENTING_PROCESS]: {
    primary: THEME.colors.scale.parentingProcess.primary,
    secondary: THEME.colors.scale.parentingProcess.secondary,
    light: THEME.colors.scale.parentingProcess.light
  }
} as const;

/**
 * 척도명을 키로 변환하는 헬퍼 함수
 */
const getScaleKey = (scaleName: string): string => {
  if (scaleName.includes('자녀') || scaleName.includes('특성')) {
    return SCALE_NAMES.CHILD_CHARACTER;
  } else if (scaleName.includes('양육') && scaleName.includes('태도')) {
    return SCALE_NAMES.PARENTING_ATTITUDE;
  } else if (scaleName.includes('양육') && scaleName.includes('환경')) {
    return SCALE_NAMES.PARENTING_ENVIRONMENT;
  } else if (scaleName.includes('스트레스')) {
    return SCALE_NAMES.PARENTING_STRESS;
  } else if (scaleName.includes('과정')) {
    return SCALE_NAMES.PARENTING_PROCESS;
  }

  return scaleName; // 매칭되지 않으면 원본 반환
};

/**
 * 척도명에 따라 primary 색상을 반환하는 함수
 * GST와 호환되는 범용적인 구조
 *
 * @param scaleName - 척도명 (예: "자녀특성", "양육태도")
 * @returns 해당 척도의 primary 색상
 */
export const getScaleColorByName = (scaleName: string): string => {
  const scaleKey = getScaleKey(scaleName);
  const colors = SCALE_COLORS_MAP[scaleKey];

  return colors?.primary ?? THEME.colors.primary;
};

/**
 * 척도명에 따라 전체 색상 세트(primary, secondary, light)를 반환하는 함수
 * GST와 호환되는 범용적인 구조
 *
 * @param scaleName - 척도명 (예: "자녀특성", "양육태도")
 * @returns 해당 척도의 전체 색상 객체
 */
export const getScaleColorsByName = (scaleName: string): ScaleColors => {
  const scaleKey = getScaleKey(scaleName);
  const colors = SCALE_COLORS_MAP[scaleKey];

  // 기본값 (GST 호환)
  return colors ?? {
    primary: THEME.colors.primary,
    secondary: THEME.colors.lightGray,
    light: THEME.colors.mainWhite
  };
};