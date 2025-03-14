'use client';

import { HeroUIProvider as HUP } from "@heroui/react";
import { useRouter } from 'next/navigation';

export function HeroUIProvider({ children }: { children: React.ReactNode; }) {
  const router = useRouter();

  return (
    <HUP navigate={router.push}>
      {children}
    </HUP>
  );
}