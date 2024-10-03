"use client";

import { ConfigContext } from '@/providers/cloudServices/config';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { useContext } from 'react';

export const ConfigAutocomplete = () => {
  const { availableConfigs, selectedConfig, setSelectedConfig } = useContext(ConfigContext);

  return (
    <Autocomplete
      label="Select a profile"
      placeholder='my-profile'
      labelPlacement='outside'
      className='py-2 px-4'
      inputValue={selectedConfig ?? ""}
      size='sm'
      variant='flat'
      onInputChange={setSelectedConfig}
      radius='full'
      listboxProps={{
        emptyContent: "No profile found"
      }}
      onSelectionChange={console.log}
    >
      {availableConfigs.map((config, index) => (
        <AutocompleteItem onSubmit={console.log} key={index} value={config}>
          {config}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};