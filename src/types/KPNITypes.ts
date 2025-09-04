// KPNI 백엔드 연동을 위한 타입 정의
// GST와 동일한 구조로 설계하되 KPNI 고유 필드 추가

// GST 기본 타입들 가져오기 (참조용) - Owner 제거

export interface TemplateResponse {
  id: string;
  code: string;
  name: string;
  relatedLinks: {
    interpretationVideoUrlForStudent?: string;
    // 기타 링크들...
  };
  // 기타 template 필드들...
}

// KPNI 전용 ParticipantResponse (GST 필드 + KPNI 고유 필드)
export interface KPNIParticipantResponse {
  // GST 공통 필드들 (동일한 이름 사용)
  name: string;                    // 양육자명 (GST: participant.name)
  gender: 'MALE' | 'FEMALE';       // 자녀성별 (GST: participant.gender)
  testedDate: string;              // 검사실시일 (GST: participant.testedDate)
  
  // KPNI 고유 필드들
  caregiverBirthDate: string;      // 양육자 생년월일
  relationshipToChild: string;     // 자녀와의 관계
  careType: string;                // 양육구분
  childName: string;               // 자녀이름
  childAge: number;                // 자녀연령
}

// 신뢰도 지표 (GST와 동일)
export interface TrustIndicator {
  name: string;
  value: string;
  tone: 'POSITIVE' | 'NEUTRAL' | 'NEGATIVE';
  level: string;
  description: string;
}

// 상위 척도 결과 (GST와 동일)
export interface ParentScaleResult {
  id: string;
  name: string;
  score: number;
  percentile: number;
  level: string;
  subScales: SubScaleResult[];
}

// 하위 척도 결과 (GST와 동일)
export interface SubScaleResult {
  id: string;
  name: string;
  score: number;
  percentile: number;
  level: string;
  interpretation?: string;
  strengthNamePostfix?: string;
  weaknessNamePostfix?: string;
}

// 척도 해석 데이터 인터페이스 (GST 기반)
export interface ScaleInterpretation {
  scaleId: string;
  scaleName: string;
  interpretation: string;
  recommendations?: string[];
}

// KPNI 결과 데이터
export interface KPNIResultData {
  // GST와 공통
  trustIndicators: TrustIndicator[];
  parentScales: ParentScaleResult[];
  subScales: SubScaleResult[];
  strength: SubScaleResult[];
  weakness: SubScaleResult[];
  
  // KPNI 고유 (타입 구체화)
  scaleInterpretations?: ScaleInterpretation[];
  executionType?: string;
}

// KPNI 결과 응답 구조 (GST 기반, Owner 제외)
export interface KPNIResultResponse {
  resultData: KPNIResultData;
  template: TemplateResponse;
  participant: KPNIParticipantResponse;
}

// KPNI 결과 페이지 Props (Owner 제외)
export interface KPNIResultPageProps {
  resultResponse?: KPNIResultResponse; // 선택적 - 없으면 더미 데이터
  showBackPage?: boolean; // 뒷면 표시 여부
}

// 각 섹션별 Props 인터페이스들
export interface InfoSectionProps {
  participant?: KPNIParticipantResponse;
}

export interface ReliabilitySectionProps {
  trustIndicators?: TrustIndicator[];
}

export interface ProfileSectionProps {
  parentScales?: ParentScaleResult[];
}

export interface DetailSectionProps {
  subScales?: SubScaleResult[];
}

export interface ScaleSectionProps {
  parentScales?: ParentScaleResult[];
  scaleInterpretations?: ScaleInterpretation[];
}

export interface BackPageProps {}