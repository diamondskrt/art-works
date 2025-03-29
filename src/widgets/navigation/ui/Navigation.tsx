import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '~/components/local-switcher';
import { ThemeSwitcher } from '~/components/theme-switcher';

import { NavigationLink } from './NavigationLink';

function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="bg-slate-850">
      <nav className="container flex items-center justify-between p-2">
        <div>
          <h1 className="text-2xl uppercase">Kanzafarova Elvira</h1>
        </div>
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </nav>
    </div>
  );
}

export { Navigation };
