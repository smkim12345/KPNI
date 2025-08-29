import { Box } from '@mui/material';

interface ScaleItemProps {
  children?: React.ReactNode;
}

export const ScaleItem = ({ children }: ScaleItemProps) => {
  return (
    <Box>
      {children}
    </Box>
  );
};