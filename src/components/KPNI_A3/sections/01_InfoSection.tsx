import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import { InputField } from '../components/common/InputField';

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
          borderRadius: `${THEME.borderRadius.xs}px`,
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
        {/* 정보 기입란 */}
        <Box sx={{
          width: '133px',
          backgroundColor: THEME.colors.white,
          borderRadius: `${THEME.borderRadius.sm}px`,
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          gap: '2px'
        }}>
          <InputField label="양육자명" value="김성민" />
          <InputField label="양육자 생년월일" value="1995.12.14" />
          <InputField label="자녀와의 관계" value="아들" />
          <InputField label="양육구분" value="양육구분" />
          <InputField label="자녀이름" value="김성근" />
          <InputField label="자녀성별" value="남성" />
          <InputField label="자녀연령" value="12세" />
          <InputField label="검사 실시일" value="2025.08.26" />
        </Box>
      </Box>
      
      {/* 용어설명섹션 */}
      <Box sx={{
        height: '414px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* 용어설명 내용 */}
      </Box>
    </Box>
  );
};