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
}

export const DetailChart = ({ categoryName, categoryColor, data, isLast = false }: DetailChartProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case '높음':
        return 'rgba(130, 207, 91, 0.76)';  
      case '다소 높음':
        return 'rgba(152, 215, 115, 0.7)';  
      case '보통':
        return 'rgba(174, 223, 139, 0.7)';  
      case '다소 낮음':
        return 'rgba(188, 230, 167, 0.7)';  
      case '낮음':
        return 'rgba(201, 237, 183, 0.7)';  
      default:
        return 'rgba(174, 223, 139, 0.7)';
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      width: '465px',
      height: '60px',
      borderBottom: isLast ? `2px solid rgba(135, 135, 135, 0.65)` : 'none'
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
        borderRight: '1px solid rgba(194, 194, 194, 0.65)',
        padding: '10px',
        boxSizing: 'border-box'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '2px'
        }}>
          {categoryName.split('\n').map((line, index) => (
            <Typography key={index} sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.bold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              lineHeight: THEME.typography.lineHeight.tight,
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
        borderRight: '1px solid rgba(194, 194, 194, 0.65)'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '12px',
            backgroundColor: THEME.colors.mainWhite,
            borderBottom: index < data.length - 1 ? '0.3px dashed rgba(108, 108, 108, 0.68)' : 'none',
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
        borderRight: '1px solid rgba(194, 194, 194, 0.65)'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '12px',
            backgroundColor: THEME.colors.mainWhite,
            borderBottom: index < data.length - 1 ? '0.3px dashed rgba(108, 108, 108, 0.65)' : 'none'
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
        borderRight: '1px solid rgba(194, 194, 194, 0.65)'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '12px',
            backgroundColor: THEME.colors.mainWhite,
            borderBottom: index < data.length - 1 ? '0.3px dashed rgba(108, 108, 108, 0.65)' : 'none'
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
        borderRight: '0.5px solid rgba(194, 194, 194, 0.65)'
      }}>
        {data.map((item, index) => (
          <Box key={index} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '12px',
            backgroundColor: getLevelColor(item.level),
            borderBottom: index < data.length - 1 ? '0.3px dashed rgba(108, 108, 108, 0.65)' : 'none'
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
        width: '252px',
        height: '60px'
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
              backgroundColor: index === 3 ? 'rgba(108, 108, 108, 0.65)' : 'transparent',
              borderRight: index === 3 ? '0.5px solid rgba(108, 108, 108, 0.65)' : '0.3px dashed rgba(108, 108, 108, 0.65)',
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
          justifyContent: 'space-between'
        }}>
          {data.map((_, index) => (
            <Box key={index} sx={{
              height: '12px',
              borderBottom: index < data.length - 1 ? '0.3px dashed rgba(108, 108, 108, 0.65)' : 'none'
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
          justifyContent: 'space-around',
          paddingLeft: '2px'
        }}>
          {data.map((item, index) => {
            // T점수 20~80 범위에서 막대 길이 계산 (240px = 전체 차트 너비 - 패딩)
            const barWidth = Math.max(0, Math.min(240, ((item.value - 20) / 60) * 240));
            
            return (
              <Box key={index} sx={{
                display: 'flex',
                alignItems: 'center',
                height: '12px',
                paddingY: '2.5px'
              }}>
                <Box sx={{
                  width: `${barWidth}px`,
                  height: '7px',
                  backgroundColor: categoryColor,
                  borderRadius: '1px'
                }} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};