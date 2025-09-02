import { Box, Typography } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';
import { DetailChart } from '../UI/DetailChart';
import { THEME } from '../theme';
import { SCALE_DATA } from '../../data/scaleData';

export const DetailSection = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '360px',
      //backgroundColor: 'rgba(63, 200, 100, 0.3)',

    }}>
    
 {/* 섹션 제목 */}
 <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        gap: '4px',
        height: '20px'
      }}>
        <SectionTitle 
          sectionNumber={3}
          title="상세 프로파일"
          description="각 상위척도별 하위척도에 대한 상세한 결과를 보여줍니다. "
        />
      </Box>

      {/* 세부 프로파일 테이블 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        width: '465px',
        marginTop: '10px'
      }}>
        {/* 테이블 헤더 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          width: '465px',
          height: '24px',
          border: `1px solid rgba(135, 135, 135, 0.65)`,
          borderBottom: `1px solid rgba(135, 135, 135, 0.65)`
        }}>
          {/* 상위척도 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '33px',
            height: '24px',
            backgroundColor: '#E2E2E2',
            borderRight: '1px solid rgba(194, 194, 194, 0.65)',
            padding: '10px',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              color: THEME.colors.text,
              textAlign: 'center',
              wordBreak: 'keep-all'
            }}>
              상위 척도
            </Typography>
          </Box>

          {/* 하위척도 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '83px',
            height: '24px',
            backgroundColor: '#E2E2E2',
            borderRight: '1px solid #FBFBFB'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              color: THEME.colors.text
            }}>
              하위 척도
            </Typography>
          </Box>

          {/* T점수 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '24px',
            backgroundColor: THEME.colors.primary,
            borderRight: '1px solid #FBFBFB'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              color: THEME.colors.mainWhite
            }}>
              T점수
            </Typography>
          </Box>

          {/* 백분위 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '24px',
            backgroundColor: THEME.colors.primary,
            borderRight: '1px solid #FBFBFB'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              color: THEME.colors.mainWhite
            }}>
              백분위
            </Typography>
          </Box>

          {/* 수준 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '24px',
            backgroundColor: THEME.colors.primary,
            borderRight: '0.5px solid #FBFBFB'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              color: THEME.colors.mainWhite
            }}>
              수준
            </Typography>
          </Box>

          {/* T점수 및 단위 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '252px',
            height: '24px',
            backgroundColor: '#E2E2E2'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xs}px`,
              color: THEME.colors.text
            }}>
              T점수
            </Typography>
          </Box>
        </Box>

        {/* 세부 프로파일 차트들 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {SCALE_DATA.map((scale) => (
            <DetailChart 
              key={scale.id}
              categoryName={scale.categoryName}
              categoryColor={scale.colors.primary}
              data={scale.subScaleData.map(sub => ({
                name: sub.name,
                value: sub.tScore,
                percentile: parseFloat(sub.percentile),
                level: sub.level,
                levelColor: ''
              }))}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};