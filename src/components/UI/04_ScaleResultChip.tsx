import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

interface ScaleResultChipProps {
  label: string;
  value: string;
  isLarge?: boolean; // 수준 칩은 내용에 따라 자동 크기 조정
  borderColor: string; // 테두리 색상
}

export const ScaleResultChip = ({
  label,
  value,
  borderColor
}: ScaleResultChipProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '4.1px'
    }}>
      {/* 라벨 */}
      <Typography sx={{
        fontFamily: THEME.typography.fontFamily.pretendard,
        fontWeight: THEME.typography.fontWeight.medium,
        fontSize: `${THEME.typography.fontSize.xs}px`,
        lineHeight: '1.74em',
        color: THEME.colors.text,
        textAlign: 'center'
      }}>
        {label}
      </Typography>

      {/* 값 칩 */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 6.8px',
        width: 'auto',
        minWidth: '18.9px',
        height: '16.2px',
        backgroundColor: THEME.colors.mainWhite,
        border: `1.4px solid ${borderColor}`,
        borderRadius: '47.3px'
      }}>
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.pretendard,
          fontWeight: THEME.typography.fontWeight.medium,
          fontSize: `${THEME.typography.fontSize.xs}px`,
          lineHeight: '1em',
          color: THEME.colors.text,
          textAlign: 'center'
        }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

// 상위척도 결과 요약 전체 컴포넌트 (3개 칩 통합)
interface ScaleResultSummaryProps {
  scaleResults: {
    tScore: string;
    percentile: string;
    level: string;
  };
  borderColor: string;
}

export const ScaleResultSummary = ({
  scaleResults,
  borderColor
}: ScaleResultSummaryProps) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '6.8px'
    }}>
      {/* T점수 칩 */}
      <ScaleResultChip
        label="T점수"
        value={scaleResults.tScore}
        borderColor={borderColor}
      />

      {/* 백분위 칩 */}
      <ScaleResultChip
        label="백분위"
        value={scaleResults.percentile}
        borderColor={borderColor}
      />

      {/* 수준 칩 */}
      <ScaleResultChip
        label="수준"
        value={scaleResults.level}
        borderColor={borderColor}
      />
    </Box>
  );
};
