import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

// --- 타입 정의 ---
interface TextItem {
  text: string;
  /** 'semiBold'가 기본값입니다. */
  fontWeight?: 'semiBold' | 'normal';
}

interface SectionDescriptionProps {
  /** 표시할 텍스트 조각들의 배열입니다. */
  items: TextItem[];
  textAlign?: 'left' | 'center';
  fontSize?: string;
  width?: string;
  height?: string;
  paddingBottom?: string;
}

// --- 헬퍼 함수 ---
const getFontWeight = (weight: TextItem['fontWeight']) => {
  return weight === 'normal'
    ? THEME.typography.fontWeight.light
    : THEME.typography.fontWeight.semiBold;
};

// --- 컴포넌트 ---
export const SectionDescription = ({
  items,
  textAlign = 'left',
  fontSize = '9.5px',
  width = '638.1px',
  height = '18.9px',

}: SectionDescriptionProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width,
        height,
        //backgroundColor: 'rgba(255, 100, 0, 0.3)',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize,
          fontFamily: THEME.typography.fontFamily.pretendard,
          lineHeight: '1.2em',
          textAlign,
          color: THEME.colors.text,
          width: '100%',
          height: 'auto',
        }}
      >
        {items.map((item, index) => (
          <span key={index} style={{ fontWeight: getFontWeight(item.fontWeight) }}>
            {item.text}
          </span>
        ))}
      </Typography>
    </Box>
  );
};
