import { Box, Typography } from '@mui/material';
import { THEME } from '../theme';

interface InputFieldProps {
  label: string;
  value: string;
}

export const InputField = ({ label, value }: InputFieldProps) => {
  return (
    <Box sx={{
      position: 'relative',
      width: '109px',
      height: '23px',
    }}>
      {/* 하단 구분선 */}
      <Box sx={{
        position: 'absolute',
        bottom: 0.5,
        left: 0,
        width: '109px',
        height: '0.5px',
        backgroundColor: THEME.colors.text,
      }} />
      
      {/* 라벨 */}
      <Typography sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        fontFamily: THEME.typography.fontFamily.ohsquareAir,
        fontWeight: THEME.typography.fontWeight.light,
        fontSize: '7px',
        lineHeight: THEME.typography.lineHeight.normal,
        color: THEME.colors.text,
      }}>
        {label}
      </Typography>
      
      {/* 값 */}
      <Typography sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        fontFamily: THEME.typography.fontFamily.ohsquareAir,
        fontWeight: THEME.typography.fontWeight.light,
        fontSize: '10px',
        lineHeight: THEME.typography.lineHeight.normal,
        textAlign: 'right',
        color: THEME.colors.text,
      }}>
        {value}
      </Typography>
    </Box>
  );
};