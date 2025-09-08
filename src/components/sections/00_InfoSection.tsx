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
      width: `${155 * 1.352}px`,    // 209.56px
      height: `${787 * 1.352}px`   // 1064.424px
    }}>
      {/* 메인 제목 */}
      <Box sx={{
        height: `${104 * 1.352}px`,  // 140.608px
        display: 'flex',
        flexDirection: 'column',
        gap: `${1 * 1.352}px`        // 1.352px
      }}>
        {/* 로고 이미지 */}
        <Box sx={{
          width: `${70 * 1.352}px`,   // 94.64px
          height: `${20 * 1.352}px`,  // 27.04px
          backgroundColor: THEME.colors.mainWhite,
          borderRadius: `${THEME.borderRadius.xs * 1.352}px`, // 5.408px
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${2 * 1.352}px`   // 2.704px
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
          fontWeight: THEME.typography.fontWeight.extraBold,
          fontSize: `${(THEME.typography.fontSize.huge - 4) * 1.352}px`, // 59.488px
          lineHeight: THEME.typography.lineHeight.tight,
          color: THEME.colors.mainWhite,
        }}>
          K-PNI
        </Typography>
        
        {/* 부모양육종합검사 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: THEME.typography.fontWeight.light,
          fontSize: `${THEME.typography.fontSize.xl * 1.352}px`, // 20.28px
          lineHeight: THEME.typography.lineHeight.normal,
          color: THEME.colors.mainWhite,
        }}>
          부모양육종합검사
        </Typography>
        
        {/* 영문명 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquareAir,
          fontWeight: THEME.typography.fontWeight.light,
          fontSize: `${THEME.typography.fontSize.xs * 1.352}px`, // 9.464px
          lineHeight: THEME.typography.lineHeight.normal,
          color: THEME.colors.mainWhite,
          width: `${114 * 1.352}px`, // 154.128px
          whiteSpace: 'pre-line',
        }}>
          comprehensive Parening{'\n'}& Nurturing Inventory
        </Typography>
      </Box>
      
      {/* 정보 기입 섹션 */}
      <Box sx={{
        height: `${269 * 1.352}px`,  // 363.688px
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* 정보 기입란 */}
        <Box sx={{
          width: `${133 * 1.352}px`,    // 179.816px
          backgroundColor: THEME.colors.white,
          borderRadius: `${THEME.borderRadius.sm * 1.352}px`, // 20.28px
          padding: `${12 * 1.352}px`,   // 16.224px
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          gap: `${3 * 1.352}px`         // 4.056px
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
        height: `${414 * 1.352}px`,  // 559.728px
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: THEME.colors.primary,
      }}>
        {/* 검사명설명 */}
        <Box sx={{
          backgroundColor: THEME.colors.gray,
          borderRadius: `${15 * 1.352}px 0px 0px ${15 * 1.352}px`, // 20.28px
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: `${18 * 1.352}px`,    // 24.336px
          padding: `0px ${12 * 1.352}px`, // 16.224px
          flex: 1,
          minHeight: `${262 * 1.352}px` // 354.224px
        }}>
          {/* 제목 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.ohsquare,
            fontWeight: THEME.typography.fontWeight.normal,
            fontSize: `${14 * 1.352}px`,  // 18.928px
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
            fontSize: `${10 * 1.352}px`,  // 13.52px
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
            fontSize: `${10 * 1.352}px`,  // 13.52px
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
            width: `${129 * 1.352}px`,  // 174.408px
            height: `${2 * 1.352}px`,    // 2.704px
            backgroundColor: '#F2F2F2',
            alignSelf: 'center'
          }} />

          {/* 큐알코드 섹션 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: `${3 * 1.352}px`,      // 4.056px
            padding: `${10 * 1.352}px 0px`, // 13.52px
            alignSelf: 'stretch'
          }}>
            {/* 큐알코드 박스 */}
            <Box sx={{
              width: `${52 * 1.352}px`,   // 70.304px
              height: `${52 * 1.352}px`,  // 70.304px
              backgroundColor: '#4E57A6',
              padding: `${2 * 1.352}px`,  // 2.704px
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* QR 코드 이미지 */}
              <Box sx={{
                width: `${50 * 1.352}px`,   // 67.6px
                height: `${50 * 1.352}px`,  // 67.6px
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
              gap: `${10 * 1.352}px`,    // 13.52px
              flex: 1
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.ohsquareAir,
                fontWeight: THEME.typography.fontWeight.light,
                fontSize: `${11 * 1.352}px`, // 14.872px
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