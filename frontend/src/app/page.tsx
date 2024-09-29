import { MinimFileExplorer } from '@/components/ui/MinimFileExplorer';
import { MinimNavBar } from "@/components/ui/MinimNavBar";
import { MinimSidebar } from "@/components/ui/MinimSidebar";

export default function Home() {
  return (
    <>
      <MinimNavBar />
      <div className="flex flex-cols min-h-screen">
        <MinimSidebar />
        <MinimFileExplorer />
      </div>
    </>
  );
}
