"use client";

import { runtime } from '@/utils/runtime';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { } from '@nextui-org/react';
import { Maximize2, Minimize2, Minus, X } from 'lucide-react';
import { useState } from 'react';

export const MinimWindowsControls = () => {
  const [isMaximised, setIsMaximised] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMinimize = () => {
    runtime?.WindowMinimise();
  };

  const handleMaximizeRestore = () => {
    if (!runtime) return;
    runtime.WindowToggleMaximise();
    setIsMaximised(!isMaximised);
  };

  const handleClose = () => {
    runtime?.Quit();
  };

  return (
    <div className='h-full'>
      <ButtonGroup className="flex h-full items-center mb-[-1px]" isIconOnly variant='light' radius='none'>
        <Button
          onClick={handleMinimize}
          className='h-8 w-8'
          aria-label="Minimize"
        >
          <Minus size={12} />
        </Button>

        <Button
          onClick={handleMaximizeRestore}
          className='h-8 w-8'
          aria-label={isMaximised ? 'Restore' : 'Maximize'}
        >
          {isMaximised ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
        </Button>

        <Button
          color={isHovered ? 'danger' : 'default'}
          onClick={handleClose}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='h-8 w-8'
          aria-label="Close">
          <X size={12} />
        </Button>
      </ButtonGroup>
      <Divider orientation='horizontal' />
    </div>
  );
};