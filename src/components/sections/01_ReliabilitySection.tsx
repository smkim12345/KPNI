import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';

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
        height: '20px'
      }}>
        <SectionTitle 
          sectionNumber={1}
          title="결과신뢰지표"
          description="결과신뢰지표는 응답의 신뢰성을 평가하는 기준이며, 신뢰도가 낮을 경우 검사 결과의 정확성에도 영향을 줄 수 있습니다."
        />
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