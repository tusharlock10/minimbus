import { ReactNode } from 'react';

export const MinimMainView = ({ children }: { children: ReactNode; }) => {
  return <div className="h-[calc(100vh-2.5rem)] overflow-auto">
    {children}
  </div>;
};