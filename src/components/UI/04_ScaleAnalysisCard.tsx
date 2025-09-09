import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { THEME } from '../theme';
import { ScaleResultSummary } from './04_ScaleResultChip';

interface ScaleResultData {
  tScore: string;
  percentile: string;
  level: string;
}

interface SubScaleData {
  name: string;
  tScore: number;
  percentile: string;
  level: string;
  interpretation: string;
}

interface ScaleAnalysisCardProps {
  title: string;
  iconColor: string;
  backgroundColor: string;
  tableBackgroundColor: string;
  borderColor: string;
  summary: string;
  iconSrc: string;
  scaleResults: ScaleResultData; // 상위척도 결과 요약 데이터
  subScaleData: SubScaleData[]; // 하위척도 데이터
  iconSize?: string; // 아이콘 크기 (선택사항, 기본값: '30px')
}

export const ScaleAnalysisCard = ({
  title,
  iconColor,
  backgroundColor,
  tableBackgroundColor,
  borderColor,
  summary,
  iconSrc,
  scaleResults,
  subScaleData,
  iconSize = '38px' // 기본값
}: ScaleAnalysisCardProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      padding: '6.8px',
      backgroundColor,
      borderRadius: '20.4px 6.8px 6.8px 6.8px',
      height: '189.3px'
    }}>
      {/* 척도 분석 상위척도 정보 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '9.5px',
        width: '100%',
        minWidth: '340.7px'
      }}>
        {/* 아이콘 */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '13.5px',
          padding: '4.1px',
          width: '24.3px',
          height: '24.3px',
          backgroundColor: iconColor,
          borderRadius: '40.6px',
          flexShrink: 0
        }}>
          <Box
            component="img"
            src={iconSrc}
            alt={`${title} 아이콘`}
            sx={{
              width: iconSize,
              height: iconSize,
              objectFit: 'contain'
            }}
          />
        </Box>
        
        {/* 제목 */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '13.5px',
          flexShrink: 0
        }}>
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.bold,
            fontSize: '16.2px',
            lineHeight: '1em',
            color: THEME.colors.text,
            textAlign: 'left'
          }}>
            {title}
          </Typography>
        </Box>
        
        {/* 상위척도 결과 요약 */}
        <Box sx={{ flexShrink: 1, minWidth: 0 }}>
          <ScaleResultSummary
            scaleResults={scaleResults}
            borderColor={borderColor}
          />
        </Box>
      </Box>
      
      {/* 척도 분석 척도 소견 종합 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: '9.5px',
        paddingTop: '6.8px'
      }}>
        {/* 척도 분석 하위척도 테이블 전체 */}
        <Box sx={{
          width: '507.0px',
          minHeight: '137.9px',
          border: `1.4px solid ${borderColor}`,
          borderRadius: '8.1px',
          overflow: 'hidden',
          //backgroundColor: 'red'
        }}>

          {/* 하위척도 테이블 */}
          <Table sx={{
            borderCollapse: 'separate',
            borderSpacing: 0,
            
            '& .MuiTableCell-root': {
              borderBottom: `0.9px solid ${borderColor}`,
              borderRight: `0.9px solid ${borderColor}`,
              padding: '2.7px 3px',
              fontFamily: 'Pretendard Variable',
              fontSize: `${THEME.typography.fontSize.xs-0.1}px`,
              lineHeight: '1em',
              //backgroundColor: 'blue'
            },
            '& .MuiTableCell-root:last-child': {
              borderRight: 'none',
            }
          }}>
            
            
            <TableHead>
              <TableRow>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '60.8px',
                  borderTopLeftRadius: '5.4px'
                }}>
                  하위 척도
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '27.0px'
                }}>
                  T점수
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '27.0px'
                }}>
                  백분위
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '37.9px'
                }}>
                  수준
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '297.4px',
                  borderTopRightRadius: '5.4px',
                  borderRight: 'none'
                }}>
                  하위 척도 소견
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subScaleData.map((row, index) => (
                <TableRow key={index} sx={{
                  '&:last-child .MuiTableCell-root': {
                    borderBottom: 'none'
                  },
                  '&:last-child .MuiTableCell-root:first-of-type': {
                    borderBottomLeftRadius: '6.8px'
                  },
                  '&:last-child .MuiTableCell-root:nth-of-type(5)': {
                    borderBottomRightRadius: '6.8px'
                  }
                }}>

                  {/* 하위척도 이름 */}
                  <TableCell sx={{
                    backgroundColor: backgroundColor,
                    fontWeight: 500,
                    textAlign: 'left',
                    wordBreak: 'keep-all'
                  }}>
                    {row.name}
                  </TableCell>

                  {/* 하위척도 T점수 */}
                  <TableCell sx={{
                    backgroundColor: '#FFFFFF',
                    fontWeight: 600,
                    textAlign: 'center'
                  }}>
                    {row.tScore}
                  </TableCell>

                  {/* 하위척도 백분위 */}
                  <TableCell sx={{
                    backgroundColor: '#FFFFFF',
                    fontWeight: 400,
                    textAlign: 'center'
                  }}>
                    {row.percentile}
                  </TableCell>

                  {/* 하위척도 수준 */}
                  <TableCell sx={{
                    backgroundColor: '#FFFFFF',
                    fontWeight: 400,
                    textAlign: 'center'
                  }}>
                    {row.level}
                  </TableCell>

                  {/* 하위척도 소견 */}
                  <TableCell sx={{
                    backgroundColor: '#FFFFFF',
                    fontWeight: 300,
                    textAlign: 'left',
                    lineHeight: '1em',
                    borderRight: 'none'
                  }}>
                    {row.interpretation}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        
        {/* 척도 분석 종합소견 */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '135.2px',
          height: '143.3px',
          backgroundColor: THEME.colors.white,
          borderRadius: '9.5px',
          position: 'relative',
          boxSizing: 'border-box',
          padding: '21.6px 13.5px',
        }}>
          {/* 종합소견 텍스트 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: 300,
            fontSize: '9.5px',
            lineHeight: '1.71em',
            color: THEME.colors.text,
            textAlign: 'left',
            width: '146.0px',

          }}>
            {summary}
          </Typography>
          
          {/* 종합소견 프레임 (태그) */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '13.5px',
            padding: '10.8px',
            height: '8.1px',
            minWidth: 'fit-content',
            backgroundColor: borderColor,
            borderRadius: '37.9px',
            position: 'absolute',
            top: '-14.9px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: 700,
              fontSize: '14.9px',
              lineHeight: '1.09em',
              color: THEME.colors.mainWhite,
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}>
              종합 소견
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};