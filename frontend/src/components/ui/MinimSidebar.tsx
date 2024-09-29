"use client";

import { MinimFileExplorer } from "@/components/ui/MinimFileExplorer";
import { useState } from "react";
import { Divider } from "@nextui-org/divider";

export const MinimSidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(288);

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: any) => {
    const newWidth = e.clientX;
    if (newWidth >= 200 && newWidth <= 600) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex">
      <div style={{ width: sidebarWidth + 4 }} className="flex-shrink-0 pl-1">
        <MinimFileExplorer width={sidebarWidth} />
      </div>
      <div className="cursor-col-resize px-1" onMouseDown={handleMouseDown}>
        <Divider orientation="vertical" />
      </div>
    </div>
  );
};
