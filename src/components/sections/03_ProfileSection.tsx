import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';

export const ProfileSection = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '353px',
      backgroundColor: 'rgba(255, 100, 0, 0.3)',
    }}>
      
      {/* 섹션 제목 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        gap: '4px',
        height: '20px'
      }}>
        <SectionTitle 
          sectionNumber={2}
          title="종합 프로파일"
          description="검사 결과에 대한 전체적인 프로파일을 보여줍니다."
        />
      </Box>

      {/* 용어설명 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(243, 240, 78, 0.3)',
        height: '14px',
        padding: '0px 0px 7px 0px'
      }}>
        {/* 용어설명 내용 */}
      </Box>

      {/* 종합 프로파일 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        padding: '0px 0px 7px',
        backgroundColor: 'rgba(0, 150, 255, 0.3)',
        height: '250px',
        boxSizing: 'border-box'
      }}>
        {/* 종합 프로파일 내용 */}
      </Box>

      {/* 이상적 지수 섹션 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 0px 10px',
        backgroundColor: 'rgba(150, 0, 255, 0.3)',
        height: '69px'
      }}>
          {/* 이상적 지수 내용 */}
      </Box>
    </Box>
  );
};