import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-black mt-12  shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-evenly ">

        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white">RecipeHub</h4>
          <p className="text-sm">
            Delicious Recipes. Save your favourites. Share your flavors.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-white mb-3">Pages</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/category" className="hover:text-orange-400">Categories</Link></li>
            <li><Link href="/profile" className="hover:text-orange-400">Profile</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 py-4">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} RecipeHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
