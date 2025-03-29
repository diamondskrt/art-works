import Image from 'next/image';

function MainSection() {
  return (
    <div className="section">
      <div className="relative h-[500px]">
        <Image
          src="/assets/img/zaria-forman.webp"
          fill
          priority
          alt="Picture of the author"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export { MainSection };
