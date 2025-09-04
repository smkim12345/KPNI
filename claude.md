# K-PNI A3 뒷면 구현 가이드

## 🎯 **프로젝트 개요**
- **목표**: 피그마 K-PNI A3 뒷면 결과지를 React + MUI로 **정확히 동일한 디자인**으로 구현
- **피그마 링크**: https://www.figma.com/design/DAfGZDS2gtUa3sWrldHqve/K-PNI-A3-%EA%B2%80%EC%82%AC-%EA%B2%B0%EA%B3%BC%EC%A7%80
- **타겟 프레임**: `k-pni_a3_result(back)_ver01` (노드ID: `1-2`)
- **기반**: 앞면 구현 완료된 구조와 패턴 재활용

## 📁 **뒷면 폴더 구조 계획**
```
src/
├── components/
│   ├── sections/
│   │   ├── BackPage.tsx               # 🆕 뒷면 전체 섹션 통합 파일
│   │   ├── 00_InfoSection.tsx         # ✅ 앞면 재사용
│   │   ├── 01_ReliabilitySection.tsx  # ✅ 앞면 구현 완료
│   │   ├── 02_ProfileSection.tsx      # ✅ 앞면 구현 완료
│   │   ├── 03_DetailSection.tsx       # ✅ 앞면 구현 완료
│   │   └── 04_ScaleSection.tsx        # ✅ 앞면 구현 완료
│   ├── UI/                            # 재사용 UI 컴포넌트
│   │   ├── 00_InputField.tsx          # ✅ 완성된 재사용 컴포넌트
│   │   ├── 01_ReliabilityTable.tsx    # ✅ 앞면에서 활용
│   │   ├── 02_CompositeIndexTable.tsx # ✅ 앞면에서 활용
│   │   ├── 02_ProfileChart.tsx        # ✅ 앞면에서 활용
│   │   ├── 03_DetailChart.tsx         # ✅ 앞면에서 활용
│   │   ├── 04_ScaleAnalysisCard.tsx   # ✅ 앞면에서 활용
│   │   ├── 04_ScaleResultChip.tsx     # ✅ 앞면에서 활용
│   │   ├── SectionTitle.tsx           # ✅ 앞면에서 활용
│   │   └── SectionTitleDescription.tsx# ✅ 앞면에서 활용
│   ├── KPNIResultPage.tsx             # ✅ 앞면/뒷면 통합 메인 페이지
│   ├── theme.ts                       # ✅ 완성된 디자인 시스템
│   ├── types.ts                       # 🔧 뒷면 타입 추가 필요시
│   └── index.ts                       # Export 관리
```

## 🏗️ **기존 구조 재활용 전략**

### **1. KPNIResultPage.tsx 내부 앞면/뒷면 통합** ✅
```typescript
// KPNIResultPage.tsx 내부에 showBackPage prop 추가
interface KPNIResultPageProps {
  resultResponse?: KPNIResultResponseType;
  showBackPage?: boolean; // 뒷면 표시 여부
}

export const KPNIResultPage = ({ resultResponse, showBackPage = false }: KPNIResultPageProps) => {
  return (
    <PageContainer maxWidth={false}>
      <OuterGreenBox>
        <FrameBox>
          {/* 공통 외곽 구조 재사용 */}
          
          {showBackPage ? (
            <BackPage resultResponse={resultResponse} />
          ) : (
            <>
              <InfoSection participant={resultResponse?.participant} />
              <ReliabilitySection />
              <ProfileSection />
              <DetailSection />
              <ScaleSection />
            </>
          )}
          
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};
```

### **2. 테마 시스템 100% 활용** ✅
```typescript
// ✅ 필수: 모든 스타일 값은 THEME에서 가져오기
sx={{
  color: THEME.colors.mainWhite,
  fontSize: `${THEME.typography.fontSize.lg}px`,
  fontFamily: THEME.typography.fontFamily.ohsquare,
  backgroundColor: THEME.colors.scale.childCharacter.primary,
  borderRadius: `${THEME.borderRadius.sm}px`,
  gap: `${THEME.spacing.md}px`
}}

// ❌ 금지: 하드코딩
sx={{
  color: '#F5F6FA',
  fontSize: '13px',
  // ...
}}
```

