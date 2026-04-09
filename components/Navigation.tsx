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
    <nav className="bg-ph-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
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
                <span className="text-2xl font-bold text-white tracking-wide">
                  {siteName}
                </span>
              )}
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/menu"
              className="text-ph-light hover:text-ph-yellow font-medium transition-colors"
            >
              Menu
            </a>
            <a
              href="/deals"
              className="text-ph-light hover:text-ph-yellow font-medium transition-colors"
            >
              Deals
            </a>
            <a
              href="/delivery"
              className="text-ph-light hover:text-ph-yellow font-medium transition-colors"
            >
              Delivery
            </a>
            <a
              href="/locations"
              className="text-ph-light hover:text-ph-yellow font-medium transition-colors"
            >
              Locations
            </a>
            
            <a 
              href="/order" 
              className="bg-ph-red hover:bg-ph-red-light text-white px-5 py-2 rounded-full font-semibold transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
