import * as LabelPrimitive from '@radix-ui/react-label';
import { forwardRef } from 'react';

import { Label } from '~/components/label';
import { cn } from '~/lib/utils';

import { useFormField } from '../lib';

const FormLabel = forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});

FormLabel.displayName = 'FormLabel';

export { FormLabel };
