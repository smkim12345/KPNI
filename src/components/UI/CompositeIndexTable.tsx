import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

interface CompositeIndexTableProps {
  score?: number; // 그래프 막대의 값 (0-140 범위)
  averageRange?: number; // 평균범위 너비
}

export const CompositeIndexTable = ({
  score = 85,
  averageRange = 40
}: CompositeIndexTableProps) => {
  const ticks = [60, 70, 80, 90, 100, 110, 120, 130, 140];
  const minScore = 60;
  const maxScore = 140;
  const maxWidth = 167;

  const scoreToPixel = (value: number) => {
    const clampedValue = Math.max(minScore, Math.min(value, maxScore));
    const scoreRange = maxScore - minScore;
    if (scoreRange === 0) return 0; // 0으로 나누기 방지
    return ((clampedValue - minScore) / scoreRange) * maxWidth;
  };

  return (
    <Box sx={{
      width: '167px',
      height: '39px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1px'
    }}>
      {/* 막대그래프 및 눈금 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: '10px',
        padding: '0px 66px',
        height: '30px',
        position: 'relative'
      }}>
        {/* 평균범위 배경 */}
        <Box sx={{
          position: 'absolute',
          width: `${averageRange}px`,
          height: '22px',
          backgroundColor: 'rgba(217, 217, 217, 0.58)',
          top: '9px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }} />

        {/* 눈금 막대들 */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '167px',
          height: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '14px'
        }}>
          {ticks.map((tickValue, index) => (
            <Box key={index} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '5px',
              height: '100%'
            }}>
              {/* 눈금 텍스트 */}
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: THEME.typography.fontWeight.semiBold,
                fontSize: '7px',
                lineHeight: '1.19em',
                color: '#6C6C6C',
                textAlign: 'center',
                marginBottom: '2px'
              }}>
                {tickValue}
              </Typography>

              {/* 눈금 선 */}
              <Box sx={{
                width: '0px',
                height: '22px',
                borderLeft: '0.8px solid ' + THEME.colors.gray,
                flex: 1
              }} />
            </Box>
          ))}
        </Box>

        {/* 그래프 막대 */}
        <Box sx={{
          position: 'absolute',
          left: '2px',
          bottom: '2px',
          width: `${scoreToPixel(score)}px`,
          height: '16px',
          backgroundColor: THEME.colors.primary,
          zIndex: 2
        }} />
      </Box>

      {/* 평균 텍스트 */}
      <Typography sx={{
        alignSelf: 'stretch',
        fontFamily: THEME.typography.fontFamily.pretendard,
        fontWeight: THEME.typography.fontWeight.semiBold,
        fontSize: '7px',
        lineHeight: '1.09em',
        color: '#868686',
        textAlign: 'center'
      }}>
        평균
      </Typography>
    </Box>
  );
};
