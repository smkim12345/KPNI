import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

// --- 데이터 타입 정의 ---
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

// --- 스타일 정의 ---
const borderStyles = {
  'top-solid': { borderTop: '1.4px solid #000000' },
  'bottom-thin-solid': { borderBottom: '0.9px solid #000000' },
  'bottom-dashed': { borderBottom: `0.2px dashed ${THEME.colors.border.dash}` },
  'bottom-solid': { borderBottom: '1.4px solid #000000' },
  'top-and-bottom-thin-solid': {
    borderTop: '1.4px solid #000000',
    borderBottom: '0.9px solid #000000',
  },
};

// --- 컴포넌트 Props 타입 정의 ---
interface TableCellProps {
  width: string;
  backgroundColor: string;
  textColor?: string;
  children: React.ReactNode;
  textAlign?: 'center' | 'left' | 'right';
  paddingX?: number;
}

interface TableRowProps {
  borderType?: keyof typeof borderStyles;
  children: React.ReactNode;
}


// --- 컴포넌트 ---

const TableCell = ({
  width,
  backgroundColor,
  textColor = THEME.colors.text,
  textAlign = 'center',
  paddingX = 0,
  children,
}: TableCellProps) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: textAlign === 'left' ? 'flex-start' : textAlign,
      alignItems: 'center',
      width,
      height: '17.6px',
      backgroundColor,
      padding: `0 ${paddingX}px`,
      boxSizing: 'border-box',
    }}
  >
    <Typography
      sx={{
        fontSize: '10.8px',
        fontFamily: THEME.typography.fontFamily.pretendard,
        fontWeight: THEME.typography.fontWeight.semiBold,
        color: textColor,
        textAlign,
        width: '100%',
      }}
    >
      {children}
    </Typography>
  </Box>
);

const TableRow = ({ borderType, children }: TableRowProps) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      height: '17.6px',
      ...(borderType && borderStyles[borderType]),
    }}
  >
    {children}
  </Box>
);

export const ReliabilityTable = ({ data }: ReliabilityTableProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '638.1px',
        height: '55.4px',
      }}
    >
      {/* 첫 번째 행 - 결과신뢰수준 */}
      <TableRow borderType="top-and-bottom-thin-solid">
        <TableCell
          width="127.1px"
          backgroundColor={THEME.colors.primary}
          textColor={THEME.colors.mainWhite}
        >
          결과신뢰수준
        </TableCell>
        <TableCell
          width="62.2px"
          backgroundColor={THEME.colors.lightGray}
          textColor={THEME.colors.blue}
        >
          {data.level}
        </TableCell>
        <TableCell
          width="448.9px"
          backgroundColor={THEME.colors.mainWhite}
          textAlign="left"
          paddingX={10.8}
        >
          {data.description}
        </TableCell>
      </TableRow>

      {/* 두 번째 행 - 항목명 */}
      <TableRow borderType="bottom-dashed">
        {data.items.map((item, index) => (
          <TableCell
            key={`item-${index}`}
            width="159.5px"
            backgroundColor={
              index % 2 === 0
                ? THEME.colors.tableGreen1
                : THEME.colors.tableGreen2
            }
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
            width="159.5px"
            backgroundColor={
              index % 2 === 0
                ? THEME.colors.mainWhite
                : THEME.colors.lightGray
            }
            textColor={THEME.colors.blue}
          >
            {item.value}
          </TableCell>
        ))}
      </TableRow>
    </Box>
  );
};