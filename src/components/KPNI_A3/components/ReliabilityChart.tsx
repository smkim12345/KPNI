import { Box } from '@mui/material';

interface ReliabilityChartProps {
  children?: React.ReactNode;
}

export const ReliabilityChart = ({ children }: ReliabilityChartProps) => {
  return (
    <Box>
      {children}
    </Box>
  );
};