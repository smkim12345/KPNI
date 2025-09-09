# K-PNI A3 결과지 구현 가이드

## 🎯 **프로젝트 개요**
- **목표**: 피그마 K-PNI A3 개인결과지를 React + MUI로 **정확히 동일한 디자인**으로 구현
- **피그마 링크**: https://www.figma.com/design/DAfGZDS2gtUa3sWrldHqve/K-PNI-A3-%EA%B2%80%EC%82%AC-%EA%B2%B0%EA%B3%BC%EC%A7%80
- **타겟 프레임**: `k-pni_a3_result-ver01` (노드ID: `1-2`)
- **현재 상태**: InfoSection 메인제목 + 정보기입란 **구현 완료** ✅

## 📁 **최적화된 폴더 구조** ✅
```
src/
├── components/
│   ├── sections/                 # 페이지 섹션 컴포넌트
│   │   ├── 01_InfoSection.tsx    # ✅ 완성 (메인제목 + 정보기입)
│   │   ├── 02_ReliabilitySection.tsx
│   │   ├── 03_ProfileSection.tsx
│   │   ├── 04_DetailSection.tsx
│   │   └── 05_ScaleSection.tsx
│   ├── UI/                       # 재사용 UI 컴포넌트
│   │   ├── InputField.tsx        # ✅ 완성된 재사용 컴포넌트
│   │   ├── KPNITable.tsx         # 공통 테이블
│   │   ├── KPNIChart.tsx         # 공통 차트
│   │   ├── KPNIResultTitle.tsx   # 제목 컴포넌트
│   │   ├── ReliabilityChart.tsx  # 신뢰도 차트
│   │   ├── ProfileChart.tsx      # 프로파일 차트
│   │   └── ScaleItem.tsx         # 척도 아이템
│   ├── KPNIResultPage.tsx        # ✅ 통합 메인 페이지 (A3+Result)
│   ├── theme.ts                  # ✅ 완성된 디자인 시스템
│   ├── types.ts                  # 타입 정의
│   └── index.ts                  # Export 관리
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## 🎨 **현재 적용된 디자인 시스템**
```typescript
// theme.ts - 실제 구현 상태
export const THEME = {
  colors: {
    primary: '#629449',      // 메인 색상
    mainWhite: '#FBFBFB',   // 메인 텍스트
    white: '#FFFFFF',       // 배경
    text: '#0B0B0B',       // 일반 텍스트
    gray: '#D3D4D6',       // 용어설명 배경
  },
  typography: {
    fontSize: { 
      xs: 6, sm: 9, md: 11, lg: 13, xl: 15, xxl: 20, huge: 48 
    },
    fontFamily: {
      moyamoya: 'Cafe24 Moyamoya OTF',     // K-PNI 타이틀
      ohsquare: 'Cafe24 Ohsquare',         // 일반 제목
      ohsquareAir: 'Cafe24 Ohsquare air',  // 본문 텍스트
      pretendard: 'Pretendard'     // 설명 텍스트
    },
    lineHeight: { tight: '1.23em', normal: '1.268em' }
  },
  spacing: { xs: 3, sm: 4, md: 8, lg: 16, xl: 24, xxl: 32 },
  borderRadius: { xs: 4, sm: 15, md: 20, lg: 25 }
}
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

## ✅ **성공적인 구현 패턴 (InfoSection 사례)**

### **1. 직접 통합 방식 (권장)**
```tsx
// ✅ 좋은 예: 섹션 내부 직접 구현
export const InfoSection = () => {
  return (
    <Box sx={{ /* 컨테이너 */ }}>
      {/* 메인 제목 - 직접 구현 */}
      <Box sx={{ /* 제목 영역 */ }}>
        <Box sx={{ /* 로고 */ }} />
        <Typography>K-PNI</Typography>
        <Typography>부모양육종합검사</Typography>
      </Box>
    </Box>
  );
};

// ❌ 나쁜 예: 불필요한 별도 컴포넌트
const MainTitle = () => { /* 단순한 내용 */ };
```

### **2. 반복 요소는 컴포넌트화**
```tsx
// ✅ 좋은 예: 반복되는 입력 필드
interface InputFieldProps {
  label: string;
  value: string;
}

export const InputField = ({ label, value }: InputFieldProps) => {
  return (
    <Box sx={{ position: 'relative', width: '109px', height: '23px' }}>
      <Box sx={{ /* 구분선 */ }} />
      <Typography sx={{ /* 라벨 */ }}>{label}</Typography>
      <Typography sx={{ /* 값 */ }}>{value}</Typography>
    </Box>
  );
};

// 사용
<InputField label="양육자명" value="김성민" />
<InputField label="자녀이름" value="김성근" />
```

### **3. 테마 시스템 활용**
```tsx
// ✅ 필수: 테마 사용
sx={{
  color: THEME.colors.mainWhite,
  fontSize: `${THEME.typography.fontSize.huge}px`,
  fontFamily: THEME.typography.fontFamily.moyamoya,
  borderRadius: `${THEME.borderRadius.sm}px`,
  gap: `${THEME.spacing.xs}px`
}}

// ❌ 금지: 하드코딩
sx={{
  color: '#FBFBFB',
  fontSize: '48px',
  fontFamily: 'Cafe24 Moyamoya OTF',
  borderRadius: '15px',
  gap: '3px'
}}
```

## 🏆 **구현 가이드라인**

### **직접 구현 vs 컴포넌트 분리**

| 직접 구현 ✅ | 컴포넌트 분리 ✅ |
|-------------|----------------|
| 해당 섹션에서만 사용 | 여러 섹션에서 재사용 |
| 단순한 정적 콘텐츠 | 반복되는 패턴 |
| 메인 제목, 설명 텍스트 | InputField, TableRow |

### **테마 활용 체크리스트**
- [ ] 색상: `THEME.colors.*`
- [ ] 폰트: `THEME.typography.fontFamily.*`
- [ ] 크기: `THEME.typography.fontSize.*`
- [ ] 간격: `THEME.spacing.*`
- [ ] 모서리: `THEME.borderRadius.*`

### **금지 사항 🚫**
- ❌ 과도한 레이아웃 상수 (`THEME.layout.specific.*`)
- ❌ 단순 요소의 불필요한 컴포넌트 분리
- ❌ 하드코딩된 스타일 값
- ❌ 과도한 Box 래핑

## 🔧 **핵심 원칙**
1. **THEME 우선**: 모든 스타일 값은 테마에서 가져오기
2. **구조적 배치**: flex, grid, gap 활용하여 위치 관리
3. **적절한 분리**: 반복 요소만 컴포넌트로 분리
4. **일관성 유지**: InfoSection 패턴을 다른 섹션에도 적용
5. **피그마 정확도**: 디자인과 1:1 일치 목표

