import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

interface SectionTitleBoxProps {
  title: string;
}

/**
 * K-PNI 섹션 공통 제목 컴포넌트
 * B01~B03 섹션에서 사용하는 동일한 스타일의 제목 박스
 */
export const SectionTitleBox = ({ title }: SectionTitleBoxProps) => {
  return (
    <Box sx={{
      backgroundColor: THEME.colors.primaryDark,
      borderRadius: '0px 30px 30px 0px',
      padding: '0px 10px 0px 5px',
      height: '19px',
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
    }}>
      <Typography sx={{
        fontFamily: THEME.typography.fontFamily.ohsquare,
        fontWeight: THEME.typography.fontWeight.normal,
        fontSize: `${THEME.typography.fontSize.lg}px`,
        lineHeight: 1.5,
        color: THEME.colors.mainWhite,
      }}>
        {title}
      </Typography>
    </Box>
  );
};