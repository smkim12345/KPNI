import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

/**
 * K-PNI 뒷면 제목 섹션 - 피그마 titlesection 1:1 구현
 */
export const BackTitleSection = () => {
  return (
    <Box sx={{
      width: '763.9px',
      height: '94.6px',
      //backgroundColor: 'rgba(241, 22, 245,0.4)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      boxSizing: 'border-box'
    }}>
      {/* K-PNI 메인 타이틀 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '70.3px',
        width: 'auto',
        //backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}>
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.pretendard,
          fontWeight: THEME.typography.fontWeight.extraBold,
          fontSize: '80.4px',
          lineHeight: 1,
          textAlign: 'top',
          color: THEME.colors.white,
          //backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}>
          K-PNI
        </Typography>
      </Box>

      {/* 검사명 소제목 섹션 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0px 13.5px',
        width: '338.0px',
        height: '70.3px',
        //backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}>
        {/* 부모양육종합검사 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquare,
          fontWeight: THEME.typography.fontWeight.extraBold, // Pretendard ExtraBold 적용
          fontSize: '39.2px',
          lineHeight: 1.2,
          textAlign: 'left',
          color: THEME.colors.white,
          letterSpacing: '0.02em', // 자간 늘림
          //backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}>
          부모양육종합검사
        </Typography>

        {/* 영문명 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: 300,
          fontSize: '10.8px',
          lineHeight: 1.268,
          textAlign: 'left',
          color: THEME.colors.mainWhite,
        }}>
          Comprehensive Parenting & Nurturing Inventory
        </Typography>
      </Box>
    </Box>
  );
};