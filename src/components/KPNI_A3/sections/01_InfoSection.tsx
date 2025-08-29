import { Box } from '@mui/material';

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
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '3px'
      }}>
        {/* 메인 제목 내용 */}
      </Box>
      
      {/* 정보 기입 섹션 */}
      <Box sx={{
        height: '259px',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* 정보 기입 내용 */}
      </Box>
      
      {/* 용어설명섹션 */}
      <Box sx={{
        height: '414px',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '18px',
        padding: '0px 12px',
        borderRadius: '15px 0px 0px 15px'
      }}>
        {/* 용어설명 내용 */}
      </Box>
    </Box>
  );
};