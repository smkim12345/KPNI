import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { THEME } from './theme';
import { InfoSection } from './sections/00_InfoSection';
import { ReliabilitySection } from './sections/01_ReliabilitySection';
import { ProfileSection } from './sections/02_ProfileSection';
import { DetailSection } from './sections/03_DetailSection';
import { ScaleSection } from './sections/04_ScaleSection';

// A3 페이지 캔버스
const PageContainer = styled(Container)({
  minWidth: '1287px', 
  minHeight: `959px`,
  backgroundColor: THEME.layout.a3.pageBackground,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// 초록색 외곽 테두리 두께 조절 용
const OuterGreenBox = styled(Box)({
  width: '1191px',   
  height: '847px',
  backgroundColor: THEME.colors.primary, 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FrameBox = styled(Box)({
  position: 'relative',
  width: '1191px',   // 기존 콘텐츠 크기 유지
  height: '847px',
  backgroundColor: THEME.colors.primary,
});


const CornerBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '185px',
  height: '403px',
  backgroundColor: THEME.colors.primary,
  borderRadius: '0px 0px 52px 0px',
  zIndex: 1,
});

/**
 * K-PNI A3 결과지 메인 페이지
 * A3 페이지 레이아웃과 결과 콘텐츠가 통합된 컴포넌트
 */
export const KPNIResultPage = () => {
  return (
    <PageContainer maxWidth={false}>
      <OuterGreenBox>
        <FrameBox>
          {/* 좌상단 둥근 모서리 */}
          <CornerBox />

          {/* 바깥테두리 하단 박스 - 둥근모서리 채우기용 */}
          <Box sx={{
            position: 'absolute',
            left: '30px',
            top: '349px',
            width: '155px',
            height: '70px',
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
            //backgroundColor: 'rgb(245, 245, 245,0.8)',
          }}>
          
          {/* 좌측 정보 섹션 */}
          <Box sx={{
            width: '155px',
            height: '787px',
            boxSizing: 'border-box',
            //backgroundColor: 'rgb(245, 245, 245,0.5)',
          }}>
            <InfoSection />
          </Box>
          
          {/* 왼쪽 메인 섹션 (1,2,3번 섹션들) */}
          <Box sx={{
            width: '488px', 
            height: '787px',
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: 'rgb(245, 245, 245,0.5)',
            boxSizing: 'border-box',
            padding: '10px 0px 10px 10px'
          }}>
            <ReliabilitySection />
            <ProfileSection />
            <DetailSection />
          </Box>
          
          {/* 오른쪽 메인 섹션 (4번 섹션) */}
          <Box sx={{
            width: '488px',
            height: '787px',
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: 'rgb(230, 255, 230,0.8)',
            boxSizing: 'border-box',
            padding: '10px 0 10px 10px'
          }}>
            <ScaleSection />
          </Box>
            
          </Box>
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};