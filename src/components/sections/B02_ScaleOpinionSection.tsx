import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import { SubSectionTitle } from '../UI/B_SubSectionTitle';

/**
 * K-PNI 척도별 소견 확인 섹션
 */

// 척도별 데이터 구조 (앞면 데이터 참고하여 실제 하위척도로 수정)
const SCALE_DATA = [
  {
    title: '자녀\n특성',
    bgColor: THEME.colors.scale.childCharacter.primary,
    brightColor: THEME.colors.scale.childCharacter.secondary,
    subScales: [
      { name: '기질적 예민성', description: '자녀가 감각적·정서적 자극에 얼마나 민감하게 반응하는지 (감각 민감성, 정서적 반응성, 환경 변화에 대한 적응성)' },
      { name: '높은 요구수준', description: '자녀가 부모에게 정서적·신체적·인지적으로 요구하는 정도 (부모 의존도, 돌봄 필요성, 지속적인 관심 요구)' },
      { name: '사회적 적응력', description: '자녀가 또래, 교사 등 사회적 관계에서 얼마나 잘 적응하는지 측정하는 척도 (또래관계형성, 사회적 기술, 공감능력)' },
      { name: '발달 수준', description: '자녀의 연령에 따른 인지·정서·신체적 발달 정도 (언어발달, 문제해결능력, 정서조절능력)' },
      { name: '애착관계형성', description: '주 양육자(부모)와의 정서적 유대감 및 신뢰 수준 (안정 애착, 불안 애착, 부모 의존도)' }
    ]
  },
  {
    title: '양육\n태도',
    bgColor: THEME.colors.scale.parentingAttitude.primary,
    brightColor: THEME.colors.scale.parentingAttitude.secondary,
    subScales: [
      { name: '애정표현', description: '부모가 자녀에게 애정을 표현하는 방식과 빈도 (스킨십, 칭찬, 격려, 정서적 교감 등)' },
      { name: '합리적 설명', description: '자녀에게 행동의 이유와 규칙을 논리적으로 설명하는 정도 (논리적 대화, 원인-결과 설명)' },
      { name: '일관적 태도', description: '부모가 자녀에게 일관된 규칙과 기대를 제공하는 정도 (규칙유지, 보상-처벌의 일관성)' },
      { name: '훈육 방식', description: '자녀의 행동을 지도하는 방식(긍정적/부정적 훈육 포함) (설명적 훈육, 강화, 처벌 등)' },
      { name: '자율성 존중', description: '부모가 자녀의 독립성과 선택을 존중하는 정도 (자기결정권, 독립성 장려, 자율적 의사결정)' }
    ]
  },
  {
    title: '양육\n환경',
    bgColor: THEME.colors.scale.parentingEnvironment.primary,
    brightColor: THEME.colors.scale.parentingEnvironment.secondary,
    subScales: [
      { name: '부부간 불화', description: '부모 간의 관계에서 발생하는 갈등과 스트레스가 가정환경에 미치는 영향 (부부갈등, 언쟁, 감정적 거리)' },
      { name: '사회적 지원 부족', description: '부모가 양육을 하는 데 있어 외부로부터 지원을 받지 못하는 정도 (배우자 도움 및 가족,친구 지원 부족, 경제적 어려움)' },
      { name: '방임/무시', description: '부모가 자녀의 기본적인 필요(신체적·정서적)를 충분히 충족하지 못하는 정도 (기본 욕구 충족 부족, 정서적 단절)' },
      { name: '신체적 학대', description: '부모가 자녀에게 신체적으로 해를 가하는 정도 (체벌, 폭력, 신체적 위협)' },
      { name: '정서적 학대', description: '부모가 자녀에게 언어나 정서적으로 상처를 주는 정도 (언어폭력, 정서적 위협, 무시)' }
    ]
  },
  {
    title: '양육\n스트레스',
    bgColor: THEME.colors.scale.parentingStress.primary,
    brightColor: THEME.colors.scale.parentingStress.secondary,
    subScales: [
      { name: '역할갈등', description: '부모가 양육 외의 다른 역할(직장인, 배우자, 개인 등)과의 충돌로 인해 스트레스를 느끼는 정도' },
      { name: '양육방식차이', description: '부모가 자녀를 양육하는 과정에서 배우자와의 양육 방식이 다르거나 충돌할 때 경험하는 갈등과 스트레스' },
      { name: '경제적 고민', description: '부모가 자녀 양육과 관련된 재정적 부담을 크게 느끼는 정도' },
      { name: '자녀갈등', description: '부모와 자녀 사이에서 발생하는 의견 충돌, 기대 차이, 정서적 거리감 등을 포함하는 갈등의 정도' },
      { name: '심리적 불안정', description: '부모가 양육 과정에서 경험하는 심리적 소진 및 정서적 고통의 정도' }
    ]
  },
  {
    title: '양육\n과정',
    bgColor: THEME.colors.scale.parentingProcess.primary,
    brightColor: THEME.colors.scale.parentingProcess.secondary,
    subScales: [
      { name: '양육만족', description: '부모가 자신의 양육 과정에서 느끼는 전반적인 만족감과 보람의 정도' },
      { name: '현가족관계', description: '부모가 현재 배우자 및 자녀와 경험하는 정서적 유대감과 관계의 질' },
      { name: '원가족관계', description: '부모가 자신의 원가족(부모, 형제자매)과 맺고 있는 관계가 현재 양육에 미치는 영향' },
      { name: '자녀만족', description: '자녀가 부모의 양육 방식에 대해 느끼는 만족도와 정서적 반응' },
      { name: '회복경험', description: '부모가 양육 과정에서 스트레스를 해소하고 심리적 균형을 회복하는 정도' }
    ]
  }
];

