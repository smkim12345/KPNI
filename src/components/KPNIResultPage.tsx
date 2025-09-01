import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { THEME } from './theme';
import { InfoSection } from './sections/00_InfoSection';
import { ReliabilitySection } from './sections/01_ReliabilitySection';
import { ProfileSection } from './sections/02_ProfileSection';
import { DetailSection } from './sections/03_DetailSection';
import { ScaleSection } from './sections/04_ScaleSection';

// A3 페이지 스타일 컴포넌트들
const PageContainer = styled(Container)({
  minWidth: '1231px', // A3 프레임 + 패딩 보장
  minHeight: '100vh',
  backgroundColor: THEME.layout.a3.pageBackground,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FrameBox = styled(Box)({
  position: 'relative',
  width: `1191px`,
  height: `847px`,
  backgroundColor: THEME.colors.white,
});

const BorderContainer = styled(Box)({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const BorderElement = styled(Box)({
  position: 'absolute',
  backgroundColor: THEME.colors.primary,
});

const TopBorder = styled(BorderElement)({
  top: 0,
  left: 0,
  width: '100%',
  height: `${THEME.layout.border.thickness}px`,
});

const BottomBorder = styled(BorderElement)({
  bottom: 0,
  left: 0,
  width: '100%',
  height: `${THEME.layout.border.thickness}px`,
});

const LeftBorder = styled(BorderElement)({
  top: 0,
  left: 0,
  width: `${THEME.layout.border.thickness}px`,
  height: '100%',
});

const RightBorder = styled(BorderElement)({
  top: 0,
  right: 0,
  width: `${THEME.layout.border.thickness}px`,
  height: '100%',
});

const CornerBox = styled(BorderElement)({
  top: 0,
  left: 0,
  width: `185px`,
  height: `403px`,  
  borderRadius: `0px 0px 52px 0px`,
});

/**
 * K-PNI A3 결과지 메인 페이지
 * A3 페이지 레이아웃과 결과 콘텐츠가 통합된 컴포넌트
 */
export const KPNIResultPage = () => {
  return (
    <PageContainer maxWidth={false}>
      <FrameBox>
        {/* A3 페이지 테두리 */}
        <BorderContainer>
          <CornerBox />
          <TopBorder />
          <BottomBorder />
          <LeftBorder />
          <RightBorder />
        </BorderContainer>

        {/* 바깥테두리 하단 박스 - 둥근모서리 채우기용 */}
        <Box sx={{
          position: 'absolute',
          left: '30px',
          top: '349px',
          width: '155px',
          height: '54px',
          backgroundColor: THEME.colors.gray,
          zIndex: 1.5
        }} />

        {/* 메인 흰 배경 */}
        <Box sx={{ 
          position: 'absolute',
          left: '185px',
          top: '30px',
          width: '976px', 
          height: '787px',
          backgroundColor: '#F9F9F9',
          borderRadius: '15px 15px 15px 0px',
          zIndex: 2
        }} />

        {/* 3개 메인 섹션 레이아웃 */}
        <Box sx={{ 
          position: 'absolute',
          left: '30px',
          top: '30px',
          display: 'flex',
          height: '787px',
          zIndex: 3,
        }}>
          
          {/* 좌측 정보 섹션 */}
          <Box sx={{
            width: '155px',
            height: '787px',
            boxSizing: 'border-box',
          }}>
            <InfoSection />
          </Box>
          
          {/* 왼쪽 메인 섹션 (2,3,4번 섹션들) */}
          <Box sx={{
            width: '488px',
            height: '787px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(245, 245, 245,0.5)',
            boxSizing: 'border-box',
            padding: '10px 0px 10px 10px'
          }}>
            <ReliabilitySection />
            <ProfileSection />
            <DetailSection />
          </Box>
          
          {/* 오른쪽 메인 섹션 (5번 섹션) */}
          <Box sx={{
            width: '488px',
            height: '787px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgb(230, 255, 230,0.8)',
            boxSizing: 'border-box',
            padding: '10px 0 10px 10px'
          }}>
            <ScaleSection />
          </Box>
          
        </Box>
      </FrameBox>
    </PageContainer>
  );
};