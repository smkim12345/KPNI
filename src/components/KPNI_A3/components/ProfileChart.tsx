import { Box } from '@mui/material';

interface ProfileChartProps {
  children?: React.ReactNode;
}

export const ProfileChart = ({ children }: ProfileChartProps) => {
  return (
    <Box>
      {children}
    </Box>
  );
};