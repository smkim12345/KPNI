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
  width: '1610.2px',
  height: '1144.9px',
  backgroundColor: THEME.colors.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FrameBox = styled(Box)({
  position: 'relative',
  width: '1610.2px',
  height: '1144.9px',
  backgroundColor: THEME.colors.primary,
});

const CornerBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '250.1px',
  height: '544.9px',
  backgroundColor: THEME.colors.primary,
  borderRadius: `0px 0px 70.3px 0px`,
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
            left: '135.2px',
            top: '471.8px',
            width: '114.9px',
            height: '75.7px',
            backgroundColor: THEME.colors.lightGray,
            zIndex: 1.5
          }} />

          {/* 메인 흰 배경 */}
          <Box sx={{
            position: 'absolute',
            left: '250.1px',
            top: '40.6px',
            width: '1319.6px',
            height: '1064.4px',
            backgroundColor: THEME.colors.background,
            borderRadius: '20.3px 20.3px 20.3px 0px',
            zIndex: 2
          }} />

          {/* 3개 메인 섹션 레이아웃 */}
          <Box sx={{
            position: 'absolute',
            left: '40.6px',
            top: '40.6px',
            display: 'flex',
            height: '1064.4px',
            zIndex: 3,
            //backgroundColor: 'rgb(245, 245, 245,0.8)',
          }}>

          {/* 좌측 정보 섹션 */}
          <Box sx={{
            width: '209.6px',
            height: '1064.4px',
            boxSizing: 'border-box',
            //backgroundColor: 'rgb(245, 245, 245,0.5)',
          }}>
            <InfoSection participant={resultResponse?.participant} />
          </Box>

          {/* 왼쪽 메인 섹션 (1,2,3번 섹션들) */}
          <Box sx={{
            width: '654.4px',
            height: '1064.4px',
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: 'rgb(245, 245, 245,0.5)',
            boxSizing: 'border-box',
            padding: '13.5px 0px 13.5px 13.5px'
          }}>
            <ReliabilitySection trustIndicators={resultResponse?.resultData?.trustIndicators} />
            <ProfileSection parentScales={resultResponse?.resultData?.parentScales} />
            <DetailSection subScales={resultResponse?.resultData?.subScales} />
          </Box>

          {/* 오른쪽 메인 섹션 (4번 섹션) */}
          <Box sx={{
            width: '659.8px',
            height: '1064.4px',
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: 'rgb(230, 255, 230,0.8)',
            boxSizing: 'border-box',
            padding: '13.5px 0 13.5px 13.5px'
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
            left: '40.6px',
            top: '136.6px',
            width: '585.4px',
            height: '968.0px',
            backgroundColor: THEME.colors.background,
            borderRadius: '20.3px 0px 0px 20.3px',
            zIndex: 2
          }} />

          {/* 오른쪽 흰색 배경 */}
          <Box sx={{
            position: 'absolute',
            left: '624.6px',
            top: '40.6px',
            width: '945.0px',
            height: '1064.4px',
            backgroundColor: THEME.colors.background,
            borderRadius: '20.3px 20.3px 20.3px 0px',
            zIndex: 2
          }} />

          {/* 제목 흰색 배경 */}
          <Box sx={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '624.6px',
            height: '136.6px',
            backgroundColor: THEME.colors.primary,
            borderRadius: `0 0 20.3px 0`,
            zIndex: 1
          }} />

          {/* 바깥테두리 하단 박스 - 둥근모서리 채우기용 */}
          <Box sx={{
            position: 'absolute',
            left: '590px',
            top: '100px',
            width: '67.6px',
            height: '69.0px',
            backgroundColor: THEME.colors.background,
            zIndex: 1.5
          }} />

          {/* 왼쪽 + 오른쪽 + 푸터 레이아웃 */}
          <Box sx={{
            position: 'absolute',
            left: '40.6px',
            top: '40.6px',
            display: 'flex',
            flexDirection: 'column',
            width: '1528.7px',
            height: '1064.4px',
            zIndex: 3,
            //backgroundColor: 'rgb(24, 245, 245,0.4)',
          }}>

            {/* 왼쪽 + 오른쪽 메인 섹션(푸터 제외) */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              height: '994.4px',
              //backgroundColor: 'rgb(24, 245, 25,0.4)',
            }}>
              {/* 왼쪽 메인 섹션(제목, 2-1, 2-2, 2-3번) */}
                <Box sx={{
                  width: '763.9px',
                  height: '994.4px',
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
                  width: '763.9px',
                  height: '994.4px',
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