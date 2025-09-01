import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

// 결과신뢰지표 데이터 타입
interface ReliabilityData {
  level: string;
  description: string;
  items: {
    name: string;
    value: string;
  }[];
}

interface ReliabilityTableProps {
  data: ReliabilityData;
}

// 개별 테이블 셀 컴포넌트
interface TableCellProps {
  width: string;
  backgroundColor: string;
  textColor?: string;
  children: React.ReactNode;
}

const TableCell = ({ width, backgroundColor, textColor = THEME.colors.text, children }: TableCellProps) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: '13px',
    backgroundColor
  }}>
    <Typography sx={{
      fontSize: `${THEME.typography.fontSize.sm - 1}px`,
      fontFamily: THEME.typography.fontFamily.pretendard,
      fontWeight: THEME.typography.fontWeight.semiBold,
      color: textColor,
      textAlign: 'center'
    }}>
      {children}
    </Typography>
  </Box>
);

// 테이블 행 컴포넌트
interface TableRowProps {
  borderType?: 'top-solid' | 'bottom-thin-solid' | 'bottom-dashed' | 'bottom-solid' | 'top-and-bottom-thin-solid';
  children: React.ReactNode;
}

const TableRow = ({ borderType, children }: TableRowProps) => {
  const getBorderStyle = () => {
    switch (borderType) {
      case 'top-solid':
        return { borderTop: '1px solid #000000' };
      case 'bottom-thin-solid':
        return { borderBottom: '0.7px solid #000000' };
      case 'bottom-dashed':
        return { borderBottom: '0.5px dashed #000000' };
      case 'bottom-solid':
        return { borderBottom: '1px solid #000000' };
      case 'top-and-bottom-thin-solid':
        return { 
          borderTop: '1px solid #000000',
          borderBottom: '0.7px solid #000000'
        };
      default:
        return {};
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      height: '13px',
      ...getBorderStyle()
    }}>
      {children}
    </Box>
  );
};

export const ReliabilityTable = ({ data }: ReliabilityTableProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: `${THEME.spacing.md}px`,
      width: '472px',
      height: '41px'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '472px',
        height: '41px'
      }}>
        {/* 첫 번째 행 - 결과신뢰수준 */}
        <TableRow borderType="top-and-bottom-thin-solid">
          <TableCell 
            width="94px" 
            backgroundColor={THEME.colors.primary}
            textColor={THEME.colors.mainWhite}
          >
            결과신뢰수준
          </TableCell>
          <TableCell 
            width="46px" 
            backgroundColor={THEME.colors.lightGray}
            textColor={THEME.colors.blue}
          >
            {data.level}
          </TableCell>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: '332px',
            height: '13px',
            backgroundColor: THEME.colors.mainWhite
          }}>
            <Typography sx={{
              fontSize: `${THEME.typography.fontSize.sm - 1}px`,
              fontFamily: THEME.typography.fontFamily.pretendard,
              fontWeight: THEME.typography.fontWeight.semiBold,
              color: THEME.colors.text,
              textAlign: 'center'
            }}>
              {data.description}
            </Typography>
          </Box>
        </TableRow>

        {/* 두 번째 행 - 항목명 */}
        <TableRow borderType="bottom-dashed">
          {data.items.map((item, index) => (
            <TableCell
              key={`item-${index}`}
              width="118px"
              backgroundColor={index % 2 === 0 ? THEME.colors.tableGreen1 : THEME.colors.tableGreen2}
            >
              {item.name}
            </TableCell>
          ))}
        </TableRow>

        {/* 세 번째 행 - 결과값 */}
        <TableRow borderType="bottom-solid">
          {data.items.map((item, index) => (
            <TableCell
              key={`value-${index}`}
              width="118px"
              backgroundColor={index % 2 === 0 ? THEME.colors.mainWhite : THEME.colors.lightGray}
              textColor={THEME.colors.blue}
            >
              {item.value}
            </TableCell>
          ))}
        </TableRow>
      </Box>
    </Box>
  );
};