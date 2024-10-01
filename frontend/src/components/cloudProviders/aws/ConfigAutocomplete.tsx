"use client";

import { AwsConfigContext } from '@/providers/cloudProviders/aws/config';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { useContext } from 'react';

export const ConfigAutocomplete = () => {
  const { availableConfigs, selectedConfig, setSelectedConfig } = useContext(AwsConfigContext);

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        label="Select a profile"
        className="max-w-xs"
        inputValue={selectedConfig ?? ""}
        onInputChange={setSelectedConfig}
      >
        {availableConfigs.map((config, index) => (
          <AutocompleteItem key={index} value={config}>
            {config}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};