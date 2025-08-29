import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface KPNIResultTitleProps {
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export const KPNIResultTitle = ({ title, icon, children }: KPNIResultTitleProps) => {
  return (
    <Box>
      {children}
    </Box>
  );
};