import {
  Box,
  Typography
} from '@mui/material';
import { THEME } from '../theme';
import { SectionTitleBox } from '../UI/B_SectionTitle';
import { SubSectionTitle } from '../UI/B_SubSectionTitle';

/**
 * K-PNI 검사 해석 순서 섹션
 */

export const InterpretationOrderSection = () => {
  return (
    <Box sx={{
      width: '764.1px',
      height: '653.0px',
      //backgroundColor: THEME.colors.scale.childCharacter.light, //위치 확인용
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '13.5px',
      gap: '21.6px',
      boxSizing: 'border-box'
    }}>

       {/* 섹션 제목 */}
       <SectionTitleBox title="2. 검사해석의 순서" />

      {/* 2-1. 신뢰지표 확인/해석 */}
      <Box sx={{
        width: '737.2px',
        height: '197.4px',
        //backgroundColor: 'red',//위치 확인용(지우지말것)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0px 13.5px',
        boxSizing: 'border-box',
        gap: '16.2px'
      }}>
        {/* 검사해석 순서 다이어그램 (Redesigned) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '697.6px',
            gap: '5.4px',
            //backgroundColor: 'red',
          }}
        >
          {[
            { num: '01', text: '신뢰지표 확인 / 해석', bgColor: '#66A247' },
            { num: '02', text: 'T점수의 이해', bgColor: '#7CB261' },
            { num: '03', text: '이상적 양육지수 확인', bgColor: '#93CD76' },
            { num: '04', text: '척도별 소견 확인', bgColor: 'rgba(130, 207, 91, 0.76)' },
          ].map((step, index, arr) => (
            <>
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  flex: 1,
                  height: '40.6px',
                }}
              >
                {/* 텍스트 칩 */}
                <Box
                  sx={{
                    bgcolor: step.bgColor,
                    borderRadius: THEME.borderRadius.sm,
                    padding: '5.4px 5.4px 5.4px 31.1px', // 왼쪽 패딩 증가 (번호 공간 확보)
                    height: '27.0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2.7px 5.4px rgba(0,0,0,0.2)',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: `${THEME.typography.fontSize.sm}px`,
                      fontWeight: THEME.typography.fontWeight.medium,
                      fontFamily: THEME.typography.fontFamily.ohsquare,
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {step.text}
                  </Typography>
                </Box>

                {/* 번호 박스 - 칩 위에 겹쳐서 배치 */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '5.4px',
                    left: '6.8px',
                    width: '27.0px',
                    height: '27.0px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  {/* 번호 텍스트 */}
                  <Typography
                    sx={{
                      color: '#333',
                      fontSize: THEME.typography.fontSize.xxs,
                      fontWeight: 'bold',
                      fontFamily: THEME.typography.fontFamily.ohsquare,
                    }}
                  >
                    {step.num}
                  </Typography>
                </Box>
              </Box>

              {/* 화살표 */}
              {index < arr.length - 1 && (
                <Typography sx={{ fontSize: '27.0px', color: '#B0B0B0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box',paddingBottom: '8.1px' }}>
                  ›
                </Typography>
              )}
            </>
          ))}
        </Box>

        {/* 설명 섹션 부제목 */}
        <SubSectionTitle title="1. 신뢰지표 확인/해석" />

        {/* 신뢰지표 확인해석 설명 */}
        <Box sx={{
          display: 'flex',
          alignSelf: 'stretch',
          gap: '13.5px',
          padding: '0 13.5px',
        }}>
          <Typography sx={{
            ...THEME.B_SECTION_DESCRIPTION,
            flex: 1
          }}>
            검사 결과의 신뢰도를 확인하기 위해 신뢰 지표를 점검해야 합니다. PNI 검사는 피검자가 검사에 성실하게 응답했는지를 평가하기 위해 무응답수, 연속 동일 반응, 반응 일관성, 사회적 바람직성 등 총 5가지 신뢰 지표를 제공합니다.
          </Typography>
        </Box>

        {/* 01_항목별 신뢰지표 */}
        <Box sx={{
          display: 'flex',
          alignSelf: 'stretch',
          gap: '13.5px',
          padding: '0 13.5px',
        }}>
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.normal,
            fontSize: `${THEME.typography.fontSize.sm -1.4}px`,
            lineHeight: 1.375,
            letterSpacing: '2%',
            color: THEME.colors.text,
            flex: 1
          }}>
            <span style={{ fontWeight: THEME.typography.fontWeight.semiBold }}>(1) 무응답수</span>
            {` : 응답하지 않은 문항의 개수가 몇개인지를 확인합니다.('무응답'이 많을수록 결과에 대한 신뢰도가 낮아집니다)`}
            <br />
            <span style={{ fontWeight: THEME.typography.fontWeight.semiBold }}>(2) 연속동일반응</span>
            {` : 연속된 문항에 대해 같은 응답을 지나치게 많이 했는지를 확인합니다. ('아니요' 일때, 신뢰도가 높음)`}
            <br />
            <span style={{ fontWeight: THEME.typography.fontWeight.semiBold }}>(3) 반응일관성</span>
            {` : 유사항 문항들에 대해서 일관된 반응을 보였는지를 확인합니다. ('양호' 일 때, 신뢰도가 높음)`}
            <br />
            <span style={{ fontWeight: THEME.typography.fontWeight.semiBold }}>(4) 부주의성</span>
            {` : 문항을 잘 읽고 의미를 이해하고 응답했는지를 확인합니다. (‘아니오’ 일 때, 신뢰도가 높음)`}
            <br />
            <span style={{ fontWeight: THEME.typography.fontWeight.semiBold }}>(5) 사회적 바람직성</span>
            {` : 검사 문항들에 대해서 과장되거나 방어적인 반응을 보였는지 확인합니다. (‘양호’ 일 때, 신뢰도가 높음)`}
          </Typography>
        </Box>
      </Box>

      {/* 2-2. T점수의 이해 */}
      <Box
        sx={{
          width: '737.2px',
          height: '177.1px',
          //backgroundColor: 'red', //위치 확인용(지우지말것)
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0px 13.5px',
          boxSizing: 'border-box',
          gap: '24.3px',
          position: 'relative',
        }}
      >
        {/* 설명 섹션 부제목 */}
        <SubSectionTitle title="2. T점수의 이해" />

        {/* 내용 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '473.2px',
            //backgroundColor: 'red', //영역 확인용
            padding: '0 13.5px',
          }}
        >
          <Typography sx={{
            ...THEME.B_SECTION_DESCRIPTION,
            width: '493.2px',
          }}>
          
            {` T점수는 원점수를 평균 50, 표준편차 10인 정규분포로 변환한 값으로, 비교와 해석을 쉽게 하기 위해 사용됩니다. Z점수를 기반으로 변환되며, T=50은 50%, T=60은 약 84%, T=40은 약 16% 백분위를 의미합니다. 심리검사, 교육평가, 연구 등에서 데이터 분석과 비교를 위해 널리 활용됩니다.`}
          </Typography>
          <img
            src={'/src/images/2_tscore.jpg'}
            alt="T점수 그래프"
            style={{
              width: '216.3px',
              height: 'auto',
              objectFit: 'contain',
              position: 'absolute',
              right: '13.5px',
              top: '51.4px',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />
        </Box>

        {/* 테이블 */}
        <Box sx={{ width: '669.2px', height: 'auto', padding: '0 13.5px' }}>
          {/* 테이블 헤더 */}
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {[
              { text: 'T점수', bgColor: '#66A247', color: '#FBFBFB' },
              { text: '25', bgColor: 'hsl(105, 25%, 80%)' },
              { text: '30', bgColor: 'hsl(105, 30%, 75%)' },
              { text: '35', bgColor: 'hsl(105, 35%, 70%)' },
              { text: '40', bgColor: 'hsl(105, 37%, 65%)' },
              { text: '45', bgColor: 'hsl(105, 40%, 60%)' },
              { text: '50', bgColor: 'hsl(105, 45%, 55%)' },
              { text: '55', bgColor: 'hsl(105, 40%, 60%)' },
              { text: '60', bgColor: 'hsl(105, 37%, 65%)' },
              { text: '65', bgColor: 'hsl(105, 35%, 70%)' },
              { text: '70', bgColor: 'hsl(105, 30%, 75%)' },
              { text: '75', bgColor: 'hsl(105, 25%, 80%)' },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  padding: '4.1px',
                  backgroundColor: item.bgColor,
                  border: '0.7px solid #868686',
                  borderTopLeftRadius: index === 0 ? '6.8px' : 0,
                  borderTopRightRadius: index === 11 ? '6.8px' : 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: `${THEME.typography.fontSize.sm - 1}px`,
                    color: item.color || THEME.colors.text,
                    textAlign: 'center',
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
          {/* 테이블 바디 */}
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {[
              { text: '백분위', bgColor: '#66A247', color: '#FBFBFB' },
              { text: '0.6%' },
              { text: '2.3%' },
              { text: '6.7%' },
              { text: '15.9%' },
              { text: '30.9%' },
              { text: '50%' },
              { text: '69.1%' },
              { text: '84.1%' },
              { text: '93.3%' },
              { text: '97.7%' },
              { text: '99.4%' },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  padding: '4.1px',
                  backgroundColor: item.bgColor,
                  border: '0.7px solid #868686',
                  borderBottomLeftRadius: index === 0 ? '6.8px' : 0,
                  borderBottomRightRadius: index === 11 ? '6.8px' : 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: item.bgColor
                      ? THEME.typography.fontWeight.bold
                      : THEME.typography.fontWeight.normal,
                    fontSize: `${THEME.typography.fontSize.sm - 1}px`,
                    color: item.color || THEME.colors.text,
                    textAlign: 'center',
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* 2-3. 이상적 양육지수 확인 */}
      <Box sx={{
        width: '737.2px',
        height: '158.2px',
        //backgroundColor: 'red',//위치 확인용(지우지말것)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0 13.5px ',
        boxSizing: 'border-box',
        gap: '13.5px'
      }}>

          <SubSectionTitle title="3. 이상적 양육지수 확인" />

        {/* IPQ 설명 텍스트 */}
        <Box sx={{
          display: 'flex',
          alignSelf: 'stretch',
          padding: '0 13.5px',
        }}>
          <Typography sx={{
            ...THEME.B_SECTION_DESCRIPTION,
            flex: 1,
          }}>
            이상적양육지수(IPQ)는 Ideal Parenting Quotient의 약자로, 이상적인 부모의 양육태도의 정도를 나타내는 지수입니다. 지수점수는 100점 평균에 15점의 표준편차를 가진 표준화 된 점수로, 점수가 높을수록 이상적인 양육태도를 가지고 있음을 의미하고 있습니다.
          </Typography>
        </Box>

        {/* IPQ 테이블 */}
        <Box sx={{ width: '669.2px', padding: '0 13.5px'}}>
          {/* IPQ 데이터 정의 */}
          {(() => {
            const ipqHeaders = [
              { text: '구분', bgColor: '#66A247', color: '#FBFBFB' },
              { text: '낮음', bgColor: 'hsl(105, 20%, 85%)' },
              { text: '다소낮음', bgColor: 'hsl(105, 25%, 75%)' },
              { text: '보통', bgColor: 'hsl(105, 30%, 65%)' },
              { text: '높음', bgColor: 'hsl(105, 35%, 55%)' },
              { text: '매우 높음', bgColor: 'hsl(105, 40%, 45%)' },
            ];

            const ipqData = [
              {
                header: '양육지수(IPQ)',
                values: ['77이하', '77초과~92이하', '92초과~108이하', '108초과~123이하', '123초과']
              },
              {
                header: '백분위(%)',
                values: ['약 6% 이하', '약 7%~30%', '약 30%~70%', '약 70%~94%', '약 94%이상']
              }
            ];

            return (
              <>
                {/* 테이블 헤더 */}
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                  {ipqHeaders.map((header, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        padding: '4.1px',
                        backgroundColor: header.bgColor,
                        border: '0.7px solid #868686',
                        borderTopLeftRadius: index === 0 ? '6.8px' : 0,
                        borderTopRightRadius: index === ipqHeaders.length - 1 ? '6.8px' : 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: THEME.typography.fontFamily.pretendard,
                          fontWeight: THEME.typography.fontWeight.bold,
                          fontSize: `${THEME.typography.fontSize.sm - 1}px`,
                          color: header.color || THEME.colors.text,
                          textAlign: 'center',
                          lineHeight: '1.193em',
                        }}
                      >
                        {header.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                {/* 테이블 바디 */}
                {ipqData.map((row, rowIndex) => (
                  <Box key={rowIndex} sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <Box
                      sx={{
                        flex: 1,
                        padding: '4.1px',
                        backgroundColor: '#66A247',
                        border: '0.7px solid #868686',
                        borderBottomLeftRadius: rowIndex === ipqData.length - 1 ? '6.8px' : 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: THEME.typography.fontFamily.pretendard,
                          fontWeight: THEME.typography.fontWeight.semiBold,
                          fontSize: `${THEME.typography.fontSize.sm - 1}px`,
                          color: '#FBFBFB',
                          textAlign: 'center',
                          lineHeight: '1.193em',
                        }}
                      >
                        {row.header}
                      </Typography>
                    </Box>
                    {row.values.map((value, colIndex) => (
                      <Box
                        key={colIndex}
                        sx={{
                          flex: 1,
                          padding: '4.1px',
                          border: '0.7px solid #868686',
                          borderBottomRightRadius:
                            rowIndex === ipqData.length - 1 && colIndex === row.values.length - 1 ? '6.8px' : 0,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: THEME.typography.fontFamily.pretendard,
                            fontWeight: THEME.typography.fontWeight.normal,
                            fontSize: `${THEME.typography.fontSize.sm - 1}px`,
                            color: THEME.colors.text,
                            textAlign: 'center',
                            lineHeight: '1.193em',
                          }}
                        >
                          {value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ))}
              </>
            );
          })()}
        </Box>

      </Box>

    </Box>
  );
};