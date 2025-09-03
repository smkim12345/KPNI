# 피그마 그래프/표/테이블 구현 가이드

## 🎯 **목적**
피그마에 있는 그래프, 표, 테이블을 파악하여 거의 유사한 형식으로 코드를 구현하되, 
피그마의 한계를 극복하고 더 효율적이고 깔끔한 형태로 구현한다.

## 📋 **핵심 원칙**

### **1. 맥락 이해 우선**
- 피그마의 개별 요소를 그대로 따라하지 말고 전체적인 의도 파악
- 사용자가 원하는 표/그래프의 본질적 목적 이해
- 데이터 구조와 시각적 표현의 관계 분석

### **2. 피그마 한계 극복**
- 피그마는 표/테이블 기능이 없어 선과 도형을 일일이 배치
- 이를 그대로 따라하면 비효율적이고 유지보수 어려움
- 코드에서는 체계적이고 반응형인 구조로 재구성

### **3. 벤치마킹 활용**
- `D:\github\kpr-inventory-react2\src\domains\result\components\GST\A3` 참조
- 기존 구현 방식을 분석하여 장점은 활용하고 단점은 보완

## 🔍 **분석 프로세스**

### **Step 1: 피그마 프레임 분석**
```typescript
// Frame MCP를 사용하여 대상 프레임 조회
get_figma_data(fileKey="...", nodeId="특정_프레임_ID", depth=3)
```

**분석 포인트:**
- 전체 레이아웃 구조 (크기, 위치, 간격)
- 데이터 표시 방식 (행/열, 헤더, 내용)
- 시각적 요소 (색상, 폰트, 테두리, 배경)
- 계층 구조 (중첩된 요소들의 관계)

### **Step 2: 의도 파악**
**표/테이블인 경우:**
- 몇 개의 행/열로 구성되어 있나?
- 헤더가 있는가? 어떤 정보를 담고 있나?
- 데이터 유형은? (텍스트, 숫자, 상태값 등)
- 스타일링 패턴은? (alternating rows, borders, etc.)

**그래프/차트인 경우:**
- 차트 유형은? (bar, line, pie, scatter 등)
- 축(axis) 정보는?
- 데이터 시리즈는 몇 개인가?
- 범례, 라벨, 눈금은 어떻게 표시되나?

### **Step 3: 데이터 구조 설계**
```typescript
// 예시: 척도 분석 테이블
interface ScaleTableData {
  subScales: Array<{
    name: string;
    tScore: number;
    percentile: number;
    level: string;
    interpretation: string;
  }>;
}

// 예시: 프로파일 차트
interface ProfileChartData {
  scales: Array<{
    name: string;
    score: number;
    standardScore: number;
    range: { min: number; max: number; };
  }>;
}
```

## 🛠️ **구현 전략**

### **표/테이블 구현**

#### **MUI Table 기반 구조**
```tsx
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const ScaleTable = ({ data }: { data: ScaleTableData }) => {
  return (
    <Table sx={{ 
      border: `1px solid ${THEME.colors.border}`,
      borderCollapse: 'separate',
      borderSpacing: 0
    }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ 
            backgroundColor: THEME.colors.scale.primary,
            borderRight: `1px solid ${THEME.colors.border}`
          }}>
            하위척도
          </TableCell>
          {/* 다른 헤더들... */}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.subScales.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            {/* 다른 셀들... */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
```

#### **Flex Box 기반 구조 (단순한 경우)**
```tsx
const SimpleTable = ({ data }: TableProps) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      border: `1px solid ${THEME.colors.border}`,
      borderRadius: `${THEME.borderRadius.sm}px`
    }}>
      {/* 헤더 */}
      <Box sx={{ 
        display: 'flex',
        backgroundColor: THEME.colors.scale.secondary,
        borderBottom: `1px solid ${THEME.colors.border}`
      }}>
        {headers.map((header, index) => (
          <Box key={index} sx={{ flex: 1, padding: '8px' }}>
            <Typography variant="h6">{header}</Typography>
          </Box>
        ))}
      </Box>
      
      {/* 데이터 행들 */}
      {data.map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ 
          display: 'flex',
          borderBottom: rowIndex < data.length - 1 ? `1px solid ${THEME.colors.border}` : 'none'
        }}>
          {row.map((cell, cellIndex) => (
            <Box key={cellIndex} sx={{ flex: 1, padding: '8px' }}>
              <Typography>{cell}</Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};
```

### **그래프/차트 구현**

#### **Chart.js + React-Chartjs-2 활용**
```tsx
import { Bar, Line, Doughnut } from 'react-chartjs-2';

const ProfileChart = ({ data }: { data: ProfileChartData }) => {
  const chartData = {
    labels: data.scales.map(scale => scale.name),
    datasets: [{
      label: '표준점수',
      data: data.scales.map(scale => scale.standardScore),
      backgroundColor: THEME.colors.scale.primary,
      borderColor: THEME.colors.scale.secondary,
      borderWidth: 2
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.parsed.y}점`;
          }
        }
      }
    }
  };

  return (
    <Box sx={{ height: '300px', position: 'relative' }}>
      <Bar data={chartData} options={options} />
    </Box>
  );
};
```

#### **Custom SVG 차트 (특수한 경우)**
```tsx
const CustomChart = ({ data }: ChartProps) => {
  const width = 400;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };
  
  return (
    <svg width={width} height={height}>
      {/* 배경 및 격자 */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {/* 데이터 시각화 */}
      {data.map((point, index) => (
        <circle
          key={index}
          cx={margin.left + (point.x / 100) * (width - margin.left - margin.right)}
          cy={height - margin.bottom - (point.y / 100) * (height - margin.top - margin.bottom)}
          r="4"
          fill={THEME.colors.scale.primary}
        />
      ))}
      
      {/* 축 라벨 */}
      <text x={width/2} y={height - 5} textAnchor="middle" fontSize="12">
        X축 라벨
      </text>
    </svg>
  );
};
```

## 📊 **벤치마킹 분석**

### **GST A3 컴포넌트 구조 분석**
```
D:\github\kpr-inventory-react2\src\domains\result\components\GST\A3\
├── charts/
│   ├── ProfileChart.tsx       # 프로파일 차트
│   ├── ScaleChart.tsx         # 척도 차트  
│   └── ComparisonChart.tsx    # 비교 차트
├── tables/
│   ├── ScoreTable.tsx         # 점수 테이블
│   ├── InterpretationTable.tsx # 해석 테이블
│   └── SummaryTable.tsx       # 요약 테이블
└── utils/
    ├── chartConfig.ts         # 차트 설정
    ├── tableStyles.ts         # 테이블 스타일
    └── dataTransform.ts       # 데이터 변환
