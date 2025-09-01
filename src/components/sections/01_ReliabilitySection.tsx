import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';
import { ReliabilityTable } from '../UI/01_ReliabilityTable';

export const ReliabilitySection = () => {
  // 결과신뢰지표 데이터
  const reliabilityData = {
    level: "높음",
    description: "검사에 성실히 임하였으므로, 신뢰할 수 있는 결과 해석이 가능합니다.",
    items: [
      { name: "무응답", value: "0" },
      { name: "연속동일반응", value: "아니오" },
      { name: "반응일관성", value: "양호" },
      { name: "부주의성", value: "아니오" }
    ]
  };

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
      <ReliabilityTable data={reliabilityData} />
    </Box>
  );
};