import {
  Navbar,
  NavbarBrand
} from "@nextui-org/react";

import Image from "next/image";

export const MinimnNavBar = () => {
  return (
    <Navbar isBordered className="draggable-header flex justify-between" height={48}>
      <NavbarBrand className="ml-16">
        <Image
          src="/logo/logo_transparent.png"
          height={34}
          width={34}
          alt="Minimbus Logo"
        />
        <p className="font-bold ml-2">Minimbus</p>
      </NavbarBrand>
    </Navbar>
  );
};
