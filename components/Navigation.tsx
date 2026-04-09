import Image from 'next/image';
import { Navigation as NavigationType, SiteSettings } from '@/types/contentful';

interface NavigationProps {
  navigation?: NavigationType;
  siteSettings?: SiteSettings | null;
}

export default function Navigation({ navigation, siteSettings }: NavigationProps) {
  const logo = siteSettings?.fields.logo;
  const siteName = siteSettings?.fields.siteName || 'Pizza Hut';

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <svg width="40" height="10" viewBox="0 0 120 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-auto">
                <path d="M118.757 25.2301C113.679 23.2501 98.8123 17.4112 92.9636 14.6599C92.6892 14.5308 92.4942 14.2783 92.4357 13.982C91.8466 10.988 90.7833 5.68101 90.1517 2.53715C89.8551 1.05999 88.552 0 87.0381 0H43.8758C42.7705 0 41.7461 0.569474 41.1688 1.50712C39.4036 4.3738 35.5557 10.626 33.495 13.9977C33.2892 14.334 33.0506 14.519 32.7007 14.6571C23.2183 18.3956 5.13746 24.3546 1.18514 25.6495C0.692047 25.8113 0.301683 26.1837 0.11593 26.6664C-0.317495 27.7919 0.518113 29 1.72945 29H118.036C118.881 29 119.632 28.4616 119.899 27.6637C120.228 26.6779 119.729 25.6092 118.757 25.2301Z" fill="#E91C24"/>
              </svg>
              {logo ? (
                <Image
                  src={`https:${logo.fields.file.url}`}
                  alt={logo.fields.title || siteName}
                  width={200}
                  height={60}
                  className="h-10 w-auto object-contain"
                  priority
                />
              ) : (
                <span className="text-xl font-extrabold text-ph-dark tracking-tight uppercase">
                  Pizza Hut
                </span>
              )}
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/menu"
              className="text-ph-dark hover:text-ph-red font-medium transition-colors"
            >
              Menu
            </a>
            <a
              href="/deals"
              className="text-ph-dark hover:text-ph-red font-medium transition-colors"
            >
              Deals
            </a>
            <a
              href="/delivery"
              className="text-ph-dark hover:text-ph-red font-medium transition-colors"
            >
              Delivery
            </a>
            <a
              href="/locations"
              className="text-ph-dark hover:text-ph-red font-medium transition-colors"
            >
              Locations
            </a>
            
            <a 
              href="/order" 
              className="bg-ph-red hover:bg-ph-red-dark text-white px-5 py-2 rounded-full font-semibold transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
