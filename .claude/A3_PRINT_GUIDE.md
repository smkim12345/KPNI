# KPNI A3 인쇄 시스템 구현 가이드

## 🎯 **프로젝트 목적**
- **목표**: KPNI 프로젝트를 GST A3 인쇄 시스템과 **100% 동일한 크기와 품질**로 인쇄되도록 구현
- **이유**: KPNI와 GST 검사 결과의 **실물 인쇄물 비교 평가**를 위해 동일한 인쇄 규격 필요

## 📊 **GST vs KPNI 구조 비교**

### **GST A3 인쇄 흐름 (성공 사례)**
```
A3Page (426mm × 303mm)
└── Box (width: 100%, height: 100%, padding: 43.34px)
    └── Grid (flex: 1, backgroundColor: white, borderRadius: 24px)
        ├── GridCol span={6} (왼쪽 컨텐츠)
        └── GridCol span={6} (오른쪽 컨텐츠)
```

**핵심 특징:**
- 컨테이너가 `width: '100%', height: '100%'` 사용
- 패딩 `43.34px` (약 15.3mm)로 여백 확보
- **유연한 Grid 레이아웃**으로 반응형 구조

### **KPNI 현재 구조 (문제 상황)**
```
A3Page (426mm × 303mm)
└── OuterGreenBox (1191px × 847px - 고정 픽셀)
    └── FrameBox (1191px × 847px - 고정 픽셀)
        └── 복잡한 절대 위치 Box들 (position: absolute)
            ├── CornerBox, 배경 Box들
            ├── InfoSection (155px × 787px)
            ├── 메인 섹션들 (488px × 787px)
            └── 기타 하드코딩된 레이아웃
```

**문제점:**
- **고정 픽셀 크기**: A3 비율(426mm×303mm)과 맞지 않음
- **절대 위치 사용**: 반응형이 아닌 하드코딩된 레이아웃
- **크기 불일치**: 1191px ≈ 420mm (A3 426mm와 거의 비슷하지만 완전 일치 안함)

## 🚫 **현재 A3 인쇄가 안 되는 이유**

### **1. 크기 불일치**
```
GST: A3Page → 100% 크기 활용 → 완벽한 A3 인쇄
KPNI: A3Page(426mm) → OuterGreenBox(1191px) → 크기 거의 일치하지만 완벽하지 않음
```

### **2. 단위 혼용**
- **A3Page**: `426mm × 303mm` (mm 단위)  // 픽셀 환산: 약 1205px × 857px (1mm ≈ 2.83px 기준)
- **KPNI 컨테이너**: `1191px × 847px` (픽셀 단위)
- **변환 문제**: 1191px ≈ 420mm (A3 426mm와 거의 비슷하지만 완전 일치 안함)

### **3. CSS 인쇄 스타일 미적용**
```css
/* GST 방식 (작동) */
#printArea[data-print-size='a3'] .result-component {
  grid-template-columns: 213mm 213mm;  /* 앞면/뒷면 나란히 */
}

/* KPNI 현재 (문제) */
- 고정 픽셀 크기로 인해 CSS grid가 제대로 작동 안 함
- 인쇄시 여백 발생
```

## 🔧 **해결 전략**

### **원칙 1: OuterGreenBox 이하 절대 건드리지 않기**
```typescript
// ❌ 금지: OuterGreenBox 이하 모든 수정
<OuterGreenBox>  // 인쇄 테두리이므로 건드리면 안됨
  <FrameBox>  // 건드리면 안됨
    <Box sx={{ position: 'absolute', left: '30px', ... }} />  // 건드리면 안됨
    <CornerBox />  // 건드리면 안됨
    <InfoSection />  // 건드리면 안됨
  </FrameBox>
</OuterGreenBox>

// ✅ 허용: A3Page와 CSS만 수정 가능
<A3Page>  // CSS 클래스 수정 가능
  <OuterGreenBox>  // 여기서부터 금지구역
```

### **원칙 2: 인쇄 전용 스타일링**
- **화면 표시**: 기존 픽셀 크기 유지
- **인쇄시**: A3 크기로 자동 조정
- **@media print** 쿼리 활용


## 🎨 **현재 상태**

### **완료된 작업**
- ✅ A3Page 컴포넌트 생성
- ✅ PdfDownloadButton 구현
- ✅ 기본 인쇄 CSS 설정



## ⚠️ **주의사항**

### **절대 수정 금지 파일 (백엔드 연동)**
- `src/components/print/A3Page.tsx` - 백엔드 연동 완료, 수정 금지
- `src/components/print/PdfDownloadButton.tsx` - 백엔드 연동 완료, 수정 금지  
- `src/index.css` - 백엔드 연동 완료, 수정 금지
- `src/App.tsx` - 백엔드 연동 완료, 수정 금지

### **절대 수정 금지 컴포넌트 (레이아웃 보존)**
1. **절대 금지**: OuterGreenBox 이하 모든 수정 (인쇄 테두리 보존)
2. **절대 금지**: FrameBox 내부의 절대 위치 Box들 수정
3. **절대 금지**: InfoSection, 메인 섹션들의 하드코딩 크기 변경  
4. **절대 금지**: CornerBox, 배경 Box들의 위치값 수정


## 🔗 **참조 파일**

### **GST 참조**
- `D:\github\kpr-inventory-react2\src\domains\result\components\GST\A3\ResultPage.tsx`
- `D:\github\kpr-inventory-react2\src\domains\result\components\A3Page.tsx`
- `D:\github\kpr-inventory-react2\src\App.css`
- `D:\github\kpr-inventory-react2\src\index.css`

### **KPNI 대상**
- `D:\github\KPNI\src\components\ResultPage.tsx` - ✅ 수정 가능 (OuterGreenBox 이하 제외)
- `D:\github\KPNI\src\components\print\A3Page.tsx` - ❌ 수정 금지 (백엔드 연동)
- `D:\github\KPNI\src\components\print\PdfDownloadButton.tsx` - ❌ 수정 금지 (백엔드 연동)
- `D:\github\KPNI\src\index.css` - ❌ 수정 금지 (백엔드 연동)

---
**최종 목표**: GST A3 인쇄물과 1:1 동일한 크기의 KPNI 인쇄물 생성으로 공정한 검사 결과 비교 평가 구현