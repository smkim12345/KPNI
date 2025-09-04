import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { THEME } from './theme';
import { InfoSection } from './sections/00_InfoSection';
import { ReliabilitySection } from './sections/01_ReliabilitySection';
import { ProfileSection } from './sections/02_ProfileSection';
import { DetailSection } from './sections/03_DetailSection';
import { ScaleSection } from './sections/04_ScaleSection';
import type { KPNIResultPageProps } from '../types/KPNITypes';
import { BackTitleSection } from './UI/Back_SectionTitle';
import { TestDescriptionSection } from './sections/B01_TestDescriptionSection';
import { InterpretationOrderSection } from './sections/B02_InterpretationOrderSection';
import { ScaleOpinionSection } from './sections/B02_ScaleOpinionSection';
import { SolutionSection } from './sections/B03_SolutionSection';

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
 * K-PNI A3 결과지 앞면 페이지
 */
const KPNIFrontPage = ({ resultResponse }: KPNIResultPageProps) => {
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
            backgroundColor: THEME.colors.background,
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
            <InfoSection participant={resultResponse?.participant} />
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
            <ReliabilitySection trustIndicators={resultResponse?.resultData?.trustIndicators} />
            <ProfileSection parentScales={resultResponse?.resultData?.parentScales} />
            <DetailSection subScales={resultResponse?.resultData?.subScales} />
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
            <ScaleSection 
              parentScales={resultResponse?.resultData?.parentScales}
              scaleInterpretations={resultResponse?.resultData?.scaleInterpretations}
            />
          </Box>
            
          </Box>
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};

/**
 * K-PNI A3 결과지 뒷면 페이지
 */
const KPNIBackPage = () => {
  return (
    <PageContainer maxWidth={false}>
      <OuterGreenBox>
        <FrameBox>
          {/* 왼쪽 흰색 배경 */}
          <Box sx={{ 
            position: 'absolute',
            left: '30px',
            top: '101px',
            width: '432px', 
            height: '716px',
            backgroundColor: THEME.colors.background,
            borderRadius: '15px 0px 0px 15px',
            zIndex: 2
          }} />

          {/* 오른쪽 흰색 배경 */}
          <Box sx={{ 
            position: 'absolute',
            left: '462px',
            top: '30px',
            width: '699px', 
            height: '787px',
            backgroundColor: THEME.colors.background,
            borderRadius: '15px 15px 15px 0px',
            zIndex: 2
          }} />

          {/* 제목 흰색 배경 */}
          <Box sx={{ 
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '462px', 
            height: '101px',
            backgroundColor: THEME.colors.primary,
            borderRadius: '0 0 15px 0',
            zIndex: 1
          }} />

          {/* 바깥테두리 하단 박스 - 둥근모서리 채우기용 */}
          <Box sx={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '462px', 
            height: '101px',
            backgroundColor: THEME.colors.background,
            zIndex: 1.5
          }} />

          {/* 메인 섹션 레이아웃 */}
          <Box sx={{ 
            position: 'absolute',
            left: '30px',
            top: '30px',
            display: 'flex',
            width: '1131px',
            height: '787px',
            zIndex: 3,
            //backgroundColor: 'rgb(24, 245, 245,0.4)',
          }}>
            {/* 왼쪽 메인 섹션(제목, 2-1, 2-2, 2-3번) */}
            <Box sx={{
              width: '565px',
              height: '787px',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
              //backgroundColor: 'rgb(24, 24, 245,0.4)',
            }}>
              <BackTitleSection/>
              <TestDescriptionSection/>
              <InterpretationOrderSection/>
            </Box>
            
            {/* 오른쪽 메인 섹션(2-4번, 3번) */}
            <Box sx={{
              width: '565px', 
              height: '787px',
              display: 'flex',
              flexDirection: 'column',
              //backgroundColor: 'rgb(245, 245, 25,0.5)',
              boxSizing: 'border-box',
            }}>
              <ScaleOpinionSection/>
              <SolutionSection/>
            </Box>
          </Box>
        </FrameBox>
      </OuterGreenBox>
    </PageContainer>
  );
};

/**
 * K-PNI A3 결과지 전체 페이지
 */
export const KPNIResultPage = ({ resultResponse }: Omit<KPNIResultPageProps, 'showBackPage'>) => {
  return (
    <>
      <KPNIFrontPage resultResponse={resultResponse} />
      <KPNIBackPage />
    </>
  );
};