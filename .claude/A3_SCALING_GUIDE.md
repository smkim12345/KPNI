# A3 인쇄 스케일링 가이드

## 스케일링 규칙
- 모든 고정값(px)에 **1.352** 배율 적용
- 소수점 **첫째 자리까지만** 표기
- A3 100% 여백없이 인쇄 구현 목표

## 적용 방법

### 1. Theme 값 우선 적용
디자인 상수는 theme 파일에서 직접 스케일링하여 일괄 적용:
- `fontSize`: 기존값 × 1.352
- `lineHeight`: 기존값 × 1.352  
- `spacing`: 기존값 × 1.352
- `borderRadius`: 기존값 × 1.352

### 2. 컴포넌트별 고정값 적용
theme으로 처리되지 않는 값들:
- `width`, `height`: 기존값 × 1.352
- `padding`, `margin`: 기존값 × 1.352
- `gap`: 기존값 × 1.352
- `top`, `left`, `right`, `bottom`: 기존값 × 1.352

## 적용 순서
1. ✅ 00_InfoSection (예시 구현 완료)
2. 🔄 01섹션 ~ 04섹션 (앞면)
3. 🔄 뒷면 섹션들

## 계산 예시
```
기존: width: 100px → 새값: width: 135.2px
기존: fontSize: 16px → 새값: fontSize: 21.6px
기존: padding: 8px → 새값: padding: 10.8px
```

## 주의사항
- theme 값 적용 후 개별 컴포넌트에서 중복 적용 방지
- theme 디자인 시스템값을 적용하기 좋은 반복 상수값에는 능동적으로 적용할것. 
ex:
before = fontSize: `9.5px`
after = fontsize : 'theme.fontSizes.xs'