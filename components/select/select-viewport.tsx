import * as SelectPrimitive from '@radix-ui/react-select';
import * as React from 'react';

import { cn } from '~/lib/utils';

function SelectViewport({
  className,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Viewport> & {
  position?: 'popper' | 'item-aligned';
}) {
  return (
    <SelectPrimitive.Viewport
      className={cn(
        'p-1',
        position === 'popper' &&
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
        className
      )}
      {...props}
    />
  );
}

export { SelectViewport };
