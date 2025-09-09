import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { THEME } from './theme';
import { InfoSection } from './sections/00_InfoSection';
import { ReliabilitySection } from './sections/01_ReliabilitySection';
import { ProfileSection } from './sections/02_ProfileSection';
import { DetailSection } from './sections/03_DetailSection';
import { ScaleSection } from './sections/04_ScaleSection';
import type { ResultPageProps } from '../dtos/ResultTypes';
import { BackTitleSection } from './sections/B00_SectionTitle';
import { TestDescriptionSection } from './sections/B01_TestDescriptionSection';
import { InterpretationOrderSection } from './sections/B02_InterpretationOrderSection';
import { ScaleOpinionSection } from './sections/B02_ScaleOpinionSection';
import { SolutionSection } from './sections/B03_SolutionSection';
import { BackFooterSection } from './sections/B04_BackFooterSection';
import { useRef } from 'react';
import A3Page from './print/A3Page';
import { PdfDownloadButton } from './print/PdfDownloadButton';

// 초록색 외곽 테두리 두께 조절 용
const OuterGreenBox = styled(Box)({
  width: `${1610.232 * 1.352}px`,   // 2177.834px
  height: `${1145.144 * 1.352}px`,  // 1548.515px
  backgroundColor: THEME.colors.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FrameBox = styled(Box)({
  position: 'relative',
  width: `${1610.232 * 1.352}px`,   // 2177.834px
  height: `${1145.144 * 1.352}px`,  // 1548.515px
  backgroundColor: THEME.colors.primary,
});

const CornerBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: `${185 * 1.352}px`,      // 250.12px
  height: `${403 * 1.352}px`,     // 544.856px
  backgroundColor: THEME.colors.primary,
  borderRadius: `0px 0px ${52 * 1.352}px 0px`, // 70.304px
  zIndex: 1,
});

/**
 * K-PNI A3 결과지 앞면 페이지
 */
const FrontPage = ({ resultResponse }: ResultPageProps) => {
  return (
      <OuterGreenBox>
        <FrameBox>
          {/* 좌상단 둥근 모서리 */}
          <CornerBox />

          {/* 바깥테두리 하단 박스 - 둥근모서리 채우기용 */}
          <Box sx={{
            position: 'absolute',
            left: `${100 * 1.352}px`,      // 40.56px
            top: `${349 * 1.352}px`,      // 471.848px
            width: `${85 * 1.352}px`,    // 209.56px
            height: `${56 * 1.352}px`,    // 94.64px
            backgroundColor: THEME.colors.gray,
            zIndex: 1.5
          }} />

          {/* 메인 흰 배경 */}
          <Box sx={{
            position: 'absolute',
            left: `${185 * 1.352}px`,     // 250.12px
            top: `${30 * 1.352}px`,       // 40.56px
            width: `${976 * 1.352}px`,    // 1319.552px
            height: `${787 * 1.352}px`,   // 1064.424px
            backgroundColor: THEME.colors.background,
            borderRadius: `${15 * 1.352}px ${15 * 1.352}px ${15 * 1.352}px 0px`, // 20.28px
            zIndex: 2
          }} />

          {/* 3개 메인 섹션 레이아웃 */}
          <Box sx={{
            position: 'absolute',
            left: `${30 * 1.352}px`,      // 40.56px
            top: `${30 * 1.352}px`,       // 40.56px
            display: 'flex',
            height: `${787 * 1.352}px`,   // 1064.424px
            zIndex: 3,
            //backgroundColor: 'rgb(245, 245, 245,0.8)',
          }}>

          {/* 좌측 정보 섹션 */}
          <Box sx={{
            width: `${155 * 1.352}px`,    // 209.56px
            height: `${787 * 1.352}px`,   // 1064.424px
            boxSizing: 'border-box',
            //backgroundColor: 'rgb(245, 245, 245,0.5)',
          }}>
            <InfoSection participant={resultResponse?.participant} />
          </Box>
          
          {/* 왼쪽 메인 섹션 (1,2,3번 섹션들) */}
          <Box sx={{
            width: `${484 * 1.352}px`,    // 659.776px
            height: `${787 * 1.352}px`,   // 1064.424px
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: 'rgb(245, 245, 245,0.5)',
            boxSizing: 'border-box',
            padding: `${10 * 1.352}px 0px ${10 * 1.352}px ${10 * 1.352}px` // 13.52px
          }}>
            <ReliabilitySection trustIndicators={resultResponse?.resultData?.trustIndicators} />
            <ProfileSection parentScales={resultResponse?.resultData?.parentScales} />
            <DetailSection subScales={resultResponse?.resultData?.subScales} />
          </Box>
          
          {/* 오른쪽 메인 섹션 (4번 섹션) */}
          <Box sx={{
            width: `${488 * 1.352}px`,    // 659.776px
            height: `${787 * 1.352}px`,   // 1064.424px
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: 'rgb(230, 255, 230,0.8)',
            boxSizing: 'border-box',
            padding: `${10 * 1.352}px 0 ${10 * 1.352}px ${10 * 1.352}px` // 13.52px
          }}>
            <ScaleSection 
              parentScales={resultResponse?.resultData?.parentScales}
              scaleInterpretations={resultResponse?.resultData?.scaleInterpretations}
            />
          </Box>
            
          </Box>
        </FrameBox>
      </OuterGreenBox>
  );
};

