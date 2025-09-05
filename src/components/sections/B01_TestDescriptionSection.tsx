import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import familyImage from '../../images/1_family.png';
import { SectionTitleBox } from '../UI/B_SectionTitle';

/**
 * K-PNI 검사명 설명 섹션 - 피그마 1번섹션_용어설명 1:1 구현
 */
export const TestDescriptionSection = () => {
  return (
    <Box sx={{
      width: '565px',
      height: '234px',
      //backgroundColor: 'rgba(24, 221, 245,0.4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '10px',
      boxSizing: 'border-box',
      gap: '5px'
    }}>
      {/* 섹션 제목 */}
      <SectionTitleBox title="1. 부모양육종합검사란?" />

      {/* 내용 영역 */}
      <Box sx={{
        position: 'relative',
        alignSelf: 'stretch',
        flex: 1,
        padding: '0 10px',
        //backgroundColor: 'red',
      }}>
        {/* 부모양육 사진 - 오른쪽에 배치하여 텍스트가 주변을 감싸도록 함 */}
        <Box sx={{
          width: '180px',
          height: '180px',
          borderRadius: '30px',
          float: 'right',
          marginRight: '0px',
          marginBottom: '8px',
        }}
        style={{
          shapeOutside: 'circle(55%)',
          clipPath: 'circle(50%)',
        }}>
          <img
            src={familyImage}
            alt="부모양육 이미지"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>

        {/* 설명글 - 이미지 주변을 자연스럽게 감싸도록 배치 */}
        <Typography sx={{
          ...THEME.B_SECTION_DESCRIPTION,
          textAlign: 'justify',
          margin: 0,
          letterSpacing: '-0.003em',
        }}>
          {`21세기 들어 가족의 형태와 부모 역할은 이전보다 훨씬 다양하고 복합적으로 변화하고 있습니다. 전통적인 '권위적 부모상'이 지배하던 시기를 지나, 이제는 부모와 자녀 간의 관계가 더 상호적이며, 정서적인 교류를 중시하는 방향으로 진화해가고 있습니다. 하지만 이러한 변화는 동시에 부모에게 더 큰 심리적 부담과 혼란을 안겨주고 있습니다. 또한 산업화와 핵가족화는 가족 내 역할을 재구성하며, 부모에게 양육 부담을 집중시켰습니다. 여성의 경제활동 증가, 맞벌이 가정의 증가는 부모가 자녀와 보내는 시간 자체를 줄이며, 질 높은 상호작용에 대한 압박을 증가시켰습니다.

 SNS나 미디어 속 '이상적인 부모상'은 부모들에게 끊임없는 비교와 자기검열을 유발합니다. 최근에는 코로나19 팬데믹 이후, 가정 내 역할 충돌과 양육 스트레스가 폭발적으로 증가하며, 부모의 심리적 회복력이 새로운 화두로 떠올랐습니다. 이처럼 오늘날 부모는 단지 아이를 돌보는 사람을 넘어, 정서 코치, 학습 관리자, 갈등 조정자, 역할 모델 등 다층적인 정체성을 요구받고 있습니다.

PNI검사는 심리학적으로는 생태학적 양육이론(Bronfenbrenner), 애착이론 (Bowlby), 자기효능감 이론(Bandura), 양육 스트레스 모델(Abidin) 등을 바탕으로 하여, 양육을 단지 '태도'의 문제가 아닌, 관계, 상황, 감정, 과거, 환경이 얽힌 복합적인 과정으로 접근하고 있습니다. PNI검사는 자녀를 양육하는 부모님들로 하여금 정보나 방법 이전에, 자기 자신을 먼저 바라볼 수 있는 거울이 되어주고자 합니다. 부모는 누구나 '완벽'하진 않지만, '성찰하고 성장할 수 있는 존재'입니다. 
PNI는 바로 그 성장을 위한 출발점이 될 것입니다`}
        </Typography>
      </Box>
    </Box>
  );
};