# K-PNI A3 결과지 구현 가이드 (통합본)

## 🎯 현재 상황(**매우 중요**)
- 피그마 K-PNI A3 개인결과지 앞면을 React + MUI로 **거의 유사한 디자인**으로 구현해야함
- 백엔드 연동은 추후에 할 예정이므로 프론트엔드 디자인을 우선으로 구현해야함
- 피그마 링크: https://www.figma.com/design/DAfGZDS2gtUa3sWrldHqve/K-PNI-A3-%EA%B2%80%EC%82%AC-%EA%B2%B0%EA%B3%BC%EC%A7%80
- **타겟 프레임**: `k-pni_a3_result-ver01` (노드ID: `1-2`)
- 작업 순서: 섹션 레이아웃 잡기 ->  섹션 내에 콤포넌트 넣기

## 📌 FRAMELINK MCP 사용법

### 🔧 토큰 제한 문제 해결
**문제**: `MCP tool "get_figma_data" response exceeds maximum allowed tokens`

**해결방법**:
1. **특정 노드 조회**: 전체 캔버스(0-1) 대신 타겟 프레임만 조회
   ```
   nodeId: "1-2"  // k-pni_a3_result-ver01 프레임
   ```

2. **Depth 제한**: 깊이를 제한하여 하위 노드 줄이기
   ```
   depth: 1 또는 2
   ```

3. **단계별 접근**:
   ```
   1단계: fileKey만으로 전체 구조 파악 (depth: 2)
   2단계: 타겟 프레임 조회 (nodeId: "1-2", depth: 1) 
   3단계: 필요한 하위 컴포넌트만 개별 조회
   ```

### 권장 사용법
- ✅ `get_figma_data(fileKey="DAfGZDS2gtUa3sWrldHqve", nodeId="1-2", depth=1)`
- ❌ `get_figma_data(fileKey="DAfGZDS2gtUa3sWrldHqve", nodeId="0-1")` (전체 캔버스)

### framelink MCP로 코드 구현 규칙
- 사용자가 frame 이라고 언급하면 이 mcp를 사용할것 
- **절대위치는 최소한으로 사용할것**: 오토레이아웃, 패딩, gap, flex 등을 활용한 구조적 배치를 우선적으로 사용할것. 
- 피그마의 레이아웃과 프레임 종속관계 구조를 반영하여 안정적인 위치 구현

## 🔄 FRAMELINK MCP 업무 워크플로우

**필수 작업 순서 (반드시 이 순서대로 진행할 것):**

### 1️⃣ 프레임 이름 확인 단계
- 사용자가 피그마 내 구현할 프레임 이름을 지시
- 프레임 이름을 정확히 파악 (예: frame(좌측 정보 입력 섹션), frame(신뢰도 테이블) 등)

### 2️⃣ FRAMELINK MCP 조회 단계  
- `get_figma_data` MCP를 사용하여 해당 프레임을 **정확하게** 찾기
- 프레임명 기반으로 노드 검색 및 nodeId 확인
- 토큰 제한을 고려하여 적절한 depth 설정

### 3️⃣ 프레임 구조 분석 단계
- 해당 프레임의 디자인 정보 파악 (크기, 색상, 텍스트 등)
- **프레임 종속관계** 분석 (부모-자식 관계, 레이아웃 구조)
- 오토레이아웃, 패딩, gap 정보 확인

### 4️⃣ 코드 구현 단계
- 분석한 정보를 바탕으로 React + MUI 코드 구현
- **가이드 문서의 원칙을 준수**하며 작업:
  - THEME 사용 (색상, 간격, 폰트 등)
  - 적절한 폴더 구조내에 배치치 (common, sections, layout 등)
  - 구조적 배치 우선 (flex, grid, padding, gap)
  - 절대위치 최소화

**⚠️ 주의사항:**
- 각 단계를 건너뛰지 말고 순서대로 진행
- 프레임을 정확히 찾지 못하면 다시 검색
- 구현 전 반드시 프레임 구조를 완전히 파악할 것