### **3. BackPage.tsx 단일 파일 구조** ✅
```typescript
// sections/BackPage.tsx - 뒷면 전체 내용 통합
export const BackPage = ({ resultResponse }: BackPageProps) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '787px' }}>
      
      {/* 좌측: InfoSection 재사용 */}
      <Box sx={{ width: '155px', height: '100%' }}>
        <InfoSection participant={resultResponse?.participant} />
      </Box>
      
      {/* 메인 영역: 뒷면 섹션들 - 하드코딩 설명글 포함 */}
      <Stack spacing={THEME.spacing.md} sx={{ flex: 1, padding: THEME.spacing.md }}>
        
        {/* 뒷면 섹션 1 - 주석으로 구분 */}
        <Box sx={{ /* 섹션 1 스타일 */ }}>
          <Typography>하드코딩된 설명 텍스트 1...</Typography>
          {/* 섹션 1 내용 구현 */}
        </Box>
        
        {/* 뒷면 섹션 2 - 주석으로 구분 */}
        <Box sx={{ /* 섹션 2 스타일 */ }}>
          <Typography>하드코딩된 설명 텍스트 2...</Typography>
          {/* 섹션 2 내용 구현 */}
        </Box>
        
        {/* 뒷면 섹션 3 - 주석으로 구분 */}
        <Box sx={{ /* 섹션 3 스타일 */ }}>
          <Typography>하드코딩된 설명 텍스트 3...</Typography>
          {/* 섹션 3 내용 구현 */}
        </Box>
        
        {/* 뒷면 섹션 4 - 주석으로 구분 */}
        <Box sx={{ /* 섹션 4 스타일 */ }}>
          <Typography>하드코딩된 설명 텍스트 4...</Typography>
          {/* 섹션 4 내용 구현 */}
        </Box>
        
      </Stack>
    </Box>
  );
};
```

## 📊 **현재 활용 가능한 디자인 시스템**

### **색상 팔레트** ✅
```typescript
THEME.colors = {
  primary: '#629449',           // 메인 초록색
  background: '#F5F5F5',        // 배경색
  white: '#FFFFFF',             // 순수 흰색
  mainWhite: '#F5F6FA',         // 메인 텍스트용 흰색
  text: '#0B0B0B',             // 일반 텍스트
  
  // 척도별 색상 팔레트 (뒷면에서 활용)
  scale: {
    childCharacter: {           // 자녀 특성
      primary: '#FDB68C',
      secondary: '#FCD9A3',
      light: '#F9F0DA'
    },
    parentingAttitude: {        // 양육 태도
      primary: '#A9CEF4',
      secondary: '#C9E0F8',
      light: '#E9F4FF'
    },
    parentingEnvironment: {     // 양육 환경
      primary: '#88CACE',
      secondary: '#BCEBEE',
      light: '#DDF1F3'
    },
    parentingStress: {          // 양육 스트레스
      primary: '#D0AFF2',
      secondary: '#D7D3F0',
      light: '#EBE9F9'
    },
    parentingProcess: {         // 양육 과정
      primary: '#F0C0CD',
      secondary: '#F6DEE5',
      light: '#FFF0F4'
    }
  }
}
```

### **타이포그래피** ✅
```typescript
THEME.typography = {
  fontSize: {
    xxs: 6, xs: 7, sm: 9, md: 11, 
    lg: 13, xl: 15, xxl: 20, huge: 48
  },
  fontFamily: {
    moyamoya: 'Cafe24 Moyamoya OTF',     // K-PNI 타이틀용
    ohsquare: 'Cafe24 Ohsquare',         // 제목용
    ohsquareAir: 'Cafe24 Ohsquare air',  // 본문용
    pretendard: 'Pretendard Variable'     // 설명용
  }
}
```

## 🔄 **구현 워크플로우**

### **Phase 1: 뒷면 단순 구조 설정** 🏗️

#### 1-1. FRAMELINK MCP로 뒷면 조사
```bash
# 피그마 뒷면 프레임 식별 및 구조 분석
get_figma_data(fileKey="DAfGZDS2gtUa3sWrldHqve", nodeId="뒷면노드ID")
```

#### 1-2. KPNIResultPage.tsx에 showBackPage 추가
```typescript
// KPNIResultPage.tsx 인터페이스 수정
interface KPNIResultPageProps {
  resultResponse?: KPNIResultResponseType;
  showBackPage?: boolean; // 뒷면 표시 여부 추가
}

// 메인 렌더링 로직 수정
{showBackPage ? (
  <BackPage resultResponse={resultResponse} />
) : (
  <>
    <InfoSection participant={resultResponse?.participant} />
    <ReliabilitySection />
    <ProfileSection />
    <DetailSection />
    <ScaleSection />
  </>
)}
```

