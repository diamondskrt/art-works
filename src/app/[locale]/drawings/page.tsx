import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

import { Typography } from '~/components/typography';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function PathnamesPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('drawingsPage');

  return (
    <div className="container">
      {t.rich('description', {
        p: (chunks) => <Typography variant="p">{chunks}</Typography>,
      })}
    </div>
  );
}
