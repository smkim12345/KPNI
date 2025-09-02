import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';
import { ScaleAnalysisCard } from '../UI/04_ScaleAnalysisCard';
import icon01 from '../../images/01Icon.png';
import icon02 from '../../images/02Icon.png';
import icon03 from '../../images/03Icon.png';
import icon04 from '../../images/04Icon.png';
import icon05 from '../../images/05Icon.png';
import { SCALE_DATA } from '../../data/scaleData';

export const ScaleSection = () => {
  const icons = [icon01, icon02, icon03, icon04, icon05];
  const iconSizes = ['30px', '37px', '40px', '30px', '20px'];

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
        gap: '5px',
        width: '473px',
        height: '741px',
      }}>
        {SCALE_DATA.map((scale, index) => (
          <ScaleAnalysisCard
            key={scale.id}
            title={scale.title}
            iconColor={scale.colors.primary}
            backgroundColor={scale.colors.light}
            tableBackgroundColor={scale.colors.secondary}
            borderColor={scale.colors.primary}
            summary={scale.summary}
            iconSrc={icons[index]}
            iconSize={iconSizes[index]}
            scaleResults={scale.scaleResults}
            subScaleData={scale.subScaleData}
          />
        ))}
      </Box>
    
    </Box>
  );
};