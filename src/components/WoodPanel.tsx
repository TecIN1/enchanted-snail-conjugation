
import React from 'react';
import { cn } from '@/lib/utils';

interface WoodPanelProps {
  className?: string;
  children: React.ReactNode;
}

const WoodPanel: React.FC<WoodPanelProps> = ({ className, children }) => {
  return (
    <div className={cn(
      "wood-panel relative overflow-hidden",
      "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOUI1OTJFIJ48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4QjRBMjMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] before:opacity-10",
      className
    )}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default WoodPanel;
