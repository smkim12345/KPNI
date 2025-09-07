# K-PNI A3 뒷면 구현 가이드

## 🎯 **프로젝트 개요**
- **목표**: 피그마 K-PNI A3 뒷면 결과지를 React + MUI로 **정확히 동일한 디자인**으로 구현
- **피그마 링크**: https://www.figma.com/design/DAfGZDS2gtUa3sWrldHqve/K-PNI-A3-%EA%B2%80%EC%82%AC-%EA%B2%B0%EA%B3%BC%EC%A7%80
- **기반**: 앞면 구현 완료된 구조와 패턴 재활용

!!!!###중요###!!!!!
- **타겟 프레임**: `k-pni_a3_result(back)_ver01` (노드ID: `1-2`)
  - 사용자가 구현 요청할 피그마 프레임은 타겟 프레임 내에 있는 프레임이며, 프레임의 이름은 () 안에 정확히 적어서 요청할겁니다. 
  그럼 타겟 프레임안에 포함된 프레임중에 사용자가 구현 요청한 프레임 이름을 정확히 찾아서 정보를 얻고 작업하면됩니다.

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

### **1. KPNIResultPage.tsx GST A3 스타일로 앞면/뒷면 동시 표시** ✅
```typescript
// 앞면 컴포넌트
const KPNIFrontPage = ({ resultResponse }: KPNIResultPageProps) => {
  return (
    <PageContainer maxWidth={false}>
      <OuterGreenBox>
        <FrameBox>
          {/* 앞면 기존 구조 그대로 */}
          <InfoSection participant={resultResponse?.participant} />
          <ReliabilitySection />
          <ProfileSection />
          <DetailSection />
          <ScaleSection />
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};

// 뒷면 컴포넌트 (바깥 테두리와 하단박스만 앞면과 공유)
const KPNIBackPage = ({ resultResponse }: KPNIResultPageProps) => {
  return (
    <PageContainer maxWidth={false}>
      <OuterGreenBox>
        <FrameBox>
          {/* 바깥 테두리 + 하단박스만 공유, 나머지는 새로운 구조 */}
          <BackPage />  {/* 데이터 연동 없음 */}
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};

// 전체 페이지 (GST A3와 동일하게 앞면+뒷면 연속 표시)
export const KPNIResultPage = ({ resultResponse }: KPNIResultPageProps) => {
  return (
    <>
      <KPNIFrontPage resultResponse={resultResponse} />
      <KPNIBackPage resultResponse={resultResponse} />
    </>
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

### **3. BackPage.tsx 백엔드 연동 없는 하드코딩 구조** ✅
```typescript
// sections/BackPage.tsx - 뒷면 전체 내용 통합 (데이터 연동 없음)
export const BackPage = () => {  // Props 없음 - 하드코딩 구현
  return (
    <Box sx={{
      position: 'absolute',
      left: '30px',
      top: '30px',
      width: '1131px',  // 전체 너비 사용 (바깥테두리 + 하단박스 외 모든 영역)
      height: '787px',  // 전체 높이 사용
      display: 'flex',
      flexDirection: 'column',
      zIndex: 3,
    }}>
      
      {/* 메인 콘텐츠 영역 - 앞면과 완전히 다른 새로운 구조 */}
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: `${THEME.borderRadius.lg}px`,
        padding: `${THEME.spacing.xl}px`,
        height: '100%',
        border: `3px solid ${THEME.colors.primary}`,
      }}>
        
        {/* 뒷면 섹션 1 - 하드코딩 텍스트 */}
        <Typography sx={{ /* THEME 스타일 */ }}>
          K-PNI 검사 해석 가이드...
        </Typography>
        
        {/* 뒷면 섹션 2 - 하드코딩 텍스트 */}
        <Typography sx={{ /* THEME 스타일 */ }}>
          양육 스트레스 관리 방법...
        </Typography>
        
        {/* 뒷면 섹션 3 - 하드코딩 텍스트 */}
        <Typography sx={{ /* THEME 스타일 */ }}>
          추가 참고 사항...
        </Typography>
        
      </Box>
    </Box>
  );
};

## 🚀 **코드 최적화 적용 방안**

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

##코딩 규칙 ##
- 줄글 형태는 박스에 whiteSpace: 'pre-line' 추가해서 문단나누기가 그대로 보이도록할것



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
- 기타 추가적인 정보 

#### 4️⃣ **코드 구현**
- **THEME 시스템 필수 활용**
- **구조적 배치 우선** (flex, grid, gap)
- **절대 위치 최소화**
- **복잡한 코드를 단순한 mui 콤포넌트로 변환할수 있을시 활용(ex - 복잡한 블럭으로 구현한 피그마 테이블을 mui 테이블 콤포넌트로 효율적으로 구현)**

## 🏆 **구현 가이드라인 (claude.md 기반)**


### **핵심 구현 원칙**
1. **구조적 배치**: flex, grid, gap 활용하여 위치 관리
2. **적절한 분리**: 반복 요소만 컴포넌트로 분리
3. **THEME 우선**: 모든 스타일 값은 테마에서 가져오기
4. **일관성 유지**: 앞면 패턴을 뒷면에도 적용
5. **피그마 정확도**: 디자인과 1:1 일치 목표
6. **🚨 사용자 레이아웃 고정**: 사용자가 설정한 섹션 레이아웃(width, height, padding 등)은 절대 변경하지 않고 그 안에서만 피그마 내용 구현

### **테마 활용 체크리스트**
- [ ] 색상: `THEME.colors.*`
- [ ] 폰트: `THEME.typography.fontFamily.*`
- [ ] 크기: `THEME.typography.fontSize.*`
- [ ] 간격: `THEME.spacing.*`
- [ ] 모서리: `THEME.borderRadius.*`

### **사용자 레이아웃 보존 원칙 🔒**
- ✅ **내용만 수정**: 사용자가 설정한 Box 레이아웃은 고정, 그 안의 Typography와 내부 요소만 피그마에 맞게 구현
- ✅ **크기 유지**: width, height, padding, margin 등 사용자 설정값 절대 변경 금지
- ✅ **구조 보존**: 사용자가 작성한 Box 구조와 sx 속성은 그대로 유지
- ✅ **내용 최적화**: 고정된 레이아웃 안에서 피그마 디자인에 최대한 맞게 내용 배치

### **금지 사항 🚫**
- ❌ 과도한 레이아웃 상수 (`THEME.layout.specific.*`)
- ❌ 단순 요소의 불필요한 컴포넌트 분리
- ❌ 하드코딩된 스타일 값
- ❌ 과도한 Box 래핑
- ❌ 절대 위치(absolute) 남용 - 구조적 배치 우선
- ❌ **사용자 설정 레이아웃 변경 절대 금지** (width, height, padding, flexDirection 등)


## 🎯 **핵심 원칙 (단순화 버전)**

2. **뒷면 독립 구현**: 백엔드 연동 없이 하드코딩으로 구현 (`BackPage` Props 없음)
3. **THEME 우선**: 모든 스타일 값은 테마에서 가져오기
7. **피그마 정확도**: FRAMELINK MCP 활용하여 1:1 디자인 구현
