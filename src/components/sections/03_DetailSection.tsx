import { Box, Typography } from '@mui/material';
import { SectionTitle } from '../UI/F_SectionTitle';
import { DetailChart } from '../UI/03_DetailChart';
import { THEME } from '../theme';
import { SCALE_DATA } from '../../data/mockData';
import type { DetailSectionProps } from '../../dtos/ResultTypes';

export const DetailSection = ({ subScales }: DetailSectionProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '487.2px',
      //backgroundColor: 'rgba(63, 200, 100, 0.3)',

    }}>
    
 {/* 섹션 제목 */}
 <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        gap: '5.4px',
        height: '27.0px'
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
        width: '628.8px',
        marginTop: '4.1px',
        borderTop: `2.7px solid ${THEME.colors.border.dark}`,
        borderBottom: `2.7px solid ${THEME.colors.border.dark}`,
        //backgroundColor: 'rgba(63, 200, 100, 0.3)',
      }}>
        {/* 테이블 헤더 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          width: '628.8px',
          height: '24.3px',
          borderBottom: `1.4px solid ${THEME.colors.border.dark}`
        }}>
          {/* 상위척도 헤더 */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '44.6px',
            height: 'auto',
            backgroundColor: THEME.colors.lightGray,
            borderRight: `1.4px solid ${THEME.colors.border.light}`,
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
            width: '112.2px',
            height: 'auto',
            backgroundColor: THEME.colors.lightGray,
            borderRight: `1.4px solid ${THEME.colors.border.light}`,
            boxSizing: 'border-box'
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
            width: '43.3px',
            height: 'auto',
            backgroundColor: THEME.colors.primary,
            borderRight: `1.4px solid ${THEME.colors.border.light}`,
            boxSizing: 'border-box'
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
            width: '43.3px',
            height: 'auto',
            backgroundColor: THEME.colors.primary,
            borderRight: `1.4px solid ${THEME.colors.border.light}`,
            boxSizing: 'border-box'
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
            width: '43.3px',
            height: 'auto',
            backgroundColor: THEME.colors.primary,
            borderRight: `1.4px solid ${THEME.colors.border.light}`,
            boxSizing: 'border-box'
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
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '341.9px',
            height: 'auto',
            backgroundColor: THEME.colors.lightGray,
            boxSizing: 'border-box'
          }}>

            <Typography sx={{
              position: 'relative',
              zIndex: 3,
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.sm-2}px`,
              color: THEME.colors.text,
            }}>
              T점수
            </Typography>

            {/* T점수 단위 표시 */}
            <Box sx={{
              position: 'absolute',
              bottom: '1.4px',
              left: 4,
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              zIndex: 3
            }}>
              {[10, 20, 30, 40, 50, 60, 70, 80].map((value) => (
                <Typography key={value} sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: THEME.typography.fontWeight.normal,
                  fontSize: '0.47rem',
                  color: THEME.colors.darkGray,
                  lineHeight: 1
                }}>
                  {value === 10 ? '' : value}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>

        {/* 세부 프로파일 차트들 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* GST 방식: 간단한 fallback 패턴 사용 */}
          {SCALE_DATA.map((scale, index) => (
            <DetailChart
              key={scale.id}
              categoryName={scale.categoryName}
              categoryColor={scale.colors.primary}
              isLast={index === SCALE_DATA.length - 1}
              isFirst={index === 0}
              data={scale.subScaleData.map(sub => {
                // GST 방식: subScales에서 같은 이름의 데이터 찾아서 fallback 적용
                const dynamicSub = subScales?.find(s => s.name === sub.name);
                return {
                  name: sub.name,
                  value: dynamicSub?.score ?? sub.tScore,
                  percentile: dynamicSub?.percentile ?? parseFloat(sub.percentile),
                  level: dynamicSub?.level ?? sub.level,
                  levelColor: ''
                };
              })}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};