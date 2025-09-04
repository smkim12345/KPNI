import {
  Box,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import { THEME } from '../theme';

/**
 * K-PNI 검사 해석 순서 섹션
 */
// 테이블 데이터 정의
const TABLE_HEADERS = [
  { text: '구분', bgColor: '#66A247', color: '#FBFBFB' },
  { text: '낮음', bgColor: 'rgba(201, 237, 183, 0.7)' },
  { text: '다소낮음', bgColor: 'rgba(188, 230, 167, 0.7)' },
  { text: '보통', bgColor: 'rgba(174, 223, 139, 0.7)' },
  { text: '높음', bgColor: 'rgba(152, 215, 115, 0.7)' },
  { text: '매우 높음', bgColor: 'rgba(130, 207, 91, 0.76)' },
];

const TABLE_DATA = [
  {
    header: '양육지수(IPQ)',
    values: ['77이하', '77초과~92이하', '92초과~108이하', '108초과~123이하', '123초과']
  },
  {
    header: '백분위(%)',
    values: ['약 6% 이하', '약 7%~30%', '약 30%~70%', '약 70%~94%', '약 94%이상']
  }
];

export const InterpretationOrderSection = () => {
  return (
    <Box sx={{
      width: '565px',
      height: '483px',
      //backgroundColor: THEME.colors.scale.childCharacter.light, //위치 확인용(지우지말것)
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '10px',
      gap: '16px',
      boxSizing: 'border-box'
    }}>

       {/* 섹션 제목 */}
       <Box sx={{
        backgroundColor: THEME.colors.primary,
        borderRadius: '0px 30px 30px 0px',
        padding: '0px 10px 0px 5px',
        height: '19px',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
      }}>
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquare,
          fontWeight: THEME.typography.fontWeight.normal,
          fontSize: `${THEME.typography.fontSize.lg}px`,
          lineHeight: 1.5,
          color: THEME.colors.mainWhite,
        }}>
          2. 검사해석의 순서
        </Typography>
      </Box>

      {/* 2-1. 신뢰지표 확인/해석 */}
      <Box sx={{
        width: '545px',
        height: '146px',
        //backgroundColor: 'red',//위치 확인용(지우지말것)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0px 10px',
        boxSizing: 'border-box',
        gap: '12px'
      }}>
        {/* 검사해석 순서 다이어그램 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2px'
        }}>
          {[
            { num: '01', bgColor: '#66A247', text: '신뢰지표 확인 / 해석' },
            { num: '02', bgColor: '#7CB261', text: 'T점수의 이해' },
            { num: '03', bgColor: '#93CD76', text: '이상적 양육지수 확인' },
            { num: '04', bgColor: 'rgba(130, 207, 91, 0.76)', text: '척도별 소견 확인' }
          ].map((item, index) => (
            <Box key={index} sx={{
              position: 'relative',
              width: index === 0 ? '104.5px' : '115.46px',
              height: '20px',
              backgroundColor: item.bgColor,
              borderRadius: index === 0 ? '10px 0px 0px 10px' : '2px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.ohsquare,
                fontWeight: THEME.typography.fontWeight.normal,
                fontSize: '8px',
                lineHeight: 1.268,
                color: THEME.colors.text,
                position: 'absolute',
                left: index === 0 ? '5px' : '15px',
                top: '5px'
              }}>
                {item.num}
              </Typography>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.ohsquare,
                fontWeight: THEME.typography.fontWeight.normal,
                fontSize: '8px',
                lineHeight: 1.268,
                color: THEME.colors.text,
                position: 'absolute',
                left: index === 0 ? '18px' : '28px',
                top: '5px',
                width: '83px',
                textAlign: 'center'
              }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 설명 섹션 부제목 */}
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquare,
          fontWeight: THEME.typography.fontWeight.normal,
          fontSize: '11px',
          lineHeight: 1.268,
          color: '#274E13',
          width: '545px'
        }}>
          1. 신뢰지표 확인/해석
        </Typography>

        {/* 신뢰지표 확인해석 설명 */}
        <Box sx={{
          display: 'flex',
          alignSelf: 'stretch',
          gap: '10px'
        }}>
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.medium,
            fontSize: `${THEME.typography.fontSize.sm}px`,
            lineHeight: 1.189,
            color: THEME.colors.text,
            flex: 1
          }}>
            검사 결과의 신뢰도를 확인하기 위해 신뢰 지표를 점검해야 합니다. PNI 검사는 피검자가 검사에 성실하게 응답했는지를 평가하기 위해 무응답수, 연속 동일 반응, 반응 일관성, 사회적 바람직성 등 총 5가지 신뢰 지표를 제공합니다.
          </Typography>
        </Box>

        {/* 01_항목별 신뢰지표 */}
        <Box sx={{
          display: 'flex',
          alignSelf: 'stretch',
          gap: '10px'
        }}>
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.normal,
            fontSize: '8px',
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
          width: '545px',
          height: '131px',
          //backgroundColor: 'red', //위치 확인용(지우지말것)
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '0px 10px',
          boxSizing: 'border-box',
          gap: '18px',
          position: 'relative',
        }}
      >
        {/* 설명 섹션 부제목 */}
        <Typography
          sx={{
            fontFamily: THEME.typography.fontFamily.ohsquare,
            fontWeight: THEME.typography.fontWeight.normal,
            fontSize: '11px',
            lineHeight: 1.268,
            color: '#274E13',
            //backgroundColor: THEME.colors.primary,
          }}
        >
          2. T점수의 이해
        </Typography>

        {/* 내용 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.medium,
              fontSize: '9px',
              lineHeight: 1.189,
              color: THEME.colors.text,
              width: '365px',
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all',
            }}
          >
            {` T점수는 원점수를 평균 50, 표준편차 10인 정규분포로 변환한 값으로, 비교와 해석을 쉽게 하기 위해 사용됩니다. Z점수를 기반으로 변환되며, T=50은 50%, T=60은 약 84%, T=40은 약 16% 백분위를 의미합니다. 심리검사, 교육평가, 연구 등에서 데이터 분석과 비교를 위해 널리 활용됩니다.`}
          </Typography>
          <img
            src={'/src/images/3-7.png'}
            alt="T점수 그래프"
            style={{
              width: '160px',
              height: 'auto',
              objectFit: 'contain',
              position: 'absolute',
              right: '10px',
              top: '38px',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />
        </Box>

        {/* 테이블 */}
        <Box sx={{ width: '504px', height: '63px' }}>
          {/* 테이블 헤더 */}
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {[
              { text: 'T점수', bgColor: '#66A247', color: '#FBFBFB' },
              { text: '25', bgColor: 'rgba(201, 237, 183, 0.7)' },
              { text: '30', bgColor: 'rgba(188, 230, 167, 0.7)' },
              { text: '35', bgColor: 'rgba(174, 223, 139, 0.7)' },
              { text: '40', bgColor: 'rgba(152, 215, 115, 0.7)' },
              { text: '45', bgColor: 'rgba(130, 207, 91, 0.76)' },
              { text: '50', bgColor: '#93CD76' },
              { text: '55', bgColor: '#7CB261' },
              { text: '60', bgColor: '#7CB261' },
              { text: '65', bgColor: '#66A247' },
              { text: '70', bgColor: '#66A247' },
              { text: '75', bgColor: '#4A7E2F' },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '42px',
                  padding: '5px',
                  backgroundColor: item.bgColor,
                  border: '0.7px solid #868686',
                  borderTopLeftRadius: index === 0 ? '5px' : 0,
                  borderTopRightRadius: index === 11 ? '5px' : 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: '9px',
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
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
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
                  width: '42px',
                  padding: '5px',
                  backgroundColor: item.bgColor,
                  border: '0.7px solid #868686',
                  borderBottomLeftRadius: index === 0 ? '5px' : 0,
                  borderBottomRightRadius: index === 11 ? '5px' : 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: item.bgColor
                      ? THEME.typography.fontWeight.bold
                      : THEME.typography.fontWeight.normal,
                    fontSize: '9px',
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
        width: '545px',
        height: '117px',
        //backgroundColor: 'red',//위치 확인용(지우지말것)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '0 10px ',
        boxSizing: 'border-box',
        gap: '7px'
      }}>

          <Typography
          sx={{
            fontFamily: THEME.typography.fontFamily.ohsquare,
            fontWeight: THEME.typography.fontWeight.normal,
            fontSize: '11px',
            lineHeight: 1.268,
            color: '#274E13',
            //backgroundColor: THEME.colors.primary,
          }}
        >
          3. 이상적 양육지수 확인
        </Typography>

        {/* IPQ 설명 텍스트 */}
        <Box sx={{
          display: 'flex',
          alignSelf: 'stretch',
          gap: '10px',
          padding: '0 10px',
        }}>
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: 500,
            fontSize: '9px',
            lineHeight: '1.189em',
            color: THEME.colors.text,
            flex: 1,
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all'
          }}>
            이상적양육지수(IPQ)는 Ideal Parenting Quotient의 약자로, 이상적인 부모의 양육태도의 정도를 나타내는 지수입니다. 지수점수는 100점 평균에 15점의 표준편차를 가진 표준화 된 점수로, 점수가 높을수록 이상적인 양육태도를 가지고 있음을 의미하고 있습니다.
          </Typography>
        </Box>

        {/* IPQ 테이블 */}
        <Table sx={{
          width: '504px',
          borderCollapse: 'separate',
          borderSpacing: 0,
          //backgroundColor: 'blue',
          '& .MuiTableCell-root': {
            border: '0.7px solid #868686',
            padding: '5px',
            textAlign: 'center',
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontSize: '9px',
            lineHeight: '1.193em',
          }
        }}>
          <TableHead>
            <TableRow>
              {TABLE_HEADERS.map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    backgroundColor: header.bgColor,
                    color: header.color || THEME.colors.text,
                    fontWeight: 700,
                    fontSize: '10px !important',
                    width: '84px',
                    borderTopLeftRadius: index === 0 ? '5px' : 0,
                    borderTopRightRadius: index === TABLE_HEADERS.length - 1 ? '5px' : 0,
                  }}
                >
                  {header.text}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {TABLE_DATA.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell
                  sx={{
                    backgroundColor: '#66A247',
                    color: '#FBFBFB',
                    fontWeight: 600,
                    borderBottomLeftRadius: rowIndex === TABLE_DATA.length - 1 ? '5px' : 0,
                  }}
                >
                  {row.header}
                </TableCell>
                {row.values.map((value, colIndex) => (
                  <TableCell
                    key={colIndex}
                    sx={{
                      borderBottomRightRadius:
                        rowIndex === TABLE_DATA.length - 1 && colIndex === row.values.length - 1 ? '5px' : 0,
                    }}
                  >
                    {value}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Box>

    </Box>
  );
};