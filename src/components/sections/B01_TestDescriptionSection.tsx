import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import familyImage from '../../images/1_family.jpg';
import { SectionTitleBox } from '../UI/B_SectionTitle';

/**
 * K-PNI 검사명 설명 섹션 - 피그마 1번섹션_용어설명 1:1 구현
 */
export const TestDescriptionSection = () => {
  return (
    <Box sx={{
      width: '763.9px',
      height: '226.4px',
      //backgroundColor: 'rgba(24, 221, 245,0.4)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '13.5px',
      boxSizing: 'border-box',
      gap: '6.8px'
    }}>
      {/* 섹션 제목 */}
      <SectionTitleBox title="1. 부모양육종합검사란?" />

      {/* 내용 영역 */}
      <Box sx={{
        position: 'relative',
        alignSelf: 'stretch',
        flex: 1,
        padding: '0 13.5px',
        //backgroundColor: 'red',
      }}>
        {/* 부모양육 사진 - 오른쪽에 배치하여 텍스트가 주변을 감싸도록 함 */}
        <Box sx={{
          width: '203.4px',
          height: '203.4px',
          borderRadius: '40.6px',
          float: 'right',


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
          {`21세기 들어 가족 형태와 부모 역할은 다양하고 복합적으로 변화했습니다. 전통적 권위적 부모상에서 벗어나 부모-자녀 관계는 더 상호적이고 정서적 교류를 중시하는 방향으로 진화했지만, 이는 부모에게 큰 심리적 부담과 혼란을 안겨주고 있습니다. 산업화와 핵가족화, 여성 경제활동 증가로 양육 부담이 집중되며, 맞벌이 가정 증가로 자녀와의 상호작용 시간이 줄어드는 문제가 발생했습니다.

SNS와 미디어의 이상적 부모상은 부모들에게 끊임없는 비교와 자기검열을 유발하며, 코로나19 이후 양육 스트레스가 폭발적으로 증가했습니다. 오늘날 부모는 단순한 양육자를 넘어 정서 코치, 학습 관리자, 갈등 조정자 등 다층적 역할을 요구받고 있습니다.

PNI검사는 생태학적 양육이론, 애착이론, 자기효능감 이론 등을 기반으로 양육을 복합적인 과정으로 접근합니다. 부모님들로 하여금 먼저 자기 자신을 바라볼 수 있는 거울이 되어, 성찰과 성장을 돕고자 합니다. PNI는 바로 그 성장을 위한 출발점이 될 것입니다.`}
        </Typography>
      </Box>
    </Box>
  );
};