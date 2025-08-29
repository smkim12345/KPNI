import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface KPNITableProps {
  children?: React.ReactNode;
}

export const KPNITable = ({ children }: KPNITableProps) => {
  return (
    <TableContainer>
      <Table>
        {children}
      </Table>
    </TableContainer>
  );
};