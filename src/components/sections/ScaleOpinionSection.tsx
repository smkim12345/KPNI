import { Box } from '@mui/material';
import { THEME } from '../theme';

/**
 * K-PNI 척도별 소견 확인 섹션
 */
export const ScaleOpinionSection = () => {
  return (
    <Box sx={{
      width: '566px',
      height: '500px',
      backgroundColor: THEME.colors.scale.parentingAttitude.light,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '10px',
      boxSizing: 'border-box'

    }}>
      {/* 내용은 나중에 추가 */}
    </Box>
  );
};