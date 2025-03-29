import { forwardRef } from 'react';

import { cn } from '~/lib/utils';

import { useFormField } from '../lib';

const FormDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
});

FormDescription.displayName = 'FormDescription';

export { FormDescription };
