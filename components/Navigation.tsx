import Image from 'next/image';
import { Navigation as NavigationType, SiteSettings } from '@/types/contentful';

interface NavigationProps {
  navigation?: NavigationType;
  siteSettings?: SiteSettings | null;
}

const menuLinks = [
  { label: 'Deals', href: '/deals' },
  { label: 'Pizza', href: '/pizza' },
  { label: 'Melts', href: '/melts' },
  { label: 'Wings', href: '/wings' },
  { label: 'Sides', href: '/sides' },
  { label: 'Pasta', href: '/pasta' },
  { label: 'Desserts', href: '/desserts' },
  { label: 'Drinks', href: '/drinks' },
];

export default function Navigation({ navigation, siteSettings }: NavigationProps) {
  const logo = siteSettings?.fields.logo;
  const siteName = siteSettings?.fields.siteName || 'Pizza Hut';

  return (
    <nav className="sticky top-0 z-50">
      {/* Top bar: logo, sign in, cart */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2">
            <svg width="48" height="12" viewBox="0 0 120 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-auto">
              <path d="M118.757 25.2301C113.679 23.2501 98.8123 17.4112 92.9636 14.6599C92.6892 14.5308 92.4942 14.2783 92.4357 13.982C91.8466 10.988 90.7833 5.68101 90.1517 2.53715C89.8551 1.05999 88.552 0 87.0381 0H43.8758C42.7705 0 41.7461 0.569474 41.1688 1.50712C39.4036 4.3738 35.5557 10.626 33.495 13.9977C33.2892 14.334 33.0506 14.519 32.7007 14.6571C23.2183 18.3956 5.13746 24.3546 1.18514 25.6495C0.692047 25.8113 0.301683 26.1837 0.11593 26.6664C-0.317495 27.7919 0.518113 29 1.72945 29H118.036C118.881 29 119.632 28.4616 119.899 27.6637C120.228 26.6779 119.729 25.6092 118.757 25.2301Z" fill="#E91C24"/>
            </svg>
            {logo && (
              <Image
                src={`https:${logo.fields.file.url}`}
                alt={logo.fields.title || siteName}
                width={200}
                height={60}
                className="h-10 w-auto object-contain"
                priority
              />
            )}
          </a>

          <div className="flex items-center gap-4">
            <a href="/account" className="hidden sm:flex items-center gap-2 text-ph-dark hover:text-ph-red transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-sm font-medium">Sign In / Join</span>
            </a>
            <a href="/cart" className="flex items-center gap-1 text-ph-dark hover:text-ph-red transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121 0 2.09-.773 2.34-1.872l1.816-7.977A1.125 1.125 0 0 0 21.732 3H7.106M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="text-sm font-bold">$0.00</span>
            </a>
          </div>
        </div>
      </div>

      {/* Menu category pills */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 py-2.5 overflow-x-auto scrollbar-hide">
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex-shrink-0 bg-white text-ph-dark font-semibold text-sm px-5 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
