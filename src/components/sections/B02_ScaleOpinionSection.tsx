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
    bgColor: '#FDB68C',
    subScales: [
      { name: '기질적 예민성', description: '환경 변화에 대한 민감도와 정서적 반응성을 측정합니다. 예민한 기질은 특별한 관심과 이해가 필요합니다.' },
      { name: '높은 요구수준', description: '부모에게 요구하는 관심과 돌봄 정도를 평가합니다. 요구 수준이 높을수록 양육 부담이 커질 수 있습니다.' },
      { name: '사회적 적응력', description: '사회적 상황 적응력과 또래 관계 형성을 평가합니다. 사회성이 발달하면 건강한 사회생활이 가능합니다.' },
      { name: '발달 수준', description: '연령대에 맞는 언어·인지·정서 발달 정도를 평가합니다. 발달 단계에 맞는 자극과 지원이 필수적입니다.' },
      { name: '애착관계형성', description: '양육자와 정서적 유대감 형성 정도를 평가합니다. 안정적인 애착은 정서적 안정의 기초가 됩니다.' }
    ]
  },
  {
    title: '양육\n태도',
    bgColor: '#A9CEF4',
    subScales: [
      { name: '애정표현', description: '자녀에게 애정과 사랑을 표현하는 방식과 정도를 평가합니다. 적절한 애정 표현은 정서적 안정감을 높여줍니다.' },
      { name: '합리적 설명', description: '규칙이나 행동에 대해 논리적으로 설명하는 정도를 평가합니다. 자녀의 사고력 발달에 도움이 됩니다.' },
      { name: '일관적 태도', description: '양육 태도의 일관성 유지 정도를 평가합니다. 일관된 태도는 예측 가능성과 안정감을 제공합니다.' },
      { name: '훈육 방식', description: '자녀를 가르치고 훈육하는 방법을 평가합니다. 적절한 훈육은 건전한 사회성 발달을 지원합니다.' },
      { name: '자율성 존중', description: '자녀의 독립성과 자율성을 존중하는 정도를 평가합니다. 적절한 자율성 존중은 자기주도성을 기릅니다.' }
    ]
  },
  {
    title: '양육\n환경',
    bgColor: '#88CACE',
    subScales: [
      { name: '부부간 불화', description: '부부 간 갈등과 불화 정도를 평가합니다. 부부 관계 안정성은 가정 전체 분위기에 영향을 미칩니다.' },
      { name: '사회적 지원 부족', description: '가족 외부 사회적 지원 체계 부족 정도를 평가합니다. 사회적 네트워크가 부족하면 양육 부담이 커집니다.' },
      { name: '방임/무시', description: '자녀의 정서적·신체적 요구를 무시하거나 방임하는 정도를 평가합니다. 방임은 발달에 부정적 영향을 미칠 수 있습니다.' },
      { name: '신체적 학대', description: '신체적 처벌이나 학대적 행동 정도를 평가합니다. 신체적 학대는 안전을 위협하고 발달 문제를 일으킬 수 있습니다.' },
      { name: '정서적 학대', description: '정서적 무시나 비난 정도를 평가합니다. 정서적 학대는 자존감과 정서적 건강에 심각한 타격을 줄 수 있습니다.' }
    ]
  },
  {
    title: '양육\n스트레스',
    bgColor: '#C5ACDF',
    subScales: [
      { name: '역할갈등', description: '부모 역할과 사회적·직업적 역할 간 갈등 정도를 평가합니다. 역할 갈등이 심하면 양육에 집중하기 어려워집니다.' },
      { name: '양육방식차이', description: '부부 간 양육 방식 차이로 인한 갈등 정도를 평가합니다. 양육 방식의 일관성이 중요합니다.' },
      { name: '경제적 고민', description: '자녀 양육 경제적 부담으로 인한 스트레스 정도를 평가합니다. 경제적 어려움은 양육의 질을 저해할 수 있습니다.' },
      { name: '자녀갈등', description: '자녀와의 관계에서 발생하는 갈등 정도를 평가합니다. 자녀 이해와 소통 방법 개선이 필요할 수 있습니다.' },
      { name: '심리적 불안정', description: '양육 과정에서 경험하는 심리적 불안정감 정도를 평가합니다. 심리적 안정이 양육의 핵심입니다.' }
    ]
  },
  {
    title: '양육\n과정',
    bgColor: '#F0B9C8',
    subScales: [
      { name: '양육만족', description: '양육 활동에 대한 전반적인 만족도를 평가합니다. 양육의 긍정적 측면과 도전 과제를 균형 있게 보는 태도가 중요합니다.' },
      { name: '현가족관계', description: '현재 가족 구성원 간 관계 안정성을 평가합니다. 가족 화목은 자녀의 정서적 안정에 핵심적입니다.' },
      { name: '원가족관계', description: '본인의 원가족과의 관계 상태를 평가합니다. 건강한 원가족 관계는 양육 역량 강화에 도움이 됩니다.' },
      { name: '자녀만족', description: '자녀가 가족 내에서 느끼는 만족도를 평가합니다. 자녀의 정서적 안녕감이 가족 건강에 영향을 미칩니다.' },
      { name: '회복경험', description: '과거 어려운 경험으로부터의 회복력을 평가합니다. 회복력은 미래 양육에 대한 희망과 자신감을 줍니다.' }
    ]
  }
];

