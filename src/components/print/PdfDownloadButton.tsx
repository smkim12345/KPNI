import { Box, Button, CircularProgress } from '@mui/material';
import type { RefObject } from 'react';
import { useEffect, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

interface PdfDownloadButtonProps {
  contentRef?: RefObject<HTMLElement | null>;
  isA3?: boolean;
  downloadFileName?: string;
}

export function PdfDownloadButton({ contentRef, isA3 = true, downloadFileName = 'KPNI' }: PdfDownloadButtonProps) {
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    if (!contentRef?.current) {
      return;
    }
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    const debounceDelay = 5000;
    const mutationObserver = new MutationObserver(() => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      setIsDomReady(false);
      debounceTimer = setTimeout(() => {
        mutationObserver.disconnect();
        waitForStableRender(() => setIsDomReady(true));
      }, debounceDelay);
    });
    mutationObserver.observe(contentRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      mutationObserver.disconnect();
    };
  }, [contentRef, isA3]);

  const print = useReactToPrint({
    contentRef: contentRef,
    pageStyle: `
      @page { size: ${isA3 ? '426mm 303mm' : 'A4'}; }
      @media print {
        .${isA3 ? 'a3page' : 'page'} {
          width: ${isA3 ? '426mm' : '210mm'};
          height: ${isA3 ? '303mm' : '297mm'};
          page-break-after: always;
        }
      }
    `,
    documentTitle: (downloadFileName || document.title) + (isA3 ? '_A3' : '_A4'),
  });

  const handlePrint = () => {
    const selector = isA3 ? '.a3page' : '.page';
    const isBulkPrint = (contentRef?.current?.querySelectorAll(selector) || []).length > 100;
    if (isBulkPrint) {
      if (confirm('대량 다운로드 시 로딩에 오랜 시간이 소요될 수 있습니다.')) {
        print();
      }
      return;
    }
    print();
  };

  if (!contentRef || !isDomReady) {
    return (
      <Box sx={{ display: 'flex' }} className="no-print">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Button variant={'contained'} onClick={() => handlePrint()} className="no-print">
        A3 인쇄하기
      </Button>
    </>
  );
}

function waitForStableRender(callback: () => void) {
  const waitFrames = 120;
  let rafCount = 0;
  const checkStable = () => {
    rafCount++;
    if (rafCount >= waitFrames) {
      callback();
    } else {
      requestAnimationFrame(checkStable);
    }
  };
  requestAnimationFrame(checkStable);
}

export default PdfDownloadButton;


