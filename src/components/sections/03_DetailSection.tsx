import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';

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
        height: '20px'
      }}>
        <SectionTitle 
          sectionNumber={3}
          title="상세 프로파일"
          description="각 상위척도별 하위척도에 대한 상세한 결과를 보여줍니다. "
        />
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