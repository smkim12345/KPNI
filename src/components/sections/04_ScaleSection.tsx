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
          tableBackgroundColor={THEME.colors.scale.childCharacter.secondary}
          borderColor={THEME.colors.scale.childCharacter.primary}
          summary="자녀가 양육자와의 애착관계가 잘 형성되지않았을 가능성이 있습니다. 부모의 요구나 정서적 반응에 적절하게 반응하기 힘들어 할 수 있습니다."
          iconSrc={icon01}
          scaleResults={{
            tScore: "55",
            percentile: "70.5",
            level: "다소 높음"
          }}
          subScaleData={[
            {
              name: "기질적 예민성",
              tScore: 62,
              percentile: "78.1",
              level: "다소 높음",
              interpretation: "기질적으로 다소 예민한 특성이 있습니다. 자녀가 정서적, 사회적 자극을 받았을 때 스트레스를 많이 경험하게 될 수 있습니다."
            },
            {
              name: "높은 요구수준",
              tScore: 73,
              percentile: "82.1",
              level: "높음",
              interpretation: "자녀는 일반적인 아동들에 비해 다소 높은 요구수준을 갖고 있습니다. 적절한 사랑과 관심을 받지 못할 경우에는 애착관계에 문제가 생길 수 있습니다."
            },
            {
              name: "사회적 적응력",
              tScore: 52,
              percentile: "68.1",
              level: "보통",
              interpretation: "자녀의 사회적인 적응 수준은 다소 낮은 편에 속합니다. 다양한 관계들에 있어서 적응을 어려워할 수 있습니다."
            },
            {
              name: "발달 수준",
              tScore: 43,
              percentile: "50.5",
              level: "다소 낮음",
              interpretation: "자녀의 발달 수준이 다소 낮습니다. 자녀가 또래 친구들에 비해 발달 속도가 늦어, 또래에 비해 부족한 면이 나타날 수 있습니다."
            },
            {
              name: "애착관계형성",
              tScore: 65,
              percentile: "83.2",
              level: "낮음",
              interpretation: "자녀가 양육자와의 애착관계가 잘 형성되지 않았을 가능성이 있습니다. 부모의 요구나 정서적 반응에 적절하게 반응하기 힘들어 할 수 있습니다."
            }
          ]}
        />
        
        {/* 척도분석_양육태도 */}
        <ScaleAnalysisCard
          title="양육 태도"
          iconColor={THEME.colors.scale.parentingAttitude.primary}
          backgroundColor={THEME.colors.scale.parentingAttitude.light}
          tableBackgroundColor={THEME.colors.scale.parentingAttitude.secondary}
          borderColor={THEME.colors.scale.parentingAttitude.primary}
          summary="자녀에게 일관된 양육 태도를 보이며, 긍정적인 상호작용을 통해 건강한 관계를 형성하고 있습니다. 자녀의 성장 발달을 지원하는 적절한 양육 방식을 사용합니다."
          iconSrc={icon02}
          iconSize="37px"
          scaleResults={{
            tScore: "48",
            percentile: "42.3",
            level: "보통"
          }}
          subScaleData={[
            {
              name: "민주적 태도",
              tScore: 52,
              percentile: "58.2",
              level: "보통",
              interpretation: "자녀의 의견을 존중하고 민주적인 방식으로 양육하려고 노력하고 있습니다. 자녀의 자율성과 책임감을 동시에 고려하는 균형 잡힌 태도를 보입니다."
            },
            {
              name: "통제적 태도",
              tScore: 45,
              percentile: "31.2",
              level: "보통",
              interpretation: "적절한 규칙과 한계를 설정하면서도 자녀의 자유를 존중하는 태도를 취하고 있습니다. 과도한 통제가 아닌 건설적인 지도를 추구합니다."
            },
            {
              name: "자율적 태도",
              tScore: 48,
              percentile: "42.1",
              level: "보통",
              interpretation: "자녀의 독립성과 자율성을 존중하면서도 필요한 때는 적절한 지원과 지도를 제공하는 태도를 보입니다."
            },
            {
              name: "일관성",
              tScore: 51,
              percentile: "53.7",
              level: "보통",
              interpretation: "양육 태도와 규칙이 비교적 일관되게 유지되고 있어 자녀가 예측 가능한 환경에서 성장할 수 있습니다."
            },
            {
              name: "지지도",
              tScore: 49,
              percentile: "46.5",
              level: "보통",
              interpretation: "자녀의 성장과 발달을 적극적으로 지원하는 태도를 보이고 있어 자녀의 자신감과 역량 개발에 긍정적인 영향을 미칩니다."
            }
          ]}
        />
        
        {/* 척도분석_양육환경 */}
        <ScaleAnalysisCard
          title="양육 환경"
          iconColor={THEME.colors.scale.parentingEnvironment.primary}
          backgroundColor={THEME.colors.scale.parentingEnvironment.light}
          tableBackgroundColor={THEME.colors.scale.parentingEnvironment.secondary}
          borderColor={THEME.colors.scale.parentingEnvironment.primary}
          summary="가정 내 물리적 환경과 정서적 분위기가 자녀 양육에 적합하게 조성되어 있습니다. 안전하고 안정적인 환경에서 자녀가 건강하게 성장할 수 있습니다."
          iconSrc={icon03}
          iconSize="40px"
          scaleResults={{
            tScore: "52",
            percentile: "58.7",
            level: "보통"
          }}
          subScaleData={[
            {
              name: "물리적 환경",
              tScore: 54,
              percentile: "66.8",
              level: "보통",
              interpretation: "가정 내 물리적 환경이 자녀 양육에 적합하게 구성되어 있어 안전하고 편안한 생활 공간을 제공하고 있습니다."
            },
            {
              name: "정서적 분위기",
              tScore: 51,
              percentile: "53.9",
              level: "보통",
              interpretation: "가정 내 정서적 분위기가 안정적이고 긍정적이어서 자녀가 심리적으로 안전감을 느낄 수 있는 환경을 조성하고 있습니다."
            },
            {
              name: "학습 환경",
              tScore: 53,
              percentile: "62.1",
              level: "보통",
              interpretation: "자녀의 학습과 발달을 지원하는 적절한 환경과 자원이 제공되고 있어 자녀의 성장에 긍정적인 영향을 미칩니다."
            },
            {
              name: "사회적 환경",
              tScore: 50,
              percentile: "50.0",
              level: "보통",
              interpretation: "가정 외부의 사회적 네트워크와 지원 시스템이 적절하게 구축되어 있어 자녀의 사회적 발달을 지원하고 있습니다."
            },
            {
              name: "안전성",
              tScore: 52,
              percentile: "58.2",
              level: "보통",
              interpretation: "가정 환경이 신체적, 정서적 안전을 충분히 제공하고 있어 자녀가 안심하고 성장할 수 있는 기반이 마련되어 있습니다."
            }
          ]}
        />
        
        {/* 척도분석_양육스트레스 */}
        <ScaleAnalysisCard
          title="양육 스트레스"
          iconColor={THEME.colors.scale.parentingStress.primary}
          backgroundColor={THEME.colors.scale.parentingStress.light}
          tableBackgroundColor={THEME.colors.scale.parentingStress.secondary}
          borderColor={THEME.colors.scale.parentingStress.primary}
          summary="양육 과정에서 경험하는 스트레스가 다소 높은 수준입니다. 자녀 양육에 대한 부담감이나 어려움을 느끼고 있어 적절한 지원과 관리가 필요합니다."
          iconSrc={icon04}
          iconSize="30px"
          scaleResults={{
            tScore: "62",
            percentile: "84.2",
            level: "높음"
          }}
          subScaleData={[
            {
              name: "시간적 스트레스",
              tScore: 65,
              percentile: "87.3",
              level: "높음",
              interpretation: "자녀 양육에 필요한 시간과 에너지가 부족하여 시간적 압박을 많이 받고 있습니다. 일과 양육의 균형을 맞추는 것이 어려운 상황입니다."
            },
            {
              name: "정서적 스트레스",
              tScore: 63,
              percentile: "85.7",
              level: "높음",
              interpretation: "양육 과정에서 정서적 부담감이 높아 감정적으로 지쳐있는 상태입니다. 스트레스 관리를 위한 정서적 지원이 필요합니다."
            },
            {
              name: "경제적 스트레스",
              tScore: 58,
              percentile: "79.1",
              level: "다소 높음",
              interpretation: "자녀 양육에 필요한 경제적 부담이 스트레스의 주요 원인으로 작용하고 있습니다. 경제적 안정을 위한 지원 방안이 필요합니다."
            },
            {
              name: "자녀 행동 스트레스",
              tScore: 61,
              percentile: "83.4",
              level: "높음",
              interpretation: "자녀의 행동이나 발달상의 어려움으로 인해 양육 스트레스가 높아져 있습니다. 전문적인 상담과 지원이 도움이 될 수 있습니다."
            },
            {
              name: "사회적 고립",
              tScore: 59,
              percentile: "81.2",
              level: "높음",
              interpretation: "양육 과정에서 사회적 지지나 네트워크가 부족하여 고립감을 느끼고 있습니다. 사회적 지원 체계를 구축하는 것이 중요합니다."
            }
          ]}
        />
        
        {/* 척도분석_양육과정 */}
        <ScaleAnalysisCard
          title="양육 과정"
          iconColor={THEME.colors.scale.parentingProcess.primary}
          backgroundColor={THEME.colors.scale.parentingProcess.light}
          tableBackgroundColor={THEME.colors.scale.parentingProcess.secondary}
          borderColor={THEME.colors.scale.parentingProcess.primary}
          summary="자녀와의 상호작용과 소통이 원활하며, 양육 과정에서 적절한 방법을 사용하고 있습니다. 자녀의 발달 단계에 맞는 양육을 실천하고 있습니다."
          iconSrc={icon05}
          iconSize="20px"
          scaleResults={{
            tScore: "46",
            percentile: "35.8",
            level: "보통"
          }}
          subScaleData={[
            {
              name: "의사소통",
              tScore: 48,
              percentile: "42.1",
              level: "보통",
              interpretation: "자녀와의 의사소통이 원활하게 이루어지고 있어 자녀의 생각과 감정을 잘 이해하고 적절한 반응을 보이고 있습니다."
            },
            {
              name: "규칙 설정",
              tScore: 45,
              percentile: "31.2",
              level: "보통",
              interpretation: "적절한 가정 규칙을 설정하고 일관되게 유지하려고 노력하고 있어 자녀가 예측 가능한 환경에서 성장할 수 있습니다."
            },
            {
              name: "훈육 방법",
              tScore: 47,
              percentile: "38.2",
              level: "보통",
              interpretation: "자녀의 발달 단계에 맞는 적절한 훈육 방법을 사용하고 있어 자녀의 사회성과 윤리의식을 효과적으로 기를 수 있습니다."
            },
            {
              name: "감정 조절",
              tScore: 44,
              percentile: "28.1",
              level: "보통",
              interpretation: "양육 과정에서 자신의 감정을 적절히 조절하고 안정적인 태도를 유지하려고 노력하고 있어 자녀에게 긍정적인 모델링을 제공합니다."
            },
            {
              name: "지지적 태도",
              tScore: 46,
              percentile: "35.8",
              level: "보통",
              interpretation: "자녀의 성장과 발달을 적극적으로 지원하는 태도를 보이고 있어 자녀의 자신감과 역량 개발에 긍정적인 영향을 미칩니다."
            }
          ]}
        />
      </Box>
    
    </Box>
  );
};