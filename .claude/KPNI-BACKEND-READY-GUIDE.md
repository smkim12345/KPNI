# KPNI 백엔드 연동 준비 가이드

## 🎯 목표
- **현재 상태 유지**: KPNI 디자인과 하드코딩 데이터 완전 보존
- **백엔드 연동 준비**: GST와 동일한 데이터 수신 방식으로 통합
- **점진적 적용**: Fallback 구조로 현재 작업 방해 없이 준비

## 📊 GST vs KPNI 데이터 구조 분석

### GST 데이터 수신 구조
```typescript
interface ResultPageProps {
  owner: OwnerResponse;
  resultResponse: ResultResponse;
}

interface ResultResponse {
  resultData: ResultData;
  template: TemplateResponse;
  participant: ParticipantResponse;
  owner: OwnerResponse;
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
  owner: OwnerResponse;
}

export interface KPNIResultPageProps {
  owner?: OwnerResponse;              // 선택적 - 없으면 더미 데이터
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

export const KPNIResultPage = ({ owner, resultResponse }: KPNIResultPageProps) => {
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

### Phase 1: 기반 구조 (우선 적용)
1. ✅ `KPNITypes.ts` 타입 정의 생성
2. ✅ `InfoSection` Fallback 로직 적용
3. ✅ `KPNIResultPage` Props 구조 추가

### Phase 2: 나머지 섹션 적용
4. `ReliabilitySection` → `trustIndicators` 바인딩
5. `ProfileSection` → `parentScales` 바인딩  
6. `DetailSection` → `subScales` 바인딩
7. `ScaleSection` → `scaleInterpretations` 바인딩


## 🚀 백엔드 작업자를 위한 가이드

### API 엔드포인트 구조 (제안)
```typescript
GET /api/kpni/results/:participantId

Response: {
  owner: OwnerResponse,
  resultResponse: {
    resultData: KPNIResultData,
    template: TemplateResponse,
    participant: KPNIParticipantResponse,
    owner: OwnerResponse
  }
}
```

### 데이터 검증 체크리스트
- [ ] `participant.name` (필수)
- [ ] `participant.testedDate` (필수)  
- [ ] `participant.childName` (필수)
- [ ] `participant.gender` (필수)
- [ ] `resultData.trustIndicators` (필수)

## ⚠️ 주의사항
1. **현재 더미 데이터는 유지** - 프론트엔드 작업 계속 가능
2. **Props는 선택적** - 백엔드 연동 전까지 undefined 상태
3. **GST 필드명 우선** - 공통 데이터는 GST와 동일한 이름 사용
4. **점진적 적용** - 섹션별로 순차 적용하여 안정성 확보

이 가이드를 따라 구현하면 현재 프론트엔드 작업을 방해하지 않으면서도 백엔드 연동을 위한 완벽한 준비가 완료됩니다.