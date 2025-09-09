import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';
import { SectionTitleBox } from '../UI/B_SectionTitle';
import { SubSectionTitle } from '../UI/B_SubSectionTitle';

/**
 * K-PNI 솔루션 섹션
 */
export const SolutionSection = () => {
  return (
    <Box sx={{
      width: '765.2px',
      height: '387.6px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '13.5px',
      boxSizing: 'border-box',
      gap: '13.5px'
    }}>
      {/* 섹션 제목 */}
      <SectionTitleBox title="3. 좋은 부모가 되기위한 여정" />

      {/* 메인 컨텐츠 영역 */}
      <Box sx={{
        display: 'flex',
        alignSelf: 'stretch',
        padding: '0 13.5px',
        flex: 1
      }}>
        {/* 왼쪽 영역 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '462.4px',
          gap: '21.6px'
        }}>

          {/* 좋은 부모의 특징 섹션 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '405.6px',
            gap: '13.5px',

          }}>
            <SubSectionTitle title="1. 좋은 부모의 특징" />
              {/* 아이콘들 */}
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '6.8px',
                width: '364.7px',
                height: '67.6px',
                alignItems: 'center',
                padding: '0 13.5px',
                //backgroundColor: 'blue' //영역 확인용
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '5.4px',
                  height: '67.6px',
                  justifyContent: 'space-between'
                }}>
                  <img src="/src/images/3-1-1.png" alt="존중 아이콘" style={{ width: '43.3px', height: '46.0px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: THEME.typography.fontSize.sm - 1.4,
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
                  gap: '5.4px',
                  height: '67.6px',
                  justifyContent: 'space-between'
                }}>
                  <img src="/src/images/3-1-2.png" alt="공감 아이콘" style={{ width: '46.0px', height: '54.1px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: THEME.typography.fontSize.sm - 1.4,
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
                  gap: '5.4px',
                  height: '67.6px',
                  justifyContent: 'space-between'
                }}>
                  <img src="/src/images/3-1-3.png" alt="일관성 아이콘" style={{ width: '50.0px', height: '47.3px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: THEME.typography.fontSize.sm - 1.4,
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
                  gap: '5.4px',
                  height: '67.6px',
                  justifyContent: 'space-between'
                }}>
                  <img src="/src/images/3-1-4.png" alt="회복력 아이콘" style={{ width: '43.3px', height: '50.0px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: THEME.typography.fontSize.sm - 1.4,
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
                  gap: '5.4px',
                  height: '67.6px',
                  justifyContent: 'space-between'
                }}>
                  <img src="/src/images/3-1-5.png" alt="성장 아이콘" style={{ width: '44.6px', height: '51.4px', objectFit: 'contain' }} />
                  <Typography sx={{
                    fontFamily: THEME.typography.fontFamily.pretendard,
                    fontWeight: THEME.typography.fontWeight.bold,
                    fontSize: THEME.typography.fontSize.sm - 1.4,
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
                height: '81.1px'
              }}>
                <Typography sx={{
                  fontFamily: THEME.typography.fontFamily.pretendard,
                  fontWeight: 300,
                  fontSize: THEME.typography.fontSize.sm - 1.4,
                  lineHeight: '1.33em',
                  color: THEME.colors.text,
                  whiteSpace: 'pre-line',
                  padding: '0 13.5px'
                }}>
                  {<>
                    ❖ <span style={{ fontWeight: 'bold' }}>존중</span> : 자녀를 '작은 어른'이 아닌, 고유한 인격체로 존중합니다.
                    <br />❖ <span style={{ fontWeight: 'bold' }}>공감</span> : 자녀의 말에 반응하고, 감정을 읽고, 마음을 헤아립니다.
                    <br />❖ <span style={{ fontWeight: 'bold' }}>일관성</span> : 기준이 흔들리지 않도록, 자녀가 예측할 수 있는 반응을 보여줍니다.
                    <br />❖ <span style={{ fontWeight: 'bold' }}>회복력</span> : 갈등이 생겼을 때 대화를 통해 관계를 다시 회복할 수 있습니다.
                    <br />❖ <span style={{ fontWeight: 'bold' }}>성장</span> : 자녀와 함께 배우고, 함께 성장하려는 자세를 가지고 있습니다.
                  </>}
                </Typography>
              </Box>
          </Box>

          {/* 완벽한 부모에 대한 생각 섹션 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '405.6px',
            gap: '6.8px'
          }}>
            <SubSectionTitle title="2. 완벽한 부모에 대한 생각 내려 놓기" />

            <Typography sx={{
              ...THEME.B_SECTION_DESCRIPTION,
              padding: '0 13.5px'
            }}>
              {<>
                <span style={{ fontWeight: 'bold' }}>세상에는 '완벽한 부모'는 없습니다.</span>
                <br />좋은 부모는 실수를 안 하는 부모가 아니라, 실수를 인정하고 다시 관계를 회복하려는 부모입니다. 좋은 부모는 자신의 부족함을 인정하고, 부족한 자신의 모습으로 인해 영향을 받는 자녀의 마음을 늘 헤아리고 생각하는 부모입니다.
                <br /><span style={{ fontWeight: 'bold' }}>양육은 정답이 아니라 '함께 만들어가는 길' 입니다.</span>
              </>}
            </Typography>
          </Box>
        </Box>

        {/* 오른쪽 영역 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '17.6px',
          flex: 1,
          position: 'relative'
        }}>
          {(() => {
            // 전체 크기 조절을 위한 기본 사이즈 (이 값만 변경하면 전체가 비례해서 조정됩니다)
            const baseSize = 200.1;
            const scale = baseSize / 227.1; // 기준 사이즈 대비 배율 계산

            return (
              <>
                {/* 가족 이미지와 장식 요소들 */}
                <Box sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: `${baseSize}px`,
                  height: `${baseSize}px`,
                  //backgroundColor: 'red'
                }}>
                  {/* 미묘한 원형 테두리 링 - 외부 */}
                  <Box sx={{
                    position: 'absolute',
                    width: `${baseSize + 16.3 * scale}px`,
                    height: `${baseSize + 16.3 * scale}px`,
                    borderRadius: '50%',
                    border: '1px solid rgba(114, 175, 129, 0.7)',
                    top: `${-9.5 * scale}px`,
                    left: `${-9.5 * scale}px`,
                    zIndex: 0
                  }} />

                  {/* 미묘한 원형 테두리 링 - 내부 */}
                  <Box sx={{
                    position: 'absolute',
                    width: `${baseSize + 8.1 * scale}px`,
                    height: `${baseSize + 8.1 * scale}px`,
                    borderRadius: '50%',
                    border: '1px solid rgba(114, 175, 129, 0.6)',
                    top: `${-5.4 * scale}px`,
                    left: `${-5.4 * scale}px`,
                    zIndex: 0
                  }} />

                  {/* 작은 포인트 도트들 */}
                  <Box sx={{
                    position: 'absolute',
                    top: `${10.8 * scale}px`,
                    right: `${33.8 * scale}px`,
                    width: `${12.2 * scale}px`,
                    height: `${12.2 * scale}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(114, 175, 129, 0.7)',
                    zIndex: 1
                  }} />

                  <Box sx={{
                    position: 'absolute',
                    bottom: `${20.3 * scale}px`,
                    left: `${27.0 * scale}px`,
                    width: `${6.8 * scale}px`,
                    height: `${6.8 * scale}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(114, 175, 129, 0.8)',
                    zIndex: 1
                  }} />

                  <Box sx={{
                    position: 'absolute',
                    top: `${33.8 * scale}px`,
                    left: `${16.2 * scale}px`,
                    width: `${5.4 * scale}px`,
                    height: `${5.4 * scale}px`,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(114, 175, 129, 0.7)',
                    zIndex: 1
                  }} />

                  {/* 가족 이미지 */}
                  <Box sx={{
                    width: `${baseSize}px`,
                    height: `${baseSize}px`,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0px ${5.4 * scale}px ${21.6 * scale}px rgba(0, 0, 0, 0.08)`,
                    border: `${2.7 * scale}px solid rgba(255, 255, 255, 0.9)`,
                    zIndex: 2
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
                </Box>
              </>
            );
          })()}

          {/* 인용구 박스 */}
          <Box sx={{
            position: 'relative',
            background: 'rgba(238, 238, 238, 0.9)',
            borderRadius: THEME.borderRadius.sm,
            padding: '8.1px 21.6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '202.8px',
            border: '2px solid rgba(114, 175, 129, 0.7)'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8.1px'
            }}>
              
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: 500,
                fontSize: THEME.typography.fontSize.sm,
                lineHeight: '1.2em',
                color: '#2D4A32',
                textAlign: 'center',
                whiteSpace: 'pre-line',
                letterSpacing: '-0.3px'
              }}>
                {`" 아이를 위한 가장 좋은 선물은,`}
                <br />
                <Box component="span" sx={{ fontWeight: 700 }}>
                  스스로를 돌볼 줄 아는 부모
                </Box>
                {`입니다. "`}
              </Typography>
              
              <Box sx={{
                width: '40.6px',
                height: '1.4px',
                background: `linear-gradient(90deg, transparent, rgba(114, 175, 129, 0.4), transparent)`,
              }} />
              
              <Typography sx={{
                fontFamily: THEME.typography.fontFamily.pretendard,
                fontWeight: THEME.typography.fontWeight.normal,
                fontSize: '10.1px',
                lineHeight: '1em',
                color: 'rgba(146, 146, 146, 0.9)',
                textAlign: 'center',
                fontStyle: 'italic',
                letterSpacing: '0.3px'
              }}>
                내 아이를 위한 감정코칭 中
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};