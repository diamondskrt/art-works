import { useTranslations } from 'next-intl';

import { Typography } from '~/components/typography';

function BioSection() {
  const t = useTranslations('indexPage');

  return (
    <div className="section">
      <Typography variant="h4" className="mb-4 uppercase">
        BIO and CV
      </Typography>
      <Typography variant="small">
        {t.rich('description', {
          strong: (chunks) => (
            <Typography variant="strong">{chunks}</Typography>
          ),
        })}
      </Typography>
    </div>
  );
}

export { BioSection };
