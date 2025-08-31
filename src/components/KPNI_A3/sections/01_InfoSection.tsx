import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

export const InfoSection = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '155px',
      height: '787px'
    }}>
      {/* 메인 제목 */}
      <Box sx={{
        height: '114px',
        display: 'flex',
        flexDirection: 'column',
        gap: `${THEME.spacing.xs}px`
      }}>
        {/* 로고 이미지 */}
        <Box sx={{
          width: '80px',
          height: '19px',
          backgroundColor: THEME.colors.mainWhite,
          borderRadius: '4px',
          backgroundImage: 'url(/path/to/logo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        
        {/* K-PNI */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.moyamoya,
          fontWeight: 400,
          fontSize: `${THEME.typography.fontSize.huge}px`,
          lineHeight: THEME.typography.lineHeight.tight,
          color: THEME.colors.mainWhite,
        }}>
          K-PNI
        </Typography>
        
        {/* 부모양육종합검사 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: 300,
          fontSize: `${THEME.typography.fontSize.xl}px`,
          lineHeight: THEME.typography.lineHeight.normal,
          color: THEME.colors.mainWhite,
        }}>
          부모양육종합검사
        </Typography>
        
        {/* 영문명 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: 300,
          fontSize: `${THEME.typography.fontSize.xs}px`,
          lineHeight: THEME.typography.lineHeight.normal,
          color: THEME.colors.mainWhite,
          width: '114px',
        }}>
          comprehensive Parening{'\n'}& Nurturing Inventory
        </Typography>
      </Box>
      
      {/* 정보 기입 섹션 */}
      <Box sx={{
        height: '259px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* 정보 기입 내용 */}
      </Box>
      
      {/* 용어설명섹션 */}
      <Box sx={{
        height: '414px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '18px',
        padding: '0px 12px',
        borderRadius: '15px 0px 0px 15px',
        backgroundColor: THEME.colors.gray,
      }}>
        {/* 용어설명 내용 */}
      </Box>
    </Box>
  );
};