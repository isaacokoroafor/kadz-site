import { Edit, Menu, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { MainNav } from "./MainNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0 md:2/3">
        <ul className="flex items-center space-x-1">
          <li>
            <Link href="/menu">
              <div className="px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <div className="px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                <Search className="h-5 w-5" />
                {/* <span className="ml-2 text-sm font-bold">0</span> */}
                <span className="sr-only">Search</span>
              </div>
            </Link>
          </li>
        </ul>
        {/* site logo on navbar */}
        <div className="absolute right-1/2 translate-x-1/2 translate-y-4">
          <MainNav />
        </div>

        <ul className="flex items-center space-x-1">
          <li>
            <Link href="/shopping">
              <div className="px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </div>
            </Link>
          </li>

          {/* <ThemeToggle /> */}
          <li>
            {process.env.NODE_ENV === "development" && (
              <Link href="/studio">
                <div className=" px-3 rounded-md hover:bg-accent hover:text-accent-foreground">
                  <Edit className="h-5 w-5" />
                </div>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
