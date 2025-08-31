import { Box } from '@mui/material';

export const DetailSection = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '383px',
      backgroundColor: 'rgba(63, 200, 100, 0.3)',

    }}>
    
 {/* 섹션 제목 */}
 <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        gap: '4px',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        height: '20px'
      }}>
        {/* 섹션 제목 내용 */}
      </Box>

      {/* 상세  프로파일 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(32, 190, 53, 0.3)',
        height: '324px',
        boxSizing: 'border-box'
      }}>
        {/* 상세 프로파일 내용 */}
      </Box>
    </Box>
  );
};