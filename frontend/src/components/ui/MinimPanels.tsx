"use client";

import { ReactNode } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { MinimMainView } from './MinimMainView';
import { MinimNavBar } from './MinimNavBar';
import { MinimSidebar } from './MinimSidebar';

export const MinimPanels = ({ children }: { children: ReactNode; }) => {
  return (
    <>
      <MinimNavBar />
      <PanelGroup direction="horizontal" tagName='div'>
        <Panel defaultSize={30} minSize={20} maxSize={40} collapsedSize={0} collapsible>
          <MinimSidebar />
        </Panel>
        <PanelResizeHandle className='w-1 bg-content2' />
        <Panel defaultSize={70}>
          <MinimMainView>
            {children}
          </MinimMainView>
        </Panel>
      </PanelGroup>
    </>
  );
};