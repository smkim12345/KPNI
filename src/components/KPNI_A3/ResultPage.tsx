import { A3Page } from './A3Page';
import { Box } from '@mui/material';
import { InfoSection } from './sections/01_InfoSection';
import { ReliabilitySection } from './sections/02_ReliabilitySection';
import { ProfileSection } from './sections/03_ProfileSection';
import { DetailSection } from './sections/04_DetailSection';
import { ScaleSection } from './sections/05_ScaleSection';

/**
 * K-PNI A3 결과지 메인 페이지
 */
export const KPNIResultPage = () => {
  return (
    <A3Page>
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
      }}>
         </Box>
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
            backgroundColor: 'rgb(255, 230, 230,0.5)',
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
     
    </A3Page>
  );
};