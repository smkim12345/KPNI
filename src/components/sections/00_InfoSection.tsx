import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import { InputField } from '../UI/00_InputField';

export const InfoSection = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '155px',
      height: '787px'
    }}>
      {/* 메인 제목 */}
      <Box sx={{
        height: '104px',
        display: 'flex',
        flexDirection: 'column',
        gap: `1px`
      }}>
        {/* 로고 이미지 */}
        <Box sx={{
          width: '70px',
          height: '20px',
          backgroundColor: THEME.colors.mainWhite,
          borderRadius: `${THEME.borderRadius.xs}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2px'
        }}>
          <img
            src="./src/images/logo.png"
            alt="K-PNI Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>
        
        {/* K-PNI */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.moyamoya,
          fontWeight: THEME.typography.fontWeight.bold,
          fontSize: `${THEME.typography.fontSize.huge-4}px`,
          lineHeight: THEME.typography.lineHeight.tight,
          color: THEME.colors.mainWhite,
        }}>
          K-PNI
        </Typography>
        
        {/* 부모양육종합검사 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: THEME.typography.fontWeight.light,
          fontSize: `${THEME.typography.fontSize.xl}px`,
          lineHeight: THEME.typography.lineHeight.normal,
          color: THEME.colors.mainWhite,
        }}>
          부모양육종합검사
        </Typography>
        
        {/* 영문명 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: THEME.typography.fontWeight.light,
          fontSize: `${THEME.typography.fontSize.xs}px`,
          lineHeight: THEME.typography.lineHeight.normal,
          color: THEME.colors.mainWhite,
          width: '114px',
          whiteSpace: 'pre-line',
        }}>
          comprehensive Parening{'\n'}& Nurturing Inventory
        </Typography>
      </Box>
      
      {/* 정보 기입 섹션 */}
      <Box sx={{
        height: '269px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* 정보 기입란 */}
        <Box sx={{
          width: '133px',
          backgroundColor: THEME.colors.white,
          borderRadius: `${THEME.borderRadius.sm}px`,
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          gap: '3px'
        }}>
          <InputField label="양육자명" value="김성민" />
          <InputField label="양육자 생년월일" value="1995.12.14" />
          <InputField label="자녀와의 관계" value="아들" />
          <InputField label="양육구분" value="양육구분" />
          <InputField label="자녀이름" value="김성근" />
          <InputField label="자녀성별" value="남성" />
          <InputField label="자녀연령" value="12세" />
          <InputField label="검사 실시일" value="2025.08.26" />
        </Box>
      </Box>
      
      {/* 검사명설명섹션 */}
      <Box sx={{
        height: '414px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: THEME.colors.primary,
      }}>
        {/* 검사명설명 */}
        <Box sx={{
          backgroundColor: THEME.colors.gray,
          borderRadius: '15px 0px 0px 15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '18px',
          padding: '0px 12px',
          flex: 1,
          minHeight: '262px'
        }}>
          {/* 제목 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.ohsquare,
            fontWeight: THEME.typography.fontWeight.normal,
            fontSize: '14px',
            lineHeight: '1.268em',
            textAlign: 'center',
            color: THEME.colors.text,
            alignSelf: 'stretch'
          }}>
            부모양육종합검사란?
          </Typography>

          {/* 인용문 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.ohsquare,
            fontWeight: THEME.typography.fontWeight.normal,
            fontSize: '10px',
            lineHeight: '1.268em',
            textAlign: 'center',
            color: THEME.colors.text,
            width: 'fit-content',
            wordBreak: 'keep-all'
          }}>
            " 좋은 부모는 완벽한 사람이 아니라, 매일 아이와 함께 성장하려는 사람입니다 "
          </Typography>

          {/* 본문 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.ohsquareAir,
            fontWeight: THEME.typography.fontWeight.light,
            fontSize: '10px',
            lineHeight: '1.268em',
            textAlign: 'left',
            color: THEME.colors.text,
            alignSelf: 'stretch',
            whiteSpace: 'pre-line'
          }}>
            오늘날 부모는 단지 아이를 돌보는 사람을 넘어, 정서 코치, 학습 관리자, 갈등 조정자, 역할 모델 등 다층적인 정체성을 요구받고 있습니다.
            {'\n'}
            {'\n'}
            자녀를 양육하는 부모님들로 하여금 정보나 방법 이전에, 자기 자신을 먼저 바라볼 수 있는 거울이 되어주고자 합니다.
            {'\n'}
            {'\n'}
            부모는 누구나 '완벽'하진 않지만, '성찰하고 성장할 수 있는 존재'입니다. PNI는 바로 그 성장을 위한 출발점이 될 것입니다.
          </Typography>

          {/* 구분선 */}
          <Box sx={{
            width: '129px',
            height: '2px',
            backgroundColor: '#F2F2F2',
            alignSelf: 'center'
          }} />

          {/* 큐알코드 섹션 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '3px',
            padding: '10px 0px',
            alignSelf: 'stretch'
          }}>
            {/* 큐알코드 박스 */}
            <Box sx={{
              width: '52px',
              height: '52px',
              backgroundColor: '#4E57A6',
              padding: '2px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* QR 코드 이미지 */}
              <Box sx={{
                width: '50px',
                height: '50px',
                backgroundImage: 'url(./src/images/qrcode.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            </Box>

            {/* 큐알 설명 */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flex: 1
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.ohsquareAir,
                fontWeight: THEME.typography.fontWeight.light,
                fontSize: '11px',
                lineHeight: '1.268em',
                textAlign: 'center',
                color: THEME.colors.text,
                whiteSpace: 'pre-line'
              }}>
                QR을 스캔하여{'\n'}해당 동영상을{'\n'}시청해 보세요.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};