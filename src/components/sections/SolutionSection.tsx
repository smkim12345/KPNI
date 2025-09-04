import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

/**
 * K-PNI 솔루션 섹션
 */
export const SolutionSection = () => {
  return (
    <Box sx={{
      width: '566px',
      height: '287px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '10px',
      boxSizing: 'border-box',
      gap: '10px'
    }}>
      {/* 섹션 제목 */}
      <Box sx={{
        backgroundColor: THEME.colors.primary,
        borderRadius: '0px 30px 30px 0px',
        padding: '0px 10px 0px 5px',
        height: '19px',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'flex-start'
      }}>
        <Typography sx={{
          fontFamily: THEME.typography.fontFamily.ohsquare,
          fontWeight: THEME.typography.fontWeight.normal,
          fontSize: `${THEME.typography.fontSize.lg}px`,
          lineHeight: 1.5,
          color: THEME.colors.mainWhite,
        }}>
          3. 좋은 부모가 되기위한 여정
        </Typography>
      </Box>

      {/* 메인 컨텐츠 영역 */}
      <Box sx={{
        display: 'flex',
        alignSelf: 'stretch',
        padding: '0 10px',
        flex: 1
      }}>
        {/* 왼쪽 영역 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '342px',
          gap: '16px'
        }}>

          {/* 좋은 부모의 특징 섹션 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '293px',
            gap: '10px'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.ohsquare,
              fontWeight: THEME.typography.fontWeight.normal,
              fontSize: '11px',
              lineHeight: '1.268em',
              color: '#274E13',
              //backgroundColor: 'red'
            }}>
              1. 좋은 부모의 특징
            </Typography>
              {/* 아이콘들 */}
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '5px',
                width: '270px',
                height: '57px',
                alignItems: 'center',
                //backgroundColor: 'blue' //영역 확인용
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <img src="/src/images/3-1-1.png" alt="존중 아이콘" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: '8px',
                    lineHeight: '1.2em',
                    color: THEME.colors.text,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}>
                    존중
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <img src="/src/images/3-1-2.png" alt="공감 아이콘" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: '8px',
                    lineHeight: '1.2em',
                    color: THEME.colors.text,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}>
                    공감
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <img src="/src/images/3-1-3.png" alt="일관성 아이콘" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: '8px',
                    lineHeight: '1.2em',
                    color: THEME.colors.text,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}>
                    일관성
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <img src="/src/images/3-1-4.png" alt="회복력 아이콘" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: '8px',
                    lineHeight: '1.2em',
                    color: THEME.colors.text,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}>
                    회복력
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <img src="/src/images/3-1-5.png" alt="성장 아이콘" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: '8px',
                    lineHeight: '1.2em',
                    color: THEME.colors.text,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}>
                    성장
                  </Typography>
                </Box>
              </Box>

              {/* 설명 텍스트들 */}
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'flex-start',
                //backgroundColor: 'red',
                width: '100%',
                height: '60px'
              }}>
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: 300,
                  fontSize: '9px',
                  lineHeight: '1.33em',
                  color: THEME.colors.text,
                  whiteSpace: 'pre-line'
                }}>
                  {`❖ 존중 : 자녀를 '작은 어른'이 아닌, 고유한 인격체로 존중합니다.
❖ 공감 : 자녀의 말에 반응하고, 감정을 읽고, 마음을 헤아립니다.
❖ 일관성 : 기준이 흔들리지 않도록, 자녀가 예측할 수 있는 반응을 보여줍니다.
❖ 회복력 : 갈등이 생겼을 때 대화를 통해 관계를 다시 회복할 수 있습니다.
❖ 성장 : 자녀와 함께 배우고, 함께 성장하려는 자세를 가지고 있습니다.`}
                </Typography>
              </Box>
          </Box>

          {/* 완벽한 부모에 대한 생각 섹션 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '293px',
            gap: '5px'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.ohsquare,
              fontWeight: THEME.typography.fontWeight.normal,
              fontSize: '11px',
              lineHeight: '1.268em',
              color: '#274E13'
            }}>
              2. 완벽한 부모에 대한 생각 내려 놓기
            </Typography>

            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: 300,
              fontSize: '9px',
              lineHeight: '1.193em',
              color: THEME.colors.text,
              whiteSpace: 'pre-line',
              wordBreak: 'keep-all'
            }}>
              {`세상에는 '완벽한 부모'는 없습니다.
좋은 부모는 실수를 안 하는 부모가 아니라, 실수를 인정하고 다시 관계를 회복하려는 부모입니다. 좋은 부모는 자신의 부족함을 인정하고, 부족한 자신의 모습으로 인해 영향을 받는 자녀의 마음을 늘 헤아리고 생각하는 부모입니다. 
양육은 정답이 아니라'함께 만들어가는 길'입니다.`}
            </Typography>
          </Box>
        </Box>

        {/* 오른쪽 영역 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          flex: 1
        }}>
          {/* 가족 이미지 */}
          <Box sx={{
            width: '168px',
            height: '168px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/src/images/3_family.jpg"
              alt="가족 이미지"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </Box>

          {/* 인용구 박스 */}
          <Box sx={{
            backgroundColor: '#E2E2E2',
            borderRadius: '10px',
            padding: '7px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '200px'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: THEME.typography.fontWeight.bold,
                fontSize: '11px',
                lineHeight: '1.268em',
                color: THEME.colors.text,
                textAlign: 'center',
                whiteSpace: 'pre-line'
              }}>
                {`"아이를 위한 가장 좋은 선물은,
스스로를 돌볼 줄 아는 부모입니다."`}
              </Typography>
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: THEME.typography.fontWeight.normal,
                fontSize: '8px',
                lineHeight: '1.2em',
                color: THEME.colors.text,
                textAlign: 'center'
              }}>
                — [내 아이를 위한 감정코칭] 中
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};