#### 1-3. sections/BackPage.tsx 생성
```typescript
// 단일 파일에 모든 뒷면 섹션 통합 구현
export const BackPage = ({ resultResponse }: BackPageProps) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '787px' }}>
      {/* InfoSection 재사용 + 메인 영역에 하드코딩 텍스트 포함 */}
      
      {/* =============================================== */}
      {/* 뒷면 섹션 1: 설명글 제목                        */}
      {/* =============================================== */}
      <Box sx={{ /* 섹션 1 레이아웃 */ }}>
        {/* 하드코딩 설명 텍스트와 UI 요소들 */}
      </Box>
      
      {/* =============================================== */}
      {/* 뒷면 섹션 2: 다른 설명글                        */}
      {/* =============================================== */}
      <Box sx={{ /* 섹션 2 레이아웃 */ }}>
        {/* 하드코딩 설명 텍스트와 UI 요소들 */}
      </Box>
      
      {/* ... 이하 동일한 패턴으로 섹션 구현 */}
    </Box>
  );
};
```

### **Phase 2: 사용자 승인 후 통합 파일 상세 구현** 🎨

#### 2-1. 구현 순서
```
1. 피그마에서 뒷면 전체 구조 파악
2. BackPage.tsx에서 레이아웃 박스부터 잡기
3. 섹션별 하드코딩 텍스트와 UI 요소 구현
4. THEME 시스템 100% 활용하여 스타일링
5. 주석으로 각 섹션 명확히 구분
```

#### 2-2. 단일 파일 구현 패턴
```typescript
export const BackPage = ({ resultResponse }: BackPageProps) => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '787px' }}>
      
      {/* InfoSection 재사용 */}
      <Box sx={{ width: '155px', height: '100%' }}>
        <InfoSection participant={resultResponse?.participant} />
      </Box>
      
      <Stack spacing={THEME.spacing.md} sx={{ flex: 1, padding: THEME.spacing.md }}>
        
        {/* ========================================= */}
        {/* 뒷면 섹션 1: K-PNI 검사결과 해석         */}
        {/* ========================================= */}
        <Box sx={{
          backgroundColor: THEME.colors.white,
          borderRadius: `${THEME.borderRadius.sm}px`,
          padding: `${THEME.spacing.lg}px`
        }}>
          <Typography sx={{
            fontSize: `${THEME.typography.fontSize.xl}px`,
            fontFamily: THEME.typography.fontFamily.ohsquare,
            color: THEME.colors.text,
            marginBottom: `${THEME.spacing.md}px`
          }}>
            K-PNI 검사결과 해석
          </Typography>
          
          <Typography sx={{
            fontSize: `${THEME.typography.fontSize.md}px`,
            fontFamily: THEME.typography.fontFamily.pretendard,
            color: THEME.colors.text,
            lineHeight: 1.6
          }}>
            하드코딩된 설명 텍스트가 여기에 들어갑니다...
          </Typography>
          
          {/* 필요한 UI 요소들 (차트, 테이블 등) */}
        </Box>
        
        {/* ========================================= */}
        {/* 뒷면 섹션 2: 다른 내용                   */}
        {/* ========================================= */}
        <Box sx={{ /* 섹션 2 스타일 */ }}>
          {/* 섹션 2 내용 */}
        </Box>
        
        {/* ... 추가 섹션들 */}
        
      </Stack>
    </Box>
  );
};
```

## 🚀 **코드 최적화 적용 방안**

### **1. Stack 컴포넌트 활용** 🔧
```typescript
// ✅ 개선 후: Stack 컴포넌트 사용
import { Stack } from '@mui/material';

<Stack 
  direction="column" 
  spacing={THEME.spacing.md}
  sx={{ width: '100%', height: '100%' }}
>
  <SectionTitle />
  <ContentBox />
</Stack>

// ❌ 개선 전: 복잡한 Box + flexDirection
<Box sx={{
  display: 'flex',
  flexDirection: 'column',
  gap: `${THEME.spacing.md}px`,
  width: '100%',
  height: '100%'
}}>
```

### **2. 스타일 상수화** 🔧
```typescript
// theme.ts에 추가할 뒷면 전용 스타일 상수
export const BACK_PAGE_STYLES = {
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: `${THEME.spacing.md}px`,
    padding: `${THEME.spacing.sm}px`,
  },
  
  chartContainer: {
    backgroundColor: THEME.colors.white,
    borderRadius: `${THEME.borderRadius.sm}px`,
    padding: `${THEME.spacing.lg}px`,
  },
  
  // 반복되는 스타일들 상수화
} as const;

// 사용
<Box sx={BACK_PAGE_STYLES.sectionContainer}>
```

