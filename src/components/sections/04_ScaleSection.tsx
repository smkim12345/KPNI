import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';
import { ScaleAnalysisCard } from '../UI/ScaleAnalysisCard';
import icon01 from '../../images/01Icon.png';
import icon02 from '../../images/02Icon.png';
import icon03 from '../../images/03Icon.png';
import icon04 from '../../images/04Icon.png';
import icon05 from '../../images/05Icon.png';
import { THEME } from '../theme';

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
        gap: '5px',
        width: '473px',
        //backgroundColor: 'rgba(100, 200, 255, 0.3)',
        height: '741px',
      }}>
        {/* 척도분석_자녀특성 */}
        <ScaleAnalysisCard
          title="자녀 특성"
          iconColor={THEME.colors.scale.childCharacter.primary}
          backgroundColor={THEME.colors.scale.childCharacter.light}
          borderColor={THEME.colors.scale.childCharacter.primary}
          summary="자녀가 양육자와의 애착관계가 잘 형성되지않았을 가능성이 있습니다. 부모의 요구나 정서적 반응에 적절하게 반응하기 힘들어 할 수 있습니다."
          iconSrc={icon01}
          scaleResults={{
            tScore: "55",
            percentile: "70.5",
            level: "다소 높음"
          }}
        />
        
        {/* 척도분석_양육태도 */}
        <ScaleAnalysisCard
          title="양육 태도"
          iconColor={THEME.colors.scale.parentingAttitude.primary}
          backgroundColor={THEME.colors.scale.parentingAttitude.light}
          borderColor={THEME.colors.scale.parentingAttitude.primary}
          summary="자녀에게 일관된 양육 태도를 보이며, 긍정적인 상호작용을 통해 건강한 관계를 형성하고 있습니다. 자녀의 성장 발달을 지원하는 적절한 양육 방식을 사용합니다."
          iconSrc={icon02}
          iconSize="37px"
          scaleResults={{
            tScore: "48",
            percentile: "42.3",
            level: "보통"
          }}
        />
        
        {/* 척도분석_양육환경 */}
        <ScaleAnalysisCard
          title="양육 환경"
          iconColor={THEME.colors.scale.parentingEnvironment.primary}
          backgroundColor={THEME.colors.scale.parentingEnvironment.light}
          borderColor={THEME.colors.scale.parentingEnvironment.primary}
          summary="가정 내 물리적 환경과 정서적 분위기가 자녀 양육에 적합하게 조성되어 있습니다. 안전하고 안정적인 환경에서 자녀가 건강하게 성장할 수 있습니다."
          iconSrc={icon03}
          iconSize="40px"
          scaleResults={{
            tScore: "52",
            percentile: "58.7",
            level: "보통"
          }}
        />
        
        {/* 척도분석_양육스트레스 */}
        <ScaleAnalysisCard
          title="양육 스트레스"
          iconColor={THEME.colors.scale.parentingStress.primary}
          backgroundColor={THEME.colors.scale.parentingStress.light}
          borderColor={THEME.colors.scale.parentingStress.primary}
          summary="양육 과정에서 경험하는 스트레스가 다소 높은 수준입니다. 자녀 양육에 대한 부담감이나 어려움을 느끼고 있어 적절한 지원과 관리가 필요합니다."
          iconSrc={icon04}
          iconSize="30px"
          scaleResults={{
            tScore: "62",
            percentile: "84.2",
            level: "높음"
          }}
        />
        
        {/* 척도분석_양육과정 */}
        <ScaleAnalysisCard
          title="양육 과정"
          iconColor={THEME.colors.scale.parentingProcess.primary}
          backgroundColor={THEME.colors.scale.parentingProcess.light}
          borderColor={THEME.colors.scale.parentingProcess.primary}
          summary="자녀와의 상호작용과 소통이 원활하며, 양육 과정에서 적절한 방법을 사용하고 있습니다. 자녀의 발달 단계에 맞는 양육을 실천하고 있습니다."
          iconSrc={icon05}
          iconSize="20px"
          scaleResults={{
            tScore: "46",
            percentile: "35.8",
            level: "보통"
          }}
        />
      </Box>
    
    </Box>
  );
};