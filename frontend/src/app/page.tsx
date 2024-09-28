import { MinimFileExplorer } from '@/components/ui/MinimFileExplorer';
import { MinimSidebar } from "@/components/ui/MinimSidebar";
import { MinimnNavBar } from "@/components/ui/MininNavBar";

export default function Home() {
  return (
    <>
      <MinimnNavBar />
      <div className="flex flex-cols min-h-screen">
        <MinimSidebar />
        <MinimFileExplorer />
      </div>
    </>
  );
}