/**
 * K-PNI A3 결과지 뒷면 페이지
 */
const KPNIBackPage = () => {
  return (
      <OuterGreenBox>
        <FrameBox>
          {/* 왼쪽 흰색 배경 */}
          <Box sx={{
            position: 'absolute',
            left: `${30 * 1.352}px`,     // 40.56px
            top: `${101 * 1.352}px`,     // 136.552px
            width: `${433 * 1.352}px`,   // 584.064px
            height: `${716 * 1.352}px`,  // 968.032px
            backgroundColor: THEME.colors.background,
            borderRadius: `${15 * 1.352}px 0px 0px ${15 * 1.352}px`, // 20.28px
            zIndex: 2
          }} />

          {/* 오른쪽 흰색 배경 */}
          <Box sx={{
            position: 'absolute',
            left: `${462 * 1.352}px`,    // 624.624px
            top: `${30 * 1.352}px`,      // 40.56px
            width: `${699 * 1.352}px`,   // 945.048px
            height: `${787 * 1.352}px`,  // 1064.424px
            backgroundColor: THEME.colors.background,
            borderRadius: `${15 * 1.352}px ${15 * 1.352}px ${15 * 1.352}px 0px`, // 20.28px
            zIndex: 2
          }} />

          {/* 제목 흰색 배경 */}
          <Box sx={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: `${462 * 1.352}px`,   // 624.624px
            height: `${101 * 1.352}px`,  // 136.552px
            backgroundColor: THEME.colors.primary,
            borderRadius: `0 0 ${15 * 1.352}px 0`, // 20.28px
            zIndex: 1
          }} />

          {/* 바깥테두리 하단 박스 - 둥근모서리 채우기용 */}
          <Box sx={{
            position: 'absolute',
            left: '590px',
            top: '100px',
            width: `${50 * 1.352}px`,   // 624.624px
            height: `${51 * 1.352}px`,  // 136.552px
            backgroundColor: THEME.colors.background,
            zIndex: 1.5
          }} />

          {/* 왼쪽 + 오른쪽 + 푸터 레이아웃 */}
          <Box sx={{
            position: 'absolute',
            left: `${30 * 1.352}px`,     // 40.56px
            top: `${30 * 1.352}px`,      // 40.56px
            display: 'flex',
            flexDirection: 'column',
            width: `${1131 * 1.352}px`,  // 1530.112px
            height: `${787 * 1.352}px`,  // 1064.424px
            zIndex: 3,
            //backgroundColor: 'rgb(24, 245, 245,0.4)',
          }}>

            {/* 왼쪽 + 오른쪽 메인 섹션(푸터 제외) */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              height: `${787 * 1.352 -70}px`,
              //backgroundColor: 'rgb(24, 245, 25,0.4)',
            }}>
              {/* 왼쪽 메인 섹션(제목, 2-1, 2-2, 2-3번) */}
                <Box sx={{
                  width: `${565 * 1.352}px`,   // 763.88px
                  height: `${787 * 1.352 -70}px`,  // 1064.424px
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
                  width: `${565 * 1.352}px`,   // 763.88px
                  height: `${787 * 1.352 - 70}px`,  // 1064.424px
                  display: 'flex',
                  flexDirection: 'column',
                  //backgroundColor: 'rgb(245, 245, 25,0.5)',
                  boxSizing: 'border-box',
                }}>
                  <ScaleOpinionSection/>
                  <SolutionSection/>
                </Box>
              </Box>
            {/* back_footer 섹션 */}
            <Box sx={{
              width: '100%',
              height: '70px',
              zIndex: 3,
              //backgroundColor: 'rgb(245, 24, 245,0.4)',
            }}>
              <BackFooterSection />
            </Box>
          </Box>
        </FrameBox>
      </OuterGreenBox>
  );
};

/**
 * K-PNI A3 결과지 전체 페이지
 */
export const ResultPage = ({ resultResponse }: Omit<ResultPageProps, 'showBackPage'>) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Box className="no-print" sx={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
        <PdfDownloadButton isA3 contentRef={contentRef} downloadFileName="KPNI" />
      </Box>
      <div id="printArea" data-print-size="a3">
        <div ref={contentRef} className="result-component">
          <A3Page>
            <FrontPage resultResponse={resultResponse} />
          </A3Page>
          <A3Page>
            <KPNIBackPage />
          </A3Page>
        </div>
      </div>
    </>
  );
};