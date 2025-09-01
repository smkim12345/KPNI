import { Box } from '@mui/material';
import { SectionTitle } from '../UI/SectionTitle';
import { SectionDescription } from '../UI/03_SectionDescription';

export const ProfileSection = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      width: '100%',
      height: '353px',
      backgroundColor: 'rgba(255, 100, 0, 0.3)',
    }}>
      
      {/* 섹션 제목 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        gap: '4px',
        height: '20px'
      }}>
        <SectionTitle 
          sectionNumber={2}
          title="종합 프로파일"
          description={`요약 프로파일은 검사의 상위 척도들의 값을 모아 놓은 프로파일로, 전체적인 결과를 함축적으로 제시합니다.
 상위 척도와 학습지수를 통해 학습자의 전반적인 학습 역량과 상태를 개괄적으로 파악할 수 있습니다.`}
        />
      </Box>

      {/* 제목하단 용어설명 */}
      <SectionDescription 
        items={[
          { text: '※T점수란? ', fontWeight: 'semiBold' },
          { text: '평균이 50, 표준편차가 10점으로 환산된 점수로, 개인의 점수가 모집단 평균(50)에서 얼마나 차이가 나는지를 나타냅니다.', fontWeight: 'normal' }
        ]}
      />

      {/* 종합 프로파일 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        padding: '0px 0px 7px',
        backgroundColor: 'rgba(0, 150, 255, 0.3)',
        height: '250px',
        boxSizing: 'border-box'
      }}>
        {/* 종합 프로파일 내용 */}
      </Box>

      {/* 이상적 지수 섹션 */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0px 0px 10px',
        backgroundColor: 'rgba(150, 0, 255, 0.3)',
        height: '69px'
      }}>
          {/* 이상적 지수 내용 */}
      </Box>
    </Box>
  );
};