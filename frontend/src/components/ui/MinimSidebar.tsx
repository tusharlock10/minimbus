import { ConfigAutocomplete } from '@/components/cloudServices/ConfigAutocomplete';

export const MinimSidebar = () => {
  return (
    <div className="bg-content1 h-[calc(100vh-2.5rem)] overflow-auto">
      <ConfigAutocomplete />
    </div>
  );
};
