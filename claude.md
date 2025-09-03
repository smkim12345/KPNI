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
│   │   ├── back/                      # 🆕 뒷면 전용 섹션들
│   │   │   ├── 05_BackSection1.tsx    # 뒷면 첫 번째 섹션
│   │   │   ├── 06_BackSection2.tsx    # 뒷면 두 번째 섹션
│   │   │   ├── 07_BackSection3.tsx    # 뒷면 세 번째 섹션
│   │   │   └── 08_BackSection4.tsx    # 뒷면 네 번째 섹션
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
│   ├── KPNIResultPage.tsx             # ✅ 앞면 메인 페이지
│   ├── KPNIResultBackPage.tsx         # 🆕 뒷면 메인 페이지
│   ├── theme.ts                       # ✅ 완성된 디자인 시스템
│   ├── types.ts                       # 🔧 뒷면 타입 추가 필요시
│   └── index.ts                       # Export 관리
```

## 🏗️ **기존 구조 재활용 전략**

### **1. A3 페이지 캔버스 재활용** ✅
```typescript
// KPNIResultBackPage.tsx 생성 시 KPNIResultPage.tsx 구조 복사
const PageContainer = styled(Container)({
  minWidth: '1287px', 
  minHeight: `959px`,
  backgroundColor: THEME.layout.a3.pageBackground,
  // ... 동일한 캔버스 구조
});

const OuterGreenBox = styled(Box)({
  width: '1191px',   
  height: '847px',
  backgroundColor: THEME.colors.primary, 
  // ... 동일한 외곽 테두리
});
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

### **3. 기존 UI 컴포넌트 재사용** ✅
```typescript
// ✅ 재사용 가능한 컴포넌트들
import { InputField } from '../UI/00_InputField';
import { SectionTitle } from '../UI/SectionTitle';
import { SectionTitleDescription } from '../UI/SectionTitleDescription';

// 사용 예시
<SectionTitle 
  sectionNumber={5}
  title="뒷면 섹션 제목"
  description="뒷면 섹션에 대한 설명"
/>
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

### **Phase 1: 뒷면 레이아웃 구조 설정** 🏗️

#### 1-1. FRAMELINK MCP로 뒷면 조사
```bash
# 피그마 뒷면 프레임 식별 및 구조 분석
get_figma_data(fileKey="DAfGZDS2gtUa3sWrldHqve", nodeId="뒷면노드ID")
```

#### 1-2. KPNIResultBackPage.tsx 생성
```typescript
// KPNIResultPage.tsx 복사 후 뒷면용으로 수정
export const KPNIResultBackPage = ({ resultResponse }: KPNIResultPageProps) => {
  return (
    <PageContainer maxWidth={false}>
      <OuterGreenBox>
        <FrameBox>
          {/* 동일한 외곽 구조 */}
          
          {/* 뒷면 섹션 레이아웃 - 박스만 먼저 잡기 */}
          <Box sx={{ /* 뒷면 레이아웃 구조 */ }}>
            
            {/* 좌측: InfoSection 재사용 */}
            <Box sx={{ width: '155px', height: '787px' }}>
              <InfoSection participant={resultResponse?.participant} />
            </Box>
            
            {/* 메인 영역: 뒷면 섹션들 - 박스만 */}
            <Box sx={{ /* 뒷면 메인 영역 */ }}>
              {/* 뒷면 섹션 박스들 */}
            </Box>
            
          </Box>
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};
```

#### 1-3. 뒷면 섹션 박스 구조 잡기
```typescript
// sections/back/ 폴더에 섹션들 생성
export const BackSection1 = () => {
  return (
    <Box sx={{
      width: 'XXXpx',
      height: 'XXXpx',
      backgroundColor: 'rgba(255,0,0,0.3)', // 임시 색상 (위치 확인용)
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography>뒷면 섹션 1 - 레이아웃 박스</Typography>
    </Box>
  );
};
```

### **Phase 2: 사용자 승인 후 섹션별 상세 구현** 🎨

#### 2-1. 섹션별 구현 순서
```
1. 가장 중요한 섹션부터 시작
2. 기존 UI 컴포넌트 최대한 재활용
3. FRAMELINK MCP로 정확한 디자인 확인
4. THEME 시스템 100% 활용
```

#### 2-2. 구현 패턴 (앞면과 동일)
```typescript
export const BackSection1 = ({ data }: BackSection1Props) => {
  return (
    <Box sx={{
      // THEME 활용한 레이아웃
      width: 'XXXpx',
      height: 'XXXpx',
      display: 'flex',
      flexDirection: 'column',
      gap: `${THEME.spacing.md}px`,
      padding: `${THEME.spacing.sm}px`
    }}>
      
      {/* 섹션 제목 - 기존 컴포넌트 재사용 */}
      <SectionTitle 
        sectionNumber={5}
        title="뒷면 섹션 제목"
        description="섹션 설명"
      />
      
      {/* 섹션 내용 - 피그마 기준 정확 구현 */}
      <Box sx={{ /* 내용 구현 */ }}>
        {/* ... */}
      </Box>
      
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
- [ ] `KPNIResultBackPage.tsx` 기본 구조 생성
- [ ] 뒷면 섹션별 레이아웃 박스 구조 완성
- [ ] 사용자 승인 완료

### **Phase 2 완료 조건** 
- [ ] 각 뒷면 섹션 상세 구현 완료
- [ ] Stack 컴포넌트로 레이아웃 최적화
- [ ] 반복 스타일 상수화 완료
- [ ] 피그마 디자인 1:1 일치 확인

### **최종 검증**
- [ ] 앞면과 동일한 코드 품질 달성
- [ ] THEME 시스템 100% 활용
- [ ] 타입 안전성 확보
- [ ] 성능 최적화 적용

## 🎯 **핵심 원칙**

1. **기존 구조 최대한 재활용**: A3 캔버스, 외곽 테두리 등
2. **THEME 우선**: 모든 스타일 값은 테마에서 가져오기
3. **구조적 배치**: flex, grid, gap 활용하여 위치 관리 (절대 위치 최소화)
4. **적절한 분리**: 반복 요소만 컴포넌트로 분리
5. **단계적 구현**: 레이아웃 박스 → 사용자 승인 → 상세 구현
6. **피그마 정확도**: FRAMELINK MCP 활용하여 1:1 디자인 구현
7. **일관성 유지 및 코드 최적화**: 앞면과 동일한 코딩 스타일과 패턴 적용 하되 가능한 부분은 Stack 컴포넌트, 스타일 상수화, 컴포넌트 재사용

---
**성공 기준**: 앞면과 동일한 품질의 뒷면 구현 + 더 나은 코드 최적화 달성 🚀