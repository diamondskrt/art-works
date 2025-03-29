import { forwardRef } from 'react';

import { cn } from '~/lib/utils';

import { useFormField } from '../lib';

const FormMessage = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? '') : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-destructive text-sm font-medium', className)}
      {...props}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';

export { FormMessage };
