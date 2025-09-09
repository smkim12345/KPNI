import { Box } from '@mui/material';
import { SectionTitle } from '../UI/F_SectionTitle';
import { ScaleAnalysisCard } from '../UI/04_ScaleAnalysisCard';
import icon01 from '../../images/01Icon.png';
import icon02 from '../../images/02Icon.png';
import icon03 from '../../images/03Icon.png';
import icon04 from '../../images/04Icon.png';
import icon05 from '../../images/05Icon.png';
import { SCALE_DATA } from '../../data/mockData';
import { getScaleColorsByName } from '../../utils/scaleUtils';
import type { ScaleSectionProps } from '../../dtos/ResultTypes';

export const ScaleSection = ({ parentScales }: ScaleSectionProps) => {
  const icons = [icon01, icon02, icon03, icon04, icon05];
  const iconSizes = ['27.0px', '27.0px', '27.0px', '27.0px', '27.0px'];

  // GST 방식: parentScales 있으면 동적 데이터, 없으면 더미 데이터 사용
  const scaleData = parentScales && parentScales.length > 0
    ? parentScales.map((parentScale) => ({
        id: parentScale.id,
        title: parentScale.name,
        categoryName: parentScale.name,
        colors: getScaleColorsByName(parentScale.name), // 공통 유틸 함수 사용
        summary: `${parentScale.name} 분석 결과`, // 기본 요약
        scaleResults: {
          tScore: parentScale.score.toString(),
          percentile: parentScale.percentile.toString(),
          level: parentScale.level
        },
        subScaleData: parentScale.subScales?.map(sub => ({
          name: sub.name,
          tScore: sub.score,
          percentile: sub.percentile.toString(),
          level: sub.level,
          interpretation: sub.interpretation || ''
        })) || []
      }))
    : SCALE_DATA;

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '1029.1px',
    }}>
      {/* 섹션 제목 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        gap: '5.4px',
        height: '27.0px'
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
        gap: '8.4px',
        width: '639.5px',
        height: '1002.1px',
      }}>
        {scaleData.map((scale, index) => (
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