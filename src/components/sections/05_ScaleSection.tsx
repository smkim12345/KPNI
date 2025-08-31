import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';

export const ScaleSection = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '761px',
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
          sectionNumber={4}
          title="척도분석 종합"
          description="각 척도별 분석 결과를 종합적으로 보여줍니다."
        />
      </Box>

      {/* 척도분석 종합 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '9px',
        width: '473px',
        backgroundColor: 'rgba(100, 200, 255, 0.3)',
        height: '741px',
      }}>
        {/* 척도분석_자녀특성 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          backgroundColor: '#F9F0DA',
          borderRadius: '5px',
          minHeight: '140px'
        }}>
          {/* 자녀특성 내용 */}
        </Box>
        
        {/* 척도분석_양육태도 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          backgroundColor: '#E9F4FF',
          borderRadius: '5px',
          minHeight: '140px'
        }}>
          {/* 양육태도 내용 */}
        </Box>
        
        {/* 척도분석_양육환경 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          backgroundColor: '#DDF1F3',
          borderRadius: '5px',
          minHeight: '140px'
        }}>
          {/* 양육환경 내용 */}
        </Box>
        
        {/* 척도분석_양육스트레스 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          backgroundColor: '#EBE9F9',
          borderRadius: '5px',
          minHeight: '140px'
        }}>
          {/* 양육스트레스 내용 */}
        </Box>
        
        {/* 척도분석_양육과정 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'stretch',
          backgroundColor: '#FFF0F4',
          borderRadius: '5px',
          minHeight: '140px'
        }}>
          {/* 양육과정 내용 */}
        </Box>
      </Box>
    
    </Box>
  );
};