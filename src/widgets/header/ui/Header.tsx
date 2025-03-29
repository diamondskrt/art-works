import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '~/components/local-switcher';
import { ThemeSwitcher } from '~/components/theme-switcher';
import { Typography } from '~/components/typography';

import { NavigationLink } from './NavigationLink';
import { Profile } from './Profile';

function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <div>
          <Typography variant="h3" className="uppercase">
            Kanzafarova Elvira
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/drawings">{t('drawings')}</NavigationLink>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher />
          <Profile />
        </div>
      </nav>
    </header>
  );
}

export { Header };
