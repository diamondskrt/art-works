import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

function PageLayout({ children, title }: Props) {
  return (
    <div className="bg-slate-850 relative flex grow flex-col py-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1 left-0 size-[20500px] translate-x-[-47.5%] rounded-full bg-gradient-to-b from-slate-900 via-cyan-500" />
      </div>
      <div className="relative container flex grow flex-col px-4">
        <h1 className="text-3xl leading-tight font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
      </div>
    </div>
  );
}

export { PageLayout };
