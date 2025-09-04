import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

/**
 * K-PNI A3 결과지 뒷면 페이지
 */
export const BackPage = () => {
  return (
    <Box sx={{
      position: 'absolute',
      left: '30px',
      top: '30px',
      width: '1131px',  // 전체 너비 사용 (1191 - 30*2)
      height: '787px',   // 전체 높이 사용
      display: 'flex',
      flexDirection: 'column',
      zIndex: 3,
    }}>
      
      <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: `${THEME.borderRadius.lg}px`,
        padding: `${THEME.spacing.xl}px`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: `3px solid ${THEME.colors.primary}`,
      }}>
        
       
      </Box>
    </Box>
  );
};