import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

interface ScaleData {
  name: string;
  value: number;
  percentile: number;
  level: string;
  levelColor: string;
}

interface DetailChartProps {
  categoryName: string;
  categoryColor: string;
  data: ScaleData[];
  isLast?: boolean;
  isFirst?: boolean;
}

export const DetailChart = ({ categoryName, categoryColor, data, isLast = false }: DetailChartProps) => {
  const itemHeight = 60 / data.length; // 동적 높이 계산
  const getLevelColor = (level: string) => {
    switch (level) {
      case '높음':
        return THEME.colors.level.high;
      case '다소 높음':
        return THEME.colors.level.mediumHigh;
      case '보통':
        return THEME.colors.level.medium;
      case '다소 낮음':
        return THEME.colors.level.mediumLow;
      case '낮음':
        return THEME.colors.level.low;
      default:
        return THEME.colors.level.medium;
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      width: '465px',
      height: '60px',
      borderBottom: isLast ? 'none' : `1px solid ${THEME.colors.mediumGray}`
    }}>
      {/* 상위척도 컬럼 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '33px',
        height: '60px',
        backgroundColor: categoryColor,
        boxSizing: 'border-box',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
          {categoryName.split('\n').map((line, index) => (
            <Typography key={index} sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.bold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              lineHeight: THEME.typography.lineHeight.normal,
              color: THEME.colors.mainWhite,
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}>
              {line}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* 하위척도 컬럼 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '83px',
        borderRight: `1px solid ${THEME.colors.border.light}`,
        boxSizing: 'border-box'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `${itemHeight}px`,
            backgroundColor: THEME.colors.mainWhite,
            borderBottom: index < data.length - 1 ? `0.3px dashed ${THEME.colors.border.medium}` : 'none',
            padding: '0 10px',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.medium,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              lineHeight: THEME.typography.lineHeight.tight,
              color: THEME.colors.text,
              textAlign: 'center'
            }}>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* T점수 컬럼 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '32px',
        borderRight: `1px solid ${THEME.colors.border.light}`,
        boxSizing: 'border-box'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `${itemHeight}px`,
            backgroundColor: THEME.colors.mainWhite,
            borderBottom: index < data.length - 1 ? `0.3px dashed ${THEME.colors.border.medium}` : 'none',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              lineHeight: THEME.typography.lineHeight.tight,
              color: THEME.colors.text
            }}>
              {item.value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 백분위 컬럼 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '32px',
        borderRight: `1px solid ${THEME.colors.border.light}`,
        boxSizing: 'border-box'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `${itemHeight}px`,
            backgroundColor: THEME.colors.mainWhite,
            borderBottom: index < data.length - 1 ? `0.3px dashed ${THEME.colors.border.medium}` : 'none',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.normal,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              lineHeight: THEME.typography.lineHeight.tight,
              color: THEME.colors.text
            }}>
              {item.percentile}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 수준 컬럼 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '32px',
        boxSizing: 'border-box',
        borderRight: '1px solid rgba(194, 194, 194, 0.65)'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `${itemHeight}px`,
            backgroundColor: getLevelColor(item.level),
            borderBottom: index < data.length - 1 ? `0.3px dashed ${THEME.colors.border.medium}` : 'none',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              lineHeight: THEME.typography.lineHeight.tight,
              color: THEME.colors.text
            }}>
              {item.level}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 차트 영역 */}
      <Box sx={{
        position: 'relative',
        width: '253px',
        height: '60px',
        overflow: 'hidden',
      }}>
        {/* 평균범위 배경 (40-60) */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: `${((40 - 20) / 60) * 100}%`,
          width: `${((60 - 40) / 60) * 100}%`,
          height: '100%',
          backgroundColor: THEME.colors.gray,
          opacity: 0.3
        }} />

        {/* 세로 기준선들 */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}>
          {[20, 30, 40, 50, 60, 70, 80].map((value, index) => (
            <Box key={value} sx={{
              width: '0.3px',
              height: '100%',
              backgroundColor: index === 3 ? THEME.colors.border.medium : 'transparent',
              borderRight: index === 0 ? 'none' : (index === 3 ? `0.5px solid ${THEME.colors.border.medium}` : `0.3px dashed ${THEME.colors.border.medium}`),
              opacity: 0.65
            }} />
          ))}
        </Box>

        {/* 가로 기준선들 */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}>
          {data.map((_, index) => (
            <Box key={index} sx={{
              height: `${itemHeight}px`,
              borderBottom: index < data.length - 1 ? `0.3px dashed ${THEME.colors.border.medium}` : 'none',
              boxSizing: 'border-box'
            }} />
          ))}
        </Box>

        {/* 막대 그래프 */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingLeft: '0px'
        }}>
          {data.map((item, index) => {
            // T점수 20~80 범위에서 막대 길이 계산 (240px = 전체 차트 너비 - 패딩)
            const barWidth = Math.max(0, Math.min(240, ((item.value - 20) / 60) * 240));
            
            return (
              <Box key={index} sx={{
                display: 'flex',
                alignItems: 'center',
                height: `${itemHeight}px`,
                paddingY: '2.5px',
              }}>
                <Box sx={{
                  width: `${barWidth}px`,
                  height: '7px',
                  backgroundColor: categoryColor,
                  borderRadius: '0px 1px 1px 0px'
                }} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};