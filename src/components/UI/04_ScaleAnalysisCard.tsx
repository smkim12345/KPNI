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
  iconSize = '28px' // 기본값 28px
}: ScaleAnalysisCardProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      padding: '5px',
      backgroundColor,
      borderRadius: '15px 0 0 5px',
      height: '140px',
    }}>
      {/* 척도 분석 상위척도 정보 */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        width: '100%',
        minWidth: '252px'
      }}>
        {/* 아이콘 */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '3px',
          width: '18px',
          height: '18px',
          backgroundColor: iconColor,
          borderRadius: '30px',
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
          gap: '10px',
          flexShrink: 0
        }}>
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: THEME.typography.fontWeight.bold,
            fontSize: '12px',
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
        gap: '7px',
        paddingTop: '5px'
      }}>
        {/* 척도 분석 하위척도 테이블 전체 */}
        <Box sx={{
          width: '375px',
          minHeight: '102px',
          border: `1px solid ${borderColor}`,
          borderRadius: '6px',
          overflow: 'hidden',
          //backgroundColor: 'red'
        }}>

          {/* 하위척도 테이블 */}
          <Table sx={{
            borderCollapse: 'separate',
            borderSpacing: 0,
            
            '& .MuiTableCell-root': {
              borderBottom: `0.7px solid ${borderColor}`,
              borderRight: `0.7px solid ${borderColor}`,
              padding: '2px 3px',
              fontFamily: 'Pretendard Variable',
              fontSize: '7px',
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
                  width: '45px',
                  borderTopLeftRadius: '4px'
                }}>
                  하위 척도
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '20px'
                }}>
                  T점수
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '20px'
                }}>
                  백분위
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '28px'
                }}>
                  수준
                </TableCell>
                <TableCell sx={{
                  backgroundColor: tableBackgroundColor,
                  fontWeight: 600,
                  textAlign: 'center',
                  width: '220px',
                  borderTopRightRadius: '4px',
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
                    borderBottomLeftRadius: '5px'
                  },
                  '&:last-child .MuiTableCell-root:nth-of-type(5)': {
                    borderBottomRightRadius: '5px'
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
          width: '100px',
          height: '106px',
          backgroundColor: THEME.colors.white,
          borderRadius: '7px',
          position: 'relative',
          boxSizing: 'border-box',
          paddingTop: '16px'
        }}>
          {/* 종합소견 텍스트 */}
          <Typography sx={{
            fontFamily: THEME.typography.fontFamily.pretendard,
            fontWeight: 300,
            fontSize: '7px',
            lineHeight: '1.71em',
            color: THEME.colors.text,
            textAlign: 'left',
            width: '80px',

          }}>
            {summary}
          </Typography>
          
          {/* 종합소견 프레임 (태그) */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '8px',
            height: '6px',
            minWidth: 'fit-content',
            backgroundColor: borderColor,
            borderRadius: '28px',
            position: 'absolute',
            top: '-11px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            <Typography sx={{
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: 700,
              fontSize: '11px',
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