"use client";

import { MinimWindowsControls } from '@/components/ui/MinimWindowsControls';
import { RuntimeContext } from '@/providers/runtime';
import {
  Navbar,
  NavbarBrand
} from "@nextui-org/react";
import Image from "next/image";
import { useContext } from 'react';


export const MinimNavBar = () => {
  const { platform } = useContext(RuntimeContext);

  const isWindows = platform === "windows";

  return (
    <div className='flex h-8'>
      <Navbar isBordered className="draggable-header flex justify-between">
        <NavbarBrand className={isWindows ? "ml-4" : "ml-16"}>
          <Image
            src="/logo/logo_transparent.png"
            height={24}
            width={24}
            alt="Minimbus Logo"
          />
          <p className="font-light ml-2 text-sm">Minimbus</p>
        </NavbarBrand>
      </Navbar>
      {isWindows ? <MinimWindowsControls /> : null}
    </div>
  );
};