## 🔄 **FRAMELINK MCP 워크플로우**

### **사용 시점**
- 사용자가 "피그마", "프레임" 언급 시 필수 사용

### **단계별 진행 (필수 순서)**

#### 1️⃣ **프레임 식별**
```
사용자 요청 → 피그마 내 해당 프레임명 파악
```

#### 2️⃣ **MCP 조회**
```typescript
// 토큰 제한 해결: 특정 노드만 조회
get_figma_data(fileKey="DAfGZDS2gtUa3sWrldHqve", nodeId="특정ID", depth=2)

// ❌ 전체 조회 금지
get_figma_data(fileKey="...", nodeId="0-1") // 토큰 초과 오류
```

#### 3️⃣ **구조 분석**
- 레이아웃 정보 (크기, 위치, 간격)
- 스타일 정보 (색상, 폰트, 테두리)
- 계층 구조 (부모-자식 관계)

#### 4️⃣ **코드 구현**
- **THEME 시스템 필수 활용**
- **구조적 배치 우선** (flex, grid, gap)
- **절대 위치 최소화**

## 🏆 **구현 가이드라인 (claude.md 기반)**

### **구조적 배치와 적절한 분리**

| 직접 구현 ✅ | 컴포넌트 분리 ✅ |
|-------------|----------------|
| 해당 섹션에서만 사용 | 여러 섹션에서 재사용 |
| 단순한 정적 콘텐츠 | 반복되는 패턴 |
| 메인 제목, 설명 텍스트 | InputField, TableRow |

### **핵심 구현 원칙**
1. **구조적 배치**: flex, grid, gap 활용하여 위치 관리
2. **적절한 분리**: 반복 요소만 컴포넌트로 분리
3. **THEME 우선**: 모든 스타일 값은 테마에서 가져오기
4. **일관성 유지**: 앞면 패턴을 뒷면에도 적용
5. **피그마 정확도**: 디자인과 1:1 일치 목표

### **금지 사항 🚫**
- ❌ 과도한 레이아웃 상수 (`THEME.layout.specific.*`)
- ❌ 단순 요소의 불필요한 컴포넌트 분리
- ❌ 하드코딩된 스타일 값
- ❌ 과도한 Box 래핑
- ❌ 절대 위치(absolute) 남용 - 구조적 배치 우선

## 📋 **체크리스트**

### **Phase 1 완료 조건**
- [ ] 피그마 뒷면 프레임 FRAMELINK MCP 조사 완료
- [ ] `KPNIResultPage.tsx`에 showBackPage prop 추가
- [ ] `sections/BackPage.tsx` 기본 구조 생성
- [ ] 뒷면 전체 레이아웃 박스 구조 완성
- [ ] 사용자 승인 완료

### **Phase 2 완료 조건** 
- [ ] BackPage.tsx에 모든 뒷면 섹션 통합 구현 완료
- [ ] 각 섹션별 주석으로 명확한 구분
- [ ] 하드코딩 설명 텍스트 모두 포함
- [ ] Stack 컴포넌트로 레이아웃 최적화
- [ ] 피그마 디자인 1:1 일치 확인

### **최종 검증**
- [ ] 앞면과 동일한 코드 품질 달성
- [ ] THEME 시스템 100% 활용
- [ ] 단일 파일 내 명확한 구조화
- [ ] 주석 기반 가독성 확보

## 🎯 **핵심 원칙 (단순화 버전)**

1. **통합 구조**: KPNIResultPage.tsx에 앞면/뒷면 통합, sections/BackPage.tsx 단일 파일로 모든 뒷면 내용 구현
2. **THEME 우선**: 모든 스타일 값은 테마에서 가져오기
3. **구조적 배치**: Stack, Box 활용하여 위치 관리 (절대 위치 최소화)
4. **하드코딩 허용**: 백엔드 연동 없으므로 설명 텍스트는 하드코딩으로 구현
5. **주석 기반 구분**: 각 섹션을 명확한 주석으로 구분하여 가독성 확보
6. **단계적 구현**: 레이아웃 박스 → 사용자 승인 → 상세 구현
7. **피그마 정확도**: FRAMELINK MCP 활용하여 1:1 디자인 구현

---
**성공 기준**: 단순하고 명확한 뒷면 구현 + 앞면과 동일한 디자인 품질 달성 🚀