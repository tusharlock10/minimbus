import { ConfigAutocomplete } from '@/components/cloudProviders/aws/ConfigAutocomplete';
import { MinimNavBar } from "@/components/ui/MinimNavBar";
import { MinimSidebar } from "@/components/ui/MinimSidebar";
import { AwsConfigProvider } from '@/providers/cloudProviders/aws/config';

export default function Home() {
  return (
    <AwsConfigProvider>
      <MinimNavBar />
      <div className='flex'>
        <div className="flex min-h-screen">
          <MinimSidebar />
        </div>
        <div className='flex'>
          <ConfigAutocomplete />
        </div>
      </div>
    </AwsConfigProvider>
  );
}
