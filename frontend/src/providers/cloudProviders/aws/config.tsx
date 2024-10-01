"use client";

import { AwsConfigGetAvailableProfiles } from '@/wailsjs/go/app/App';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface AwsConfigContextType {
  availableConfigs: string[];
  selectedConfig: string | null;
  setSelectedConfig: Dispatch<SetStateAction<string | null>>;
}

export const AwsConfigContext = createContext<AwsConfigContextType>({
  availableConfigs: [],
  selectedConfig: null,
  setSelectedConfig: () => { }
});

export const AwsConfigProvider = ({ children }: { children: ReactNode; }) => {
  const [availableConfigs, _setAvailableConfigs] = useState<AwsConfigContextType['availableConfigs']>([]);
  const [selectedConfig, setSelectedConfig] = useState<AwsConfigContextType['selectedConfig']>(null);

  useEffect(() => {
    // init config data in AwsConfigProvider
    AwsConfigGetAvailableProfiles().then(_setAvailableConfigs);
  }, []);

  return (
    <AwsConfigContext.Provider value={{ availableConfigs, selectedConfig, setSelectedConfig }}>
      {children}
    </AwsConfigContext.Provider>
  );
};
