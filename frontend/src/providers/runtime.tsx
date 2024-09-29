"use client";

import { runtime } from '@/utils/runtime';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';

interface RuntimeContextType {
  platform: string | null;
  buildType: string | null;
}

export const RuntimeContext = createContext<RuntimeContextType>({
  buildType: null,
  platform: null
});


export const RuntimeProvider: FC<{ children: ReactNode; }> = ({ children }) => {
  const [buildType, setBuildType] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);

  useEffect(() => {
    runtime.Environment().then((res: RuntimeContextType) => {
      setBuildType(res.buildType);
      setPlatform(res.platform);
    });
  }, []);

  return <RuntimeContext.Provider value={{ buildType, platform }}>
    {children}
  </RuntimeContext.Provider>;
};