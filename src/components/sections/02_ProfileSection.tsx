import { Box, Typography } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';
import { SectionDescription } from '../UI/SectionTitleDescription';
import { ProfileChart } from '../UI/02_ProfileChart';
import { CompositeIndexTable } from '../UI/02_CompositeIndexTable';
import { THEME } from '../theme';
import { COMPOSITE_INDEX_DATA } from '../../data/scaleData';

interface ProfileSectionProps {
  indexScore?: number;
  percentile?: number;
  summaryLevel?: string;
  interpretation?: string;
}

export const ProfileSection = ({ 
  indexScore = COMPOSITE_INDEX_DATA.indexScore, 
  percentile = COMPOSITE_INDEX_DATA.percentile,
  summaryLevel = COMPOSITE_INDEX_DATA.level,
  interpretation = COMPOSITE_INDEX_DATA.interpretation
}: ProfileSectionProps) => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '353px',
      //backgroundColor: 'rgba(255, 100, 0, 0.3)',
    }}>
      
      {/* 섹션 제목 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        gap: `${THEME.spacing.sm}px`,
        height: '20px'
      }}>
        <SectionTitle 
          sectionNumber={2}
          title="종합 프로파일"
          description={`요약 프로파일은 검사의 상위 척도들의 값을 모아 놓은 프로파일로, 전체적인 결과를 함축적으로 제시합니다.
 상위 척도와 학습지수를 통해 학습자의 전반적인 학습 역량과 상태를 개괄적으로 파악할 수 있습니다.`}
        />
      </Box>

      {/* 제목하단 용어설명 */}
      <SectionDescription 
        items={[
          { text: '※T점수란? ', fontWeight: 'semiBold' },
          { text: '평균이 50, 표준편차가 10점으로 환산된 점수로, 개인의 점수가 모집단 평균(50)에서 얼마나 차이가 나는지를 나타냅니다.', fontWeight: 'normal' }
        ]}
      />

      {/* 종합 프로파일 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        padding: '0px 0px 7px'
      }}>
        {/* 상위척도 그래프 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: `${THEME.spacing.lg}px`,
          padding: '6.84px 6.84px',
          width: '472px',
          height: '243px',
          backgroundColor: THEME.colors.mainWhite,
          border: `4px solid ${THEME.colors.primary}`,
          borderRadius: `${THEME.borderRadius.sm}px`,
          boxSizing: 'border-box'
        }}>
          {/* 종합프로파일 그래프 */}
          <Box sx={{
            width: '295px',
            height: '226px',
            position: 'relative',
            //backgroundColor: 'rgba(0, 150, 255, 0.3)'
          }}>
            <ProfileChart />
          </Box>
          
          {/* 결과 종합 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '-6px',
            height: '226px'
          }}>
            {/* 결과 요약 */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'stretch',
              alignItems: 'stretch',
              gap: '7px',
              padding: '6px 10px 10px',
              width: '146px'
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '5px',
                flex: 1
              }}>
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: THEME.typography.fontWeight.semiBold,
                  fontSize: `${THEME.typography.fontSize.xs}px`,
                  lineHeight: '1.19em',
                  color: THEME.colors.text,
                  textAlign: 'left',
                  width: '100%'
                }}>
                  나의 부모양육종합검사 점수는
                </Typography>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: THEME.colors.primary,
                  borderRadius: `${THEME.borderRadius.xs}px`,
                  width: '100%',
                  height: '20px'
                }}>
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.semiBold,
                    fontSize: `${THEME.typography.fontSize.md}px`,
                    color: THEME.colors.mainWhite,
                    textAlign: 'center'
                  }}>
                    {summaryLevel}
                  </Typography>
                </Box>
                <Typography sx={{
                  fontFamily: 'Inter',
                  fontWeight: THEME.typography.fontWeight.medium,
                  fontSize: `${THEME.typography.fontSize.xs}px`,
                  lineHeight: '1.21em',
                  color: THEME.colors.text,
                  textAlign: 'right',
                  width: '100%'
                }}>
                  수준입니다.
                </Typography>
              </Box>
            </Box>
            
            {/* 결과 소견 */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              padding: '10px',
              width: '136px',
              height: '159px',
              backgroundColor: THEME.colors.tableGreen1,
              borderRadius: '10px'
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: THEME.typography.fontWeight.normal,
                fontSize: '8.2px',
                lineHeight: '1.46em',
                color: THEME.colors.text,
                textAlign: 'left',
                width: '100%'
              }}>
                {interpretation}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 이상적 지수 섹션 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 0px 10px'
      }}>
        {/* 이상적 지수 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          padding: '2px',
          width: '472px',
          height: '59px',
          backgroundColor: THEME.colors.mainWhite,
          border: `4px solid ${THEME.colors.primary}`,
          borderRadius: `${THEME.borderRadius.sm}px`,
          boxSizing: 'border-box'
        }}>
          {/* 이상적 양육지수 제목 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.bold,
            fontSize: `${THEME.typography.fontSize.md}px`,
            lineHeight: '1.5em',
            color: THEME.colors.text,
            textAlign: 'center',
            whiteSpace: 'pre-line'
          }}>
            이상적{'\n'}양육지수
          </Typography>
          
          {/* 설명 텍스트 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.semiBold,
            fontSize: `${THEME.typography.fontSize.xs}px`,
            lineHeight: '1.29em',
            color: THEME.colors.text,
            textAlign: 'left',
            whiteSpace: 'pre-line'
          }}>
            이상적 양육지수는 자녀 양육 시 부모가 지향해야 할{'\n'}바람직한 태도와 행동을 나타내는 지표입니다.{'\n'}이 지수가 높을수록  부모가 제공해야 할 적절한 양육 환경과{'\n'}상호작용이 잘 이루어지고있는 것입니다.
          </Typography>
          
          {/* 지수점수 및 백분위 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            boxSizing: 'border-box',
            width: '39px',
            height: '46px'
          }}>
            {/* 지수점수 */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'stretch',
              height: '20px'
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: THEME.typography.fontWeight.semiBold,
                fontSize: `${THEME.typography.fontSize.xs}px`,
                lineHeight: '1.19em',
                color: THEME.colors.text,
                textAlign: 'center',
                width: '100%',
                height: '10px'
              }}>
                지수점수
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                gap: '10px',
                backgroundColor: THEME.colors.tableGreen2,
                borderRadius: '41px',
                height: '10px'
              }}>
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: THEME.typography.fontWeight.semiBold,
                  fontSize: `${THEME.typography.fontSize.xxs}px`,
                  color: THEME.colors.text,
                  textAlign: 'center'
                }}>
                  {indexScore}
                </Typography>
              </Box>
            </Box>
            
            {/* 지수 백분위 */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'stretch'
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: THEME.typography.fontWeight.semiBold,
                fontSize: `${THEME.typography.fontSize.xs}px`,
                lineHeight: '1.19em',
                color: THEME.colors.text,
                textAlign: 'center',
                width: '100%',
                height: '10px'
              }}>
                백분위
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                gap: '10px',
                backgroundColor: THEME.colors.tableGreen2,
                borderRadius: '41px',
                height: '10px'
              }}>
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: THEME.typography.fontWeight.semiBold,
                  fontSize: `${THEME.typography.fontSize.xxs}px`,
                  color: THEME.colors.text,
                  textAlign: 'center'
                }}>
                  {percentile}
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* 종합지수 표 */}
          <CompositeIndexTable score={indexScore} />
        </Box>
      </Box>
    </Box>
  );
};