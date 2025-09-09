import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

interface SubSectionTitleProps {
  title: string;
}

/**
 * K-PNI 부섹션 제목 컴포넌트
 * B02~B03 섹션에서 사용하는 녹색 텍스트 부제목
 */
export const SubSectionTitle = ({ title }: SubSectionTitleProps) => {
  return (
    <Box>
      <Typography sx={{
        fontFamily: THEME.typography.fontFamily.ohsquare,
        fontWeight: THEME.typography.fontWeight.normal,
        fontSize: '14.9px',
        lineHeight: '1.11em',
        color: '#274E13',
        alignSelf: 'stretch',
        textAlign: 'left',
        //backgroundColor: 'red',
      }}>
        {title}
      </Typography>
    </Box>
  );
};