export const ScaleOpinionSection = () => {
  return (
    <Box sx={{
      width: '765.2px',
      height: '676.0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '13.5px',
      boxSizing: 'border-box',
      //backgroundColor: 'red',
      gap: '10.8px'
    }}>
      {/* 섹션 제목 */}
      <SubSectionTitle title="4. 척도별 소견 확인" />

      {/* 설명 텍스트 */}
      <Box sx={{
        display: 'flex',
        alignSelf: 'stretch',
        padding: '0 13.5px',
        width: '698.8px',
      }}>
        <Typography sx={{
          ...THEME.B_SECTION_DESCRIPTION,
          flex: 1,
        }}>
          PNI 부모양육종합검사의 다섯 가지 상위척도(자녀특성, 양육태도, 양육환경, 양육스트레스, 양육과정)에 대한 척도별 정의를 확인하실 수 있습니다. 각 척도별 결과는 단순한 점수 비교가 아닌, 부모님의 현재 양육 경험과 감정 상태, 관계 패턴을 깊이 이해하는 데 목적이 있습니다. 점수가 높다고 반드시 '좋다'거나 낮다고 '문제가 있다'는 의미는 아닙니다. 모든 결과는 현재의 일시적인 단면으로, 앞으로의 변화 가능성과 회복력을 고려하여 해석해주시기 바랍니다.
        </Typography>
      </Box>

      {/* 척도별 블록들 */}
      {SCALE_DATA.map((scale, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '763.9px',
            height: '109.5px',
            padding: '0 13.5px',
            boxSizing: 'border-box'
          }}
        >
          {/* 상위척도 이름 박스 */}
          <Box sx={{
            width: '54.1px',
            height: '108.0px',
            backgroundColor: scale.bgColor,
            borderRadius: `${THEME.borderRadius.xs}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 12.2px',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.ohsquare,
              fontWeight: THEME.typography.fontWeight.extraBold, // Pretendard ExtraBold 적용
              fontSize: `${THEME.typography.fontSize.md}px`,
              lineHeight: THEME.typography.lineHeight.normal,
              color: '#FBFBFB',
              textAlign: 'center',
              whiteSpace: 'pre-line'
            }}>
              {scale.title}
            </Typography>
          </Box>

          {/* 하위척도 목록 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '90.6px',
            height: '108.0px',
            padding: '0 0 0 6.8px',
            gap: '2.7px',
            //backgroundColor: 'red' //영역 확인용
          }}>
            {scale.subScales.map((subScale, subIndex) => (
              <Box
                key={subIndex}
                sx={{
                  width: '90.6px',
                  height: '18px',
                  backgroundColor: scale.brightColor,
                  borderRadius: `${THEME.borderRadius.xs}px 0 0 ${THEME.borderRadius.xs}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box'
                }}
              >
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: 700,
                  fontSize: `${THEME.typography.fontSize.sm}px`,
                  lineHeight: THEME.typography.lineHeight.normal,
                  color: '#FBFBFB',
                  textAlign: 'center'
                }}>
                  {subScale.name}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 하위척도 설명들 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '544.9px',
            height: '108.0px',
            gap: '4.1px',
          }}>
            {scale.subScales.map((subScale, subIndex) => (
              <Box
                key={subIndex}
                sx={{
                  width: '531.3px',
                  height: '18px',
                  border: `0.5px solid ${scale.brightColor}`,
                  borderRadius: `0 ${THEME.borderRadius.xs}px ${THEME.borderRadius.xs}px 0`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: '0 6.8px',
                  boxSizing: 'border-box'
                }}
              >
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: THEME.typography.fontWeight.light,
                  fontSize: '10.8px',
                  lineHeight: THEME.typography.lineHeight.normal,
                  color: THEME.colors.text,
                  textAlign: 'left'
                }}>
                  {subScale.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};