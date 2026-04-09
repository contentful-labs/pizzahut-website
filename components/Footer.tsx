export default function Footer() {
  return (
    <footer className="bg-ph-red-dark text-ph-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Menu</h3>
            <ul className="space-y-2">
              <li><a href="/pizza" className="hover:text-ph-yellow transition-colors">Pizza</a></li>
              <li><a href="/wings" className="hover:text-ph-yellow transition-colors">Wings</a></li>
              <li><a href="/sides" className="hover:text-ph-yellow transition-colors">Sides &amp; Breadsticks</a></li>
              <li><a href="/pasta" className="hover:text-ph-yellow transition-colors">Pasta</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Deals</h3>
            <ul className="space-y-2">
              <li><a href="/deals" className="hover:text-ph-yellow transition-colors">Today&apos;s Deals</a></li>
              <li><a href="/coupons" className="hover:text-ph-yellow transition-colors">Coupons</a></li>
              <li><a href="/rewards" className="hover:text-ph-yellow transition-colors">Hut Rewards</a></li>
              <li><a href="/group-ordering" className="hover:text-ph-yellow transition-colors">Group Ordering</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">About</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-ph-yellow transition-colors">Our Story</a></li>
              <li><a href="/nutrition" className="hover:text-ph-yellow transition-colors">Nutrition Info</a></li>
              <li><a href="/careers" className="hover:text-ph-yellow transition-colors">Careers</a></li>
              <li><a href="/franchise" className="hover:text-ph-yellow transition-colors">Franchise</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Order Now</h3>
            <p className="text-ph-light/80 mb-4">
              No one out-pizzas the Hut. Order online for delivery or carryout.
            </p>
            <a 
              href="/order" 
              className="inline-block bg-ph-red hover:bg-ph-red-light text-white px-5 py-2 rounded-md font-semibold transition-colors"
            >
              Start Your Order
            </a>
          </div>
        </div>
        <div className="border-t border-ph-slate/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ph-light/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pizza Hut. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-ph-light/70 hover:text-ph-yellow transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-ph-light/70 hover:text-ph-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
