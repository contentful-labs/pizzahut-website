export default function TopBanner() {
  return (
    <div className="bg-ph-red-dark text-white py-2 px-4 border-b border-ph-yellow/20">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
        <a
          href="/menu"
          className="text-sm font-medium hover:text-ph-yellow transition-colors"
        >
          MENU
        </a>
        <a
          href="/deals"
          className="text-sm font-medium hover:text-ph-yellow transition-colors"
        >
          DEALS
        </a>
        <a
          href="/delivery"
          className="text-sm font-medium hover:text-ph-yellow transition-colors"
        >
          DELIVERY
        </a>
        <a
          href="/locations"
          className="text-sm font-medium hover:text-ph-yellow transition-colors"
        >
          LOCATIONS
        </a>
      </div>
    </div>
  );
}
