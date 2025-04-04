import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

import { AppLayout } from '~/widgets/app-layout';

import { BioSection, DrawingsSection, MainSection } from './ui';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default function IndexPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <AppLayout>
      <div className="container">
        <MainSection />
        <BioSection />
        <DrawingsSection />
      </div>
    </AppLayout>
  );
}
