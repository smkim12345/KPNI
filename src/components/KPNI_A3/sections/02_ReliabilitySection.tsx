import { Box } from '@mui/material';

export const ReliabilitySection = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      padding: '0px 0px 10px',
      width: '100%',
      height: '71px'
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
      
      {/* 결과신뢰지표 테이블 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: 'rgba(0, 255, 0, 0.3)',
        height: '41px'
      }}>
        {/* 테이블 내용 */}
      </Box>
    </Box>
  );
};