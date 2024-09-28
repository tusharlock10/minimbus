"use client";

import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";
import { useState } from "react";

export const MinimSidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(288); // Default width (72 * 4 = 288px)

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
      <div style={{ width: `${sidebarWidth}px` }} className="flex-shrink-0">
        <Accordion variant="splitted" selectionMode="multiple" className="flex">
          <AccordionItem className="bg-content2" key="1" aria-label="Accordion 1" title="Accordion 1">
            <Button variant="ghost" fullWidth radius="sm">
              Browse S3
            </Button>
          </AccordionItem>
          <AccordionItem className="bg-content2" key="2" aria-label="Accordion 2" title="Accordion 2">
            Accordion test
          </AccordionItem>
          <AccordionItem className="bg-content2" key="3" aria-label="Accordion 3" title="Accordion 3">
            Accordion test
          </AccordionItem>
        </Accordion>
      </div>
      <Divider
        orientation="vertical"
        className="cursor-col-resize transition-colors duration-300 hover:bg-primary" // Smooth transition with primary color on hover
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};