export const ScaleOpinionSection = () => {
  return (
    <Box sx={{
      width: '566px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '10px',
      boxSizing: 'border-box',
      //backgroundColor: 'red',
      gap: '5px'
    }}>
      {/* 섹션 제목 */}
      <SubSectionTitle title="4. 척도별 소견 확인" />

      {/* 설명 텍스트 */}
      <Box sx={{
        display: 'flex',
        alignSelf: 'stretch',
        padding: '0 10px',
        width: '516px',
      }}>
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.pretendard,
          fontWeight: THEME.typography.fontWeight.normal,
          fontSize: '9px',
          lineHeight: '1.189em',
          color: THEME.colors.text,
          flex: 1,
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all'
        }}>
          PNI 부모양육종합검사의 다섯 가지 상위척도(자녀특성, 양육태도, 양육환경, 양육스트레스, 양육과정)에 대한 척도별 정의를 확인하실 수 있습니다. 
          각 척도별 결과는 단순한 점수 비교가 아닌, 부모님의 현재 양육 경험과 감정 상태, 관계 패턴을 보다 깊이 이해하는 데 목적이 있습니다. 점수가 높다고 반드시 '좋다'거나, 낮다고 '문제가 있다'는 의미는 아닙니다. 모든 결과는 현재의 모습에 대한 일시적인 단면이며, 앞으로의 변화 가능성과 회복력을 함께 고려하여 해석해주시기 바랍니다.
        </Typography>
      </Box>

      {/* 척도별 블록들 */}
      {SCALE_DATA.map((scale, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '565px',
            height: '81px',
            padding: '0 10px',
            boxSizing: 'border-box'
          }}
        >
          {/* 상위척도 이름 박스 */}
          <Box sx={{
            width: '40px',
            height: '74px',
            backgroundColor: scale.bgColor,
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 9px',
            boxSizing: 'border-box'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.ohsquare,
              fontWeight: THEME.typography.fontWeight.light,
              fontSize: '11px',
              lineHeight: '1.268em',
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
            width: '67px',
            height: '74px',
            padding: '0 0 0 5px',
            gap: '2px',
            //backgroundColor: 'red' //영역 확인용
          }}>
            {scale.subScales.map((subScale, subIndex) => (
              <Box
                key={subIndex}
                sx={{
                  width: '67px',
                  height: '12px',
                  backgroundColor: scale.bgColor === '#FDB68C' ? '#F8CC89' :
                                   scale.bgColor === '#A9CEF4' ? '#B9DBFF' :
                                   scale.bgColor === '#88CACE' ? '#94D9DE' :
                                   scale.bgColor === '#C5ACDF' ? '#C0BAEA' :
                                   '#F2CBD6',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box'
                }}
              >
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: 700,
                  fontSize: '9px',
                  lineHeight: '1.193em',
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
            width: '403px',
            height: '74px',
            gap: '3px',
          }}>
            {scale.subScales.map((subScale, subIndex) => (
              <Box
                key={subIndex}
                sx={{
                  width: '393px',
                  height: '12px',
                  border: `1px solid ${scale.bgColor === '#FDB68C' ? '#F8CC89' :
                                       scale.bgColor === '#A9CEF4' ? '#B9DBFF' :
                                       scale.bgColor === '#88CACE' ? '#94D9DE' :
                                       scale.bgColor === '#C5ACDF' ? '#C0BAEA' :
                                       '#F2CBD6'}`,
                  borderRadius: '0 5px 5px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 5px',
                  boxSizing: 'border-box'
                }}
              >
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: THEME.typography.fontWeight.normal,
                  fontSize: '8px',
                  lineHeight: '1.193em',
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