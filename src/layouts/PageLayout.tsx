import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

function PageLayout({ children, title }: Props) {
  return (
    <div className="container px-4">
      <h1 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
        {title}
      </h1>
      <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
    </div>
  );
}

export { PageLayout };
