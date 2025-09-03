# KPNI 백엔드 연동 준비 가이드

## 🎯 목표
- **현재 상태 유지**: KPNI 디자인과 하드코딩 데이터 완전 보존
- **백엔드 연동 준비**: GST와 동일한 데이터 수신 방식으로 통합
- **점진적 적용**: Fallback 구조로 현재 작업 방해 없이 준비
- **코드 최적화**: 공통 유틸리티 함수로 중복 코드 제거 및 GST 호환성 유지

## 📊 GST vs KPNI 데이터 구조 분석

### GST 데이터 수신 구조 (참조용)
```typescript
interface ResultPageProps {
  resultResponse: ResultResponse;
}

interface ResultResponse {
  resultData: ResultData;
  template: TemplateResponse;
  participant: ParticipantResponse;
}
```

### KPNI 현재 구조
```typescript
// 현재: 하드코딩 데이터
const InfoSection = () => {
  return (
    // "김성민", "김성근" 등 고정값 사용
  );
};
```

## 🔄 데이터 필드 매핑표

### 공통 필드 (GST 필드명 채택)
| KPNI 현재 필드 | GST 필드명 | 비고 |
|---------------|-----------|------|
| 양육자명 | `participant.name` | 동일한 개념 |
| 자녀성별 | `participant.gender` | 성별 정보 |
| 검사 실시일 | `participant.testedDate` | 검사일 정보 |
| 결과신뢰지표 | `resultData.trustIndicators` | 신뢰도 데이터 |

### KPNI 고유 필드 (새로 정의 필요)
| KPNI 필드 | 제안 필드명 | 타입 |
|-----------|------------|------|
| 양육자 생년월일 | `participant.caregiverBirthDate` | string |
| 자녀와의 관계 | `participant.relationshipToChild` | string |
| 양육구분 | `participant.careType` | string |
| 자녀이름 | `participant.childName` | string |
| 자녀연령 | `participant.childAge` | number |

## 🏗️ 구현 방안

### 1단계: 타입 정의 생성

```typescript
// src/types/KPNITypes.ts
export interface KPNIParticipantResponse extends ParticipantResponse {
  // GST 공통 필드
  name: string;                    // 양육자명
  gender: 'MALE' | 'FEMALE';       // 자녀성별
  testedDate: string;              // 검사실시일
  
  // KPNI 고유 필드
  caregiverBirthDate: string;      // 양육자 생년월일
  relationshipToChild: string;     // 자녀와의 관계
  careType: string;                // 양육구분
  childName: string;               // 자녀이름
  childAge: number;                // 자녀연령
}

export interface KPNIResultResponse {
  resultData: KPNIResultData;
  template: TemplateResponse;
  participant: KPNIParticipantResponse;
}

export interface KPNIResultPageProps {
  resultResponse?: KPNIResultResponse; // 선택적 - 없으면 더미 데이터
}
```

### 2단계: InfoSection Fallback 적용

```typescript
// src/components/sections/00_InfoSection.tsx
interface InfoSectionProps {
  participant?: KPNIParticipantResponse;
}

export const InfoSection = ({ participant }: InfoSectionProps) => {
  // Fallback 데이터 (현재 하드코딩 유지)
  const fallbackData = {
    name: "김성민",                    // participant?.name
    caregiverBirthDate: "1995.12.14", // participant?.caregiverBirthDate
    relationshipToChild: "아들",       // participant?.relationshipToChild
    careType: "양육구분",              // participant?.careType
    childName: "김성근",               // participant?.childName
    gender: "남성",                   // participant?.gender
    childAge: "12세",                 // participant?.childAge
    testedDate: "2025.08.26"          // participant?.testedDate
  };

  // 동적 데이터 vs 더미 데이터 선택
  const displayData = {
    name: participant?.name ?? fallbackData.name,
    caregiverBirthDate: participant?.caregiverBirthDate ?? fallbackData.caregiverBirthDate,
    relationshipToChild: participant?.relationshipToChild ?? fallbackData.relationshipToChild,
    careType: participant?.careType ?? fallbackData.careType,
    childName: participant?.childName ?? fallbackData.childName,
    gender: participant?.gender ?? fallbackData.gender,
    childAge: participant?.childAge ?? fallbackData.childAge,
    testedDate: participant?.testedDate ?? fallbackData.testedDate
  };

  return (
    <Box>
      <InputField label="양육자명" value={displayData.name} />
      <InputField label="양육자 생년월일" value={displayData.caregiverBirthDate} />
      {/* ... 나머지 필드들 */}
    </Box>
  );
};
```

### 3단계: KPNIResultPage Props 적용

