import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

interface SectionTitleProps {
  sectionNumber: number;
  title: string;
  description: string;
}

export const SectionTitle = ({ sectionNumber, title, description }: SectionTitleProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '4px',
      width: '467px',
      height: '16px',
      //backgroundColor: 'rgba(255, 100, 0, 0.3)'
    }}>
      {/* 둥근 사각형 번호 아이콘 */}
      <Box sx={{
        width: '15px',
        height: '13.85px',
        backgroundColor: '#274E13',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquare,
          fontWeight: 700,
          fontSize: '8px',
          color: THEME.colors.white,
          lineHeight: 1
        }}>
          {sectionNumber}
        </Typography>
      </Box>

      {/* 제목 텍스트 */}
      <Typography sx={{
        fontFamily: THEME.typography.fontFamily.ohsquare,
        fontWeight: THEME.typography.fontWeight.light,
        fontSize: `${THEME.typography.fontSize.xl}px`,
        lineHeight: THEME.typography.lineHeight.normal,
        color: THEME.colors.text,
        textShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px',
        flexShrink: 0
      }}>
        {title}
      </Typography>

      {/* 설명 텍스트 */}
      <Typography sx={{
        fontFamily: THEME.typography.fontFamily.pretendard,
        fontWeight: 400,
        fontSize: '7px',
        lineHeight: '1.2em',
        color: THEME.colors.text,
        flex: 1,
        whiteSpace: 'pre-line'
      }}>
        {description}
      </Typography>
    </Box>
  );
};