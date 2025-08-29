import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { THEME } from './theme';
import type { ReactNode } from 'react';

const PageContainer = styled(Container)({
  width: '100vw',
  height: '100vh',
  backgroundColor: THEME.layout.a3.pageBackground,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FrameBox = styled(Box)({
  position: 'relative',
  width: `1191px`,
  height: `847px`,
  backgroundColor: THEME.colors.white,
});

const BorderContainer = styled(Box)({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const BorderElement = styled(Box)({
  position: 'absolute',
  backgroundColor: THEME.colors.primary,
});

const TopBorder = styled(BorderElement)({
  top: 0,
  left: 0,
  width: '100%',
  height: `${THEME.layout.border.thickness}px`,
});

const BottomBorder = styled(BorderElement)({
  bottom: 0,
  left: 0,
  width: '100%',
  height: `${THEME.layout.border.thickness}px`,
});

const LeftBorder = styled(BorderElement)({
  top: 0,
  left: 0,
  width: `${THEME.layout.border.thickness}px`,
  height: '100%',
});

const RightBorder = styled(BorderElement)({
  top: 0,
  right: 0,
  width: `${THEME.layout.border.thickness}px`,
  height: '100%',
});

const CornerBox = styled(BorderElement)({
  top: 0,
  left: 0,
  width: `185px`,
  height: `403px`,  
  borderRadius: `0px 0px 52px 0px`,
});

interface A3PageProps {
  children?: ReactNode;
}

export const A3Page = ({ children }: A3PageProps) => {
  return (
    <PageContainer maxWidth={false}>
      <FrameBox>
        <BorderContainer>
          <CornerBox />
          <TopBorder />
          <BottomBorder />
          <LeftBorder />
          <RightBorder />
        </BorderContainer>
        {children}
      </FrameBox>
    </PageContainer>
  );
};