```typescript
// src/components/KPNIResultPage.tsx
import { KPNIResultPageProps } from '../types/KPNITypes';

export const KPNIResultPage = ({ resultResponse }: KPNIResultPageProps) => {
  return (
    <PageContainer maxWidth={false}>
      <OuterGreenBox>
        <FrameBox>
          {/* InfoSection에 participant 전달 (선택적) */}
          <InfoSection participant={resultResponse?.participant} />
          
          {/* 다른 섹션들도 순차적으로 적용 */}
          <ReliabilitySection trustIndicators={resultResponse?.resultData?.trustIndicators} />
          <ProfileSection parentScales={resultResponse?.resultData?.parentScales} />
          <DetailSection subScales={resultResponse?.resultData?.subScales} />
          <ScaleSection scaleData={resultResponse?.resultData?.scaleInterpretations} />
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};
```

## 🔧 구현 우선순위

### Phase 1: 기반 구조 ✅
1. ✅ `KPNITypes.ts` 타입 정의 생성 (GST 호환)
2. ✅ `InfoSection` Fallback 로직 적용
3. ✅ `KPNIResultPage` Props 구조 추가

### Phase 2: 전체 섹션 적용 ✅
4. ✅ `ReliabilitySection` → `trustIndicators` 바인딩
5. ✅ `ProfileSection` → `parentScales` 바인딩  
6. ✅ `DetailSection` → `subScales` 바인딩
7. ✅ `ScaleSection` → `parentScales`, `scaleInterpretations` 바인딩

### Phase 3: 코드 최적화 ✅
8. ✅ 공통 색상 유틸리티 함수 분리 (`src/utils/scaleUtils.ts`)
9. ✅ 중복 코드 제거 및 타입 정확성 개선
10. ✅ GST 호환성 유지하면서 클린 코드 구현


## 🚀 백엔드 작업자를 위한 가이드

### 최신 구현 상황 (2025.01)
- **전체 백엔드 연동 준비 완료**: 모든 섹션이 GST 방식과 동일한 데이터 수신 구조 적용
- **공통 유틸리티 함수**: 척도별 색상 매핑 로직을 유틸리티로 분리하여 유지보수성 향상
- **타입 안정성**: concrete 타입으로 개선하여 런타임 오류 방지
- **GST 호환성**: 동일한 데이터 구조와 필드명 사용으로 백엔드 작업자가 쉽게 적용 가능

### 핵심 색상 매핑 로직
```typescript
// src/utils/scaleUtils.ts
export const getScaleColorsByName = (scaleName: string): ScaleColors => {
  if (scaleName.includes('자녀') || scaleName.includes('특성')) {
    return THEME.colors.scale.childCharacter;
  } else if (scaleName.includes('양육') && scaleName.includes('태도')) {
    return THEME.colors.scale.parentingAttitude;
  }
  // ... 검사명 기반 색상 반환 (순서 기반이 아님)
};
```

### API 엔드포인트 구조 (제안)
```typescript
GET /api/kpni/results/:participantId

Response: {
  resultData: KPNIResultData,
  template: TemplateResponse,
  participant: KPNIParticipantResponse
}
```

### 데이터 검증 체크리스트
- [x] `participant.name` (필수) - ✅ 구현됨
- [x] `participant.testedDate` (필수) - ✅ 구현됨
- [x] `participant.childName` (필수) - ✅ 구현됨
- [x] `participant.gender` (필수) - ✅ 구현됨
- [x] `resultData.trustIndicators` (필수) - ✅ 구현됨
- [x] `resultData.parentScales` (필수) - ✅ 구현됨
- [x] `resultData.subScales` (필수) - ✅ 구현됨

## ⚠️ 주의사항 및 핵심 원칙
1. **현재 더미 데이터는 유지** - 프론트엔드 작업 계속 가능
2. **Props는 선택적** - 백엔드 연동 전까지 undefined 상태
3. **GST 필드명 우선** - 공통 데이터는 GST와 동일한 이름 사용
4. **검사명 기반 색상 매핑** - 순서가 아닌 척도명으로 색상 결정
5. **공통 유틸리티 활용** - scaleUtils.ts의 함수들로 일관성 유지

## ✅ 완료된 최적화 작업

### 코드 품질 개선
- **공통 유틸리티 분리**: 색상 매핑 로직을 scaleUtils.ts로 추출
- **중복 코드 제거**: ProfileSection과 ScaleSection의 중복 함수 통합
- **타입 안정성**: any[] → ScaleInterpretation[] 등 구체적 타입 적용
- **데이터 바인딩 단순화**: DetailSection fallback 로직 최적화

### GST 호환성 유지
- **동일한 Props 구조**: resultResponse 기반 데이터 전달
- **동일한 Fallback 패턴**: `data?.field ?? fallback` 구조
- **동일한 필드명**: name, gender, testedDate 등 GST와 일치
- **동일한 섹션별 Props**: 각 섹션이 해당 데이터만 받는 구조

이 가이드를 따라 구현하면 현재 프론트엔드 작업을 방해하지 않으면서도 백엔드 연동을 위한 완벽한 준비가 완료되며, 최신 코드 최적화로 유지보수성과 안정성이 크게 향상됩니다.