## 📁 KPNI 폴더 구조 가이드
```
src/components/KPNI_A3/
├── components/
│   ├── common/                   # 공통 UI 컴포넌트
│   │   ├── KPNIResultTitle.tsx  # 통합된 제목 컴포넌트
│   │   ├── KPNITable.tsx        # 공통 테이블
│   │   └── KPNIChart.tsx        # 공통 차트
│   ├── ReliabilityChart.tsx     # 신뢰도 차트
│   ├── ProfileChart.tsx         # 프로파일 차트
│   └── ScaleItem.tsx            # 척도 아이템
├── sections/                    # 페이지 섹션 컴포넌트
│   ├── 01_InfoSection.tsx       # 좌측 정보 영역
│   ├── 02_ReliabilitySection.tsx # 1번 결과신뢰지표
│   ├── 03_ProfileSection.tsx    # 2번 부모양육종합검사 프로파일
│   ├── 04_DetailSection.tsx     # 3번 세부프로파일
│   └── 05_ScaleSection.tsx      # 4번 척도별 소견
├── A3Page.tsx                   # A3 페이지 프레임
├── ResultPage.tsx               # 모든 섹션이 통합된 메인 페이지
├── theme.ts                     # 디자인 시스템
└── types.ts                     # 타입 정의
```

## 🎨 디자인 시스템 (theme.ts) (해당내용은 예시이므로 방향성만 참고할것)
```typescript
export const KPNI_THEME = {
  colors: {
    primary: '#2C5F8D',
    background: '#F5F5F5',
    scales: { 
      high: '#4CAF50', 
      normal: '#FFC107', 
      low: '#F44336' 
    }
  },
  typography: {
    fontSize: { 
      xs: 9, 
      sm: 11, 
      md: 13, 
      lg: 16, 
      xl: 20 
    }
  },
  spacing: { 
    xs: 4, 
    sm: 8, 
    md: 16, 
    lg: 24,
    xl: 32
  }
} as const;
```

## 📝 주요 개선 포인트(해당내용은 예시이므로 방향성만 참고할것)

### 1. 공통 컴포넌트 통합
```tsx
// GST의 중복 제목 컴포넌트들을 하나로 통합
export const KPNIResultTitle = ({ title, descriptions, icon }) => {
  const theme = KPNI_THEME;
  return (
    <Box sx={{ display: 'flex', gap: theme.spacing.sm }}>
      {icon}
      <Typography sx={{ fontSize: theme.typography.fontSize.xl }}>
        {title}
      </Typography>
      {descriptions?.map(desc => 
        <Typography key={desc}>{desc}</Typography>
      )}
    </Box>
  );
};
```

### 2. 스타일 객체화
```tsx
// GST의 인라인 스타일을 객체로 분리
const styles = {
  headerCell: {
    backgroundColor: theme.colors.background,
    fontSize: theme.typography.fontSize.sm,
  },
  valueCell: {
    textAlign: 'center',
    p: theme.spacing.xs,
  }
};

// 사용
<TableCell sx={styles.headerCell}>
```


### 4. 컴포넌트 분리
```tsx
// GST의 거대한 컴포넌트를 작게 분할
const SummarySection = ({ data }) => (
  <>
    <ChartArea data={data} />
    <IndexDisplay index={data.index} />
    <Description text={data.description} />
  </>
);
```

### 5. 타입 정의 간소화
```typescript
// 공통 인터페이스 활용
interface BaseSection {
  title: string;
  description?: string;
}

interface SectionProps<T = any> {
  data: T;
  theme?: typeof KPNI_THEME;
}
```

### 6. 메인 페이지 구성
```tsx
export const KPNIResultPage = () => {
  return (
    <A3Page>
      {/* 세 개 메인 섹션을 직접 구현 */}
      <Box sx={{ display: 'flex', height: '787px' }}>
        
        {/* 좌측 정보 섹션 */}
        <Box sx={{ width: '155px' }}>
          <InfoSection />
        </Box>
        
        {/* 왼쪽 메인 섹션 */}
        <Box sx={{ width: '484px' }}>
          <ReliabilitySection />
          <ProfileSection />
          <DetailSection />
        </Box>
        
        {/* 오른쪽 메인 섹션 */}
        <Box sx={{ width: '492px' }}>
          <ScaleSection />
        </Box>
        
      </Box>
    </A3Page>
  );
};
```

## 🔧 코딩 원칙
1. **재사용성**: 공통 컴포넌트와 스타일 객체 활용
2. **성능최적화**: useMemo, useCallback 적절히 사용
3. **타입안정성**: TypeScript 인터페이스 철저히 정의
4. **구조적배치**: 절대위치 최소화, Flex/Grid 레이아웃 우선
5. **일관성**: 디자인 시스템 기반 스타일링


