'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

import { Typography } from '~/components/typography';
import { Link } from '~/i18n/navigation';
import { cn } from '~/lib/utils';

function NavigationLink({
  href,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'transition-colors',
        isActive
          ? 'text-muted-foreground'
          : 'text-primary hover:text-muted-foreground'
      )}
      href={href}
      {...props}
    >
      <Typography variant="small" className="uppercase">
        {children}
      </Typography>
    </Link>
  );
}

export { NavigationLink };
