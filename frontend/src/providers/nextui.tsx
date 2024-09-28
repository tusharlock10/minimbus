'use client';

import { NextUIProvider as NUP } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function NextUIProvider({ children }: { children: React.ReactNode; }) {
  const router = useRouter();

  return (
    <NUP navigate={router.push}>
      {children}
    </NUP>
  );
}