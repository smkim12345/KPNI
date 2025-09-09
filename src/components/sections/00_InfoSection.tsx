import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import { InputField } from '../UI/00_InputField';
import type { InfoSectionProps } from '../../dtos/ResultTypes';
import { format } from 'date-fns';

export const InfoSection = ({ participant }: InfoSectionProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '209.6px',
      height: '1064.4px'
    }}>
      {/* 메인 제목 */}
      <Box sx={{
        height: '140.6px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4px'
      }}>
        {/* 로고 이미지 */}
        <Box sx={{
          width: '94.6px',
          height: '27.0px',
          backgroundColor: THEME.colors.mainWhite,
          borderRadius: `${THEME.borderRadius.xs}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2.7px'
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
          fontFamily: THEME.typography.fontFamily.pretendard,
          fontWeight: THEME.typography.fontWeight.extraBold,
          fontSize: `${THEME.typography.fontSize.huge - 5.4}px`,
          lineHeight: THEME.typography.lineHeight.tight,
          color: THEME.colors.mainWhite,
          letterSpacing: '0.05em', // 자간 늘림
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
          width: '154.1px',
          whiteSpace: 'pre-line',
        }}>
          comprehensive Parening{'\n'}& Nurturing Inventory
        </Typography>
      </Box>
      
      {/* 정보 기입 섹션 */}
      <Box sx={{
        height: '363.7px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* 정보 기입란 */}
        <Box sx={{
          width: '179.8px',
          backgroundColor: THEME.colors.white,
          borderRadius: `${THEME.borderRadius.sm}px`,
          padding: '16.2px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          gap: '4.1px'
        }}>
          <InputField 
            label="양육자명" 
            value={participant?.name ?? "김성민"} 
          />
          <InputField 
            label="양육자 생년월일" 
            value={participant?.caregiverBirthDate ?? "1995.12.14"} 
          />
          <InputField 
            label="자녀와의 관계" 
            value={participant?.relationshipToChild ?? "아들"} 
          />
          <InputField 
            label="양육구분" 
            value={participant?.careType ?? "양육구분"} 
          />
          <InputField 
            label="자녀이름" 
            value={participant?.childName ?? "김성근"} 
          />
          <InputField 
            label="자녀성별" 
            value={participant?.gender === 'MALE' ? '남성' : participant?.gender === 'FEMALE' ? '여성' : "남성"} 
          />
          <InputField 
            label="자녀연령" 
            value={participant?.childAge ? `${participant.childAge}세` : "12세"} 
          />
          <InputField 
            label="검사 실시일" 
            value={participant?.testedDate ? format(new Date(participant.testedDate), 'yyyy.MM.dd') : "2025.08.26"} 
          />
        </Box>
      </Box>
      
      {/* 검사명설명섹션 */}
      <Box sx={{
        height: '559.7px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
      }}>
        {/* 검사명설명 */}
        <Box sx={{
          backgroundColor: THEME.colors.lightGray,
          borderRadius: '20.3px 0px 0px 20.3px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24.3px',
          padding: '0px 16.2px',
          flex: 1,
          minHeight: '354.2px'
        }}>
          {/* 제목 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.ohsquare,
            fontWeight: THEME.typography.fontWeight.extraBold, // Pretendard ExtraBold 적용
            fontSize: '18.9px',
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
            fontWeight: THEME.typography.fontWeight.extraBold, // Pretendard ExtraBold 적용
            fontSize: '13.5px',
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
            fontSize: '13.5px',
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
            width: '170px',
            height: '2px',
            backgroundColor: THEME.colors.gray,
            alignSelf: 'center'
          }} />

          {/* 큐알코드 섹션 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '4.1px',
            padding: '13.5px 0px',
            alignSelf: 'stretch'
          }}>
            {/* 큐알코드 박스 */}
            <Box sx={{
              width: '70.3px',
              height: '70.3px',
              backgroundColor: '#4E57A6',
              padding: '2.7px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* QR 코드 이미지 */}
              <Box sx={{
                width: '67.6px',
                height: '67.6px',
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
              gap: '13.5px',
              flex: 1
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.ohsquareAir,
                fontWeight: THEME.typography.fontWeight.light,
                fontSize: '14.9px',
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