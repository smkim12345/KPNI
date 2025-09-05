import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

/**
 * K-PNI 뒷면 제목 섹션 - 피그마 titlesection 1:1 구현
 */
export const BackTitleSection = () => {
  return (
    <Box sx={{
      width: '565px',
      height: '70px',
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
        height: '52px',
        width: 'auto',
        //backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}>
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.moyamoya,
          fontWeight: THEME.typography.fontWeight.extraBold,
          fontSize: '55px',
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
        padding: '0px 10px',
        width: '250px',
        height: '52px',
        //backgroundColor: 'rgba(255, 255, 255, 0.1)',
      }}>
        {/* 부모양육종합검사 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquare,
          fontWeight: THEME.typography.fontWeight.normal,
          fontSize: '29px',
          lineHeight: 1.4,
          textAlign: 'left',
          color: THEME.colors.white,
          letterSpacing: '0.01em', // 자간 늘림
          //backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}>
          부모양육종합검사
        </Typography>

        {/* 영문명 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: 300,
          fontSize: '8px',
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