"use client";

import { ConfigGetAvailableProfiles, ServicesSetSelectedProfile } from '@/wailsjs/go/app/App';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface ConfigContextType {
  availableProfiles: string[];
  selectedProfile: string;
  setSelectedProfile: (profile: string) => void;
}

export const ConfigContext = createContext<ConfigContextType>({
  availableProfiles: [],
  selectedProfile: '',
  setSelectedProfile: () => { }
});

export const ConfigProvider = ({ children }: { children: ReactNode; }) => {
  const [availableProfiles, _setAvailableProfiles] = useState<ConfigContextType['availableProfiles']>([]);
  const [selectedProfile, _setSelectedProfile] = useState<ConfigContextType['selectedProfile']>('');

  useEffect(() => {
    // init config data in ConfigProvider
    ConfigGetAvailableProfiles().then(_setAvailableProfiles);
  }, []);

  const setSelectedProfile = (profile: string) => {
    _setSelectedProfile(profile);
    ServicesSetSelectedProfile(profile);
  };

  return (
    <ConfigContext.Provider value={{ availableProfiles, selectedProfile, setSelectedProfile }}>
      {children}
    </ConfigContext.Provider>
  );
};
