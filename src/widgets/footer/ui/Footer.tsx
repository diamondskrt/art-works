import { TwitterIcon, InstagramIcon, FacebookIcon } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 py-12 text-white dark:bg-blue-950">
      <div className="container">
        <div className="flex items-center justify-between">
          <small>© All Rights Reserved, {currentYear}</small>
          <div className="flex gap-4">
            <TwitterIcon className="h-4 w-4 shrink-0" />
            <InstagramIcon className="h-4 w-4 shrink-0" />
            <FacebookIcon className="h-4 w-4 shrink-0" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
