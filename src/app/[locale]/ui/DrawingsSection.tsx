'use client';

import Image from 'next/image';

import { Typography } from '~/components/typography';
import { usePictures } from '~/lib/api';

export function DrawingsSection() {
  const { data: pictures, isLoading, error } = usePictures();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <div className="section">
      <Typography variant="h4" className="mb-4 uppercase">
        Drawings
      </Typography>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pictures?.map(({ id, title, description, imgUrl }) => (
          <div key={id} className="rounded-lg border p-2">
            <div className="relative h-48">
              <Image src={imgUrl} alt={title} fill className="object-cover" />
            </div>
            <h2 className="mt-2 text-lg font-semibold">{title}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