```

**장점 분석:**
- 컴포넌트별 역할 분리가 명확
- 재사용 가능한 유틸리티 분리
- 일관된 스타일 시스템


## 🎨 **스타일링 가이드**

### **테이블 스타일링**
```typescript
const tableStyles = {
  container: {
    border: `1px solid ${THEME.colors.scale.secondary}`,
    borderRadius: `${THEME.borderRadius.sm}px`,
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
  },
  header: {
    backgroundColor: THEME.colors.scale.secondary,
    fontWeight: THEME.typography.fontWeight.semiBold,
    fontSize: `${THEME.typography.fontSize.sm}px`,
    padding: `${THEME.spacing.sm}px ${THEME.spacing.md}px`
  },
  cell: {
    borderBottom: `1px solid ${THEME.colors.scale.light}`,
    padding: `${THEME.spacing.sm}px ${THEME.spacing.md}px`,
    fontSize: `${THEME.typography.fontSize.sm}px`
  },
  alternatingRow: {
    backgroundColor: `${THEME.colors.scale.light}10` // 매우 연한 배경
  }
};
```

### **차트 색상 팔레트**
```typescript
const chartColors = {
  primary: [
    THEME.colors.scale.childCharacter.primary,
    THEME.colors.scale.parentingAttitude.primary,
    THEME.colors.scale.parentingEnvironment.primary,
    THEME.colors.scale.parentingStress.primary,
    THEME.colors.scale.parentingProcess.primary
  ],
  gradient: [
    `${THEME.colors.scale.childCharacter.primary}80`,
    `${THEME.colors.scale.parentingAttitude.primary}80`,
    // ... 다른 색상들
  ]
};
```

## 🔄 **워크플로우**

### **1. 피그마 분석 단계**
```bash
# Frame MCP로 대상 프레임 조회
get_figma_data(fileKey="...", nodeId="profile_chart", depth=3)

# 구조 분석
- 차트 영역 크기: 295px × 226px
- 축 정보: X축(척도명), Y축(점수)
- 데이터 포인트: 5개 척도
- 스타일: 선 그래프 + 점 마커
```

### **2. 의도 파악 단계**
```typescript
// 분석 결과 → 의도 파악
interface ChartIntention {
  type: 'line' | 'bar' | 'scatter' | 'pie';
  purpose: '척도별 점수 비교';
  dataStructure: {
    xAxis: '척도명 (5개)';
    yAxis: '표준점수 (0-100)';
    series: 1;
  };
  visualFeatures: {
    showGrid: true;
    showMarkers: true;
    showLabels: true;
    responsive: true;
  };
}
```

### **3. 구현 단계**
```tsx
// 1. 데이터 구조 정의
// 2. 컴포넌트 구현
// 3. 스타일 적용
// 4. THEME 시스템 연동
// 5. 반응형 처리
```

### **4. 검증 단계**
- 피그마 디자인과 시각적 유사성 확인
- 데이터 정확성 검증
- 접근성(a11y) 확인

## ⚠️ **주의사항**

### **피그마 함정 피하기**
1. **개별 요소 복사 금지**: 선 하나하나를 Box로 만들지 말 것
2. **절대 위치 남용 금지**: position: absolute 최소화
3. **하드코딩 금지**: 색상, 크기 등 THEME 시스템 활용
4. **확장성 고려**: 데이터가 변해도 유연하게 대응

### **성능 최적화**
1. **가상화**: 대량 데이터 테이블에 react-window 활용
2. **메모이제이션**: React.memo, useMemo로 불필요한 재렌더링 방지
3. **레이지 로딩**: 차트 라이브러리 동적 import


## 📚 **참고 라이브러리**

### **차트 라이브러리**
- **Chart.js + react-chartjs-2**: 일반적인 차트
- **Recharts**: React 친화적, 커스터마이징 용이
- **D3.js**: 복잡한 커스텀 시각화
- **Victory**: 모듈화된 차트 컴포넌트

### **테이블 라이브러리**
- **MUI Table**: 기본 테이블, 스타일링 용이
- **React Table**: 복잡한 테이블 기능
- **AG Grid**: 엔터프라이즈급 데이터 그리드

## 🎯 **성공 기준**

1. **시각적 유사성**: 피그마 디자인의 90% 이상 재현
2. **데이터 정확성**: 모든 데이터 정확히 표시
4. **성능**: 1초 내 렌더링 완료
5. **유지보수성**: 데이터 구조 변경 시 최소한의 코드 수정
6. **접근성**: WCAG 2.1 AA 수준 달성

---

이 가이드를 따라 피그마의 표/그래프를 효율적이고 깔끔하게 코드로 구현하세요!