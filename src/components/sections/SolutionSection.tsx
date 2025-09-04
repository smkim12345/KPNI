import { Box } from '@mui/material';
import { THEME } from '../theme';

/**
 * K-PNI 솔루션 섹션
 */
export const SolutionSection = () => {
  return (
    <Box sx={{
      width: '566px',
      height: '287px',
      backgroundColor: THEME.colors.scale.parentingEnvironment.light,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '10px',
      boxSizing: 'border-box'
    }}>
      {/* 내용은 나중에 추가 */}
    </Box>
  );
};