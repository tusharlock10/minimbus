import { ConfigAutocomplete } from '@/components/cloudProviders/aws/ConfigAutocomplete';
import { AwsConfigProvider } from '@/providers/cloudProviders/aws/config';

export default function Home() {
  return (
    <AwsConfigProvider>
      <ConfigAutocomplete />
    </AwsConfigProvider>
  );
}
