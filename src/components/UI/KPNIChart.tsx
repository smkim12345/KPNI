import { Box } from '@mui/material';

interface KPNIChartProps {
  children?: React.ReactNode;
}

export const KPNIChart = ({ children }: KPNIChartProps) => {
  return (
    <Box>
      {children}
    </Box>
  );
};