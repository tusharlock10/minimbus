"use client";

import { ConfigGetAvailableProfiles } from '@/wailsjs/go/app/App';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface ConfigContextType {
  availableConfigs: string[];
  selectedConfig: string | null;
  setSelectedConfig: Dispatch<SetStateAction<string | null>>;
}

export const ConfigContext = createContext<ConfigContextType>({
  availableConfigs: [],
  selectedConfig: null,
  setSelectedConfig: () => { }
});

export const ConfigProvider = ({ children }: { children: ReactNode; }) => {
  const [availableConfigs, _setAvailableConfigs] = useState<ConfigContextType['availableConfigs']>([]);
  const [selectedConfig, setSelectedConfig] = useState<ConfigContextType['selectedConfig']>(null);

  useEffect(() => {
    // init config data in ConfigProvider
    ConfigGetAvailableProfiles().then(_setAvailableConfigs);
  }, []);

  return (
    <ConfigContext.Provider value={{ availableConfigs, selectedConfig, setSelectedConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
