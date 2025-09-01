import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import { ScaleResultChip } from './ScaleResultChip';

interface ScaleResultData {
  tScore: string;
  percentile: string;
  level: string;
}

interface ScaleAnalysisCardProps {
  title: string;
  iconColor: string;
  backgroundColor: string;
  borderColor: string;
  summary: string;
  iconSrc: string;
  scaleResults: ScaleResultData; // 상위척도 결과 요약 데이터
}

export const ScaleAnalysisCard = ({
  title,
  iconColor,
  backgroundColor,
  borderColor,
  summary,
  iconSrc,
  scaleResults
}: ScaleAnalysisCardProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      gap: '1px',
      padding: '5px',
      backgroundColor,
      borderRadius: '5px'
    }}>
      {/* 척도 분석 상위척도 정보 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        width: '252px'
      }}>
        {/* 아이콘 */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '3px',
          width: '28px',
          height: '28px',
          backgroundColor: iconColor,
          borderRadius: '30px'
        }}>
          <Box
            component="img"
            src={iconSrc}
            alt={`${title} 아이콘`}
            sx={{
              width: '30px',
              height: '30px',
              objectFit: 'contain'
            }}
          />
        </Box>
        
        {/* 제목 */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.bold,
            fontSize: '12px',
            lineHeight: '1em',
            color: THEME.colors.text,
            textAlign: 'left'
          }}>
            {title}
          </Typography>
        </Box>
        
        {/* 상위척도 결과 요약 */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          width: '156px',
        }}>
          {/* T점수 칩 */}
          <ScaleResultChip
            label="T점수"
            value={scaleResults.tScore}
          />

          {/* 백분위 칩 */}
          <ScaleResultChip
            label="백분위"
            value={scaleResults.percentile}
          />

          {/* 수준 칩 (더 큰 크기) */}
          <ScaleResultChip
            label="수준"
            value={scaleResults.level}
            isLarge={true}
          />
        </Box>
      </Box>
      
      {/* 척도 분석 척도 소견 종합 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        gap: '7px'
      }}>
        {/* 척도 분석 하위척도 테이블 전체 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '375px',
          backgroundColor: 'rgba(255, 100, 0, 0.3)' // 임시 테이블 배경색
        }}>
          {/* 척도 분석 하위척도 테이블 헤더 */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: '375px',
            height: '12px'
          }} />
          
          {/* 척도 분석 하위척도 테이블 */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'stretch'
          }} />
        </Box>
        
        {/* 척도 분석 종합소견 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '10px',
          padding: '10px',
          width: '80px',
          height: '102px',
          backgroundColor: THEME.colors.mainWhite,
          position: 'relative'
        }}>
          {/* 종합소견 텍스트 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.light,
            fontSize: `${THEME.typography.fontSize.xs}px`,
            lineHeight: '1.71em',
            color: THEME.colors.text,
            textAlign: 'left',
            width: '70px'
          }}>
            {summary}
          </Typography>
          
          {/* 종합소견 프레임 (태그) */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            height: '20px',
            backgroundColor: borderColor,
            border: `1px solid ${borderColor}`,
            borderRadius: '28px',
            position: 'absolute',
            top: '-10px',
            left: '9px'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              fontSize: `${THEME.typography.fontSize.xxs}px`,
              color: THEME.colors.text,
              textAlign: 'center'
            }}>
              종합소견
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};