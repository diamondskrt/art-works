'use client';

import { useParams } from 'next/navigation';
import { useLocale, useTranslations, Locale } from 'next-intl';
import { useTransition } from 'react';

import { Select } from '~/components/select';
import { usePathname, useRouter } from '~/i18n/navigation';
import { routing } from '~/i18n/routing';

function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (value: string) => {
    const nextLocale = value as Locale;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <Select
      defaultValue={locale as string}
      label={t('label')}
      options={routing.locales.map((cur) => ({
        label: t('locale', { locale: cur }),
        value: cur,
      }))}
      disabled={isPending}
      triggerClassName="min-w-[80px]"
      onSelectChange={onSelectChange}
    />
  );
}

export { LocaleSwitcher };
