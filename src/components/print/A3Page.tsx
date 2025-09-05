import type { ReactNode } from 'react';

interface A3PageProps {
  children: ReactNode;
}

export function A3Page({ children }: A3PageProps) {
  return <div className="a3page">{children}</div>;
}

export default A3Page;


