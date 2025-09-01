import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import { ScaleResultSummary } from './ScaleResultChip';

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
      padding: '5px',
      backgroundColor,
      borderRadius: '5px',
      height: '140px'
    }}>
      {/* 척도 분석 상위척도 정보 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        width: '100%',
        minWidth: '252px'
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
          borderRadius: '30px',
          flexShrink: 0
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
          flexShrink: 0
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
        <Box sx={{ flexShrink: 1, minWidth: 0 }}>
          <ScaleResultSummary
            scaleResults={scaleResults}
            borderColor={borderColor}
          />
        </Box>
      </Box>
      
      {/* 척도 분석 척도 소견 종합 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: '7px',
        paddingTop: '5px'
      }}>
        {/* 척도 분석 하위척도 테이블 전체 */}
        <Box sx={{
          display: 'flex',
          width: '375px',
          height: '97px',
          backgroundColor: 'rgba(255, 100, 0, 0.3)' // 임시 테이블 배경색
        }}>
        </Box>
        
        {/* 척도 분석 종합소견 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100px',
          height: '97px',
          backgroundColor: THEME.colors.mainWhite,
          borderRadius: '7px',
          position: 'relative',
          boxSizing: 'border-box',
          paddingTop: '16px'
        }}>
          {/* 종합소견 텍스트 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: 300,
            fontSize: '7px',
            lineHeight: '1.71em',
            color: THEME.colors.text,
            textAlign: 'left',
            width: '80px',

          }}>
            {summary}
          </Typography>
          
          {/* 종합소견 프레임 (태그) */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '8px',
            height: '10px',
            backgroundColor: borderColor,
            borderRadius: '28px',
            position: 'absolute',
            top: '-13px',
            left: '20px'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: 700,
              fontSize: '11px',
              lineHeight: '1.09em',
              color: THEME.colors.mainWhite,
              textAlign: 'center'
            }}>
              종합 소견
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};